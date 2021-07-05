<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="#ff5777">
            <!-- TabBarItem里面的具名插槽 -->
            <template v-slot:item-icon>
                <i class="fas fa-home"></i>
            </template>
            <template v-slot:item-text>
                <div>首页</div>
            </template>
        </tab-bar-item>

        <tab-bar-item path="/category" activeColor="#ff5777">
            <template v-slot:item-icon>
                <i class="fas fa-table"></i>
            </template>
            <template v-slot:item-text>
                <div>分类</div>
            </template>
        </tab-bar-item>

        <tab-bar-item path="/car" activeColor="#ff5777">
            <template v-slot:item-icon>
                <i class="fas fa-shopping-basket"></i>
            </template>
            <template v-slot:item-text>
                <div>购物车</div>
            </template>
        </tab-bar-item>

        <tab-bar-item path="/profile" activeColor="#ff5777">
            <template v-slot:item-icon>
                <i class="fas fa-address-book"></i>
            </template>
            <template v-slot:item-text>
                <div>我的</div>
            </template>
        </tab-bar-item>
    </tab-bar>

</template>

<script>
    import TabBar from 'components/tabbar/TabBar.vue'
    import TabBarItem from 'components/tabbar/TabBarItem.vue'

    export default {
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style lang="css">


</style>