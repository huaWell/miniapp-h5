<style lang="less" scoped>
  @import '~@/styles/colors.less';
.map-picker-container {
  height: 100vh;
  width: 100vw;
    .cancel-button {
      position: absolute;
      top: 10px;
      left: 15px;
      z-index: 10000;
    }
    .confirm-button {
      position: absolute;
      top: 10px;
      right: 15px;
      z-index: 10000;
    }
  .tencent-map {
    height: 45vh;
    width: 100vw;
    position: relative;
  }
  .address-list {
    height: 55vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    .address-item {
      display: flex;
      align-items: center;
      .flex {
        flex: 1;
      }
      .text {
        max-width: 80%;
      }
    }
  }
}
/deep/ .rotate-circle {
  display: none;
}
</style>
<template>
  <div class="map-picker-container">
    <van-button class="cancel-button" size="small" @click="onCancelPosition"> 取消 </van-button>
    <van-button class="confirm-button" type="primary" size="small" @click="onSavePosition"> 确定 </van-button>
    <div class="tencent-map" id="tencent-map">
    </div>
    <div class="address-list">
      <van-search v-model="searchValue" placeholder="搜索地点" @search="onSearch" @clear="onClear" @input="onInput"></van-search>
      <van-cell-group v-if="searchList.length">
        <van-cell v-for="(item, key) in searchList" :key="key" @click="onClickAddress(item)">
          <div slot="title" class="address-item">
            <span class="text">{{item.name}}</span>
            <span class="flex"></span>
            <van-checkbox v-model="item.checked" v-show="item.checked"></van-checkbox>
          </div>
        </van-cell>
      </van-cell-group>
      <van-cell-group v-if="searchList.length == 0">
        <van-cell v-for="(item, key) in addressList" :key="key" @click="onClickAddress(item)">
          <div slot="title" class="address-item">
            <span class="text">{{item.name}}</span>
            <span class="flex"></span>
            <van-checkbox v-model="item.checked" v-show="item.checked"></van-checkbox>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
