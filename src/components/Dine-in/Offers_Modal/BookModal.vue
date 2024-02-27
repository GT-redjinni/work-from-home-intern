<template>
    <!-- Book table modal -->
    <div class="modal fade" id="bookModal" tabindex="-1" aria-labelledby="bookModalLabel" aria-hidden="true" > -->
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="d-flex">
                        <img src="../../../assets/rp-logo.png" class="border rounded-circle" alt="" height="75px" width="75px">
                        <div class="ms-3">
                            <span class="text-heading font-400 text-danger mt-2">Redprix</span>
                            <br>
                            <span class="text-desc font-400 grey-color mt-2">604, Luxuria Business hub, <br> vesu, surat-395004</span>
                        </div>
                    </div>
                    <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div v-for="review in reviews" :key="review.id" class="d-flex border-bottom mt-1 mb-3 p-2">
                            <div>
                            <img :src="review.img" class="border rounded-circle" alt="" height="50px" width="50px">
                            </div>
                            <div class="text-start mx-2">
                                <span class="fw-normal text-subheading">{{ review.name }}</span><span class="fw-light text-white bg-success ms-3">*****</span>
                                <br>
                                <span class="fw-light text-desc"> {{ review.desc }} </span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <Button class="decline-btn w-50 p-1 ps-1 pt-1 pe-1 text-center" data-bs-dismiss="modal" aria-label="Close">Cancel</Button>
                            <Button class="confirm-btn w-50 p-1 ps-1 pt-1 pe-1 text-center" data-bs-toggle="modal" data-bs-target="#postModal">Post</Button>
                        </div>
                </div>
                </div>
              </div>
        </div>
        <PostModal/>
</template>

<script>
import PostModal from './PostModal.vue'
    export default {
        name:'BookModal',
        components:{
          PostModal
        },
        data(){
            return{
                reviews:[
                    {id:1,img:require("../../../assets/user1.jpg"),name:"Roxy Joe",desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."},
                    {id:2,img:require("../../../assets/user2.jpg"),name:"Roxy Joe",desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."},
                    {id:3,img:require("../../../assets/user3.jpg"),name:"Roxy Joe",desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."},
                    {id:4,img:require("../../../assets/user4.jpg"),name:"Roxy Joe",desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."},
                    {id:5,img:require("../../../assets/user5.jpg"),name:"Roxy Joe",desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."},
                ]
            }
        }
    }
</script>

<style scoped>

</style>