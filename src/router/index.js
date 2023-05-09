import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookie from 'js-cookie'
import main from "../components/main.vue";

Vue.use(VueRouter)

const routes = [
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
