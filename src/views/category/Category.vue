<template>
    <div class="category">
        <nav-bar class="home-nav">
            <template v-slot:center>
                <h1>分类</h1>
            </template>
        </nav-bar>
        <side-nav-bar :title="['女装', '男装']" @sideActive="sideActive" class="sidenav"></side-nav-bar>
        <category-info :category="category[activeType].list"></category-info>
    </div>

</template>

<script>
    // @ is an alias to /src
    import NavBar from 'components/content/navbar/NavBar.vue'
    import SideNavBar from 'components/content/sidenav/SideNavBar.vue'
    import CategoryInfo from './categoryComps/CategoryInfo.vue'

    export default {
        name: 'Category',
        components: {
            NavBar,
            SideNavBar,
            CategoryInfo,
        },
        data() {
            return {
                category: {
                    'female': {
                        list: [
                            { title: "上衣", img: require("assets/img/goods/g1.webp") },
                            { title: "上衣", img: require("assets/img/goods/g1.webp") }
                        ]
                    },
                    'male': {
                        list: [
                            { title: "上衣", img: require("assets/img/goods/g2.webp") },
                            { title: "上衣", img: require("assets/img/goods/g2.webp") },
                        ]
                    }
                },
                activeIndex: 0,
                activeType:'female'
            }
        },
        mounted() {

        },
        methods: {
            sideActive(index) {
                this.activeIndex = index
                // console.log(index)
                switch (index) {
                    case 0:
                        this.activeType = 'female'
                        break;
                    case 1:
                        this.activeType = 'male'
                        break;
                    default:
                        break;
                }
            },
        }
    }
</script>

<style scoped>
    .category {
        padding-top: 44px;
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
    .sidenav{
        position: fixed;
        left: 0;
        top: 44px;
    }
</style>