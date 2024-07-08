<style lang="less" scoped>
  @import '~@/styles/colors.less';
.home-container {
  .tab-content {
    padding: 10px 16px;
    width: 100%;
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


</style>
<template>
  <div class="home-container">
    <!-- <button @click="test">去创建圈子</button>
    <button @click="detail">圈子详情</button> -->
    <van-tabs v-model="activeTab"  @click="onTabChange">
      <van-tab v-for="(tab, key) in tabs" :key="key" :title="tab.name"></van-tab>
    </van-tabs>
    <div class="tab-content clearfix" v-if="activeTab==0">
      <square :hwRatio="1" width="50%" v-for="(circle, index) in allCircle" :key="index" class="square">
        <div class="circle-item" @click="onGotoCircleDetail(circle)">
          <div class="inner" :style="{'backgroundImage': 'url(' + circle.img + ')'}">
            
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
      <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!searchAfter">
        <van-divider contentPosition="center">已经到底了</van-divider>
      </div>

      
       <div class="options-button" @click="createCircle">
         <img class="icon--publish" alt="">
      </div>
       
    </div>
    <div class="tab-content clearfix" v-if="activeTab==1">
      <div class="filter-block">
        <div class="item" v-for="(item, key) in filters" :key="key" :class="{'active': activeFilterIndex==key}" @click="onClickFilter(item, key)">
          {{item.name}}
        </div>
      </div>

       <div class="tab-content clearfix" v-if="activeFilterIndex==0">
        <square :hwRatio="1" width="50%" v-for="(circle, index) in myCircle" :key="index" class="square">
          <div class="circle-item" @click="onGotoCircleDetail(circle)">
            <div class="inner" :style="{'backgroundImage': 'url(' + circle.img + ')'}">
              
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
        <div style="clear: both;"></div>
         <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!myCircleSearchAfter && myCircle.length > 0">
            <van-divider contentPosition="center">已经到底了</van-divider>
        </div>
          <van-empty v-if="myCircle.length == 0" description="你还没有圈子, 快去创建吧~">
            <van-button size="small" type="info"> 立即创建 </van-button>
          </van-empty>
    </div>

     <div class="tab-content clearfix" v-if="activeFilterIndex==1">
      <square :hwRatio="1" width="50%" v-for="(circle, index) in myJoinCircle" :key="index" class="square">
        <div class="circle-item" @click="onGotoCircleDetail(circle)">
          <div class="inner" :style="{'backgroundImage': 'url(' + circle.img + ')'}">
            
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
      <div style="clear: both;"></div>
      <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!myJoinSearchAfter && myJoinCircle.length > 0">
            <van-divider contentPosition="center">已经到底了</van-divider>
        </div>
        <van-empty v-if="myJoinCircle.length == 0" description="你还没有圈子, 快去创建吧~">
            <van-button size="small" type="info"> 立即创建 </van-button>
        </van-empty>
    </div>


      <!--       <square :hwRatio="1" width="50%" v-for="i in 2" class="square">
        <div class="circle-item">
          <div class="inner" :style="{'backgroundImage': 'url(' + 'https://t7.baidu.com/it/u=3631608752,3069876728&fm=193&f=GIF' + ')'}">
          </div>
        </div>
      </square> -->
    
    </div>

    

  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
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
      myJoinCircleSearchAfter:null
    }
  },
  async mounted() {
    // let res = await this.R.fetchWXConfig(location.href)
    // console.log(res)

    try {
       await this.getAllCircles(true)
     } catch (err) {
      console.log(err, 'err')
     }

  },
  methods: {
    async onClickFilter(item, index) {
      this.activeFilterIndex = index;
      if (this.activeFilterIndex == 1 && this.myJoinCircle.length < 1) {
        this.getMyJoinCircles(true);
      }
    },
    onGotoCircleDetail (data) {
      this.$router.push({
        path: '/circle-detail',
        query: {
          data: JSON.stringify(data)
        }
      })
    },
    createCircle () {
      this.$router.push({
        path: '/create-circle'
      })
    },
    detail () {
      this.$router.push({
        path: '/circle-detail'
      })
    },
    async onTabChange(){
      console.log(this.activeTab)
      if (this.activeTab == 1 && this.myCircle.length < 1) {
        this.getMyCircles(true)
      }
    },
    // 获取全部圈子
    async getAllCircles(isRefresh=false){
      if (isRefresh) {
        this.searchAfter = null
      }
        // 测试参数
        let data = {
          keyword: '',
          lat: sessionStorage.getItem("lantitude"),
          lng: sessionStorage.getItem("longitude"),
          searchAfter: this.searchAfter,
          size: this.size,
          tab: 'near'
        }

        let res = await this.R.fetchGroupList(data);
        if (!isRefresh) this.allCircle = this.allCircle.concat(res.dataList)
        else  this.allCircle = res.dataList;
        this.searchAfter = res.searchAfter;
        console.log(this.allCircle)
    },
    // 获取我的圈子
    async getMyCircles(isRefresh=false){
      if (isRefresh) {
         this.myCircleSearchAfter = null;
      }
       // 测试参数
        let data = {
          keyword: '',
          lat: sessionStorage.getItem("lantitude"),
          lng: sessionStorage.getItem("longitude"),
          searchAfter: this.myCircleSearchAfter,
          size: this.size,
          tab: 'my'
        }
        let res = await this.R.fetchGroupList(data);
        if (!isRefresh) this.myCircle = this.myCircle.concat(res.dataList)
        else  this.myCircle = res.dataList;
        this.myCircleSearchAfter = res.searchAfter;
        console.log(res)
    },
    // 获取我加入的圈子
    async getMyJoinCircles(isRefresh=false){
      if (isRefresh) {
        this.myJoinCircleSearchAfter = null;
      }
         let data = {
          keyword: '',
          lat: sessionStorage.getItem("lantitude"),
          lng: sessionStorage.getItem("longitude"),
          searchAfter: this.myJoinCircleSearchAfter,
          size: this.size,
          tab: 'joined'
        }
        let res = await this.R.fetchGroupList(data);
        if (!isRefresh) this.myJoinCircle = this.myJoinCircle.concat(res.dataList)
        else  this.myJoinCircle = res.dataList;
        this.myJoinCircleSearchAfter = res.searchAfter;
        console.log(res)
    }
  }
}

</script>
