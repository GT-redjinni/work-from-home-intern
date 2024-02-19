<template>
    <div class="container mt-3 mb-1 p-4 border rounded-3 bg-white">
      <div class="col">
        <div class="d-flex justify-content-between p-1">
          <h5 class="text-start">Recommended Offer Near You</h5>
          <p class="text-end">View All</p>
        </div>
        <div class="row">
          <div class="col-3 border rounded-3">
            <img src="../../assets/bk-logo.jpg" alt="Burger King" class="img-fluid card-img">
            <p>Burger King</p>
            <button class="btn btn-danger confirm-btn btn-sm w-100 mb-1">Redeem Now</button>
          </div>
          <div class="col-3 border rounded-3">
            <img src="../../assets/cc-logo.jpg" alt="Coffee Culture" class="img-fluid card-img">
            <p>Coffee Culture</p>
            <button class="btn btn-danger confirm-btn btn-sm w-100 mb-1">Redeem Now</button>
          </div>
          <div class="col-3 border rounded-3">
            <img src="../../assets/starbucks-logo.jpg" alt="Starbucks" class="img-fluid card-img">
            <p>Starbucks</p>
            <button class="btn btn-danger confirm-btn btn-sm w-100 mb-1">Redeem Now</button>
          </div>
          <div class="col-3 border rounded-3">
            <img src="../../assets/bk-logo.jpg" alt="Burger King" class="img-fluid card-img">
            <p>Burger King</p>
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
  p{
    color: #787878;
    font-size: 15px;
    font-weight: 500;
  }
  .col-3 {
    margin-bottom: 1px;
  }
  </style>
  