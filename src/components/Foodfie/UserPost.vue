<template>
  <SpinnerComponent v-if="loading" />
  <!-- post 1 -->
  <div v-for="post in userPosts" :key="post.id" class="card border mt-3 rounded-3">
    <div class="card-body">
      <form class="w-100">
        <img :src="post.userImage || defaultProfileImage" height="40px" width="40px" class="float-start img-posts" />
        <div class="text-start mx-2">
          <h5 class="text-subheading mb-0">{{ post.userName }}</h5>
          <p class="text-desc mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="blue" class="bi bi-clock"
              viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg> {{ post.time }} |
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="red"
              class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg> {{ post.location }}
          </p>
        </div>

        <div class="ms-auto dropdown">
          <button class="btn dropdown-toggle dropdown-toggle-split" type="button" id="dropdownMenuButton"
            data-mdb-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg></button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Hide</a></li>
            <li><a class="dropdown-item" href="#">Copy Link</a></li>
            <li><a class="dropdown-item" href="#">Report</a></li>
          </ul>
        </div>

      </form>
      <p class="text-start">{{ post.content }}</p>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div v-for="(image, index) in post.postImage" :key="index"
            :class="{ 'carousel-item': true, active: index === 0 }">
            <img :src="image || defaultPostImage" class="img-fluid">
          </div>
        </div>
        <button v-if="post.postImage.length > 1" class="carousel-control-prev" type="button"
          data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button v-if="post.postImage.length > 1" class="carousel-control-next" type="button"
          data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="btn-group mt-3 action-buttons row">
        <div class="row justify-content-between ms-auto me-auto">
          <div class="col text-start" role="button" data-bs-toggle="modal" data-bs-target="#likesList"
            v-on:click="passPostid(post.id)">
            <img src="../../assets/like-icon.svg" class="lcsv" />
            {{ post.likes }} Likes
          </div>
          <div class="col text-center" role="button">
            <router-link :to="{ name: 'SinglePost', params: { postId: post.id } }"
              style="color: black;text-decoration: none;">
              <img src="../../assets/comment-icon.svg" class="lcsv" />
              {{ post.comments }} Comments
            </router-link>
          </div>
          <div class="col text-end" role="button" data-bs-toggle="modal" data-bs-target="#ShareModal">
            <img src="../../assets/share-icon.svg" class="lcsv" />
            {{ post.shares }} Shares
            <ShareModal />
          </div>
        </div>
        <span class="text-center">
          <hr class="mb-0">
        </span>
        <div class="text-start">
          <form class="w-100 text-start mt-3 mb-2">
            <img :src="post.firstComment.userProfilePhoto || defaultProfileImage" class="img-search rounded-circle"
              height="55rem" width="55rem" />
            <div class="float-start comments w-100">
              <div class="d-flex">
                <h5 class="text-start text-subheading-2 font-600 mt-1 mb-1 ms-1">{{ post.firstComment.userName ||
                  'User_Name' }}</h5>
                <span class="ms-auto ms-1 me-2 ">4m..</span>
                <span class="me-2 dropdown">
                  <button class="btn dropdown-toggle dropdown-toggle-split p-0 mt-0" type="button"
                    id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                      class="bi bi-three-dots" viewBox="0 0 16 16">
                      <path
                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-pencil-square me-2" viewBox="0 0 16 16">
                          <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg>
                        <span class="text-desc grey-color font-400">Edit</span>
                      </a></li>
                    <li><a class="dropdown-item" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-trash me-2" viewBox="0 0 16 16">
                          <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                        <span class="text-desc grey-color font-400">Delete</span>
                      </a></li>
                  </ul>
                </span>
              </div>
              <!-- <p class="text-desc font-400 mb-3">{{ post.firstComment.userDesignation || 'User_Designation' }}</p> -->
              <p class="text-desc font-400 mb-1 ms-1"> {{ post.firstComment.userComment || 'USer_Comment' }} </p>
            </div>
          </form>
        </div>
        <div class="text-start">
          <router-link :to="{ name: 'SinglePost', params: { postId: post.id } }" class="nostyle">view more
            comments</router-link>
        </div>
      </div>

    </div>
  </div>

  <LikesModal :p_id="p_id" />
</template>

<script>
import LikesModal from './LikesModal.vue';
import ShareModal from './ShareModal.vue';
import SpinnerComponent from '../SpinnerComponent.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'UserPost',
  components: {
    LikesModal,
    ShareModal,
    SpinnerComponent
  },
  data() {
    return {
      defaultProfileImage: require('../../assets/user-image.jpg'),
      defaultPostImage: require('../../assets/post1.png'),
      likes: 125,
      showLikes: true,
      showShare: false,
      p_id: null,
    }
  },
  methods: {
    ...mapActions('post', ['fetchUserPosts']),
    passPostid(id) {
      this.p_id = id;
      // console.log("user post -",id);
    },
    toggleFollow(user) {
      user.isFollowing = !user.isFollowing;
    },
    setButtonClass(user) {
      return user.isFollowing ? 'decline-btn' : 'confirm-btn';
    },
  },
  computed: {
    ...mapState('post', ['userPosts', 'loading']),
  },
  mounted() {
    this.fetchUserPosts();
  },
}
</script>

<style scoped>
.img-posts {
  border: 1px solid black;
  cursor: pointer;
  border-radius: 5px;
}

form {
  background: #fff;
  /* width: 600px;
    height: 55px; */
  display: flex;
}

form input {
  flex: 1;
  border: none;
  outline: none;
}

form .img-search {
  align-self: center;
  padding: 10px 10px;
  object-fit: cover;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
}

.comments {
  background-color: #F6F6F6;
  border-radius: 5px;
}

.comment-box {
  background-color: #F6F6F6;
  border-radius: 5px;
}

a.nostyle:link {
  text-decoration: inherit;
  color: #8F8F8F;
  cursor: pointer;
  text-decoration: underline;
}

a.nostyle:visited {
  text-decoration: inherit;
  color: #8F8F8F;
  cursor: auto;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown:hover>.dropdown-menu {
  display: block;
  position: absolute;
  left: auto;
  /* Set left to auto to reset any previous left positioning */
  right: 0;
  /* Align the right edge of the menu with the button */
  top: 50%;
  transform: translateX(-10%);
}

.dropdown>.dropdown-toggle:active {
  /*Without this, clicking will make it sticky*/
  pointer-events: none;
}
</style>