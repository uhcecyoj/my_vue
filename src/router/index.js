import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CountryDevice from '@/components/CountryDevice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CountryDevice',
      name: 'CountryDevice',
      component: CountryDevice
    }
  ]
})



