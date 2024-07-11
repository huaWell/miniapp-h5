<style lang="less" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;
  background-color: #f1f5fa !important;
  flex-direction: column;
  overflow: scroll;

  .card {
    background-color: #fff;
    padding: 12px;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 4px;
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
</style>


<template>
  <div class="container">
    <div class="card" style="height: 500px">
      <div class="title">
        <div class="value">
          {{ data.title }}
        </div>
        <div class="bar">
          <div>设置</div>
          <div>报价</div>
        </div>
      </div>
      <div>预计时间: {{ data.month }}</div>
      <Charts :options="option" chartId="chart1" />
    </div>

    <div class="card" style="height: 350px">
      <div class="title">
        <div class="value">
          延误订单
        </div>
      </div>
      <Charts :options="option1" chartId="chart2" />
    </div>

    <div class="card" style="height: 350px">
      <div class="title">
        <div class="value">
          资金流向
        </div>
      </div>
      <Charts :options="option2" chartId="chart3" />
    </div>

    <div class="card" style="height: 350px">
      <div class="title">
        <div class="value">
          资金流向
        </div>
      </div>
      <Charts :options="option2" chartId="chart4" />
    </div>

  </div>
</template>

<script>

import Charts from '../components/Charts.vue';

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
  right: 30,
  top: 50,
  bottom: 40
};

export default {
  name: 'capacityOccupancy',
  components: {
    Charts
  },
  data() {
    return {
      data: {
        title: "这是标题",
        month: "2024-7月"
      },
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
            data: [200, 182, 151, 194, 300, 310, 290, 290]
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
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: (function () {
            let list = [];
            for (let i = 1; i <= 11; i++) {
              list.push('Nov ' + i);
            }
            return list;
          })()
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
            name: 'Income',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
          },
          {
            name: 'Expenses',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'bottom'
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
          }
        ]
      }
    }
  },
  async mounted() {
    this.data.title = "产品名称";
  },
  methods: {
  }
}
</script>
