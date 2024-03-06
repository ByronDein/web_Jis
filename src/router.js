import { createWebHistory, createRouter } from "vue-router";
import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'
import Blog from './pages/Blog.vue'
import Contact from './pages/Contact.vue'


const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/about_us',
        component: AboutUs
    },
    {
        path:'/blog',
        component: Blog
    },
    {
        path:'/contact',
        component: Contact
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router