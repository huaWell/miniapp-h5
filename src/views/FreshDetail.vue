<style lang="less" scoped>
@import '~@/styles/colors.less';
.fresh-detail-container{
  padding: 0 16px ;
  padding-bottom: 85px;
}
 .fresh-item {
          margin-top: 20px;

        .header{
          display: flex;
          .left{
              .avatar {
                display: block;
                height: 40px;
                width: 40px;
                min-width: 40px;
                border-radius: 50%;
              }
          }
          .right{
            flex: 1;
            margin-left: 8px;
            display: flex;
            flex-direction: column;
            .name{
              font-size: 14px;
              font-weight: 700;
              line-height: 16px;
            }
            .time{
                color: #ACADBB;
                font-size: 12px;
                line-height: 14px;
                margin-top: 4px;
            }
          }
        }

        .content{
          margin-top: 8px;
          font-size: 12px;
          color: #4F5077;
          line-height: 18px;
        }

  .img-block {
              display: flex;
              flex-wrap: wrap;
              margin-top: 16px;
              .img-box {
                width: 32%;
                margin-bottom: 10px;
                &:nth-child(3n+1),
                &:nth-child(3n+2) {
                  margin-right: 2%;
                }
                .fresh-img {
                  display: block;
                  height: 100%;
                  width: 100%;
                  border-radius: 6px;
                }
              }
            }
      }
.good{
  display: flex;
  flex-direction: row;
  background: rgba(239,239,239,0.6);
  border-radius: 12px;
  margin-top: 22px;
  padding: 12px;
  color: #000;
  align-items: center;

  .left{
    .image{
      width: 48px;
      height: 48px;
      border-radius: 8px;
    }
  }
  .desc{
    margin-left: 16px;
    flex: 1;
    .title{
      font-size: 14px;
      line-height: 16px;
    }
    .price{
      font-size: 14px;
      line-height: 16px;
      margin-top: 4px;
    }
  }
  .right{
    width: 24px;
    height: 24px;
    margin-left: auto;
  }

}

.divider{
  height: 1px;
  background-color: #f1f1f1;
  margin-top: 23px;
}

