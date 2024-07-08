<style lang="less" scoped>
.square-container {
  // width: 100%;
  .inner-box {
    width: 100%;
    height: 0;
    /* 确定高度, 100% 表示完全等于宽度, 但是也可以是一个比例的呀*/
    padding-bottom: 100%;
    position: relative;
    .layout-box {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .ideal-box {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
<template>
  <!-- 设置 minWidth 防止被挤压 -->
  <div class="square-container" :style="{width: width, minWidth: width}">
    <div class="inner-box" :style="{paddingBottom: hwRatio * 100 + '%'}">
      <div class="layout-box">
        <div class="ideal-box">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*
使用方式
<square>
  content
</square>

可以通过 :hwRatio="n" 来调整高度和宽度的比例

*/

export default {
  name: 'Square',
  props: {
    width: {
      default: '100%'
    },
    hwRatio: {
      default: 1
    }
  },
  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>