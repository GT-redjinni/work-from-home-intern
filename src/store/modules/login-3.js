import axios from "../../axios";

const state = {
  loggedInUser: null,
};

const actions = {
  async login({ commit }, { email, password }) {
    try {
      const response = await axios.post('login', {email,password,});
      const user = response.data;

      if (user) {
        commit('setLoggedInUser', user);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        return true;
      } 
      else {
        return false;
      }
    } 
    catch (error) {
      console.error('Error logging in:', error);
      return false;
    }
  },
};

const mutations = {
  setLoggedInUser(state, user) {
    state.loggedInUser = user;
  },
};

export default {
  state,
  actions,
  mutations,
};