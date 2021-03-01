
const routes = [
  {
    path: '/',
    component: () => import('layouts/layout-nao-autenticado.vue'),
    redirect: { name: 'login' },
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('pages/diversos/login.vue')
      }
    ]
  },

  {
    path: '/',
    redirect: { name: 'home' },
    component: () => import('layouts/layout-autenticado.vue'),
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('pages/diversos/home.vue')
      },
      {
        name: 'produto-list',
        path: 'produtos',
        component: () => import('pages/produto/produto-list.vue')
      },
      {
        name: 'produto-edit',
        path: 'produto/:id?',
        component: () => import('pages/produto/produto-edit.vue')
      },
      {
        name: 'contato-list',
        path: 'contatos',
        component: () => import('pages/contato/contato-list.vue')
      },
      {
        name: 'contato-edit',
        path: 'contato/:id?',
        component: () => import('pages/contato/contato-edit.vue')
      },
      {
        name: 'venda-edit',
        path: 'venda/:id?',
        component: () => import('pages/venda/venda-edit.vue')
      },
      {
        name: 'venda-list',
        path: 'vendas',
        component: () => import('pages/venda/venda-list.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/diversos/error-404.vue')
  }
]

export default routes
