<template>
    <button class="btn btn-danger elite-btn text-subheading font-600 w-100 rounded-3" data-bs-toggle="modal" data-bs-target="#eliteButton">
        MAKE ELITE ACCOUNT
    </button>

<div class="modal modal-lg fade" id="eliteButton" data-bs-keyboard="false" tabindex="-1" aria-labelledby="eliteButtonLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
    <div class="modal-header">
  <h1 class="modal-title fs-5" id="eliteButtonLabel">Sign Up as Elite Account</h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<div class="container">
  <div class="row">
    <div class="col-6">
        <div class="image">
        <img src="../../assets/burger-modal.jpg" alt="" width=100% />
        <div class="img-text">
            <h1>Elite Button</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ex animi tempora laboriosam esse quae ratione natus illum dolorem inventore voluptas nisi, impedit necessitatibus quia officia beatae. Eligendi, accusantium dolorem.</p>
        </div>
        </div>
    </div>
    <div class="col-6 align-self-center"> 
        <div class="input-group mb-3 border-bottom border-danger">
  <input type="text" class="form-control" placeholder="Business Type" style="border: none;">
  <button class="btn  dropdown-toggle" data-bs-toggle="dropdown"></button>
  <!-- <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" href="#">Action</a></li>
  </ul> -->
  </div>

  <div class="input-group mb-3 border-bottom border-dark">
  <input type="text" class="form-control" placeholder="Business Name" style="border: none;">
  <button class="btn  dropdown-toggle" data-bs-toggle="dropdown"></button>
  <!-- <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" href="#">Action</a></li>
  </ul> -->
  </div>

  <div class="input-group mb-3 border-bottom border-dark">
  <input type="text" class="form-control" placeholder="Password" style="border: none;">
  </div>
  <div class="input-group mb-3 border-bottom border-dark">
  <input type="text" class="form-control" placeholder="Confirm Password" style="border: none;">
  </div>

  <div class="row mb-3">
                        <div class="col">
                            <div class="input-group border-bottom border-dark">
                                <input type="number" class="form-control" placeholder="GST No."
                                    style="border: none;">
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group border-bottom border-dark">
                                <input type="number" class="form-control" placeholder="Mobile No."
                                    style="border: none;">
                            </div>
                        </div>
                    </div>

  <div class="input-group mb-3 border-bottom border-dark">
  <input type="text" class="form-control" placeholder="Amount I Pay" style="border: none;">
  <button class="btn  dropdown-toggle" data-bs-toggle="dropdown"></button>
  <!-- <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" href="#">Action</a></li>
  </ul> -->
  </div>

  <p class="text-start" style="font-size: 10px;" >I have coupon code (The referral code you entered is invalid)</p>
  <div class="input-group mb-3 border-bottom border-dark">
  <input type="text" class="form-control" placeholder="I have coupon code" style="border: none;">
  <button class="btn btn-primary btn-sm rounded-4">Apply</button>
  <!-- <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" href="#">Action</a></li>
  </ul> -->
  </div>

  <div class="input-group mb-3 border-bottom border-dark">
  <input type="text" class="form-control" placeholder="Payable Amount" style="border: none;">
  </div>
  
  <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input bg-danger" id="termsAndPrivacy">
      <p class="text-start">By creating an account you agree our Terms & Privacy </p>
    </div>
      
    </div>          
  </div>  
</div>

</div>
<div class="modal-footer">
  <button class="btn btn-danger elite-btn text-subheading font-400 w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      PAYABLE AMOUNT
  </button>
</div>

</div>
</div>
</div>
</template>

<script>
export default {
    name:'EliteButton'
}
</script>

<style scoped>
.elite-btn{
background: #eb0e19;
color: #FFFFFF;
opacity: 1;
padding: 8px 10px;
}

.modal-content {
display: flex;
}
.image{
    position: relative;
    width: 100%;
}
.img-text{
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    color: white;
    transform: translate(-50%, -50%);
}

input:focus {
    outline: none;
    box-shadow: none;
}
</style>