<template>
  <div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header text-white" style="background: #EB0E19;">
          <h5 class="modal-title" id="filterModalLabel">Filter</h5>
          <div class="text-white" role="button" data-bs-dismiss="modal" aria-label="Close">Save & View</div>
        </div>
        <div class="modal-body">
          <div class="input-group rounded-3 form-control">
            <span class="input-group-text border-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
            <input type="search" class="form-control rounded-start border-0" v-model="searchQuery" placeholder="Search"
              aria-label="Search" aria-describedby="search-addon" />
          </div>
          <div class="container p-1">
            <div v-for="city in filteredCities" :key="city.id" class="form-check border-bottom border-light-subtle mt-2">
              <input class="form-check-input custom-checkbox" type="checkbox" v-model="isChecked">
              <label class="form-check-label text-subheading font-600 grey-color ms-2 mb-2" for="flexCheckDefault">{{
                city.cityName }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filterModal',
  data() {
    return {
      cities: [
        { id: 1, cityName: 'All', isChecked: false },
        { id: 2, cityName: 'Agartala', isChecked: false },
        { id: 3, cityName: 'Agra', isChecked: false },
        { id: 4, cityName: 'Agumbe', isChecked: false },
        { id: 5, cityName: 'Ahmedabad', isChecked: false },
        { id: 6, cityName: 'Aizawl', isChecked: false },
        { id: 7, cityName: 'Ajmer', isChecked: false },
        { id: 8, cityName: 'Allahabad', isChecked: false },
        { id: 9, cityName: 'Alleppay', isChecked: false },
        { id: 10, cityName: 'Ayodhya', isChecked: false },
        { id: 11, cityName: 'Almora', isChecked: false },
      ],
      searchQuery: '',
    };
  },
  computed: {
    filteredCities() {
      const query = this.searchQuery.toLowerCase();
      return this.cities.filter(city => city.cityName.toLowerCase().includes(query));
    },
  },
}
</script>

<style scoped>
.custom-checkbox {
  width: 1.2em;
  height: 1.2em;
  background-color: #C5C5C5;
  border-color: #C5C5C5;
}

.custom-checkbox:checked {
  background-color: #EB0E19;
  border-color: #EB0E19;
}</style>