<style lang="less">
@import '~@/styles/colors.less';
</style>
<template>
  <div id="app">
    <keep-alive>
      <router-view class="router-view" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view class="router-view" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  async mounted() {
  },
  methods: {
  }
}
</script>