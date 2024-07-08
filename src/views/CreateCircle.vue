<style lang="less" scoped>
  @import '~@/styles/colors.less';
.publish-container {
  background: white;
  height: 100vh;
  overflow: hidden;
  padding-bottom: calc(env(safe-area-inset-bottom));

  display: flex;
  flex-direction: column;

  .body {
    padding-top: 15px;
    flex: 1;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }



  .upload-image-block {
    margin: 0 15px;
    height: 180px;
    background: @bgGray;
    color: @fontGray;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    background-position: center center;
    background-size: cover;
  }
  .desc-block {
    margin-top: 20px;
    padding-top: 10px;
    header {
      padding: 0 15px;
    }
  }
  .map-block {
    margin: 0 15px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 6px;
    overflow: hidden;
    background: @bgGray;
    .address-name {
      font-weight: bold;
      padding: 10px 0;
      padding-top: 0;
      display: flex;
      align-items: center;
      .text {
        max-width: 90%;
      }
      .flex {
        flex: 1;
      }
    }
    .tencent-map {
      height: 160px;
      width: 100%;
    }
  }
}
/deep/ .rotate-circle {
  display: none;
}
</style>
<template>
  <div class="publish-container">
    <div class="body">
      
    
    <div class="upload-image-block" @click="onChooseImage" :style="{'backgroundImage': 'url(' + image + ')'}">
      <van-icon name="photo" v-if="!image"></van-icon>
    </div>
    <div class="desc-block van-hairline--bottom van-hairline--top">
      <header>申请理由</header>
      <van-field type="textarea" rows="5" maxlength="150" show-word-limit v-model="remark" placeholder="请输入申请理由"></van-field>
    </div>
    <div class="map-block" @click="onChooseLocation">
      <div class="address-name">
        <span class="text text-overflow--1">{{address.name}}</span>
        <span class="flex"></span>
        <van-icon name="arrow" />
      </div>
      <div class="tencent-map" id="tencent-map"></div>
    </div>
    </div>
    <van-button class="my-van-button" round size="large" type="primary" @click="onGenerator"> 创建 </van-button>
  </div>
