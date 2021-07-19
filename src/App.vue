<template>
  <div id="app">
      <!-- 首页内容不销毁 -->
    <keep-alive>
        <router-view></router-view>  
    </keep-alive>

<!-- tabbar -->
   
   <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
import MainTabBar from 'components/content/tabbar/MainTabBar.vue'

export default {
    components:{
        MainTabBar,
        
    }
}
</script>

<style lang="css">
/* 用别名来写的路径 */
@import url('assets/css/base.css');
@import url('assets/css/myfont/css/all.css');

</style>


