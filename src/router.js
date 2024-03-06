import { createWebHistory, createRouter } from "vue-router";
import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'
import Blog from './pages/Blog.vue'
import Contact from './pages/Contact.vue'
import FrecuentQuestions from './pages/FrecuentQuestions.vue'
import PossibleEmployees from './pages/PossibleEmployees.vue'
import Services from './pages/Services.vue'


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
    {
        path:'/frecuent_questions',
        component: FrecuentQuestions
    },
    {
        path:'/possible_employees',
        component: PossibleEmployees
    },
    {
        path:'/services',
        component: Services
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router