import Home from '@/modules/App/HomeCare/Index.vue'

const routes = [
  {
    path: '/homecare/index',
    name: 'homecare-home',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'homecare - Home',
      name: 'homecare',
      label: 'Dashboard',
      icon: '',
      adminUserType: 'homecare',
      parent: 'homecare-home'
    }
  },
  {
    path: '/homecare/patients',
    name: 'homecare-patients',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'homecare - patients',
      name: 'patients',
      label: 'patients',
      icon: '',
      adminUserType: 'homecare',
      parent: 'patients'
    }
  },
  {
    path: '/homecare/homecare-staff',
    name: 'homecare-homecare-staff',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'homecare - staff',
      name: 'homecare-staff',
      label: 'homecare-staff',
      icon: '',
      adminUserType: 'homecare',
      parent: 'homecare-staff'
    }
  },
  {
    path: '/homecare/staff-schedules',
    name: 'homecare-staff-schedules',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'homecare - staff schedules',
      name: 'staff-schedules',
      label: 'staff-schedules',
      icon: '',
      adminUserType: 'homecare',
      parent: 'staff-schedules'
    }
  },
  {
    path: '/homecare/pricing',
    name: 'homecare-pricing',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'homecare - pricing',
      name: 'pricing',
      label: 'pricing',
      icon: '',
      adminUserType: 'homecare',
      parent: 'pricing'
    }
  },
  {
    path: '/homecare/transactions',
    name: 'homecare-transactions',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'homecare - transactions',
      name: 'transactions',
      label: 'transactions',
      icon: '',
      adminUserType: 'homecare',
      parent: 'transactions'
    }
  },
  {
    path: '/homecare/homecare-category',
    name: 'homecare-homecare-category',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'homecare - homecare category',
      name: 'homecare-category',
      label: 'homecare-category',
      icon: '',
      adminUserType: 'homecare',
      parent: 'homecare-category'
    }
  },
  {
    path: '/homecare/blog',
    name: 'homecare-blog',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'homecare - blog',
      name: 'blog',
      label: 'blog',
      icon: '',
      adminUserType: 'homecare',
      parent: 'blog'
    }
  }
]


export default routes