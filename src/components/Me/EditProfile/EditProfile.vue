<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-3">
            <ul class="list-group bg-light rounded-3">
                <div class="text-start p-3 text-white rounded-top" style="background: #EB0E19;">
                                <span class="fw-semibold color-dark ms-3">Menu </span> 
                </div>
                    <button :class="{ 'btn-list-active': activeTab === 'UpdateProfile' }" class="btn btn-list mt-2 border rounded-2 p-2 m-1" v-on:click="showContent('UpdateProfile')">
                        <div class="d-flex">
                            <div class="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </div>
                            <div class="text-start ms-3">
                                    <span class="fw-semibold">Edit Profile </span> 
                            </div>
                            </div>
                    </button>
                    <button :class="{ 'btn-list-active': activeTab === 'PaymentDetails' }" class="btn btn-list mt-2 border rounded-2 p-2 m-1" v-on:click="showContent('PaymentDetails')" data-bs-toggle="modal" data-bs-target="#paymentList">
                        <div class="d-flex">
                            <div class="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
                                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z"/>
                                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            </div>
                            <div class="text-start ms-3">
                                    <span class="fw-semibold">Payment Details </span> 
                            </div>
                            </div>
                    </button>
                    <button :class="{ 'btn-list-active': activeTab === 'BecomeVendor' }" class="btn btn-list mt-2 border rounded-2 p-2 m-1" v-on:click="showContent('BecomeVendor')">
                        <div class="d-flex">
                            <div class="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
                                </svg>
                            </div>
                            <div class="text-start ms-3">
                                    <span class="fw-semibold">Become a Vendor </span> 
                            </div>
                            </div>
                    </button>
                    <button :class="{ 'btn-list-active': activeTab === 'JoinInfluencer' }" class="btn btn-list mt-2 border rounded-2 p-2 m-1" v-on:click="showContent('JoinInfluencer')">
                        <div class="d-flex">
                            <div class="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                                </svg>
                            </div>
                            <div class="text-start ms-3">
                                    <span class="fw-semibold">Join as an Influencer </span> 
                            </div>
                            </div>
                    </button>
                    <button :class="{ 'btn-list-active': activeTab === 'BecomeAtmanirbhar' }" class="btn btn-list mt-2 border rounded-2 p-2 m-1" v-on:click="showContent('BecomeAtmanirbhar')">
                        <div class="d-flex">
                            <div class="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
                                </svg>
                            </div>
                            <div class="text-start ms-3">
                                    <span class="fw-semibold">Become Atmanirbhar </span> 
                            </div>
                            </div>
                    </button>
                    <button :class="{ 'btn-list-active': activeTab === 'BecomeCityFranchise' }" class="btn btn-list mt-2 border rounded-2 p-2 m-1" v-on:click="showContent('BecomeCityFranchise')">
                        <div class="d-flex">
                            <div class="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                                </svg>
                            </div>
                            <div class="text-start ms-3">
                                    <span class="fw-semibold">Become City Franchise </span> 
                            </div>
                            </div>
                    </button>
                    <button :class="{ 'btn-list-active': activeTab === 'HelpAndSupport' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('HelpAndSupport')">
                        <div class="d-flex">
                            <div class="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-question" viewBox="0 0 16 16">
                                <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745"/>
                                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                                <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>
                                </svg>
                            </div>
                            <div class="text-start ms-3">
                                    <span class="fw-semibold">Help & Support </span> 
                            </div>
                            </div>
                    </button>
                    <button :class="{ 'btn-list-active': activeTab === 'BlockedAccount' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('BlockedAccount')">
                        <div class="d-flex">
                            <div class="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ban" viewBox="0 0 16 16">
                                <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
                                </svg>
                            </div>
                            <div class="text-start ms-3">
                                    <span class="fw-semibold">Blocked Account </span> 
                            </div>
                            </div>
                    </button>
                    <button :class="{ 'btn-list-active': activeTab === 'DeleteAccount' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('DeleteAccount')">
                        <div class="d-flex">
                            <div class="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </div>
                            <div class="text-start ms-3">
                                    <span class="fw-semibold">Delete Account </span> 
                            </div>
                            </div>
                    </button>
                    <button :class="{ 'btn-list-active': activeTab === 'LogOut' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('LogOut')">
                        <div class="d-flex">
                            <div class="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                                </svg>
                            </div>
                            <div class="text-start ms-3">
                                    <span class="fw-semibold">Logout </span> 
                            </div>
                            </div>
                    </button>
            </ul>
            </div>
            <div class="col-md-7">
                    <div v-show="activeTab === 'UpdateProfile'" class="content" id="UpdateProfile">
                        <UpdateProfile/>
                    </div>
                    <div v-show="activeTab === 'PaymentDetails'" class="content" id="PaymentDetails">
                        <!-- <PaymentDetails/> -->
                    </div>
                    <div v-show="activeTab === 'BecomeVendor'" class="content" id="BecomeVendor">
                        <BecomeVendor/>
                    </div>
                    <div v-show="activeTab === 'JoinInfluencer'" class="content" id="JoinInfluencer">
                        <JoinInfluencer/>
                    </div>
                    <div v-show="activeTab === 'BecomeAtmanirbhar'" class="content" id="BecomeAtmanirbhar">
                        <BecomeAtmanirbhar/>
                    </div>
                    <div v-show="activeTab === 'BecomeCityFranchise'" class="content" id="BecomeCityFranchise">
                        <BecomeCityFranchise/>
                    </div>
                    <div v-show="activeTab === 'HelpAndSupport'" class="content" id="HelpAndSupport">
                        <HelpAndSupport/>
                    </div>
                    <div v-show="activeTab === 'BlockedAccount'" class="content" id="BlockedAccount">
                        <BlockedAccount/>
                    </div>

                    <div class="modal fade" id="paymentList" tabindex="-1" aria-labelledby="paymentListLabel" aria-hidden="true" >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header text-white" style="background: #EB0E19;">
                    <h5 class="modal-title" id="paymentListLabel">Transactions</h5>
                    <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="d-flex">
                        <img src="../../../assets/user-image.jpg" class="border rounded-circle" alt="" height="75px" width="75px">
                        <div class="ms-3">
                            <span class="text-subheading font-400 grey-color mt-2">Available Balance</span>
                            <br>
                            <span class="text-heading font-600 grey-color mt-2">Rs. 1598.00</span>
                        </div>
                    </div>
                    <div>
                        <div v-for="transaction in transactions" :key="transaction.id" class="d-flex border rounded-3 mt-3 mb-2 p-2">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" :fill="transaction.status === 'Paid' ? 'red' : 'green'" class="bi bi-arrow-down-circle-fill me-2" viewBox="0 0 16 16" style="top: auto;">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                            </svg>
                            <img :src="transaction.img" class="border rounded-circle" alt="" height="50px" width="50px">
                            </div>
                            <div class="text-start mx-2">
                                <span class="fw-normal text-subheading">{{transaction.name}}</span>
                                <br>
                                <span class="fw-light text-desc">{{transaction.date}}</span>
                            </div>
                            <div class="ms-auto me-2">
                                <span class="fw-light text-desc">{{transaction.status}}</span>
                                <br>
                                <span class="font-600 text-subheading">{{ transaction.amount }}</span>
                            </div>
                        </div>
                    </div>
                    <Button class="confirm-btn w-100 b-0 text-center">WITHDRAW</Button>
                  </div>
                </div>
              </div>
                    </div>

                </div>
                <div class="col-md-1"></div>
        </div>
    </div>
