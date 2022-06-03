import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecuritiesAccountView from '../views/SecuritiesAccountView.vue'
import CorporateAccountView from '../views/CorporateAccountView.vue'
import AssetAccountView from '../views/AssetAccountView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/CorporateAccount',
    name: 'CorporateAccount',
    component: CorporateAccountView
  },
  {
    path: '/SecuritiesAccount',
    name: 'SecuritiesAccount',
    component: SecuritiesAccountView
  }
  ,
  {
    path: '/AssetAccount',
    name: 'AssetAccount',
    component: AssetAccountView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
