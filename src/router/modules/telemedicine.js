import Home from '@/modules/App/Telemedicine/Index.vue'

const routes = [
  {
    path: '/telemedicine/index',
    name: 'telemedicine-home',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Telemedicine - Home',
      name: 'telemedicine',
      label: 'Dashboard',
      icon: '',
      adminUserType: 'telemedicine',
      parent: 'telemedicine-home'
    }
  },
  {
    path: '/telemedicine/telemedicine-staff',
    name: 'telemedicine-telemedicine-staff',
    component: () => import('@/modules/App/Telemedicine/Staff.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Telemedicine - Staff',
      name: 'telemedicine-staff',
      label: 'telemedicine-staff',
      icon: '',
      adminUserType: 'telemedicine',
      parent: 'telemedicine-staff'
    }
  },
  {
    path: '/telemedicine/telemedicine-staff/ID',
    name: 'telemedicine-staff-details',
    component: () => import('@/modules/App/telemedicine/uuid/ViewStaff.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Telemedicine - staff Details',
      name: 'telemedicine-staff',
      label: 'telemedicine-staff',
      icon: '',
      adminUserType: null,
      parent: 'telemedicine-staff',
      isSubPage: true
    }
  },
  {
    path: '/telemedicine/staff-schedules',
    name: 'telemedicine-staff-schedules',
    component: () => import('@/modules/App/Telemedicine/Schedules.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'telemedicine - staff schedules',
      name: 'staff-schedules',
      label: 'staff-schedules',
      icon: '',
      adminUserType: 'telemedicine',
      parent: 'staff-schedules'
    }
  },
  {
    path: '/telemedicine/staff-transactions',
    name: 'telemedicine-staff-transactions',
    component: () => import('@/modules/App/Telemedicine/StaffTransactions.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'telemedicine - staff transactions',
      name: 'staff-transactions',
      label: 'staff-transactions',
      icon: '',
      adminUserType: 'telemedicine',
      parent: 'staff-transactions'
    }
  },
  {
    path: '/telemedicine/user-transactions',
    name: 'telemedicine-user-transactions',
    component: () => import('@/modules/App/Telemedicine/UserTransactions.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'telemedicine - user transactions',
      name: 'user-transactions',
      label: 'user-transactions',
      icon: '',
      adminUserType: 'telemedicine',
      parent: 'user-transactions'
    }
  },
  {
    path: '/telemedicine/telemedicine-category',
    name: 'telemedicine-telemedicine-category',
    component: () => import('@/modules/App/Telemedicine/Category.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'telemedicine - telemedicine category',
      name: 'telemedicine-category',
      label: 'telemedicine-category',
      icon: '',
      adminUserType: 'telemedicine',
      parent: 'telemedicine-category'
    }
  },
  {
    path: '/telemedicine/telemedicine-category/create',
    name: 'create-telemedicine-category',
    component: () => import('@/modules/App/Telemedicine/uuid/createCategory.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'Telemedicine - Create Category',
      name: 'Create Category',
      label: 'telemedicine-category',
      icon: '',
      adminUserType: null,
      parent: 'telemedicine-category',
      isSubPage: true
    }
  }
]

export default routes