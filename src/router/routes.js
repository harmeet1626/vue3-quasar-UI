
const routes = [
  {
    path: '/',
    redirect: "/Dashboard",
    // component: () => import('../components/navbar.vue'),
    children: [
      { path: '/Dashboard', component: () => import('../pages/Dashboard.vue') },
      { path: '/users', component: () => import('../pages/Users.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }, {
    path: '/login',
    component: () => import('../pages/Login.vue')
  }, {
    path: '/userDetails/:id',
    component: () => import('../pages/UserDetails.vue')
  },
  {
    path:'/test',
    component:()=> import('../pages/test.vue')
  }

]

export default routes
