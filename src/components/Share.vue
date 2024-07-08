<style lang="less" scoped>
@import '~@/styles/colors.less';
.share-container {
  .share-wrapper {
    padding: 15px;
    width: 100vw;
    .header {
      height: 2.55rem;
      width: 100%;
      background-position: center center;
      background-size: cover;
    }
    .invite-wrapper {
      margin-top: .1rem;
      display: flex;
      align-items: center;
      font-size: 15px;
      img {
        height: 32px;
        width: 32px;
        display: block;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
    .username{
      color: #00C35A;
    }
    .circle-name {
      font-weight: bold;
      font-size: 16px;
      margin-top: .1rem;
      text-align: left;
      text-align: justify;
    }
    .circle-desc {
      font-size: 14px;
      color: #4F5077;
      margin-top: .1rem;
    }
    .footer {
      margin-top: .1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .share-text-img {
        display: block;
        height: 72px;
      }
      .qr-code {
        display: block;
        height: 88px;
        width: 88px;
        border-radius: 50%;
        margin-right: 15px;
      }
    }
    .tips {
      color: #ACADBB;
      font-size: 13px;
      background: #EFEFEF;
      line-height: 13px;
      padding: 15px 0;
      width: 90%;
      margin: 0 auto;
      margin-top: 15px;
      border-radius: 20px;
      text-align: center;
    }
  }
  .save-button {
    position: absolute;
    bottom: -60px;
    background: #00C35A;
    width: 80%;
    color: white;
    text-align: center;
    border-radius: 20px;
    left: 50%;
    transform: translate(-50%);
    padding: 10px 0;
  }
  .draw-img {
    display: block;
    width: 100%;
    user-select: auto;
    pointer-events: auto;
  }
  .icon--close {
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translate(-50%);
    color: @gray;
  }
}
</style>
<template>
  <div class="share-container">
    <div v-if="!shareUrl" class="share-wrapper" id="capture">
      <div class="header" :style="{'backgroundImage': 'url(' +  circleImage + ')'}"></div>
      <div class="invite-wrapper">
        <img :src="avatar" alt="">
        <span class="username">{{userName}}</span>邀请你加入
      </div>
      <div class="circle-name">{{circleName}}</div>
      <!-- <div class="circle-desc">
        我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述
      </div> -->
      <div class="footer">
        <img src="~@/assets/share-circle.png" alt="" class="share-text-img">
        <img :src="qrCode" alt="" class="qr-code">
      </div>
      <div class="tips">
        长按识别小程序加入圈子
      </div>
    </div>
    <img v-if="shareUrl" :src="shareUrl" alt="" class="draw-img">
    <div class="save-button" v-if="shareUrl">
      长按上方图片保存到手机
    </div>
    <van-icon v-if="shareUrl" name="close" class="icon--close" size="25px" @click="onClose"></van-icon>
  </div>
</template>
<script>
import html2canvas from 'html2canvas'



let loadImage = url => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    /* 这一句, 在加载之后, 绘制到 canvas 里面是必须的 */
    img.crossOrigin = 'anonymous'
    /* 这一句, 在微信里面好像是必须的, 可他吗的 */
    img.src = `${url}?t=${+new Date()}`
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function (err) {
      console.log('image load error', err)
      reject(err)
    }
  })
}
let getBase64 = (img, ratio = 1) => {

    let canvas = document.createElement('canvas')
    let context = canvas.getContext('2d');
    let w = img.width * ratio
    let h = img.height * ratio
    canvas.width = w
    canvas.height = h
    context.drawImage(img, 0, 0, w, h)
    return canvas.toDataURL('image/png',0.6);
}




export default {
  name: 'Share',
  components: {},
  props: {
    shareUrl: {
      default: '',
    },
  },
  data() {
    return {
      drawUrl: '',
      qrCode: '',
      circleName: '',
      circleImage: '',
      avatar: '',
      userName: '',
      qrCode: ''
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    /* 绘制海报, 生成图片 */
    async draw(circleId, data) {
      let that = this;
      
      this.circleImage = data.circleImg;
      this.circleName = data.circleName;
      this.avatar = data.avatar;
      this.userName = data.userName;
      this.qrCode = data.qrCode

      this.$toast.loading('生成中...')

      this.circleImage = await loadImage(this.circleImage).then(img => {
        return getBase64(img, 0.6)
      })

      this.qrCode = await loadImage(this.qrCode).then(img => {
        return getBase64(img, 0.3)
      })


      this.avatar = await loadImage(this.avatar).then(img => {
        return getBase64(img, 0.3)
      })


      this.$toast.clear()
      this.$toast.loading('创建中...')

      return new Promise((resolve) => {
        that.$toast.clear()
        // if (that.drawUrl) {
        //   resolve(that.drawUrl)
        //   return;
        // }
          let doms = document.querySelectorAll("#capture");

        setTimeout(() => {
          html2canvas(doms[doms.length-1], {
            useCORS: true,
            allowPaint: true
          }).then(canvas => {
            that.drawUrl = canvas.toDataURL('image/png')
            resolve(that.drawUrl)
          })
        }, 100)
      })
    },
  },
}
</script>