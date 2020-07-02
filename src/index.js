//这是工程的入口文件
/* eslint-disable */
import Vue from 'vue'
import App from './app.vue'

//引入router
import router from './router'
import './assets/styles/test.css'
import './assets/styles/test-stylus.styl'

const Root = document.createElement('div')
document.body.appendChild(Root)

//mount 就是将我们的App挂载到root这样一个根节点中去

new Vue({
  router,
  render: h => h(App),
}).$mount(Root)
