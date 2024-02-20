<template>
    <div class="card">
                    <div class="card-body">
                        <div class="heading text-subheading grey-color font-600 ms-3">Update Profile</div>
                        <div class="body border-top border-dark mt-3" style="display: flex; align-items: center; justify-content: space-between;">
                        <div style="flex: 1;" class="ms-5">
                            <img src="../../../assets/user-image.jpg" alt="" height="250px" width="250px" class="rounded-circle">
                        </div>
                        <div style="flex: 2; padding: 20px 75px 10px 75px;">
                            <label for="cp" class="cp text-desc font-600">First Name</label>
                                <br>
                                <div class="input-group mb-3 border-bottom border-danger">
                                    <input type="text" class="form-control" placeholder="Rakesh" style="border: none;">
                                </div>
                                <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="text" class="form-control" placeholder="Prajapati" style="border: none;">
                                </div>
                                <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="email" class="form-control" placeholder="rakeshprajapati@gmail.com" style="border: none;">
                                </div>
                                <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="text" class="form-control" placeholder="Mobile Number" style="border: none;">
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
                                <!-- <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="password" class="form-control" placeholder="New Password" style="border: none;">
                                </div> -->
                                <div class="row input-group mb-3">
                                <div class="col">
                                    <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="text" class="form-control" placeholder="Select Your state" style="border: none;">
                                    <button class="btn p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    </button>
                                </div>
                                </div>
                                <div class="col">
                                    <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="text" class="form-control" placeholder="Select Your city" style="border: none;">
                                    <button class="btn p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    </button>
                                </div>
                                </div>
                            </div>
                                <div class="input-group mb-3 border-bottom border-dark">
                                    <input type="text" class="form-control" placeholder="Date Of Birth ( DD/MM/YYYY )" style="border: none;">
                                    <button class="btn p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                        </svg>
                                    </button>
                                </div>
                                <button class="btn frm-btn text-white w-100 text-center mt-1">Update</button>
                            </form>
                        </div>

                    </div>
                    </div>
</template>

<script>
    export default {
        name:'UpdateProfile'
    }
</script>

<style scoped>

</style>