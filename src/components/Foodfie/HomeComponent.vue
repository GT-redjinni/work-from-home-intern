<template>
    <div class="container">
      <div class="row text-center">
        <div class="col-12 col-md-3 mt-3 fixed-column">
          <ProfileComponent />
        </div>
        <div class="col-12 col-md-6 mt-3 scrollable-column">
          <PostComponent />
        </div>
        <div class="col-12 col-md-3 mt-3 fixed-column">
          <SuggestionComponent />
        </div>
      </div>
    </div>
  </template>

<script>

import ProfileComponent from '../Foodfie/ProfileComponent.vue';
import PostComponent from '../Foodfie/PostComponent.vue';
import SuggestionComponent from '../Foodfie/SuggestionComponent.vue';
export default{
    name:'HomeComponent',
    components:{
        ProfileComponent,
        PostComponent,
        SuggestionComponent
    }
}
</script>

<style scoped>
.fixed-column {
  position: sticky;
  top: 0;
}

.scrollable-column {
  overflow-y: scroll;
  max-height: 120vh;
}
.scrollable-column::-webkit-scrollbar {
  display: none;
}
</style>