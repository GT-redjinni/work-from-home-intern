<template>
  <div class="container ms-auto">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div v-if="loading">
            <div class="text-center mt-3">
              <SpinnerComponent/> 
            </div>
          </div>
          <div v-else>
          <div class="card border mt-3">
            <div class="card-body">
              <form class="w-100">
                <img v-if="singlePost && singlePost.userImage" :src="singlePost.userImage || defaultProfileImage"
                  height="40px" width="40px" class="float-start img-posts" />
                <div class="float-start mx-2">
                  <h5 v-if="singlePost" class="text-subheading mb-0">{{ singlePost.userName || 'UserName' }}</h5>
                  <p v-if="singlePost" class="text-desc mt-0">
                    <img src="../../assets/time-icon.png" height="15px" width="15px"> {{ singlePost.time || 'Time' }} |
                    <img src="../../assets/location-icon.png" height="15px" width="15px"> {{ singlePost.location ||
                  'Unknown' }}
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
              <p v-if="singlePost" class="text-start">{{ singlePost.content || 'Description' }}</p>
              <div class="text-center">
                <img v-if="singlePost && singlePost.postImage && singlePost.postImage.length > 0" :src="singlePost.postImage[0] || defaultPostImage" class="img-fluid">
              </div>
              <div class="btn-group mt-3 action-buttons row text-center">
                <div class="col-4">
                  <button type="button" class="btn" v-on:click="toggleLikes">
                    <div class="icon-count-container" data-bs-toggle="modal" data-bs-target="#likesList" @click="passPostid(singlePost.id)">
                      <img src="../../assets/like-icon.svg" class="ms-1 me-1" />
                      <span v-if="singlePost" class="count">{{ singlePost.likes }} likes</span>
                    </div>
                  </button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn" v-on:click="toggleComments">
                    <div class="icon-count-container">
                      <img src="../../assets/comment-icon.svg"  class="ms-1 me-1"/>
                      <span class="count">{{ singlePost.comments }} comments</span>
                    </div>
                  </button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn" role="button" data-bs-toggle="modal" data-bs-target="#ShareModal">
                    <div class="icon-count-container">
                      <img src="../../assets/share-icon.svg" class="ms-1 me-1" />
                      <span v-if="singlePost" class="count"> {{ singlePost.likes }} share </span>
                      
                    </div>
                  </button>
                </div>
              </div>
              <hr class="mt-2 mb-2">
              <div ref="commentsContainer" class="comments-container" v-on:scroll="loadMoreCommentsOnScroll" >
                
              <div v-if="singlePost && singlePost.commentsData && singlePost.commentsData.length > 0">
                <div v-for="(comment, index) in singlePost.commentsData.slice(0, commentsToShow)" :key="index" class="mt-2 mb-2 text-start row">
                  <form class="w-100 text-start mt-1 mb-1 d-flex">
                    <img :src="comment.userProfilePhoto || defaultProfileImage" class="img-search rounded-circle" height="55rem" width="55rem" />
                    <div class="float-start comments w-100 mb-1">
                      <div class="d-flex">
                        <h5 class="text-start text-subheading-2 font-600 mb-1">{{ comment.userName }}</h5>
                        <span class="ms-auto ms-1 me-2 ">4m..</span>
                        <span class="me-2 dropdown">
                          <button class="btn dropdown-toggle dropdown-toggle-split p-0 mt-0" type="button"
                            id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="grey"
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
                      <p class="text-desc font-400 mb-1 ms-1"> {{ comment.userComment }}</p>
                    </div>
                  </form>
                  <div class="text-center">
                    <hr class="mt-0 mb-0">
                  </div>
                </div>
                <div v-if="showCommentSpinner" class="text-center mt-3">
                  <SpinnerComponent/>
                </div>
                <!-- <div v-if="singlePost.commentsData.length > commentsToShow">
                  <a href="#" class="nostyle" @click.prevent="loadMoreComments">View more comments</a>
              </div> -->
              </div>
            
              <div v-else>
                <form class="w-100 text-start mt-1 d-flex">
                    <div class="text-center comments w-100 mb-1 h-100">
                      <p class="text-subheading-2 font-500 mb-1 ms-1">No Comments To Display !!</p>
                    </div>
                  </form>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div class="col-3"></div>
      </div>
  </div>
  <LikesModal :p_id="p_id" />
  <ShareModal />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import LikesModal from './LikesModal.vue';
import ShareModal from './ShareModal.vue';
import SpinnerComponent from '../SpinnerComponent.vue';
export default {
  name: 'SinglePost',
  components: {
    LikesModal,
    ShareModal,
    SpinnerComponent
  },
  data() {
    return {
      defaultProfileImage: require('../../assets/user-image.jpg'),
      defaultPostImage: require('../../assets/post1.png'),
      commentsDataStatic: [
        {
          id: 1,
          name: "Sonal Rahane",
          userImg: require("../../assets/user1.jpg"),
          designation: "Digital Marketing | Social Media",
          description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
          id: 2,
          name: "Sonal Rahane",
          userImg: require("../../assets/user2.jpg"),
          designation: "Digital Marketing | Social Media",
          description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
          id: 3,
          name: "Sonal Rahane",
          userImg: require("../../assets/user3.jpg"),
          designation: "Digital Marketing | Social Media",
          description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
          id: 4,
          name: "Sonal Rahane",
          userImg: require("../../assets/user4.jpg"),
          designation: "Digital Marketing | Social Media",
          description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
      ],
      showCommentSpinner: false,
      commentsToShow: 10,
      p_id: null,
    }
  },
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions('singlepost', ['fetchSinglePost']),
    loadMoreCommentsOnScroll() {
      const container = this.$refs.commentsContainer;
      const lastComment = container.querySelector('.comments-container > div:last-child');

      if (lastComment) {
        const lastCommentRect = lastComment.getBoundingClientRect();
        if (lastCommentRect.bottom <= container.getBoundingClientRect().bottom) {
          this.showCommentSpinner = true;
          this.loadMoreComments();
        }
      }
    },
    loadMoreComments() {
      setTimeout(() => {
        this.showCommentSpinner = false;
        this.commentsToShow += 5;
      }, 1000);
    },
    passPostid(id){
      this.p_id = id;
      // console.log("Id",id);
    }
  },
  computed: {
    ...mapState('singlepost', ['singlePost','loading']),
  },
  created() {
    this.fetchSinglePost(this.postId);
    // console.log("post id",this.postId);
  },
}
</script>

<style scoped>
.img-posts {
  border: 1px solid black;
  cursor: pointer;
  border-radius: 5px;
}

.comments {
  background-color: #F6F6F6;
  border-radius: 5px;
}

.comment-box {
  background-color: #F6F6F6;
  border-radius: 5px;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
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
.comments-container {
  /* Set a fixed height or max-height and overflow-y: auto to enable scrolling */
  max-height: 450px; /* Example height */
  overflow-y: auto;
  overflow-x: hidden;
}
.comments-container::-webkit-scrollbar {
  display: none;
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
