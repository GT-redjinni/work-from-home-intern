import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/Foodfie/HomeComponent.vue';
import DineinComponent from './components/Dine-in/DineinComponent.vue';
import NotificationComponent from './components/Notification/NotificationComponent.vue';
import SettingComponent from './components/Setting/SettingComponent.vue';
import MeComponent from './components/Me/MeComponent.vue';
import EditProfile from './components/Me/EditProfile/EditProfile.vue';
import SinglePost from './components/Foodfie/SinglePost.vue';
import LogIn from './components/LogIn.vue'; 

const routes= [
    {
        name:'Foodfie',
        path:'/foodfie',
        component:HomeComponent
    },
    {
        name:'Dinein',
        path:'/dinein',
        component:DineinComponent
    },
    {
        name:'Notification',
        path:'/notification',
        component:NotificationComponent
    },
    {
        name:'Setting',
        path:'/setting',
        component:SettingComponent
    },
    {
        name:'Me',
        path:'/me',
        component:MeComponent
    },
    {
        name:'Edit',
        path:'/edit',
        component:EditProfile
    },
    {
        name:'SinglePost',
        path:'/post',
        component:SinglePost
    },
    {
        name:'LogIn',
        path:'/login',
        component:LogIn
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;
