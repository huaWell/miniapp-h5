<style lang="less" scoped>
  @import '~@/styles/colors.less';

</style>

<template>
    <div class="setup-container">
        <van-cell-group :border="false">
            <van-cell @click="onGotoAddObject" custom-class="my-van-cell--large" size="large" title="新增物品" is-link>
              
            </van-cell>
            <van-cell @click="onGotoUserSpace" custom-class="my-van-cell--large" size="large" title="空间管理" is-link>
                
            </van-cell>
            <van-cell @click="onGotoObjectLabel" custom-class="my-van-cell--large" size="large" title="基础属性" is-link>
                
            </van-cell>
            <van-cell @click="onGotoObjectCategory" custom-class="my-van-cell--large" size="large" title="种类" is-link>
                
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>

export default {
    name: 'Setup',
    components: {},
    data() {
        return {

        }
    },
    async mounted(){
      
    },
    methods: {
        onGotoAddObject(){
            this.$router.push({
                path: '/add-object'
            })
        },
        onGotoUserSpace(){
            this.$router.push({
                path: '/userSpace'
            })
        },
        onGotoObjectLabel(){
            this.$router.push({
                path: '/objectLabel'
            })
        },
        onGotoObjectCategory(){
            this.$router.push({
                path: '/objectCategory'
            })
        }
    }
}

</script>