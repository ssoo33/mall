<template>
    <div id="car">
        <nav-bar class="navbar">
            <template v-slot:center>
                <h1 class="title">购物车<span>(66)</span></h1>
            </template>
            <template v-slot:right>
                <span class="manner">管理</span>
            </template>
        </nav-bar>

        <div class="car-content">
            <car-content></car-content>

            <div class="car-recommend">你可能还喜欢</div>
        </div>
        <total-bar class="totalbar"></total-bar>


    </div>
</template>

<script>
    import NavBar from 'components/content/navbar/NavBar.vue'
    import CarContent from './carComps/CarContent.vue'
    import TotalBar from './carComps/TotalBar.vue'

    export default {
        name: 'Home',
        components: {
            NavBar,
            CarContent,
            TotalBar
        }

    }
</script>

<style scoped>
    #car {
        background-color: #eee;
        padding-top: 44px;
    }

    .navbar {
        background-color: var(--color-high-text);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 99;
    }

    .title {
        font-size: 20px;
        color: aliceblue;
        height: 44px;
        line-height: 44px;
        margin: 0 5px;
        text-align: center;
    }

    .title span {
        font-size: 18px;
    }

    .manner {
        color: aliceblue;
    }

    .car-recommend {
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    .car-content {
        margin-bottom: 110px;
    }

    .totalbar {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 49px;
    }
</style>