<style lang="less" scoped>
    .share-container{
        padding: 16px;
        box-sizing: border-box;
        background: #eee;
        width: 100vw;
        height: 100vh;

        .share-wrapper{
            width: 100%;
            background-color: #fff;
            border-radius: 8px;
            margin-top: 100vh;
            .share-title{
                display: flex;
                // align-items: center;
                // justify-content: center;
                flex-direction: column;
                padding: 16px;
                box-sizing: border-box;
                font-size: 24px;
                font-weight: bold;
                background-color: #00C35A;
                color: #fff;
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;
            }
    .content-container {
        padding: 16px;
        box-sizing: border-box;
        .head{
            display: flex;
            align-items: center;
            .avatar{
                width: 16px;
                height: 16px;
                display: block;
                border-radius: 50%;
            }
            .name {
                font-size: 14px;
                color: #000;
                margin-left: 4px;
            }
            .flex{
                flex: 1;
            }
            .price{
                font-size: 16px;
                font-weight: bold;
                color: red;
            }
        }
        .content{
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .title{
                display: flex;
                align-items: center;
                font-size: 16px;
                font-weight: bold;
                color: #000;
            }
            .decs{
                margin-top: 8px;
                font-size: 14px;
                color: #000;
                line-height: 20px;
                letter-spacing: 1px;
            }
            .image{
                display: block;
                border-radius: 8px;
                margin-top: 24px;
                width: 100%;
            }
        }
      
    }
    .footer{
            display: flex;
            align-items: center;
            background: #f9f9f9;
            padding: 16px 16px;
            box-sizing: border-box;
            margin-top: 4px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            .left{
                border: 1px solid #ddd;
                box-sizing: border-box;
                background-color: #fff;
                padding: 8px;
                border-radius: 4px;
                .qrCode{
                    width: 80px;
                    height: 80px;
                    display: block;
                    border-radius: 8px;
                }
            }
            .right{
                display: flex;
                align-items: center;
                margin-left: 6px;
                font-size: 14px;
                color: #a4a4a4;
                flex-direction: column;
                .text{
                    line-height: 24px;
                }
            }
        }
        }
    }
    .save-button {
    position: absolute;
    bottom: 20px;
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
    border-radius: 16px;
  }
  .icon--close {
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translate(-50%);
    color: #a7afbb;
  }
</style>

<template>
    <div class="share-container" >
        <div class="share-wrapper" ref="capture" id="capture" v-if="!showImage">
            <div class="share-title">
                出圈儿闲置
                <!-- <div class="title2">与有趣的邻居交流美好的生活</div> -->
            </div>
            <div class="content-container">
                <div class="head">
                    <img class="avatar" :src="avatar" alt="">
                    <span class="name">{{name}}</span>
                    <span class="flex"></span>
                    <span class="price">¥{{price}}</span>
                </div>
                <div class="content">
                    <div class="title">{{title}}</div>
                    <div class="decs text-overflow--2">{{desc}}</div>
                    <img id="good-image" class="image" :style="`height:${height}px`" :src="image" alt="">
                </div>
            </div>
            <div class="footer">
                    <div class="left">
                        <img class="qrCode" :src="qrCode" alt="">
                    </div>
                    <div class="right">
                        <div class="text">1. 保存图片到相册</div>
                        <div class="text">2. 打开微信扫一扫</div>
                    </div>
                </div>
        </div>
        <img v-if="showImage" :src="drawUrl" class="draw-img" alt="">
        <div v-if="showImage" class="save-button">
            长按上方图片保存到手机
        </div>
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
    return canvas.toDataURL('image/png', 0.6);
}

export default {
    name: 'GoodShare',
    components: {},
    props: {
        shareUrl: {
            default: ''
        }
    },
    data(){
        return {
            goodId: 0,
            qrCode: '',
            avatar: '',
            name: '',
            price: '',
            title: '',
            desc: '',
            image: '',
            drawUrl: '',
            showImage: false,
            height:0
        }
    },
    async mounted(){
        let goodId = this.$route.query.goodId;
        this.goodId = goodId
        console.log(this.goodId)

        let res = await this.L.fetchUnlimitQrcode({
            page: `pages/home/main`,
            scene:`productId${goodId}`,
            goodId
        })
        console.log(res)



        this.avatar = res.user.headImg;
        this.name =  res.user.name;
        this.price = res.product.price;
        this.title = res.product.title;
        this.desc = res.product.description;
        this.image = res.product.img;
        this.qrCode = res.qrcode;

        let dom = document.getElementById("good-image");
        this.height = dom.getClientRects()[0].width

        this.draw()
    },
    methods: {
        async draw(){
            let that = this;
            that.showImage = false;
            this.$toast.loading('生成中...')

            this.avatar = await loadImage(this.avatar).then(img => {
                return getBase64(img, 0.3)
            })
       
            this.image = await loadImage(this.image).then(img => {
                return getBase64(img, 1)
            })
            this.qrCode = await loadImage(this.qrCode).then(img => {
                return getBase64(img, 0.3)
            })

            this.$toast.clear();
            this.$toast.loading('创建中...')

            return new Promise((resolve)=>{
                this.$toast.clear()

                let doms = document.querySelectorAll("#capture")
                setTimeout(() => {
                    html2canvas(doms[doms.length-1], {
                        useCORS: true,
                        allowPaint: true
                    }).then(canvas=>{
                        that.showImage = true;
                        that.drawUrl = canvas.toDataURL('image/png')
                        //resolve(that.drawUrl)
                    })
                }, 100);
            })
        }
    }

}

</script>