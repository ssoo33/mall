<template>
    <div id="home">
        <nav-bar class="home-nav">
            <template v-slot:center>
                <h1>购物街</h1>
            </template>
        </nav-bar>
{{banners}}
    </div>
</template>

<script>
    // @ is an alias to /src
    import NavBar from 'components/navbar/NavBar.vue'

    import {getHomeMultidata} from 'network/home.js'

    export default {
        name: 'Home',
        components: {
            NavBar
        },
        data(){
            return {
                banners:[],
                recommends:[]
            }
        },
        created(){
            getHomeMultidata().then(res =>{
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommends;
            })
        }
    }
</script>

<style scoped>
.home-nav{
    background-color: var(--color-high-text);
}
.home-nav h1{
    text-align: center;
    margin: 0;
    font-size: 24px;
    color: var(--color-background);
}
</style>
