import AboutPage from '@/pages/AboutPage.vue';
import BarberPage from '@/pages/BarberPage.vue';
import GalleryPage from '@/pages/GalleryPage.vue';
import LandingPage from '@/pages/LandingPage.vue';
import ProfilePage from '@/pages/ProfilePage.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/barbers',
    component: BarberPage
  },
  {
    path: '/gallery',
    component: GalleryPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/profile',
    component: ProfilePage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
