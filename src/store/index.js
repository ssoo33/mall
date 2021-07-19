import Vue from 'vue'
import Vuex from 'vuex'

// 安装vuex
Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
    state: {
        carList:[]
    },
    mutations: {
        addCar (state, payload) {
            // 判断这个商品是否之前添加过
            let oldP = null
            for (let item of state.carList) {
                if (item.gid === payload.gid) {
                    oldP = item
                } 
            }

            if (oldP) {
                oldP.count +=1
            } else {
                state.carList.push(payload)
            }
            
        }
    }
})

// 挂载到vue实例上
export default store