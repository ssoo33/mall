<template>
    <div class="basic-info">
        <div class="price">
            <span class="mlogo">￥</span><span class="money">{{basicInfo.price}}</span>
        </div>
        <div class="sale">
            <div class="left">{{basicInfo.sale}}</div>
            <div class="right">领卷<span class="fas fa-angle-right"></span></div>
        </div>
        <div class="title">{{basicInfo.title}}</div>
        <div class="bottom-info">
            <div>销量</div>
            <div>收藏</div>
            <div>点赞</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailBasic',
        props: {
            basicInfo: {
                type: Object,
                default () {
                    return {}
                }
            }
        }

    }
</script>

<style scoped>
    .basic-info {
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        margin-top: 10px;

    }

    .price {
        color: var(--color-high-text);
        font-size: 20px;
        margin: 5px 7px;
    }

    .price .money {
        font-size: 30px;
    }

    .sale {
        display: flex;
        justify-content: space-between;
    }

    .sale .left {
        background-color: var(--color-tint);
        color: #fff;
        padding: 1px 2px;
        margin: 3px 6px;
    }

    .sale .right {
        color: var(--color-high-text);
        margin: 3px 10px;
    }

    .title {
        font-size: 17px;
        padding: 17px 6px;
    }

    .bottom-info {
        display: flex;
        justify-content: space-between;
        text-align: center;
    }

    .bottom-info div {
        padding: 0 7px 5px 7px;
    }
</style>