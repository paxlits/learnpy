import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/components/AppHome.vue';
import LevelContent from '@/components/LevelContent.vue';
const routes = [
    {
        path: '/',
        name: 'Main',
        component: AppHome // Main page as the index route
    },
    {
        path: '/level/:id', // Динамический путь для каждого уровня
        name: 'LevelContent',
        component: LevelContent,
        props: true // Передаем параметры маршрута как пропсы в компонент
      },
    ]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
