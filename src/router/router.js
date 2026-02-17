import AboutPage from '@/pages/AboutPage.vue';
import BarberPage from '@/pages/BarberPage.vue';
import GalleryPage from '@/pages/GalleryPage.vue';
import LandingPage from '@/pages/LandingPage.vue';
import SigninPage from '@/pages/SigninPage.vue';
import SignUp from '@/components/auth/SignUp.vue';
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
  },
  {
    path: '/signin',
    component: SigninPage
  }, {
    path: '/signup',
    component: SignUp
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
