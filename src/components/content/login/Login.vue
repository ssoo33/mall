<template>
    <div class="login">
        <form action="#" method="" class="login-box">
            <h1>Login</h1>
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script>

    export default {
        name: 'Login',
        components: {

        }
    }
</script>

<style scoped>
   .login-box{
       width: 300px;
       padding: 20px;
       position: absolute;
       top: 30%;
       left: 50%;
       transform: translate(-50%, -50%);
        text-align: center;
   }
   h1{
       color: var(--color-tint);
       text-transform: uppercase;
       font-weight: 400;
   }
   .login-box input[type="text"], .login-box input[type="password"]{
       border: 0;
       background: none;
       display: block;
       margin: 10px auto;
       text-align: center;
       border: 2px solid #3498db;
       padding: 10px 7px;
       width: 200px;
       outline: none;
       /* color: white; */
       border-radius: 24px;
       transition: 0.25s;
   }
   .login-box input[type="text"]:focus, .login-box input[type="password"]:focus{
       width: 230px;
        border-color: var(--color-high-text);
   }
   .login-box input[type="submit"]{
       border: 0;
       background: none;
       display: block;
       margin: 10px auto;
       text-align: center;
       border: 2px solid var(--color-high-text);
       padding: 10px 40px;
       outline: none;
       /* color: white; */
       border-radius: 24px;
       transition: 0.25s;
       /* cursor: pointer; */
   }
   .login-box input[type="submit"]:hover{
       background: var(--color-high-text);
   }
</style>