import { createStore } from 'vuex'
import loginModule from'./modules/login.js';
import postModule from './modules/post';
import singlepostmodule from './modules/singlepost.js';
import likesModule from './modules/likes.js';
import userDetailsModule from './modules/userDetails.js'; 
import getstateModule from './modules/getstate.js';
import getcityModule from './modules/getcity.js';
export default createStore({
  modules: {
    login:loginModule,
    post: postModule,
    singlepost:singlepostmodule,
    likes:likesModule,
    userDetails: userDetailsModule,
    getstate:getstateModule,
    getcity:getcityModule,
  }
})

