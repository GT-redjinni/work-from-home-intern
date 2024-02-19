<template>
    <div class="container">
        <div class="col-10 border rounded-3 bg-white ms-auto me-auto mt-3 mb-3">
            <div><img src="../../assets/MePizza-img.jpg" alt="" height="250px" width="100%" class="rounded-top" style="overflow: hidden;"></div>
            <div class="user-img">
            <img src="../../assets/user-image.jpg" class="border border-white border-3 rounded-circle" height="100rem" width="100rem">
            </div>
            <div class="d-flex bg-white mt-3 mb-1">
                <div class="col ms-3">
                <span class="text-heading font-600 grey-color">Rakesh Prajapati</span>
                <br>
                <span class="text-subheading font-400 grey-color" style="color: #B8B8B8">Raj Photo Studio</span>
                </div>
                <div class="me-3"><EliteButton/></div>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-12 col-md-1"></div>
            <div class="col-12 col-md-3">
                <BalancePost/>
                <br>
                <PersonalInfo/>
                <br>
                <MePost/>
                <br>
                <MeTagPost/>
            </div>
            <div class="col-12 col-md-7">
                <MeTabs/>
                
            </div>
        </div>
    </div>
</template>

<script>
import MePost from '../Me/MePost.vue';
import MeTagPost from '../Me/MeTagPost.vue';
import BalancePost from '../Me/BalancePost.vue'
import PersonalInfo from '../Me/PersonalInfo.vue'
import EliteButton from '../Foodfie/EliteButton.vue';
import MeTabs from '../Me/MeTabs.vue';
    export default {
        name:'MeComponent',
        components:{
            MePost,
            MeTagPost,
            BalancePost,
            PersonalInfo,
            EliteButton,
            MeTabs
        }
    }
</script>

<style scoped>
.user-img{
    position: absolute;
    left: 350px;
    top: 260px;
}
@media (max-width: 425px) {
  .user-img {
    left: 50%; 
    transform: translateX(-50%);
  }
}
</style>