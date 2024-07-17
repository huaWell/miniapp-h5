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
.model{
  background-color: #fff;
  box-sizing: border-box;
}

.button-panel{
  display: flex;
      background-color: #fff;
      padding: 16px 8px;
      box-sizing: border-box;
      .item{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .text{
          font-weight: 500;
          font-size: 32px;
        }
        .label{
          font-size: 16px;
          color: #000;
        }
      }
}
</style>


<template>
  <div class="container">
    <div class="stats">
      <div class="item">
          <div class="text">120</div>
          <div class="label">产能明细</div>
      </div>
      <div class="item">
          <div class="text">60</div>
          <div class="label">单位产能利润</div>
      </div>
      <div class="item">
          <div class="text">50</div>
          <div class="label">昨日数据</div>
      </div>
    </div>

    <div class="model">
      <!-- <Select label="测试" title-width="70" place="请选择" list="{{testList}}"></Select> -->
    
      <van-dropdown-menu active-color="#ACADBB">
        <van-dropdown-item custom-class="my-dropdown-menu" v-model="strategys" :options="strategysOption"
          />
        <van-dropdown-item v-model="orders" :options="ordersOption" />
      </van-dropdown-menu>

      <!-- <label for="">策略</label>
      <select name="策略" id="">
        <option value="1">策略1</option>
        <option value="2">策略2</option>
      </select>
      <label for="" style="margin-left: 16px;">订单</label>
      <select name="策略" id="">
        <option value="1">订单1</option>
        <option value="2">订单2</option>
      </select> -->
    </div>

    <div class="button-panel">
      <div class="item">
          <div class="text">
            <van-icon color="#1989fa" name="clock-o" />
          </div>
          <div class="label">一键无延误</div>
      </div>
      <div class="item">
          <div class="text">
            <van-icon color="#1989fa" name="label-o" />
          </div>
          <div class="label">自定义投料</div>
      </div>
      <div class="item">
          <div class="text">
            <van-icon color="#1989fa" name="refund-o" />
          </div>
          <div class="label">定价</div>
      </div>
    </div>

    <div class="card" style="height: 500px">
   

      <!-- <div>
        <van-button size="small" round @click="toOrderProgress">进度查询</van-button>
      </div> -->
      <div class="title">
        <div class="value">
          {{ data.title }}
        </div>
        <div class="bar">
          <div style="font-size: 20px;">
            <van-icon color="#000" name="setting" />
          </div>
          <div style="font-size: 20px;" @click="onSetQuotateStrategy">
            <van-icon color="#1989fa" name="bill" />
          </div>
        </div>
      </div>
      <div>预计完成时间: {{ data.month }}</div>
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

    <div class="card" style="height: 300px;">
      <div class="title">
        <div class="value">
          FCST 销售
        </div>
      </div>
      <Charts :options="option5" chartId="chart6" />
    </div>

    <div class="card" style="height: 300px;">
      <div class="title">
        <div class="value">
          单位产能利润
        </div>
      </div>
      <Charts :options="option6" chartId="chart7" />
    </div>

    <div class="card" style="height: 300px">
      <div class="title">
        <div class="value">
          延误订单
        </div>
      </div>
      <Charts :options="option1" chartId="chart2" />
    </div>

    <div class="card" style="height: 300px">
      <div class="title">
        <div class="value">
          资金流向
        </div>
      </div>
      <Charts :options="option2" chartId="chart3" />
    </div>

    <div class="card" style="height: 300px;">
      <div class="title">
        <div class="value">
          客户变更统计
        </div>
      </div>
      <Charts :options="option3" chartId="chart4" />
    </div>

    <div class="card" style="height: 300px;">
      <div class="title">
        <div class="value">
          变更原因
        </div>
      </div>
      <Charts :options="option4" chartId="chart5" />
    </div>

    <div class="fixPanel">
      <van-button class="btn btn1">策 略</van-button>
      <van-button class="btn btn2">确 认</van-button>
    </div>
  </div>
</template>

<script>

import Charts from '../components/Charts.vue';
import { Slider, DropdownMenu, DropdownItem } from 'vant';

const colorConfig = {
  red: '#d4716e',
  blue: '#457B9D',
  gray: '#d9d9d9'
};

let months = ["2月", "3月", "4月", "5月", "6月", "7月", "8月"];

