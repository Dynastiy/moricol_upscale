import Home from '@/modules/App/Recruitment/Index.vue'

const routes = [
  {
    path: '/recruitment/index',
    name: 'recruitment-home',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'recruitment - Home',
      name: 'recruitment',
      label: 'Dashboard',
      icon: '',
      adminUserType: 'recruitment',
      parent: 'recruitment-home'
    }
  },
  {
    path: '/recruitment/recruitments',
    name: 'recruitment-recruitments',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'recruitment - recruitments',
      name: 'recruitments',
      label: 'recruitments',
      icon: '',
      adminUserType: 'recruitment',
      parent: 'recruitments'
    }
  },
  {
    path: '/recruitment/all-users',
    name: 'recruitment-all-users',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'recruitment - all users',
      name: 'all-users',
      label: 'all-users',
      icon: '',
      adminUserType: 'recruitment',
      parent: 'all-users'
    }
  },
  {
    path: '/recruitment/all-administrators',
    name: 'recruitment-all-administrators',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'recruitment - all administrators',
      name: 'all-administrators',
      label: 'all-administrators',
      icon: '',
      adminUserType: 'recruitment',
      parent: 'all-administrators'
    }
  },
  {
    path: '/recruitment/all-employees',
    name: 'recruitment-all-employees',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'recruitment - all employees',
      name: 'all-employees',
      label: 'all-employees',
      icon: '',
      adminUserType: 'recruitment',
      parent: 'all-employees'
    }
  },
  {
    path: '/recruitment/departments',
    name: 'recruitment-departments',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'recruitment - departments',
      name: 'departments',
      label: 'departments',
      icon: '',
      adminUserType: 'recruitment',
      parent: 'departments'
    }
  },
  {
    path: '/recruitment/payroll',
    name: 'recruitment-payroll',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'recruitment - payroll',
      name: 'payroll',
      label: 'payroll',
      icon: '',
      adminUserType: 'recruitment',
      parent: 'payroll'
    }
  },
  {
    path: '/recruitment/blog',
    name: 'recruitment-blog',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'recruitment - blog',
      name: 'blog',
      label: 'blog',
      icon: '',
      adminUserType: 'recruitment',
      parent: 'blog'
    }
  },
  {
    path: '/recruitment/support',
    name: 'recruitment-support',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'recruitment - support',
      name: 'support',
      label: 'support',
      icon: '',
      adminUserType: 'recruitment',
      parent: 'support'
    }
  }
]


export default routes