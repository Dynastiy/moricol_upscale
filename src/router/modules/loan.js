import Home from '@/modules/App/Loan/Index.vue'

const routes = [
  {
    path: '/loan/index',
    name: 'loan-home',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Loan - Home',
      name: 'loan',
      label: 'Overview',
      icon: '',
      adminUserType: 'loan',
      parent: 'loan-home'
    }
  },
  {
    path: '/loan/transactions',
    name: 'loan-transactions',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Loan - transactions',
      name: 'transactions',
      label: 'transactions',
      icon: '',
      adminUserType: 'loan',
      parent: 'transactions'
    }
  },
  {
    path: '/loan/loan-category',
    name: 'loan-loan-category',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Loan - category',
      name: 'loan-category',
      label: 'loan-category',
      icon: '',
      adminUserType: 'loan',
      parent: 'loan-category'
    }
  }
]


export default routes