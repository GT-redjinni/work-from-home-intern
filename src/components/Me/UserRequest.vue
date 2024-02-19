<template>
    <div class="container border bg-white rounded-2">
      <div class="d-flex mt-2">
        <span class="text-start text-subheading font-600 grey-color" style="border-bottom: 2px solid #585858;">Request</span>
        <span class="ms-auto"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></span>
      </div>
      <div class="row mt-3 ms-2 me-2 mb-3">
        <div v-for="requestId in currentUser.friendRequests" :key="requestId" class="col-md-6 rounded-3 mt-2 mb-2 p-2" style="border: .5px solid #787878;">
          <div class="d-flex mt-1 mb-1">
            <img :src="getUserProfileImg(requestId)" alt="" height="43px" width="43px" class="img border rounded-circle">
            <div class="text-start mx-2">
              <span class="fw-medium">{{ getUserName(requestId) }}</span>
              <br>
              <span class="fw-light mf">{{ getUserLocation(requestId) }}</span>
            </div>
  
            <div class="ms-auto mt-3">
              <button class="btn confirm-btn m-1" @click="acceptRequest(requestId)">Accept</button>
              <button class="btn decline-btn m-1" @click="declineRequest(requestId)">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import users from "../users.json";
  export default {
    name: 'UserRequest',
    // data() {
    //   return {
    //     requestId:'',
    //     requests: [
    //       { id: 1, name: 'Joan Andrews', location: 'Berlin', image: require('../../assets/user2.jpg') },
    //       { id: 2, name: 'Marie Lucas', location: 'Krakow', image: require('../../assets/user5.jpg') },
    //       { id: 3, name: 'Barbara Clark', location: 'Wellington', image: require('../../assets/user3.jpg') },
    //       { id: 4, name: 'Terry Ellis', location: 'Lagos', image: require('../../assets/user4.jpg') },
    //       { id: 5, name: 'Alan James', location: 'New York', image: require('../../assets/user4.jpg') },
    //       { id: 6, name: 'Kelly Grand', location: 'Ho Chi Minh', image: require('../../assets/user5.jpg') },
    //       { id: 7, name: 'Julie Stanley', location: 'Melbourne', image: require('../../assets/user1.jpg') },
    //       { id: 8, name: 'Joan Pearson', location: 'Vancouver', image: require('../../assets/user2.jpg') },
    //       { id: 9, name: 'Brandon Cook', location: 'Las Vegas', image: require('../../assets/user3.jpg') },
    //       { id: 10, name: 'Megan Hart', location: 'Seville', image: require('../../assets/user5.jpg') },
    //       // Add more request users as needed
    //     ],
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
      acceptRequest(userId) {
          // Logic to accept friend request
        const currentUser = this.currentUser;
        const user = users.find((user) => user.id === userId);

        if (user) {
          // currentUser.friends.push(user.id);
          currentUser.followers.push(user.id);
          currentUser.friendRequests = currentUser.friendRequests.filter((id) => id !== user.id);
          // Update other user's relationships if needed

          // Save updated user data
          location.reload()
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
      },
      declineRequest(userId) {
          // Logic to decline friend request
        const currentUser = this.currentUser;
        currentUser.friendRequests = currentUser.friendRequests.filter((id) => id !== userId);
        // Update other user's relationships if needed

        // Save updated user data
        location.reload()
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      },
    },
  };
  </script>
  
  <style scoped>
  .confirm-btn .decline-btn {
    border-radius: 8px;
    padding: 3px 10px 3px 10px;
  }
  

  </style>
  