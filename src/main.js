import Vue from 'vue'
import App from './App.vue'
// 2.引入路由
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import My from './components/My.vue'
import Friend from './components/Friend.vue'
// 3.路由的注册
Vue.use(VueRouter)

Vue.config.productionTip = false

// 配置路由规则
const routes = [
  {path:'/',component:Home},
  {path:'/home',component:Home},
  {path:'/my',component:My},
  {path:'/friend',component:Friend},
]

// 4.路由对象的创建
const router = new VueRouter({routes})

// 5.将路由对象与vue实例进行关联
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
