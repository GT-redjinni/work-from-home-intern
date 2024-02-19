<template>
  <div>
<nav class="navbar navbar-expand-lg  bg-white d-none d-lg-block">
  <div class="container">
    <a class="navbar-brand ms-5"><img src="../../assets/rp-logo.png" alt="" height="50px" width="50px" /></a>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <div class="collapse navbar-collapse" id="navbarTogglerDemo02"> -->

    <div class="input-group" >
  <input type="text" class="form-control" placeholder="Search People,Pages,Groups..." style="background-color: #F5E8E8" v-model="searchQuery" @input="handleSearch">
  <button  v-if="searchResults.length > 0 || showNoDataMessage" class="btn close-button" style="background-color: #F5E8E8" @click="closeAutocompleteContainer">x</button>
  <button class="btn" type="button" style="background: #EB0E19;"><img src="../../assets/search-icon.png" alt="search" height="25px" width="25px"></button>
    <!-- Autocomplete dropdown container -->
    <div v-if="searchResults.length > 0 || showNoDataMessage" class="autocomplete-container">
      <!-- autocomplete dropdown -->
      <div class="d-flex bg-white search-tags mt-2">
        <div class="row w-100 ms-auto me-auto">
          <span :class="{ 'tags tab-active': activeTab === 'all' }" class="col tags" v-on:click="showContent('all')">All</span>
          <span :class="{ 'tags tab-active': activeTab === 'people' }" class="col tags" v-on:click="showContent('people')">People</span>
          <span :class="{ 'tags tab-active': activeTab === 'vendor' }" class="col tags" v-on:click="showContent('vendor')">Vendor</span>
          <span :class="{ 'tags tab-active': activeTab === 'influencer' }" class="col tags" v-on:click="showContent('influencer')">Influencer</span>
          <span :class="{ 'tags tab-active': activeTab === 'post' }" class="col tags" v-on:click="showContent('post')">Post</span>
        </div>
          </div>

          <div v-show="activeTab === 'all'" class="content" id="termsAndCondition">
            <div v-if="searchResults.length > 0" class="autocomplete-dropdown">
            <div v-for="(result, index) in searchResults" :key="index" class="result-item">
              <!-- people -->
              <div v-if="result.cat === 'people'" class="">
              <div class="d-flex justify-content-between">
                <span class="text-start" style="font-size: 16px;">People</span>
                <!-- <span class="text-end me-2" style="font-size: 12px;">See All</span> -->
              </div>
              <div class="border-top">
                        <div class="d-flex ps-2 pe-2">
                            <img :src="result.imgSrc" alt="" height="43px" width="43px"
                                class="img border rounded-circle">
                            <div class="text-start mx-2">
                                <p class="fw-normal name">
                                    <span class="fw-medium">{{ result.name }} </span> <span class="fw-light"> {{ result.location }}</span>
                                </p>
                            </div>
                            <div class="ms-auto">
                                <button class="btn confirm-btn" type="button" >
                                    Follow    
                                </button>
                            </div>
                        </div>
                    </div>
              </div>
              <!-- vendor -->
              <div v-if="result.cat === 'vendor'" class="">
                <div class="d-flex justify-content-between">
                  <span class="text-start" style="font-size: 16px;">Vendor</span>
                  <!-- <span class="text-end me-2" style="font-size: 12px;">See All</span> -->
                </div>
                <div class="border-top">
                          <div class="d-flex ps-2 pe-2 p1 mt-2  ">
                              <img :src="result.imgSrc" alt="" height="43px" width="43px"
                                  class="img border rounded-circle">
                              <div class="text-start mx-2">
                                  <p class="fw-normal name">
                                      <span class="fw-medium">{{ result.name }}</span> <span class="fw-light">{{ result.location }}</span>
                                  </p>
                              </div>
                              <div class="ms-auto">
                                  <button class="btn confirm-btn" type="button" >
                                      Follow    
                                  </button>
                              </div>
                          </div>
                      </div>
              </div>
              <!-- influencer -->
              <div v-if="result.cat === 'influencer'" class="">
                <div class="d-flex justify-content-between">
                  <span class="text-start" style="font-size: 16px;">Influencers</span>
                  <!-- <span class="text-end me-2" style="font-size: 12px;">See All</span> -->
                </div>
                <div class="border-top">
                          <div class="d-flex ps-2 pe-2 p1 mt-2  ">
                              <img :src="result.imgSrc" alt="" height="43px" width="43px"
                                  class="img border rounded-circle">
                              <div class="text-start mx-2">
                                  <p class="fw-normal name">
                                      <span class="fw-medium">{{ result.name }}</span> <span class="fw-light">{{ result.location }}</span>
                                  </p>
                              </div>
                              <div class="ms-auto">
                                  <button class="btn confirm-btn" type="button" >
                                      Follow    
                                  </button>
                              </div>
                          </div>
                      </div>
              </div>
            </div>
            <div class="mt-2 mb-2">
              <div class="d-flex justify-content-between">
                <span class="text-start mt-3" style="font-size: 16px;">Post</span>
                <span class="text-end mt-3 me-2" style="font-size: 12px;">See All</span>
              </div>
                <UserPost/>
            </div>
            </div>
          <div v-else-if="showNoDataMessage" class="text-center no-data-message" style="font-size: 16px;">
            No data found</div>
              </div>

            <div v-show="activeTab === 'people'" class="content autocomplete-dropdown" id="aboutUs">
                 <div>
                  <PeopleTab/>
                 </div>
            </div>

            <div v-show="activeTab === 'vendor'" class="content autocomplete-dropdown" id="contactUs">
                <div>
                  <VendorTab/>
                 </div>
            </div>

            <div v-show="activeTab === 'influencer'" class="content autocomplete-dropdown" id="aboutUs">
                <div>
                  <InfluencerTab/>
                 </div>
            </div>

            <div v-show="activeTab === 'post'" class="content autocomplete-dropdown" id="aboutUs">
               <UserPost/>
            </div>
        
        </div>
        </div>
  
    <div class="action-icons ms-auto me-5 mt-1 mb-0"> 
      <router-link to="/foodfie">
        <button class="each-icon" v-on:click="handleClick('foodfie')" :class="{active:active=='foodfie'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" :fill="active=='foodfie' ? 'red':'grey'" class="bi bi-phone icon-fill" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
            <span class="icon-text" :style="{color:active=='foodfie'?'red':'grey'}" >FoodFie</span> 
        </button>
      </router-link>

      <router-link to="/dinein">
        <button class="each-icon" v-on:click="handleClick('dinein')" :class="{active:active=='dinein'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" :fill="active=='dinein' ? 'red':'grey'" class="bi bi-shop-window icon-fill" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"/>
          </svg>
          <!-- <img src="../../assets/dinein-icon.png" height="30px" width="30px"> -->
            <span class="icon-text" :style="{color:active=='dinein'?'red':'grey'}" >Dine-In</span> 
        </button>
      </router-link>

      <router-link to="/notification">
        <button v-on:click="handleClick('notification')" :class="{active:active=='notification'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" :fill="active=='notification' ? 'red':'grey'" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>
            <span class="icon-text" :style="{color:active=='notification'?'red':'grey'}" >Notifications</span> 
        </button>
      </router-link>

        <router-link to="/setting">
        <button v-on:click="handleClick('setting')" :class="{active:active=='setting'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" :fill="active=='setting' ? 'red':'grey'" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg>
            <span class="icon-text" :style="{color:active=='setting'?'red':'grey'}" >Settings</span> 
        </button>
      </router-link>

        
        <div class="dropdown">
        <router-link to="/me">
        <button
        class="dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
        v-on:click="handleClick('me')" :class="{active:active=='me'}"
        >
        <img src="../../assets/user-image.jpg" class="rounded" height="30px" width="30px">
        <div class="dropdown-text">
                <span class="icon-text" :style="{color:active=='me'?'red':'grey'}">Me</span>
        </div>
        </button>
      </router-link>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" v-on:click="this.$router.push({ path: '/me' })" role='button'>My Account</a></li>
        <li><a class="dropdown-item" v-on:click="this.$router.push({ path: '/edit' })" role='button'>Edit Profile</a></li>
        <li><a class="dropdown-item" v-on:click="Signout" role='button'>Sign Out </a></li>
        </ul>
    </div>
        </div>
    
    
    <!-- </div> -->
  </div>
