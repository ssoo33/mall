<template>
    <div id="content">
        <car-item></car-item>
        <car-item></car-item>
        <car-item></car-item>
        <car-item></car-item>
    </div>
</template>

<script>
    import CarItem from './CarItem.vue'
    export default {
        name: 'CarContent',
        components: { CarItem },
    }
</script>

<style scoped>
#content{
    padding: 8px 8px;
}
</style>