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
      path: '/welearn/:courseName/:courseId',
      name: 'welearn.course',
      component: () => import('../components/WelearnCourse.vue'),
      props: (route) => ({
        courseId: parseInt(route.params.courseId),
        courseName: route.params.courseName,
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
