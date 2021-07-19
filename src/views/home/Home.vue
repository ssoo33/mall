<template>
    <div id="home">
        <nav-bar class="home-nav">
            <template v-slot:center>
                <h1>购物街</h1>
            </template>
        </nav-bar>

        <!-- swiper -->
        <swiper>
            <swiper-item v-for="(item, id) in banners" :key="id">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>

        <home-recommend :recommends="recommends"></home-recommend>

        <feature-view :features="features"></feature-view>

        <tab-control :title="['流行', '新款', '精选']" @tabClick="tabClick" class="tab-control"></tab-control>

        <goods-list :goods="goods[currentType].list"></goods-list>

        <!-- 组件不能直接监听点击，要加.native属性 -->
        <back-top class="home-top" @click.native="backClick" v-if="btnFlag"></back-top>

        <!-- <ul>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                    <li>列表</li>
                </ul>  -->


    </div>
</template>

<script>
    // @ is an alias to /src
    import NavBar from 'components/content/navbar/NavBar.vue'
    import Swiper from 'components/content/swiper/Swiper.vue'
    import SwiperItem from 'components/content/swiper/SwiperItem.vue'
    import TabControl from 'components/content/tabcontrol/TabControl.vue'
    import GoodsList from 'components/content/goods/GoodsList.vue'
    import BackTop from 'components/content/backtop/BackTop.vue'

    import HomeRecommend from './homeComps/HomeRecommend.vue'
    import FeatureView from './homeComps/FeatureView.vue'

    import { getHomeMultidata } from 'network/home.js'

    export default {
        name: 'Home',
        components: {
            NavBar,
            Swiper,
            SwiperItem,
            HomeRecommend,
            FeatureView,
            TabControl,
            GoodsList,
            BackTop,

        },
        data() {
            return {
                banners: [],
                recommends: [
                    { id: 1, title: "女装", img: require("assets/img/recommends/r1.webp"), link: "" },
                    { id: 2, title: "男装", img: require("assets/img/recommends/r2.webp"), link: "" },
                    { id: 3, title: "鞋", img: require("assets/img/recommends/r3.webp"), link: "" },
                    { id: 4, title: "童装", img: require("assets/img/recommends/r4.webp"), link: "" },
                ],
                features: [require("assets/img/featureview/feature.jpg"), ],
                goods: {
                    'pop': {
                        page: 0,
                        list: [{ title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g1.webp"), link: "", price: 50, iid: 1, dimgs: [require("assets/img/detail/d1.webp"), require("assets/img/detail/d2.webp"), require("assets/img/detail/d3.webp")] },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g2.webp"), link: "", price: 50, iid: 2, dimgs: [require("assets/img/detail/d1.webp"), require("assets/img/detail/d2.webp"), require("assets/img/detail/d3.webp")] },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g3.webp"), link: "", price: 50, iid: 3, dimgs: [require("assets/img/detail/d1.webp"), require("assets/img/detail/d2.webp"), require("assets/img/detail/d3.webp")] },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g1.webp"), link: "", price: 50, iid: 4, dimgs: [require("assets/img/detail/d1.webp"), require("assets/img/detail/d2.webp"), require("assets/img/detail/d3.webp")] },
                        ]
                    },
                    'new': {
                        page: 0,
                        list: [{ title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g2.webp"), link: "", price: 50, iid: 5 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g2.webp"), link: "", price: 50, iid: 6 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g2.webp"), link: "", price: 50, iid: 7 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g2.webp"), link: "", price: 50, iid: 8 },
                        ]
                    },
                    'sell': {
                        page: 0,
                        list: [{ title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g3.webp"), link: "", price: 50, iid: 9 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g3.webp"), link: "", price: 50, iid: 10 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g3.webp"), link: "", price: 50, iid: 11 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g3.webp"), link: "", price: 50, iid: 12 },
                        ]
                    },
                },
                // 点击的类型
                currentType: 'pop',
                // 是否显示backTop
                btnFlag: false,
                // 记录离开Home时，页面滚动的位置
                scrollY: 0,
            }

        },
        created() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
            })
        },
        mounted() {
            window.addEventListener('scroll', this.scrollToTop)

        },
        destoryed() {
            window.removeEventListener('scroll', this.scrollToTop)
        },
        activated() {
            // 再进来时，回到回来位置
            if (document.body.scrollTop) {
                document.body.scrollTop = this.scrollY
            } else {
                document.documentElement.scrollTop = this.scrollY
            }
            // console.log("bb" + this.scrollY)
            // 监听滚动，以获取滚动的距离
            window.addEventListener('scroll', this.roll)

        },
        deactivated() {

            // console.log("L" + this.scrollY)
            window.removeEventListener('scroll', this.roll)
        },
        methods: {
            // 用于接受tabcontrol发送过来的点击序号
            tabClick(index) {
                switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break;
                case 1:
                    this.currentType = 'new'
                    break;
                case 2:
                    this.currentType = 'sell'
                    break;
                }
            },
            backClick() {
                console.log("clikkf")
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
            // 获取滚动的距离
            roll() {
                this.scrollY = document.body.scrollTop || document.documentElement.scrollTop
            },
        }
    }
</script>

<style scoped>
    #home {
        padding-top: 44px;
        /* overflow: hidden; */
    }

    .home-nav {
        background-color: var(--color-high-text);
        /* 固定顶部导航 */
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 99;

    }

    .home-nav h1 {
        text-align: center;
        margin: 0;
        font-size: 24px;
        color: var(--color-background);
    }

    /* tabcontrol移动到顶部，停滞不动 */
    .tab-control {
        position: sticky;
        top: 44px;
    }
</style>