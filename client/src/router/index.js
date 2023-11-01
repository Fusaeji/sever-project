import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WaterIndex from '@/components/Water/Index'
import WaterCreate from '@/components/Water/CreateWater'
import WaterEdit from '@/components/Water/EditWater'
import WaterShow from '@/components/Water/ShowWater'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/waters',
      name: 'waters',
      component: WaterIndex
    },
    {
      path: '/water/create',
      name: '/water-create',
      component: WaterCreate
    },
    {
      path: '/water/edit/:waterId',
      name: '/water-edit',
      component: WaterEdit
    },
    {
      path: '/water/:waterId',
      name: '/water',
      component: WaterShow
    }
  ]
})
