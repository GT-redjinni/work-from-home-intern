<template>
    <div class="container">
        <div class="row text-center">
            <div class="col-12 col-md-3 mt-3"><DineinBurger/></div>
            <div class="col-12 col-md-6 mt-3"><CreatePost/></div>
            <div class="col-12 col-md-3 mt-3"><DineinSalad/></div>
        </div>
    </div>

    <CategorySlider/>

<div class="container">
    <div class="heading text-start ms-3 mt-2 mb-2" style="font-size: 32px;color: #585858;">
          Top Brands For You ----------------------------------------------------------------------------
    </div>
</div>

<BrandCarousel/>

<div class="container">
    <div class="heading text-start ms-2 mb-3" style="font-size: 32px;color: #585858;">  Offers Near You-------------------------------------------------------------------------Filter <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg></div>
    <OffersSection/>
</div>
</template>

<script>
import CategorySlider from '../Dine-in/CategorySlider.vue';
import DineinBurger from './DineinBurger.vue';
import DineinSalad from './DineinSalad.vue';
import CreatePost from '../Foodfie/CreatePost.vue';
import BrandCarousel from '../Dine-in/BrandsCarousel.vue';
import OffersSection from '../Dine-in/OffersSection.vue';
    export default {
    name: 'DineinComponent',
    components: { 
        CategorySlider,
        DineinBurger,
        DineinSalad,
        CreatePost,
        BrandCarousel,
        OffersSection,
     }
}
</script>

<style scoped>

    
</style>