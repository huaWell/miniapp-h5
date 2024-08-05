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

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {}

    .right {}
  }
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
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  flex-direction: column;

  .item {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .text {}

  .disable {
    color: #ddd
  }
}

.list-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box
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
        <van-dropdown-item custom-class="my-dropdown-menu" v-model="strategys" :options="strategysOption" />
        <van-dropdown-item title="订单选择" ref="itemRef">
          <SearchProduction @item-click="onOrderChange" />
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <div class="button-panel">
      <div class="item">
        <div class="text">
          <van-icon color="#1989fa" name="clock-o" />
        </div>
        <div class="label">一键无延误</div>
      </div>
      <div class="item" @click="onShowTL">
        <div class="text">
          <van-icon color="#1989fa" name="label-o" />
        </div>
        <div class="label">自定义投料</div>
      </div>
      <!-- <div class="item" @click="onSetQuotateStrategy">
        <div class="text">
          <van-icon color="#1989fa" name="refund-o" />
        </div>
        <div class="label">定价</div>
      </div> -->
      <div class="item" @click="addNewOrder">
        <div class="text">
          <van-icon color="#1989fa" name="add-o" />
        </div>
        <div class="label">新建订单</div>
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
          <van-popover v-model="showPopover" trigger="click" placement="left">
            <div style="display: flex; gap: 8px;padding: 8px;">
              <div style="font-size: 20px;">
                <van-button icon="setting" size="small" @click="onClickSetting" />
                <!-- <van-icon color="#000" name="setting" @click="onClickSetting" /> -->
              </div>
              <div style="font-size: 20px;">
                <van-button icon="bill" size="small" @click="qujiantongji" />
                <!-- <van-icon color="#1989fa" name="bill" /> -->
              </div>
            </div>
            <template #reference>
              <van-button size="small">...</van-button>
            </template>
          </van-popover>
        </div>
      </div>

      <!-- <div style="position: relative;">
        <div @click="qujiantongji" style="position: absolute;right: 0;font-size: 12px;color: #aaa;">区间统计</div>
      </div> -->

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

    <div class="card" style="height: 400px;">
      <div class="title">
        <div class="value">
          FCST 销售
        </div>
        <div class="bar">
          <van-button icon="browsing-history" size="small" @click="onShowAnalyze" />
        </div>
      </div>
      <div @click="toFCSTDetail" style="flex: 1;">
        <Charts :options="option5" chartId="chart6" />
      </div>
      <van-tabs type="card">
        <van-tab title="周"></van-tab>
        <van-tab title="旬"></van-tab>
        <van-tab title="月"></van-tab>
      </van-tabs>
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
      <van-button class="btn btn1" @click="onShowStrategy">策 略</van-button>
      <van-button class="btn btn2">确 认</van-button>
    </div>

    <van-overlay @click="onClickHideSetting" :show="showSetting">
      <div class="setting">
        <div class="title">设置</div>
        <div class="item">
          <div class="text">总产能</div>
          <div class="switch">
            <van-switch size="20" v-model="check1" />
          </div>
        </div>
        <div class="item">
          <div class="text">产能上限</div>
          <div class="switch">
            <van-switch size="20" v-model="check2" />
          </div>
        </div>
        <div class="item">
          <div class="text">配额上限</div>
          <div class="switch">
            <van-switch size="20" v-model="check3" />
          </div>
        </div>
        <div class="item">
          <div class="text">显示缺口</div>
          <div class="switch">
            <van-switch size="20" v-model="check4" />
          </div>
        </div>
        <div class="item1">
          <div class="text">副图指标数量</div>
          <div class="card1">
            <van-tabs type="card">
              <van-tab title="1"></van-tab>
              <van-tab title="2"></van-tab>
              <van-tab title="3"></van-tab>
              <van-tab title="4"></van-tab>
              <van-tab title="5"></van-tab>
              <van-tab title="6"></van-tab>
            </van-tabs>
          </div>

        </div>

        <div class="footer">
          <van-button size="small" plain hairline type="primary"> 重 置 </van-button>
          <van-button size="small" type="primary" @click="confirmSetting"> 确 定 </van-button>
        </div>
      </div>
    </van-overlay>

    <van-overlay @click="onClickHideStrategy" :show="showStrategy">
      <div class="setting">
        <div class="title">策略</div>
        <div style="margin-top: 16px;">
          <van-cell-group>
            <van-field v-model="gongshi" clearable label="工时" icon="question-o" placeholder="请输入工时" />

            <custom-select label="班次" v-model="bancis" :columns="bancisColumns"
              :option="{ label: 'label', value: 'value' }" :isShowAll="false" placeholder="选择班次" />

            <van-cell title="配额" is-link @click="onShowPE" v-model="peie" />
            <van-field v-model="customPeie" clearable label="自定义" icon="question-o" placeholder="请输入班次" />
            <custom-select label="优先级" v-model="youxianji" :columns="youxianjiColumns"
              :option="{ label: 'label', value: 'value' }" :isShowAll="false" placeholder="选择优先级" />
          </van-cell-group>

        </div>

        <div class="footer">
          <van-button size="small" plain hairline type="primary"> 重 置 </van-button>
          <van-button size="small" type="primary" @click="confirmStrategy"> 确 定 </van-button>
        </div>
      </div>
    </van-overlay>

    <van-action-sheet v-model="showQJ">
      <div class="popup" style="height: 80vh;">
        <div class="title">区间统计</div>
        <div class="qj">
          <van-cell is-link title="选择多个日期" v-model="dateText" @click="onShowDatePicker" />
          <van-calendar v-model="showDatePicker" type="range" @close="onCloseDatePicker"
            @confirm="onConfirmDatePicker" />
        </div>
        <van-button class="my-van-button" round size="middle" type="primary" @click="onCalQJ"> 确 定 </van-button>
      </div>
    </van-action-sheet>

    <van-action-sheet v-model="showQJRes">
      <div class="popupRes">
        <div class="title">
          <div class="text">区间统计</div>
          <div class="date">{{ dateText }}</div>
        </div>
        <div class="content">
          <div class="item">
            <span class="label">产能占比:</span>
            <span class="text">20%</span>
          </div>
          <div class="item">
            <span class="label">生产数量:</span>
            <span class="text">8888</span>
          </div>
          <div class="item">
            <span class="label">单位利润:</span>
            <span class="text">6666</span>
          </div>
        </div>
      </div>
    </van-action-sheet>

    <van-action-sheet v-model="showTL">
      <div class="popupTL">
        <div class="title">
          当前投料顺序
        </div>
        <div class="content">
          <div class="my-list">
            <div class="list-item" v-for="(item, index) in lists" :key="index">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </van-action-sheet>

    <van-popup v-model="showPE" position="bottom">
      <div class="my-popup">
        <div class="title">设置配额</div>
        <div class="content">
          <van-field v-model="peie1" clearable label="客户A" icon="question-o" placeholder="请输入配额" />
          <van-field v-model="peie2" clearable label="客户B" icon="question-o" placeholder="请输入配额" />
          <van-field v-model="peie3" clearable label="客户C" icon="question-o" placeholder="请输入配额" />
        </div>
      </div>
      <van-button class="my-van-button" round size="middle" type="primary" @click="onCalPE"> 确 定 </van-button>
    </van-popup>

    <van-popup v-model="showAnalyze" position="bottom">
      <div class="my-popup">
        <div class="title">分析</div>
        <div class="item">
          <div class="text">产销偏差：</div>
          <van-tag plain type="primary">8分</van-tag>
          <van-tag type="danger">严重</van-tag>
        </div>
        <div class="item">
          <div class="text">推荐方案：</div>
          <div class="disable">待解锁</div>
        </div>
      </div>
    </van-popup>

  </div>
