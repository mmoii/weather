import Vue from 'vue'
import Router from 'vue-router'

// 子路由
import forecastRouter from './forecast'
import monitorRouter from './monitor'
import warningRouter from './warning'
import serviceRouter from './service'
import tornadoRouter from './tornado'
import affairsRouter from './affairs'



Vue.use(Router)

// 登录
const home = () =>
  import ( /* webpackChunkName: 'login' */ 'components/home/home')

const article = () =>
  import ('components/article/article')


const router = new Router({
  routes: [{
    path: '*',
    redirect: '/'
  }, {
    path: '/',
    component: home,
    meta: {
      nologin: true
    },
    name: 'home'
  }, {
    path: '/forecast',
    name: 'forecast',
    component: article,
    children: forecastRouter
  }, {
    path: '/monitor',
    name: 'monitor',
    component: article,
    // children: monitorRouter
  }, {
    path: '/warning',
    name: 'warning',
    component: article,
    children: warningRouter
  }, {
    path: '/service',
    name: 'service',
    component: article,
    children: serviceRouter
  }, {
    path: '/tornado',
    name: 'tornado',
    component: article,
    children: tornadoRouter
  }, {
    path: '/affairs',
    name: 'affairs',
    component: article,
    children: affairsRouter
  }]
})


export default router