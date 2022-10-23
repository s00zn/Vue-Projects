import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import('../views/jobs/Jobs.vue')
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: () => import('../views/jobs/JobDetails.vue'),
    props: true
  },
  {
    //redirect logic
    path: '/all-jobs',
    redirect: '/jobs'
  },
  {
    //404 catchall
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/404.vue'),
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
