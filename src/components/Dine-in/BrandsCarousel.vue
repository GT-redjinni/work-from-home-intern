<template>
  <div class="container mt-2 mb-3">
    <div class="row">
      <div class="col-12">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex justify-content-between">
                <div class="card">
                  <img src="../../assets/vijaydairy-logo.png" alt="...">
                  <!-- <div class="card-body">
                    <h5 class="card-title">Vijay Dairy</h5>
                  </div> -->
                </div>
                <div class="card">
                  <img src="../../assets/goldycakes-logo.png" class="card-img-top" alt="...">
                  <!-- <div class="card-body">
                    <h5 class="card-title">Goldy Cakes</h5>
                  </div> -->
                </div>
                <div class="card">
                  <img src="../../assets/unclesammy-logo.jpg" class="card-img-top" alt="...">
                  <!-- <div class="card-body">
                    <h5 class="card-title">Uncle Sammy</h5>
                  </div> -->
                </div>
                <div class="card">
                  <img src="../../assets/gentsalon-logo.jpg" class="card-img-top" alt="...">
                  <!-- <div class="card-body">
                    <h5 class="card-title">Gents Salon</h5>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex justify-content-between">
                <div class="card">
                  <img src="../../assets/superdry-logo.jpg" class="card-img-top" alt="...">
                  <!-- <div class="card-body">
                    <h5 class="card-title">Levi's</h5>
                  </div> -->
                </div>
                <div class="card">
                  <img src="../../assets/j&j-logo.jpg" class="card-img-top" alt="...">
                  <!-- <div class="card-body">
                    <h5 class="card-title">Gents Salon</h5>
                  </div> -->
                </div>
                <div class="card">
                  <img src="../../assets/celio-logo.jpg" class="card-img-top" alt="...">
                  <!-- <div class="card-body">
                    <h5 class="card-title">Levi's</h5>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-red bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandsCarousel',
};
</script>

<style scoped>
  /* .card {
    margin: 0.5rem;
    border-radius: 5px;
    box-shadow: 2px 6px 8px 0 grey;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 200px;
    width: 250px;
  } */
  /* .card-title {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  } */
  .card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.15);
  margin: 1rem;
  height: 250px; 
  width: 300px; 
  overflow: hidden;
  }
  .card-img-top {
    object-fit: cover;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .carousel-inner {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
  }
  .card-container {
    display: flex;
    flex-wrap: nowrap;
  }
</style>
