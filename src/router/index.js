import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Nopage from '@/pages/NoPage'
import About from '@/pages/About'

Vue.use(Router)

const routes = [
  { path:'/', redirect:'/index' },
  { path: '/index', name: 'index', component: Index },
  { path: '/about', name: 'about', component: About },
  { path: '*', name: 'nopage', component: Nopage }
]

const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  next();
})

export default router;