<style lang="less" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 8px;
  // padding: 8px;
  // box-sizing: border-box;
  background-color: #f1f5fa !important;
  flex-direction: column;
  overflow: scroll;
  padding-bottom: 60px;
  box-sizing: border-box;

  .card {
    background-color: #fff;
    padding: 12px;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-shrink: 0;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-basis: auto;

      .value {
        display: flex;
        gap: 8px;
        align-items: center;
        color: rgb(51, 51, 51);
        font-size: 18px;

        .mark {
          width: 6px;
          height: 18px;
          background: #3775F6;
          border-radius: 4px;
          font-weight: 500px;
        }
      }

      .bar {
        display: flex;
        gap: 4px;
      }
    }

    .content {
      flex: 1;
      display: flex;
      gap: 4px;
    }
  }
}

.fixPanel {
  width: 100vw;
  position: fixed;
  bottom: 0;
  height: 40px;
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

.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #1989FA;
  border-radius: 100px;
}

.slider-text {
  position: absolute;
  top: -3px;
  font-size: 10px;
  color: #fff;
  pointer-events: none;
}

.todo {
  display: flex;
  align-items: center;
  background-color: #f1f5fa;
  border-radius: 4px;
  height: 50px;
  padding: 8px;
  box-sizing: border-box;
  gap: 8px;

  .img {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .content {
    flex: 1;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background-color: #fff;

  .item {
    background-color: #f1f5fa;
    border-radius: 4px;
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;

    .img-box {
      width: 50%;
      height: 60%;
    }

    .img-box-img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 4px;
    }

    .text {
      font-size: 12px;
      margin-top: 4px;
    }
  }
}
</style>


<template>
  <div class="container">
    <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" :text="announcement" />

    <div class="card">
      <div class="title">
        <div class="value">
          <div class="mark"></div>
          快捷入口
        </div>
      </div>
      <div class="grid" style="grid-template-columns: repeat(4, 1fr);">
        <div class="item" style="height: 70px;background-color: transparent;" v-for="(item, index) in items"
          @click="item.click">
          <div class="img-box" v-if="item.text != '...'">
            <img class="img-box-img"
              src="https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390"></img>
          </div>
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="title">
        <div class="value">
          <div class="mark"></div>
          最近待办
        </div>
      </div>
      <div class="grid">
        <div class="item" v-for="( card, index ) in  todos ">
          <div class="title">{{ card.title }}</div>
          <div class="value">{{ card.value }}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="title">
        <div class="value">
          <div class="mark"></div>
          核心指标
        </div>
      </div>
      <div class="grid">
        <div class="item" v-for="( card, index ) in  cards ">
          <div class="title">{{ card.title }}</div>
          <div class="value">{{ card.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NoticeBar } from 'vant';
import { get_homepage_announcement } from '@/modules/api.js';

const colorConfig = {
  red: "#bc4749",
  yellow: "#f6bd60",
  green: "#6a994e"
};

export default {
  name: 'home',
  components: {
    [NoticeBar.name]: NoticeBar
  },
  data() {
    return {
      items: [
        {
          text: "订单态势",
          click: () => {
            this.$router.push({
              path: '/order-stats'
            })
          }
        },
        {
          text: "产能态势",
          click: () => {
            wx.miniProgram.switchTab({
              url: `/pages/webview/main`
            })
          }
        },
        {
          text: "供应态势",
          click() { }
        },
        {
          text: "...",
          click() { }
        }
      ],

      announcement: "订单xx, 需要紧急处理！详细描述：xxx员工对xx设备做出了错误操作,请尽快处理。",

      todos: [
        {
          title: "待审核",
          value: "10"
        },
        {
          title: "待决策",
          value: "25"
        },
        {
          title: "通知",
          value: "2"
        },
        {
          title: "其他",
          value: "10"
        },
      ],

      cards: [
        {
          title: "异常订单",
          value: "25"
        },
        {
          title: "本月待售产能",
          value: "10%"
        },
        {
          title: "毛利",
          value: "5%"
        },
        {
          title: "本月下单数量",
          value: "15"
        },
        {
          title: "总完成数量",
          value: "15"
        },
        {
          title: "完成率",
          value: "95%"
        }
      ]
    }
  },
  async mounted() {
    const res = await get_homepage_announcement();
    this.announcement = res;
  },
  methods: {}
}
</script>
