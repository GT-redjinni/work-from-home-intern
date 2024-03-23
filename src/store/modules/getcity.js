import axios from "../../axios";

const state = {
  sigleCity: null,
};

const actions = {
  async loadSingleCity({ commit },state_id) {
    try {
        const sigleCityResponse = await axios.get(`cities/${state_id}`);
        commit("setSingleCity", sigleCityResponse.data.data.name);
    //   console.log(userDetailsResponse.data);
    } catch (error) {
      console.error("Failed to load city", error);
    }
  },
};

const mutations = {
  setSingleCity(state, sigleCity) {
    state.sigleCity = sigleCity;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
