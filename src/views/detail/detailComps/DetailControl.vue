<template>
    <div class="detail-control">
        <ul>
            <li v-for="(item, index) in title"
             :key="index"
             @click="activeIndex(index)"
             :class="{active:index === currentIndex}">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'DetailControl',
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        },
        
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        activeIndex(index){
            this.currentIndex = index
            // console.log(index)
            // 将点击的序号发送给父detail
            this.$emit("activeIndex",index)
        }
    }
}
</script>

<style scoped>
    .detail-control ul{
        display: flex;
        list-style: none;
        text-align: center;
    }

    .detail-control ul li{
        flex: 1;
    }
    .active{
        color: var(--color-high-text);
    }
</style>