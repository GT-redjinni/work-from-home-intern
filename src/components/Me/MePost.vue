<template>
  <div class="card">
    <div class="card-header border-bottom border-dark bg-white">
              <p>
                <span class="float-start text-subheading font-600 grey-color">
                  125 Post
                </span>
                <span class="float-end text-desc font-400 grey-color">
                  See All Post
                </span>
              </p>
              </div>
              
              <div class="card-body">
                <div class="row">
                    <div class="col-4"><img src="../../assets/ppost-1.jpg" class="border border-dark rounded w-100" height="70px" width="70px"></div>
                    <div class="col-4"><img src="../../assets/ppost-2.jpg" class="border border-dark rounded w-100" height="70px" width="70px"></div>
                    <div class="col-4"><img src="../../assets/ppost-3.jpg" class="border border-dark rounded w-100" height="70px" width="70px"></div>
                </div>
                <div class="row mt-2">
                    <div class="col-4"><img src="../../assets/ppost-4.jpg" class="border border-dark rounded w-100" height="70px" width="70px"></div>
                    <div class="col-4"><img src="../../assets/ppost-5.jpg" class="border border-dark rounded w-100" height="70px" width="70px"></div>
                    <div class="col-4"><img src="../../assets/ppost-6.jpg" class="border border-dark rounded w-100" height="70px" width="70px"></div>
                </div>
              </div>
            </div>
    </template>
    
    <script>
    export default {
        name:'MePost'
    }
    </script>
    
    <style scoped>
    img{
      object-fit: cover;
    }
    </style>