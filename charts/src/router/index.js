import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/map/map'
import Total from '@/components/total/total'
import College from '@/components/college/college'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/total',
      name: 'total',
      component: Total
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/college',
      name: 'college',
      component: College
    }
  ]
})
