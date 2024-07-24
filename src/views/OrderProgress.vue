<style lang="less" scoped>
  @import '~@/styles/colors.less';
.object-list-container{
  padding-bottom: calc(100px + env(safe-area-inset-bottom));
  background-color: #fafafa;
  padding-bottom: 100px;
  box-sizing: border-box;
}
    .header{
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 8px;
      box-sizing: border-box;
    }
  .content{
    padding: 0 8px;
    box-sizing: border-box;
  }

    .stats{
      display: flex;
      background-color: #fff;
      padding: 16px 8px;
      box-sizing: border-box;
      margin-top: 16px;
      .item{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .text{
          font-weight: 500;
          font-size: 22px;
        }
        .label{
          font-size: 16px;
          color: #bbb;
        }
      }
    }

    .list{
      margin-top: 16px;
      .item {
        padding: 8px;
        box-sizing: border-box;
        margin-bottom: 16px;
        background-color: #fff;
        border-radius: 4px;
        .serial{
          display: flex;
          align-items: center;
          .name{
            margin-left: 6px;
          }
        }
        .title{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 6px;
          .left{
            display: flex;
            font-size: 14px;
            .production-name{

            }
            .material-name{
              margin-left: 8px;
            }
          }
          .toggle{
            color: #bbb;
            font-size: 12px;
          }
        }
        .progress{
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 50px;
          margin-top: 6px;
          .date-label{
            font-size: 14px;
            color: #aaa;
          }
          .date-text{
            font-size: 14px;
            color: #000;
          }
        }

      }
    }
    .model{
      padding: 16px;
      padding-bottom: 0;
      box-sizing: border-box;
      .title{

      }
    }
    .fayun{
          background-color: #fafafa;
          height: 60px;
          margin-top: 6px;
          padding: 16px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
    .filter{
      height: 100vh;
      position: fixed;
      width: 60vw;
      right: 0;
      top:0;
      background: #fff;
      padding: 8px 16px;
      box-sizing: border-box;
      .item{
        margin-bottom: 16px;
        .title{
          font-size: 20px;
          font-weight: 500;
        }
        .tags{
          display: flex;
          flex-wrap: wrap;
          margin-top: 8px;
          gap: 8px;

          .tag{
            padding: 4px 8px;
            box-sizing: border-box;
            font-size: 12px;
            border-radius: 8px;
            background-color: #fafafa;
          }
        }
      }
      .footer{
        position: fixed;
        bottom: 24px;
        right: 24px;
        display: flex;
        gap: 16px;
      }
    }

    .detail{
      height: 100vh;
      position: fixed;
      width: 60vw;
      right: 0;
      top:0;
      background: #fff;
      padding: 8px 16px;
      box-sizing: border-box;
      .title{
        font-size: 20px;
        font-weight: 500;
      }
      .content{
        .item{
          font-size: 14px;
          height: 24px;
          margin-top: 8px;
          .label{
            color: #000;
          }
        .label::before{
          content: "*";
        }
          .text{

          }
        }
      }
    }

    .model{
        padding: 16px;
        box-sizing: border-box;
        .model-title{

        }
        .model-item{
            margin-top: 12px;
            font-size: 14px;
            color: #aaa;
        }
        .model-item::before{
            content: "*";
            color: red;
        }
    }

    .fixPanel{
      width: 100vw;
      position: fixed;
      bottom: 0;
      height: 60px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      .btn{
        width: 50%;
        font-weight: 500;
      }
      .btn1{
        background-color:  rgb(234, 234, 196);
      }
      .btn2{
        background-color: rgb(25, 137, 250);
      }
    }
</style>

<template>
    <div class="object-list-container">
      <div class="header">
        <van-search style="border-top-right-radius:30px;flex:1" v-model="productionName" placeholder="搜索订单/客户" shape="round"  @focus="onSearchProduct">
        </van-search>
        <div @click="onShowFilter">
          <van-icon name="filter-o" />
        </div>
      </div>

      <div class="content">
        <div class="stats">
          <div class="item">
              <div class="text">120</div>
              <div class="label">全部</div>
          </div>
          <div class="item">
              <div class="text">60</div>
              <div class="label">已完成</div>
          </div>
          <div class="item">
              <div class="text">50%</div>
              <div class="label">完成率</div>
          </div>
        </div>

        <div class="list">
          <div class="item" v-for="(list,index) in lists" :key="index">
            <div class="serial">
              <div v-if="list.status==0">
                <van-icon color="#1989fa" name="info-o" />
              </div>
              <div v-if="list.status==1">
                <van-icon color="red" name="warn-o" />
              </div>
              <div v-if="list.status==2">
                <van-icon color="#07c160" name="balance-o" />
              </div>
              <div class="name">{{list.lineSerial}}</div>
            </div>
            <div class="title">
              <div class="left">
                <div class="production-name">{{list.productionName}}</div>
                <div class="material-name">{{list.materialName}}</div>
              </div>
              <!-- <div class="name">{{list.productionName}}</div> -->
              <div class="toggle" @click="onShowFY">发运</div>
            </div>
            <div class="progress">
              <div>
                <div>
                  <span class="date-label">完工时间:</span>
                  <span class="date-text">{{list.releaseDate}}</span>
                </div>
                <div>
                  <span class="date-label">预计完工时间:</span>
                  <span class="date-text">{{list.calReleaseDate}}</span>
                </div>
              </div>
              <div style="width: 50px;height: 50px;" @click="onShowDetail(list)">
                <van-circle size="50" value="25" layer-color="#D7E3FD" color="#3775F6" stroke-width="6" :text="list.ratio"
                  style="position: absolute;" />
              </div>
            </div>

          </div>
        </div>

      </div>

      <div class="fixPanel">
        <van-button class="btn btn1" @click="showWarn=true">发消息</van-button>
        <van-button class="btn btn2" @click="showWarn=true">打电话</van-button>
      </div>

      <van-action-sheet v-model="showInfo">
        <div class="model">
          <div class="title">发运进度</div>
          <div class="fayun">
          <div style="flex: 1;">
            <van-progress percentage="30" />
          </div>
          <div @click="onShowWarn">
            <van-icon name="warn-o" />
          </div>
        </div>
        </div>

      </van-action-sheet>

      <van-overlay @click="onClickHideFilter" :show="showFilter">
        <div class="filter">
          <div class="item" v-for="(item,index) in filters" :key="index">
             <div class="title">{{item.title}}</div>
              <div class="tags">
                <div class="tag" v-for="(tag,idx) in item.tags" :key="idx">
                  {{tag}}
                </div>
              </div>
          </div>

          <div class="footer">
            <van-button size="small" plain hairline type="primary"> 重 置 </van-button>
            <van-button size="small" type="primary"> 确 定 </van-button>
          </div>
        </div>
      </van-overlay>

      <van-action-sheet v-model="showFYWarn">
          <div class="model">
              <div class="model-title">该模块需以下条件可解锁:</div>
              <div class="model-item">
                  需接入机器及物流信息
              </div>
          </div>
      </van-action-sheet>

      <van-action-sheet v-model="showWarn">
          <div class="model">
              <div class="model-title">该模块需以下条件可解锁:</div>
              <div class="model-item">
                  需接入OA系统
              </div>
          </div>
      </van-action-sheet>

      <van-overlay @click="onClickHideDetail" :show="showDetail">
        <div class="detail" v-if="orderStatus==1">
          <div class="title">
            延误详情
          </div>
          <div class="content">
            <div class="item">
              <span class="label">延误天数:</span>
              <span class="text">5</span>
            </div>
            <div class="item">
              <span class="label">数量:</span>
              <span class="text">500</span>
            </div>
            <div class="item">
              <span class="label">生产车间1机器出现故障</span>
            </div>
          </div>
        </div>
        <div class="detail" v-if="orderStatus==0">
          <div class="title">
            按时完成
          </div>
          <div class="content">
            <div class="item">
              <span class="label">生产:</span>
              <span class="text">500</span>
            </div>
            <div class="item">
              <span class="label">发运:</span>
              <span class="text">500</span>
            </div>
          </div>
        </div>
        <div class="detail" v-if="orderStatus==2">
          <div class="title">
            超额完工
          </div>
          <div class="content">
            <div class="item">
              <span class="label">富余产能:</span>
              <span class="text">500</span>
            </div>
            <div class="item">
              <span class="label">物流:</span>
              <span class="text">400</span>
            </div>
          </div>
        </div>
      </van-overlay>

    </div>
</template>

<script>
import {PullRefresh, List, Circle, Progress, Overlay} from 'vant';

export default {
    name: 'OrderProgress',
    components: {
        [PullRefresh.name]: PullRefresh,
        [List.name]: List,
        [Circle.name]:Circle,
        [Progress.name]: Progress,
        [Overlay.name]: Overlay
    },
    data(){
        return {
            productionName: '',
            lists:[],
            showFY: true,
            showInfo: false,
            showFilter: false,
            showFYWarn: false,
            showDetail: false,
            showWarn: false,
            filters: [
              {title: "按时间",tags: ["近一日","2023","2022"]},
              {title: "按类型",tags: ["自制","外购","客供","成品委外"]},
              {title: "按状态",tags: ["异常","未完成","重点关注"]}
            ],
            orderStatus: 0
        }
    },
    async mounted(){
      this.lists = [{"lineSerial": "订单条目序列号1","productionName": "产品1","materialName": "物料1","startDate": "2024-07-16",
          "releaseDate": "2024-09-01","calReleaseDate": "2024-8-16","ratio":"80%","fyRatio": "40","status": 0},
          {"lineSerial": "订单条目序列号2","productionName": "产品2","materialName": "物料2","startDate": "2024-07-16",
          "releaseDate": "2024-09-01","calReleaseDate": "2024-10-01","ratio":"50%","fyRatio": "40","status": 1},
          {"lineSerial": "订单条目序列号3","productionName": "产品3","materialName": "物料3","startDate": "2024-07-16",
          "releaseDate": "2024-09-01","calReleaseDate": "2024-08-01","ratio":"50%","fyRatio": "40","status":2}
        ]
    },
    methods: {
      onSearchProduct(){
        this.$router.push({
          path: "/search-order"
        })
      },
      onShowFY(){
        console.log("xxxx")
        this.showInfo = true
        console.log(this.showFY)
      },
      onShowFilter(){
        this.showFilter = true

      },
      onClickHideFilter(){
        this.showFilter = false
      },
      onShowWarn(){
        this.showFYWarn = true
      },
      onClickHideDetail(){
        this.showDetail = false
      },
      onShowDetail(list){
        this.orderStatus = list.status
        this.showDetail = true
      }
    }
}
</script>
