<template>
    <!-- post 1 -->
    <div class="card border mt-3 rounded-3">
    <div class="card-body">
    <form class="w-100">
    <img src="../../assets/user-image.jpg" height="40px" width="40px" class="float-start img-posts" />
    <div class="float-start mx-2">
        <h5 class="text-subheading mb-0">Rajkumar Gupta</h5>
        <p class="text-desc mt-0"> <img src="../../assets/time-icon.png" height="15px" width="15px"> 30 Min | <img src="../../assets/location-icon.png" height="15px" width="15px"> Surat City</p>
    </div>
    
        <div class="ms-auto dropdown">
            <button class="btn dropdown-toggle dropdown-toggle-split" type="button" id="dropdownMenuButton"
                 data-mdb-toggle="dropdown" aria-expanded="false">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        </svg></button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Hide</a></li>
                        <li><a class="dropdown-item" href="#">Copy Link</a></li>
                        <li><a class="dropdown-item" href="#">Report</a></li>
                    </ul>
                </div>

  </form>
  <p class="text-start">On the other hand,we denouncewith righteous indignation and dislike me be beguilded and demoralized</p>
  <img src="../../assets/post1.png" class="img-fluid">
  <div class="btn-group mt-3 action-buttons row">
  <div class="row justify-content-between ms-auto me-auto">
        <div class="col text-start">
          <img src="../../assets/like-icon.svg" class="lcsv" role="button" v-on:click="toggleLikes"/>
          {{ likes }} Likes
        </div>
        <div class="col text-center">
          <img src="../../assets/comment-icon.svg" class="lcsv" role="button"/>
          125 Comments
        </div>
        <div class="col text-end">
          <img src="../../assets/share-icon.svg" class="lcsv" role="button" v-on:click="toggleShare"/>
          15 Share
        </div>
      </div>
      <div v-if="showShare" class="share-buttons mt-3 mx-3">
      <button class="share-button linkedin">
        <img src="../../assets/linkedin-icon.png" class="share-icon" alt="LinkedIn" />
      </button>
      <button class="share-button facebook">
        <img src="../../assets/facebook-icon.png" class="share-icon" alt="Facebook" />
      </button>
      <button class="share-button instagram">
        <img src="../../assets/instagram-icon.png" class="share-icon" alt="Instagram" />
      </button>
      <button class="share-button whatsapp">
        <img src="../../assets/whatsapp-icon.png" class="share-icon" alt="WhatsApp" />
      </button>
      <button class="share-button youtube">
        <img src="../../assets/youtube-icon.png" class="share-icon" alt="YouTube" />
      </button>
  </div>
  <div class="mt-3 text-start">
    <form class="w-100 text-start mt-3">
        <img src="../../assets/user1.jpg" class="img-search rounded-circle" height="50px" width="50px" />
        <div class="float-start comments w-100">
        <h5 style="font-size: medium; margin-bottom: 0;">Sonal Rahane</h5>
        <p class="text-desc mt-0">Digital Marketing | Social Media
          <br>
         It was popularised in 1960s with the release of letraset</p>
    </div>
    </form>  
    </div>
    <div class="text-start">
      <a class="nostyle" href="#" v-on:click="this.$router.push({ path: '/post' })">view more comments</a>
    </div>

