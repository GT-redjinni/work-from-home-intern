import axios from "../../axios";

const state = {
  sigleState: null,
};

const actions = {
  async loadSingleState({ commit },state_id) {
    try {
        const singleStateResponse = await axios.get(`states/${state_id}`);
        commit("setSingleState", singleStateResponse.data.data.name);
    //   console.log(userDetailsResponse.data);
    } catch (error) {
      console.error("Failed to load state", error);
    }
  },
};

const mutations = {
    setSingleState(state, sigleState) {
    state.sigleState = sigleState;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
