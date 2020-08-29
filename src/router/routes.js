
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {name: 'blog', path: '', component: () => import('pages/blog/Index.vue')},
      {name: 'blog-post', path: '/blog-post/:id', component: () => import('pages/blog-post/Index.vue')},
      {name: 'contact', path: '/contact', component: () => import('pages/contact/Index.vue')},
      {name: 'about', path: '/about', component: () => import('pages/about/Index.vue')},
    ]
  },
  {
    path: '*',
    component: () => import('pages/not-found/Error404.vue')
  }
]

export default routes
