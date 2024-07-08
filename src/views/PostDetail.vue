<style lang="less" scoped>
@import '~@/styles/colors.less';
.container{
    width: 100vw;
    padding: 16px 16px;
    box-sizing: border-box;
    .title {
        color: #000;
        height: 28px;
        font-size: 24px;
        line-height: 28px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: left;
    }
    .date{
        font-size: 12px;
        color: #8E8F9A;
    }
    .body{
        margin-top: 24px;
    }
}

</style>

<template>
    <div class="container">
        <div class="title">{{post.title}}</div>
        <span class="date">{{$formatDate(post.createTime)}}</span>
        <div class="body" v-html="detail"></div>
    </div>
</template>

<script>

export default {
    name: 'PostDetail',
    components: {},
    data(){
        return {
            id: 0,
            post:{},
            detail: ''
        }
    },
    async mounted(){
        this.id = this.$route.query.postId;
        console.log(this.id)
        let res = await this.D.fetchPostDetail({value: this.id})
        console.log(res)

        let reg = new RegExp("<img", 'g')
        this.detail = res.detail.replace(reg, "<img style='width:90vw'")
        this.post = res;
    },
    methods:{

    }
}

</script>