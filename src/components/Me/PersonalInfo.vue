<template>
    <div class="card">
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
                <span class="desc">Hi, I'm Rakesh Prajapati, I'm 36 and I work as a Raj Photo Studio Owner in Surat.</span>
                <br>
                <span class="head">Establishment Year</span>
                <br>
                <span class="desc">December, 1985</span>
                <br>
                <span class="head">Phone Number</span>
                <br>
                <span class="desc">+ 91 9892324359</span>
                <br>
                <span class="head">Email Address</span>
                <br>
                <span class="desc">rajprajapati1985@gmail.com</span>
                <br>
                <span class="head">Address</span>
                <br>
                <span class="desc">Ontario Canada.</span>
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'PersonalInfo'
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