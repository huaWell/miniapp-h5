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
    flex: 1;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
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
  .desc-block {
    header {
      padding: 0 15px;
    }
  }
.ac-wrapper {
  padding: 10px 15px;
  .good {
    // width: 33.33%;
    width: calc((100vw - 30px - 20px) / 3);
    float: left;
    position: relative;
    margin-bottom: 12px;
    &:nth-child(3n+2) {
      margin: 0 10px;
    };
    .inner {
      height: 100%;
      width: 100%;
      background-size: cover;
      border-radius: 12px;
   
    }
    .checkbox {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 100;
    }
  }
}
</style>
<template>
  <div class="publish-container">
    <div class="body">
      <van-cell-group title="有什么新鲜事?" :border="false">
        <van-field type="textarea" rows="5" maxlength="150" show-word-limit v-model="content" placeholder="在此输入你的新鲜事"></van-field>
      </van-cell-group>
      <van-cell-group title="图片(可选)" :border="false">
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
      <van-cell-group title="展示宝贝" :border="false">
        <van-cell :value="selectedGood.name || '请选择'" @click="onChooseProduction" is-link title="选择自己要展示的宝贝" />
      </van-cell-group>
    </div>
    <van-button class="my-van-button" round size="large" type="primary" @click="onGenerator"> 发布 </van-button>
    <!-- 选择商品 -->
    <van-action-sheet v-model="showGood" @close="onClose" title="选择宝贝">
      <div class="ac-wrapper clearfix">
        <div class="good" v-for="(good, key) in goods" :key="key" @click="onSelect(good)">
          <square :hwRatio="1" width="100%">
            <div class="inner" :style="{'backgroundImage': 'url(' + good.headImg + ')'}"></div>
            <van-checkbox v-model="good.selected" class="checkbox"></van-checkbox>
          </square>
          <div class="name text-overflow--2" style="margin-top:4px;font-size: 14px;">{{good.name}}</div>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
const MAX_COUNT = 9;
import chooseImage from '@/modules/chooseImage'
import uploadImage from '@/modules/uploadImage'
import qs from 'querystring'
import isPlainObj from '@/utils/isPlainObj'
export default {
  name: 'Publish',
  computed: {
    disabledUploadImage() {
      return MAX_COUNT - this.images.length - this.localIds.length == 0
    }
  },
  data() {
    return {
      content: '',
      images: [],
      goods: [],
      title: '',
      localIds: [],
      groupId: 0,
      showGood: false,
      goodId: 0,
      selectedGood: {}
    }
  },
  mounted() {
    this.groupId = this.$route.query.groupId
    console.log(this.groupId)
    this.getGoods()
  },
  methods: {
    /*-----------------------------图片上传-----------------------------*/
    async onChooseImage() {
      let localIds = await chooseImage(MAX_COUNT - this.images.length - this.localIds.length);
      /* 用 localId 换 serverId */
      let serverIds = await Promise.all(localIds.map(localId => {
        return uploadImage(localId)
      }))
      this.$toast.loading('图片上传中...')
      this.images = await Promise.all(serverIds.map(serverId => {
        return this.L.wxUploadImage(serverId).then(res => {
          return res.image
        })
      }))
  
      this.$toast.clear()
      /* 用 serverId 换图片 */
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
    async getGoods() {
      let res = await this.D.fetchMyGoods()
      this.goods = res.dataList;
    },
    async onChooseProduction() {
      this.showGood = true
    },
    async onGenerator() {
      if (!this.content.trim()) {
        this.$toast('请输入新鲜事')
        return
      }
      // if (isPlainObj(this.selectedGood)) {
      //   this.$toast('请选择宝贝')
      //   return;
      // }
      let data = {
        content: this.content,
        imgList: this.images,
        groupId: this.groupId,
        productId: this.selectedGood.id
      }
      let res = await this.D.fetchCreateFresh(data)
      console.log(res)
      this.$toast.success('创建成功')
      this.$router.back()
    },
    onClose(e) {},
    onSelect(good) {
      let selected = !good.selected
      _.forEach(this.goods, item => {
        item.selected = false
      })
      good.selected = selected
      this.showGood = false;
      if (selected) {
        this.selectedGood = good
      } else {
        this.selectedGood = {};
      }
      this.$forecUpdate()
    }
  }
}
</script>