/*
1, 格式化代码
2, 去掉 console
3, 实现效果:
  地图拖动, 但是点保持不动
  地图拖动结束之后, 能够重新获取 marker 所在的位置, 然后重新拿到 addresslist
4, 看看地图为啥定位不准确
*/
/* wx js sdk 获取经纬度 */
// let getLocation = () => {
//   return new Promise((resolve, reject) => {
//     wx.getLocation({
//       type: 'gcj02',
//       success: function(res) {
//         var latitude = res.latitude;
//         var longitude = res.longitude;
//         var speed = res.speed;
//         var accuracy = res.accuracy;
//         resolve({
//           latitude,
//           longitude
//         })
//       }
//     });
//   })
// }
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
// /* 
//   用来判断拖动是否需要更新 
//   从而实现只在初始化的时候更新一下位置
//   地图拖动的时候保持位置不动
// */
// let needUpdateMarkerPosition = true
// myMarker.prototype.updateDOM = function() {
//   if (!this.map) {
//     return;
//   }
//   if (!needUpdateMarkerPosition) {
//     return;
//   }
//   let pixel = this.map.projectToContainer(this.position);
//   let left = pixel.getX() - this.dom.clientWidth / 2 + 'px';
//   let top = pixel.getY() + 'px';
//   this.dom.style.top = top;
//   this.dom.style.left = left;
//   needUpdateMarkerPosition = false
// }
import qs from 'querystring'
import { forEach } from 'lodash'
// import getLocation from '@/modules/getLocation'
export default {
  name: 'MapPicker',
  components: {},
  data() {
    return {
      latitude: '',
      longitude: '',
      addressList: [],
      checkedAddress: {},
      /* 地图相关组件 */
      map: {},
      control: null,
      marker: {},
      /* 搜索 */
      searchValue: '',
      searchList: []
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      setTimeout(async () => {
        try {
          /* 先拿到当前经纬度 */
          // let res = await getLocation()
          this.latitude = this.$route.query.latitude
          this.longitude = this.$route.query.longitude
          /* 渲染地图 */
          this.map = new TMap.Map(document.getElementById('tencent-map'), {
            rotation: 20,
            pitch: 0,
            zoom: 16,
            center: new TMap.LatLng(this.latitude, this.longitude)
          });
          // /* 创建 marker */
          // this.marker = new myMarker({
          //   map: this.map,
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
          this.map.on('panstart', () => {
            console.log('panstart', 'rigoul')
          })
















          /* 监听地图拖动事件, 以在地图拖动结束之后, 可以重新获取对应地址列表 */
          this.map.on('panend', () => {
            let newCenter = this.map.getCenter()
            this.latitude = newCenter.lat;
            this.longitude = newCenter.lng;



      // this.marker.updateGeometries([{
      //   id: 1,
      //   "position": new TMap.LatLng(this.latitude, this.longitude),
      // }])



            // this.fetchAddressList()
          })
          /* 移除缩放控件 */
          this.removeControl()
          /* 根据经纬度, 拿到对应的地址列表 */
          this.fetchAddressList()
        } catch (err) {
          console.error(err.message, 'initMap')
        }
      }, 100)
    },
    async fetchAddressList() {
      let res = await this.$jsonp(`https://apis.map.qq.com/ws/place/v1/explore`, {
        key: 'WAGBZ-WFB34-3ZBUD-DQXXN-HGIY6-XHBBK',
        output: 'jsonp',
        boundary: `nearby(${this.latitude},${this.longitude},500,1)`
      })
      this.addressList = []
      forEach(res.data, address => {
        this.addressList.push({
          name: address.address,
          latitude: address.location.lat,
          longitude: address.location.lng,
          checked: false
        })
      })
      
      /* 默认选中第一个地址 */
      // this.onClickAddress(this.addressList[0])

      this.addressList[0].checked = true;
      this.checkedAddress = this.addressList[0]



    },
    onClickAddress(address) {
      forEach(this.addressList, address => {
        address.checked = false;
      })
      address.checked = true;
      this.checkedAddress = address

      this.map.setCenter(new TMap.LatLng(this.checkedAddress.latitude, this.checkedAddress.longitude))

      this.marker.updateGeometries([{
        id: 1,
        "position": new TMap.LatLng(this.checkedAddress.latitude, this.checkedAddress.longitude),
      }])

      // this.isClickedAddress = true;


    },
    onSavePosition() {
      sessionStorage.setItem('selectLocation', JSON.stringify(this.checkedAddress))
      /* 避免下次进来不刷新位置了 */
      // needUpdateMarkerPosition = true
      this.$router.back()
    },
    onCancelPosition() {
      this.checkedAddress = {}
      sessionStorage.setItem('selectLocation', JSON.stringify(this.checkedAddress))
      /* 避免下次进来不刷新位置了 */
      // needUpdateMarkerPosition = true
      this.$router.back()
    },
    removeControl() {
      if (!this.map.getControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM)) {
        return;
      }
      this.map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM);
    },
    /* -------------------------------搜索-------------------------------*/
    async onSearch() {
      let searchValue = this.searchValue.trim()
      if (searchValue) {
        let res = await this.$jsonp(`https://apis.map.qq.com/ws/place/v1/suggestion`, {
          key: 'WAGBZ-WFB34-3ZBUD-DQXXN-HGIY6-XHBBK',
          keyword: searchValue,
          output: 'jsonp',
          boundary: `nearby(${this.latitude},${this.longitude},500,1)`
        })
        this.searchList = []
        forEach(res.data, address => {
          this.searchList.push({
            name: address.address,
            latitude: address.location.lat,
            longitude: address.location.lng,
            checked: false
          })
        })
      } else {
        this.onClear()
      }
    },
    onClear() {
      this.searchList = []
      this.searchValue = ''
    },
    onInput() {
      this.onSearch()
    }
  }
}

</script>
