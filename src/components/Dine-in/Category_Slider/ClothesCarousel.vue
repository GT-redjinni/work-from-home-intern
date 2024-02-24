<template>
    <div class="container">
    <swiper ref="{swiperRef}" :slidesPerView="4" :spaceBetween="10" :navigation="true" :modules="modules" :breakpoints="{375:{slidesPerView: 1,},768: {slidesPerView: 2,},1024: {slidesPerView: 3,},1200: {slidesPerView: 4,}
      }" class="mySwiper">
        <swiper-slide v-for="data in brandsData" :key="data.id">
          <div class="text-center">
            <img :src="data.img" alt="" height="200px" width="200px" class="responsive-image">
            <br>
            <p class="text-heading font-400 mt-2 fw-normal">{{ data.name }}</p>
          </div>
        </swiper-slide>
    </swiper>
  
    <p class="append-buttons"></p>
  </div>
  </template>
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import {  Navigation } from 'swiper/modules';
  export default {
    name: 'ClothesCarousel',
    components: {
        Swiper,
        SwiperSlide,
    },
    data(){
        return{
            brandsData:[
                {id:1,name:'Superdry',img:require('../../../assets/superdry-logo.jpg')},
                {id:2,name:'Jack & Jones',img:require('../../../assets/j&j-logo.jpg')}
            ]
        }
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
  };
  </script>
  
  <style scoped>
  img {
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 3px 6px #00000029;
  }
  .responsive-image {
  max-width: 100%; 
  height: auto; 
  }
  ::v-deep .swiper-button-next::after{
    background: lightgray;
    color: whitesmoke;
    content: 'next';
  }
  ::v-deep .swiper-button-prev {
    background: lightgray;
    color: whitesmoke;
    content: 'prev';
  }
  </style>
  