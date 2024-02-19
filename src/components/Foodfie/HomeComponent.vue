<template>
    <div class="container">
        <div class="row text-center">
            <div class="col-12 col-md-3 mt-3"><ProfileComponent/></div>
            <div class="col-12 col-md-6 mt-3"><PostComponent/></div>
            <div class="col-12 col-md-3 mt-3"><SuggestionComponent/></div>
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