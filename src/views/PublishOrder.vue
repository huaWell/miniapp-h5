<style lang="less" scoped>
@import '~@/styles/colors.less';
.publish-container {
  background: @bgGray;
  min-height: 100vh;
  .preview-box {
    width: 25%;
    float: left;
    overflow: hidden;
    .inner {
      width: 100%;
      padding-bottom: 100%;
      position: relative;
      .content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon--close {
          position: absolute;
          top: 0;
          right: 0;
          color: @fontGray;
        }
      }
      .upload-btn {
        border: 1px dashed #ebebeb;
        font-size: 40px;
        background: @bgGray;
      }
      .image-preview {
        img {
        display: block;
        height: 100%;
        width: 100%;
        }
      }
    }
  }
}
</style>
<template>
  <div class="publish-container">

    <van-cell-group title="产品名称">
        <van-field
        is-link
        v-model="productionName"
        placeholder="请输入产品名称"
        @click="onSearch"
      />
    </van-cell-group>
    <van-cell-group title="策略">
        <van-field
        is-link
        v-model="strategy"
        @click="onSearch"
      />
    </van-cell-group>
    <van-cell-group title="数量">
        <van-field
        clearable
        v-model="amount"
        placeholder="请输入产品数量"
      />
    </van-cell-group>

    <van-cell-group title="开工日期">
        <van-cell custom-class="my-van-cell--large" is-link @click="onShowTime" :value="date"></van-cell>
    </van-cell-group>
    

    <van-button class="my-van-button" round size="large" type="primary" @click="onGenerator"> 计算 </van-button>

    <van-popup v-if="showTime" custom-style="height: 60%;border-top-left-radius:24px;border-top-right-radius:24px;overflow:hidden;bottom:0" position="bottom">
      <van-datetime-picker 
        title="选择日期" type="date" @input="onInput" :value="currentDate"
         :min-date="minDate" 
         :max-date="maxDate" 
         :show-toolbar="true" 
         @confirm="onConfirmTime"
         @cancel="showTime=false"
         :formatter="formatter"
         :visible-item-count="5"
         />
    </van-popup>
  </div>
</template>
<script>
const MAX_COUNT = 1;
import qs from 'querystring'
let random = () => {
  return parseInt(Math.random() * 10000)
}

export default {
  name: 'Publish',
  computed: {
  },
  data() {
    return {
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
  mounted(){
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
    onShowTime(){
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
    onSearch(){
        console.log('xx')
        this.$router.push({
            path: '/search-production'
      })
    },
    onGenerator(){
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
