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

.model {
  background-color: #fff;
  box-sizing: border-box;
}

.button-panel {
  display: flex;
  background-color: #fff;
  padding: 16px 8px;
  box-sizing: border-box;

  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .text {
      font-weight: 500;
      font-size: 32px;
    }

    .label {
      font-size: 14px;
      color: #000;
    }
  }
}

.setting {
  height: 100vh;
  position: fixed;
  width: 70vw;
  right: 0;
  top: 0;
  background: #fff;
  padding: 8px 16px;
  box-sizing: border-box;

  .title {
    font-size: 28px;
    font-weight: 500;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 16px;

    .text {
      color: #455A6499;
      font-size: 16px;
      width: 40%;
    }

    .switch {
      margin-left: 8px;
    }
  }

  .item1 {
    // display: flex;
    // flex-direction: column;
    margin-top: 16px;

    .text {
      color: #455A6499;
      font-size: 16px;
      width: 80%;
    }

    .card1 {
      width: 100%;
      margin-top: 6px;
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

.popup {
  padding: 16px;
  box-sizing: border-box;

  .title {}

  .content {}
}

.popupRes {
  padding: 16px;
  box-sizing: border-box;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text {
      color: #323233;
      font-size: 16px;
    }

    .date {
      color: #666;
    }
  }

  .content {
    margin-top: 16px;

    .item {
      font-size: 14px;

      .label {
        color: #666;

      }

      .text {
        margin-left: 4px;
      }
    }
  }
}


.popupTL {
  padding: 16px;
  box-sizing: border-box;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #323233;
    font-size: 16px;
  }

  .content {
    margin-top: 16px;

  }
}

.my-popup {
  padding: 20px;
  box-sizing: border-box
}

.list-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box
}
</style>


<template>
  <div class="container">
    <van-search v-model="name" placeholder="搜索人员/品项" shape="round" />

    <div class="card" style="height: 350px;">
      <custom-select label="" v-model="department" :columns="departmentCols"
        :option="{ label: 'label', value: 'value' }" :isShowAll="false" placeholder="选择部门" :isSearch="true" :max="3" />
      <Charts :options="option" chartId="chart" />
      <van-tabs type="card">
        <van-tab title="周"></van-tab>
        <van-tab title="旬"></van-tab>
        <van-tab title="月"></van-tab>
      </van-tabs>
    </div>

    <div class="card" style="height: 350px;">
      <custom-select label="" v-model="category" :columns="categoryCols" :option="{ label: 'label', value: 'value' }"
        :isShowAll="false" placeholder="选择品类" :isSearch="true" :max="3" />
      <Charts :options="option1" chartId="chart1" />
      <van-tabs type="card">
        <van-tab title="周"></van-tab>
        <van-tab title="旬"></van-tab>
        <van-tab title="月"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>

import Charts from '../components/Charts.vue';
import SearchProduction from '../components/SearchOrder.vue';
import { Slider, DropdownMenu, DropdownItem, Overlay, Switch, Calendar, Popup, Popover } from 'vant';
import CustomSelect from '../components/CustomSelect.vue';

const colorConfig = {
  red: '#d4716e',
  blue: '#457B9D',
  gray: '#d9d9d9'
};

let months = ["2月", "3月", "4月", "5月", "6月", "7月", "8月"];

const grid = {
  left: 50,
  right: 10,
  top: 40,
  bottom: 20
};

export default {
  name: 'FCSTDetail',
  components: {
    Charts,
    CustomSelect,
    [Slider.name]: Slider,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Overlay.name]: Overlay,
    [Switch.name]: Switch,
    [Calendar.name]: Calendar,
    [Popup.name]: Popup,
    [Popover.name]: Popover,
    SearchProduction
  },
  data() {
    return {
      name: "",
      option: {
        tooltip: {
          trigger: 'axis'
        },
        grid,
        legend: {
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: months
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '部门1',
            type: 'line',
            data: [
              3.0, 9.9, 13.9, 37.1, 62.7, 139.9
            ]
          },
          {
            name: '部门2',
            type: 'line',
            data: [
              7.0, 15.9, 23.9, 27.1, 60.7, 189.4
            ]
          },
          {
            name: '部门3',
            type: 'line',
            data: [
              10.0, 16.9, 43.9, 97.1, 162.7, 109.4
            ]
          }
        ]
      },
      option1: {
        tooltip: {
          trigger: 'axis'
        },
        grid,
        legend: {
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: months
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '品类1',
            type: 'line',
            data: [
              3.0, 9.9, 13.9, 37.1, 62.7, 139.9
            ]
          },
          {
            name: '品类2',
            type: 'line',
            data: [
              7.0, 15.9, 13.9, 67.1, 39.7, 129.4
            ]
          },
          {
            name: '品类3',
            type: 'line',
            data: [
              10.0, 16.9, 2.9, 97.1, 162.7, 109.4
            ]
          }
        ]
      },
      department: [1, 2, 3],
      departmentCols: Array.from({ length: 10 }, (_, index) => ({
        label: "部门" + (index + 1), value: index + 1
      })),
      category: [1, 2, 3],
      categoryCols: Array.from({ length: 10 }, (_, index) => ({
        label: "品类" + (index + 1), value: index + 1
      }))
    }
  },
  async mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  }
}
</script>
