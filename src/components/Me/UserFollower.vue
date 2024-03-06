<template>
  <div class="container border bg-white rounded-2">
    <div class="d-flex mt-2">
      <span class="text-start text-subheading font-600 grey-color"
        style="border-bottom: 2px solid #585858;">Followers</span>
      <span class="ms-auto"><input class="form-control me-2" v-model="searchQuery" type="search" placeholder="Search"
          aria-label="Search"></span>
    </div>
    <div class="row mt-3 ms-2 me-2 mb-3">
      <div v-for="follower in filteredFollowers" :key="follower.id" class="col-sm-12 col-md-12 col-lg-6  rounded-3 mt-2 mb-2 p-2"
        style="border: .5px solid #787878;">
        <div class="d-flex mt-1 mb-1 followers-list">
          <img :src="follower.image" alt="" height="43px" width="43px" class="img border rounded-circle">
          <div class="text-start mx-2">
            <span class="fw-medium">{{ follower.name }}</span>
            <br>
            <span class="fw-light mf">{{ follower.location }}</span>
          </div>

          <div class="ms-auto">
            <button class="btn confirm-btn m-1" @click="removeFollower(follower.name)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFollower',
  data() {
    return {
      searchQuery: "",
      followerId: "",
      followers: [
        { id: 1, name: 'Joan Andrews', location: 'Berlin', image: require('../../assets/user1.jpg') },
        { id: 2, name: 'Marie Lucas', location: 'Krakow', image: require('../../assets/user2.jpg') },
        { id: 3, name: 'Brandon Cook', location: 'Las Vegas', image: require('../../assets/user3.jpg') },
        { id: 4, name: 'Victoria Henderson', location: 'Hamburg', image: require('../../assets/user4.jpg') },
        { id: 5, name: 'Kelly Grand', location: 'Ho Chi Minh City', image: require('../../assets/user5.jpg') },
        { id: 6, name: 'Julie Stanley', location: 'Melbourne', image: require('../../assets/user1.jpg') },
        { id: 7, name: 'Joan Pearson', location: 'Vancouver', image: require('../../assets/user2.jpg') },
        { id: 8, name: 'Barbara Clark', location: 'Wellington', image: require('../../assets/user3.jpg') },
        { id: 9, name: 'Vincent Matthews', location: 'Vincent Matthews', image: require('../../assets/user4.jpg') },
        { id: 10, name: 'Alan James', location: 'Naples', image: require('../../assets/user5.jpg') },
      ],
    };
  },
  computed: {
    filteredFollowers() {
      const query = this.searchQuery.toLowerCase();
      return this.followers.filter(
        follower => follower.name.toLowerCase().includes(query) || follower.location.toLowerCase().includes(query)
        );
    }
  },
  methods: {
    removeFollower(followerId) {
      alert("Successfully removed " + followerId)
    },
  },
};
</script>

<style scoped>
@media (min-width: 768px) and (max-width: 992px) {
  followers-list{
    display: block;
  }
}
</style>