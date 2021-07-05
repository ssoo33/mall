import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('views/home/Home.vue')
const Categoty = ()=>import('views/category/Category.vue')
const Car = ()=>import('views/car/Car.vue')
const Profile = ()=>import('views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect:'/home'
    },
    {
        path: '/home',
        component:Home
    },
    {
        path: '/category',
        component:Categoty
    },
    {
        path: '/car',
        component:Car
    },
    {
        path: '/profile',
        component:Profile
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 重复点击相同路由出现的问题的解决办法
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)

}

export default router
