import {createWebHistory,createRouter} from 'vue-router' ;

import  Home from './components/Home.vue'
import  SignIn from './components/SignIn.vue'
import  SignUp from './components/SignUp.vue'
import  Forgot from './components/Forgot.vue'
import  Otp from './components/Otp.vue'
import  ResetPassword from './components/ResetPassword.vue'
import  ErrorPage from './components/ErrorPage.vue'

const routes=[
    {
        name:'Home',
        path:'/:msg?',
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
    },
    {
        name:'Forgot',
        path:'/forgot',
        component:Forgot
    },
    {
        name:'Otp',
        path:'/otp',
        component:Otp
    },
    {
        name:'ResetPassword',
        path:'/reset',
        component:ResetPassword
    },
    {
        name:'ErrorPage',
        path: '/:catchAll(.*)*',
        component:ErrorPage
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router