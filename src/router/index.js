import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';


Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
      path: '/motos',
      name: 'motos',
      component: () => import('../views/Motos.vue')
    },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
