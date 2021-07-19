<template>
    <div class="back-top">
        <div class="top">
            <span class="fas fa-arrow-alt-circle-up"></span>
        </div>
    </div>
</template>

<script>
export default {
    name:'BackTop',
    
}
</script>

<style scoped>
.top{
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 58px;
    right: 10px;
}
.top span{
    color: rgb(184, 33, 214);
    font-size: 40px;
    display: block;
}
</style>