<template>
    <div class="card">
        <div class="card-header bg-white border-2">
            <div class="heading text-subheading grey-color font-600 ms-3 p-2">Update Profile</div>
        </div>

        <div class="card-body mb-3">
            <div class="d-flex bg-white">
                <div class="row w-100 mt-3">
                    <span class="col-sm-12 col-md-12 col-lg-6">
                        <div class="text-center">
                            <img src="../../../assets/user-image.jpg" alt="" height="220rem" width="220rem"
                                class="rounded-circle" style="object-fit: cover;">
                            <span class="dropdown">
                                <img src="../../../assets/input-camera.png" alt="" height="25px" width="25px"
                                    class="rounded-circle input_camera" role="button">
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" @click="removePhoto()" role="button">Remove profilephoto</a></li>
                                    <li><a class="dropdown-item" @click="changePhoto()" role="button">Change profilephoto</a></li>
                                </ul>
                            </span>
                        </div>
                    </span>
                    <span class="col-sm-12 col-md-12 col-lg-6">
                        <form class="form-control border-0">
                            <label for="cp" class="cp text-desc font-600 text-start">First Name</label>
                            <br>
                            <div class="input-group mb-3 border-bottom border-danger">
                                <input type="text" class="form-control" placeholder="Rakesh" style="border: none;">
                            </div>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="text" class="form-control" placeholder="Prajapati" style="border: none;">
                            </div>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="email" class="form-control" placeholder="rakeshprajapati@gmail.com"
                                    style="border: none;">
                            </div>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="text" class="form-control" placeholder="Mobile Number"
                                    style="border: none;" maxlength="10">
                            </div>
                        </form>
                    </span>
                </div>
            </div>
            <div>
                <form class="form-control border-0">
                    <label for="cp" class="cp text-desc font-600">Address</label>
                    <br>
                    <div class="input-group mb-3 border-bottom border-danger">
                        <input type="text" class="form-control" placeholder="Address" style="border: none;">
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="text" class="form-control" placeholder="Select Your state"
                                    style="border: none;">
                                <button class="btn p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="text" class="form-control" placeholder="Select Your city"
                                    style="border: none;">
                                <button class="btn p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </button>
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
export default {
    name: 'UpdateProfile',
    methods: {
        removePhoto() {
            alert("Photo removed successfully")
        },
        changePhoto() {
            alert("Photo changed successfully")
        }
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
    left: auto; /* Set left to auto to reset any previous left positioning */
    right: 0; /* Align the right edge of the menu with the button */
    top: 420%;
    transform: translateX(-22%); /* Move the menu to the left */
}

.dropdown>.dropdown-toggle:active {
    /*Without this, clicking will make it sticky*/
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

@media (min-width: 768px)and (max-width: 992px) {
    .input_camera {
        margin-left: -12%;
        margin-top: 40%;
    }
}
</style>