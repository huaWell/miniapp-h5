<style lang="less" scoped>
@import '~@/styles/colors.less';

.object-list-container {
  padding-bottom: calc(100px + env(safe-area-inset-bottom));
  background-color: #fafafa;
  padding-bottom: 100px;
  box-sizing: border-box;
}

.header {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  box-sizing: border-box;
}

.content {
  padding: 0 8px;
  box-sizing: border-box;
}

.stats {
  display: flex;
  background-color: #fff;
  padding: 16px 8px;
  box-sizing: border-box;
  margin-top: 16px;

  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .text {
      font-weight: 500;
      font-size: 22px;
    }

    .label {
      font-size: 16px;
      color: #bbb;
    }
  }
}

.list {
  margin-top: 16px;

  .item {
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 16px;
    background-color: #fff;
    border-radius: 4px;

    .serial {
      display: flex;
      align-items: center;
      justify-content: space-between;


      .left {
        display: flex;
        gap: 6px;
        align-items: center;
      }

      .right {}
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 6px;

      .left {
        display: flex;
        font-size: 14px;

        .production-name {}

        .material-name {
          margin-left: 8px;
        }
      }

      .toggle {
        color: #bbb;
        font-size: 12px;
      }
    }

    .progress {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      margin-top: 6px;

      .date-label {
        font-size: 14px;
        color: #aaa;
      }

      .date-text {
        font-size: 14px;
        color: #000;
      }
    }

  }
}

.model {
  padding: 16px;
  padding-bottom: 0;
  box-sizing: border-box;

  .title {}
}

.fayun {
  background-color: #fafafa;
  height: 60px;
  margin-top: 6px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter {
  height: 100vh;
  position: fixed;
  width: 60vw;
  right: 0;
  top: 0;
  background: #fff;
  padding: 8px 16px;
  box-sizing: border-box;

  .item {
    margin-bottom: 16px;

    .title {
      font-size: 20px;
      font-weight: 500;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 8px;
      gap: 8px;

      .tag {
        padding: 4px 8px;
        box-sizing: border-box;
        font-size: 12px;
        border-radius: 8px;
        background-color: #fafafa;
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 24px;
    right: 24px;
    display: flex;
    gap: 16px;
  }
}

.detail {
  height: 100vh;
  position: fixed;
  width: 60vw;
  right: 0;
  top: 0;
  background: #fff;
  padding: 8px 16px;
  box-sizing: border-box;

  .title {
    font-size: 20px;
    font-weight: 500;
  }

  .content {
    .item {
      font-size: 14px;
      height: 24px;
      margin-top: 8px;

      .label {
        color: #000;
      }

      .label::before {
        content: "*";
      }

      .text {}
    }
  }
}

.model {
  padding: 16px;
  box-sizing: border-box;

  .model-title {}

  .model-item {
    margin-top: 12px;
    font-size: 14px;
    color: #aaa;
  }

  .model-item::before {
    content: "*";
    color: red;
  }
}

.fixPanel {
  width: 100vw;
  position: fixed;
  bottom: 0;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    width: 50%;
    font-weight: 500;
  }

  .btn1 {
    background-color: rgb(234, 234, 196);
  }

  .btn2 {
    background-color: rgb(25, 137, 250);
  }
}
</style>

<template>
  <div class="object-list-container">
    <div class="content">
      <van-tabs v-model="active">
        <van-tab title="全部"></van-tab>
        <van-tab title="异常状态"></van-tab>
        <van-tab title="已完成"></van-tab>
      </van-tabs>
      <div class="list">
        <div class="item" v-for="(list, index) in lists" :key="index">
          <div class="serial">
            <div class="left">
              <div v-if="list.status == 0">
                <van-icon color="#1989fa" name="info-o" />
              </div>
              <div v-if="list.status == 1">
                <van-icon color="red" name="warn-o" />
              </div>
              <div v-if="list.status == 2">
                <van-icon color="#07c160" name="balance-o" />
              </div>
              <div class="name">{{ list.lineSerial }}</div>
            </div>
            <!-- <div class="right">
              <div>
                <van-icon :name="list.collect ? 'star' : 'star-o'" color="#d8d250" @click="onStarClick(list)" />
              </div>
            </div> -->

          </div>
          <div class="title">
            <div class="left">
              <div class="production-name">{{ list.productionName }}</div>
              <div class="material-name">{{ list.materialName }}</div>
            </div>
            <!-- <div class="name">{{list.productionName}}</div> -->
            <div class="toggle" @click="onShowFY">发运</div>
          </div>
          <div class="progress">
            <div>
              <div>
                <span class="date-label">完工时间:</span>
                <span class="date-text">{{ list.releaseDate }}</span>
              </div>
              <div>
                <span class="date-label">预计完工时间:</span>
                <span class="date-text">{{ list.calReleaseDate }}</span>
              </div>
            </div>
            <div style="width: 50px;height: 50px;" @click="onShowDetail(list)">
              <van-circle size="50" :value="25" layer-color="#D7E3FD" color="#3775F6" stroke-width="6"
                :text="list.ratio" style="position: absolute;" />
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { PullRefresh, List, Circle, Progress, Overlay, Icon, Tag } from 'vant';

export default {
  name: 'OrderProgress',
  components: {
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [Circle.name]: Circle,
    [Progress.name]: Progress,
    [Overlay.name]: Overlay,
    [Icon.name]: Icon,
    [Tag.name]: Tag
  },
  data() {
    return {
      lists: [],
      active: 0
    }
  },
  async mounted() {
    this.lists = [{
      "lineSerial": "订单条目序列号1", "productionName": "产品1", "materialName": "物料1", "startDate": "2024-07-16", collect: false,
      "releaseDate": "2024-09-01", "calReleaseDate": "2024-8-16", "ratio": "80%", "fyRatio": "40", "status": 0
    },
    {
      "lineSerial": "订单条目序列号2", "productionName": "产品2", "materialName": "物料2", "startDate": "2024-07-16", collect: false,
      "releaseDate": "2024-09-01", "calReleaseDate": "2024-10-01", "ratio": "50%", "fyRatio": "40", "status": 1
    },
    {
      "lineSerial": "订单条目序列号3", "productionName": "产品3", "materialName": "物料3", "startDate": "2024-07-16", collect: false,
      "releaseDate": "2024-09-01", "calReleaseDate": "2024-08-01", "ratio": "50%", "fyRatio": "40", "status": 2
    }
    ]
  },
  methods: {
    onSearchProduct() {
      this.$router.push({
        path: "/search-order"
      })
    },
    onShowFY() {
      console.log("xxxx")
      this.showInfo = true
      console.log(this.showFY)
    },
    onShowFilter() {
      this.showFilter = true

    },
    onClickHideFilter() {
      this.showFilter = false
    },
    onShowWarn() {
      this.showFYWarn = true
    },
    onClickHideDetail() {
      this.showDetail = false
    },
    onShowDetail(list) {
      this.orderStatus = list.status
      this.showDetail = true
    },
    onStarClick(list) {
      list.collect = !list.collect
      console.log(list);
    }
  }
}
</script>
