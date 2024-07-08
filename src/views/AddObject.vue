<style lang="less" scoped>
  @import '~@/styles/colors.less';
.page-container{
    background: @bgGray;
    height: 100vh;
    // overflow: hidden;
    // padding-bottom: calc(env(safe-area-inset-bottom));
    .page-body{
        flex: 1;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        height: 100vh;
        .container{
            padding: 16px 16px;
            box-sizing: border-box;
            background: #fff;
            border-radius: 16px;
            .header{
                display: flex;
                align-items: center;
                .left{
                    width: 60px;
                    height: 60px;
                .preview-box {
                    width: 60px;
                    float: left;
                    overflow: hidden;
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                    background-position: center center;
                    background-size: cover;
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
                        .upload-btn-text{
                            width: 30px;
                            height: 30px;
                            position: relative;
                            font-weight: bold;
                            color:green
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
                .right{
                    display: flex;
                    flex-direction: column;
                    margin-left: 16px;
                    flex: 1;
                    .item{
                        border-bottom: 1px solid #ddd;
                        box-sizing: border-box;
                    }
                    .van-field__control:disabled {
                        color: #000;
                        
                   }
                }
            }
        }
      
        .item{
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid #ddd;
            box-sizing: border-box;

            .item-title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .text{
                    font-weight: 700;
                     color: #000;
                      font-size: 16px;
                }
            }
        }

        .del-container{
                width: 16px;
                height: 16px;
                background: red;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                .del-text{
                    color: #fff;
                    line-height: 16px;
                    height: 16px;
                }
        }

        .mul-item{
            display: flex;
            flex-direction: row;
         
            flex-wrap: wrap;
            .sub-item{
                flex-shrink: 0;
                width: 50%;
                padding: 8px 0px;
                padding-right: 8px;
                box-sizing: border-box;
                   border-bottom: 1px solid #ddd;
           
                .item-title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                 
                    .text{
                        font-size: 16px;
                        font-weight: 700;
                    }
                    .img{

                    }
                }
            }
        }

    }
}

.pop-container{
    padding: 10px 0px;
    box-sizing: border-box;
    .header{
        display: flex;
        padding: 26px 16px;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
        color: #000;
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
    }
    .flex{
        flex: 1;
    }
    .pop-body{
        overflow: hidden;
        .pop-container{
            // padding-left: 16px;
            // padding-right: 16px;
            box-sizing: border-box;
            overflow:hidden;
        }
    }
}
.pop-choose-container{
    box-sizing: border-box;
    .header{
        display: flex;
        padding: 8px 16px;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
        color: #000;
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
    }
    .flex{
        flex: 1;
    }
    .pop-body{
        overflow: hidden;
        .pop-container{
            // padding-left: 16px;
            // padding-right: 16px;
            box-sizing: border-box;
            overflow:hidden;
        }
    }
}

.pop-category-container{
    background: #fff;
    padding: 16px;
    padding-bottom: 32px;
    box-sizing: border-box;
    height: 60vh;
    .tree-container{
        display: flex;
        height: 70%;
        .tree-level{
            flex: 1;
            height: 100%;
            overflow-y: scroll;
            .item{
                height: 40px;
                line-height: 40px;
                text-align: center;
                color: #ddd;
                font-size: 14px;
                
            }
            .item-active{
                height: 40px;
                line-height: 40px;
                text-align: center;
                color: green;
                font-size: 14px;
            }
        }
        .tree-divider{
            border-right: 1px solid #ddd;
            box-sizing: border-box;
        }
    }
}

.pop-position-container{
    background: #fff;
    padding: 16px;
    padding-bottom: 32px;
    box-sizing: border-box;
    height: 60vh;
    
    .header{
        .tag-container{
                display: flex;
                align-items: center;
                margin-top: 8px;

                .tag{
                    font-size: 14px;
                    color: #ACADBB;
                    padding: 6px 8px;
                    box-sizing: border-box;
                }
                .tag-active{
                    padding: 6px 8px;
                    box-sizing: border-box;
                    color: #fff;
                    font-weight: 600;
                    font-size: 14px;
                    background-color: #000;
                    border-radius: 6px;
                }
            }
    }
    .body{
        .space-container{
            .space{
                height: 48px;
                line-height: 48px;
                border-bottom: 1px solid #ddd;
                box-sizing: border-box;
                text-align: center;
            }
            .space-active{
                height: 48px;
                line-height: 48px;
                border-bottom: 1px solid #ddd;
                box-sizing: border-box;
                text-align: center;
                color: #EE0A24;
            }
        }
    }
    .my-van-button-pop{
        margin-top: 16px;
    }
}

.pop-position-mark-container{
    background: #fff;
    padding: 16px;
    padding-bottom: 32px;
    box-sizing: border-box;
    .img-container{
        position: relative;
        width: 100%;
        height: 400px;
        .img{
            width: 100%;
            height: 100%;
            display: block;
        }
        .dot{
            width: 16px;
            height: 16px;
            position: absolute;
            background: red;
            border-radius: 50%;
        }
    }
}
.pop-unit-container{
    background: #fff;
    padding: 16px;
    padding-bottom: 32px;
    box-sizing: border-box;


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

.page-container{
    .van-cell-group, .van-cell{
        background: @bgGray;
    }
}
.container{
      .van-cell-group, .van-cell{
        background: #fff;
    }
}
.textbox {
    .van-cell{
        padding: 10px 0px;
    }
}
</style>

<template>
    <div class="page-container">
        <div class="page-body">
            <van-cell-group title="基本属性" :border="false">
                <van-cell>
                    <div slot="title">
                        <div class="container">
                             <div class="header">
                                <div class="left">
                                    <div class="preview-box" v-for="(img, key) in images" :key="key" @click="onChooseImage">
                                        <div class="inner">
                                            <div class="content image-preview">
                                                <img :src="img" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- localIds -->
                                    <div class="preview-box" v-for="(img, key) in localIds" :key="key">
                                        <div class="inner">
                                            <div class="content image-preview">
                                                <img :src="img" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="preview-box" @click="onChooseImage" v-if="this.images.length==0">
                                        <div class="inner">
                                            <div class="content upload-btn">
                                                <span class="upload-btn-text">+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="item">
                                        <van-field v-model="name" placeholder="名称"></van-field>
                                    </div>
                                    <div class="item-right">
                                        <van-field v-model="category.name" @click="showCategoryPop" disabled placeholder="分类" is-link></van-field>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </van-cell>
            </van-cell-group>
            <van-cell-group title="其它属性" :border="false">
                <van-cell>
                    <div slot="title">
                        <div class="container">
                            <!-- <div class="item">
                                <div class="item-title">
                                    <span class="text">子标签</span>
                                    <div class="del-container">
                                        <span class="del-text">-</span>
                                    </div>
                                </div>
                                <div class="textbox">
                                    <van-field v-model="title" placeholder="请输入分类子标签"></van-field>
                                </div>
                            </div> -->
                            <div class="mul-item">
                                <div class="sub-item" v-for="(category,idx) in categories" :key="idx">
                                    <div class="item-title">
                                        <span class="text">{{category.name}}</span>
                                        <div class="del-container">
                                            <span class="del-text">-</span>
                                        </div>
                                    </div>
                                    <div class="textbox">
                                        <van-field :readonly="(category.kind=='Timestamp'||category.kind=='Selection')" :is-link="(category.kind=='Timestamp'||category.kind=='Selection')" @click="onCategoryClick(category, idx, 0)" v-model="category.value" placeholder="输入"></van-field>
                                    </div>
                                </div>
                            </div>

                            <div class="mul-item">
                                <div class="sub-item" v-for="(category,idx) in choosedAttrs" :key="idx">
                                    <div class="item-title">
                                        <span class="text">{{category.name}}</span>
                                        <div class="del-container">
                                            <span class="del-text">-</span>
                                        </div>
                                    </div>
                                    <div class="textbox">
                                        <van-field :readonly="(category.kind=='Timestamp'||category.kind=='Selection')" :is-link="(category.kind=='Timestamp'||category.kind=='Selection')" @click="onCategoryClick(category, idx, 1)" v-model="category.value" placeholder="输入"></van-field>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-cell>
            </van-cell-group>

            <div class="button" style="padding:16px;box-sizing: border-box;">
            <van-button class="my-van-button-pop" type="primary" @click="confirmObject"> 确认保存 </van-button>
            </div>
        </div>

        <!-- 选择位置--容器 -->
        <van-action-sheet v-model="showPositionContainer"
            :description="chooseTitle"
        >
            <div class="pop-position-container">
                <div class="header" v-if="categories[0].value=='容器'">
                    <div class="tag-container">
                        <div :class="[currentSpaceContainerIndex==key?'tag-active':'tag']" v-for="(tag,key) in spaceContainers" :key="key" @click="onChangeSpaceContainer(tag,key)">{{tag}}</div>
                    </div>
                </div>
                <div class="body" v-if="categories[0].value=='容器'">
                    <div v-if="(currentSpaceContainerIndex==0)" class="space-container">
                        <div :class="[currentSpaceIndex==index?'space-active':'space']" v-for="(c,index) in containerList" :key-="index" @click="onClickChooseSpace(c,index)">
                            {{c.name}}
                        </div>
                    </div>
                    <div v-if="(currentSpaceContainerIndex==1)">
                        <van-tree-select 
                        :items="containerList"
                        :active-id="activeId"
                        :main-active-index="mainActiveIndex"
                        @click-item="onClickItem"
                        @click-nav="onClickNav"
                        />
                    </div>
                </div>
                <div class="body" v-if="categories[0].value=='物品'">
                    <div>
                        <van-tree-select 
                        :items="containerList"
                        :active-id="activeId"
                        :main-active-index="mainActiveIndex"
                        @click-item="onClickItem"
                        @click-nav="onClickNav"
                        />
                    </div>
                </div>
                <van-button v-if="(categories[0].value=='容器'&&currentSpaceContainerIndex==0)" class="my-van-button-pop" type="primary" @click="confirmPositionContainer"> 确定 </van-button>
                <van-button v-if="(categories[0].value=='物品'||currentSpaceContainerIndex==1)" class="my-van-button-pop" type="primary" @click="confirmPositionObject"> 下一步 </van-button>
            </div>
        
        </van-action-sheet>

        <van-action-sheet v-model="showPositionObject">
            <div class="pop-position-mark-container">
                <div class="img-container" @click="onShowDot" id="imgContainer">
                    <img class="img" :src=choosedContainerImage alt="">
                    <div class="dot" v-show="showDot" :style="{left: dotLeft + 'px', top: dotTop + 'px'}"></div>
                </div>
                
                <van-button class="my-van-button-pop" type="primary" @click="confirmPositionDot"> 确认 </van-button>
            </div>
        </van-action-sheet>

        <!-- 选择时间 -->
        <van-action-sheet v-model="showTime">
            <div class="pop-container">
                <!-- <header class="header">
                购入时间
                <span class="flex"></span>
                <div class="icon icon--close" @click="showTime=false"></div>
                </header> -->
                <div class="pop-body">
                    <div class="pop-container">
                    <van-datetime-picker title="选择购入时间" type="year-month" @confirm="onDateConfirm" :value="currentDate" :min-date="minDate" :max-date="maxDate" :show-toolbar="true" :visible-item-count="5" />
                    </div>
                </div>
            </div>
        </van-action-sheet>

          <!-- 选择类型 -->
          <van-action-sheet v-model="showChoose" :actions="actions" 
                :description="chooseTitle"
                canncel-text="取消" 
                close-on-click-action
                @cancel="onSelectionCancel"
                @select="onSelectSelection"
                >
        
        </van-action-sheet>

        <!-- 选择分类 -->
        <van-action-sheet v-model="showCategory">
            <div class="pop-category-container">
                <div class="tree-container">
                    <div class="tree-level tree-divider">
                    <div v-for="(d,key) in categoryList" :key="key" :class="[key==currentIdx_1?'item-active':'item']" @click="onClickCategoryItem(d,key,1)">
                        {{d.name}}
                    </div>
                    </div>
                    <div class="tree-level tree-divider">
                        <div class="item" v-for="(d,key) in secondCategoryList" :key="key" :class="[key==currentIdx_2?'item-active':'item']"  @click="onClickCategoryItem(d,key,2)">
                            {{d.name}}
                        </div>
                    </div>
                    <div class="tree-level">
                        <div class="item" v-for="(d,key) in thirdCategoryList" :key="key" :class="[key==currentIdx_3?'item-active':'item']" @click="onClickCategoryItem(d,key,3)">
                            {{d.name}}
                        </div>
                    </div>
                </div>
            
                <van-button class="my-van-button-pop" type="primary" @click="confirmCategory"> 确定 </van-button>
            </div>
        </van-action-sheet>

        <!-- 输入带单位 -->
        <!-- <van-action-sheet v-model="showValueUnit"  :description="chooseTitle">
            <div class="pop-unit-container">
                <div>
                    <div class="input">
                        <input type="text" v-model="attrValue" placeholder="输入" cursor-spacing="60" @input="onChangeSelectionText">
                    </div>
                    
                </div>
                <van-button class="my-van-button-pop" type="primary" @click="confirmValueUnit"> 确定 </van-button>
             </div>
        </van-action-sheet> -->

    </div>
</template>

<script>
const TIME = "Timestamp";
const SELECTION = "Selection";
const VALUE = "Value";
const UNITVALUE = "UnitValue"

const OBJECT = "物品";
const CONTAINER = "容器"
const POSITION = "位置"

import {Popup, ActionSheet, DatetimePicker} from 'vant'

import chooseImage from '@/modules/chooseImage'
import uploadImage from '@/modules/uploadImage'
import dateLocale from '@/utils/dateLocale'
import qs from 'querystring'
import isPlainObj from '@/utils/isPlainObj'
import Tree from '@/components/Tree'

export default {
    name: 'AddObject',
    components: {
      [Popup.name]: Popup,
      [ActionSheet.name]: ActionSheet,
      Tree
    },
    data(){
        return {
            categoryList:[],
            secondCategoryList:[],
            thirdCategoryList:[],
            currentIdx_1:-1,
            currentIdx_2:-1,
            currentIdx_3:-1,
            actions:[],
            images: [],
            localIds: [],
            name:'',
            category: {name:''},
            category_code: '',
            title: '',
            categories: [
                {name: '类别', value: CONTAINER, kind: SELECTION, values: [{value: CONTAINER, code: ''},{value: OBJECT, code: ''}]},
                {name: POSITION, value: '', kind: SELECTION},
                {name: '数量',value: '',kind: VALUE},
                {name: '购买时间',value: '', kind: TIME},
                {name: '价格',value: '', kind: VALUE},
                {name: '备注',value: '', kind: VALUE}
            ],
            currentIndex: 0,
            customCurrentIndex:0,
            timeTitle: '',
            showTime: false,
            currentDate: 0,
            minDate: 0,
            maxDate: 0,
            showChoose: false,
          
            activeId:null,
            chooseTitle: '',
            showCategory:false,
            choosedAttrs:[],
            allAttrs:[],
            isChooseCustom: 0,   // 是否选择自定义属性 0: 基础 1:自定义
            containerList:[],
            showPositionContainer:false,
            showPositionObject:false,
            activeId: 0,
            mainActiveIndex: 0,
            currentSpaceContainerIndex: 0,
            spaceContainers:["空间","容器"],
            currentSpaceIndex:0,
            choosedContainer: null,
            choosedContainerImage:'',
            showDot: false,
            dotLeft: 0,
            dotTop: 0,
            locationInfo: "",
            showValueUnit: false
        }
    },
    async mounted() {
        this.currentDate = new Date()
        this.minDate = new Date(1980,0);
        this.maxDate = new Date(2040,11)

        // 获取属性
        let res = await this.O.fetchObjectLabelAttrs()
        this.allAttrs = res
        this.choosedAttrs = res;

        //  获取分类
        res = await this.O.fetchObjectCategoryList()
        this.categoryList = res;
        this.secondCategoryList = this.categoryList[0].children;
        this.thirdCategoryList = this.secondCategoryList[0].children
        
        // 获取空间 - 容器
        res = await this.O.fetchUserObjectContainer()
        for(let i = 0;i<res.length;++i) {
            let o = {}
            o.name = res[i].name
            o.code = res[i].code
            o.text = res[i].name;
            o.children = [];
            let cs = res[i].containers
            for(let j = 0; j < cs.length; ++j) {
                let c = cs[j];
                let o1 = {};
                o1.id = j;
                o1.name = c.name;
                o1.text = c.name;
                o1.code = c.code;
                o1.space_code = c.space_code;
                o1.container_code = c.container_code;
                o1.img = c.img;
                o.children.push(o1);
            }
            this.containerList.push(o)
        }
        console.log(this.containerList)
    },
    methods: {
        // 选择图片
        async onChooseImage(){
            console.log("开始上传....")
            let localIds = await chooseImage(1)
            console.log("localIds:" + localIds)
            //let serverIds = await uploadImage(localIds[0])

            let serverIds = await Promise.all(localIds.map(localId => {
                return uploadImage(localId)
            }))

            console.log("serverIds:" + serverIds)
            this.$toast.loading('图片上传中...')
            let res = await this.L.wxUploadImage(serverIds[0])
            console.log("上传结果:" + JSON.stringify(res))
            this.images = [res.image]
            console.log(this.images)
            //this.image = res.image;
            this.$toast.clear()
        },
        showCategoryPop(){
            this.showCategory = true;
        },
        onCategoryClick(category, idx, isCustom) {
            console.log(category)
            this.isChooseCustom = isCustom;
          
            if (!isCustom)
                this.currentIndex = idx;
            else   this.customCurrentIndex = idx
            // 根据类型判断
            if (category.kind == TIME) {
                // 时间类型
                this.showTime = true;
                this.timeTitle = category.name;
            } else if (category.kind == SELECTION) {
             
                this.chooseTitle = category.name;
               
                if (category.name == POSITION) {
                    this.showPositionContainer = true
                    
                    // if (this.categories[0].value == CONTAINER) {
                    //     // 容器
                    //     //this.categories[this.currentIndex].values = [];
                    //     this.showPositionContainer = true
                    // } else if (this.categories[0].value == OBJECT) {
                    //     // 物品
                        
                    // }
                    return
                }
                
                // 选择类型
                this.showChoose = true
                this.actions = category.values.map(c=>{
                    return {name:c.value, code: c.code}
                })
            }
        },
        // 选择位置-选择空间或者容器切换事件
        onChangeSpaceContainer(tag,key){
            this.currentSpaceContainerIndex = key
        },
        // 选择空间
        onClickChooseSpace(space,index){
            this.currentSpaceIndex = index;
            console.log(this.containerList[this.currentSpaceIndex])
        },
        // 确认位置--容器
        confirmPositionContainer(){
            if (this.currentSpaceContainerIndex == 0) {
                this.categories[this.currentIndex].value = this.containerList[this.currentSpaceIndex].name
            } else {
                console.log(this.choosedContainer)
                if (this.choosedContainer) {
                    this.categories[this.currentIndex].value = this.choosedContainer.name;
                } else {
                    this.categories[this.currentIndex].value = this.containerList[this.mainActiveIndex].children[0].name
                }
            }
          
            this.showPositionContainer = false;
        },
        // 选择位置
        onShowDot(e){
            let x = e.offsetX
            let y = e.offsetY;
            this.dotLeft = x-8;
            this.dotTop = y-8;
            this.showDot = true
        },

        // 确认位置--物品
        confirmPositionObject(){
            console.log(this.choosedContainer)
            if (!this.choosedContainer) {
                this.choosedContainer = this.containerList[this.mainActiveIndex].children[0];
            }
            console.log(this.choosedContainer)
            this.choosedContainerImage = this.choosedContainer.img;
            this.categories[1].value = this.choosedContainer.name;

            this.showPositionObject = true;
        },
        // 确认点位
        confirmPositionDot(){
            console.log(this.choosedContainer)
            let imgContainer = document.getElementById("imgContainer")
            let rect = imgContainer.getClientRects()[0];
            let w = Math.ceil(this.dotLeft/rect.width*100) + "%";
            let h = Math.ceil(this.dotTop/rect.height*100) + "%";
            console.log(w)
            console.log(h)
            this.locationInfo = JSON.stringify({w: w,h:h})
            this.showPositionObject = false;
            this.showPositionContainer = false;
        },
        // 确认带单位的输入框内容
        confirmValueUnit(){

        },
        // 选择时间确认事件
        onDateConfirm(e){
            console.log(e)  
            this.currentDate = e;
            this.showTime = false;
            let d = dateLocale(e);
            console.log(d)
            if (this.isChooseCustom)
                this.choosedAttrs[this.customCurrentIndex].value = d;
            else     this.categories[this.currentIndex].value = d;
        },
        onClickNav(index){
            this.mainActiveIndex = index;
        },
        onClickItem(item) {
            this.choosedContainer = item
            this.activeId = item.id
        },
        onClickCategoryItem(item, idx, level) {
            console.log(item)
            this.category = item;
            if (level == 1) {
                this.currentIdx_1 = this.currentIdx_1==idx ? -1 : idx;
                this.currentIdx_2 = -1;
                this.currentIdx_3 = -1;
                this.secondCategoryList = this.categoryList[idx].children;
                if (this.secondCategoryList.length > 0)
                    this.thirdCategoryList = this.secondCategoryList[0].children;
            } else if (level == 2) {
                this.currentIdx_2 = this.currentIdx_2==idx ? -1 : idx;
                this.currentIdx_3 = -1;
                this.currentIdx_1 = -1
                this.thirdCategoryList = this.secondCategoryList[idx].children;
            } else if (level == 3) {
                this.currentIdx_1 = -1;
                this.currentIdx_2 = -1;
                this.currentIdx_3 = this.currentIdx_3==idx?-1:idx;
            }
        },
        // 确认选择的分类
        async confirmCategory(){
            // let code = this.categoryList[this.currentIdx_1].code;
            // if (this.secondCategoryList[this.currentIdx_2].children.length > 0) {
            //     this.category = this.thirdCategoryList[this.currentIdx_3].name;
            //     this.category_code = this.thirdCategoryList[this.currentIdx_3].code;
            // } else {
            //     this.category = this.secondCategoryList[this.currentIdx_2].name;
            //     this.category_code = this.secondCategoryList[this.currentIdx_2].code;
            // }

            let code = this.category.code;          
            let res = await this.O.fetchObjectLabelCategoryAttrs(code)
            console.log(res)
            this.choosedAttrs = res;
            this.showCategory = false;
        },
        onSelectSelection(e,index){
            if (this.isChooseCustom) {
                this.choosedAttrs[this.customCurrentIndex].value = e.name;
                this.choosedAttrs[this.customCurrentIndex].label_value_code = e.code;
            } else {
                this.categories[this.currentIndex].value = e.name;
            }
           
            this.$forceUpdate()
        },
        onSelectionCancel(){
            this.showChoose = false;
        },
        // 保存新增
        async confirmObject(){
            if (!this.category) {
                return;
            }

            let container_code = "", space_code = "", location = "";
            if (this.categories[0].value==CONTAINER) {
                if (this.currentSpaceContainerIndex==0) {
                    // 空间
                    container_code = "";
                    space_code = this.containerList[this.currentSpaceIndex].code;
                    location = '';
                } else {
                    let container = this.choosedContainer
                    container_code = container.code;
                    space_code = containr.space_code;
                    location = this.locationInfo;
                }
               
            } else if (this.categories[0].value==OBJECT) {
                let container = this.choosedContainer;
                container_code = container.code;
                space_code = container.space_code;
                location = this.locationInfo;
            }
          
            let attrs = [];
            for (let i = 0;i< this.choosedAttrs.length; ++i) {
                let attr = this.choosedAttrs[i];
                let o = {};
                o.label_value_code = attr.label_value_code;
                o.label_code = attr.code;
                o.input_value = attr.value;
                attrs.push(o)
            }

            let data = {
                name: this.name,
                category_code: this.category.code,
                container_code: container_code,
                buy_time: Date.parse(this.categories[3].value)/1000,
                space_code: space_code,
                code: '',
                kind: this.categories[0].value==CONTAINER?'Container':'Object',
                img: this.images[0],
                location: location,
                quantity: parseInt(this.categories[2].value),
                price: parseFloat(this.categories[4].value),
                remark: this.categories[5].value,
                attrs: attrs
            }
            console.log(data)
            let res = await this.O.fetchUserObjectCreate(data)
            console.log("-----------")
            console.log(res)
            this.$router.push({
                path: '/objectDetail',
                query: {
                    code: res
                }
            })
        }
    }
}
</script>
