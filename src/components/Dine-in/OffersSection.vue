<template>
    <div class="container bg-white">
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div class="card border rounded m-0 p-0" data-bs-toggle="modal" data-bs-target="#offersModal" v-on:click="offer('Cream N Crust')">
                <div class="card-title text-center">
                    <img src="../../assets/cnc-logo.png" alt="" class="img-fluid rounded mx-auto" style="max-height: 250px;width: 100% ;">
                </div>
                <div class="card-body">
                <div class="d-flex justify-content-between m-2 mb-0 mt-0">
                    <p class="text-start text-heading grey-color font-600">Cream & Crust</p>
                    <p class="text-end bg-success rounded-pill p-1 text-white font-600">
                        4.5 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 20 20">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                    </p>
                </div>
                <div class="m-2 mb-0 mt-0">
                    <p  class="text-desc font-400">Abhinandan Heights,Adajan,Surat</p>
                    <h4 class="text-heading grey-color font-400"> <span class="red-color">OFFER</span>: Buy 1 get 1 Pizza</h4>
                </div>
            </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div class="card border rounded w-100 m-0 p-0" data-bs-toggle="modal" data-bs-target="#offersModal" v-on:click="offer('Coffee King Adajan')">
                <div class="card-title text-center">
                    <img src="../../assets/ck-logo.jpg" alt="" class="img-fluid rounded mx-auto" style="max-height: 250px;width: 100% ;">
                </div>
                <div class="card-body">
                <div class="d-flex justify-content-between m-2 mb-0 mt-0">
                    <p class="text-start text-heading grey-color font-600" >Coffee King Adajan</p>
                    <p class="text-end bg-success rounded-pill p-1 text-white" style="font-weight: 600;">
                        4.5 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 20 20">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg> 
                    </p>
                </div>
                <div class="m-2 mb-0 mt-0">
                    <p class="text-desc font-400">Abhinandan Heights,Adajan,Surat</p>
                    <h4 class="text-heading grey-color font-400"> <span class="red-color">OFFER</span>: Buy 1 get 1 Coffee</h4>
                </div>
            </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div class="card border rounded w-100 m-0 p-0" data-bs-toggle="modal" data-bs-target="#offersModal" v-on:click="offer('Its Coffee Time')">
                <div class="card-title text-center">
                    <img src="../../assets/itscoffee-logo.jpg" alt="" class="img-fluid rounded mx-auto" style="max-height: 250px;width: 100% ;">
                </div>
                <div class="card-body">
                <div class="d-flex justify-content-between m-2 mb-0 mt-0">
                    <p class="text-start text-heading grey-color font-600">It's Coffee Time</p>
                    <p class="text-end bg-success rounded-pill p-1 text-white" style="font-weight: 600;">
                        4.5 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 20 20">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                    </p>
                </div>
                <div class="m-2 mb-0 mt-0">
                    <p class="text-desc font-400">Abhinandan Heights,Adajan,Surat</p>
                    <h4 class="text-heading grey-color font-400"> <span class="red-color">OFFER</span>: Buy 1 get 1 Sizzler</h4>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="row mb-5">
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div class="card border rounded w-100 m-0 p-0" data-bs-toggle="modal" data-bs-target="#offersModal" v-on:click="offer('Lemon Grass Adajan')">
                <div class="card-title text-center">
                    <img src="../../assets/lg-logo.jpg" alt="" class="img-fluid rounded mx-auto" style="max-height: 250px;width: 100% ;">
                </div>
                <div class="card-body">
                <div class="d-flex justify-content-between m-2 mb-0 mt-0">
                    <p class="text-start text-heading grey-color font-600">Lemon Grass Adajan</p>
                    <p class="text-end bg-success rounded-pill p-1 text-white" style="font-weight: 600;">
                        4.5 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 20 20">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                    </p>
                </div>
                <div class="m-2 mb-0 mt-0">
                    <p class="text-desc font-400">Abhinandan Heights,Adajan,Surat</p>
                    <h4 class="text-heading grey-color font-400"> <span class="red-color">OFFER</span>: Buy 1 get 1 Shake</h4>
                </div>
            </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div class="card border rounded w-100 m-0 p-0" data-bs-toggle="modal" data-bs-target="#offersModal" v-on:click="offer('Urban Punjab')">
                <div class="card-title text-center">
                    <img src="../../assets/up-logo.jpg" alt="" class="img-fluid rounded mx-auto" style="max-height: 250px;width: 100% ;">
                </div>
                <div class="card-body">
                <div class="d-flex justify-content-between m-2 mb-0 mt-0">
                    <p class="text-start text-heading grey-color font-600">Urban Punjab</p>
                    <p class="text-end bg-success rounded-pill p-1 text-white" style="font-weight: 600;">
                        4.5 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 20 20">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                    </p>
                </div>
                <div class="m-2 mb-0 mt-0">
                    <p class="text-desc font-400">Abhinandan Heights,Adajan,Surat</p>
                    <h4 class="text-heading grey-color font-400"> <span class="red-color">OFFER</span>: Buy 1 get 1 Sizzler</h4>
                </div>
            </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div class="card border rounded w-100 m-0 p-0" data-bs-toggle="modal" data-bs-target="#offersModal" v-on:click="offer('Burger King')">
                <div class="card-title text-center">
                    <img src="../../assets/bk-logo.jpg" alt="" class="img-fluid rounded mx-auto" style="max-height: 250px;width: 100% ;">
                </div>
                <div class="card-body">
                <div class="d-flex justify-content-between m-2 mb-0 mt-0">
                    <p class="text-start text-heading grey-color font-600">Burger King</p>
                    <p class="text-end bg-success rounded-pill p-1 text-white" style="font-weight: 600;">
                        4.5 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 20 20">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                    </p>
                </div>
                <div class="m-2 mb-0 mt-0">
                    <p class="text-desc font-400">Abhinandan Heights,Adajan,Surat</p>
                    <h4 class="text-heading grey-color font-400"> <span class="red-color">OFFER</span>: Buy 1 get 1 Shake</h4>
                </div>
            </div>
            </div>
        </div>
    </div>
    
    </div>
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
            <div class="col-6 fw-light value">: {{ selectedOffer.offer }}</div>
        </div>
        <button type="button" @click="closeModal" class="btn text-white mt-3 mb-3 rounded-3 w-100" style="background: #EB0E19;">Book Table</button>

      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        data(){
            return{
                offerClick:'',
                selectedOffer: null,
                offersData:[
                    {Bname:'Cream N Crust',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    offer:'50% off On any Pizza',
                    imgSrc:require('../../assets/cnc-logo.png')},

                    {Bname:'Coffee King Adajan',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    offer:'50% off On any Coffee',
                    imgSrc:require('../../assets/ck-logo.jpg')},

                    {Bname:'Its Coffee Time',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    offer:'50% off On any Sizzler',
                    imgSrc:require('../../assets/itscoffee-logo.jpg')},

                    {Bname:'Lemon Grass Adajan',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    offer:'50% off On any Shake',
                    imgSrc:require('../../assets/lg-logo.jpg')},

                    {Bname:'Urban Punjab',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    offer:'50% off On any Sizzler',
                    imgSrc:require('../../assets/up-logo.jpg')},

                    {Bname:'Burger King',
                    Aoffer:' Contrary to popular belief lorem ipsum is not simply random text.',
                    val:'For 7 Days only',
                    person:5,
                    Add:'Surat-Dumas Road Opposite Iscon Mall # 1st Floor, Rajhans Cinema, Gujarat 394370',
                    offer:'50% off On any Shake',
                    imgSrc:require('../../assets/bk-logo.jpg')},
                ]
            }
        },
        methods: {
            offer(restro) {
            // Set the selectedOffer based on the clicked offer
            this.selectedOffer = this.offersData.find(offer => offer.Bname === restro);
            // Trigger the modal to be shown
            document.getElementById('offersModal').classList.add('show');
            document.getElementById('offersModal').style.display = 'block';
            document.body.classList.add('modal-open');
            console.log(this.selectedOffer.imgSrc);
            },
            closeModal() {
            // Close the modal
            this.selectedOffer = null;
            document.getElementById('offersModal').classList.remove('show');
            document.getElementById('offersModal').style.display = 'none';
            document.body.classList.remove('modal-open');
            }
        }
    }
</script>

<style scoped>
.value{
    padding: 10px 20px;
    font-size: 16px;
}
</style>