<template>
    <div class="container bg-white">
    
    <div class="row mb-3">
      <div v-for="(offer, index) in offersData" :key="index" class="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div class="card border rounded-3 m-0 p-0" data-bs-toggle="modal" data-bs-target="#offersModal" @click="offerr(offer.Bname)" style="box-shadow: 0px 3px 6px #00000029;">
          <div class="card-title text-center">
            <img :src="offer.imgSrc" alt="" class="img-fluid rounded-3 mx-auto" style="max-height: 250px; width: 100%;object-fit: fill;">
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between m-2 mb-0 mt-0">
              <p class="text-start text-heading grey-color font-600">{{ offer.Bname }}</p>
              <p class="text-end bg-success rounded-pill p-1 text-white font-600">
                4.5 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 20 20">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </p>
            </div>
            <div class="m-2 mb-0 mt-0">
              <p class="text-desc font-400">{{ offer.oAdd }}</p>
              <h4 class="text-heading grey-color font-400"> <span class="red-color">OFFER</span>: {{ offer.Boffer }}</h4>
            </div>
          </div>
        </div>
      </div>
      </div>

    <!-- offers modal -->
      <div class="modal fade" id="offersModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="offersModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-body">
            <img v-if="selectedOffer"  :src="selectedOffer.imgSrc"  alt="" class="img" height="300px" width="100%">
        </div>
      <div class="container" v-if="selectedOffer">
        <div class="heading fw-bold" style="font-size: 20px;color: #F20000; border-bottom: 1px solid black;">Offers Details</div>
        <div class="row">
            <div class="col-6 fw-bold key">Business Name</div>
            <div class="col-6 fw-light value">: {{ selectedOffer.Bname }}</div>
            <div class="col-6 fw-bold key">About Offer</div>
            <div class="col-6 fw-light value">: {{ selectedOffer.Aoffer  }}</div>
            <div class="col-6 fw-bold key">Validity</div>
            <div class="col-6 fw-light value">: {{ selectedOffer.val }}</div>
            <div class="col-6 fw-bold key">No of Person</div>
            <div class="col-6 fw-light value">: {{ selectedOffer.person }}</div>
            <div class="col-6 fw-bold key">Address</div>
            <div class="col-6 fw-light value">: {{ selectedOffer.Add }}</div>
            <div class="col-6 fw-bold key">Offer</div>
            <div class="col-6 fw-light value">: {{ selectedOffer.Boffer }}</div>
        </div>
        <button type="button" data-bs-toggle="modal" data-bs-target="#bookModal" class="btn text-white mt-3 mb-3 rounded-3 w-100" style="background: #EB0E19;">
            Book Table
        </button>
        <!-- <BookTableModal/> -->
      </div>
    </div>
  </div>
  
        </div>

    </div>

<!-- Book table modal -->
    <div class="modal fade" id="bookModal" tabindex="-1" aria-labelledby="bookModalLabel" aria-hidden="true" >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="d-flex">
                        <img src="../../assets/rp-logo.png" class="border rounded-circle" alt="" height="75px" width="75px">
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
                            <img src="../../assets/about-logo.jpg" alt="" height="200px" width="240px">
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
                            <Button class="confirm-btn w-100 p-2 mt-0 text-center" data-bs-toggle="modal" data-bs-target="#bookingConfirmModal">Book Table</Button>
                        </div>
                        <div class="text-center">
                        </div>
                        </div>
                  </div>
                </div>
              </div>
        </div>

<!-- Booking Confirm modal -->
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

<!-- Thankyou modal -->
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
        name:'OffersSection',
        data(){
            return{
                offerClick:'',
                selectedOffer: null,
                offersData:[
                    {Bname:'Cream N Crust',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    oAdd:'Abhinandan Heights, Adajan, Surat',
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    Boffer:'50% off On any Pizza',
                    imgSrc:require('../../assets/cnc-logo.png')},

                    {Bname:'Coffee King Adajan',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    oAdd:'Abhinandan Heights, Adajan, Surat',
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    Boffer:'50% off On any Coffee',
                    imgSrc:require('../../assets/ck-logo.jpg')},

                    {Bname:'Its Coffee Time',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    oAdd:'Abhinandan Heights, Adajan, Surat',
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    Boffer:'50% off On any Sizzler',
                    imgSrc:require('../../assets/itscoffee-logo.jpg')},

                    {Bname:'Lemon Grass Adajan',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    oAdd:'Abhinandan Heights, Adajan, Surat',
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    Boffer:'50% off On any Shake',
                    imgSrc:require('../../assets/lg-logo.jpg')},

                    {Bname:'Urban Punjab',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    oAdd:'Abhinandan Heights, Adajan, Surat',
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    Boffer:'50% off On any Sizzler',
                    imgSrc:require('../../assets/up-logo.jpg')},

                    {Bname:'Burger King',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    oAdd:'Abhinandan Heights, Adajan, Surat',
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    Boffer:'50% off On any Shake',
                    imgSrc:require('../../assets/bk-logo.jpg')},
                ],
                reviews:[
                    {id:1,img:require("../../assets/user1.jpg"),name:"Roxy Joe",desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."},
                    {id:2,img:require("../../assets/user2.jpg"),name:"Roxy Joe",desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."},
                    {id:3,img:require("../../assets/user3.jpg"),name:"Roxy Joe",desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."},
                    {id:4,img:require("../../assets/user4.jpg"),name:"Roxy Joe",desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."},
                    {id:5,img:require("../../assets/user5.jpg"),name:"Roxy Joe",desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."},
                ],
                
            }
        },
        methods: {
            offerr(restro) {
            // Set the selectedOffer based on the clicked offer
            this.selectedOffer = this.offersData.find(offer => offer.Bname === restro);
            // Trigger the modal to be shown
            document.getElementById('offersModal').classList.add('show');
            document.getElementById('offersModal').style.display = 'block';
            document.body.classList.add('modal-open');
            // console.log(this.selectedOffer.imgSrc);
            // console.log(restro);
            },
            closeModal() {
            // Close the modal
            this.selectedOffer = null;
            document.getElementById('offersModal').classList.remove('show');
            document.getElementById('offersModal').style.display = 'none';
            document.body.classList.remove('modal-open');
            },
            
        }
    }
</script>

<style scoped>
.value{
    padding: 10px 20px;
    font-size: 16px;
}
</style>