</template>

<script>

import Charts from '../components/Charts.vue';
import SearchProduction from '../components/SearchOrder.vue';
import { Slider, DropdownMenu, DropdownItem, Overlay, Switch, Calendar, Popup, Popover, Tag } from 'vant';
import CustomSelect from '../components/CustomSelect.vue'
import Sortable from 'sortablejs'

const colorConfig = {
  red: '#d4716e',
  blue: '#457B9D',
  gray: '#d9d9d9'
};

let months = ["2月", "3月", "4月", "5月", "6月", "7月", "8月"];

const rawData = [
  [20, 25, 19, 13, 8, 6, 3],
  [38, 29, 26, 22, 18, 25, 17],
  [18, 30, 29, 25, 39, 19, 30],
];


const rawData1 = [
  [20, 25, 19, 13, 8, 6, 3],
  [20, 25, 15, 31, 14, 15, 8],
  [10, 40, 21, 10, 22, 10, 2],
];


const rawData2 = [
  [20, 25, 19, 13, 8, 6, 3],
  [40, 30, 27, 18, 10, 22, 2],
  [5, 20, 40, 30, 18, 19, 8],
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
    CustomSelect,
    [Slider.name]: Slider,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Overlay.name]: Overlay,
    [Switch.name]: Switch,
    [Calendar.name]: Calendar,
    [Popup.name]: Popup,
    [Popover.name]: Popover,
    [Tag.name]: Tag,
    SearchProduction
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
        orders: 0
      },
      showPopover: false,
      showAnalyze: false,
      strategysOption: [
        { text: '策略_1', value: 1 },
        { text: '策略_2', value: 2 },
        { text: '策略_3', value: 3 },
      ],
      ordersOption: [
        { text: '订单选择', value: 0 },
        { text: '订单1', value: 1 },
        { text: '订单2', value: 2 },
        { text: '订单3', value: 3 }
      ],
      strategys: 1,
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
            name: '实际',
            type: 'line',
            data: [
              2.0, 6.9, 13.9, 37.1, 62.7, 139.4
            ]
          },
          {
            name: '预测',
            type: 'line',
            lineStyle: {
              type: "dashed",
              color: colorConfig.blue  // 修改折线颜色
            },
            data: [
              2.6, 8.5, 17.5, 43.9, 72.6, 153.3, 318.9
            ],
          }
        ]
      },

      option6: {
        grid,
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
              { value: 45, name: '利润分类1' },
              { value: 30, name: '利润分类2' },
              { value: 25, name: '利润分类3' }
            ]
          }
        ]
      },

      showSetting: false,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      showQJ: false,
      dateText: '',
      showDatePicker: false,
      showQJRes: false,
      showStrategy: false,
      gongshi: '',
      banci_s: '',
      banci_e: '',
      peie: '',
      customPeie: '',
      youxianji: [],
      youxianjiColumns: [
        { label: "客户优先", value: '1' },
        { label: "订单优先", value: '2' },
        { label: "金额优先", value: '3' }
      ],
      bancis: [],
      bancisColumns: [
        { label: "8", value: '1' },
        { label: "8+8", value: '2' },
        { label: "8+8+8", value: '3' }
      ],
      bancie: [],
      bancieColumns: [
        { label: "8", value: '1' },
        { label: "8+8", value: '2' },
        { label: "8+8+8", value: '3' }
      ],
      showPE: false,
      peie1: '',
      peie2: '',
      peie3: '',
      lists: [
        { id: 1, text: '订单A' },
        { id: 2, text: '订单B' },
        { id: 3, text: '订单C' },
        { id: 4, text: '订单D' },
        { id: 5, text: '订单E' },
        { id: 6, text: '订单F' }
      ],
      sortable: null,
      showTL: false,
      isFirstShowTL: true
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
  beforeDestroy() {
    if (this.sortable) {
      this.sortable.destroy()
    }
  },
  methods: {
    onEnd(evt) {
      console.log(evt)
      const { oldIndex, newIndex } = evt;
      // 更新数据
      // const movedItem = this.lists.splice(oldIndex, 1)[0];
      // this.lists.splice(newIndex, 0, movedItem);
      // this.$forceUpdate()
    },
    toOrderProgress() {
      this.$router.push({
        path: "/orderProgress"
      })
    },
    toFCSTDetail() {
      this.$router.push({
        path: "/FCSTDetail"
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
    },
    qujiantongji() {
      // 区间统计
      this.showPopover = false
      this.showQJ = true
    },
    onClickSetting() {
      this.showPopover = false
      this.showSetting = true
    },
    onClickHideSetting() {
      //this.showSetting = false
    },
    confirmSetting() {
      this.showSetting = false
    },
    formatDate(date) {
      date = new Date(date);
      var year = date.getFullYear()
      var month = date.getMonth() + 1;
      var day = date.getDate()
      return year + "/" + month + '/' + day
    },
    onShowDatePicker() {
      this.showDatePicker = true
    },
    onCloseDatePicker() {
      this.showDatePicker = false
    },
    onConfirmDatePicker(e) {
      this.showDatePicker = false
      var s = this.formatDate(e[0])
      var e = this.formatDate(e[1])
      this.dateText = s + '-' + e
    },
    onCalQJ() {
      this.showQJRes = true;
    },
    onClickHideStrategy() {

    },
    onShowStrategy() {
      this.showStrategy = true;
    },
    confirmStrategy() {
      this.showStrategy = false;
    },
    onShowPE() {
      this.showPE = true;
    },
    onCalPE() {
      this.showPE = false;
    },
    onShowTL() {
      this.showTL = true;
      if (this.isFirstShowTL) {
        setTimeout(() => {
          this.sortable = new Sortable(this.$el.querySelector(".my-list"), {
            onEnd: this.onEnd
          })
        }, 100)
        this.isFirstShowTL = false
      }
    },
    onOrderChange() {
      this.$refs.itemRef.toggle();
      console.log("order-change");
    },
    addNewOrder() {
      this.$router.push({
        path: "/publish-order"
      })
    },
    onShowAnalyze() {
      this.showAnalyze = true;
    }
  },
  watch: {
    strategys(newVal, oldVal) {
      if (newVal == oldVal) return;
      const data = {
        1: rawData,
        2: rawData1,
        3: rawData2
      }
      const rd = data[newVal];
      this.option.series[1].data = rd[1];
      this.option.series[2].data = rd[2];
    }
  }
}
</script>
