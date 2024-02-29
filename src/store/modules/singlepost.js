import axios from "@/axios";

const state = {
  singlePost: null,
};

const actions = {
  async fetchSinglePost({ commit }, postId) {
    try {
      const authToken = localStorage.getItem("token");
      const response = await axios.get(`customers/posts/${postId}`, {
        headers: {
          DeviceID: "11111",
          versionName: "1.0.0",
          DeviceType: "0",
          Authorization: `Bearer ${authToken}`,
        },
      });

      const post = response.data.data;
      const singlePost = {
        id: post.id,
        userName: post.user.name,
        userImage: post.user.profile_photo,
        time: formatTime(post.created_at),
        location: post.city.name || "Unknown",
        content: post.description,
        postImage: post.images.map((image) => image.image),
        url: post.url,
        likes: post.likes_count,
        likesData: post.likes,
        comments: post.comments_count,
        shares: post.shares_count,
        showLikes: true,
        showShare: false,
      };

      commit("SET_SINGLE_POST", singlePost);
    } catch (error) {
      console.error(error);
    }
  },
};

const mutations = {
  SET_SINGLE_POST(state, post) {
    state.singlePost = post;
  },
};

function formatTime(time) {
  const date = new Date(time);
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
