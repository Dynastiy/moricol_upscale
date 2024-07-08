import Home from '@/modules/App/Ecommerce/Index.vue'

const routes = [
  {
    path: '/ecommerce/index',
    name: 'ecommerce-home',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Ecommerce - Home',
      name: 'Ecommerce',
      label: 'Dashboard',
      icon: '',
      adminUserType: 'ecommerce',
      parent: 'ecommerce-home'
    }
  },
  {
    path: '/ecommerce/categories',
    name: 'ecommerce-categories',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Ecommerce - Categories',
      name: 'Categories',
      label: 'Categories',
      icon: '',
      adminUserType: 'ecommerce',
      parent: 'categories'
    }
  },
  {
    path: '/ecommerce/products',
    name: 'ecommerce-products',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Ecommerce - products',
      name: 'products',
      label: 'products',
      icon: '',
      adminUserType: 'ecommerce',
      parent: 'products'
    }
  },
  {
    path: '/ecommerce/customers',
    name: 'ecommerce-customers',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Ecommerce - customers',
      name: 'customers',
      label: 'customers',
      icon: '',
      adminUserType: 'ecommerce',
      parent: 'customers'
    }
  },
  {
    path: '/ecommerce/payments',
    name: 'ecommerce-payments',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Ecommerce - payments',
      name: 'payments',
      label: 'payments',
      icon: '',
      adminUserType: 'ecommerce',
      parent: 'payments'
    }
  },
  {
    path: '/ecommerce/coupons',
    name: 'ecommerce-coupons',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Ecommerce - coupons',
      name: 'coupons',
      label: 'coupons',
      icon: '',
      adminUserType: 'ecommerce',
      parent: 'coupons'
    }
  },
  {
    path: '/ecommerce/promotion',
    name: 'ecommerce-promotion',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Ecommerce - promotion',
      name: 'promotion',
      label: 'promotion',
      icon: '',
      adminUserType: 'ecommerce',
      parent: 'promotion'
    }
  },
  {
    path: '/ecommerce/order',
    name: 'ecommerce-order',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Ecommerce - order',
      name: 'order',
      label: 'order',
      icon: '',
      adminUserType: 'ecommerce',
      parent: 'order'
    }
  },
  {
    path: '/ecommerce/report',
    name: 'ecommerce-report',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Ecommerce - report',
      name: 'report',
      label: 'report',
      icon: '',
      adminUserType: 'ecommerce',
      parent: 'report'
    }
  },
  {
    path: '/ecommerce/homepage-settings',
    name: 'ecommerce-homepage-settings',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Ecommerce - homepage-settings',
      name: 'homepage-settings',
      label: 'homepage-settings',
      icon: '',
      adminUserType: 'ecommerce',
      parent: 'homepage-settings'
    }
  },
  {
    path: '/ecommerce/support',
    name: 'ecommerce-support',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Ecommerce - support',
      name: 'support',
      label: 'support',
      icon: '',
      adminUserType: 'ecommerce',
      parent: 'support'
    }
  }
]

export default routes