<template>
    <div class="ca-info">
        <cat-info-item v-for="(item, index) in category" :key="index" :caitem="item"></cat-info-item>
    </div>
</template>

<script>
    import CatInfoItem from './CatInfoItem.vue'
    export default {
        components: { CatInfoItem },
        name: 'CategotyInfo',
        props: {
            category: {
                type: Array,
                defaule() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.ca-info{
    margin: 0 0 0 100px;
    padding: 15px;
    display: flex;
}
</style>