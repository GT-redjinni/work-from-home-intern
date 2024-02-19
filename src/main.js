import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import router from './routes';
import './assets/css/global.css';
import store from './store';
import './axios';
createApp(App).use(router).use(store).mount('#app')
