import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Coronavores from '@/components/Coronavores.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'helloWorld',
    component: HelloWorld
  },
  {
    path: '/coronavores',
    name: 'Coronavores',
    component: Coronavores
  }
]

export default new Router({
  mode: 'history',
  routes
})
