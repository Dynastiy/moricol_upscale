import Home from '@/modules/App/Massage/Index.vue'

const routes = [
  {
    path: '/massage/index',
    name: 'massage-home',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'massage - home',
      name: 'massage',
      label: 'Dashboard',
      icon: '',
      adminUserType: 'massage',
      parent: 'massage-home'
    }
  },
  {
    path: '/massage/massage-staff',
    name: 'massage-massage-staff',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'massage - staff',
      name: 'massage-staff',
      label: 'massage-staff',
      icon: '',
      adminUserType: 'massage',
      parent: 'massage-staff'
    }
  },
  {
    path: '/massage/staff-schedules',
    name: 'massage-staff-schedules',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'massage - staff schedules',
      name: 'staff-schedules',
      label: 'staff-schedules',
      icon: '',
      adminUserType: 'massage',
      parent: 'staff-schedules'
    }
  },
  {
    path: '/massage/staff-transactions',
    name: 'massage-staff-transactions',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'massage - staff transactions',
      name: 'staff-transactions',
      label: 'staff-transactions',
      icon: '',
      adminUserType: 'massage',
      parent: 'staff-transactions'
    }
  },
  {
    path: '/massage/user-transactions',
    name: 'massage-user-transactions',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'massage - user transactions',
      name: 'user-transactions',
      label: 'user-transactions',
      icon: '',
      adminUserType: 'massage',
      parent: 'user-transactions'
    }
  },
  {
    path: '/massage/massage-category',
    name: 'massage-massage-category',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'massage - massage category',
      name: 'massage-category',
      label: 'massage-category',
      icon: '',
      adminUserType: 'massage',
      parent: 'massage-category'
    }
  }
]

export default routes