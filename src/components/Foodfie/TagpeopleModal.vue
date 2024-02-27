<template>
    <div class="modal fade" id="tagpeopleModal" tabindex="-1" aria-labelledby="tagpeopleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header text-white" style="background: #EB0E19;">
            <h5 class="modal-title" id="tagpeopleModal">Tag People</h5>
            <button class="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="d-flex">
                <div class="input-group rounded-3 form-control">
                <span class="input-group-text border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </span>
                <input type="search" class="form-control border border-dark rounded-start border-0" v-model="searchQuery" placeholder="Search People"
                    aria-label="Search" aria-describedby="search-addon" />
                </div>
                <button class="btn-sm btn btn-primary rounded-3 text-white m-1">Done</button>
            </div>
            <div class="container p-2">
              <div v-for="people in filteredPeoples" :key="people.id" class="d-flex mt-3 form-check border-bottom border-secondary-subtle">
                    <img :src="people.img" alt="" height="43px" width="43px" class="img border rounded-circle">
                    <div class="text-start mx-2">
                    <div class="mb-2">
                        <span class="fw-normal">{{ people.Name }}</span>
                        <br>
                        <span class="fw-light">{{ people.Location }}</span>
                    </div>
                    </div>
                    <div class="ms-auto mt-2">
                        <input class="form-check-input custom-checkbox" type="checkbox" v-model="isChecked">  
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TagpeopleModal',
    data() {
      return {
        peopleData: [
          { id: 1, Name: 'Dorothy Young',Location:'Guadeloupe',img:require("../../assets/user1.jpg"), isChecked: false },
          { id: 2, Name: 'Aaron Clark',Location:'Portugal',img:require("../../assets/user2.jpg"), isChecked: false },
          { id: 3, Name: 'Randy Baker',Location:'Seychelles',img:require("../../assets/user3.jpg"), isChecked: false },
          { id: 4, Name: 'Timothy Boyd',Location:'Angola',img:require("../../assets/user4.jpg"), isChecked: false },
          { id: 5, Name: 'Dennis Gilbert',Location:'Turkey',img:require("../../assets/user5.jpg"), isChecked: false },
        ],
        searchQuery: '',
      };
    },
    computed: {
      filteredPeoples() {
        const query = this.searchQuery.toLowerCase();
        return this.peopleData.filter(people => people.Name.toLowerCase().includes(query));
      },
    },
  }
  </script>
  
  <style scoped>
  .custom-checkbox {
    width: 1.3em;
    height: 1.3em;
    background-color: #C5C5C5;
    border-color: #C5C5C5;
  }
  
  .custom-checkbox:checked {
    background-color: #EB0E19;
    border-color: #EB0E19;
  }</style>