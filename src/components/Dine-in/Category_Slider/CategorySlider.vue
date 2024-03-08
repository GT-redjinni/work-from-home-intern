<template>
  <div class="container mt-2">
    <div class="d-flex overflow-auto">
      <button v-for="(category) in categories" :key="category.id" @click="selectCategory(category)"
        class="category-button text-center">
        <img :src="category.catImg" alt="" height="50px" width="50px" class="p-1"
          :class="{ 'selected-category': selectedCategory === category }" />
        <br />
        {{ category.cat }}
      </button>
    </div>
  </div>
  <div class="container mt-2 mb-1">
    <div class="heading text-start ms-1 mt-3 mb-3">
      Top Brands For You
    </div>
  </div>
  <component :is="selectedCategory.cat + 'Carousel'" />
</template>

<script>
import AllCarousel from '../Category_Slider/AllCarousel.vue';
import GroceryCarousel from '../Category_Slider/GroceryCarousel.vue';
import DairyCarousel from '../Category_Slider/DairyCarousel.vue';
import GymCarousel from '../Category_Slider/GymCarousel.vue';
import BakeryCarousel from '../Category_Slider/BakeryCarousel.vue';
import CafeCarousel from '../Category_Slider/CafeCarousel.vue';
import RestaurantCarousel from '../Category_Slider/RestaurantCarousel.vue';
import IcecreamCarousel from '../Category_Slider/IcecreamCarousel.vue';
import SalonCarousel from '../Category_Slider/SalonCarousel.vue';
import FootwearCarousel from '../Category_Slider/FootwearCarousel.vue';
import ClothesCarousel from '../Category_Slider/ClothesCarousel.vue';
import NewCarousel from '../Category_Slider/NewCarousel.vue';

export default {
  name: 'CategorySlider',
  components: {
    AllCarousel,
    GroceryCarousel,
    DairyCarousel,
    GymCarousel,
    BakeryCarousel,
    CafeCarousel,
    RestaurantCarousel,
    IcecreamCarousel,
    SalonCarousel,
    FootwearCarousel,
    ClothesCarousel,
    NewCarousel,
  },
  data() {
    return {
      categories: [
        { id: 1, cat: 'All', catImg: require('../../../assets/all-icon.png') },
        { id: 2, cat: 'Grocery', catImg: require('../../../assets/grocery-icon.png') },
        { id: 3, cat: 'Dairy', catImg: require('../../../assets/dairy-icon.png') },
        { id: 4, cat: 'Gym', catImg: require('../../../assets/gym-icon.png') },
        { id: 5, cat: 'Bakery', catImg: require('../../../assets/bakery-icon.png') },
        { id: 6, cat: 'Cafe', catImg: require('../../../assets/cafe-icon.png') },
        { id: 7, cat: 'Restaurant', catImg: require('../../../assets/restaurant-icon.png') },
        { id: 8, cat: 'Icecream', catImg: require('../../../assets/icecream-icon.png') },
        { id: 9, cat: 'Salon', catImg: require('../../../assets/salon-icon.png') },
        { id: 10, cat: 'Footwear', catImg: require('../../../assets/footwear-icon.png') },
        { id: 11, cat: 'Clothes', catImg: require('../../../assets/clothes-icon.png') },
        { id: 12, cat: 'New', catImg: require('../../../assets/new-icon.png') },
      ],
      selectedCategory: { id: 1, cat: 'All', catImg: require('../../../assets/all-icon.png') },
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  background: transparent;
}

.d-flex {
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: thin;
}

.category-button {
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  mix-blend-mode: darken;
}

img {
  background: white;
  box-shadow: 0px 2px 6px #00000029;
  border-radius: 10px;
}

.selected-category {
  border: 2px solid red;
}

.heading {
  display: flex;
  justify-content: space-around;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  position: relative;
  column-gap: .5rem;
  font-size: 2.2rem; 
  color: #585858;
}

.heading::after {
  content: "";
  height: 1px;
  background-color: black;
  display: block;
  position: relative;
  width: 72%;
}

@media (max-width: 576px) {
    .heading{
      font-size: 1.3rem;
      margin-left: 10%;
      column-gap: .1rem;
    }
    .heading::after {
      content: "";
      height: 1px;
      background-color: black;
      display: block;
      position: relative;
      width: 48%;
    }
}
@media (min-width: 576px) and (max-width: 768px) {
    .heading{
      font-size: 1.8rem;
      margin-left: 10%;
      column-gap: .1rem;
    }
    .heading::after {
      content: "";
      height: 1px;
      background-color: black;
      display: block;
      position: relative;
      width: 48%;
    }
}
@media (min-width: 768px) and (max-width: 992px) {
    .heading{
      font-size: 1.4rem;
      margin-left: 10%;
      column-gap: .1rem;
    }
    .heading::after {
      content: "";
      height: 1px;
      background-color: black;
      display: block;
      position: relative;
      width: 70%;
    }
}
</style>
