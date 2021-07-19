<template>
    <!-- 采用动态路由的方式讲商品id传递给详情页，详情页才能根据id获取更详细的商品信息 -->
    <div class="detail">
        <!-- 导航栏 -->
        <nav-bar class="top-bar">
            <!-- 左边 -->
            <template v-slot:left>
                <span class="dc-left fas fa-angle-left" @click="backClick"></span>
            </template>

            <!-- 中间 -->
            <template v-slot:center>
                <detail-control :title="['商品', '参数','评论','推荐']" @activeIndex="activeIndex">
                </detail-control>
            </template>
        </nav-bar>

        <!-- 图片轮播 -->
        <img-swiper :imgs="imgs" class="imgswiper"></img-swiper>
        <div class="info">
{{$store.state.carList.length}}
            <!-- 基本信息 -->
            <detail-basic :basicInfo="basicInfo"></detail-basic>
            <!-- 店铺 -->
            <store></store>
            <div class="message" ref="message">--详细信息--</div>
            <detail-info :imgs="imgs"></detail-info>
        </div>
        <back-top class="home-top" @click.native="backTopClick" v-if="btnFlag"></back-top>
        
        <detail-bottom-bar @addToCar="addToCar"></detail-bottom-bar>
    </div>
</template>

<script>
    import NavBar from 'components/content/navbar/NavBar.vue'
    import DetailControl from 'views/detail/detailComps/DetailControl.vue'
    import ImgSwiper from 'views/detail/detailComps/ImgSwiper.vue'
    import DetailBasic from './detailComps/DetailBasic.vue'
    import Store from './detailComps/Store.vue'
    import DetailInfo from './detailComps/DetailInfo.vue'
    import BackTop from 'components/content/backtop/BackTop.vue'
    import DetailBottomBar from './detailComps/DetailBottomBar.vue'

    export default {
        name: 'Detail',
        components: {
            NavBar,
            DetailControl,
            ImgSwiper,
            DetailBasic,
            Store,
            DetailInfo,
            BackTop,
            DetailBottomBar,
        },
        data() {
            return {
                iid: null,
                imgs: [
                    require("assets/img/detail/d1.webp"),
                    require("assets/img/detail/d2.webp"),
                    require("assets/img/detail/d3.webp")
                ],
                basicInfo: { title: '洋气镂空钩花百搭开衫短袖针织衫上衣', price: 88, sale: '店铺卷满99减9' },
                // 是否显示backTop
                btnFlag: false,
                scrollTopYs: [0, 800, 1000, 1200],
                index: 0
            }
        },
        created() {
            // 创建时，拿到iid值
            this.iid = this.$route.params.iid
            console.log("id:"+this.iid)
            // 根据iid请求数据
            // 没有数据那就写成静态的一个页面吧。 T@T

        },
        mounted() {
            window.addEventListener('scroll', this.scrollToTop)

        },
        destoryed() {
            window.removeEventListener('scroll', this.scrollToTop)
        },

        methods: {
            activeIndex(index) {

                // 获取到了detailcontroll发送来的点击序号
                // console.log(this.scrollTopYs[index])
                this.index = index
                this.backPos()
                document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = this.scrollTopYs[index]
            },
            // 返回上一层
            backClick() {
                this.$router.go(-1)
            },
            // 获取到相应位置
            backPos() {
                // 只写一个，其他的同理
                let pos2 = this.$refs.message.offsetTop
                this.scrollTopYs[2] = pos2
            },
            // 回到顶部
            backTopClick() {
                // console.log("clikkf")
                const that = this
                let timer = setInterval(() => {
                    let ispeed = Math.floor(-that.scrollTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                    if (that.scrollTop === 0) {
                        clearInterval(timer)
                    }
                }, 16)
            },
            // 为了计算距离顶部的高度，当高度大于460显示回顶部图标，小于60则隐藏
            scrollToTop() {
                const that = this
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                that.scrollTop = scrollTop
                // 获取滚动了多远
                this.scrollTop = scrollTop
                // console.log(that.scrollTop)
                if (that.scrollTop > 460) {
                    that.btnFlag = true
                } else {
                    that.btnFlag = false
                }
            },
            // 加入购物车的点击事件
            addToCar(){
                // console.log("addcar")
                // 获取购物车需要的信息
                const product = {}
                product.img = this.imgs[0]
                product.title = this.basicInfo.title
                product.price = this.basicInfo.price
                product.gid = this.iid
                product.count = 1
                // 将商品信息添加到购物车
                this.$store.commit("addCar", product)
            },
        }
    }
</script>

<style scoped>
    .detail {
        padding-top: 45px;
        width: 100%;
        background-color: #eee;

        position: relative;
        z-index: 100;
    }

    .top-bar {
        position: fixed;
        background-color: #fff;
        top: 0;
        left: 0;
        right: 0;
        z-index: 101;
    }

    .dc-left {
        height: 44px;
        line-height: 44px;
        font-size: 25px;
        padding: 0 5px 0 15px;
    }

    .imgswiper {
        height: 300px;
        overflow: hidden;
    }

    .info {
        /* padding: 0 9px; */
        padding: 0 7px;

    }

    .message {
        width: 100%;
        height: 30px;
        margin: 10px;
        text-align: center;

    }
</style>