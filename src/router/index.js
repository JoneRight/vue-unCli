/*jshint esversion: 6 */
//0. 我们这种就是模块化开发，需要导入Vue和VueRouter，然后调用Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//1. 去定义路由组件。可以在本文件中定义
//也可以import引入，为了方便模块化开发，我们直接引入
import Foo from '../views/components/Foo.vue'
import Bar from '../views/components/Bar.vue'
import Login from '../views/login/index.vue'
import Layout from '../layout/index.vue'

//2. 定义路由
//每一个路由映射一个组件
//通过Vue.extend() 创建的组件构造器
const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  {
    path: '/foo',
    component: Layout,
    redirect: '/',
    children: [{ path: '/', component: Foo }],
  },
  {
    path: '/bar',
    component: Layout,
    redirect: '/',
    children: [{ path: '/', component: Bar }],
  },

  // {//这样写是大错特错的
  //   path: '/',
  //   component: Layout,
  //   redirect: '/foo',
  //   children: [{ path: '/foo', component: Foo }],
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/bar',
  //   children: [{ path: '/bar', component: Foo }],
  // },
]

//3. 创建 router 实例，通过传递 'routes' 这个配置项进行配置
//可以以传递别的参数

const router = new VueRouter({
  routes,
})

//4. 导出并挂载到  index.js 中
export default router