.review{
  margin-top: 16px;
  .header{
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #000;
    font-weight: 500;
    .title{

    }
    .count{
      margin-left: 4px;
    }
  }
  .review-list{
    margin-top: 25px;
    .review-item{
      margin-bottom: 32px;
      .item{
        display: flex;
        .left{
          flex-shrink: 0;
          .avatar{
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
        }
        .right{
          margin-left: 8px;
          flex: 1;
          .name{
            font-size: 14px;
            line-height: 16px;
            font-weight: 700;
            color: #000;
          }
          .time{
            margin-top: 4px;
            font-size: 12px;
            line-height: 14px;
            color: #ACADBB;
          }
          .content{
            margin-top: 4px;
            color: #4F5077;
            font-size: 12px;
            line-height: 18px;
          }
        }
      }
    }
  }
}
.footer-panel{
  z-index: 2;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  height: 65px;
  width: 100%;
}
  .footer{
    height: 48px;
    bottom: 37px;
    display: flex;
    align-items: center;
    width: calc(100% - 52px);
    .left{
      flex: 1;
      background: #F2F2F2;
      border-radius: 8px;
      height: 48px;
      .input{
        height: 48px;
        width: 100%;
        padding-left: 11px;
        box-sizing: border-box;
        border: 0;
        outline: none;
        background-color: rgba(0,0,0,0);
      }
    }
    .right{
      width: 34px;
      height: 34px;
      margin: auto;
      margin-left: 20px;
      .custom-icon{
        width: 34px!important;
        height: 34px!important;
        
      }
    }
  }
  .more{
    color: #00C35A;
    font-size: 12px;
    line-height: 18px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circle{
    display: flex;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
    height: 112px;
    background-color: #fff;
    border: 1px solid #F1F1F1;
    box-shadow: 0px 8px 12px rgba(0,0,0,0.04);
    border-radius: 12px;
    margin-top: 8px;
    .left{
      .image{
        width: 88px;
        height: 88px;
        display: block;
      }
    }

    .right{
      margin-left: 19px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title{
        color: #000;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
      }
      .desc{
        display: flex;
        align-items: center;
        .user-block{
          display: flex;
          padding-left: 10px;
          box-sizing: border-box;
          .avatar{
            display: block;
            height: 24px;
            width: 24px;
            border: 2px solid white;
            border-radius: 50%;
            margin-left: -10px;
          } 
        }
        .flex{
          flex: 1;
        }
        .distance{
          color: #8E8F9A;
          font-size: 12px;
          line-height: 14px;
          margin-left: 2px;
        }
      }
    }
  }


</style>
<template>
  <div class="fresh-detail-container">
     <van-pull-refresh v-model="refreshing" @refresh="OnRefresh" style="min-height:100vh">
      <div class="circle" v-if="fresh.groupName" @click="toCircleDetail">
        <div class="left">
          <img class="image" :src=fresh.groupImage alt="">
        </div>
        <div class="right">
          <div class="title">{{fresh.groupName}}</div>
          <div class="desc">
            <div class="user-block">
              <img class="avatar" :src=image alt="" v-for="(image, index) in fresh.joinedUserImgList" :key="index">
            </div>
            <span class="flex"></span>
            <div class="icon--location"></div>
            <div class="distance">{{fresh.distance}}</div>
          </div>
        </div>
      </div>

    <div class="fresh-item">
        <div class="header">
          <div class="left">
            <img class="avatar" :src=fresh.publisherImage alt="">
          </div>
          <div class="right">
            <div class="name text-overflow--1">{{fresh.publisherName}}</div>
            <div class="time">{{$formatDate(fresh.createTime)}}</div>
          </div>
        </div>
        <div class="content">
            {{fresh.content}}
        </div>

        <div class="img-block">
          <div class="img-box" v-for="(image, index) in fresh.imgList" @click="onPreviewImage(image)">
            <square :hwRatio="1" width="100%">
              <img :src=image alt="" class="fresh-img">
            </square>
          </div>
        </div>
    </div>

    <div class="good" v-if="fresh.productInfo" @click="toProductDetail">
      <div class="left">
        <img class="image" :src=fresh.productInfo.img alt="">
      </div>
      <div class="desc">
        <div class="title text-overflow--1">{{fresh.productInfo.name}}</div>
        <div class="price">¥{{fresh.productInfo.price}}</div>
      </div>
      <div class="right">
        <div class="icon--goto"></div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="review">
      <div class="header">
        <div class="title">评论</div>
        <div class="count">({{fresh.discussCount}})</div>
      </div>
      <div class="review-list">
        <div class="review-item" v-for="(discuss, index) in discusses" :key="index" @click="chooseDiscuss(discuss)">
          <div class="item">
            <div class="left">
              <img class="avatar" :src=discuss.publisherImage alt="">
            </div>
            <div class="right">
              <div class="name text-overflow--1">{{discuss.publisherName}}</div>
              <div class="time">{{$formatDate(discuss.createTime)}}</div>
              <div class="content">
                {{discuss.content}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="more" v-if="hasMore" @click="getMore">加载更多</div>
      <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!hasMore">
          <van-divider contentPosition="center">已经到底了</van-divider>
      </div>
    </div>

    <div class="footer-panel">
      <div class="footer">
            <div class="left">
              <input :focus="focus" v-model="comment" class="input" type="text" @cancel="cancelReview" @confirm="sendReview" placeholder="我想说...">
            </div>
            <div class="right">
              <div class="icon--add-1" alt="" @click="sendReview"></div>
            </div>
          </div>
    </div>
   </van-pull-refresh>
  </div>
</template>
<script>
import { PullRefresh, List } from 'vant';
import qs from 'querystring'

  export default {
    name: '',
    components: {
      [PullRefresh.name]: PullRefresh,
      [List.name]: List
    },
    data () {
    	return {
        comment: '',
        discusses:[],
        page: 1,
        size: 30,
        hasMore:false,
        fresh: {},
        currentDiscuss: {},
        focus: false,
        refreshing:false,
        freshId: 0,
        queryGroup: false
    	}
    },
    mounted () {
      // this.fresh = JSON.parse(this.$route.query.id)
      let id = this.$route.query.id;
      let queryGroup = this.$route.query.queryGroup;
      this.queryGroup = queryGroup ? queryGroup : false;

      console.log(this.queryGroup)
      this.freshId = id;
      this.getFreshDetail()
      this.getDiscusses()
    },
    methods: {
      onPreviewImage(current){
        wx.previewImage({
          current,
          urls: this.fresh.imgList
        })
      },  
      async getFreshDetail(){
          let data = {
            id: this.freshId,
            lat: sessionStorage.getItem("lantitude"),
            lng: sessionStorage.getItem("longitude"),
            queryGroup: this.queryGroup
          }
          let res = await this.D.fetchFreshDetail(data)
          this.fresh = res;
      },  
      async OnRefresh(){
        this.page = 1;
        await this.getDiscusses();
        this.refreshing = false;
      },
      async sendReview(){
        console.log(this.comment)
        if (this.comment == "") return;
        let data = {
          content: this.comment,
          groupChatId: this.fresh.id
        }
        let res = await this.R.fetchFreshDiscuss(data)
        this.comment = "";
        this.fresh.discussCount++;
        await this.getDiscusses()
      },
      cancelReview(){
        this.focus = false;
      },  
      chooseDiscuss(discuss){
        this.focus = true;
      },
      // 获取评论列表
      async getDiscusses(){
        let data = {
          id: this.freshId,
          pageNum: this.page,
          pageSize: this.size
        }
        let res = await this.R.fetchFreshDiscussList(data)
        if (this.page == 1) {
          this.discusses = res.dataList;
        } else {
          this.discusses = this.discusses.concat(res.dataList);
        }
   
        this.hasMore = res.hasMore;
      },
      //加载更多
      async getMore(){
        this.page++;
        this.getDiscusses();
      },
      // 跳转求购详情
      toAskBuy(){
        wx.miniProgram.navigateTo({
          url: '/pages/production-help-detail/main'
        })
      },
      // 跳转商品详情页
      toProductDetail(){
        let param_str = encodeURIComponent(JSON.stringify({id: this.fresh.productInfo.productId}))
        wx.miniProgram.navigateTo({
          url: `/pages/product-detail/main?data=${param_str}`
        })
      },
      // 跳转圈子详情
      toCircleDetail(){
        // this.$router.push({
        //   path: 'circle-detail',
        //   query: {
        //     groupId: this.fresh.groupId
        //   }
        // })
        wx.miniProgram.navigateTo({
          url: `/pages/h5-webview-circle/main?${qs.stringify({
            groupId: this.fresh.groupId,
            sessionKey: sessionStorage.getItem("sessionKey"),
            latitude: sessionStorage.getItem("lantitude"),
            longitude: sessionStorage.getItem("longitude")
          })}`
        })
      }
    }
  }
</script>