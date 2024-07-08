import Home from '@/modules/App/Training/Index.vue'

const routes = [
  {
    path: '/training/index',
    name: 'training-home',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'training - Home',
      name: 'training',
      label: 'Dashboard',
      icon: '',
      adminUserType: 'training',
      parent: 'training-home'
    }
  },
  {
    path: '/training/create-new-course',
    name: 'training-create-new-course',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'training - create new course',
      name: 'create-new-course',
      label: 'create-new-course',
      icon: '',
      adminUserType: 'training',
      parent: 'create-new-course'
    }
  },
  {
    path: '/training/all-courses',
    name: 'training-all-courses',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'training - all courses',
      name: 'all-courses',
      label: 'all-courses',
      icon: '',
      adminUserType: 'training',
      parent: 'all-courses'
    }
  },
  {
    path: '/training/earnings',
    name: 'training-earnings',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'training - earnings',
      name: 'earnings',
      label: 'earnings',
      icon: '',
      adminUserType: 'training',
      parent: 'earnings'
    }
  },
  {
    path: '/training/messages',
    name: 'training-messages',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'training - messages',
      name: 'messages',
      label: 'messages',
      icon: '',
      adminUserType: 'training',
      parent: 'messages'
    }
  },
  {
    path: '/training/transactions',
    name: 'training-transactions',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'training - transactions',
      name: 'transactions',
      label: 'transactions',
      icon: '',
      adminUserType: 'training',
      parent: 'transactions'
    }
  },
  {
    path: '/training/blog',
    name: 'training-blog',
    component: Home,
    meta: {
      layout: 'dashboard',
      requiresAuth: false,
      pageTitle: 'training - blog',
      name: 'blog',
      label: 'blog',
      icon: '',
      adminUserType: 'training',
      parent: 'blog'
    }
  }
]


export default routes