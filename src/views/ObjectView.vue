<style lang="less" scoped>
  @import '~@/styles/colors.less';
.object-view-container{
    padding: 10px 16px;
    box-sizing: border-box;
    background: @bgGray;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .header{
        height: 300px;
        width: 100%;
        position: relative;
        .img-wrapper{
            position: relative;
            width: 100%;
            height: 100%;
            .img{
                width: 100%;
                height: 100%;
                display: block;
                border-radius: 8px;
            }
            .dot-wrapper{
                position: absolute;
                width: 16px;
                height: 16px;
                background: red;
                border-radius: 50%;
                border: 2px solid #fff;
            }
        }
        .dot-container{
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            left: 0;
            top: 0;
        }
    }
    .body{
        margin-top: 16px;
        flex: 1;
        overflow: hidden;
        overflow-y: scroll;
        .list-container{
            .item{
                height: 48px;
                display: flex;
                align-items: center;
                color: #000;
                font-weight: 600;
                font-size: 16px;
                border-bottom: 1px solid #ddd;
                box-sizing: border-box;
                .dot{
                    width: 16px;
                    height: 16px;
                    background: red;
                    border-radius: 50%;
                }
                .rect{
                    width: 16px;
                    height: 16px;
                    background: red;
                }
                .text{
                    margin-left: 6px;
                }
            }
        } 
    }
}
</style>

<template>
    <div class="object-view-container">
        <div class="header">
            <div class="img-wrapper">
                <img :src="objects.img" alt="" class="img">
                <div name="dot" class="dot-wrapper" :style="{left: d.left,top: d.top}" v-for="(d,index) in dotLists" :key="index">

                </div>
                <div class="dot-wrapper"  v-show="showDot" :style="{left: dotLeft + 'px', top: dotTop + 'px'}"></div>
            </div>
            <div class="dot-container" @click="onClickShowDot"></div>
        </div>
        <div class="body">
            <div class="list-container">
                <div class="item" v-for="(d,index) in lists" :key="index" @click="toDetailPage(d,index)">
                    <span class="dot" v-if="d.kind=='Object'"></span>
                    <span class="rect" v-if="d.kind=='Container'"></span>
                    <span class="text">{{d.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ObjectView',
    components: {},
    data(){
        return {
            url: 'https://recycle-xz.oss-cn-shanghai.aliyuncs.com/799d0284-2ccc-46d6-8c61-57eaf552a6be8yZL-f9DZWDYpYWx7Q8xvHSlQ_OnoUnZJcNFMEeZrC1Y7az-koDJNAac6zvLulQe.jpg',
            lists: [{name: "测试1"},{name: "测试1"},{name: "测试1"},{name: "测试1"},{name: "测试1"},{name: "测试1"},
            {name: "测试1"},{name: "测试1"},{name: "测试1"},{name: "测试1"},{name: "测试1"},{name: "测试1"}],
            dotLists:[{left: "10%",top: "10%"},{left: "20%",top: "20%"},{left: "30%",top: "30%"}],
            showDot: false,
            dotLeft: 0,
            dotTop: 0,
            objects: {}
        }
    },
    async mounted(){
        let code = this.$route.query.code;
        this.getContainerDashboard(code)
    },
    methods: {
        async getContainerDashboard(code){
            let res = await this.O.fetchContainerDashboard(code)
            console.log(res)
            this.objects = res;
            this.lists = res.children;
            this.dotLists = this.lists.map(l=>{
                try {
                    let location = JSON.parse(l.location)
                    return {left: location.w,top: location.h}
                }catch(e){
                    return {left: 0, top: 0}
                }
            })
            console.log(this.dotLists)
        },
        onClickShowDot(e){
            let x = e.offsetX, y = e.offsetY;          
            this.dotLeft = x-8;
            this.dotTop = y -8;
            this.showDot = true;
        },
        toDetailPage(object, index) {
            if (object.kind == "Container") {
                this.getContainerDashboard(object.code)
            } else if (object.kind == "Object") {
                this.$router.push({
                    path: '/objectDetail',
                    query: {
                        code: object.code
                    }
                })
            }
        }
    }
}
</script>