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
            GoodsList
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
                        list: [{ title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods///g1.webp"), link: "", price: 50 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods///g1.webp"), link: "", price: 50 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods///g1.webp"), link: "", price: 50 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods///g1.webp"), link: "", price: 50 },
                        ]
                    },
                    'new': {
                        page: 0,
                        list: [{ title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods//g2.webp"), link: "", price: 50 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods//g2.webp"), link: "", price: 50 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods//g2.webp"), link: "", price: 50 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods//g2.webp"), link: "", price: 50 },
                        ]
                    },
                    'sell': {
                        page: 0,
                        list: [{ title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g3.webp"), link: "", price: 50 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g3.webp"), link: "", price: 50 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g3.webp"), link: "", price: 50 },
                            { title: "洋气镂空钩花百搭开衫短袖针织衫上衣", img: require("assets/img/goods/g3.webp"), link: "", price: 50 },
                        ]
                    },
                    scroll: null,
                },
                // 点击的类型
                currentType: 'pop'
            }

        },
        created() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
            })
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
            }
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