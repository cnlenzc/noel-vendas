
const routes = [
  {
    path: '/',
    component: () => import('layouts/layout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('pages/home.vue')
      },
      {
        name: 'produto-list',
        path: 'produto',
        component: () => import('pages/produto-list.vue')
      },
      {
        name: 'produto-edit',
        path: 'produto/:id',
        component: () => import('pages/produto-edit.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
