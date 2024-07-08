<style lang="less" scoped>
.tree-container{
    padding: 10px 16px;
    box-sizing: border-box;
    display: flex;
    height: 100vh;
    .tree-level{
        flex: 1;
        height: 100%;
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
      
        .add-item{
            display: flex;
            align-items: center;
            height: 40px;
            font-size: 14px;
            color: green;
            justify-content: center;
            .add{

            }
            .text{
                margin-left: 4px;
            }
        }
    }
    .tree-divider{
        border-right: 1px solid #ddd;
        box-sizing: border-box;
    }
    .pop-container{
        padding: 16px;
        box-sizing: border-box;
        .name-header{
            height: 48px;
            font-size: 16px;
            font-weight: 600;
        }
        .flex{
            flex: 1;
        }
        .name-panel{
            display: flex;
            align-items: center;
            height: 40px;

            .text{
                font-size: 16px;
                line-height: 18px;
                width: 32px;
                color: #ACADBB;
            }
            .input{
                flex: 1;
            }
            .input input{
                border: none;
                padding-left: 16px;
                font-size: 24px;
                color: #000;
                font-weight: 700;
                height: 32px;
            }
            .input input::-webkit-input-placeholder{
                color: #ACADBB;
                font-weight: 400;
            }

        }
    }
}
</style>

<template>
    <div class="tree-container">
        <div class="tree-level tree-divider">
            <div v-for="(d,key) in data" :key="key" :class="[key==currentIdx_1?'item-active':'item']" @click="onClickItem(d,key,1)">
                {{d.name}}
            </div>
            <div class="add-item">
                <span class="add">+</span>
                <span class="text" @click="addCategory(1)">新增</span>
            </div>
        </div>
        <div class="tree-level tree-divider">
            <div class="item" v-for="(d,key) in secondData" :key="key" :class="[key==currentIdx_2?'item-active':'item']"  @click="onClickItem(d,key,2)">
                {{d.name}}
            </div>
            <div class="add-item">
                <span class="add">+</span>
                <span class="text" @click="addCategory(2)">新增</span>
            </div>
        </div>
        <div class="tree-level">
            <div class="item" v-for="(d,key) in thirdData" :key="key" :class="[key==currentIdx_3?'item-active':'item']" @click="onClickItem(d,key,3)">
                {{d.name}}
            </div>
            <div class="add-item">
                <span class="add">+</span>
                <span class="text" @click="addCategory(3)">新增</span>
            </div>
        </div>

        <van-action-sheet v-model="showCategory">
            <div class="pop-container">
                <div class="name-header">
                    新增分类
                    
                </div>
                <div class="name-panel">
                    <div class="text">名称:</div>
                    <div class="input">
                        <input  
                        type="text"
                        cursor-spacing="60" placeholder="请输入分类名称" :value="categoryName" @input="onChangeName">
                    </div>
                    
                </div>
                <van-button class="my-van-button-pop" type="primary" @click="confirmCategoryName"> 确定 </van-button>
            </div>
        </van-action-sheet>
    </div>
</template>

<script>
export default {
    name: 'ObjectCategory',
    components: {},
    data(){
        return {
            currentLevel: 1,
            currentIdx_1: 0,
            currentIdx_2: 0,
            currentIdx_3: 0,
            data: [],
            secondData:[],
            thirdData:[],
            showCategory:false,
            categoryName:''
        }
    },
    async mounted(){
        let res = await this.O.fetchObjectCategoryList()
        console.log(res)
        this.data = res;
        this.secondData = this.data[0].children;
        this.thirdData = this.secondData[0].children
    },
    methods:{
        onClickItem(item, idx, level){
            if (level == 1) {
                this.currentIdx_1 = idx;
                this.currentIdx_2 = 0;
                this.currentIdx_3 = 0;
                this.secondData = this.data[idx].children;
                if (this.secondData.length > 0)
                    this.thirdData = this.secondData[0].children
            } else if (level == 2) {
                this.currentIdx_2 = idx;
                this.currentIdx_3 = 0;
                this.thirdData = this.secondData[idx].children;
            } else if (level == 3) {
                this.currentIdx_3 = idx;
            }
        },
        addCategory(level) {
            this.currentLevel = level;
            this.showCategory = true
        },
        onChangeName(e){
            this.categoryName = e.target.value
        },
        async confirmCategoryName(){
            this.showCategory = false;
            if (this.categoryName == '')    return;
            
            let icon ='111', parent_code = '', code = '';
            if (this.currentLevel == 1) {
                
            } else if (this.currentLevel == 2) {
                let parent = this.data[this.currentIdx_1];
                parent_code = parent.code;
                //code = parent.code;
            } else if (this.currentLevel == 3) {
                if (this.secondData.length < 1) return;
                let parent = this.secondData[this.currentIdx_2];
                parent_code = parent.code;
                //code = parent.code;
            }

            let res = await this.O.fetchAddObjectCategory({
                name: this.categoryName,
                icon: icon,
                parent_code: parent_code,
                code: code
            })
            console.log(res)
        }
    }
}
</script>