</nav>

<!-- Side navbar for small screens -->
  <nav class="navbar navbar-expand-lg d-block d-lg-none">
        <!-- Hamburger menu button -->
        <div class="d-flex">

          <div class="text-start ms-0">    
            <a class="navbar-brand ms-5" v-on:click="this.$router.push({ path: '/foodfie' })"><img src="../../assets/rp-logo.png" alt="" height="50px" width="50px" /></a>
          </div>

          <div class="ms-auto me-2 mt-1">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarOffcanvas"
              aria-controls="navbarOffcanvas"
              >
            <span class="navbar-toggler-icon"></span>
            </button>
          </div>

        </div>
        <!-- Off-canvas content -->
        <div
          class="offcanvas offcanvas-start custom-offcanvas"
          tabindex="-1"
          id="navbarOffcanvas"
          aria-labelledby="navbarOffcanvasLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="navbarOffcanvasLabel">
              <a class="navbar-brand ms-5" v-on:click="this.$router.push({ path: '/foodfie' })" data-bs-dismiss="offcanvas"><img src="../../assets/rp-logo.png" alt="" height="50px" width="50px" /></a>
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="input-group-sidebar d-flex flex-row">
              <input
                type="text"
                class="form-control"
                placeholder="Search People, Pages, Groups..."
                v-model="searchQuery"
                @input="handleSearch"
                style="background-color: #F5E8E8"
              />
              <button v-if="searchResults.length > 0 || showNoDataMessage" style="background-color: #F5E8E8" class="btn close-button" @click="closeAutocompleteContainer">x</button>
              <button class="btn" type="button" style="background: #EB0E19;"><img src="../../assets/search-icon.png" alt="search" height="25px" width="25px"></button>
              
              <div v-if="searchResults.length > 0 || showNoDataMessage" class="autocomplete-container">
      <!-- autocomplete dropdown -->
        <div v-if="searchResults.length > 0" class="autocomplete-dropdown">
            <div v-for="(result, index) in searchResults" :key="index" class="result-item">
              <!-- people -->
              <div v-if="result.cat === 'people'" class="">
              <div class="d-flex justify-content-between">
                <span class="text-start" style="font-size: 16px;">People</span>
                <!-- <span class="text-end me-2" style="font-size: 12px;">See All</span> -->
              </div>
              <div class="border-top">
                        <div class="d-flex ps-2 pe-2">
                            <img :src="result.imgSrc" alt="" height="43px" width="43px"
                                class="img border rounded-circle">
                            <div class="text-start mx-2">
                                <p class="fw-normal name">
                                    <span class="fw-medium">{{ result.name }} </span> <span class="fw-light"> {{ result.location }}</span>
                                </p>
                            </div>
                            <div class="ms-auto">
                                <button class="btn confirm-btn" type="button" >
                                    Follow    
                                </button>
                            </div>
                        </div>
                    </div>
              </div>
              <!-- vendor -->
              <div v-if="result.cat === 'vendor'" class="">
                <div class="d-flex justify-content-between">
                  <span class="text-start" style="font-size: 16px;">Vendor</span>
                  <!-- <span class="text-end me-2" style="font-size: 12px;">See All</span> -->
                </div>
                <div class="border-top">
                          <div class="d-flex ps-2 pe-2 p1 mt-2  ">
                              <img :src="result.imgSrc" alt="" height="43px" width="43px"
                                  class="img border rounded-circle">
                              <div class="text-start mx-2">
                                  <p class="fw-normal name">
                                      <span class="fw-medium">{{ result.name }}</span> <span class="fw-light">{{ result.location }}</span>
                                  </p>
                              </div>
                              <div class="ms-auto">
                                  <button class="btn confirm-btn" type="button" >
                                      Follow    
                                  </button>
                              </div>
                          </div>
                      </div>
              </div>
              <!-- influencer -->
              <div v-if="result.cat === 'influencer'" class="">
                <div class="d-flex justify-content-between">
                  <span class="text-start" style="font-size: 16px;">Influencers</span>
                  <!-- <span class="text-end me-2" style="font-size: 12px;">See All</span> -->
                </div>
                <div class="border-top">
                          <div class="d-flex ps-2 pe-2 p1 mt-2  ">
                              <img :src="result.imgSrc" alt="" height="43px" width="43px"
                                  class="img border rounded-circle">
                              <div class="text-start mx-2">
                                  <p class="fw-normal name">
                                      <span class="fw-medium">{{ result.name }}</span> <span class="fw-light">{{ result.location }}</span>
                                  </p>
                              </div>
                              <div class="ms-auto">
                                  <button class="btn confirm-btn" type="button" >
                                      Follow    
                                  </button>
                              </div>
                          </div>
                      </div>
              </div>
            </div>
            <div class="mt-2 mb-2">
              <div class="d-flex justify-content-between">
                <span class="text-start mt-3" style="font-size: 16px;">Post</span>
                <span class="text-end mt-3 me-2" style="font-size: 12px;">See All</span>
              </div>
                <UserPost/>
            </div>
            </div>
        <div v-else-if="showNoDataMessage" class="text-center no-data-message" style="font-size: 16px;">
          No data found</div>
          </div>
            </div>

            <!-- Action icons -->
            <div class="action-icons action-icons-sidebar ms-5"> 
      <router-link to="/foodfie">
        <button class="each-icon-sidebar" v-on:click="handleClick('foodfie')" :class="{active:active=='foodfie'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" :fill="active=='foodfie' ? 'red':'grey'" class="bi bi-phone icon-fill" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
            <span class="icon-text" :style="{color:active=='foodfie'?'red':'grey'}" >FoodFie</span> 
        </button>
      </router-link>

      <router-link to="/dinein">
        <button class="each-icon-sidebar" v-on:click="handleClick('dinein')" :class="{active:active=='dinein'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" :fill="active=='dinein' ? 'red':'grey'" class="bi bi-shop-window icon-fill" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"/>
          </svg>
          <!-- <img src="../../assets/dinein-icon.png" height="30px" width="30px"> -->
            <span class="icon-text" :style="{color:active=='dinein'?'red':'grey'}" >Dine-In</span> 
        </button>
      </router-link>

      <router-link to="/notification">
        <button  class="each-icon-sidebar" v-on:click="handleClick('notification')" :class="{active:active=='notification'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" :fill="active=='notification' ? 'red':'grey'" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>
            <span class="icon-text" :style="{color:active=='notification'?'red':'grey'}" >Notifications</span> 
        </button>
      </router-link>

        <router-link to="/setting">
        <button class="each-icon-sidebar" v-on:click="handleClick('setting')" :class="{active:active=='setting'}">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" :fill="active=='setting' ? 'red':'grey'" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg>
            <span class="icon-text" :style="{color:active=='setting'?'red':'grey'}" >Settings</span> 
        </button>
      </router-link>

        
        <div class="dropdown each-icon-sidebar">
        <router-link to="/me">
        <button
        class="dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
        v-on:click="handleClick('me')" :class="{active:active=='me'}"
        >
        <img src="../../assets/user-image.jpg" class="rounded" height="30px" width="30px">
        <div class="dropdown-text">
                <span class="icon-text" :style="{color:active=='me'?'red':'grey'}">Me</span>
        </div>
        </button>
      </router-link>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" v-on:click="this.$router.push({ path: '/me' })" role='button'>My Account</a></li>
        <li><a class="dropdown-item" v-on:click="this.$router.push({ path: '/edit' })" role='button'>Edit Profile</a></li>
        <li><a class="dropdown-item" href="#">Sign Out </a></li>
        </ul>
    </div>
        </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
