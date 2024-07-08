<style lang="less" scoped>
@import '~@/styles/colors.less';
/deep/ .van-dropdown-menu__bar {
  box-shadow: none;
  height: 34px;
}
/deep/ .van-search__action {
  background: white;
}
/deep/ .van-search {
  padding: 10px 0;
}
/deep/ .van-dropdown-item__content {
  .van-cell {
    padding: 10px 16px;
  }
}
/deep/ .van-tab--active {
  color: #000 !important;
  font-size: 16px;
  font-weight: 500;
}
/deep/ .van-tab {
  font-weight: 500;
  color: #ACADBB;
  font-size: 16px;
}
.circle-detail-container {
  min-height: 100vh;
  .circle-header {
    height: 200px;
    width: 100%;
    background-position: center;
    background-size: cover;
    color: white;
    position: relative;
    .position-box {
      position: absolute;
      bottom: 40px;
      height: 60px;
      left: 0;
      width: calc(100% - 24px);
      margin: 0 12px;
      padding: 0px 4px;
      //background: linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%);
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: inherit;
      margin-bottom: 5px;
    }
    .name {
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      font-weight: bold;
      //margin-bottom: 10px;
    }
    .footer {
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255);
      font-size: 12px;
      //padding-bottom: 15px;
     
      .user-block {
        display: flex;
        padding-left: 10px;
        .avatar {
          display: block;
          height: 24px;
          width: 24px;
          border: 2px solid white;
          border-radius: 50%;
          margin-left: -10px;
        }
      }
      .flex {
        flex: 1;
      }
      .divider {
        background: white;
        height: 10px;
        width: 1px;
        margin: 0 6px;
      }
    }
  }
  .circle-body {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 0 16px;
    margin-top: -40px;
    z-index: 999;
    background: #fff;
    position: relative;
    .tab-view {}
    /* 商品 */
    .goods-tab-view {
      .goods-wrapper {
        .goods-block {
          margin-top: 12px;
          &:nth-child(3n+1),
          &:nth-child(3n+2) {
            margin-right: 2%;
          }
          width: 32%;
          float: left;
          .goods-img {
            display: block;
            height: 100%;
            width: 100%;
            border-radius: 8px;
          }
          .footer {
            margin-top: 4px;
            display: flex;
            align-items: center;
            .flex {
              flex: 1;
            }
            .price {
              font-weight: bold;
              font-size: 14px;
            }
            .distance {
              font-size: 12px;
              color: #ACADBB;
            }
          }
        }
      }
    }
    /* 公告*/
    .message-tab-view {
      .card {
        margin-top: 12px;
        background: #FFFFFF;
        border: 1px solid #F1F1F1;
        border-radius: 12px;
        padding: 12px;
        .title {
          font-weight: bold;
          font-size: 16px;
        }
        .content {
          margin-top: 10px;
          font-size: 12px;
          line-height: 18px;
          color: #4F5077;
        }
        .footer {
          display: flex;
          color: #8E8F9A;
          align-items: center;
          font-size: 12px;
          margin-top: 6px;
          .flex {
            flex: 1;
          }
        }
      }
    }
    /* 新鲜事 */
    .fresh-tab-view {
      .fresh-list {
        .fresh-item {
          display: flex;
          margin-top: 20px;
          .avatar {
            display: block;
            height: 40px;
            width: 40px;
            min-width: 40px;
            border-radius: 50%;
          }
          .right {
            flex: 1;
            margin-left: 8px;
            .header {
              .nickname {
                font-size: 16px;
                font-weight: bold;
              }
              .date {
                color: #ACADBB;
                font-size: 12px;
                margin-top: 4px;
              }
            }
            .body {
              font-size: 12px;
              color: #4F5077;
              margin-top: 8px;
            }
            .img-block {
              display: flex;
              flex-wrap: wrap;
              margin-top: 12px;
              .img-box {
                width: 32%;
                margin-bottom: 10px;
                &:nth-child(3n+1),
                &:nth-child(3n+2) {
                  margin-right: 2%;
                }
                .image {
                  width: 100%;
                  height: 100%;
                  display: block;
                  border-radius: 4px;
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
          .footer {
            height: 18px;
            margin-top: 16px;
            color: #8E8F9A;
            font-size: 12px;
            display: flex;
            align-items: center;
            .image-block {
              margin-right: 4px;
              .image {}
            }
            .text {}
          }
        }
      }
    }
    /* 邻里之间 */
    .homeland-tab-view {
      .card {
        margin-top: 12px;
        background: #FFFFFF;
        border: 1px solid #F1F1F1;
        border-radius: 12px;
        padding: 12px;
        .header {
          display: flex;
          align-items: center;
          .avatar {
            display: block;
            height: 40px;
            width: 40px;
            min-width: 40px;
            border-radius: 50%;
          }
          .right {
            flex: 1;
            margin-left: 8px;
            .nickname {
              font-size: 16px;
              font-weight: bold;
            }
            .date {
              color: #ACADBB;
              font-size: 12px;
            }
          }
        }
        .body {
          color: #4F5077;
          font-size: 13px;
          margin-top: 8px;
        }
      }
    }
  }
}
.options-button {
  position: fixed;
  bottom: 100px;
  right: 20px;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background: white;
  z-index: 99999;
}
.options-button-home {
  position: fixed;
  left: 16px;
  top: 16px;
  height: 40px;
  width: calc(100% - 32px);
  border-radius: 50%;
  z-index: 99999;
}
.options-button-join {
  position: fixed;
  padding: 0 16px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  bottom: 50px;
  width: 100%;
  height: 48px;
  z-index: 999;
  opacity: 0.8;
  .inner-box {
    background: #00C35A;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    height: 100%;
  }
}
.share-dialog {
  /deep/ .van-dialog__header {
    padding-top: 0;
  }
  overflow: inherit !important;
}
.circleQR-content{
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .image{
    width: 100%;
    height: 100%;
    display: block;
    user-select: auto;
    pointer-events: auto;
  }
}
.icon--share {
  width: 24px;
  margin-right: 6px;
}
.square-container {
  // width: 100%;
  .inner-image{
      border-radius: 8px;
        background-position: center center;
        background-size: cover;
    }
  .inner-box {
    width: 100%;
    height: 0;
    /* 确定高度, 100% 表示完全等于宽度, 但是也可以是一个比例的呀*/
    padding-bottom: 100%;
    position: relative;
   
    .title-footer{
      position: absolute;
            width: 100%;
            bottom: 0px;
            //left: 0px;
            color: white;
            height: 30px;
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%);
            border-radius: 0 0 8px 8px;
            box-sizing: border-box;
            padding: 0px 4px;
            line-height: 30px;
      .title{
        font-weight: bold;
        font-size: 12px;
        line-height: 30px;
      }
    }
  }
}
</style>
<template>
  <div class="circle-detail-container">
    <van-pull-refresh v-model="refreshing" @refresh="OnCircleRefresh" style="min-height:100vh">
      <!-- <button @click="onShareCircle">分享圈子</button> -->
      <div class="circle-header" :style="{'backgroundImage': 'url('+ circle.img +')'}">
        <div class="position-box">
          <div class="name text-overflow--1">
            {{circle.name}}
          </div>
          <div class="footer">
            <div class="user-block">
              <img class="avatar" :src=image alt="" v-for="(image, index) in circle.joinedUserImgList" :key="index">
            </div>
            <span class="flex"></span>
            <span class="messages">
              {{circle.productCount}} 动态
            </span>
            <span class="divider"></span>
            <span class="join" @click="onGotoPersons">
              {{circle.userCount}} 人加入
            </span>
            <van-icon name="arrow" />
            <!-- <div @click="onShareCircle" style="margin-left: 8px;" class="icon--share"></div> -->
            <!-- <div  style="margin-left: 8px;" class="icon--share"></div> -->
            <van-icon name="share" size="22px" @click="onShareCircle" style="margin: 0 10px"/>
            <van-icon name="qr" size="24px" @click="openQr" />
          </div>
        </div>
      </div>
      <div class="circle-body">
        <van-tabs v-model="activeTab" @click="onTabChange">
          <van-tab v-for="(tab, key) in tabs" :key="key" :title="tab.name"></van-tab>
        </van-tabs>
        <!-- 商品 -->
        <div class="tab-view goods-tab-view" v-if="activeTab==0">
          <van-search v-model="goodsKeyword" :value="goodsKeyword" placeholder="搜索商品" shape="round" @search="onSearchGoods">
            <!-- <van-dropdown-menu slot="action">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu> -->
          </van-search>
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="goods-wrapper clearfix">
              <div class="goods-block" @click="toGoodDetail(good)" v-for="(good, index) in goods" :key="index">
                <!-- <square :hwRatio="1" width="100%">
                  <img :src=good.headImg alt="" class="goods-img">
                </square> -->
                <div class="square-container" style="width: 100%;min-width;: 100%">
                  <div class="inner-box inner-image" :style="{'backgroundImage': 'url(' + good.headImg + ')'}">
                    <div class="title-footer">
                          <div class="title text-overflow--1">
                            {{good.name}}
                          </div>
                      </div>
                  </div>
                </div>
                <div class="footer">
                  <div class="price">¥{{good.price}}</div>
                  <span class="flex"></span>
                  <span class="distance">{{good.distance}}</span>
                </div>
              </div>
            </div>
          </van-list>
        </div>
        <!-- 公告 -->
        <div class="tab-view message-tab-view" v-if="activeTab==1">
          <van-list v-model="PostLoading" :finished="PostFinished" finished-text="没有更多了" @load="onLoadPost">
            <div class="card" v-for="(post, index) in posts" :key="index" @click="toPostDetail(post)">
              <div class="title text-overflow--2">{{post.title}}</div>
              <div class="content">
                {{post.content}}
              </div>
              <div class="footer">
                <span class="text">{{$formatDate(post.createTime)}}</span>
                <!-- <span class="flex"></span>
            <van-icon name="delete-o" /> -->
              </div>
            </div>
          </van-list>
        </div>
        <!-- 新鲜事 -->
        <div class="tab-view fresh-tab-view" v-if="activeTab==2">
          <van-list v-model="FreshLoading" :finished="FreshFinished" finished-text="没有更多了" @load="onLoadFresh">
            <div class="fresh-list">
              <div class="fresh-item" v-for="(fresh, index) in freshs" :key="index" @click="toFreshDetail(fresh)">
                <img :src=fresh.publisherImage alt="" class="avatar">
                <div class="right">
                  <div class="header">
                    <div class="nickname">{{fresh.publisherName}}</div>
                    <div class="date">{{$formatDate(fresh.createTime)}}</div>
                  </div>
                  <div class="body">
                    {{fresh.content}}
                  </div>
                  <div class="img-block">
                    <div class="img-box" v-for="(img, idx) in fresh.imgList" :key="idx">
                      <square :hwRatio="1" width="100%">
                        <img class="image" :src=img>
                      </square>
                    </div>
                  </div>
                  <div class="footer">
                    <div class="image-block">
                      <div class="icon--comment"></div>
                    </div>
                    <span class="text">评论 ({{fresh.discussCount}})</span>
                  </div>
                </div>
              </div>
            </div>
          </van-list>
        </div>
        <!-- 邻里之间 -->
        <div class="tab-view homeland-tab-view" v-if="activeTab==3">
          <van-search :value="missionKeyword" class="search" v-model="missionKeyword" placeholder="搜索商品" shape="round" @search="onSearchMission">
            <!-- <van-dropdown-menu slot="action">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu> -->
          </van-search>
          <van-list v-model="MissionLoading" :finished="MissionFinished" finished-text="没有更多了" @load="onLoadMission">
            <div class="card" v-for="(mission, index) in missions" :key="index" @click="toProducHelp(mission)">
              <div class="header">
                <img :src=mission.publisherImage alt="" class="avatar">
                <div class="right">
                  <div class="nickname">{{mission.publisherName}}</div>
                  <div class="date">{{$formatDate(mission.createTime)}}</div>
                </div>
              </div>
              <div class="body text-overflow--2">
                {{mission.remark}}
              </div>
            </div>
          </van-list>
        </div>
      </div>
      <div class="options-button" @click="onPublish" v-if="circle.joined && activeTab !== 1">
        <div class="icon--publish"></div>
      </div>
      <div class="options-button-join" v-if="!circle.joined" @click="onJoinCircle">
        <div class="inner-box">
          立即加入
        </div>
      </div>
    </van-pull-refresh>
    <van-dialog v-model="showDialog" title="加入群聊" :show-confirm-button="false" :closeOnClickOverlay="true">
        <div class="circleQR-content" v-if="!shareCircleQRCode" id="qrcode">
          <img :src="circleQRCode" alt="" class="image">
        </div>
    </van-dialog>
    <van-dialog class="share-dialog" v-model="showShareDialog" :show-confirm-button="false" :closeOnClickOverlay="true" v-if="userInfo">
      <share :shareUrl="shareUrl"  @close="onClose" />
    </van-dialog>
    <share ref="share" style="height: 0px;overflow: hidden;" />
    <!-- <share v-if="isDrawing" ref="share" style="position: absolute;z-index: -1;" /> -->
  </div>
</template>
<script>
import { Search, DropdownMenu, DropdownItem, PullRefresh, List, Dialog } from 'vant';
import qs from 'querystring'
import html2canvas from 'html2canvas'
import Share from '@/components/Share'
import axios from 'axios'
export default {
  name: 'CircleDetail',
  components: {
    [Search.name]: Search,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [Dialog.Component.name]: Dialog.Component,
    Share
  },
  watch: {
    '$route'(n, o) {
      console.log(n)
      console.log(o)
      if (n.path == '/circle-detail') {
        // /* 使分享重新渲染 */
        // this.shareUrl = ''
        // this.$refs.share && this.$refs.share.clear()
        if (['/', '/Home'].indexOf(o.path) > -1) {
          Object.assign(this, this.$options.data())
          this.init()
        }
        if (["/publish-fresh"].indexOf(o.path) > -1) {
          this.getFreshs(true)
        }
      }
    }
  },
  data() {
    return {
      showDialog: false,
      activeTab: 0,
      tabs: [{
        name: '商品'
      }, {
        name: '公告'
      }, {
        name: '新鲜事'
      }, {
        name: '江湖救急'
      }],
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      searchValue: '',
      circle: {},
      size: 30,
      goods: [],
      goodsPage: 1,
      goodsSearchAfter: null,
      goodsKeyword: '',
      goodStatus: 0,
      loading: false,
      finished: false,
      posts: [],
      postsPage: 1,
      postsHasMore: false,
      PostFinished: false,
      PostLoading: false,
      FreshFinished: false,
      FreshLoading: false,
      freshs: [],
      freshsPage: 1,
      freshsHasMore: false,
      freshKeyword: '',
      missions: [],
      missionsSearchAfter: null,
      missionKeyword: '',
      MissionFinished: false,
      MissionLoading: false,
      refreshing: false,
      showShareDialog: false,
      shareUrl: '',
      userInfo:{},
      circleQRCode: '',
      shareCircleQRCode: ''
      // isDrawing: false
    }
  },
  async mounted() {
    this.getUserInfo()
    this.init()
  },
  methods: {
    async init() {
      let groupId = this.$route.query.groupId;
      let res = await this.D.fetchGroupDetail({ value: groupId });
      this.circle = res;
      this.getGoods(true)
    },
    async getUserInfo(){
        let res = await this.D.fetchUserInfo();
        this.userInfo = res;
        localStorage.setItem("userInfo", JSON.stringify(res))
        console.log(this.userInfo)
    },  
    async onLoad() {
      if (!this.circle.groupId)   return;
      await this.getGoods(false)
    },
    async onLoadFresh() {
      console.log(this.freshsPage)
      await this.getFreshs(false);
    },
    async onLoadPost() {
      await this.getPosts(false);
    },
    async onLoadMission() {
      await this.getMissions(false);
    },
    async OnCircleRefresh() {
      if (this.activeTab == 0) {
        this.goodsKeyword = "";
        await this.getGoods(true);
      } else if (this.activeTab == 1) {
        await this.getPosts(true)
      } else if (this.activeTab == 2) {
        await this.getFreshs(true);
      } else if (this.activeTab == 3) {
        this.missionKeyword = "";
        await this.getMissions(true);
      }
      this.refreshing = false
    },
    onGotoPersons() {
      this.$router.push({
        path: '/in-circle-persons',
        query: {
          groupId: this.circle.groupId
        }
      })
    },
    onPublish() {
      if (this.activeTab == 0) {
        wx.miniProgram.navigateTo({
          url: `/pages/publish/main?${qs.stringify({
            groupId: this.circle.groupId,
            groupName: this.circle.name
          })}`
        })
      } else if (this.activeTab == 1) {
        /* 发布公告 */
        this.$router.push({
          path: '/publish-message',
          query: {
            groupId: this.circle.groupId
          }
        })
      } else if (this.activeTab == 2) {
        /* 发布新鲜事 */
        this.$router.push({
          path: '/publish-fresh',
          query: {
            groupId: this.circle.groupId
          }
        })
      } else if (this.activeTab == 3) {
        /* 发布邻里之间 */
        console.log(this.circle)
        wx.miniProgram.navigateTo({
          url: `/pages/publish-help/main?${qs.stringify({
            groupId: this.circle.groupId,
            groupName: this.circle.name
          })}`
        })
      }
    },
    toFreshDetail(data) {
      this.$router.push({
        path: '/fresh-detail',
        query: {
          id: data.id
        }
      })
    },
    async getGoods(isRefresh = false) {
      if (isRefresh) {
        this.goodsSearchAfter = null;
      }
      let data = {
        groupId: this.circle.groupId,
        keyword: this.goodsKeyword,
        lat: sessionStorage.getItem("lantitude"),
        lng: sessionStorage.getItem("longitude"),
        searchAfter: this.goodsSearchAfter,
        size: this.size
      }
      let res = await this.R.fetchCircleGoods(data);
      if (!isRefresh) this.goods = this.goods.concat(res.dataList)
      else this.goods = res.dataList;
      this.goodsSearchAfter = res.searchAfter;
      if (res.searchAfter) {
        this.finished = res.searchAfter.length == 0 ? true : false;
      } else {
        this.finished = true;
      }
      this.loading = false;
    },
    onSearchGoods() {
      this.getGoods(true);
    },
    async getPosts(isRefresh = false) {
      let data;
      if (isRefresh) {
        this.postsPage = 1;
        this.postsHasMore = false;
        data = {
          groupId: this.circle.groupId,
          pageNum: this.postsPage++,
          pageSize: this.size
       }
      } else {
        data = {
          groupId: this.circle.groupId,
          pageNum: this.postsPage++,
          pageSize: this.size
       }
      }
     
      let res = await this.R.fetchCirclePosts(data);
      if (!isRefresh) this.posts = this.posts.concat(res.dataList);
      else this.posts = res.dataList;
      this.postsHasMore = res.hasMore;
      this.PostFinished = !res.hasMore;
      this.PostLoading = false;
    },
    async getFreshs(isRefresh = false) {
      let data = {};
      if (isRefresh) {
        this.freshsPage = 1;
        this.freshsHasMore = false;
        data = {
          groupId: this.circle.groupId,
          pageNum: this.freshsPage++,
          pageSize: this.size
        }
      } else {
        data = {
          groupId: this.circle.groupId,
          pageNum: this.freshsPage++,
          pageSize: this.size
        }
      }
     
      let res = await this.R.fetchCircleFresh(data);
      if (!isRefresh) this.freshs = this.freshs.concat(res.dataList);
      else this.freshs = res.dataList;
      this.freshsHasMore = res.hasMore;
      this.FreshFinished = !res.hasMore;
      this.FreshLoading = false;
    },
    async onSearchFresh() {
      this.getGoods(true);
    },
    async getMissions(isRefresh = false) {
      if (isRefresh) {
        this.missionsSearchAfter = null;
      }
      let data = {
        groupId: this.circle.groupId,
        keyword: this.missionKeyword,
        lat: sessionStorage.getItem("lantitude"),
        lng: sessionStorage.getItem("longitude"),
        searchAfter: this.missionsSearchAfter,
        size: this.size
      }
      let res = await this.R.fetchMissionList(data);
      if (!isRefresh) this.missions = this.missions.concat(res.dataList)
      else this.missions = res.dataList;
      this.missionsSearchAfter = res.searchAfter;
      if (res.searchAfter) {
        this.MissionFinished = res.searchAfter.length == 0 ? true : false;
      } else {
        this.MissionFinished = true;
      }
      this.MissionLoading = false;
    },
    async onSearchMission() {
      this.getMissions(true)
    },
    async onTabChange() {
      // if (this.activeTab == 1 && this.posts.length < 1) {
      //   this.getPosts(true)
      // } else if (this.activeTab == 2 && this.freshs.length < 1) {
      //   this.getFreshs(true)
      // } else if (this.activeTab == 3 && this.missions.length < 1) {
      //   this.getMissions(true)
      // }
    },
    async onShareCircle() {
      if (this.shareUrl) {
        this.showShareDialog = true
      } else {

        let circleId = this.$route.query.groupId

        let res = await this.L.fetchQrCode({
          page: 'pages/home/main',
          scene: `circleId${circleId}`,
          circleId
        })
        if (localStorage.getItem("userInfo")){
          this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
        }

        this.shareUrl = await this.$refs.share.draw(circleId, {
          circleImg: this.circle.img,
          circleName: this.circle.name,
          avatar: this.userInfo.headImg,
          userName: this.userInfo.name,
          qrCode: res.qrcode
          })
        this.$nextTick(() => {
          this.showShareDialog = true
        })
      }
    },
    toGoodDetail(good) {
      let param_str = encodeURIComponent(JSON.stringify({ id: good.id }))
      wx.miniProgram.navigateTo({
        url: `/pages/product-detail/main?data=${param_str}`
      })
    },
    async onJoinCircle() {
      let res = await this.D.fetchJoinGroup({
        value: this.circle.groupId
      })
      this.circle.joined = true;
      this.$toast.success("加入成功")
    },
    toPostDetail(post) {
      this.$router.push({
        path: '/post-detail',
        query: {
          postId: post.id
        }
      })
    },
    toProducHelp(mission) {
      wx.miniProgram.navigateTo({
        url: `/pages/production-help-detail/main?id=${mission.id}`
      })
    },
    async openQr() {
      this.showDialog = true
      let res = await this.L.fetchCircleQrCode(this.circle.groupId)
      console.log(res.qrcode)
      this.circleQRCode = res.qrcode;
    },
    onClose() {
      this.showShareDialog = false
      //this.$refs.share.$el.remove()
    }
  }
}
</script>