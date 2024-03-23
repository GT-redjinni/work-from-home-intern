<template>
    <div class="col-md-12 col-lg-10 border rounded-3 bg-white ms-auto me-auto mt-3 mb-3" v-if="userDetails">
        <div>
            <img src="../../assets/MePizza-img.jpg" alt="" height="250px" width="100%" class="rounded-top"
                style="overflow: hidden;">
        </div>
        <!-- <div class="user-img"> -->
        <img :src="userDetails.profile_photo_thumb" class="border border-white border-3 rounded-circle user-img"
            height="110rem" width="110rem">
        <!-- </div> -->
        <div class="d-flex bg-white mt-3 mb-1">
            <div class="col ms-3">
                <span class="text-heading font-600 grey-color">{{ userDetails.name }}</span>
                <br>
                <span class="text-subheading font-400 grey-color" style="color: #B8B8B8">Raj Photo Studio</span>
            </div>
            <div class="me-3 mt-0">
                <EliteButton />
            </div>
        </div>
    </div>
</template>

<script>
import EliteButton from '../Foodfie/EliteButton.vue';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'MeProfile',
    components: {
        EliteButton
    },
    methods: {
        ...mapActions('userDetails', ['loadUserDetails']),
    },
    computed: {
        ...mapState('userDetails', ['userDetails'])
    },
    async created() {
        await this.loadUserDetails();
    }
}
</script>

<style scoped>
.user-img {
    margin-left: 2%;
    margin-top: -9%;
    margin-bottom: -4%;

}

@media (max-width: 576px) {
    .user-img {
        margin-left: 5%;
        margin-top: -20%;
        margin-bottom: -5%;
    }
}

@media (min-width: 576px) and (max-width: 768px) {
    .user-img {
        margin-left: 5%;
        margin-top: -20%;
        margin-bottom: -4%;
    }
}

@media (min-width: 768px)and (max-width: 992px) {
    .user-img {
        margin-left: 5%;
        margin-top: -15%;
    }
}
</style>