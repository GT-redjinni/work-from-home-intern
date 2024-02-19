<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-3">
            <ul class="list-group bg-light rounded-3">
                        <div class="text-start p-3 text-white rounded-top" style="background: #EB0E19;">
                                <span class="fw-semibold color-dark ms-3">Setting </span> 
                        </div>
                <button :class="{ 'btn-list-active': activeTab === 'changePass' }" class="btn btn-list mt-2 border rounded-2 p-2 m-1" v-on:click="showContent('changePass')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="fw-semibold">Change Password </span> 
                        </div>
                        <div class="ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'vendorAccount' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('vendorAccount')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="fw-semibold">My vendor Account </span> 
                        </div>
                        <div class="ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'termsAndCondition' }" class="btn btn-list border rounded-2 p-2 m-1" @click="this.$router.push({path:'/notification'})">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="fw-semibold">Notification </span> 
                        </div>
                        <div class="ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'permission' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('permission')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="fw-semibold">Permission </span> 
                        </div>
                        <div class="ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'security' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('security')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="fw-semibold">Security </span> 
                        </div>
                        <div class="ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'privacyPolicy' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('privacyPolicy')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="fw-semibold">Privacy Policy </span> 
                        </div>
                        <div class="ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'termsAndCondition' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('termsAndCondition')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="fw-semibold">Terms And Condition </span> 
                        </div>
                        <div class="ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'aboutUs' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('aboutUs')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="fw-semibold">About Us </span> 
                        </div>
                        <div class="ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'contactUs' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('contactUs')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="fw-semibold">Contact Us </span> 
                        </div>
                        <div class="ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'faqs' }" class="btn btn-list border rounded-2 p-2 m-1" @click="showContent('faqs')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="fw-semibold">FAQ’s </span> 
                        </div>
                        <div class="ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
            </ul>
            </div>
            <div class="col-md-7">
                    <div v-show="activeTab === 'changePass'" class="content" id="changePass">
                        <ChangePassword/>
                    </div>
                    <div v-show="activeTab === 'vendorAccount'" class="content" id="vendorAccount">
                        <VendorAccount/>
                    </div>
                    <div v-show="activeTab === 'permission'" class="content" id="permission">
                        <PermissionComponent/>
                    </div>
                    <div v-show="activeTab === 'security'" class="content" id="security">
                        <SecurityComponent/>
                    </div>
                    <div v-show="activeTab === 'privacyPolicy'" class="content" id="privacyPolicy">
                        <PrivacyPolicy/>
                    </div>
                    <div v-show="activeTab === 'termsAndCondition'" class="content" id="termsAndCondition">
                        <TandC/>
                    </div>
                    <div v-show="activeTab === 'aboutUs'" class="content" id="aboutUs">
                        <AboutUs/>
                    </div>
                    <div v-show="activeTab === 'contactUs'" class="content" id="contactUs">
                        <ContactUs/>
                    </div>
                    <div v-show="activeTab === 'faqs'" class="content" id="faqs">
                        <FaqS/>
                    </div>
                </div>
                <div class="col-md-1"></div>
        </div>
    </div>
</template>

<script>
import ChangePassword from './ChangePassword.vue';
import VendorAccount from './VendorAccount.vue'
import TandC from './TandC.vue';
import AboutUs from './AboutUs.vue';
import ContactUs from './ContactUs.vue';
import PermissionComponent from './PermissionComponent.vue'
import SecurityComponent from './SecurityComponent.vue'
import PrivacyPolicy from './PrivacyPolicy.vue';
import FaqS from './FaqS.vue'
    export default {
        name:'SettingComponent',
        components:{
            ChangePassword,
            VendorAccount,
            PermissionComponent,
            SecurityComponent,
            PrivacyPolicy,
            TandC,
            AboutUs,
            ContactUs,
            FaqS,
        },
        data() {
        return {
            activeTab: 'changePass', 
        };
    },
    methods: {
        showContent(tab) {
            this.activeTab = tab;
        },
    },
    }
</script>

<style>
.content {
  display: none;
  width: 100%;
  height: 100%; 
}

#changePass, #vendorAccount ,#permission, #security, #privacyPolicy, #termsAndCondition , #aboutUs, #contactUs, #faqs
{
  display: block;
}
button{
    border: none;
    /* background: transparent; */
    text-align: left;
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