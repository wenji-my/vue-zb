import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Currency from '@/components/currency/currency'
import Lever from '@/components/lever/lever'
import Finance from '@/components/finance/finance'
import Mine from '@/components/mine/mine'
import Custom from '@/components/custom/custom'
import HomeA from '@/components/home/HomeA'
import HomeB from '@/components/home/HomeB'
import HomeC from '@/components/home/HomeC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      redirect: '/home/homeA',
      component: Home,
      children: [
        {
          path: 'homeA',
          name: 'HomeA',
          component: HomeA
        },
        {
          path: 'homeB',
          name: 'HomeB',
          component: HomeB
        },
        {
          path: 'homeC',
          name: 'HomeC',
          component: HomeC
        }
      ]
    },
    {
      path: '/currency',
      component: Currency
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/finance',
      component: Finance
    },
    {
      path: '/lever',
      component: Lever
    }
  ]
})
