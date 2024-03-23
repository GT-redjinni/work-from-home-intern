import axios from "@/axios";

const state = {
    likesData: { 
        likes: [], 
        likes_count: 0 
    },
    loading: false,
};

const actions = {
    async fetchLikes({ commit },postId) {
      try {
        commit("SET_LOADING", true);
        // console.log("post_id:", postId);
        const authToken = localStorage.getItem("token");
        const response = await axios.post(`customers/posts/likes`, {
          post_id: postId,
        }, {
          headers: {
            DeviceID: "11111",
            versionName: "1.0.0",
            DeviceType: "0",
            Authorization: `Bearer ${authToken}`,
          },
        });
        // console.log("Server Response:", response.data.data);
  
        const likesData = {
          likes: response.data.data.likes.data.map(like => ({
            user_id: like.user_id,
            user: like.user,
            post_id: like.post_id,
            post: like.post,
            // state: like.state,
            city: like.city || 'Unknown',
          })),
          likes_count: response.data.data.likes_count,
        };
        
        commit("SET_LIKES", likesData);
      } catch (error) {
        console.error(error);
      } finally {
        commit("SET_LOADING", false); // Set loading state to false after the request is completed
      }
    }
  };

const mutations = {
  SET_LIKES(state,like){
    state.likesData=like;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
};



export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
