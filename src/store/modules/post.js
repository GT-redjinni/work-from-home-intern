import axios from "../../axios";

const state = {
    
};

const actions = {
    async loadingPost() {
        try {
          const authToken = localStorage.getItem('token');
          const response = await axios.get("customers/posts", {
            headers: {
              DeviceID: '11111',
              versionName: '1.0.0',
              DeviceType: '0',
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              per_page: '5',
              tag: 'check_tag',
            },
          });
          console.log('response from vuex = ', response);
        }
        catch (error) {
          console.error(error);
        }
      },
};

const mutations = {

};

export default {
  state,
  actions,
  mutations,
};