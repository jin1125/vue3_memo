import { createRouter, createWebHistory } from "vue-router";
import Top from '../components/pages/Top.vue';
import Edit from '../components/pages/Edit.vue';

const routes = [
  { path: '/', name: 'Top', component: Top },
  { path: '/edit', name: 'Edit', component: Edit },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;