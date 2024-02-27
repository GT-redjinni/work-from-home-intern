<template>
  <div class="container">
    <div class="text-start ms-2 mb-3 heading" style="font-size: 2rem;color: #585858;" data-bs-toggle="modal" data-bs-target="#filterModal">
      Offers Near You
      <hr class="horizontal-line" />
      Filter
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
      </svg>
    </div>
  </div>
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
      </div>
    </div>
  </div>
  
        </div>

    </div>
<BookModal/>


</template>

<script>
import BookModal from './Offers_Modal/BookModal.vue';
export default {
        name:'OffersSection',
        components:{
          BookModal
        },
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
.heading {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  position: relative;
  column-gap: 1.5rem;
}

.horizontal-line {
    content: "";
    height: 2px;
    background-color: black;
    display: block;
    position: relative;
    width: 65%; 
}
</style>