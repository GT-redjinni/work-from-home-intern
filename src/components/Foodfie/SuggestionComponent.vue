<template>
    <SuggestionFollow/>
    
    <SuggestionIcecream/>
    
    <SuggestionAbout/>    
</template>

<script>
import SuggestionFollow from '../Foodfie/SuggestionFollow.vue';
import SuggestionIcecream from '../Foodfie/SuggestionIcecream.vue'
import SuggestionAbout from '../Foodfie/SuggestionAbout.vue';
    export default {
        name:'SuggestionComponent',
        components:{
            SuggestionFollow,
            SuggestionIcecream,
            SuggestionAbout,
        }
    }
</script>

<style scoped>

</style>