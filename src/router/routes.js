
const routes = [
  {
    path: '/',
    component: () => import('../layouts/MyLayout.vue'),
    children: [
      { path: '/adminPanel', component: () => import('../pages/AdminPanel.vue') },
      { path: '/', component: () => import('../pages/Home.vue') },
      { path: '/favorite', component: () => import('../pages/Favorite.vue') },
      { path: '/cart', component: () => import('../pages/Cart.vue') },
      { path: '/catalogue', component: () => import('../pages/Catalogue.vue') },
      { path: '/shipping', component: () => import('../pages/Shipping.vue') },
      { path: '/company', component: () => import('../pages/Company.vue') },
      { path: '/account', component: () => import('../pages/Account.vue') },
      {
        name: 'product.id',
        path: '/catalogue/products/:id',
        component: () => import('../pages/Product.vue')
      },
      {
        path: '/cookbook',
        component: () => import('../pages/recipes/CookBook.vue'),
        children: [
          { path: '/cookbook/articles', component: () => import('../pages/recipes/CookArts.vue') },
          { path: '/cookbook/videos', component: () => import('../pages/recipes/CookVids.vue') }
        ]
      },
      {
        name: 'recipe.id',
        path: '/cookbook/articles/:id',
        component: () => import('../pages/recipes/Recipe.vue')
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
