<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div
          id="carouselExampleControls"
          class="carousel"
          slide”
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item" active”>
              <div class="row" row-cols-1 row-cols-md-5 g-4”>
                <div class="col">
                  <div class="card" h-100”>
                    <img src=“…/assets/vijaydairy-logo.png” class=“card-img-top”
                    alt=“…” height=“250px” width=“100px”>
                    <div class="card-body">
                      <h5 class="card-title">Vijay Dairy</h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card" h-100”>
                    <img src=“…/assets/goldycakes-logo.png” class=“card-img-top”
                    alt=“…” height=“250px” width=“100px”>
                    <div class="card-body">
                      <h5 class="card-title">Goldy Cakes</h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card" h-100”>
                    <img src=“…/assets/unclesammy-logo.jpg” class=“card-img-top”
                    alt=“…” height=“250px” width=“100px”>
                    <div class="card-body">
                      <h5 class="card-title">Uncle Sammy</h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card" h-100”>
                    <img src=“…/assets/gentsalon-logo.jpg” class=“card-img-top”
                    alt=“…” height=“250px” width=“100px”>
                    <div class="card-body">
                      <h5 class="card-title">Gents Salon</h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card" h-100”>
                    <img src=“…/assets/levis-logo.jpg” class=“card-img-top”
                    alt=“…” height=“250px” width=“100px”>
                    <div class="card-body">
                      <h5 class="card-title">Levi’s</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'BrandsCarousel' };
</script>

<style scoped>
.card {
  margin: 0 0.5em;
  border-radius: 5px;
  box-shadow: 2px 6px 8px 0 grey;
}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>
