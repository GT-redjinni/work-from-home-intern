<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-3">
                <div class="text-start p-3 text-white rounded-top" style="background: #EB0E19;">
                    <span class="text-subheading text-white font-600 color-dark ms-2">Setting </span> 
                </div>
            <ul class="list-group bg-light rounded-3">
                <button :class="{ 'btn-list-active': activeTab === 'changePass' }" class="btn btn-list mt-3" v-on:click="showContent('changePass')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="text-subheading-2 grey-color font-600" :style="{ color: activeTab === 'changePass' ? 'white' : '' }">Change Password </span> 
                        </div>
                        <div class="ms-auto me-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'vendorAccount' }" class="btn btn-list mt-1 " @click="showContent('vendorAccount')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="text-subheading-2 grey-color font-600" :style="{ color: activeTab === 'vendorAccount' ? 'white' : '' }">My vendor Account </span> 
                        </div>
                        <div class="ms-auto me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'notification' }" class="btn btn-list mt-1 " @click="this.$router.push({path:'/notification'})">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="text-subheading-2 grey-color font-600">Notification </span> 
                        </div>
                        <div class="ms-auto me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'permission' }" class="btn btn-list mt-1 " @click="showContent('permission')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="text-subheading-2 grey-color font-600" :style="{ color: activeTab === 'permission' ? 'white' : '' }">Permission </span> 
                        </div>
                        <div class="ms-auto me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'security' }" class="btn btn-list mt-1 " @click="showContent('security')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="text-subheading-2 grey-color font-600" :style="{ color: activeTab === 'security' ? 'white' : '' }">Security </span> 
                        </div>
                        <div class="ms-auto me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'privacyPolicy' }" class="btn btn-list mt-1 " @click="showContent('privacyPolicy')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="text-subheading-2 grey-color font-600" :style="{ color: activeTab === 'privacyPolicy' ? 'white' : '' }">Privacy Policy </span> 
                        </div>
                        <div class="ms-auto me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'termsAndCondition' }" class="btn btn-list mt-1 " @click="showContent('termsAndCondition')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="text-subheading-2 grey-color font-600" :style="{ color: activeTab === 'termsAndCondition' ? 'white' : '' }">Terms And Condition </span> 
                        </div>
                        <div class="ms-auto me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'aboutUs' }" class="btn btn-list mt-1 " @click="showContent('aboutUs')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="text-subheading-2 grey-color font-600" :style="{ color: activeTab === 'aboutUs' ? 'white' : '' }">About Us </span> 
                        </div>
                        <div class="ms-auto me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'contactUs' }" class="btn btn-list mt-1 " @click="showContent('contactUs')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="text-subheading-2 grey-color font-600" :style="{ color: activeTab === 'contactUs' ? 'white' : '' }">Contact Us </span> 
                        </div>
                        <div class="ms-auto me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
                <button :class="{ 'btn-list-active': activeTab === 'faqs' }" class="btn btn-list mt-1  mb-5" @click="showContent('faqs')">
                    <div class="d-flex">
                        <div class="text-start ms-3">
                                <span class="text-subheading-2 grey-color font-600" :style="{ color: activeTab === 'faqs' ? 'white' : '' }">FAQ’s </span> 
                        </div>
                        <div class="ms-auto me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                        </div>
                </button>
            </ul>
            </div>
            <div class="col-md-7 overflow" style="overflow-y: scroll;max-height: 660px;">
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

<style scoped>
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
    text-align: left;
    padding: 10px 15px 15px 10px;
}
.btn-list, .btn-list:hover{
    background-color: #F5E8E8;
}
.btn-list-active, .btn-list-active:hover {
  background-color: #FF9BA0;
  opacity: 100%;
  color: whitesmoke;
} 
.overflow::-webkit-scrollbar {
    display: none;
}
</style>