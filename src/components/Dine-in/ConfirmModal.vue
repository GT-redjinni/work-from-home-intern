<template>
    <div class="modal fade" id="bookingConfirmModal" tabindex="-1" aria-labelledby="bookingConfirmModalLabel" aria-hidden="true" >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header" style="background: #EB0E19;">
                    <h5 class="modal-title text-white" id="bookingConfirmModal">Booking Confirm</h5>
                    <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="contanier">
                        <div class="text-center">
                            <img src="../../assets/about-logo.jpg" alt="" height="200px" width="240px">
                        </div>
                        <div class="p-5">
                            <div class="row">
                                <div class="col-6 p-1 text-start text-subheading font-600 grey-color">Name</div>
                                <div class="col-6 p-1 text-end text-subheading font-400 grey-color">Jacky Patel</div>
                                <div class="col-6 p-1 text-start text-subheading font-600 grey-color">Email Id</div>
                                <div class="col-6 p-1 text-end text-subheading font-400 grey-color">jackyp12@gmail.com</div>
                                <div class="col-6 p-1 text-start text-subheading font-600 grey-color">Mobile No</div>
                                <div class="col-6 p-1 text-end text-subheading font-400 grey-color">8511430509</div>
                                <div class="col-6 p-1 text-start text-subheading font-600 grey-color">No Of Member</div>
                                <div class="col-6 p-1 text-end text-subheading font-400 grey-color">5</div>
                                <div class="col-6 p-1 text-start text-subheading font-600 grey-color">Date</div>
                                <div class="col-6 p-1 text-end text-subheading font-400 grey-color">5 Jan</div>
                                <div class="col-6 p-1 text-start text-subheading font-600 grey-color">Time</div>
                                <div class="col-6 p-1 text-end text-subheading font-400 grey-color">12:30 PM</div>
                            </div>
                            <br>
                            <Button class="confirm-btn w-100 p-2 mt-2 text-center" data-bs-toggle="modal" data-bs-target="#thankyouModal">Book Table</Button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
</template>

<script>
    export default {
        name:'ConfirmModal'
    }
</script>

<style scoped>

</style>