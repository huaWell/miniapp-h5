<style lang="less" scoped>
.userSpace-container{
    height: 100vh;
    background: #efefef;
    padding: 10px 16px;
    box-sizing: border-box;
    .all{
        background: #fff;
        border-radius: 16px;
        padding: 10px 16px;
        box-sizing: border-box;
        .item{
            border-bottom: 1px solid #ddd;
            height: 40px;
            .sub-item{
                display: flex;
                align-items: center;
                height: 40px;
                .flex{
                    flex: 1;
                }
                .delete{
                    margin-right: 16px;
                }
                .edit{
                    margin-right: 16px;
                }
            }   
        }
    
    }
    .options-button {
        position: fixed;
        bottom: 100px;
        right: 20px;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        background: white;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pop-edit-container{
        background: #fff;
        padding: 16px;
        padding-bottom: 32px;
        box-sizing: border-box;
        .title{
            display: flex;
            align-items: center;
            height: 32px;
            font-size: 16px;
            .text{
                font-weight: 700;
            }
            .label{
                color: red;
                margin-left: 4px;
            }
        }
        .input{

        }
        .input input{
            border: 1px solid #efefef;
            padding-left: 16px;
            font-size: 24px;
            color: #000;
            height: 48px;
            border-radius: 8px;
            width: 100%;
        }
        .input input::-webkit-input-placeholder{
            color: #ACADBB;
            font-weight: 400;
        }
    }
}
</style>

<template>
    <div class="userSpace-container">
        <div class="all">
            <div class="item" v-for="(item,key) in spaces" :Key="key">
                <div class="sub-item">
                    <span class="text">{{item.name}}</span>
                    <span class="flex"></span>
                    <div class="delete icon--delete" @click="onClickDeleteSpace(item,key)"></div>
                    <div class="edit icon--edit" @click="onClickEditSpace(item,key)"></div>
                </div>
            </div>
        </div>

        <div class="options-button" @click="onAdd">
            <div class="icon--add"></div>
        </div>


        <van-action-sheet v-model="showEdit">
            <div class="pop-edit-container">
                <div class="title">
                    <span class="text">名称</span>
                    <span class="label">*</span>
                </div>
                <div class="input">
                    <input v-model="spaceValue" type="text" placeholder="输入" cursor-spacing="60" @input="onChangeSpaceName">
                </div>
                <van-button class="my-van-button-pop" type="primary" @click="confirmSpace"> 确定 </van-button>
            </div>
        </van-action-sheet>

    </div>
</template>

<script>
export default{
    name: 'UserSpace',
    components:{},
    data(){
        return {
            spaces:[],
            showEdit: false,
            spaceValue:"",
            isEdit:true,
            chooseSpace:{}
        }
    },
    async mounted(){
      this.getUserSpaceList()
    },
    methods:{
        async getUserSpaceList(){
            let res = await this.O.fetchUserSpaceList()
            console.log(res)
            this.spaces = res;
        },
        async onClickDeleteSpace(item, index){
            let res = await this.O.fetchUserSpaceDel(item.code)
            this.getUserSpaceList()
        },
        onClickEditSpace(item, index){
            this.chooseSpace = item;
            this.isEdit = true;
            this.spaceValue = item.name;
            this.showEdit = true;
        },
        onAdd(){
            this.isEdit = false;
            this.spaceValue = '';
            this.showEdit = true
        },
        onChangeSpaceName(e){
            this.spaceValue = e.target.value;
        },
        async confirmSpace(){
            let res = await this.O.fetchUserSpaceCreate({
                name: this.spaceValue,
                code: this.isEdit ? this.chooseSpace.code : ''
            })
            console.log(res)
            this.getUserSpaceList()
            this.showEdit = false;
        }
    }
}
</script>