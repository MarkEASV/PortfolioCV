import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        description: 'This is the home page of the portfolio website.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        description: 'This is the about page about me.',
      },
    },
    {
      path: '/compentencies',
      name: 'compentencies',
      component: () => import('../views/CompentenciesView.vue'),
      meta: {
        description: 'This is about my competencies and skills.',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        description: 'This is the projects page where I showcase my work.',
      },
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationView.vue'),
      meta: {
        description: 'This is the education page where I showcase my education.',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        description: 'This is the contact page where you can reach me.',
      },
    },
  ]
})

export default router
