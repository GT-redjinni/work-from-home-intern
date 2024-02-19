<template>
    <div class="container border bg-white rounded-2">
      <div class="d-flex mt-2">
        <span class="text-start text-subheading font-600 grey-color" style="border-bottom: 2px solid #585858;">Followers</span>
        <span class="ms-auto"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></span>
      </div>
      <div class="row mt-3 ms-2 me-2 mb-3">
        <div v-for="followerId in currentUser.followers" :key="followerId" class="col-md-6 rounded-3 mt-2 mb-2 p-2" style="border: .5px solid #787878;">
          <div class="d-flex mt-1 mb-1">
            <img :src="getUserProfileImg(followerId)" alt="" height="43px" width="43px" class="img border rounded-circle">
            <div class="text-start mx-2">
              <span class="fw-medium">{{ getUserName(followerId) }}</span>
              <br>
              <span class="fw-light mf">{{ getUserLocation(followerId) }}</span>
            </div>
  
            <div class="ms-auto">
              <button class="btn confirm-btn m-1" @click="removeFollower(followerId)">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import users from "../users.json";
export default {
  name: 'UserFollower',
  // data() {
  //   return {
  //       followerId:"",
  //       followers: [
  //           { id: 1, name: 'Joan Andrews', location: 'Berlin', image: require('../../assets/user1.jpg') },
  //           { id: 2, name: 'Marie Lucas', location: 'Krakow', image: require( '../../assets/user2.jpg') },
  //           { id: 3, name: 'Brandon Cook', location: 'Las Vegas', image: require( '../../assets/user3.jpg') },
  //           { id: 4, name: 'Victoria Henderson', location: 'Hamburg', image: require( '../../assets/user4.jpg') },
  //           { id: 5, name: 'Kelly Grand', location: 'Ho Chi Minh City', image: require( '../../assets/user5.jpg') },
  //           { id: 6, name: 'Julie Stanley', location: 'Melbourne', image: require( '../../assets/user1.jpg') },
  //           { id: 7, name: 'Joan Pearson', location: 'Vancouver', image: require( '../../assets/user2.jpg') },
  //           { id: 8, name: 'Barbara Clark', location: 'Wellington', image: require( '../../assets/user3.jpg') },
  //           { id: 9, name: 'Vincent Matthews', location: 'Vincent Matthews', image: require( '../../assets/user4.jpg') },
  //           { id: 10, name: 'Alan James', location: 'Naples', image: require( '../../assets/user5.jpg') },
  //       ],
  //   };
  // },
  computed: {
    currentUser() {
      return JSON.parse(localStorage.getItem('currentUser'));
    },
  },
  methods: {
    getUserProfileImg(userId) {
      const user = users.find((user) => user.id === userId);
      return user ? user.profile_img : '';
    },
    getUserName(userId) {
      const user = users.find((user) => user.id === userId);
      return user ? user.name : '';
    },
    getUserLocation(userId) {
      const user = users.find((user) => user.id === userId);
      return user ? user.location : '';
    },
    removeFollower(userId) {
      // Logic to unfollow user
      const currentUser = this.currentUser;
      currentUser.followers = currentUser.followers.filter((id) => id !== userId);
      currentUser.following = currentUser.following.filter((id) => id !== userId);
      // Update other user's relationships if needed

      // Save updated user data
      location.reload()
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    },
  },
};
</script>

<style scoped>
.confirm-btn {
    font-weight: 400;
    padding: 3px 10px 3px 10px;
}
</style>