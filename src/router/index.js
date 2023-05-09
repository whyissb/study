<<<<<<< HEAD
/*
 * @Author: why 2594258643@qq.com
 * @Date: 2023-05-09 09:53:39
 * @LastEditors: why 2594258643@qq.com
 * @LastEditTime: 2023-05-09 10:24:51
 * @FilePath: \demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: why 2594258643@qq.com
 * @Date: 2023-05-09 09:53:39
 * @LastEditors: why 2594258643@qq.com
 * @LastEditTime: 2023-05-09 10:23:19
 * @FilePath: \demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
=======
>>>>>>> 171164e88c2735be367f798728c84444b3e7fee9
import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookie from 'js-cookie'
import main from "../components/main.vue";
<<<<<<< HEAD
import test from "../components/test/test.vue";
=======
>>>>>>> 171164e88c2735be367f798728c84444b3e7fee9

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
  {
    path: '/',
    component: main,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../components/home.vue'),
      },
      {
        path: 'userPage',
        name: 'userPage',
        component: () => import(/* webpackChunkName: "about" */ '../components/userPage.vue'),
      },
      {
        path: '/test1',
        name: 'test',
        component:test,
        children: [
          {
            path: '/test1',
            name: 'testPage1',
            component: () => import(/* webpackChunkName: "about" */ '../components/test/test1.vue'),
          },
          {
            path: '/test2',
            name: 'testPage2',
            component: () => import(/* webpackChunkName: "about" */ '../components/test/test2.vue'),
          }
        ]
=======
  { 
    path: '/',
    component: main,
    children:[
      {
        path: '/',
        name: 'home',
        component:  () => import(/* webpackChunkName: "about" */ '../components/home.vue'),
      },
      {
        path: '/userPage',
        name: 'userPage',
        component:  () => import(/* webpackChunkName: "about" */ '../components/userPage.vue'),
>>>>>>> 171164e88c2735be367f798728c84444b3e7fee9
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // 获取token
  const token = Cookie.get('token')

  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
