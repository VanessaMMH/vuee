import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ErpPlaPrincipal from '../views/erp-pla-principal/erp-pla-principal.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/planillas',
    name: 'Home',
    component: ErpPlaPrincipal
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
