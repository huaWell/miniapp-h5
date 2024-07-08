<style lang="less" scoped>
  @import '~@/styles/colors.less';
  /deep/ .van-dropdown-menu__bar {
  box-shadow: none;
  height: 34px;
}
/deep/ .van-dropdown-menu__title {
    font-size: 14px;
    color: #ACADBB;
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
.home-container {
    .home-body{
        padding: 0 16px;
        background: #fff;
        margin-top: -40px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        position: relative;
        .home-body-header{
            display: flex;
            align-items: center;
    
            .title{
                color: #000;
                font-size: 16px;
                font-weight: 500;
                line-height: 19px;
                min-width: 80px;
            }
            .flex{
                flex: 1;
            }
        }
    .square {
      margin-bottom: 10px;
      float: left;
      .circle-item {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .inner {
          height: 100%;
          width: 100%;
          border-radius: 8px;
          background-position: center center;
          background-size: cover;
            .owner {
                position: absolute;
                left: 8px;
                top: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 24px;
                padding: 4px 8px;
                background: rgba(255,137,28,0.1);
                border-radius: 12px;
        .text{
            color: #FF891C;
            font-size: 12px;
            line-height: 14px;
            font-weight: 500;
            margin-left: 4px;
        }
    }

          .footer {
            position: absolute;
            width: calc(100% - 8px);
            bottom: 0px;
            //left: 0px;
            color: white;
            height: 62px;
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%);
            border-radius: 0 0 8px 8px;
            box-sizing: border-box;
            padding: 12px 8px;
          
          .title {
            font-weight: bold;
            font-size: 15px;
          }
          .desc {
            font-size: 12px;
            display: flex;
            align-items: center;
            margin-top: 8px;
            .divider {
              height: 10px;
              width: 1px;
              background: white;
              margin: 0 4px;
            }
            .text {
              display: flex;
              align-items: center;
            }
          }
          }
        }
      }
      &:nth-child(2n) {
        .circle-item {
          .inner {
            margin-left: 8px;
          }
        }
      }
      ;
      &:nth-child(2n+1) {
        .circle-item {
          .inner {
            margin-right: 8px;
          }
        }
      }
      ;
    }
    }
  .filter-block {
    display: flex;
    align-items: center;
    .item {
      transition: all .3s;
      font-size: 15px;
      color: @fontGray;
      margin-right: 12px;
    }
    .active {
      color: @black;
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
}

  .home-header {
    height: 200px;
    width: 100%;
    background-position: center;
    background-size: cover;
    color: white;
    position: relative;
    opacity: 1;
    .position-box {
      position: absolute;
      bottom: 40px;
      left: 0;
      width: 100%;
      padding: 0 24px;
    }
    .name {
      font-size: 28px;
      line-height: 16px;
      font-weight: bold;
        line-height: 32px;
        color: #000;
    }
     .flex {
        flex: 1;
      }
    .footer {
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255, .8);
      font-size: 12px;
      padding-bottom: 15px;
    .title{
        display: flex;
        align-items: center;
            width: 116px;
            height: 32px;
            background: #fff;
            border-radius: 16px;
            padding: 4px 4px 4px 12px;
            color: #000;
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
        .right{
          margin-left: 2px;
        }
    }
  }

  .unkown-function{
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

</style>
<template>
  <div>

  <div class="home-container" v-if="showCircle">
      <van-pull-refresh v-model="refreshing" @refresh="OnRefresh" style="height:100%">
    <div class="home-header icon--home">
      <div class="position-box">
      <div class="footer">
         <div class="name text-overflow--1">
            生活就得兜圈子
        </div>
        <span class="flex"></span>
        <div class="title" @click="toCircleSquare">
            <span class="text">{{content}}</span>
            <div class="right icon--arrow-right"></div>
            <!-- <van-icon name="arrow" /> -->
        </div>
      </div>
      </div>
    </div>
    <div class="home-body">
        <div class="home-body-header">
            <div class="title">{{title}}</div>
            <van-dropdown-menu v-if="show" slot="action" style="margin-left: 20px;margin-right: 10px;">
                <van-dropdown-item v-model="value1" :options="option1" @change="onChange" />
            </van-dropdown-menu>
            <span class="flex"></span>
            <van-search style="border-top-right-radius:30px" v-model="goodsKeyword" placeholder="搜索圈子" shape="round"  @search="onSearchGoods">
        
            </van-search>
        </div>
        <div class="tab-content clearfix" ref="listout">
              <van-list style="min-height:400px;"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
            <square :hwRatio="1" width="50%" v-for="(circle, index) in circles" :key="index" class="square">
                <div class="circle-item" @click="onGotoCircleDetail(circle)">
                <div class="inner" :style="{'backgroundImage': 'url(' + circle.img + ')'}">
                      <div class="owner" v-if="circle.isMy">
                            <div class="icon--owner"></div>
                            <span class="text">群主</span>
                        </div>
                   <div class="footer">
                        <div class="title text-overflow--1">
                            {{circle.name}}
                        </div>
                        <div class="desc">
                            <span class="text">
                            {{circle.productCount}} 动态
                            </span>
                            <span class="divider"></span>
                            <span class="text">
                            {{circle.userCount}}人加入
                            <van-icon name="arrow" />
                            </span>
                        </div>
                     
                    </div>
                </div>
                </div>
            </square>
  <div style="clear:both"></div>
    </van-list>    
          
            <!-- <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!searchAfter">
                <van-divider contentPosition="center">已经到底了</van-divider>
            </div> -->
            <div class="options-button" @click="createCircle">
                <div class="icon--publish"></div>
            </div>
        
    
  </div>
</div>
   </van-pull-refresh>
  </div>
  <div v-if="!showCircle" class="unkown-function">
      敬请期待!
  </div>
</div>
</template>
<script>
import { Search, DropdownMenu, DropdownItem ,PullRefresh, List} from 'vant';
const MYJOINED = 0;
const MY = 1;
const ALL = 2;

export default {
  name: 'Home',
  components: {
    [Search.name]: Search,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List
  },
  data() {
    return {
      showCircle: false,
      activeTab: '',
      tabs: [{
        name: '全部圈子',
        id: 1
      }, {
        name: '我的圈子',
        id: 2
      }],
      activeFilterIndex: 0,
      filters: [{
        name: '我创建的'
      }, {
        name: '我加入的'
      }],
      searchAfter: null,
      size: 30,
      allCircle: [],
      myCircle:[],
      myCircleSearchAfter:null,
      myJoinCircle:[],
      myJoinCircleSearchAfter:null,


        circles:[],
        circleSearchAfter: null,

    activePage: MYJOINED,
    isMyPage: true,
    show:true,
    content: '去圈子广场',
    title: '我的圈子',
    goodsKeyword:'',
    value1: 0,
    option1: [
        { text: '我加入的', value: 0 },
        { text: '我的', value: 1 },
    ],
      refreshing:false,
      loading:false,
      finished:false
    }
  },
  async mounted() {
    let res = await this.L.fetchCircleDisplay();
    this.showCircle = res;


    if (this.showCircle) {
      if (this.$route.query.circleId) {


        if (sessionStorage.getItem('use_circle_id')) {
          return;
        }


        sessionStorage.setItem('use_circle_id', 1)




        this.onGotoCircleDetail({
          groupId: this.$route.query.circleId
        })
        return;

      }
      let sesseionKey = sessionStorage.getItem('sessionKey')
      console.log(sesseionKey)
      // if (!sesseionKey) {
      //   // 未登录，跳转到登录页面
      //    wx.miniProgram.navigateTo({
      //     url: '/pages/login/main'
      //   })
      // }
    }

    // let res = await this.R.fetchWXConfig(location.href)
    // console.log(res)
    // try {
    //    await this.getMyJoinCircles(true)
    //  } catch (err) {
    //   console.log(err, 'err')
    //  }
  },
  methods: {
    // ontest () {
    //   this.$router.push({
    //     path: '/publish-fresh'
    //   })
    // },
    async onLoad(){
      console.log("load")
        if (this.activePage == MYJOINED) {
            await this.getMyJoinCircles(true, this.goodsKeyword);
        } else if (this.activePage == MY) {
            await this.getMyCircles(true, this.goodsKeyword)
        } else if (this.activePage == ALL) {
            await this.getAllCircles(true, this.goodsKeyword)
        }
    },
    async OnRefresh(){
      this.goodsKeyword = '';
        if (this.activePage == MYJOINED) {
            await this.getMyJoinCircles(true);
        } else if (this.activePage == MY) {
            await this.getMyCircles(true)
        } else if (this.activePage == ALL) {
            await this.getAllCircles(true)
        }
        this.refreshing = false;
    },
    onSearchGoods(e){
        console.log(this.goodsKeyword)
        console.log(this.activePage)
        if (this.activePage == MYJOINED) {
            this.getMyJoinCircles(true, this.goodsKeyword);
        } else if (this.activePage == MY) {
            this.getMyCircles(true, this.goodsKeyword)
        } else if (this.activePage == ALL) {
            this.getAllCircles(true, this.goodsKeyword)
        }
    },
    onChange(e){
        this.activePage = e;
         this.loading = true;
        this.finished = false;
        this.onLoad()
        // if (e == 0) {
        //     this.getMyJoinCircles(true, this.goodsKeyword)
        // } else if (e == 1) {
        //     this.getMyCircles(true,this.goodsKeyword)
        // }
    },
    toCircleSquare(){
        this.goodsKeyword = ''
        this.isMyPage = !this.isMyPage;
        this.content = this.isMyPage ? '去圈子广场' : '去我的圈子';
        this.title = this.isMyPage ? '我的圈子' : '圈子广场'
        this.show = this.isMyPage ? true : false;

        this.loading = true;
        this.finished = false;

        if (!this.isMyPage) {
          this.activePage = ALL;
            //this.getAllCircles(true)
        } else   {
          if (this.value1 == 0) {
            this.activePage = MYJOINED
            //this.getMyJoinCircles(true)
          } else if (this.value1 == 1) {
            this.activePage = MY;
            //this.getMyCircles(true)
          }
        }
        this.onLoad()
    },
    onGotoCircleDetail (data) {
      this.$router.push({
        path: '/circle-detail',
        query: {
          groupId: data.groupId
        }
      })
    },
    createCircle () {
      this.$router.push({
        path: '/create-circle'
      })
    },
    // 获取全部圈子
    async getAllCircles(isRefresh, keyword=""){
      if (isRefresh) {
        this.circleSearchAfter = null;
        this.circles = [];
      }
        // 测试参数
        let data = {
          keyword: keyword,
          lat: sessionStorage.getItem("lantitude"),
          lng: sessionStorage.getItem("longitude"),
          searchAfter: this.searchAfter,
          size: this.size,
          tab: 'near'
        }

        let res = await this.R.fetchGroupList(data);
        if (!isRefresh) this.circles = this.circles.concat(res.dataList)
        else  this.circles = res.dataList;
        this.circleSearchAfter = res.searchAfter;
        console.log(this.circles)
          if (res.searchAfter) {
          this.finished = res.searchAfter.length == 0 ? true : false;
        } else {
            this.finished = true;
        }
        this.loading = false;
    },
    // 获取我的圈子
    async getMyCircles(isRefresh, keyword=''){
      if (isRefresh) {
         this.circleSearchAfter = null;
         this.circles = []
      }
       // 测试参数
        let data = {
          keyword: keyword,
          lat: sessionStorage.getItem("lantitude"),
          lng: sessionStorage.getItem("longitude"),
          searchAfter: this.myCircleSearchAfter,
          size: this.size,
          tab: 'my'
        }
        let res = await this.R.fetchGroupList(data);
        if (!isRefresh) this.circles = this.circles.concat(res.dataList)
        else  this.circles = res.dataList;
        this.circleSearchAfter = res.searchAfter;
        console.log(res)
        if (res.searchAfter) {
          this.finished = res.searchAfter.length == 0 ? true : false;
        } else {
            this.finished = true;
        }
        console.log(this.finished)
        this.loading = false;
    },
    // 获取我加入的圈子
    async getMyJoinCircles(isRefresh, keyword=''){
      if (isRefresh) {
        this.circleSearchAfter = null;
        this.circles = [];
      }
         let data = {
          keyword: keyword,
          lat: sessionStorage.getItem("lantitude"),
          lng: sessionStorage.getItem("longitude"),
          searchAfter: this.myJoinCircleSearchAfter,
          size: this.size,
          tab: 'joined'
        }
        console.log(data)
        let res = await this.R.fetchGroupList(data);
        console.log(res)
        if (!isRefresh) {
            this.circles = this.circles.concat(res.dataList)
        } else {
            this.circles = res.dataList;
        }
        this.circleSearchAfter = res.searchAfter;
        console.log(this.circles)
        if (res.searchAfter) {
          this.finished = res.searchAfter.length == 0 ? true : false;
        } else {
            this.finished = true;
        }
        
        this.loading = false;
    }
  }
}

</script>
