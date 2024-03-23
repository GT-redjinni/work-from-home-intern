
import axios from '@/axios';

const state = {
  userPosts: [],
  loading:false,
};

const actions = {
  async fetchUserPosts({ commit }) {
    try {
      commit('SET_LOADING', true);
      const authToken = localStorage.getItem('token');
      const response = await axios.get("customers/posts", {
        headers: {
          DeviceID: '11111',
          versionName: '1.0.0',
          DeviceType: '0',
          Authorization: `Bearer ${authToken}`,
        },
        params: {
          page:'1',
          per_page: '15',
          tag: 'check_tag',
        },
      });
  
      const userPosts = await Promise.all(response.data.data.map(async post => {
        const commentsResponse = await axios.post(`customers/posts/comments`, {
          post_id: post.id,
        }, {
          headers: {
            DeviceID: "11111",
            versionName: "1.0.0",
            DeviceType: "0",
            Authorization: `Bearer ${authToken}`,
          },
        });
  
        const firstComment = commentsResponse.data.data.comments[0];
        
        let firstCommentData = {};
        if (firstComment) {
          firstCommentData = {
            userName: firstComment.user ? firstComment.user.name : '',
            userDesignation: firstComment.user ? firstComment.user.designation : '',
            userComment: firstComment.comment,
            userProfilePhoto: firstComment.user ? firstComment.user.profile_photo : ''
          };
        }

        
        return {
          id: post.id,
          userName: post.user.name,
          userImage: post.user.profile_photo,
          time: formatTime(post.created_at),
          location: post.city.name || 'Unknown',
          content: post.description,
          postImage: post.images.map(image => image.image),
          url: post.url,
          likes: post.likes_count,
          likesData: post.likes,
          comments: post.comments_count,
          shares: post.shares_count,
          showLikes: true,
          showShare: false,
          firstComment: firstCommentData
        };
      }));
  
      commit('SET_USER_POSTS', userPosts);
    } catch (error) {
      console.error(error);
    } finally {
      commit('SET_LOADING', false);
    }
  },
};

const mutations = {
  SET_USER_POSTS(state, posts) {
    state.userPosts = posts;
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
