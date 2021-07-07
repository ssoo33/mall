<template>
    <div class="recommend">
        <div class="rec-item" v-for="(item, id) in recommends" :key="id">
            <a :href="item.link">
                <!-- <img :src="item.img" alt=""> -->
                <img :src="item.img" alt="">
                <span>{{item.title}}</span>
            </a>       
        </div>

    </div>
</template>

<script>
    export default {
        name: "HomeReocmmend",
        props: {
            recommends: {
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .recommend {
        display: flex;
        width: 100%;
        text-align: center;
        padding: 15px 5px 25px;
        border-bottom: 8px solid #eee;
        font-size: 14px;
    }
    .rec-item{
        flex: 1;
    }
    
    .rec-item img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }    
    .rec-item span{
        display: block;
    }
</style>