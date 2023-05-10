/*
 * @Author: why 2594258643@qq.com
 * @Date: 2023-05-09 11:26:48
 * @LastEditors: why 2594258643@qq.com
 * @LastEditTime: 2023-05-09 13:32:24
 * @FilePath: \demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookie from 'js-cookie'
import main from "../components/com/main/main.vue";
import test from "../components/test/test.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: main,
    children: [
      {
        path: '/',
        name: 'home',
        title:'首页',
        icon:'el-icon-menu',
        component: () => import(/* webpackChunkName: "about" */ '../components/home.vue'),
      },
      {
        path: 'userPage',
        name: 'userPage',
        title:'用户页面',
        icon:'el-icon-user-solid',
        component: () => import(/* webpackChunkName: "about" */ '../components/user/userPage.vue'),
      },
      {
        path: 'eweq',
        name: 'eweq',
        title:'页面',
        icon:'el-icon-user-solid',
        component: () => import(/* webpackChunkName: "about" */ '../components/eweq.vue'),
      },
      {
        path: '/test1',
        name: 'test',
        title:'测试页面',
        component:test,
        icon:'el-icon-user-solid',
        children: [
          {
            path: '/test1',
            name: 'testPage1',
            title:'测试页面1',
            icon:'el-icon-user-solid',
            component: () => import(/* webpackChunkName: "about" */ '../components/test/test1.vue'),
          },
          {
            path: '/test2',                                        
            name: 'testPage2',
            title:'测试页面2',
            icon:'el-icon-user-solid',
            component: () => import(/* webpackChunkName: "about" */ '../components/test/test2.vue'),
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../components/com/login/login.vue')
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
