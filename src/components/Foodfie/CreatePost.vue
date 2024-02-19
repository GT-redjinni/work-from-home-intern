<template>
   
<div id="createPost" class="container mb-3 border rounded-3 bg-white">
    <div class="col mb-3">
        <h5 class="text-start m-3">Create Post</h5>
    <form class="w-100 border rounded-3 ">
        <img src="../../assets/user-image.jpg" class="img-search rounded " />
        <input type="text" placeholder="What's on your mind, Rakesh?" data-bs-toggle="modal" data-bs-target="#gmModal"/>
    </form>
    <div class="options mt-3">
        <button type="button" class="option-button text-subheading ms-auto"><img src="../../assets/photo-icon.png" alt="photo" height="28px" width="28px"/> Photos </button>
        <button type="button" class="option-button text-subheading mx-auto"><img src="../../assets/hashtag-icon.png" alt="hashtag" height="26px" width="26px"/> Add Hashtags </button>
        <button type='button' class="option-button text-subheading me-auto"><img src="../../assets/location-icon.png" alt="location" height="28px" width="28px"/>  Location </button>
    </div>
</div>
</div>

  <div class="modal fade" id="gmModal" tabindex="-1" aria-labelledby="gmModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header text-white" style="background: #EB0E19;">
        <h5 class="modal-title" id="gmModalLabel">Create Post</h5>
        <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="d-flex mb-3">
                <img src="../../assets/follow-img.jpg" alt="" height="43px" width="43px" class="img border rounded-circle">
                <div class="text-start mx-2">
                    <p class="fw-normal name">Rajkumar Gupta</p>
                    <p class="fw-light mf"> 12 mutual friends</p>
                </div>
            </div>

            <div>
              <p class="text-start">Title</p>
              <div class="input-group mb-3 border-bottom border-danger">
              <input type="text" class="form-control" placeholder="Title" style="border: none;">
              </div>
            </div>
            <div class="form-floating border border-secondary mb-3">
            <textarea class="form-control" placeholder="Whats on your mind, Rakesh ?" id="floatingTextarea2" style="height: 100px">Whats on your mind, Rakesh ?</textarea>
            </div>
            <div class="input-group mb-3">
              <input type="file" id="file" style="display: none;"/>
              <label for="file">
                <div class="align-items-center mb-3 mt-3">
                  <img src="../../assets/photo-icon.png" alt="" class="img-fluid" height="30px" width="30px">
                  <h5>Add Photo</h5>
                  <p>or drag & drop</p>
                </div>
              </label>
            </div>
            <div class="row">
              <div class="col-6"><button class="btn border border-secondary-subtle w-100 btn-lg"><img src="../../assets/tagpeople-icon.png" alt="" height="25px" width="25px">Tag People</button></div>
              <div class="col-6"><button class="btn border border-secondary-subtle w-100 btn-lg"><img src="../../assets/location-icon.png" alt="" height="25px" width="25px">Check In</button></div>
            </div>
      </div>
      <div class="modal-footer">
      <button class="btn elite-btn w-100 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="background: #EB0E19;">
          POST
      </button>
    </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
    name: 'CreatePost'
}
</script>

<style scoped>
.options {
  display: flex; 
  justify-content: space-between; 
}
form{
    background: #F2F2F2;
    width: 600px;
    height: 55px;
    display: flex;
}
form input{
    flex: 1;
    border:none;
    outline: none;
    background: #F2F2F2;
}
form .img-search{
    align-self: center;
    height: 50px;
    width: 75px;
    padding: 10px 20px;
}
.option-button{
    background: transparent;
    border: none;
}
label{
  height: 150px;
  width: 100%;
  border: 3px dashed lightgray;
  border-radius: 6px;
  cursor: pointer;
}

</style>