const rawData = [
  [10, 30, 30, 33, 39, 33, 32],
  [32, 13, 10, 13, 9, 23, null],
  [10, 20, 10, 5, 20, 10, 40],
];
const totalData = [];
for (let i = 0; i < rawData[0].length; ++i) {
  let sum = 0;
  for (let j = 0; j < rawData.length; ++j) {
    sum += rawData[j][i];
  }
  totalData.push(sum);
}
const grid = {
  left: 50,
  right: 10,
  top: 40,
  bottom: 20
};

export default {
  name: 'capacityOccupancy',
  components: {
    Charts,
    [Slider.name]: Slider,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
  },
  data() {
    return {
      data: {
        title: "这是标题",
        month: "2024-7月",
        amount: 0,
        strategysOption: [
        { text: '策略', value: 0 },
        { text: '策略1', value: 1 },
        { text: '策略2', value: 2 },
        { text: '策略3', value: 3 },
      ],
      ordersOption: [
        { text: '订单选择', value: 0 },
        { text: '订单1', value: 1 },
        { text: '订单2', value: 2 },
        { text: '订单3', value: 3 }
      ],
      strategys: 0,
      orders: 0,
      },
      strategysOption: [
        { text: '策略', value: 0 },
        { text: '策略1', value: 1 },
        { text: '策略2', value: 2 },
        { text: '策略3', value: 3 },
      ],
      ordersOption: [
        { text: '订单选择', value: 0 },
        { text: '订单1', value: 1 },
        { text: '订单2', value: 2 },
        { text: '订单3', value: 3 }
      ],
      strategys: 0,
      orders: 0,
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
              formatter: '{c}%'
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

      option1: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['实际', '预计']
        },
        grid,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [...months, ""]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '实际',
            type: 'line',
            step: 'end',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [200, 182, 151, 194, 300, 310, 290]
          },
          {
            name: '预计',
            type: 'line',
            step: 'end',
            lineStyle: {
              type: "dashed"
            },
            // areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310, 290]
          }
        ]
      },

      option2: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            let tar;
            if (params[1] && params[1].value !== '-') {
              tar = params[1];
            } else {
              tar = params[2];
            }
            return tar && tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          }
        },
        legend: {
          data: ['支出', '收入']
        },
        grid,
        xAxis: {
          type: 'category',
          data: months
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            silent: true,
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            },
            emphasis: {
              itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
              }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
          },
          {
            name: '收入',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
          },
          {
            name: '支出',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'bottom'
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
          }
        ]
      },

      option3: {
        xAxis: {
          type: 'category',
          data: months
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid,
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      },

      option4: {
        // graphic: {
        //   elements: [
        //     {
        //       type: 'text',
        //       right: 'center',
        //       bottom: 'center',
        //       style: {
        //         text: '变更原因\n\n75%',
        //         textAlign: 'center'
        //       },
        //       z: 100
        //     }
        //   ]
        // },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['45', '60'],
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
              { value: 30, name: '原因1' },
              { value: 40, name: '原因2' },
              { value: 20, name: '原因3' },
              { value: 10, name: '其他' }
            ]
          }
        ]
      },

      option5: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [
            '实际',
            {
              name: '预计',
              itemStyle: {
                borderType: 'dashed',
                borderWidth: 1,
                color: 'transparent',
                borderColor: '#EA5B3A'
              }
            }
          ]
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
            name: '实际',
            type: 'bar',
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 0
            ]
          },
          {
            name: '预测',
            type: 'bar',
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6
            ],
            itemStyle: {
              color: 'transparent',
              borderColor: '#165DFF',
              borderType: 'dashed'
            },
          }
        ]
      },

      option6: {
        xAxis: {
          type: 'category',
          data: months
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid,
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [20, 50, 45, 28, 35, 47, 26],
            type: 'line',
            markLine: {
              symbol: "none",
              label: {
                show: true,  // 显示标签
                position: 'insideEndTop', // 标签显示在终点处
                formatter: '{b} {c}%' // 使用名称作为标签内容
              },
              data: [
                {
                  type: 'average',
                  name: '平均'

                }
              ]
            }
          }
        ]
      },



    }
  },
  async mounted() {
    this.data.title = "产品名称";
    console.log(this.$route.query.data)
    var data = this.$route.query.data
    if (data) {
      data = JSON.parse(data)
      this.data.title = data.productionName;
      this.data.amount = data.amount
    }
  },
  methods: {
    toOrderProgress(){
      this.$router.push({
        path: "/orderProgress"
      })
    },
    onSetQuotateStrategy() {
      let _this = this
      this.$router.push({
        path: "/quotate-strategy",
        query: {
          data: JSON.stringify({
            productionName: _this.data.title,
            amount: _this.data.amount
          })
        }
      })
    }
  }
}
</script>
