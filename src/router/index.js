import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    redirect: '/home',
    component: () => import('../views/Main'),
    children: [
      {
        path: '/home',
        component: () => import('../views/Home/Home')
      },
      {
        path: '/user',
        component: () => import('../views/UserManage/UserManage')
      },
      {
        path: '/video',
        component: () => import('../views/VideoManage/VideoManage')
      },
      {
        path: '/page1',
        component: () => import('../views/Other/PageOne')
      },
      {
        path: '/Page2',
        component: () => import('../views/Other/PageTwo')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
