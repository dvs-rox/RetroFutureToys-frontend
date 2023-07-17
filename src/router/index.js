import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ToyIndex from '../views/ToyIndex.vue'
import ToyDetails from '@/components/ToyDetails.vue'
import ToyEdit from '@/components/ToyEdit.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/toy'
    },
    {
      path: '/toy',
      name: 'ToyIndex',
      component: ToyIndex,
    },
    {
      path: '/details/:toyId',
      component: ToyDetails
    },
    {
      path: '/edit/:toyId?',
      component: ToyEdit
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
