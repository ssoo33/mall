<template>
    <div class="detail-info">
        <div v-for="(item, index) in imgs" :key="index">
            <img :src="item" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailInfo',
    props:{
        imgs:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.detail-info{
    width: 100%;
}
.detail-info img{
    width: 100%;
}
</style>