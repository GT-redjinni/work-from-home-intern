<template>
    <div class="container mt-3 mb-1 p-4 border rounded-3 bg-white">
      <div class="col">
        <div class="d-flex justify-content-between p-1">
          <h5 class="text-start text-subheading">Recommended Offer Near You</h5>
          <p class="text-end text-desc font-400 grey-color">View All</p>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3 border rounded-3 mt-1 mb-1">
            <img src="../../assets/bk-logo.jpg" alt="Burger King" class="img-fluid card-img">
            <p class="text-subheading-2 font-500 grey-color mt-1 mb-2">Burger King</p>
            <button class="btn btn-danger confirm-btn btn-sm w-100 mb-1">Redeem Now</button>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 border rounded-3 mt-1 mb-1">
            <img src="../../assets/cc-logo.jpg" alt="Coffee Culture" class="img-fluid card-img">
            <p class="text-subheading-2 font-500 grey-color mt-1 mb-2">Coffee Culture</p>
            <button class="btn btn-danger confirm-btn btn-sm w-100 mb-1">Redeem Now</button>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 border rounded-3 mt-1 mb-1">
            <img src="../../assets/starbucks-logo.jpg" alt="Starbucks" class="img-fluid card-img">
            <p class="text-subheading-2 font-500 grey-color mt-1 mb-2">Starbucks</p>
            <button class="btn btn-danger confirm-btn btn-sm w-100 mb-1">Redeem Now</button>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 border rounded-3 mt-1 mb-1">
            <img src="../../assets/bk-logo.jpg" alt="Burger King" class="img-fluid card-img">
            <p class="text-subheading-2 font-500 grey-color mt-1 mb-2">Burger King</p>
            <button class="btn btn-danger confirm-btn btn-sm w-100 mb-1">Redeem Now</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecommendPost',
  }
  </script>
  
  <style scoped>
  .card-img {
    height: 150px; 
    width: 100%; 
  }
  .col-sm-3 col-md-3 col-lg-6 {
    margin-bottom: 1px;
  }
  </style>
  