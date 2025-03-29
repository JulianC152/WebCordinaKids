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
      path: '/propuesta',
      name: 'propuesta',
      component: () => import('../views/PropuestaView.vue'),
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
        },
        {
          path: 'second',
          name: 'SecondActivity',
          component: () => import('../components/Activities/SecondActivity.vue'),
        },
        {
          path: 'third',
          name: 'ThirdActivity',
          component: () => import('../components/Activities/ThirdActivity.vue'),
        },
        {
          path: 'fourth',
          name: 'FourthActivity',
          component: () => import('../components/Activities/FourthActivity.vue'),
        },
        {
          path: 'fifth',
          name: 'FifthActivity',
          component: () => import('../components/Activities/FifthActivity.vue'),
        },
        {
          path: 'sixth',
          name: 'SixthActivity',
          component: () => import('../components/Activities/SixthActivity.vue'),
        },
        {
          path: 'seventh',
          name: 'SeventhActivity',
          component: () => import('../components/Activities/SeventhActivity.vue'),
        },
      ]
    },
  ],
});

export default router;