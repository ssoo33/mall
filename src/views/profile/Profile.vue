<template>
    <div class="profile">
        <nav-bar class="navbar">
            <template v-slot:left>
                <div class="fas fa-hand-point-left left"></div>
            </template>
            <template v-slot:center>
                <h1>账号登录</h1>
            </template>
        </nav-bar>

        <login></login>
    </div>
</template>

<script>
    import NavBar from 'components/content/navbar/NavBar.vue'
    import Login from 'components/content/login/Login.vue'

    export default {
        name: 'Home',
        components: {
            NavBar,
            Login,
        }
    }
</script>

<style scoped>
    .navbar .left {
        text-align: center;
        line-height: 44px;
    }

    .navbar h1 {
        text-align: center;
        margin: 0;
        font-size: 20px;
    }
</style>