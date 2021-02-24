
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
    component: () => import('pages/Error404.vue')
  }
]

export default routes
