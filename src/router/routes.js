
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/about/Index.vue') },
      { path: '/blog', component: () => import('pages/blog/Index.vue') },
      { path: '/blog-post', component: () => import('pages/blog-post/Index.vue') },
      { path: '/contact', component: () => import('pages/contact/Index.vue') },
    ]
  },
  {
    path: '*',
    component: () => import('pages/not-found/Error404.vue')
  }
]

export default routes
