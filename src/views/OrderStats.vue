<style lang="less" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 8px;
  background-color: #f1f5fa !important;
  flex-direction: column;
  overflow: scroll;
  padding-bottom: 100px;
  box-sizing: border-box;
}

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
      color: rgb(51, 51, 51);
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
    <!-- <van-tree-select :items="items" :main-active-index="mainActiveIndex" :active-id="activeId" :max="max"
      @click-nav="onClickNav" @click-item="onClickItem" /> -->

    <div class="card" v-for="(item, index) in categories" style="height: 28vh;" @click="onCategoryClick(item)">
      <div class="title">
        <div class="value">
          {{ item.label }}
        </div>
      </div>
      <Charts :options="item.option" :chartId="'chart' + (index + 1)" />
    </div>
    <!-- <div style="position: fixed;bottom: 20px;width: 100vw;">
      <van-button class="my-van-button" round size="middle" type="primary" @click="toOrderList"> 订单列表 </van-button>
    </div> -->

    <van-popup v-model="showPopup" position="bottom">
      <div class="card">
        <div class="title">
          <div class="value">{{ popupTitle }}</div>
        </div>
        <div class="grid">
          <div class="item" v-for="( card, index ) in  cards " @click="toOrderList">
            <div class="title">{{ card.name }}</div>
            <div class="value">{{ card.value }}</div>
          </div>
        </div>
      </div>

    </van-popup>

  </div>
</template>

<script>
import Charts from '../components/Charts.vue';
import { Popup } from 'vant';

export default {
  name: "orderStats",
  components: {
    Charts,
    [Popup.name]: Popup
  },
  data() {
    return {
      cards: [],
      categories: [
        {
          label: "产品分类",
          option: {
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['0', '60'],
                label: {
                  show: true,
                  position: 'outside',
                  alignTo: 'labelLine',
                  formatter: '{b}: {d}%'
                },
                labelLine: {
                  showAbove: true,
                  length: 5,
                  length2: 40
                },
                data: [
                  { value: 30, name: '产品1' },
                  { value: 30, name: '产品2' },
                  { value: 20, name: '产品3' },
                  { value: 10, name: '产品4' },
                  { value: 10, name: '其它' }
                ]
              }
            ]
          },
        },
        {
          label: "异常情况",
          option: {
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['0', '60'],
                label: {
                  show: true,
                  position: 'outside',
                  alignTo: 'labelLine',
                  formatter: '{b}: {d}%'
                },
                labelLine: {
                  showAbove: true,
                  length: 5,
                  length2: 40
                },
                data: [
                  { value: 60, name: '轻微延迟' },
                  { value: 30, name: '严重延迟' },
                  { value: 10, name: '其它' }
                ]
              }
            ]
          }
        },
        {
          label: "异常原因",
          option: {
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['0', '60'],
                label: {
                  show: true,
                  position: 'outside',
                  alignTo: 'labelLine',
                  formatter: '{b}: {d}%'
                },
                labelLine: {
                  showAbove: true,
                  length: 5,
                  length2: 40
                },
                data: [
                  { value: 40, name: '插单' },
                  { value: 40, name: '飞单' },
                  { value: 20, name: '其它' }
                ]
              }
            ]
          }
        },
        {
          label: "客户分类",
          option: {
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['0', '60'],
                label: {
                  show: true,
                  position: 'outside',
                  alignTo: 'labelLine',
                  formatter: '{b}: {d}%'
                },
                labelLine: {
                  showAbove: true,
                  length: 5,
                  length2: 40
                },
                data: [
                  { value: 45, name: '客户分类1' },
                  { value: 30, name: '客户分类2' },
                  { value: 25, name: '客户分类13' }
                ]
              }
            ]
          }
        }
      ],
      mainActiveIndex: 0,
      activeId: [],
      max: 2,
      items: [{
        name: "A", text: "产品", children: [{ id: 1, name: "A1", text: "产品1" },
        { id: 2, name: "A2", text: "产品2" },
        { id: 3, name: "A3", text: "产品3" },
        { id: 4, name: "A4", text: "产品4" },
        { id: 5, name: "A5", text: "产品5" },
        { id: 6, name: "A5", text: "产品6" },
        { id: 7, name: "A5", text: "产品7" },
        { id: 8, name: "A5", text: "产品8" },
        { id: 9, name: "A5", text: "其它" }]
      },
      {
        name: "B", text: "状态", children: [{ id: 10, name: "A1", text: "全部订单" },
        { id: 11, name: "A1", text: "正常订单" },
        { id: 12, name: "A1", text: "延误订单" }]
      },
      {
        name: "C", text: "异常原因", children: [{ id: 13, name: "C1", text: "插单" },
        { id: 14, name: "C1", text: "飞单" },
        { id: 15, name: "C1", text: "其它" }]
      },
      {
        name: "D", text: "客户", children: [{ id: 16, name: "A1", text: "客户1" },
        { id: 17, name: "A1", text: "客户2" },
        { id: 18, name: "A1", text: "客户3" },
        { id: 19, name: "A1", text: "客户4" },
        { id: 20, name: "A1", text: "客户5" }]
      },
      {
        name: "E", text: "金额", children: [{ id: 21, name: "A1", text: "全部" },
        { id: 22, name: "A1", text: "1-1000万" },
        { id: 23, name: "A1", text: "1000-3000万" },
        { id: 24, name: "A1", text: ">3000万" }]
      }],
      popupData: [],
      showPopup: false,
      popupTitle: ""
    }
  },
  mounted() {

  },
  methods: {
    toOrderList() {
      this.$router.push({
        path: "/orderProgress"
      })
    },
    onClickNav(index) {
      console.log(index)
      this.mainActiveIndex = index;
    },
    onClickItem(item) {
      console.log(item)
      const index = this.activeId.indexOf(item.id)
      if (index > -1) {
        this.activeId.splice(index, 1)
      } else {
        this.activeId.push(item.id)
      }
    },
    onCategoryClick(item) {
      const data = item.option.series[0].data;
      this.cards = data;
      this.showPopup = true;
      this.popupTitle = item.label;
      console.log(data);
    }
  }
}
</script>
