import Login from '@/modules/Auth/Login.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      layout: 'auth',
      requiresAuth: false,
      pageTitle: 'Login'
    }
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      layout: 'auth',
      requiresAuth: false,
      pageTitle: 'Login'
    }
  }
]

export default routes