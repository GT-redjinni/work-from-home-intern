<template>
  <div class="container ms-auto">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-sm-12 col-md-12 col-lg-6">
        <div class="card border mt-3">
          <div class="card-body">
            <form class="w-100">
              <img :src="singlePost.userImage || defaultProfileImage" height="40px" width="40px"
                class="float-start img-posts" />
              <div class="float-start mx-2">
                <h5 class="text-subheading mb-0">{{ singlePost.userName }}</h5>
                <p class="text-desc mt-0">
                  <img src="../../assets/time-icon.png" height="15px" width="15px"> {{ singlePost.time }} |
                  <img src="../../assets/location-icon.png" height="15px" width="15px"> {{ singlePost.location }}
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
            <p class="text-start">{{ singlePost.content }}</p>
            <img :src="singlePost.postImage[0] || defaultPostImage" class="img-fluid">
            <div class="btn-group mt-3 action-buttons row text-center">
              <div class="col-4">
                <button type="button" class="btn" v-on:click="toggleLikes">
                  <div class="icon-count-container">
                    <img src="../../assets/like-icon.svg" class="lcsv" />
                    <span class="count">{{ singlePost.likes }} likes</span>
                  </div>
                </button>
              </div>
              <div class="col-4">
                <button type="button" class="btn" v-on:click="toggleComments">
                  <div class="icon-count-container">
                    <img src="../../assets/comment-icon.svg" class="lcsv" />
                    <span class="count">125 comments</span>
                  </div>
                </button>
              </div>
              <div class="col-4">
                <button type="button" class="btn" v-on:click="toggleShare">
                  <div class="icon-count-container">
                    <img src="../../assets/share-icon.svg" class="lcsv" />
                    <span class="count">15 share</span>
                  </div>
                </button>
              </div>
            </div>
              <div class="mt-3 text-start row">
                <form class="w-100 text-start mt-3">
                  <img src="../../assets/user1.jpg" class="img-search rounded-circle" height="50px" width="50px" />
                  <div class="float-start comments w-100">
                    <h5 class="text-subheading font-600 mt-0" style="color: #535353;">Sonal Rahane</h5>
                    <p class="text-desc mt-0 grey-color font-400">Digital Marketing | Social Media
                      <br>
                      <span style="color: #8A8A8A;font-weight: 400;">when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged.</span>
                    </p>
                  </div>
                </form>
                <form class="w-100 text-start mt-3">
                  <img src="../../assets/user2.jpg" class="img-search rounded-circle" height="50px" width="50px" />
                  <div class="float-start comments w-100">
                    <h5 class="text-subheading mb-0 pt-0 font-600" style="color: #535353;">Sonal Rahane</h5>
                    <p class="text-desc grey-color font-400 mt-0pt-0">Digital Marketing | Social Media
                      <br>
                      <span style="color: #8A8A8A;padding-top: 1px;font-weight: 400;">when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                    </p>
                  </div>
                </form>
                <form class="w-100 text-start mt-3">
                  <img src="../../assets/user3.jpg" class="img-search rounded-circle" height="50px" width="50px" />
                  <div class="float-start comments w-100">
                    <h5 class="text-subheading mb-0 pt-0 font-600" style="color: #535353;">Sonal Rahane</h5>
                    <p class="text-desc grey-color font-400 mt-0pt-0">Digital Marketing | Social Media
                      <br>
                      <span style="color: #8A8A8A;padding-top: 1px;font-weight: 400;">when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                    </p>
                  </div>
                </form>
                <form class="w-100 text-start mt-3">
                  <img src="../../assets/user4.jpg" class="img-search rounded-circle" height="50px" width="50px" />
                  <div class="float-start comments w-100">
                    <h5 class="text-subheading mb-0 pt-0 font-600" style="color: #535353;">Sonal Rahane</h5>
                    <p class="text-desc grey-color font-400 mt-0pt-0">Digital Marketing | Social Media
                      <br>
                      <span style="color: #8A8A8A;padding-top: 1px;font-weight: 400;">when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                    </p>
                  </div>
                </form>

                <div class="text-start">
                <a href="#" class="nostyle">view more comments</a>
              </div>

              </div>
              

            


            <div v-if="showComments" class="mt-3 text-start">
              <p><b>Sonu Sahani</b> There are many variations of passages of lorem ipsum available but the majority have
                suffered alteration in some form </p>
              <form class="w-100 text-start">
                <img src="../../assets/rajkumar.jpg" class="img-search rounded-circle" />
                <input type="text" placeholder="Add a comment" class="comment-box">
              </form>

              <form class="w-100 text-start mt-3">
                <img src="../../assets/user-image.jpg" class="img-search rounded-circle" />
                <div class="float-start comments w-100">
                  <h5 class="text-subheading mb-0">Sonal Rahane</h5>
                  <p class="text-desc mt-0"> It was popularised in 1960s with the release of letraset</p>
                </div>
              </form>
              <form class="w-100 text-start mt-3">
                <img src="../../assets/user-image.jpg" class="img-search rounded-circle" />
                <div class="float-start comments w-100">
                  <h5 class="text-subheading mb-0">Monali Rajpurohit</h5>
                  <p class="text-desc mt-0"> nice post!</p>
                </div>
              </form>
              <form class="w-100 text-start mt-3">
                <img src="../../assets/user-image.jpg" class="img-search rounded-circle" />
                <div class="float-start comments w-100">
                  <h5 class="text-subheading mb-0">raj kahate</h5>
                  <p class="text-desc mt-0"> good morning</p>
                </div>
              </form>

            </div>
            <div v-if="showShare" class="share-buttons mt-3 mx-4">
              <button class="share-button linkedin">
                <img src="../../assets/linkedin-icon.png" class="share-icon" alt="LinkedIn" />
              </button>
              <button class="share-button facebook">
                <img src="../../assets/facebook-icon.png" class="share-icon" alt="Facebook" />
              </button>
              <button class="share-button instagram">
                <img src="../../assets/instagram-icon.png" class="share-icon" alt="Instagram" />
              </button>
              <button class="share-button whatsapp">
                <img src="../../assets/whatsapp-icon.png" class="share-icon" alt="WhatsApp" />
              </button>
              <button class="share-button youtube">
                <img src="../../assets/youtube-icon.png" class="share-icon" alt="YouTube" />
              </button>
            </div>

          </div>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SinglePost',
  data(){
    return{
      defaultProfileImage: require('../../assets/user-image.jpg'),
      defaultPostImage: require('../../assets/post1.png'),
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
  },
  computed: {
    ...mapState('singlepost', ['singlePost']),
  },
  created() {
    this.fetchSinglePost(this.postId);
    console.log(this.singlePost);
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
  height: 60px;
  width: 75px;
  padding: 10px 20px;
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
  left: auto; /* Set left to auto to reset any previous left positioning */
  right: 0; /* Align the right edge of the menu with the button */
  top: 50%;
  transform: translateX(-10%);
}

.dropdown>.dropdown-toggle:active {
  /*Without this, clicking will make it sticky*/
  pointer-events: none;
}</style>
