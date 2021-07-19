<template>
    <div class="ca-item">
        <div class="img">
            <img :src="caitem.img" alt="">
        </div>
        <div class="name">
            {{caitem.title}}
        </div>

    </div>

</template>

<script>
    export default {
        name: 'CatInfoItem',
        props: {
            caitem: {
                type: Object,
                defaule() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .ca-item {
        width: 100px;
        /* height: 140px; */
        text-align: center;
        display: flex;
        flex-direction: column;

    }

    .ca-item .img {
        width: 80px;
        margin: 0 auto;
        flex: 1;
    }

    .img img {
        width: 100%;
    }
</style>