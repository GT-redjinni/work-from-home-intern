import { createStore } from 'vuex'
import login from'./modules/login.js';
import post from './modules/post.js';

export default createStore({
  modules: {
    login,
    post
  }
})

