<style lang="less" scoped>
  @import '~@/styles/colors.less';
    .home-container{
        min-height: 100vh;
        padding: 10px 16px;
        box-sizing: border-box;
        background: @bgGray;
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

        .header{
            display: flex;
            overflow-x: scroll;
            .category{
                padding: 4px;
                box-sizing: border-box;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                flex-direction: column;
                color: #000;

                .icon-wrap{
                    width: 36px;
                    height: 36px;
                    position: relative;
                    border-radius: 50%;
                    background-color: rgba(0,0,0,0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .icon{
                        position: absolute;
                        background-position: center center;
                        background-size: cover;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                    }
                }
             
                .text{
                 
                    font-size: 14px;
                }
            }
            .category-active{
                color: green;
            }
        }

        .container{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            .img-wrap{
                width: 100%;
                height: 100%;
                padding: 4px 4px;
                box-sizing: border-box;
                .block{
                    width: 100%;
                    height: 100%;
                    .top{
                        display: flex;
                        height: 50%;
                        width: 100%;
                     
                    }
                    .bottom{
                        display: flex;
                        height: 50%;
                        width: 100%;
                    }
                    .empty{
                        background: #5a4d4d;
                        width: 50%;
                        //height: 100%;
                        height: 0;
                        padding-bottom: 50%;
                        background-position: center center;
                        background-size: cover;
                    }
                    .empty-left-top{
                        border-top-left-radius: 8px;
                      
                        border-right: 2px solid #000;
                        box-sizing: border-box;
                    }
                    .empty-right-top{
                        border-top-right-radius: 8px;
                     
                        box-sizing: border-box;
                    }
                    .empty-left-bottom{
                        border-bottom-left-radius: 8px;
                        border-right: 2px solid #000;
                        border-top: 2px solid #000;
                        box-sizing: border-box;
                    }
                    .empty-right-bottom{
                        border-bottom-right-radius: 8px;
                        border-top: 2px solid #000;
                        box-sizing: border-box;
                    }
                    .object-img{
                        width: 100%;
                        height: 100%;
                        background-position: center center;
                        background-size: cover;
                        border-radius: 8px;
                    }
                }

            }
            .footer{
                padding-left: 4px;
                box-sizing: border-box;
                .text{
                    font-size: 16px;
                    font-weight: 600;
                }
                .desc{
                    display: flex;
                    margin-top: 4px;
                    .amount{
                        background: #bbb;
                        color: #fff;
                        font-size: 12px;
                        padding: 2px 4px;
                        box-sizing: border-box;
                        border-top-left-radius: 4px;
                        border-bottom-left-radius: 4px;
                    }
                    .price{
                        font-size: 12px;
                        background: green;
                        color: #fff;
                        padding: 2px 4px;
                        box-sizing: border-box;
                        border-top-right-radius: 4px;
                        border-bottom-right-radius: 4px;
                    }
                }
            }
        }
    }
    .square-container{
        margin-bottom: 48px;
    }
</style>

<template>
    <div class="home-container">
        <div class="exchange" @click="exchangeView">切换</div>
        <div class="header" v-if="isCategory">
            <div :class="[activeIndex==index?'category category-active':'category']" v-for="(c,index) in categories" :key="index" @click="onClickCategory(c,index)">
                <div class="icon-wrap">
                    <div class="icon" :style="{'backgroundImage': 'url('+c.icon+')'}"></div>
                </div>
              
                <div class="text">{{c.name}}</div>
            </div>
        </div>
        <div class="header" v-if="!isCategory">
            <div :class="[spaceActiveIndex==index?'category category-active':'category']" v-for="(c,index) in spaces" :key="index" @click="onClickSpace(c,index)">
                <div class="text">{{c.name}}</div>
            </div>
        </div>

        <div class="container" v-if="isCategory">
            <Square :hwRatio="1" width="33.3%" v-for="(b,index) in boards" :key="index">
                <div class="img-wrap">
                    <div class="block" v-if="b.type=='Category'&&b.image_preview.length==0" @click="toDetailPage(b,index)">
                        <div class="top">
                            <div class="empty empty-left-top"></div>
                            <div class="empty empty-right-top"></div>
                        </div>
                        <div class="bottom">
                            <div class="empty empty-left-bottom"></div>
                            <div class="empty empty-right-bottom"></div>
                        </div>
                    </div>
                    <div class="block" v-if="b.type=='Category'&&b.image_preview.length==1" @click="toDetailPage(b,index)">
                        <div class="top">
                            <div class="empty empty-left-top" :style="{'backgroundImage':'url('+b.image_preview[0]+')'}"></div>
                            <div class="empty empty-right-top"></div>
                        </div>
                        <div class="bottom">
                            <div class="empty empty-left-bottom"></div>
                            <div class="empty empty-right-bottom"></div>
                        </div>
                    </div>
                    <div class="block" v-if="b.type=='Category'&&b.image_preview.length==2" @click="toDetailPage(b,index)">
                        <div class="top">
                            <div class="empty empty-left-top" :style="{'backgroundImage':'url('+b.image_preview[0]+')'}"></div>
                            <div class="empty empty-right-top" :style="{'backgroundImage':'url('+b.image_preview[1]+')'}"></div>
                        </div>
                        <div class="bottom">
                            <div class="empty empty-left-bottom"></div>
                            <div class="empty empty-right-bottom"></div>
                        </div>
                    </div>
                    <div class="block" v-if="b.type=='Category'&&b.image_preview.length==3" @click="toDetailPage(b,index)">
                        <div class="top">
                            <div class="empty empty-left-top" :style="{'backgroundImage':'url('+b.image_preview[0]+')'}"></div>
                            <div class="empty empty-right-top" :style="{'backgroundImage':'url('+b.image_preview[1]+')'}"></div>
                        </div>
                        <div class="bottom">
                            <div class="empty empty-left-bottom" :style="{'backgroundImage':'url('+b.image_preview[2]+')'}"></div>
                            <div class="empty empty-right-bottom"></div>
                        </div>
                    </div>
                    <div class="block" v-if="b.type=='Category'&&b.image_preview.length==4" @click="toDetailPage(b,index)">
                        <div class="top">
                            <div class="empty empty-left-top" :style="{'backgroundImage':'url('+b.image_preview[0]+')'}"></div>
                            <div class="empty empty-right-top" :style="{'backgroundImage':'url('+b.image_preview[1]+')'}"></div>
                        </div>
                        <div class="bottom">
                            <div class="empty empty-left-bottom" :style="{'backgroundImage':'url('+b.image_preview[2]+')'}"></div>
                            <div class="empty empty-right-bottom" :style="{'backgroundImage':'url('+b.image_preview[3]+')'}"></div>
                        </div>
                    </div>
                    <div class="block" v-if="b.type=='Object'" @click="toDetailPage(b,index)">
                        <div class="object-img" :style="{'backgroundImage':'url('+b.img+')'}"></div>
                    </div>
                </div>
                <div class="footer" v-if="b.type=='Category'">
                    <span class="text text-overflow--1">{{b.name}}</span>
                    <div class="desc">
                        <span class="amount">{{b.sum_sku_quantity}}</span>
                        <span class="price">{{b.sum_price}}</span>
                    </div>
                </div>
                <div class="footer" v-if="b.type=='Object'">
                    <span class="text text-overflow--1">{{b.name}}</span>
                    <div class="desc">
                        <span class="amount">{{b.quantity}}</span>
                        <span class="price">{{b.price}}</span>
                    </div>
                </div>
            </Square>
        </div>

        <div class="container" v-if="!isCategory">
            <Square :hwRatio="1" width="33.3%" v-for="(b,index) in boards" :key="index">
                <div class="img-wrap">
                    <div class="block" v-if="b.image_preview.length==0" @click="toDetailPage(b,index)">
                        <div class="top">
                            <div class="empty empty-left-top"></div>
                            <div class="empty empty-right-top"></div>
                        </div>
                        <div class="bottom">
                            <div class="empty empty-left-bottom"></div>
                            <div class="empty empty-right-bottom"></div>
                        </div>
                    </div>
                    <div class="block" v-if="b.image_preview.length==1" @click="toDetailPage(b,index)">
                        <div class="top">
                            <div class="empty empty-left-top" :style="{'backgroundImage':'url('+b.image_preview[0]+')'}"></div>
                            <div class="empty empty-right-top"></div>
                        </div>
                        <div class="bottom">
                            <div class="empty empty-left-bottom"></div>
                            <div class="empty empty-right-bottom"></div>
                        </div>
                    </div>
                    <div class="block" v-if="b.image_preview.length==2" @click="toDetailPage(b,index)">
                        <div class="top">
                            <div class="empty empty-left-top" :style="{'backgroundImage':'url('+b.image_preview[0]+')'}"></div>
                            <div class="empty empty-right-top" :style="{'backgroundImage':'url('+b.image_preview[1]+')'}"></div>
                        </div>
                        <div class="bottom">
                            <div class="empty empty-left-bottom"></div>
                            <div class="empty empty-right-bottom"></div>
                        </div>
                    </div>
                    <div class="block" v-if="b.image_preview.length==3" @click="toDetailPage(b,index)">
                        <div class="top">
                            <div class="empty empty-left-top" :style="{'backgroundImage':'url('+b.image_preview[0]+')'}"></div>
                            <div class="empty empty-right-top" :style="{'backgroundImage':'url('+b.image_preview[1]+')'}"></div>
                        </div>
                        <div class="bottom">
                            <div class="empty empty-left-bottom" :style="{'backgroundImage':'url('+b.image_preview[2]+')'}"></div>
                            <div class="empty empty-right-bottom"></div>
                        </div>
                    </div>
                    <div class="block" v-if="b.image_preview.length==4" @click="toDetailPage(b,index)">
                        <div class="top">
                            <div class="empty empty-left-top" :style="{'backgroundImage':'url('+b.image_preview[0]+')'}"></div>
                            <div class="empty empty-right-top" :style="{'backgroundImage':'url('+b.image_preview[1]+')'}"></div>
                        </div>
                        <div class="bottom">
                            <div class="empty empty-left-bottom" :style="{'backgroundImage':'url('+b.image_preview[2]+')'}"></div>
                            <div class="empty empty-right-bottom" :style="{'backgroundImage':'url('+b.image_preview[3]+')'}"></div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <span class="text text-overflow--1">{{b.name}}</span>
                    <div class="desc">
                        <span class="amount">{{b.sum_sku_quantity}}</span>
                        <span class="price">{{b.sum_price}}</span>
                    </div>
                </div>
            </Square>
        </div>

        <div class="options-button" @click="onAdd">
            <div class="icon--add"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ObjectHome',
    components: {},
    data(){
        return {
            url: '',
            categories:[],
            activeIndex: 0,
            spaceActiveIndex: 0,
            boards:[],
            isCategory: true,
            spaces: [],
        }
    },
    async mounted(){
        let res = await this.O.fetchCategoryTop()
        this.categories = res;
        this.getCategoryDashboard(res[0].code)

        // test
        res = await this.O.fetchSpaceTop()
        this.spaces = res;
    },
    methods: {
        exchangeView(){
            this.isCategory = !this.isCategory;
            if (this.isCategory) {
                this.getCategoryDashboard(this.categories[0].code)
            } else {
                this.getSpaceDashboard(this.spaces[0].code)
            }
        },
        onClickSpace(c,index){
            this.spaceActiveIndex = index;
            this.getSpaceDashboard(c.code)
        },
        onClickCategory(c, index) {
            this.activeIndex = index;
            this.getCategoryDashboard(c.code)
        },
        async getSpaceDashboard(code) {
            let res = await this.O.fetchSpaceDashboard(code);
            this.boards = res;
            console.log(this.boards)
        },
        async getCategoryDashboard(code) {
            this.boards = await this.O.fetchCategoryDashboard(code)
            console.log(this.boards)
        },
        toDetailPage(category,index){
            //this.$route.query
            console.log(category)
            let type = category.type;
            if (type == 'Category') {
                this.$router.push({
                    path: '/objectList',
                    query: {
                        code: category.code
                    }
                })
            } else if (type == "Object") {
                this.$router.push({
                    path: '/objectDetail',
                    query: {
                        code: category.code
                    }
                })
            } else if (category.kind == "Container") {
                this.$router.push({
                    path: '/objectView',
                    query: {
                        code: category.code
                    }
                })
            }
          
        },
        onAdd(){
            this.$router.push({
                path: '/setup'
            })
        }
    }
}
</script>

