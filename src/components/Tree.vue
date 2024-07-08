<style lang="less" scoped>
.tree-container{
    padding: 10px 16px;
    box-sizing: border-box;
    display: flex;
    .tree-level{
        flex: 1;
        .item{
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #ddd;
            font-size: 14px
        }
        .item-active{
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: green;
            font-size: 14px;
        }
        .item-divider{
            border-right: 1px solid #ddd;
            box-sizing: border-box;
        }
        .add-item{
            display: flex;
            align-items: center;
            height: 40px;
            font-size: 14px;
            color: green;
            .add{

            }
            .text{

            }
        }
    }
}
</style>

<template>
    <div class="tree-container">
        <div class="tree-level">
            <div class="item item-divider" v-for="(d,key) in data" :key="index">
                {{item.name}}
            </div>
            <div class="add-item">
                <span class="add">+</span>
                <span class="text">新增</span>
            </div>
        </div>
        <div class="tree-level">
            <div class="item item-divider" v-for="(d,key) in secondData" :key="index">
                {{item.name}}
            </div>
            <div class="add-item">
                <span class="add">+</span>
                <span class="text">新增</span>
            </div>
        </div>
        <div class="tree-level">
            <div class="item" v-for="(d,key) in thirdData" :key="index">
                {{item.name}}
            </div>
            <div class="add-item">
                <span class="add">+</span>
                <span class="text">新增</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tree',
    props: {
        // 模式: 0:单选模式,1:多选模式
        mode: {
            default: 0
        },
        data: {
            default: []
        }
    },
    components: {},
    data(){
        return {
            level: 1,
            currentIdx_1: -1,
            currentIdx_2: -1,
            currentIdx_3: -1
        }
    },
    mounted(){
        this.getLevel(this.data)
    },
    methods:{
        onClickItem(item, idx, level){
            if (this.level == 1) {
                this.currentIdx_1 = idx;
            } else if (this.level == 2) {
                this.currentIdx_2 = idx;
            } else if (this.level == 3) {
                this.currentIdx_3 = 3;
            }
        }
    }
}
</script>
