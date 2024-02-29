import { createStore } from 'vuex'
import login from'./modules/login.js';
import postModule from './modules/post';
import singlepostmodule from './modules/singlepost.js'
export default createStore({
  modules: {
    login,
    post: postModule,
    singlepost:singlepostmodule,
  }
})

