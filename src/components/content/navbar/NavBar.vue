<template>
<!-- 导航栏分为三部分--左中右
    并不是每个页面都需要有三部分，用哪个就往哪个插槽里面添加模板 -->
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* 导航栏样式 */
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    /* 导航栏下部添加阴影 */
    box-shadow: 0 1px 1px 0 rgba(100, 100, 100, 0.1);
}
.nav-bar .left{
    width: 60px;
    /* flex-grow: 1; */
}
.nav-bar .center{
    /* flex-grow: 4; */
    flex-grow: 1;
}
.nav-bar .right{
    width: 60px;
    /* flex-grow: 1; */
}
</style>