<template>
    <div class="card">
        <div class="card-header bg-white border-2">
            <div class="heading text-subheading grey-color font-600 ms-3 p-2">Update Profile</div>
        </div>
        <div class="card-body mb-3">
            <div class="body mt-3" style="display: flex; align-items: center; justify-content: space-between;">
                <div style="flex: 1;" class="ms-5 mt-2">
                    <div class="dropdown" role="button">
                        <img src="../../../assets/user-image.jpg" alt="" height="250px" width="250px"
                            class="rounded-circle" style="object-fit: cover;">
                        <img src="../../../assets/input-camera.png" alt="" height="25px" width="25px"
                            class="rounded-circle input_camera">
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" @click="removePhoto()" role="button">Remove profile photo</a>
                            </li>
                            <li><a class="dropdown-item" @click="changePhoto()" role="button">Change profile photo</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style="flex: 2; padding: 10px 75px 10px 75px;">
                    <label for="cp" class="cp text-desc font-600">First Name</label>
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
                        <input type="text" class="form-control" placeholder="Mobile Number" style="border: none;" maxlength="10">
                    </div>

                </div>
            </div>
            <div>
                <form class="form-control border-0" style="padding: 10px 50px 10px 50px;">
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
.input_camera {
    position: absolute;
    left: 80%;
    top: 80%;
    right: inherit;
    bottom: auto;
    cursor: pointer;
}

input:focus {
    outline: none;
    box-shadow: none;
}

.dropdown:hover>.dropdown-menu {
    display: block;
}

.dropdown>.dropdown-toggle:active {
    /*Without this, clicking will make it sticky*/
    pointer-events: none;
}
</style>