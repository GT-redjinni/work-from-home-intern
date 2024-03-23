<template>
    <div v-if="userDetails" class="card">
        <div class="card-header bg-white border-2">
            <div class="heading text-subheading grey-color font-600 ms-3 p-2">Update Profile</div>
        </div>
        <div class="card-body mb-3">
            <div class="d-flex bg-white">
                <div class="row w-100 mt-3">
                    <span class="col-sm-12 col-md-12 col-lg-6">
                        <div class="text-center">
                            <img :src="userDetails.profile_photo || defaultProfilePhoto" alt="Profile Photo" height="220rem" width="220rem"
                                class="rounded-circle">
                            <span class="dropdown">
                                <img src="../../../assets/input-camera.png" alt="Change Photo" height="25px"
                                    width="25px" class="rounded-circle input_camera" role="button">
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" @click="removePhoto()" role="button">Remove profile
                                            photo</a></li>
                                    <li><a class="dropdown-item" @click="changePhoto()" role="button">Change profile
                                            photo</a></li>
                                </ul>
                            </span>
                        </div>
                    </span>
                    <span class="col-sm-12 col-md-12 col-lg-6">
                        <form class="form-control border-0">
                            <label for="firstName" class="cp text-desc font-600 text-start">First Name</label>
                            <br>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="text" class="form-control" placeholder="First Name" v-model="firstName"
                                    style="border: none;">
                            </div>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="text" class="form-control" placeholder="Last Name" v-model="lastName"
                                    style="border: none;">
                            </div>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="email" class="form-control" placeholder="Email" v-model="userDetails.email"
                                    style="border: none;">
                            </div>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="text" class="form-control" placeholder="Mobile Number"
                                    v-model="userDetails.mobile" maxlength="10" style="border: none;">
                            </div>
                        </form>
                    </span>
                </div>
            </div>
            <div>
                <form class="form-control border-0">
                    <label for="address" class="cp text-desc font-600">Address</label>
                    <br>
                    <div class="input-group mb-3 border-bottom border-dark">
                        <input type="text" class="form-control" placeholder="Address" v-model="userDetails.address"
                            style="border: none;">
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <div class="input-group mt-1 mb-2">
                                <select name="b_type" id="b_type" class="rounded-3"
                                    style="padding: 5px 5px 5px 5px;width: -webkit-fill-available;">
                                    <option value="Select Your City">{{ sigleState || 'Select Your City'}}</option>
                                    <!-- <option value="Gujarat">Gujarat</option> -->
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mt-1 mb-2">
                                <select name="b_type" id="b_type" class="rounded-3"
                                    style="padding: 5px 5px 5px 5px;width: -webkit-fill-available;">
                                    <option value="Select Your State">{{ sigleCity || 'Select Your City'}}</option>
                                    <!-- <option value="Surat">Surat</option> -->
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3 border-bottom border-dark">
                        <input type="date" class="form-control" placeholder="Date Of Birth ( DD/MM/YYYY )" role="button"
                            style="border: none;">
                    </div>
                    <button class="btn frm-btn text-white w-100 text-center mt-3 mb-1"
                        style="background-color: #F20000;">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'UpdateProfile',
    data() {
        return {
            defaultProfilePhoto:require('../../../assets/user1.jpg'),
            firstName: '',
            lastName: ''
        };
    },
    methods: {
        ...mapActions('userDetails', ['loadUserDetails']),
        ...mapActions('getstate', ['loadSingleState']),
        ...mapActions('getcity', ['loadSingleCity']),
        removePhoto() {
            alert("Photo removed successfully");
        },
        changePhoto() {
            alert("Photo changed successfully");
        },
        splitFullName() {
            const fullName = this.userDetails.name.split(' ');
            if (fullName.length > 1) {
                this.firstName = fullName[0];
                this.lastName = fullName.slice(1).join(' ');
            } else {
                this.firstName = fullName[0];
                this.lastName = '';
            }
        }
    },
    computed: {
        ...mapState('userDetails', ['userDetails']),
        ...mapState('getstate', ['sigleState']),
        ...mapState('getcity', ['sigleCity']),
    },
    async created() {
        await this.loadUserDetails();
        await this.loadSingleState(this.userDetails.state_id);
        await this.loadSingleCity(this.userDetails.city_id);
        this.splitFullName();
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
    box-shadow: none;
}

.dropdown:hover>.dropdown-menu {
    display: block;
    position: absolute;
    left: auto;
    right: 0;
    top: 420%;
    transform: translateX(-22%);
}

.dropdown>.dropdown-toggle:active {
    pointer-events: none;
}

.input_camera {
    margin-left: -12%;
    margin-top: 45%;
}

@media (max-width: 576px) {
    .input_camera {
        margin-left: -12%;
        margin-top: 45%;
    }
}

@media (min-width: 576px) and (max-width: 768px) {
    .input_camera {
        margin-left: -12%;
        margin-top: 40%;
    }
}

@media (min-width: 768px) and (max-width: 992px) {
    .input_camera {
        margin-left: -12%;
        margin-top: 40%;
    }
}
</style>