</div>

  </div>          
    </div>
    <!-- post 2 -->
    <div class="card border mt-3 rounded-3">
    <div class="card-body">
    <form class="w-100">
    <img src="../../assets/user-image.jpg" height="40px" width="40px" class="float-start img-posts" />
    <div class="float-start mx-2">
        <h5 class="text-subheading mb-0">Rajkumar Gupta</h5>
        <p class="text-desc mt-0"> <img src="../../assets/time-icon.png" height="15px" width="15px"> 30 Min | <img src="../../assets/location-icon.png" height="15px" width="15px"> Surat City</p>
    </div>
    
        <div class="ms-auto dropdown">
            <button class="btn dropdown-toggle dropdown-toggle-split" type="button" id="dropdownMenuButton"
                 data-mdb-toggle="dropdown" aria-expanded="false">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        </svg></button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Hide</a></li>
                        <li><a class="dropdown-item" href="#">Copy Link</a></li>
                        <li><a class="dropdown-item" href="#">Report</a></li>
                    </ul>
                </div>

  </form>
  <p class="text-start">On the other hand,we denouncewith righteous indignation and dislike me be beguilded and demoralized</p>
  <img src="../../assets/post1.png" class="img-fluid">
  <div class="btn-group mt-3 action-buttons row">
  <div class="row justify-content-between ms-auto me-auto">
        <div class="col text-start">
          <img src="../../assets/like-icon.svg" class="lcsv" role="button" v-on:click="toggleLikes"/>
          {{ likes }} Likes
        </div>
        <div class="col text-center">
          <img src="../../assets/comment-icon.svg" class="lcsv" role="button"/>
          125 Comments
        </div>
        <div class="col text-end">
          <img src="../../assets/share-icon.svg" class="lcsv" role="button" v-on:click="toggleShare"/>
          15 Share
        </div>
      </div>
      <div v-if="showShare" class="share-buttons mt-3 mx-3">
      <button class="share-button linkedin">
        <img src="../../assets/linkedin-icon.png" class="share-icon" alt="LinkedIn" />
      </button>
      <button class="share-button facebook">
        <img src="../../assets/facebook-icon.png" class="share-icon" alt="Facebook" />
      </button>
      <button class="share-button instagram">
        <img src="../../assets/instagram-icon.png" class="share-icon" alt="Instagram" />
      </button>
      <button class="share-button whatsapp">
        <img src="../../assets/whatsapp-icon.png" class="share-icon" alt="WhatsApp" />
      </button>
      <button class="share-button youtube">
        <img src="../../assets/youtube-icon.png" class="share-icon" alt="YouTube" />
      </button>
  </div>
  <div class="mt-3 text-start">
    <form class="w-100 text-start mt-3">
        <img src="../../assets/user1.jpg" class="img-search rounded-circle" height="50px" width="50px" />
        <div class="float-start comments w-100">
        <h5 class="text-subheading font-600">Sonal Rahane</h5>
        <p class="text-desc mt-0">Digital Marketing | Social Media
          <br>
         It was popularised in 1960s with the release of letraset</p>
    </div>
    </form>  
    </div>
    <div class="text-start">
      <a class="nostyle" href="#" v-on:click="this.$router.push({ path: '/post' })">view more comments</a>
    </div>

</div>

  </div>          
    </div>
</template>

<script>
import axios from '@/axios';
    export default {
        name:'UserPost',
        data(){
          return{
            likes:125,
            showLikes:true,
            showShare:false,
          }
        },

        created(){
          this.loadingPost();
        },

        methods:{
        toggleLikes(){
          if(this.showLikes){
            this.likes++;
          }
          else{
            this.likes--;
          }
          this.showLikes=!this.showLikes;
        },
        toggleShare(){
          this.showShare=!this.showShare;
        },
        async loadingPost() {
        
        //     method 4:chat gpt    
            try {
                const authToken = localStorage.getItem('token');
                // const token=JSON.parse(authToken); 
                
                const response = await axios.get("customers/posts",{
                  headers:{
                    DeviceID:'11111',
                  versionName:'1.0.0',
                  DeviceType:'0',
                  Authorization: `Bearer ${authToken}`,
                  }
                  
                });
                console.log('response = ', response);
              } 
              catch (error) {
                console.error(error);
              }

        },
      },
      // mounted(){
      //     console.log(localStorage.getItem('token'));
      //     this.loadingPost();
      // }
    }
</script>

<style scoped>
.img-posts{
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
}
form{
    background: #fff;
    /* width: 600px;
    height: 55px; */
    display: flex;
}
form input{
    flex: 1;
    border:none;
    outline: none;
}
form .img-search{
    align-self: center;
    height: 60px;
    width: 75px;
    padding: 10px 20px;
}
.share-buttons {
  display: flex;
  justify-content: space-between; /* Distribute buttons evenly */
}

.share-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}

.share-button:hover {
  transform: scale(1.1); /* Increase size on hover */
}

.share-icon {
  height: 35px;
  width: 35px;
}
.action-buttons{
    display: flex; 
  justify-content: space-between; 
}
a.nostyle:link {
    text-decoration: inherit;
    color: #8F8F8F;
    cursor: pointer;
    text-decoration: underline;
}

a.nostyle:visited {
    text-decoration: inherit;
    color: #8F8F8F;
    cursor: auto;
}
.dropdown-toggle::after{
    display: none;
}
.dropdown:hover>.dropdown-menu {
  display: block;
}

.dropdown>.dropdown-toggle:active {
  /*Without this, clicking will make it sticky*/
    pointer-events: none;
}
</style>