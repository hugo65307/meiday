import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Cliente from './views/Cliente.vue'
import Produtos from './views/Produtos.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cliente',
      name: 'Cliente',
      component: Cliente
    },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Produtos
  }
  ]
})
