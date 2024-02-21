<template>
    <div class="modal fade" id="thankyouModal" tabindex="-1" aria-labelledby="thankyouModalLabel" aria-hidden="true" >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="contanier">
                        <div class="text-center mt-4 mb-1">
                                <img src="../../assets/thankyou-img.png" alt="" height="200px" width="240px">
                            </div>
                        <div class="p-5">
                            <Button class="confirm-btn w-100 p-2 mt-2 text-center" data-bs-dismiss="modal" aria-label="Close">GO TO HOME PAGE</Button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
</template>

<script>
    export default {
        name:'ThankyouModal'
    }
</script>

<style lang="scss" scoped>

</style>