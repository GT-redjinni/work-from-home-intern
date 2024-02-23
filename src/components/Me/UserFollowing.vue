<template>
  <div class="container border bg-white rounded-2">
    <div class="d-flex mt-2">
      <span class="text-start text-subheading font-600 grey-color"
        style="border-bottom: 2px solid #585858;">Following</span>
      <span class="ms-auto"><input class="form-control me-2" v-model="searchQuery" type="search" placeholder="Search"
          aria-label="Search"></span>
    </div>
    <div class="row mt-3 ms-2 me-2 mb-3">
      <div v-for="following in filteredFollowings" :key="following.id" class="col-md-6 rounded-3 mt-2 mb-2 p-2"
        style="border: .5px solid #787878;">
        <div class="d-flex mt-1 mb-1">
          <img :src="following.image" alt="" height="43px" width="43px" class="img border rounded-circle">
          <div class="text-start mx-2">
            <span class="fw-medium">{{ following.name }}</span>
            <br>
            <span class="fw-light mf">{{ following.location }}</span>
          </div>

          <div class="ms-auto">
            <button class="btn decline-btn m-1" @click="unfollowUser(following.name)">Unfollow</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFollowing',
  data() {
    return {
      searchQuery: "",
      followingId: "",
      followings: [
        { id: 1, name: 'Julie Stanley', location: 'Melbourne', image: require('../../assets/user5.jpg') },
        { id: 2, name: 'Joan Pearson', location: 'Vancouver', image: require('../../assets/user4.jpg') },
        { id: 3, name: 'Barbara Clark', location: 'Wellington', image: require('../../assets/user3.jpg') },
        { id: 4, name: 'Vincent Matthews', location: 'Vincent Matthews', image: require('../../assets/user2.jpg') },
        { id: 5, name: 'Alan James', location: 'Naples', image: require('../../assets/user1.jpg') },
        { id: 6, name: 'Joan Andrews', location: 'Berlin', image: require('../../assets/user1.jpg') },
        { id: 7, name: 'Marie Lucas', location: 'Krakow', image: require('../../assets/user2.jpg') },
        { id: 8, name: 'Brandon Cook', location: 'Las Vegas', image: require('../../assets/user3.jpg') },
        { id: 9, name: 'Victoria Henderson', location: 'Hamburg', image: require('../../assets/user4.jpg') },
        { id: 10, name: 'Kelly Grand', location: 'Ho Chi Minh City', image: require('../../assets/user5.jpg') },
      ],
    };
  },
  computed: {
    filteredFollowings() {
      const query = this.searchQuery.toLowerCase();
      return this.followings.filter(
        following => following.name.toLowerCase().includes(query) || following.location.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    unfollowUser(followingId) {
      alert("Unfollowed " + followingId)
    },
  },
};
</script>

<style scoped></style>