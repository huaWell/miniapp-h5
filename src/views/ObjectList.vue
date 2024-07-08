<style lang="less" scoped>
  @import '~@/styles/colors.less';
.object-list-container{
    padding: 10px 16px;
    box-sizing: border-box;
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
            position: relative;
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
                justify-content: space-between;
                height: 32px;
                padding: 4px 8px;
               // background: rgba(255,137,28,0.1);
                border-radius: 12px;
                width: calc(100% - 10px);
                .price{
                    background: red;
                    color: #fff;
                    //background: linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%);
                    padding: 4px 8px;
                    box-sizing: border-box;
                    border-radius: 6px;
                    position: absolute;
                    // left: 8px;
                    // top: 8px;
                }
                .amount{
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: red;
                    color: #fff;
                    //background: linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
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
            width: 100%;
            bottom: 0px;
            //left: 0px;
            color: white;
            height: 32px;
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%);
            border-radius: 0 0 8px 8px;
            box-sizing: border-box;
            padding: 8px 8px;
          
          .title {
            font-weight: bold;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            //height: 32px;
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
</style>

<template>
    <div class="object-list-container">
        <!-- <van-pull-refresh v-model="refreshing" @refresh="OnRefresh" style="height:100%">
            <van-list style="min-height:400px;"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              > -->
            <square :hwRatio="1" width="50%" v-for="(l,index) in lists" :key="index" class="square">
                <div class="circle-item" @click="toDetailPage(l,index)">
                <div class="inner" :style="{'backgroundImage': 'url(' + l.img + ')'}">
                      <div class="owner">
                        <div class="price">{{l.price}}</div>
                        <!-- <div class="amount">1</div> -->
                            <!-- <div class="icon--owner"></div>
                            <span class="text">群主</span> -->
                        </div>
                   <div class="footer">
                        <div class="title text-overflow--1">
                            {{l.name}}
                        </div>
                        <!-- <div class="desc">
                            <span class="text">
                             1动态
                            </span>
                            <span class="divider"></span>
                            <span class="text">
                            111人加入
                            <van-icon name="arrow" />
                            </span>
                        </div> -->
                     
                    </div>
                </div>
                </div>
            </square>
            <!-- <div style="clear:both"></div>
            </van-list>    

        </van-pull-refresh> -->
    </div>
</template>

<script>
import {PullRefresh, List} from 'vant';

export default {
    name: 'ObjectList',
    components: {
        [PullRefresh.name]: PullRefresh,
        [List.name]: List
    },
    data(){
        return {
            refreshing: false,
            loading:false,
            finished:false,
            lists:[]
        }
    },
    async mounted(){
      let code = this.$route.query.code;
      this.getCategoryDashboard(code)
    },  
    methods: {
      async getCategoryDashboard(code){
        let res = await this.O.fetchCategoryDashboard(code)
        console.log(res)
        this.lists = res;
      },
      toDetailPage(category, index){
        console.log(category)
        let type = category.type;
        if (type == 'Category') {
          this.getCategoryDashboard(category.code)
        } else if (type == 'Object') {
          this.$router.push({
            path: '/objectView',
            query: {code: category.code}
          })
        }
      }
    }
}
</script>