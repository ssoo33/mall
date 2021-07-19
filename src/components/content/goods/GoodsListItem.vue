<template>
    <div class="goods-list-item" @click="toDetail">
        <!-- <a :href="goodsItem.link"> -->
            <img :src="goodsItem.img" alt="">
            <p>{{goodsItem.title}}</p>
            <span>￥{{goodsItem.price}}</span>
        <!-- </a> -->
    </div>
</template>

<script>
    export default {
        name: 'GoodsListItem',
        props: {
            goodsItem: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        methods:{
            toDetail(){
                // 跳转到详情页
                console.log("detail"+this.goodsItem.iid)
                this.$router.push("/detail/"+this.goodsItem.iid)
            }
        }
    }
</script>

<style scoped>
    /* 设置每一个item的样式 */
    .goods-list-item {
        width: 46%;
        margin: 4px;
        border-radius: 15px;
        background-color: #fff;
    }

    .goods-list-item img {
        width: 100%;
        border-radius: 15px 15px 0 0;
    }

    .goods-list-item p {
        font-size: 16px;
        line-height: 20px;
        padding: 7px;
        /* white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; */
    }
    .goods-list-item span{
        display: block;
        color: var(--color-high-text);
        padding: 6px;
        font-size: 20px;
    }
</style>