<template>
    <div class="store">
        <div class="top">

            <div class="left">
                <img src="@/assets/img/detail/dlogo.webp" alt="">
            </div>
            <div class="center">
                <h4 class="name">衣服店</h4>
                <div class="star">
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                </div>
            </div>

            <div class="right">
                <span>宝贝描述4.8</span>
                <span>卖家服务4.8</span>
                <span>物流服务4.8</span>
            </div>
        </div>

        <div class="bottom">
            <div class="jd-node">进店逛逛</div>
            <div class="qb-node">全部宝贝</div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .store {
        background-color: #fff;
        border-radius: 10px;
        margin-top: 10px;
    }

    .top {

        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .left {
        width: 100px;
        float: left;
    }

    .left img {
        width: 70px;
        margin: 5px;
    }

    .center {
        width: 100%;
        margin: 5px;
    }
    .center .name{
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        color: black;
    }
    .center .star{
        color: var(--color-high-text);
    }
    .right {
        width: 140px;
        font-size: 13px;
        margin: 5px;
    }
    .right span{
        display: block;
        height: 20px;
        line-height: 20px;
    }

    .bottom{
        display: flex;
        justify-content: center;
        padding-bottom: 15px;
    }
    .bottom .jd-node, .qb-node{
        width: 90px;
        height: 30px;
        line-height: 30px;
        border-radius: 20px;
        border: 2px solid var(--color-tint);
        text-align: center;
        margin: 0 5px;
    }
</style>