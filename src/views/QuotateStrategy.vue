<style lang="less" scoped>
@import '~@/styles/colors.less';
    .container{
        padding-bottom: calc(100px + env(safe-area-inset-bottom));
        background-color: #fafafa;
    }

.produc-info{
    padding: 16px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

    .strategy{
        background: #fff;
        margin-top:16px;
        width: 100vw;
        .strategy-setting {
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: end;
            padding: 4px 16px;
            box-sizing: border-box;
        }
    }

    .chengben{
        background-color: #ecedf1;
        padding: 16px;
        box-sizing: border-box;
        margin-top: 16px;
        .cb-title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 30px;
            .left{
                font-size: 16px;
                font-weight: 500;
            }
            .right{

            }
        }
        .item{
            margin-top: 6px;
            padding-right: 120px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 4px;

            .title{
                height: 22px;
                font-size: 16px;
            }
            .title::before{
                content: '•';
                margin-right: 0.5em;
                color: rgb(113, 223, 223);
            }
            .item-content{
                font-size: 14px;
                .info{
                    padding-left: 6px;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .label::before{
                    content: '••';
                    margin-right: 0.5em;
                    color: rgb(113, 223, 223);
                 }
            }
        }
    }

    .lirun{
        margin-top: 16px;
        background-color: #fff;
        padding: 16px;
        box-sizing: border-box;
        .lirun-title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 30px;
            .left{
                font-size: 16px;
                font-weight: 500;
            }
        }
    }

    .zhekou{
        margin-top: 16px;
        background-color: #fff;
        padding: 16px;
        box-sizing: border-box;
        .zhekou-title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 30px;
            .left{
                font-size: 16px;
                font-weight: 500;
            }
        }
    }

    .model{
        padding: 16px;
        box-sizing: border-box;
        .model-title{

        }
        .model-item{
            margin-top: 12px;
            font-size: 14px;
            color: #aaa;
        }
        .model-item::before{
            content: "*";
            color: red;
        }
    }

</style>


<template>
    <div class="container">
        <div class="produc-info">
            <div>
                <span>产品名称:</span>
                <span>{{productionName}}</span>
            </div>
            <div>
                <span>产品数量:</span>
                <span>{{amount}}</span>
            </div>
        </div>
        <div class="strategy">
            <div class="strategy-setting">
                <van-icon color="#1989fa" name="setting" />
            </div>

            <van-radio-group v-model="radio"  @change="onChange" style="padding: 16px;font-size:14px">
            <van-radio name="1" icon-size="16">报价策略A</van-radio>
            <van-radio name="2" icon-size="16">报价策略B</van-radio>
            <van-radio name="3" icon-size="16">报价策略C</van-radio>
        </van-radio-group>
        </div>

        <div class="chengben">
            <div class="cb-title">
                <div class="left">成本</div>
                <div class="right" @click="onShowInfo">
                    <van-icon  color="#1989fa" name="info" />
                </div>
            </div>
            <div class="item">
                <div class="title">制造成本</div>
                <div class="item-content">
                    <div class="info">
                        <div class="label">直接材料</div>
                        <div>#N/A</div>
                    </div>
                    <div class="info">
                        <div class="label">直接人工</div>
                        <div>#N/A</div>
                    </div>
                    <div class="info">
                        <div class="label">直接费用</div>
                        <div>#N/A</div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="title">非制造成本</div>
                <div class="item-content">
                    <div class="info">
                        <div class="label">销售成本</div>
                        <div>#N/A</div>
                    </div>
                    <div class="info">
                        <div class="label">管理成本</div>
                        <div>#N/A</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lirun">
            <div class="cb-title">
                <div class="left">利润</div>
            </div>
            <van-field
            clearable
            v-model="lirun"
            placeholder="请输入利润"
            />

        </div>

        <div class="zhekou">
            <div class="zhekou-title">
                <div class="left">折扣</div>
            </div>
            <van-field
            clearable
            v-model="zhekou"
            placeholder="请输入折扣"
            />
        </div>

        <van-button class="my-van-button" round size="large" type="primary" @click="onGenerator"> 计算 </van-button>

        <van-action-sheet v-model="showInfo">
            <div class="model">
                <div class="model-title">该模块需以下条件可解锁:</div>
                <div class="model-item">
                    需接入财务成本信息
                </div>
            </div>
        </van-action-sheet>
   </div>
</template>

<script>
import qs from 'querystring'

export default {
    name: "QuotateStrategy",
    components: {},
    data(){
        return {
            radio: "1",
            productionName: "测试",
            amount: 100,
            showInfo: false,
            lirun: '20%',
            zhekou: "10%"
        }
    },
    mounted(){
        console.log(this.$router.query)
        var data = this.$route.query.data
        if (data) {
            data = JSON.parse(data)
            this.productionName = data.productionName;
            this.amount = data.amount
        }
    },
    methods: {
        onChange(event) {
            this.setData({
                radio: event.detail,
            });
        },
        onGenerator(){
            this.$toast.loading("计算中...")
            setTimeout(()=>{
                this.$toast.success("100.000元", {duration: 2000})
            },2000)
        },
        onShowInfo(){
            this.showInfo = true;
        }
    }

}

</script>
