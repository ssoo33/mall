<template>
    <div class="swiper-content" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <div class="img-box">
            <div v-for="(item, index) in imgs" :key="index" class="slide">
                <a href="javascript:;">
                    <img :src="item" alt="">
                </a>
            </div>
        </div>
        <div class="num-index">
            {{this.currentImg+1}}/{{imgs.length}}
        </div>
    </div>

</template>

<script>
    export default {
        name: 'ImgSwiper',
        props: {
            imgs: {
                type: Array,
                defaule() {
                    return []
                }
            }
        },
        data() {
            return {
                bannerWidth: 0, //轮播图的宽度
                startPoint: 0, //触摸开始的点的横坐标
                endPoint: 0, //触摸结束的点的横坐标
                moveLength: 0, //startPoint和endPonit的差值
                currentImg: 0, //当前轮播图的索引
                isPlaying: true, //判断是否处于自动轮播
                playTimer: null, //轮播定时器
            }
        },
        methods: {
            touchStart(event) {
                // 停止轮播
                clearInterval(this.playTimer)
                // 获取触摸开始的点
                this.startPoint = event.changedTouches[0].pageX
            },
            touchMove(event) {
                // 获取触摸结束点
                this.endPoint = event.changedTouches[0].pageX
                // 移动图片
                this.slidings()
            },
            touchEnd() {
                this.jumpTo()
            },
            // 处理再滑动过程中，轮播图跟着手指滑动的距离移动
            slidings() {
                // 计算移动的距离
                this.moveLength = this.startPoint - this.endPoint
                // 判断时点击还是移动
                if (this.moveLength === 0) {
                    return
                }
                // 获取轮播对象，操作DOM
                const imgDom = document.getElementsByClassName('slide')[0]
                // 获取轮播图的宽度
                this.bannerWidth = imgDom.offsetWidth
                // 判断是否超出滑动范围（第一页无法再向前，最后一页无法再向后）
                if (this.moveLength > 0 && this.currentImg !== this.imgs.length - 1) {
                    imgDom.style.marginLeft = -this.moveLength - this.currentImg * this.bannerWidth + "px"
                    // console.log(imgDom.style.marginLeft)
                } else if (this.moveLength < 0 && this.currentImg !== 0) {
                    imgDom.style.marginLeft = -this.moveLength - this.currentImg * this.bannerWidth + "px"
                }
            },
            // 用于处理滑动到一定程度后，松手自己会跳动到上一页或下一页
            jumpTo() {
                const imgDom = document.getElementsByClassName("slide")[0]
                // 滑动超过轮播图宽度的0.4，则跳转到下一张
                if (this.moveLength > 0 && this.currentImg !== this.imgs.length - 1) {
                    if (this.moveLength > this.bannerWidth * 0.4) {
                        this.currentImg++
                    }

                } else if (this.moveLength < 0 && this.currentImg !== 0) {
                    if (-this.moveLength > this.bannerWidth * 0.4) {
                        this.currentImg--
                    }
                }
                imgDom.style.marginLeft = -this.currentImg * this.bannerWidth + "px"
                imgDom.style.transition = 'all 1s ease'
            }

        }
    }
</script>

<style scoped>
    .swiper-content {
        overflow: hidden;
        position: relative;
    }

    .img-box {
        display: flex;
    }

    .slide {
        flex-shrink: 0;
        width: 100%;
    }

    .slide img {
        width: 100%;
        height: 100%;
    }
    /* 滑动到的样式 */
    .num-index{
        /* 样式 */
        font-size: 18px;
        width: 30px;
        height: 25x;
        line-height: 25px;
        text-align: center;
        background: rgba(78, 73, 73,.7);
        color: #fff;
        border-radius: 10px;
        /* 定位 */
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
</style>