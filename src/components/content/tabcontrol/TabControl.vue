<template>
    <div class="tab-control">
        <div v-for="(item, index) in title" :key="index"
         class="tab-control-item" >
            <a href="javascript:;" :class="{active:currentIndex === index}" @click="itemClick(index)">
                <span>{{item}}</span>
            </a>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            // 发送点击序号给home父组件
            this.$emit("tabClick", index)
        }
    }
}
</script>

<style>
.tab-control{
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    font-size: 18px;
    background-color: #fff;
}
.tab-control-item{
    flex: 1;
}
.tab-control-item span{
    padding: 5px;
}

.active{
    color: var(--color-high-text);
    border-bottom: 4px solid var(--color-high-text);
}
</style>