</template>
<script>
// /*------------------------------------- 自定义marker -------------------------------------*/
// function myMarker(options) {
//   let mydom;
//   TMap.DOMOverlay.call(this, options);
// }
// myMarker.prototype = new TMap.DOMOverlay();
// myMarker.prototype.onInit = function(options) {
//   this.position = options.position;
//   this.type = options.type;
// }
// myMarker.prototype.createDOM = function() {
//   let mydom = document.createElement('img');
//   mydom.src = 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png';
//   mydom.style.cssText = [
//     'position: absolute;',
//     'top:  0px;',
//     'left: 0px;'
//   ].join('');
//   return mydom;
// }
// myMarker.prototype.updateDOM = function() {
//   if (!this.map) {
//     return;
//   }
//   let pixel = this.map.projectToContainer(this.position);
//   let left = pixel.getX() - this.dom.clientWidth / 2 + 'px';
//   let top = pixel.getY() + 'px';
//   this.dom.style.top = top;
//   this.dom.style.left = left;
// }
const MAX_COUNT = 1;
import chooseImage from '@/modules/chooseImage'
import uploadImage from '@/modules/uploadImage'
import getLocation from '@/modules/getLocation'
import qs from 'querystring'
import isPlainObj from '@/utils/isPlainObj'
export default {
  name: 'Publish',
  watch: {
    '$route'(n, o) {
      if (n.path != '/create-circle') {
        return
      }
      if (o.path == '/map-picker') {
        /* 尝试解析选中的地址 */
        let t = {}
        try {
          t = JSON.parse(sessionStorage.getItem('selectLocation')) || {}
          sessionStorage.removeItem('selectLocation')
        } catch (err) {
          t = {}
        }
        if (!isPlainObj(t)) {
          /* 赋值给当前页面 */
          this.address = t;   
          this.latitude = this.address.latitude
          this.longitude = this.address.longitude
          // new TMap.Map(document.getElementById('tencent-map'), {
          //   rotation: 20,
          //   pitch: 0,
          //   zoom: 16,
          //   center: new TMap.LatLng(this.latitude, this.longitude)
          // });
          // this.renderMap()


      this.map.setCenter(new TMap.LatLng(this.address.latitude, this.address.longitude))

      this.marker.updateGeometries([{
        id: 1,
        "position": new TMap.LatLng(this.address.latitude, this.address.longitude),
      }])






        }

      }
    }
  },
  data() {
    return {
      image: '',
      remark: '',
      latitude: '',
      longitude: '',
      /* 地图相关组件 */
      address: {},
      map: {},
      marker: {}
    }
  },
  async mounted() {
    try {
      let res = await getLocation()
      this.latitude = res.latitude
      this.longitude = res.longitude
    } catch (err) {
      console.log(err)
    }
    this.renderMap()
    this.fetchAddressName()
  },
  methods: {
    /*------------------------------------图片上传------------------------------------*/
    async onChooseImage() {
      let localIds = await chooseImage(MAX_COUNT);
      this.$toast.loading('封面上传中...')
      /* 用 localId 换 serverId */
      let serverIds = await Promise.all(localIds.map(localId => {
        return uploadImage(localId)
      }))
      /* 用 serverId 换图片 */
      let res = await this.L.wxUploadImage(serverIds[0])
      this.$toast.clear()
      this.$toast('上传成功')
      this.image = res.image
    },
    onPreviewImage(current) {
      if (!this.image) {
        return
      }
      wx.previewImage({
        current,
        urls: [this.image]
      })
    },
    onDelImage(url) {},
    /*------------------------------------地图渲染------------------------------------*/
    renderMap() {
      setTimeout(async () => {
        try {
          /* 渲染地图 */
          this.map = new TMap.Map(document.getElementById('tencent-map'), {
            rotation: 20,
            pitch: 0,
            zoom: 16,
            center: new TMap.LatLng(this.latitude, this.longitude)
          });
          // /* 创建 marker */
          // new myMarker({
          //   map: map,
          //   position: new TMap.LatLng(this.latitude, this.longitude),
          // });


//创建并初始化MultiMarker
this.marker = new TMap.MultiMarker({
    map: this.map,  //指定地图容器
    // //样式定义
    // styles: {
    //     //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
    //     "myStyle": new TMap.MarkerStyle({ 
    //         "width": 25,  // 点标记样式宽度（像素）
    //         "height": 35, // 点标记样式高度（像素）
    //         "src": '../img/marker.png',  //图片路径
    //         //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
    //         "anchor": { x: 16, y: 32 }  
    //     }) 
    // },
    //点标记数据数组
    geometries: [{
        "id": "1",   //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
        // "styleId": 'myStyle',  //指定样式id
        "position": new TMap.LatLng(this.latitude, this.longitude),  //点标记坐标位置
        "properties": {//自定义属性
            "title": "marker1"
        }
    }
    ]
});
















          /* 监听地图拖动事件, 以在地图拖动结束之后, 可以重新获取对应地址列表 */
          /* 移除缩放控件 */
          this.map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM);
          /* 根据经纬度, 拿到对应的地址列表 */
        } catch (err) {
          console.error(err.message, 'initMap')
        }
      }, 100)
    },
    async fetchAddressName() {
      let res = await this.$jsonp(`https://apis.map.qq.com/ws/place/v1/explore`, {
        key: 'WAGBZ-WFB34-3ZBUD-DQXXN-HGIY6-XHBBK',
        output: 'jsonp',
        boundary: `nearby(${this.latitude},${this.longitude},500,1)`
      })
      this.address = {
        name: res.data[0].address,
        latitude: res.data[0].location.lat,
        longitude: res.data[0].location.lng
      }
    },
    /* 选择地址 */
    async onChooseLocation() {
      this.$router.push({
        path: '/map-picker',
        query: {
          latitude: this.latitude,
          longitude: this.longitude
        }
      })
    },
    async onGenerator() {
      if (isPlainObj(this.address)) {
        this.$toast('请先选择位置')
        return;
      }
      if (!this.remark.trim()) {
        this.$toast('请填写申请理由')
      }
      /* 先上传图片 */
      try {
        let params = {
          image: this.image,
          point: [this.longitude, this.latitude],
          remark: this.remark
        }
        this.$toast.loading('创建中...')
        let res = await this.R.fetchGroupCreate(params);
        this.$toast.clear()
        this.$toast.success('创建成功')
        this.$delay(() => {
          Object.assign(this, this.$options.data())
          this.$router.back()
        })
      } catch (err) {
        console.error(err, 'err', err.message)
        this.$toast.fail('发生了一些错误...')
      }
    }
  }
}

</script>
