<template>
    <div class="card" v-if="userDetails">
        <div class="d-flex border-bottom border-dark">
            <div class="heading ms-2 p-2 text-subheading font-600" style="color: #5E5E5E;">
                Personal Info
            </div>
            <div class="ms-auto me-2 p-2 text-subheading" style="color: #787878;cursor: pointer;" v-on:click="this.$router.push({ path: '/edit' })">
                Edit
            </div>
        </div>
        <div class="card-body text-start">
                <span class="head">About Us</span>
                <br>
                <span class="desc">Hi, I'm {{ userDetails.name }}, I'm 36 and I work as a Raj Photo Studio Owner in Surat.</span>
                <br>
                <span class="head">Establishment Year</span>
                <br>
                <span class="desc">{{ formattedDate }}</span>
                <br>
                <span class="head">Phone Number</span>
                <br>
                <span class="desc">{{ userDetails.mobile }}</span>
                <br>
                <span class="head">Email Address</span>
                <br>
                <span class="desc">{{ userDetails.email }}</span>
                <br>
                <span class="head">Address</span>
                <br>
                <span class="desc">{{ userDetails.address }}</span>
            
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

    export default {
        name:'PersonalInfo',
        methods: {
            ...mapActions('userDetails', ['loadUserDetails']),
        },
        computed: {
            ...mapState('userDetails', ['userDetails']),
            formattedDate() {
                if (this.userDetails && this.userDetails.created_at) {
                    const createdAt = new Date(this.userDetails.created_at);
                    const formattedDate = `${createdAt.getDate()} ${this.monthNames[createdAt.getMonth()]}, ${createdAt.getFullYear()}`;
                    return formattedDate;
                }
                return '';
            },
            monthNames() {
                return [
                    "January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "October",
                    "November", "December"
                ];
            }
        },
        async created() {
            await this.loadUserDetails();
        }
    }
</script>

<style scoped>
.head{
    color: #787878;
    font-size: 18px;
}
.desc{
    color: #C1C1C1;
    font-size: 15px;
}
</style>