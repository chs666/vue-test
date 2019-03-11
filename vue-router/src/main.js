import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes:routes, //将设置的静态路由表放置到VueRouter路由实例对象中
  mode:'hash',
  //1.mode设置成history(浏览器历史记录)，那么地址就可以请求http://localhost:8080/user
  // 2.mode设置hash(锚点),那么地址为http://localhost:8080/#/user
  scrollBehavior(to,from,savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }
  }

})
// 路由生命周期中的钩子函数
router.beforeEach((to,from,next)=>{
  console.log('global beforeEach');
  next()
})
new Vue({
  el: '#app',
  router, // router:router
  render: h => h(App)
})
