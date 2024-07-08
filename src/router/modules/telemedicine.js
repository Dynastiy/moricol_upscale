import Home from '@/modules/App/Telemedicine/Index.vue'

const routes = [
  {
    path: '/telemedicine/index',
    name: 'telemedicine-home',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'telemedicine - home',
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
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'telemedicine - staff',
      name: 'telemedicine-staff',
      label: 'telemedicine-staff',
      icon: '',
      adminUserType: 'telemedicine',
      parent: 'telemedicine-staff'
    }
  },
  {
    path: '/telemedicine/staff-schedules',
    name: 'telemedicine-staff-schedules',
    component: Home,
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
    component: Home,
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
    component: Home,
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
    component: Home,
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
  }
]

export default routes