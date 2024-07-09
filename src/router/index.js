import { createRouter, createWebHistory } from 'vue-router'

// import Auth from "./modules/auth"
// import Dashboard from "./modules/dashboard"

// Home Route 
import Home from '@/modules/App/Index.vue'

import ecommerce from './modules/ecommerce.js'
import homecare from './modules/home_care.js'
import loan from './modules/loan.js'
import massage from './modules/massage.js'
import recruitment from './modules/recruitment.js'
import telemedicine from './modules/telemedicine.js'
import training from './modules/training.js'

import auth from './auth.js'

const baseRoutes = [
  {
    path: '/dashboard',
    component: Home,
    name: 'Admin-Home',
    meta: {
      layout: 'home',
      requiresAuth: false,
      pageTitle: 'Moricol - Home',
      name: 'morical-home'
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoutes.concat(
    ecommerce,
    homecare,
    loan,
    massage,
    recruitment,
    telemedicine,
    training,
    auth
  )
})

export default router