</template>

<script>
import UpdateProfile from './UpdateProfile.vue';
// import PaymentDetails from './PaymentDetails.vue';
import BecomeVendor from './BecomeVendor.vue';
import JoinInfluencer from './JoinInfluencer.vue';
import BecomeAtmanirbhar from './BecomeAtmanirbhar.vue';
import BecomeCityFranchise from './BecomeCityFranchise.vue';
import HelpAndSupport from './HelpAndSupport.vue';
import BlockedAccount from './BlockedAccount.vue';

    export default {
        name:'EditProfile',
        components:{
            UpdateProfile,
            // PaymentDetails,
            BecomeVendor,
            JoinInfluencer,
            BecomeAtmanirbhar,
            BecomeCityFranchise,
            HelpAndSupport,
            BlockedAccount,
        },
        data() {
        return {
            activeTab: 'UpdateProfile', 
            transactions: [
            { id: 1, img: require('../../../assets/user1.jpg'), name: 'Yara Khalil', date: '24 Oct, 10:44 AM', status: 'Received', amount: '₹563.00' },
            { id: 2, img: require('../../../assets/user2.jpg'), name: 'Emma Johnson', date: '25 Oct, 11:30 AM', status: 'Paid', amount: '₹789.00' },
            { id: 3, img: require('../../../assets/user3.jpg'), name: 'Liam Smith', date: '26 Oct, 12:45 PM', status: 'Received', amount: '₹654.00' },
            { id: 4, img: require('../../../assets/user4.jpg'), name: 'Olivia Davis', date: '27 Oct, 1:15 PM', status: 'Paid', amount: '₹987.00' },
            { id: 5, img: require('../../../assets/user5.jpg'), name: 'Noah Wilson', date: '28 Oct, 2:00 PM', status: 'Received', amount: '₹876.00' },
            ] 
        };
    },
    methods: {
        showContent(tab) {
            if (tab === 'DeleteAccount') {
                const confirmed = window.confirm('Are you sure you want to delete your account?');
                if (confirmed) {
                    alert('Account deleted successfully!');
                }
            }
            else if(tab === 'LogOut'){
                localStorage.clear();
                this.$router.push('/login')
                location.reload();
            } 
            else {
                // For other tabs, change the active tab directly
                this.activeTab = tab;
            }
        },
    },
    }
</script>

<style scoped>
.content {
  display: none;
  width: 100%;
  height: 100%; 
}

#UpdateProfile , #PaymentDetails , #BecomeVendor, #JoinInfluencer, #BecomeAtmanirbhar ,#BecomeCityFranchise,#HelpAndSupport,#BlockedAccount{
  display: block;
}
button{
    border: none;
    /* background: transparent; */
    text-align: left;
}

.cp{
    color: #4D4D4D;
}
.frm-btn{
    background: #EB0E19;
    color: #ffffff;
}

.btn-list{
    background-color: #F5E8E8;
}
.btn-list-active {
  background-color: #FF9BA0;
  opacity: 100%;
  color: whitesmoke;
}
</style>