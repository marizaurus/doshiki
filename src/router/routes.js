
const routes = [
  {
    path: '/',
    component: () => import('../layouts/MyLayout.vue'),
    children: [
      { path: '/adminPanel', component: () => import('../pages/admin/AdminMain.vue') },
      { path: '/adminPanel/orders', component: () => import('../pages/admin/AdminOrders.vue') },
      { path: '/adminPanel/products', component: () => import('../pages/admin/AdminProducts.vue') },
      { path: '/', component: () => import('../pages/Home.vue') },
      { path: '/cart', component: () => import('../pages/Cart.vue') },
      { path: '/catalogue', component: () => import('../pages/Catalogue.vue') },
      { path: '/search', component: () => import('../pages/Search.vue') },
      { path: '/shipping', component: () => import('../pages/Shipping.vue') },
      { path: '/guarantees', component: () => import('../pages/Guarantees.vue') },
      { path: '/company', component: () => import('../pages/Company.vue') },
      { path: '/news', component: () => import('../pages/News.vue') },
      { path: '/certificates', component: () => import('../pages/Certificates.vue') },
      { path: '/promos', component: () => import('../pages/Promos.vue') },
      { path: '/questions', component: () => import('../pages/Questions.vue') },
      { path: '/account', component: () => import('../pages/Account.vue') },
      { path: '/product', component: () => import('../pages/Product.vue') },
      {
        path: '/cookbook',
        component: () => import('../pages/recipies/CookBook.vue'),
        children: [
          {
            path: '/cookbook/articles',
            component: () => import('../pages/recipies/CookArts.vue')
          },
          {
            path: '/cookbook/videos',
            component: () => import('../pages/recipies/CookVids.vue')
          }
        ]
      },
      {
        path: '/cookbook/articles/artNum',
        component: () => import('../pages/recipies/Recipe.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/Error404.vue')
  })
}

export default routes
