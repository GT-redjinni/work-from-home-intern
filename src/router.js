import {createWebHistory,createRouter} from 'vue-router' ;

import  Home from './components/Home.vue'
import  SignIn from './components/SignIn.vue'
import  SignUp from './components/SignUp.vue'

const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'SignIn',
        path:'/signin',
        component:SignIn
    },
    {
        name:'SignUp',
        path:'/signup',
        component:SignUp
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router