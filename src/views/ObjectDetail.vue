<style lang="less" scoped>
  @import '~@/styles/colors.less';
.object-detail-container{

    overflow: hidden;

    .img-wrap{
        position: relative;
        width: 100%;
        height: 200px;
        .img{
            width: 100%;
            height: 100%;
            display: block;
        }
        .dot{
            width: 16px;
            height: 16px;
            background: red;
            border: 2px solid #000;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    
    .container-body{
        display: flex;
        flex-direction: column;
        padding: 10px 16px;
        box-sizing: border-box;
        flex-wrap: wrap;
    }
    .category{
        color: #aaa;
        font-size: 12px;
        margin-top: 16px;
    }
    .name{
        font-size: 18px;
        font-weight: 700;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    .divider{
        border-top: 1px solid #ddd;
        height: 0;
    }
    .date-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 60px;
        
        .label{
            color: #aaa;
            font-size: 14px;
            height: 30px;
            display: flex;
            align-items: center;
        }
        .date{
            color: #000;
            font-size: 14px;
            height: 30px;
            display: flex;
            align-items: center;
        }
    }
    .body{
        display: flex;
        flex-wrap: wrap;
        .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 14px;
            width: 50%;
            height: 60px;
            border-bottom: 1px solid #ddd;
            box-sizing: border-box;
            .label{
                color: #aaa;
                display: flex;
                align-items: center;
                height: 30px;
            }
            .value{
                color: #000;
                display: flex;
                align-items: center;
                height: 30px;
            }
        }
    }
  
}
</style>

<template>
    <div class="object-detail-container">
        <div class="img-wrap">
            <img class="img" :src="objectInfo.img" alt="">
            <div v-if="objectInfo.location!=''" class="dot" :style="{left: left, top: top}"></div>
        </div>
        <div class="container-body">
            <div class="category" v-if="objectInfo.category">{{objectInfo.category[0].name}}</div>
            <div class="name">{{objectInfo.name}}</div>
            <div class="divider"></div>
            <div class="date-wrap">
                <div class="label">创建时间</div>
                <div class="date">{{date}}</div>
            </div>
            <div class="divider"></div>
            <div class="body">
                <div class="item">
                    <div class="label">所属空间</div>
                    <div class="value" v-if="objectInfo.space">{{objectInfo.space.name}}</div>
                </div>
                <div class="item">
                    <div class="label">价格</div>
                    <div class="value">{{objectInfo.price}}</div>
                </div>
                <div class="item">
                    <div class="label">数量</div>
                    <div class="value">{{objectInfo.quantity}}</div>
                </div>
                <div class="item">
                    <div class="label">备注</div>
                    <div class="value">{{objectInfo.remark}}</div>
                </div>
                <div class="item" v-for="(a,index) in attrs" :key="index">
                    <div class="label">{{a.name}}</div>
                    <div class="value">{{a.value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dateFormatter from '@/utils/dateFormatter'

export default {
    name: 'ObjectDetail',
    components: {},
    data(){
        return {
            url: '',
            objectInfo: {},
            date: null,
            attrs: [],
            left: 0,
            top: 0
        }
    },
    async mounted(){
        let code = this.$route.query.code;
        console.log(code)
        let res = await this.O.fetchObjectDetail(code)
        this.objectInfo = res;
        this.date = dateFormatter(res.buy_time)
        this.attrs = res.attrs;
        console.log(res)
        try {
           let location = JSON.parse(res.location)
           this.left = location.w;
           this.top = location.h;
        }catch(e){

        }
    },
    methods: {

    }
}
</script>