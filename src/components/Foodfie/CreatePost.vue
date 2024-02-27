<template>
  <div id="createPost" class="container mb-3 border rounded-3 bg-white">
    <div class="col mb-3">
      <h5 class="text-start m-3">Create Post</h5>
      <form class="w-100 border rounded-3 ">
        <img src="../../assets/user-image.jpg" class="img-search rounded " />
        <input type="text" placeholder="What's on your mind, Rakesh?" data-bs-toggle="modal" data-bs-target="#gmModal" />
      </form>
      <div class="options mt-3">
        <button type="button" class="option-button text-subheading ms-auto"><img src="../../assets/photo-icon.png"
            alt="photo" height="28px" width="28px" /> Photos </button>
        <button type="button" class="option-button text-subheading mx-auto"><img src="../../assets/hashtag-icon.png"
            alt="hashtag" height="26px" width="26px" /> Add Hashtags </button>
        <button type='button' class="option-button text-subheading me-auto"><img src="../../assets/location-icon.png"
            alt="location" height="28px" width="28px" /> Location </button>
      </div>
    </div>
  </div>

  <div class="modal fade" id="gmModal" tabindex="-1" aria-labelledby="gmModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header text-white" style="background: #EB0E19;">
          <h5 class="modal-title" id="gmModalLabel">Create Post</h5>
          <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex mb-2">
            <img src="../../assets/follow-img.jpg" alt="" height="43px" width="43px" class="img border rounded-circle">
            <div class="text-start mx-2">
              <p>
                <span class="fw-normal name">Rajkumar Gupta</span>
                <br>
                <span class="fw-light mf"> 12 mutual friends</span>
              </p>
            </div>
          </div>
          <div class="d-flex rounded-2 bg-white">
            <div class="row w-100 p-1">
              <span :class="{ 'tab-active': activeTab === 'create_post'}" role="button" class="col-6 font-subheading grey-color font-400 p-2 border-bottom"
                v-on:click="showContent('create_post')">Create Post</span>
              <span :class="{ 'tab-active': activeTab === 'create_offer'}" role="button" class="col-6 font-subheading grey-color font-400 p-2 border-bottom"
                v-on:click="showContent('create_offer')">Create Offer</span>
            </div>
          </div>
          <div v-show="activeTab === 'create_post'" class="content mt-3" id="termsAndCondition">
            <CreatepostTab/>
          </div>
          <div v-show="activeTab === 'create_offer'" class="content mt-3" id="aboutUs">
            <CreateofferTab/>
          </div>
          
        </div>
        <div class="modal-footer">
          <button class="btn elite-btn w-100 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="background: #EB0E19;" >
            POST
          </button>
        </div>
      </div>
    </div>
  </div>
  <TagpeopleModal />
</template>

<script>
import CreatepostTab from './CreatepostTab.vue'
import CreateofferTab from './CreateofferTab.vue';
import TagpeopleModal from './TagpeopleModal.vue';
export default {
  name: 'CreatePost',
  components: {
    CreatepostTab,
    CreateofferTab,
    TagpeopleModal,
  },
  data() {
    return {
      activeTab: 'create_post'
    }
  },
  methods: {
    showContent(tab) {
      this.activeTab = tab;
    }
  }
}
</script>

<style scoped>
.options {
  display: flex;
  justify-content: space-between;
}

form {
  background: #F2F2F2;
  width: 600px;
  height: 55px;
  display: flex;
}

form input {
  flex: 1;
  border: none;
  outline: none;
  background: #F2F2F2;
}

form .img-search {
  align-self: center;
  height: 50px;
  width: 75px;
  padding: 10px 20px;
}

.option-button {
  background: transparent;
  border: none;
}
.tab-active{
    background: #EB0E19;
    color: #FFFFFF;
    border-radius: 5px;
}
</style>