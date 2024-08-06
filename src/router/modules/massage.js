// import Home from '@/modules/App/Massage/Index.vue'

const routes = [
  {
    path: '/massage/index',
    name: 'massage-home',
    component: () => import('@/modules/App/Massage/Index.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Massage - home',
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
    component: () => import('@/modules/App/Massage/Staff.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Massage - staff',
      name: 'massage-staff',
      label: 'massage-staff',
      icon: '',
      adminUserType: 'massage',
      parent: 'massage-staff'
    }
  },
  {
    path: '/massage/massage-staff/ID',
    name: 'massage-staff-details',
    component: () => import('@/modules/App/Massage/uuid/MassageStaffDetails.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Massage - staff',
      name: 'massage-staff',
      label: 'massage-staff',
      icon: '',
      adminUserType: null,
      parent: 'massage-staff',
      isSubPage: true
    }
  },
  {
    path: '/massage/staff-schedules',
    name: 'massage-staff-schedules',
    component: () => import('@/modules/App/Massage/Schedules.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Massage - staff schedules',
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
    component: () => import('@/modules/App/Massage/StaffTransactions.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Massage - staff transactions',
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
    component: () => import('@/modules/App/Massage/UserTransactions.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Massage - user transactions',
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
    component: () => import('@/modules/App/Massage/Category.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Massage - Categories',
      name: 'Categories',
      label: 'massage-category',
      icon: '',
      adminUserType: 'massage',
      parent: 'massage-category'
    }
  },
  {
    path: '/massage/massage-category/create',
    name: 'create-massage-category',
    component: () => import('@/modules/App/Massage/uuid/createCategory.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Massage - Create Category',
      name: 'Create Category',
      label: 'massage-category',
      icon: '',
      adminUserType: null,
      parent: 'massage-category',
      isSubPage: true
    }
  }
]

export default routes