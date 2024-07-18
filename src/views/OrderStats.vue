<style lang="less" scoped>
.container{
    width: 100%;
  height: 100vh;
  display: flex;
  gap: 8px;
  background-color: #f1f5fa !important;
  flex-direction: column;
  overflow: scroll;
  padding-bottom: 60px;
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
</style>

<template>
<div class="container">
    <div class="card" style="height: 28vh;">
      <div class="title">
        <div class="value">
          产品分类
        </div>
      </div>
      <Charts :options="option1" chartId="chart1" />
    </div>
    <div class="card" style="height: 28vh">
      <div class="title">
        <div class="value">
          异常情况
        </div>
      </div>
      <Charts :options="option2" chartId="chart2" />
    </div>
    <div class="card" style="height: 28vh;">
      <div class="title">
        <div class="value">
          异常原因
        </div>
      </div>
      <Charts :options="option3" chartId="chart3" />
    </div>
    <div>
        <van-button class="my-van-button" round size="middle" type="primary" @click="toOrderList"> 订单列表 </van-button>
    </div>

</div>
</template>

<script>
import Charts from '../components/Charts.vue';

export default {
    name: "orderStats",
    components:{
        Charts,
    },
    data(){
        return {
            option1: {
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
            option2: {
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
            },
            option3: {
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
        }
    },
    mounted(){

    },
    methods: {
        toOrderList(){
            this.$router.push({
                path: "/orderProgress"
            })
        }
    }
}
</script>