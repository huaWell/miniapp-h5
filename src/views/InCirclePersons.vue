<style lang="less" scoped>
@import '~@/styles/colors.less';
.persons-container {
  .person {
    // width: 100%;
    display: flex;
    align-items: center;
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
    .flex {
      flex: 1;
    }
  }
}
</style>
<template>
  <div class="persons-container">

 <van-pull-refresh v-model="refreshing" @refresh="OnRefresh" style="min-height:100vh">
    <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
        <van-cell-group>
          <!-- <van-cell is-link @click="onGotoBlackList">
            <div slot="title">
              黑名单列表
            </div>
          </van-cell> -->
          <van-cell v-for="(user, index) in users" :key="index">
            <div slot="title" class="person">

              <!-- <span class="text">我是人迷给你的健康疗法介绍的咖啡机撒娇发大水</span> -->


          <div class="header" @click="toMyCenter(user)">
            <img :src=user.headImg alt="" class="avatar" @click="toMyCenter(user)">
            <div class="right">
              <div class="nickname">{{user.name}}</div>
              <div class="date">{{$formatDate(user.joinedTime)}}</div>
            </div>
          </div>
              <!-- <span class="flex"></span>
              <van-icon name="delete-o" /> -->
            </div>
          </van-cell>
        </van-cell-group>
    </van-list>    
   </van-pull-refresh>

  </div>
</template>
<script>

import { Search,PullRefresh, List } from 'vant';


  export default {
    name: 'InCirclePersons',
    components: {
      [Search.name]: Search,
      [PullRefresh.name]: PullRefresh,
      [List.name]: List
    },
    data () {
    	return {
        groupId: 0,
    		page: 1,
        size: 30,
        users: [],
        hasMore: false,
        searchValue: '',
        refreshing:false,
        loading:false,
        finished:false
    	}
    },
   mounted () {
      let groupId = this.$route.query.groupId;
      this.groupId = groupId;
      console.log(groupId)
    },
    methods: {
      async onLoad(){
        console.log("onload")
        await this.getUserList()
      },
      async OnRefresh(){
        this.page = 1;
        await this.getUserList()
        this.refreshing = false;
      },
      async getUserList(){
        let data = {
          id: this.groupId,
          pageNum: this.page,
          pageSize: this.size
        }
        let res = await this.D.fetchGroupUserList(data);
        if (this.page == 1) {
          this.users = res.dataList;
        } else {
          this.user = this.users.concat(res.dataList)
        }
        this.hasMore = res.hasMore;
        this.loading = false;
        this.finished = !res.hasMore;
      },
      onGotoBlackList () {
        this.$router.push({
          path: '/black-list'
        })
      },
      toMyCenter(user){
        let param_str = encodeURIComponent(JSON.stringify({id: user.id}))
        console.log(user)
        wx.miniProgram.navigateTo({
          url: `/pages/my-center/main?data=${param_str}`
        })
      }
    }
  }
</script>