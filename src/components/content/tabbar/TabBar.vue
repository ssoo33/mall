<template>
  <div id="tab-bar">
       <slot></slot>
    </div>
</template>

<script>
// import TabBarItem from './TabBarItem.vue'
export default {
    name:'TabBar',
    components:{
        
    }
}
</script>

<style scoped>

/* tabbar的样式（定位、高度、item的排列） */
#tab-bar{
    display: flex;
    background-color: #f6f6f6;
    
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.1);
}


</style>