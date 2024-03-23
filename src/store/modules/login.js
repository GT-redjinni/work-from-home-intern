import axios from "../../axios";

const state = {
  user:{
    email:'',
    password:'',
  },
};

const actions = {
  async handleLogin({ commit }, logUser) {
    try {
      const response = await axios.post("https://uat.redprix.com/api/login", logUser);
      localStorage.setItem('token', response.data.data.authorization);

      // Fetch user details after successful login
      // const userDetailsResponse = await axios.get("user", {
      //   headers: {
      //     DeviceID: '11111',
      //     versionName: '1.0.0',
      //     DeviceType: '0',
      //     TimeZone:'UTC',
      //     Authorization: `Bearer ${response.data.data.authorization}`
      //   }
      // });
      // localStorage.setItem('userDetails',JSON.stringify(userDetailsResponse.data));
      
      console.log(response.data.message);
      location.reload();
      commit("setUser", response.data.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
};

const mutations = {
  setUser(state, logUser) {
    state.user = logUser;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};