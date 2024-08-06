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
    component: () => import('@/modules/App/Loan/Transactions.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Loan - Transactions',
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
    component: () => import('@/modules/App/Loan/Category.vue'),
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
  },
  {
    path: '/loan/loan-category/create',
    name: 'create-loan-category',
    component: () => import('@/modules/App/Loan/uuid/CreateCategory.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Loan - Create Category',
      name: 'loan-category',
      label: 'loan-category',
      icon: '',
      adminUserType: null,
      isSubPage: true,
      parent: 'loan-category'
    }
  },
  {
    path: '/loan/loan-category/edit',
    name: 'edit-loan-category',
    component: () => import('@/modules/App/Loan/uuid/CreateCategory.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Loan - Edit Category',
      name: 'loan-category',
      label: 'loan-category',
      icon: '',
      adminUserType: null,
      isSubPage: true,
      parent: 'loan-category'
    }
  },

  {
    path: '/loan/loan-requests',
    name: 'loan-requests',
    component: () => import('@/modules/App/Loan/LoanRequests.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Loan - Requests',
      name: 'loan-home',
      label: 'loan-home',
      icon: '',
      adminUserType: null,
      isSubPage: true,
      parent: 'loan-home'
    }
  },

   {
    path: '/loan/loan-request/ID',
    name: 'loan-request-details',
    component: () => import('@/modules/App/Loan/uuid/LoanDetails.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Loan - Request',
      name: 'loan-home',
      label: 'loan-home',
      icon: '',
      adminUserType: null,
      isSubPage: true,
      parent: 'loan-home'
    }
  },

  
  
]


export default routes