import PeopleTab from './PeopleTab.vue';
import VendorTab from './VendorTab.vue';
import InfluencerTab from './InfluencerTab.vue';
import UserPost from '../Foodfie/UserPost.vue';
export default{
    name:'HeaderComponent',
    components:{
      UserPost,
      PeopleTab,
      VendorTab,
      InfluencerTab
    },
    data(){
      return{
        activeTab: 'all',
        showText: 'foodfie',
        active:'foodfie',
        searchQuery: '',
        searchData: [
          // post data
          { name: 'George lyan', location: 'Washington DC', cat:'people',imgSrc: require('../../assets/user1.jpg') },
          { name: 'Ramkrishna Raju', location: 'UK', cat:'people',imgSrc: require('../../assets/user2.jpg')},
          // vendor data
          { name: 'The Pizza Shop', location: 'Ukrain', cat:'vendor',imgSrc: require('../../assets/profile-pizza.jpg') },
          { name: 'Urban Panjab', location: 'Washington DC', cat:'vendor',imgSrc: require('../../assets/suggestion-icecream.jpg') },
          // influencer data
          { name: 'Lilion j Junjun', location: 'Ukrain', cat:'influencer',imgSrc: require('../../assets/user3.jpg') },
          { name: 'Krishna Paneliya', location: 'Washington DC' , cat:'influencer',imgSrc: require('../../assets/user4.jpg')},
        ],
        searchResults: [],
        showNoDataMessage: false, 
        isCloseButtonVisible: false,
      }
    },
    methods:{
      Signout(){
        localStorage.clear();
        this.$router.push('/login')
        console.log("Logout");
        location.reload();
      },
      showContent(tab) {
        this.activeTab = tab;
      },
      handleClick(item){
        this.active=this.active === item ? 'foodfie' : item;
        this.showText = item;
      },
      closeAutocompleteContainer() {
        this.searchQuery = ''; // Clear the search query
        this.searchResults = []; // Clear the search results
        this.showNoDataMessage = false; // Hide the no data message
        this.isCloseButtonVisible = false;
      },
      handleSearch() {
      // Implement the search logic here
      const query = this.searchQuery.toLowerCase().trim();
      if (query === '') {
        this.searchResults = [];
        this.showNoDataMessage = false;
        this.isCloseButtonVisible = false;
      } 
      else {
        this.searchResults = this.searchData.filter((item) =>
          item.name.toLowerCase().includes(query)
        );
        this.showNoDataMessage = this.searchResults.length === 0;
        this.isCloseButtonVisible = true;
      }
    },
    },
    created() {
    this.handleClick('foodfie');
  },
}
</script>

