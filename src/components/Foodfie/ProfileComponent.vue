<template>
<div class="card">
        <img src="../../assets/bg-profile.jpg" class="card-img-top bg-img" height="100rem" width="250rem">
        <div class="user-img">
            <img src="../../assets/user-image.jpg" class="border border-white border-3 rounded-circle" style="object-fit: cover;" height="100rem" width="100rem">
        </div>
        <div class="card-body mt-3 mt-md-5">
          <h5 class="card-title text-heading font-600">
            Rakesh Prajapati
            </h5>
          <p class="card-text text-subheading" style="font-weight: 500;color: #969798;">
            Raj Photo Studio
            </p>
          <a href="#" class="btn btn-primary profile-btn mb-2" v-on:click="this.$router.push({ path: '/me' })">View Profile</a>
          <p class=" border-top border-dark mt-2  profile-desc font-400 text-desc">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those very interested.</p>
        </div>
      </div>

      <ProfilePizza/>
      <TicketButton/>
      

      
</template>

<script>
import ProfilePizza from '../Foodfie/ProfilePizza.vue';
import TicketButton from '../Foodfie/TicketButton.vue';
export default{
    name:'ProfileComponent',
    components:{
        ProfilePizza,
        TicketButton,
    }
}
</script>

<style scoped>
.card {
    border-radius: 10px;
}

.card-img-top {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.bg-img{
    position: relative;
}
.user-img{
    position: absolute;
    left: 50px;
    right: 50px;
    top:50px;
}
@media (max-width: 767px) {
  .user-img {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
}
.profile-btn{
    padding: 5px 20px;
    background: #006DC1 0% 0% no-repeat padding-box;
    color: #FFFFFF;
}
.profile-desc{
    color: #727272;
     text-align: left;
    padding-top: 10px;
}

</style>