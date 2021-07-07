<template>
    <div class="goods-list">
        <goods-list-item v-for="(item, index) in goods" :key="index" :goodsItem="item"></goods-list-item>
        <!-- 凑数的。。。。 -->
        <goods-list-item v-for="(item, index) in goods" :key="index+5" :goodsItem="item"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
    name:"GoodsList",
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
/* 设置商品栏的样式 */
.goods-list{
    background-color: #eee;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 2px;
}
</style>