<template>
    <div class="tab-bar-item" @click="itemClick">

        <!--先判断哪个item处于活跃状态， 
            获取之后，改变其文字颜色 -->
        <div :style="activeStyle">
            <slot name="item-icon"></slot>
            <slot name="item-text"></slot>
        </div>
 
    </div>
</template>

<script>
    export default {
        props:{
            path:String,
            activeColor:{
                type:String,
                default:"brown"
            }
        },
        data() {
            return {
                // isActive: true
            }
        },
        computed:{
            isActive(){
                // 判断当前活跃的path是否和item的path相同
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                // 封装颜色
                return this.isActive?{color:this.activeColor}:{}
            }
        },
        methods:{
            itemClick(){
                // console.log("点了")
                // 点击进入相应页面
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
    }

    .tab-bar-item i {
        display: block;
        margin: 4px 0;
    }

    /* .active {
        color:brown;
    } */
</style>