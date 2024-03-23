import axios from "../../axios";

const state = {
  userDetails: null,
};

const actions = {
  async loadUserDetails({ commit }) {
    try {
        const authToken = localStorage.getItem('token');
      const userDetailsResponse = await axios.get("user", {
        headers: {
          DeviceID: '11111',
          versionName: '1.0.0',
          DeviceType: '0',
          TimeZone:'UTC',
          Authorization: `Bearer ${authToken}`
        }
      });
      commit("setUserDetails", userDetailsResponse.data);
    //   console.log(userDetailsResponse.data);
    } catch (error) {
      console.error("Failed to load user details:", error);
    }
  },
};

const mutations = {
  setUserDetails(state, userDetails) {
    state.userDetails = userDetails;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
