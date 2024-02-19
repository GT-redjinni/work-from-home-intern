<template>
  <div class="container mt-2">
    <div class="d-flex overflow-auto">
        <button class="category-button text-center"><img src="../../assets/all-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>All</button>
        <button class="category-button text-center"><img src="../../assets/grocery-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>Grocery</button>
        <button class="category-button text-center"><img src="../../assets/dairy-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>Dairy</button>
        <button class="category-button text-center"><img src="../../assets/gym-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>Gym</button>
        <button class="category-button text-center"><img src="../../assets/bakery-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>Bakery</button>
        <button class="category-button text-center"><img src="../../assets/cafe-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>Cafe</button>
        <button class="category-button text-center"><img src="../../assets/restaurant-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>Restaurant</button>
        <button class="category-button text-center"><img src="../../assets/icecream-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>Ice-Cream</button>
        <button class="category-button text-center"><img src="../../assets/salon-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>Salon</button>
        <button class="category-button text-center"><img src="../../assets/footwear-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>Footwear</button>
        <button class="category-button text-center"><img src="../../assets/clothes-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>Clothes</button>
        <button class="category-button text-center"><img src="../../assets/new-icon.png" alt="" height="50px" width="50px" class="bg-white p-1"> <br>New</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategorySlider',
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
</style>
