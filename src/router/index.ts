import LandingPage from '../views/LandingPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/activities',
      name: 'ActivitiesView',
      component: () => import('../views/ActivitiesView.vue'),
      children: [
        {
          path: 'first',
          name: 'FirstActivity',
          component: () => import('../components/Activities/FirstActivity.vue'),
        }
      ]
    },
  ],
});

export default router;