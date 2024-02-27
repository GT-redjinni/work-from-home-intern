<template>
    <div class="container">
              <p class="text-start">Title</p>
              <div class="input-group mb-3 border-bottom border-danger">
                <input type="text" class="form-control" placeholder="Title" style="border: none;">
              </div>
              <div class="form-floating border border-secondary mb-3">
                <textarea class="form-control" placeholder="Whats on your mind, Rakesh ?" id="floatingTextarea2"
                  style="height: 100px">Whats on your mind, Rakesh ?</textarea>
              </div>
              <div class="input-group mb-3">
                <input type="file" id="file" style="display: none;" />
                <label for="file">
                  <div class="align-items-center mb-3 mt-3">
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
        name:'CreatepostTab'
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
</style>