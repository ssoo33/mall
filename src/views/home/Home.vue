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

    </div>
</template>

<script>
    // @ is an alias to /src
    import NavBar from 'components/content/navbar/NavBar.vue'
    import Swiper from 'components/content/swiper/Swiper.vue'
    import SwiperItem from 'components/content/swiper/SwiperItem.vue'

    import { getHomeMultidata } from 'network/home.js'

    export default {
        name: 'Home',
        components: {
            NavBar,
            Swiper,
            SwiperItem
        },
        data() {
            return {
                banners: [],
                recommends: []
            }
        },
        created() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommends;
            })
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-high-text);
    }

    .home-nav h1 {
        text-align: center;
        margin: 0;
        font-size: 24px;
        color: var(--color-background);
    }


</style>