<template>
    <div id="total">
        <div class="t-left">
            <div class="checkbox"></div>
        </div>
        <div class="t-right">
            <div class="price">
                <span class="sum">合计：</span>
                <span class="m-icon">￥</span>
                <span class="money">0</span>
            </div>
            <div class="num">结算</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'TotalBar'
    }
</script>

<style scoped>
    #total {
        background-color: #fff;
        width: 100%;
        height: 60px;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .t-left{
        margin: 0 10px;
    }

    /* 选择的圆圈 */
    .t-left .checkbox {
        width: 20px;
        height: 20px;
        border: 1px solid rgb(199, 188, 188);
        border-radius: 50%;
        margin: 0 8px;
    }

    .t-right{
        display: flex;
        align-items: center;
    }
    .t-right .price{
        margin:  0 10px;
    }
    .price .m-icon{
        font-size: 14px;
        color: var(--color-high-text);
    }
    .price .money{
        font-size: 20px;
        color: var(--color-high-text);
    }
    .num{
        color: #fff;
        width: 80px;
        height: 40px;
        line-height: 40px;
        background-color: var(--color-tint);
        text-align: center;
        border-radius: 20px;
        margin: 0 15px 0 3px;
    }
</style>