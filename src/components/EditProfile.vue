<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-3">
            <ul class="list-group bg-light rounded-3">
                        <div class="text-start p-3 text-white rounded-top" style="background: #EB0E19;">
                                <span class="fw-semibold color-dark ms-3">Menu </span> 
                        </div>
                <button :class="{ 'btn-list-active': activeTab === 'changePass' }" class="btn btn-list mt-2 border rounded-2 p-2 m-1" v-on:click="showContent('changePass')">
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
                <button class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('vendorAccount')">
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
                <button class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('notification')">
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
                <button class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('permission')">
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
                <button class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('security')">
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
                <button class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('privacyPolicy')">
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
                <button :class="{ 'btn-list-active': activeTab === 'termsAndCondition' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('termsAndCondition')">
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
                <button :class="{ 'btn-list-active': activeTab === 'aboutUs' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('aboutUs')">
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
                <button :class="{ 'btn-list-active': activeTab === 'contactUs' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('contactUs')">
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
                    <div v-show="activeTab === 'changePass'" class="content" id="changePass">
                    <div class="card">
                    <div class="card-body">
                        <div class="heading text-subheading grey-color font-600 ms-3">Update Profile</div>
                        <div class="body border-top border-dark mt-3" style="display: flex; align-items: center; justify-content: space-between;">
                        <div style="flex: 1;" class="ms-5">
                            <img src="../assets/user-image.jpg" alt="" height="250px" width="250px" class="rounded-circle">
                        </div>
                        <div style="flex: 2; padding: 20px 75px 10px 75px;">
                            <label for="cp" class="cp text-desc font-600">First Name</label>
                                <br>
                                <div class="input-group mb-3 border-bottom border-danger">
                                    <input type="text" class="form-control" placeholder="Rakesh" style="border: none;">
                                </div>
                                <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="text" class="form-control" placeholder="Prajapati" style="border: none;">
                                </div>
                                <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="email" class="form-control" placeholder="rakeshprajapati@gmail.com" style="border: none;">
                                </div>
                                <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="text" class="form-control" placeholder="Mobile Number" style="border: none;">
                                </div>
                                
                        </div>
                    </div>
                        <div>
                            <form class="form-control border-0" style="padding: 10px 50px 10px 50px;">
                                <label for="cp" class="cp text-desc font-600">Address</label>
                                <br>
                                <div class="input-group mb-3 border-bottom border-danger">
                                    <input type="text" class="form-control" placeholder="Address" style="border: none;">
                                </div>
                                <!-- <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="password" class="form-control" placeholder="New Password" style="border: none;">
                                </div> -->
                                <div class="row input-group mb-3">
                                <div class="col">
                                    <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="text" class="form-control" placeholder="Select Your state" style="border: none;">
                                    <button class="btn p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    </button>
                                </div>
                                </div>
                                <div class="col">
                                    <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="text" class="form-control" placeholder="Select Your city" style="border: none;">
                                    <button class="btn p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    </button>
                                </div>
                                </div>
                            </div>
                                <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="text" class="form-control" placeholder="Date Of Birth ( DD/MM/YYYY )" style="border: none;">
                                    <button class="btn p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                        </svg>
                                    </button>
                                </div>
                                <button class="btn frm-btn text-white w-100 text-center mt-1">Update</button>
                            </form>
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
    export default {
        name:'EditProfile',
        data() {
        return {
            activeTab: 'changePass', // Set the default active tab
        };
    },
    methods: {
        showContent(tab) {
            this.activeTab = tab;
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

#changePass , #termsAndCondition , #aboutUs, #contactUs{
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