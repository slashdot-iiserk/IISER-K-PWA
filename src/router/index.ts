import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/welearn',
      name: 'welearn',
      component: () => import('../pages/WeLearnPage.vue'),
    },
    {
      path: '/welearn/course/:courseId',
      name: 'welearn.course',
      component: () => import('../components/WelearnCourse.vue'),
      props: (route) => ({
        courseId: parseInt(route.params.courseId),
      }),
    },
    {
      path: '/welearn/course/:courseId/:type/:id',
      name: 'welearn.module',
      component: () => import('../pages/ModulePage.vue'),
      props: (route) => ({
        courseId: parseInt(route.params.courseId),
        id: parseInt(route.params.id),
        type: route.params.type,
      }),
    },
    {
      path: '/mess',
      name: 'mess',
      component: () => import('../pages/MessPage.vue'),
    },
  ],
});

export default router;
