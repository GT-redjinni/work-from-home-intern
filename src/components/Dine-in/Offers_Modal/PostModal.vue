<template>
    <!-- Post modal -->
    <div class="modal fade" id="postModal" tabindex="-1" aria-labelledby="postModalLabel" aria-hidden="true" >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header" style="background: #EB0E19;">
                    <h5 class="modal-title text-white" id="postModalLabel">Select Date & Time</h5>
                    <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="contanier">
                        <div class="text-center">
                            <img src="../../../assets/about-logo.jpg" alt="" height="200px" width="240px">
                        </div>
                        <div class="p-5">
                            <label for="cp" class="cp text-desc font-400">Date</label>
                            <div class="input-group mb-3 border-bottom rounded-3 border-dark">
                                <input type="date" class="form-control" style="border: none;">
                            </div>
                            <label for="cp" class="cp text-desc font-400">Time</label>
                            <div class="input-group mb-3 border-bottom rounded-3 border-dark">
                                <input type="time" class="form-control" style="border: none;">
                            </div>
                            <label for="cp" class="cp text-desc font-400">No of Members</label>
                            <div class="input-group mb-3 border-bottom rounded-3 border-dark">
                                <input type="number" class="form-control" style="border: none;">
                            </div>
                            <br>
                            <button class="confirm-btn w-100 p-2 mt-0 text-center" data-bs-toggle="modal" data-bs-target="#bookingConfirmModal">Book Table</button>
                        </div>
                        <div class="text-center">
                        </div>
                        </div>
                  </div>
                </div>
              </div>
        </div>
        <ConfirmModal/>
</template>

<script>
import ConfirmModal from './ConfirmModal.vue';
    export default {
        name:'PostModal',
        components:{
          ConfirmModal
        },
    }
</script>

<style scoped>

</style>