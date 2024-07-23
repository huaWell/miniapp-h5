<style lang="less" scoped>
@import '~@/styles/colors.less';

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
  gap: 1px;

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

  .btn3 {
    background-color: rgb(25, 108, 42);
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
</style>
<template>
  <div class="container">
    <van-dropdown-menu active-color="#ACADBB">
      <van-dropdown-item v-model="strategys" :options="strategysOption" />
    </van-dropdown-menu>

    <van-cell-group title="产品名称">
      <van-field is-link v-model="productionName" placeholder="请输入产品名称" @click="onSearch" />
    </van-cell-group>
    <!-- <van-cell-group title="策略">
      <van-field is-link v-model="strategy" @click="onSearch" />
    </van-cell-group> -->
    <van-cell-group title="数量">
      <van-field clearable v-model="amount" placeholder="请输入产品数量" />
    </van-cell-group>

    <van-cell-group title="开工日期">
      <van-cell custom-class="my-van-cell--large" is-link @click="onShowTime" :value="date"></van-cell>
    </van-cell-group>

    <div class="card" style="height: 400px">
      <div style="position: relative;">
        <van-slider v-model="value" bar-height="10px">
          <template #button>
            <div class="custom-button">{{ value }}</div>
          </template>
        </van-slider>
        <div class="slider-text" style="left: 33%;">| 33%</div>
        <div class="slider-text" style="left: 66%;">| 66%</div>
      </div>

      <Charts :options="option" chartId="chart1" />
      <van-tabs type="card">
        <van-tab title="周"></van-tab>
        <van-tab title="旬"></van-tab>
        <van-tab title="月"></van-tab>
      </van-tabs>
    </div>


    <div class="fixPanel">
      <van-button class="btn btn1" @click="onSetQuotateStrategy">报 价</van-button>
      <van-button class="btn btn3" @click="onCalculate">计 算</van-button>
      <van-button class="btn btn2">确 认</van-button>
    </div>

    <van-popup v-if="showTime"
      custom-style="height: 60%;border-top-left-radius:24px;border-top-right-radius:24px;overflow:hidden;bottom:0"
      position="bottom">
      <van-datetime-picker title="选择日期" type="date" @input="onInput" :value="currentDate" :min-date="minDate"
        :max-date="maxDate" :show-toolbar="true" @confirm="onConfirmTime" @cancel="showTime = false"
        :formatter="formatter" :visible-item-count="5" />
    </van-popup>
  </div>
</template>
<script>
const MAX_COUNT = 1;
import qs from 'querystring'
import Charts from '../components/Charts.vue';
import { DropdownMenu, DropdownItem, Slider } from "vant"
let random = () => {
  return parseInt(Math.random() * 10000)
}

let months = ["2月", "3月", "4月", "5月", "6月", "7月", "8月"];

const colorConfig = {
  red: '#d4716e',
  blue: '#457B9D',
  gray: '#d9d9d9'
};

const grid = {
  left: 50,
  right: 10,
  top: 40,
  bottom: 20
};

const rawData = [
  [20, 25, 19, 13, 8, 6, 3],
  [0, 0, 0, 0, 0, 0, 0],
  [56, 59, 55, 47, 58, 44, 47]
];

// const rawData1 = [
//   [20, 25, 19, 13, 8, 6, 3],
//   [38, 29, 26, 22, 18, 25, 17],
//   [18, 30, 29, 25, 39, 19, 30],
// ];


export default {
  name: 'Publish',
  components: {
    Charts,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Slider.name]: Slider
  },
  computed: {
  },
  data() {
    return {
      strategys: 0,
      strategysOption: [
        { text: '策略', value: 0 },
        { text: '策略1', value: 1 },
        { text: '策略2', value: 2 },
        { text: '策略3', value: 3 }
      ],
      value: 95,
      option: {
        legend: {
          selectedMode: false
        },
        grid,
        yAxis: {
          type: 'value',
          min: 0,
          max: 100,
          splitNumber: 5,
          axisLabel: {
            show: true,
            formatter: '{value} %', // 格式化y轴文字，添加百分号
            fontSize: 12, // 文字大小
          },
        },
        xAxis: {
          type: 'category',
          data: months
        },
        series: [
          {
            name: "锁定产能",
            type: 'bar',
            stack: 'total',
            barCategoryGap: '0%',
            barGap: '0%',
            itemStyle: {
              color: colorConfig.gray
            },
            label: {
              show: true,
              formatter: '{c}%'
            },
            data: rawData[0],
            animationDelay: function (idx) {
              return idx * 10 + 100;
            },
            markLine: {
              data: [
                {
                  yAxis: 100,
                  name: '总产能',
                  lineStyle: {
                    color: '#E63946', // 线的颜色
                    type: 'dashed' // 线的类型，可以是 'solid', 'dashed', 'dotted'
                  },
                },
                {
                  yAxis: 90,
                  name: '上限产能',
                  lineStyle: {
                    color: '#1D3557', // 线的颜色
                    type: 'dashed' // 线的类型，可以是 'solid', 'dashed', 'dotted'
                  },
                }
              ],
              symbol: "none",
              label: {
                show: true,  // 显示标签
                position: 'insideEndTop', // 标签显示在终点处
                formatter: '{b} {c}%' // 使用名称作为标签内容
              }
            }
          },
          {
            name: "订单产能",
            type: 'bar',
            stack: 'total',
            barCategoryGap: '0%',
            barGap: '0%',
            itemStyle: {
              color: colorConfig.red
            },
            label: {
              show: true,
              formatter: function (params) {
                return params.value == 0 ? '' : params.value + "%";
              }
            },
            data: rawData[1],
            animationDelay: function (idx) {
              return idx * 10 + 100;
            }
          },
          {
            name: "剩余配额产能",
            type: 'bar',
            stack: 'total',
            barCategoryGap: '0%',
            barGap: '0%',
            itemStyle: {
              color: colorConfig.blue
            },
            label: {
              show: true,
              formatter: '{c}%'
            },
            data: rawData[2],
            animationDelay: function (idx) {
              return idx * 10 + 100;
            }
          }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5;
        }
      },
      //new Date(1970, 0).getTime()  new Date(2032, 11).getTime()
      productionName: '',
      strategy: '',
      amount: '',
      date: '',
      showTime: false,
      currentDate: new Date(),
      minDate: new Date(2010, 0),
      maxDate: new Date(2040, 11),
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        }
        if (type === 'month') {
          return `${value}月`;
        }
        return value;
      },
    }
  },
  mounted() {
    // var gotoParam = qs.parse(location.href.split('#')[1].split('?')[1])
    // console.log(gotoParam.isShowProgress)
    // if (gotoParam.isShowProgress) {
    //   this.$router.push({
    //     path: "/order-progress"
    //   })
    //   return
    // }

    var productionName = this.$route.query.productionName
    console.log(productionName)
    if (productionName) {
      this.productionName = productionName
    }


  },
  methods: {
    onShowTime() {
      this.showTime = true;
    },
    onConfirmTime(e) {
      this.showTime = false;
      console.log(this.currentDate)
      let _time = this.$formatDate(this.currentDate);
      console.log(_time)
      this.date = _time.time;
    },
    onInput(e) {
      this.currentDate = e;
    },
    onSearch() {
      console.log('xx')
      this.$router.push({
        path: '/search-production'
      })
    },
    onGenerator() {
      let _this = this
      this.$router.push({
        path: `/capacityOccupancy?v=${random()}`,
        query: {
          data: JSON.stringify({
            productionName: _this.productionName,
            amount: _this.amount
          })

        }
      })
    },
    onSetQuotateStrategy() {
      let _this = this
      this.$router.push({
        path: "/quotate-strategy",
        // query: {
        //   data: JSON.stringify({
        //     productionName: _this.data.title,
        //     amount: _this.data.amount
        //   })
        // }
      })
    },
    onCalculate() {
      this.option.series[1].data = [38, 29, 26, 22, 18, 25, 17];
      this.option.series[2].data = [18, 30, 29, 25, 39, 19, 30];
    }

    // async onGenerator() {
    //    let data = {
    //     content: this.remark,
    //     groupId: this.groupId,
    //     title: this.title
    //   }
    //   console.log(data)
    //   let res = await this.D.fetchCreatePost(data)
    //   console.log(res)
    //   this.$toast.success('创建成功')
    //   this.$router.back()
    // }
  }
}

</script>
