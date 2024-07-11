<template>
  <div ref="chart" :style="{ width: '100%', height: '100%' }" :id="chartId"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'EChartsComponent',
  props: {
    options: {
      type: Object,
      required: true
    },
    chartId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
    window.addEventListener('resize', this.resizeChart);
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
    window.removeEventListener('resize', this.resizeChart);
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart);
      this.chart.setOption(this.options);
    },
    resizeChart() {
      if (this.chart) {
        this.chart.resize();
      }
    }
  },
  watch: {
    options: {
      deep: true,
      handler(newOptions) {
        if (this.chart) {
          this.chart.setOption(newOptions);
        }
      }
    }
  }
};
</script>

<style scoped>
/* 可选：添加一些样式来调整图表的容器 */
</style>
