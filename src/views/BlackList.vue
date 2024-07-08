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


        <van-search class="search" v-model="searchValue" placeholder="搜索商品" shape="round" >

        </van-search>

        <van-cell-group>

          <van-cell>
            <div slot="title" class="person">

              <!-- <span class="text">我是人迷给你的健康疗法介绍的咖啡机撒娇发大水</span> -->


          <div class="header">
            <img src="https://t7.baidu.com/it/u=3631608752,3069876728&fm=193&f=GIF" alt="" class="avatar">
            <div class="right">
              <div class="nickname">发动机阿克苏了附近的撒卡</div>
              <div class="date">20222222/2222</div>
            </div>
          </div>




              <span class="flex"></span>
              <van-icon name="delete-o" />
            </div>
          </van-cell>
        </van-cell-group>



  </div>
</template>
<script>

import { Search } from 'vant';


  export default {
    name: 'InCirclePersons',
    components: {
      [Search.name]: Search,
    },
    data () {
    	return {
    		
    	}
    },
    mounted () {

    },
    methods: {
      onGotoBlacklist () {
        this.$router.push({
          path: '/black-list'
        })
      }
    }
  }
</script>