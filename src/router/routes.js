
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/about/Index.vue') },
      {name: 'blog', path: '/blog', component: () => import('pages/blog/Index.vue')},
      {name: 'blog-post', path: '/blog-post/:id', component: () => import('pages/blog-post/Index.vue')},
      {name: 'contact', path: '/contact', component: () => import('pages/contact/Index.vue')},
    ]
  },
  {
    path: '*',
    component: () => import('pages/not-found/Error404.vue')
  }
]

export default routes
