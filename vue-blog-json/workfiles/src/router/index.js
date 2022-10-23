import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Details from "@/views/Details";
import Create from '../views/Create';
import Tag from "@/views/Tag";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: Tag
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
