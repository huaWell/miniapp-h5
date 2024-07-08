<style lang="less" scoped>
  @import '~@/styles/colors.less';
  .container{
    width: 100vw;
    height: 100vh;
     .cancel-button {
      position: absolute;
      top: 10px;
      left: 15px;
      z-index: 10000;
    }
    .confirm-button {
      position: absolute;
      top: 10px;
      right: 15px;
      z-index: 10000;
    }
  }

</style>


<template>
<div class="container">
    <van-button class="cancel-button" size="small" @click="onCancelPosition"> 取消 </van-button>
    <van-button class="confirm-button" type="primary" size="small" @click="onSavePosition"> 确定 </van-button>

    <div class="goods">
        <div>
            
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'GoodPicker',
    components: {},
    data(){
        return {

        }
    },
    mounted(){
        this.getGoods();
    },
    methods:{
       async getGoods(){
            let res = await this.D.fetchMyGoods()
            console.log(res)
       }
    }
}

</script>