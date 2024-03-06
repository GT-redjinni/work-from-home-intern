<template>
  <div class="container border bg-white rounded-2">
    <div class="d-flex mt-2">
      <span class="text-start text-subheading font-600 grey-color" style="border-bottom: 2px solid #585858;">Request</span>
      <span class="ms-auto"><input class="form-control me-2" v-model="searchQuery" type="search" placeholder="Search" aria-label="Search"></span>
    </div>
    <div class="row mt-3 ms-2 me-2 mb-3">
      <div v-for="request in filteredRequests" :key="request.id" class="col-sm-12 col-md-12 col-lg-6 rounded-3 mt-2 mb-2 p-2" style="border: .5px solid #787878;">
        <div class="d-flex mt-1 mb-1">
          <img :src="request.image" alt="" height="43px" width="43px" class="img border rounded-circle">
          <div class="text-start mx-2">
            <span class="fw-medium">{{ request.name }}</span>
            <br>
            <span class="fw-light mf">{{ request.location }}</span>
          </div>

          <div class="ms-auto mt-auto">
            <button class="btn confirm-btn m-1" @click="acceptRequest(request.name)">Accept</button>
            <button class="btn decline-btn m-1" @click="declineRequest(request.name)">Decline</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserRequest',
  data() {
    return {
      searchQuery: "",
      userId:'',
      requests: [
        { id: 1, name: 'Joan Andrews', location: 'Berlin', image: require('../../assets/user2.jpg') },
        { id: 2, name: 'Marie Lucas', location: 'Krakow', image: require('../../assets/user5.jpg') },
        { id: 3, name: 'Barbara Clark', location: 'Wellington', image: require('../../assets/user3.jpg') },
        { id: 4, name: 'Terry Ellis', location: 'Lagos', image: require('../../assets/user4.jpg') },
        { id: 5, name: 'Alan James', location: 'New York', image: require('../../assets/user4.jpg') },
        { id: 6, name: 'Kelly Grand', location: 'Ho Chi Minh', image: require('../../assets/user5.jpg') },
        { id: 7, name: 'Julie Stanley', location: 'Melbourne', image: require('../../assets/user1.jpg') },
        { id: 8, name: 'Joan Pearson', location: 'Vancouver', image: require('../../assets/user2.jpg') },
        { id: 9, name: 'Brandon Cook', location: 'Las Vegas', image: require('../../assets/user3.jpg') },
        { id: 10, name: 'Megan Hart', location: 'Seville', image: require('../../assets/user5.jpg') },
        // Add more request users as needed
      ],
    };
  },
  computed: {
    filteredRequests() {
      const query = this.searchQuery.toLowerCase();
      return this.requests.filter(
        request => request.name.toLowerCase().includes(query) || request.location.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    acceptRequest(userId) {
      alert("You are now following: "+userId)
    },
    declineRequest(userId) {
      alert("Removed request of: "+userId)
    },
  },
};
</script>

<style scoped>
</style>
