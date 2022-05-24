import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/welearn',
      name: 'welearn',
      component: () => import('../views/WeLearnView.vue'),
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
      path: '/welearn/:type/:id',
      name: 'welearn.module',
      component: () => import('../components/ModulePage.vue'),
      props: (route) => ({
        id: parseInt(route.params.id),
        type: route.params.type,
      }),
    },
    {
      path: '/mess',
      name: 'mess',
      component: () => import('../views/MessView.vue'),
    },
  ],
});

export default router;
