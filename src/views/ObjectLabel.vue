<style lang="less" scoped>
.objectLabel-container{
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
        
            .item-select{
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
            .item-date{
                display: flex;
                align-items: center;
                height: 40px;
                .flex{
                    flex: 1;
                }
                .delete{
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
    .pop-container{
        background: #fff;
        padding: 16px;
        padding-bottom: 32px;
        box-sizing: border-box;
        .header{
            position: relative;
            display: flex;
            height: 48px;
            align-items: center;
            font-size: 16px;
            justify-content: center;
            .add{
                position: absolute;
                left: 0;
                font-size: 14px;
                display: flex;
                align-items: center;
                .add-text{
                    margin-left: 4px;
                }
            }
            .title{
                font-weight: 700;
            }
        }
        .body{
            .item{
                height: 40px;
                border-bottom: 1px solid #ddd;
                display: flex;
                align-items: center;
                .flex{
                    flex: 1;
                }
                .delete{
                    margin-right: 16px;
                }
            }
        }
    }

    .pop-attr-container{
        background: #fff;
        padding: 16px;
        padding-bottom: 32px;
        box-sizing: border-box;
        .type{
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
            .select{
                height: 48px; 
                .van-radio-group {
                    display: flex;
                }
                .van-radio{
                    margin-right: 16px;
                }
            }
        }
        .title-panel{
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
        .body{
            margin-top: 16px;
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
    .pop-category-container{
        background: #fff;
        padding: 16px;
        padding-bottom: 32px;
        box-sizing: border-box;
        .item{
            display: flex;
            align-items: center;
            height: 40px;
            border-bottom: 1px solid #ddd;
            box-sizing: border-box;
            .text{
                margin-left: 16px;
            }
        }
    }
}
</style>

<template>
    <div class="objectLabel-container">
        <div class="all">
            <div class="item" v-for="(d,key) in labels" :key="key">
                <div class="item-select" v-if="d.kind=='Selection'">
                    <span class="text">{{d.name}}</span>
                    <span> -标签组</span>
                    <span v-if="(!d.values || d.values.length==0)">(0)</span>
                    <span v-if="d.values && d.values.length > 0">({{d.values.length}})</span>
                    <span class="flex"></span>
                    <div class="delete icon--delete" v-if="(!d.values || d.values.length==0)" @click="onClickDeleteLabel(d)"></div>
                    <div class="edit icon--edit" @click="onClickEditLabel(d,key)"></div>
                    <div class="right icon--right" @click="onClickShowSelection(d,key)"></div>
                </div>
                <div class="item-date" v-if="d.kind=='Timestamp'">
                    <span class="text">{{d.name}} - 日期</span>
                    <span class="flex"></span>
                    <div class="delete icon--delete" @click="onClickDeleteLabel(d,key)"></div>
                    <div class="edit icon--edit" @click="onClickEditLabel(d,key)"></div>
                </div>
                <div class="item-date" v-if="d.kind=='Value'">
                    <span class="text">{{d.name}} - 输入</span>
                    <span class="flex"></span>
                    <div class="delete icon--delete"  @click="onClickDeleteLabel(d,key)"></div>
                    <div class="edit icon--edit"  @click="onClickEditLabel(d,key)"></div>
                </div>
                <div class="item-date" v-if="d.kind=='UnitValue'">
                    <span class="text">{{d.name}} - 输入(单位)</span>
                    <span class="flex"></span>
                    <div class="delete icon--delete" @click="onClickDeleteLabel(d,key)"></div>
                    <div class="edit icon--edit" @click="onClickEditLabel(d,key)"></div>
                </div>
            </div>
        </div>

        <div class="options-button" @click="onAdd">
            <div class="icon--add"></div>
        </div>

        <!-- 属性 -->
        <van-action-sheet v-model="showAttribute">
            <div class="pop-attr-container">
                <div class="type">
                    <div class="title-panel">
                        <span class="text">类型</span>
                        <span class="label">*</span>
                    </div>
                    <div class="tag-container">
                        <div :class="[activeKindIndex==key?'tag-active':'tag']" v-for="(tag,key) in kinds" :key="key" @click="onClickKind(tag,key)">{{tag.value}}</div>
                    </div>
                    <div class="title-panel" style="margin-top: 16px;">
                        <span class="text">适用分类</span>
                        <span class="label">*</span>
                    </div>
                    <div class="tag-container">
                        <div :class="[categoryIndex==key?'tag-active':'tag']" v-for="(tag,key) in categories" :key="key" @click="onChangeCategory(tag,key)">{{tag}}</div>
                    </div>
                </div>
                <div class="body">
                    <div class="title-panel">
                        <span class="text">名称</span>
                        <span class="label">*</span>
                    </div>
                    <div class="input">
                        <input type="text" v-model="attrValue" placeholder="输入" cursor-spacing="60" @input="onChangeSelectionText">
                    </div>
                    <van-button class="my-van-button-pop" type="primary" @click="confirmAttribute"> 确定 </van-button>
                </div>
            </div>
        </van-action-sheet>

        <!-- 标签组 -->
        <van-action-sheet v-model="showLabel">
            <div class="pop-container">
                <div class="header">
                    <div class="add" @click="onAddSelection">
                        <div class="icon--add"></div>
                        <span class="add-text">新增标签</span>
                    </div>
                    
                    <span class="title">{{labelTitle}}</span>

                </div>
                <div class="body">
                    <div class="item" v-for="(v,key) in chooseValues" :key="key">
                        <span>{{v.value}}</span>
                        <span class="flex"></span>
                        <div class="delete icon--delete" @click="onClickDeleteLabelValue(v,key)"></div>
                        <div class="edit icon--edit" @click="onClickEditLabelValue(v,key)"></div>
                    </div>
                </div>
            </div>
        </van-action-sheet>

        <van-action-sheet v-model="showEdit">
            <div class="pop-edit-container">
                <div class="title">
                    <span class="text">名称</span>
                    <span class="label">*</span>
                </div>
                <div class="input">
                    <input v-model="labelValue" type="text" placeholder="输入" cursor-spacing="60" @input="onChangeSelectionName">
                </div>
                <van-button class="my-van-button-pop" type="primary" @click="confirmLabelValue"> 确定 </van-button>
            </div>
        </van-action-sheet>

        <van-action-sheet v-model="showCategory">
            <div class="pop-category-container">
                <div class="item" v-for="(c,index) in categoryList" :key="index" @click="onClickCategory(c)">
                    <van-checkbox :value="c.checked"></van-checkbox>
                    <span class="text">{{c.name}}</span>
                </div>
                <van-button class="my-van-button-pop" type="primary" @click="confirmChoosedCategory"> 确定 </van-button>
            </div>
        </van-action-sheet>

    </div>
</template>

<script>
    export default {
        name: 'ObjectLabel',
        components: {},
        data(){
            return {
                labels: [],
                showLabel: false,
                labelTitle: '品牌',
                chooseValues:[],
                attrValue:'',
                showAttribute: false,
                kinds:[{name:'Selection',value: '标签组'},
                    {name:'Value',value: '输入'},
                    {name:'Timestamp',value: '日期'},
                    {name:'UnitValue',value: '输入(单位)'}],
                activeKindIndex:0,  // 选中标签类型 index
                selectionText: '',
                showEdit: false,
                labelValue:'',
                inputStatus: 0,  // 0-编辑label 1-新增子标签
                activeLabelIndex:0, // 当前选中label index
                activeLabelValueIndex: 0,    // 当前选中label value index
                currentLabelValue:{},
                category: false,
                categoryIndex: 0,
                categories:["所有分类","指定分类"],
                categoryList:[],
                showCategory:false,
                category_codes:[]
            }
        },
        async mounted(){
            this.getLabels()
            let res = await this.O.fetchObjectCategoryList()
            this.categoryList = res;
            console.log(this.categoryList)
        },
        methods:{
            async getLabels(){
                let res = await this.O.fetchObjectLabelList()
                console.log(res)
                this.labels = res;
            },
            onClickShowSelection(item, index){
                this.showLabel = true;
                this.chooseValues = item.values
                this.labelTitle = item.name;
                this.activeLabelIndex = index
            },
            onChangeCategory(tag, index){
                this.categoryIndex = index
                if (this.categoryIndex == 1) {
                    // 选择分类
                    this.showCategory = true;
                }
            },
            // 选择分类
            onClickCategory(item){
                console.log(item)
                item.checked = !item.checked;
                this.$forceUpdate()
            },
            // 确认选择的分类
            confirmChoosedCategory(){
                this.category_codes = [];
                for (let i =0; i < this.categoryList.length; ++i) {
                    let c = this.categoryList[i];
                    if (c.checked) {
                        this.category_codes.push({category_code: c.code})
                    }
                }
                this.showCategory = false;
            },
            // 新增下拉选项
            onAddSelection(){

            },
            // 新增属性--显示弹窗
            onAdd(){
                this.showAttribute = true;
                this.categoryIndex = 0;
                this.attrValue = ''
            },
            // 新增属性--确认事件
            async confirmAttribute(){
                this.showAttribute = false;
                console.log(this.selectionText)
                let res = await this.O.fetchObjectLabelCreate({
                    name: this.selectionText,
                    kind: this.kinds[this.activeKindIndex].name,
                    category: this.categoryIndex==0?'All':'Some',
                    values:[],
                    category_codes: this.category_codes,
                    code: ''
                })
                this.getLabels()
                console.log(res)
            },
            //
            onClickKind(tag, idx) {
                this.activeKindIndex = idx
            },
            // 属性文本input事件
            onChangeSelectionText(e){
                this.selectionText = e.target.value
            },
            // 编辑label
            onClickEditLabel(label, index) {
                this.activeLabelIndex = index;
                this.labelVlaue = label.name;
                this.inputStatus = 0;
                this.showEdit = true;
            },
            // 删除label
            async onClickDeleteLabel(label, index){
                let that = this;
                this.activeLabelIndex = index;
                that.O.fetchObjectLabelDel(label.code).then(res=>{
                    that.getLabels()
                })
            },
            // 标签组 -- 添加子标签
            onAddSelection(){
                this.inputStatus = 1;
                this.labelValue = '';
                this.showEdit = true;
            },
            // 删除子标签
            async onClickDeleteLabelValue(value, index){
                this.activeLabelValueIndex = index;
                let label = this.labels[this.activeLabelIndex];
                label.values.splice(index, 1)
                let res = await this.O.fetchObjectLabelCreate({
                        name: label.name,
                        kind: label.kind,
                        category: 'All',
                        values: label.values,
                        category_codes:label.category_codes,
                        code: label.code
                })
                await this.getLabels()
                this.chooseValues = this.labels[this.activeLabelIndex].values;
            },
            // 编辑子标签
            onClickEditLabelValue(data, index) {
                this.labelValue = '';
                this.currentLabelValue = data.value;
                this.activeLabelValueIndex = index;
                this.labelValue = data.value;
                this.showEdit = true;
                this.inputStatus = 2;
            },

            // 编辑名字
            onChangeSelectionName(e){
                this.labelValue = e.target.value;
            },
            // 确认编辑/新增
            async confirmLabelValue(){
                let label = this.labels[this.activeLabelIndex]
                if (this.inputStatus == 0) {
                    // 编辑label
                    let res = await this.O.fetchObjectLabelCreate({
                        name: this.labelValue,
                        kind: label.kind,
                        category: 'All',
                        values: label.values,
                        category_codes:label.category_codes,
                        code: label.code
                    })
                    this.getLabels()
                    this.showEdit = false;
                    console.log(res)
                } else if (this.inputStatus == 1) {
                    // 新增子label
                    if (!label.values)   label.values = []
                    label.values = label.values.concat([{code:'',value: this.labelValue}])
                    console.log(label.values)
                    let res = await this.O.fetchObjectLabelCreate({
                        name: label.name,
                        kind: label.kind,
                        category: 'All',
                        values: label.values,
                        category_codes:label.category_codes,
                        code: label.code
                    })
                    await this.getLabels()
                    this.showEdit = false;
                    this.chooseValues = this.labels[this.activeLabelIndex].values;
                } else if (this.inputStatus == 2) {
                    // 编辑子label
                    label.values[this.activeLabelValueIndex].value = this.labelValue;
                    let res = await this.O.fetchObjectLabelCreate({
                        name: label.name,
                        kind: label.kind,
                        category: 'All',
                        values: label.values,
                        category_codes:label.category_codes,
                        code: label.code
                    })
                    await this.getLabels()
                    this.showEdit = false;
                    this.chooseValues = this.labels[this.activeLabelIndex].values;
                }
            }
        }
    }
</script>