import { createRouter, createWebHistory } from "vue-router";
import Top from '../components/pages/Top.vue';
import Edit from '../components/pages/Edit.vue';

const routes = [
  { path: '/',
    name: 'Top',
    component: Top
  },
  { path: '/edit/:id',
    name: 'Edit',
    component: Edit,
    props: true
  },
  { path: '/:catchAll(.*)',
    redirect: "/"
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;