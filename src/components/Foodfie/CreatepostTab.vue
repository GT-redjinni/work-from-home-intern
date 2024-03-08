<template>
    <div class="container">
              <p class="text-start">Title</p>
              <div class="input-group mb-3 border-bottom border-danger">
                <input type="text" class="form-control" placeholder="Title" style="border: none;">
              </div>
              <div class="border border-dark-subtle rounded-2 mb-3">
                <textarea class="form-control" placeholder="Whats on your mind,Rakesh?" style="height: 100px"></textarea>
              </div>
              <div class="input-group mb-3">
                <input type="file" id="file" style="display: none;" multiple />
                <label for="file">
                  <div v-if="selectedPhotos.length > 0">
                <h4>Selected Photos:</h4>
                <div v-for="(photo, index) in selectedPhotos" :key="index">
                  <img :src="URL.createObjectURL(photo)" alt="Selected Photo" class="img-fluid" height="100px" width="100px">
                </div>
              </div>
                  <div v-else-if="selectedPhotos.length <= 0" class="align-items-center mb-3 mt-3">
                    <img src="../../assets/photo-icon.png" alt="" class="img-fluid" height="30px" width="30px">
                    <h5>Add Photo</h5>
                    <p>or drag & drop</p>
                  </div>
                </label>
              </div>
              
              <div class="row">
                <div class="col-6"><button class="btn border border-secondary-subtle w-100 btn-lg" data-bs-toggle="modal"
                    data-bs-target="#tagpeopleModal">
                    <img src="../../assets/tagpeople-icon.png" alt="" height="25px" width="25px">
                    Tag People
                  </button>
                </div>
                <div class="col-6"><button class="btn border border-secondary-subtle w-100 btn-lg">
                    <img src="../../assets/location-icon.png" alt="" height="25px" width="25px">
                    Check In
                  </button>
                </div>
              </div>
            </div>
</template>

<script>
    export default {
        name:'CreatepostTab',
        data() {
          return {
            selectedPhotos: [],
          };
        },
        methods: {
          handleFileChange(event) {
            this.selectedPhotos = [];
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
              this.selectedPhotos.push(files[i]);
            }
          },
        },
    }
</script>

<style scoped>
form {
  background: #F2F2F2;
  width: 600px;
  height: 55px;
  display: flex;
}

form input {
  flex: 1;
  border: none;
  outline: none;
  background: #F2F2F2;
}

label {
  height: 150px;
  width: 100%;
  border: 3px dashed lightgray;
  border-radius: 6px;
  cursor: pointer;
}
input:focus {
    outline: none;
    box-shadow: none;
}
</style>