<template>
    <div id="item">
        <div class="item-header">
            <div class="h-left">
                <div class="checkbox"></div>
                <h3>蕉下官方旗舰店 <span>></span></h3>
            </div>
            <div class="h-right">
                <span>领券</span>
            </div>
        </div>
        <div class="item-content">
            <div class="c-left">
                <div class="checkbox"></div>
                <div class="c-img">
                    <img src="@/assets/img/car/car.webp" alt="">
                </div>
            </div>
            <div class="c-right">
                <h5>蕉下旗舰店胶囊太阳伞防晒</h5>
                <div class="options">
                    <span>【六折伞】薄荷绿</span>
                </div>
                <div class="total">
                    <div class="price">
                        <span>￥</span>299
                    </div>
                    <div class="num" v-if="numaddbtn" @click="addNum">x{{num}}</div>
                    <div class="num" v-else>
                        <span class="minus" @click="minus">-</span>
                        <span class="numinput">{{num}}</span>
                        <span class="plus" @click="plus">+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CarItem',
        data() {
            return {
                num: 1,
                numaddbtn: true,
            }
        },
        methods: {
            addNum(){
                this.numaddbtn = false
            },
            minus(){
                if(this.num<=1){
                    this.num=1
                }else{
                   this.num-- 
                }
            },
            plus(){
                this.num++
            }
        },
    }
</script>

<style scoped>
    #item {
        width: 100%;
        margin: 8px 0;
        border-radius: 10px;
        background-color: #fff;
        padding: 7px 0;
    }

    /* 选择的圆圈 */
    .checkbox {
        width: 20px;
        height: 20px;
        border: 1px solid rgb(199, 188, 188);
        border-radius: 50%;
        margin: 0 8px;
    }

    /* 标题 */
    .item-header {
        display: flex;
        justify-content: space-between;
        height: 44px;
        line-height: 44px;
    }

    .item-header .h-left {
        display: flex;
        align-items: center;
    }

    .h-left h3 {
        color: black;
    }

    .h-left h3 span {
        color: rgb(182, 171, 171);
    }

    .h-right {
        color: black;
        margin: 0 8px;
    }

    .item-content {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
    }

    .c-left {
        display: flex;
        align-items: center;
        margin-right: 6px;
    }

    .c-left .c-img {
        width: 120px;
        border-radius: 8px;
        padding: 3px;
        background-color: #eee;
    }

    .c-img img {
        width: 100%;
        border-radius: 8px;
    }

    .c-right {
        margin-right: 15px;
    }

    .c-right h5 {
        color: black;
        font-size: 14px;
        line-height: 30px;
        height: 30px;
    }

    .c-right .options span {
        background-color: rgb(245, 239, 239);
        border-radius: 5px;
        font-size: 14px;
        padding: 4px 2px 4px 6px;
    }

    .c-right .total {
        position: relative;
        top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .total .price {
        color: var(--color-high-text);
        font-size: 20px;
        font-weight: bold;
    }

    .total .price span {
        font-weight: normal;
        font-size: 16px;
    }

    .total .num {
        border: 1px solid rgb(219, 212, 212);
        padding: 5px;
        border-radius: 5px;

    }
    .num .minus{
        border-right: 1px solid rgb(219, 212, 212);
        padding: 0 8px 0 5px;
        text-align: center;
    }
    .num .numinput{
        width: 40px;
        text-align: center;
        display: inline-block;
    }
    .num .plus{
        border-left: 1px solid rgb(219, 212, 212);
        padding: 0 8px 0 5px;
        text-align: center;
    }
</style>