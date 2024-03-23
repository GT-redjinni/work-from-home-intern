import axios from '@/axios';

const state = {
  singlePost: {},
  loading: false,
};

const actions = {
  async fetchSinglePost({ commit }, postId) {
    try {
      commit('SET_LOADING', true);
      const authToken = localStorage.getItem('token');
      const response = await axios.get(`customers/posts/${postId}`, {
        headers: {
          DeviceID: '11111',
          versionName: '1.0.0',
          DeviceType: '0',
          Authorization: `Bearer ${authToken}`,
        },
      });

      const post = response.data.data;

      const commentsResponse = await axios.post(`customers/posts/comments`, {
        post_id: postId,
      }, {
        headers: {
          DeviceID: "11111",
          versionName: "1.0.0",
          DeviceType: "0",
          Authorization: `Bearer ${authToken}`,
        },
      });

      const comments = commentsResponse.data.data.comments.map(comment => ({
        userName: comment.user ? comment.user.name : '',
        userDesignation: comment.user ? comment.user.designation : '',
        userComment: comment.comment,
        userProfilePhoto: comment.user ? comment.user.profile_photo : ''
      }));

      const singlePostData = {
        id: post.id,
        userName: post.user.name,
        userImage: post.user.profile_photo,
        time: formatTime(post.created_at),
        location: post.city.name || 'Unknown',
        content: post.description,
        postImage: post.images.map((image) => image.image),
        url: post.url,
        likes: post.likes_count,
        likesData: post.likes,
        comments: post.comments_count,
        shares: post.shares_count,
        showLikes: true,
        showShare: false,
        commentsData: comments 
      };
      commit('SET_SINGLE_POST', singlePostData);
    } catch (error) {
      console.error(error);
    } finally {
      commit('SET_LOADING', false);
    }
  },
};

const mutations = {
  SET_SINGLE_POST(state, post) {
    state.singlePost = post;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
};

function formatTime(time) {
  const date = new Date(time);
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
