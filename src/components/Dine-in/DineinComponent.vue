<template>
    <div class="container">
        <div class="row text-center">
            <div class="col-sm-12 col-md-3 col-lg-3 mt-3"><DineinBurger/></div>
            <div class="col-sm-12 col-md-6 col-lg-6 mt-3"><CreatePost/></div>
            <div class="col-sm-12 col-md-3 col-lg-3 mt-3"><DineinSalad/></div>
        </div>
    </div>
    <CategorySlider/>
    <div class="container">
        <OffersSection/>
    </div>
    <filterModal/>
</template>

<script>
import CategorySlider from '../Dine-in/Category_Slider/CategorySlider.vue';
import DineinBurger from './DineinBurger.vue';
import DineinSalad from './DineinSalad.vue';
import CreatePost from '../Foodfie/CreatePost.vue';
import OffersSection from '../Dine-in/OffersSection.vue';
import filterModal from './filterModal.vue';
    export default {
    name: 'DineinComponent',
    components: { 
        CategorySlider,
        DineinBurger,
        DineinSalad,
        CreatePost,
        OffersSection,
        filterModal,
     }
}
</script>

<style scoped>
 
</style>