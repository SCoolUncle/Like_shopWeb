import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Detail = () => import('../views/Detail.vue')
const ListPage = () => import('../views/ListPage.vue')
const Login = () => import('../views/Login.vue')
const Personal = () => import('../views/Personal')
const Order = () => import('../views/Order')
const SerachPage = () => import('../views/SerachPage')

Vue.use(VueRouter)

// 解决当前路由重复点击问题
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};


const routes = [
  {path:'/',redirect: '/home' },
  {path:'/home',component:Home},  
  {path:'/detail/:id',component:Detail,props: true},
  {path:'/listpage/:kindname',component:ListPage,props: true},
  {path: '/login', component: Login},
  {path: '/personal', component: Personal},
  {path: '/order', component:Order },
  {path:'/serachpage/:keyword',component:SerachPage,props: true}
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  //滚动事件处理
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
