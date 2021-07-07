<template>
    <div class="feature-view">
        <div class="img-wraper" v-for="(item, id) in features" :key="id">
            <img :src="item" alt="">
            <span>本周流行</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'FeatureView',
        props: {
            features: {
                type: Array
            }
        }
    }
</script>

<style scope>
    .feature-view {
        background-color: #eee;

        border-bottom:10px solid #eee;
    }

    .img-wraper {
        width: 95%;
        background-color: #fff;
        border-radius: 10px;
        margin: 0 auto;

    }

    .img-wraper img {
        width: 100%;
        border-radius: 10px 10px 0 0;
    }
    .img-wraper span{
        font-size: 20px;
        font-weight: bold;
        display: block;
        padding: 15px 0 5px 20px;
    }
</style>