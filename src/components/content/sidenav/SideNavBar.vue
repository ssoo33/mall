<template>
    <div class="side-bar">
        <div class="bar-item" v-for="(item, index) in title" 
        :key="index" 
        :class="{activeindex:index === currentIndex}"
        @click="sideClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'SideNavBar',
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        sideClick(index){
            this.currentIndex = index

            this.$emit('sideActive', index)
        }
    }
}
</script>

<style scoped>
.side-bar{
    width: 100px;
    height: calc(100vh - 89px);
    background-color: #eee;
}
.bar-item{
    font-size: 16px;
    text-align: center;
}
.bar-item span{
    display: block;
    width: 50px;
    height: 40px;
    line-height: 40px;
    border-bottom: .5px solid rgb(214, 203, 203);
    margin: 0 auto;
}
.activeindex{
    background-color: #fff;
    border-left: 4px solid var(--color-high-text);
}
</style>