<style scoped>
.autocomplete-container {
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  width: 100%;
}

.autocomplete-dropdown {
  background-color: #fff;
  border: 1px solid #ccc;
}

.result-item {
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}

.no-data-message {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px;
}
nav{
  box-shadow: 0 5px 4px -4px red
}
.input-group{
  width: 30%;
}

.action-icons {
  display: flex;
  align-items: center; 
  gap: 20px; 
}

.action-icons button {
  border: none;
  text-align: center;
  width: 50px; 
  background-color: transparent;
  /* position: relative;
  overflow: hidden; */
}

.icon-text {
  /* display: block;  */
  font-size: 10px; 
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: relative;
  /* bottom: 0%; */
  text-align: left;
  transform: translateX(-50%);
}
.action-icons button:hover .icon-text {
  opacity: 1;
}
/* .icon-text.show-text {
    opacity: 1 ;
  } */
.dropdown:hover>.dropdown-menu {
  display: block;
}

.dropdown>.dropdown-toggle:active {
    pointer-events: none;
}
.dropdown-toggle::after {
  display: none;
}
.dropdown-toggle {
  display: flex;
  flex-direction: column; 
  align-items: center; 
}

.dropdown-text {
  margin-top: 1px; 
}
.tags{
    color: #B2B1B1;
    font-size: 18px;
    cursor: pointer;
    /* padding-bottom: 10px; */
}
.tab-active{
    color: red;
    border: 1px solid red;
    padding: 0;
    margin: 0;
    text-align: center;
}

.action-icons-sidebar{
    display: flex;
    flex-direction: column;
    align-items: start;
  }
.each-icon-sidebar {
    margin-bottom: 5px; 
}
.custom-offcanvas {
  max-width: 50%; 
  width: 50%; 
}
.input-group-sidebar{
  width: auto;
  margin-bottom: 20px;
}
</style>