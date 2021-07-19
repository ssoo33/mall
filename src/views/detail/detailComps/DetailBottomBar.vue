<template>
    <div class="bottom-bar">
        <ul class="bar-content">
            <li><span class="fas fa-store"></span>店铺</li>
            <li><span class="fas fa-comment-dots"></span>客服</li>
            <li><span class="fas fa-star"></span>收藏</li>
            <li class="car" @click="addToCar">加入购物车</li>
            <li class="buy">立即购买</li>
        </ul>
    </div>
</template>


<script>
    export default {
        name:'DetailBottomBar',
        methods:{
            addToCar(){
                this.$emit("addToCar")
            }
        }
    }
</script>

<style scoped>
    .bottom-bar {
        width: 98%;
        height: 49px;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .bar-content {
        display: flex;
        height: 49px;
        align-items: center;
        text-align: center;
        list-style: none;
    }

    /* 前三个的样式 */
    .bar-content li:nth-child(-n+3) {
        flex: 1;
        /* font-size: 12px; */

    }

    .bar-content li:nth-child(-n+3) span {
        display: block;
        margin-bottom: 3px;
        font-size: 13px;
    }

    .car,
    .buy {
        width: 25%;
        height: 42px;
        line-height: 42px;
        font-size: 17px;
        color: #fff;
    }
    .car{
        border-radius: 20px 0 0 20px;
        background-color: var(--color-tint);
    }
    .buy{
        border-radius: 0 20px 20px 0;
        background-color: var(--color-high-text);
    }
</style>