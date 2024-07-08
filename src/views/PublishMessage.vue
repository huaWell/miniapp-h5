<style lang="less" scoped>
@import '~@/styles/colors.less';
.publish-container {
  background: @bgGray;
  min-height: 100vh;
  .preview-box {
    width: 25%;
    float: left;
    overflow: hidden;
    .inner {
      width: 100%;
      padding-bottom: 100%;
      position: relative;
      .content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon--close {
          position: absolute;
          top: 0;
          right: 0;
          color: @fontGray;
        }
      }
      .upload-btn {
        border: 1px dashed #ebebeb;
        font-size: 40px;
        background: @bgGray;
      }
      .image-preview {
        img {
        display: block;
        height: 100%;
        width: 100%;
        }
      }
    }
  }
}
</style>
<template>
  <div class="publish-container">


    <van-cell-group title="公告标题">
      <van-field v-model="title" placeholder="请输入公告标题"></van-field>
    </van-cell-group>

    <van-cell-group title="描述">
      <van-field type="textarea" v-model="remark" placeholder="请输入公告描述"></van-field>
    </van-cell-group>


    <van-cell-group title="图片(可选)" v-if="false">
      <van-cell>
        <div slot="title">
          <div class="preview-box" v-for="(img, key) in images" :key="key" @click="onPreviewImage(img)">
            <div class="inner">
              <div class="content image-preview">
                <img :src="img" alt="">
                <van-icon name="close" class="icon--close" size="20px" @click.stop="onDelImage(img)" />
              </div>
            </div>
          </div>
          <!-- localIds -->
          <div class="preview-box" v-for="(img, key) in localIds" :key="key" @click="onPreviewImage(img)">
            <div class="inner">
              <div class="content image-preview">
                <img :src="img" alt="">
                <van-icon name="close" class="icon--close" size="20px" @click.stop="onDelImage(img)" />
              </div>
            </div>
          </div>
          <div class="preview-box" @click="onChooseImage" v-show="!disabledUploadImage">
            <div class="inner">
              <div class="content upload-btn">
                <span style="position: relative; top:-7px;font-weight: bold;color:#D2D2D2">+</span>
              </div>
            </div>
          </div>
        </div>
      </van-cell>
    </van-cell-group>


    <van-button class="my-van-button" round size="large" type="primary" @click="onGenerator"> 创建 </van-button>
  </div>
</template>
<script>
const MAX_COUNT = 1;
import chooseImage from '@/modules/chooseImage'
import uploadImage from '@/modules/uploadImage'
import qs from 'querystring'
export default {
  name: 'Publish',
  computed: {
    disabledUploadImage() {
      return MAX_COUNT - this.images.length - this.localIds.length == 0
    }
  },
  data() {
    return {
      title: '',
      images: [],
      localIds: [],
      remark: '',
      groupId: 0
    }
  },
  mounted(){
    this.groupId = this.$route.query.groupId
    console.log(this.groupId)
  },
  methods: {
    /*-----------------------------图片上传-----------------------------*/
    async onChooseImage() {
      let localIds = await chooseImage(MAX_COUNT - this.images.length - this.localIds.length);
      this.localIds = this.localIds.concat(localIds)
    },
    async uploadImage() {
      this.$toast.loading('上传图片中...')
      let serverIds = await Promise.all(this.localIds.map(localId => {
        return uploadImage(localId)
      }))
      return await Promise.all(serverIds.map(serverId => {
        return this.R.wxUploadImage(serverId).then(res => {
          return res.image
        })
      }))
    },
    onPreviewImage(current) {
      let images = this.images.concat(this.localIds)
      wx.previewImage({
        current,
        urls: images
      })
    },
    onDelImage(url) {
      let k = this.images.indexOf(url)
      if (k >= 0) {
        this.images.splice(k, 1)
      }
      let j = this.localIds.indexOf(url)
      if (j >= 0) {
        this.localIds.splice(j, 1)
      }
    },
    async onChooseLocation() {
      let getLocation = () => {
        return new Promise((resolve, reject) => {
          wx.getLocation({
            type: 'wgs84',
            success: function(res) {
              var latitude = res.latitude;
              var longitude = res.longitude;
              var speed = res.speed;
              var accuracy = res.accuracy;
              console.log(res, 'getLocation')
              resolve({
                latitude,
                longitude
              })
            }
          });
        })
      }
      let userLocation = await getLocation()
      let name = '这是一个测试name'
      console.log(userLocation, name)
      console.log(qs.stringify({
        ...userLocation,
        name: encodeURIComponent(name)
      }))
      return
      wx.miniProgram.navigateTo({
        url: `/pages/choose-location/main?${qs.stringify({
    ...userLocation,
    name: encodeURIComponent(name)
  })}`
      })
    },
    async onGenerator() {
       let data = {
        content: this.remark,
        groupId: this.groupId,
        title: this.title
      }
      console.log(data)
      let res = await this.D.fetchCreatePost(data)
      console.log(res)
      this.$toast.success('创建成功')
      this.$router.back()
    }
  }
}

</script>
