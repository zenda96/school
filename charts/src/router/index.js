import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/map/map'
import Total from '@/components/total/total'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'map',
      component: Map
    },
    {
      path: '/total',
      name: 'total',
      component: Total
    }
  ]
})
