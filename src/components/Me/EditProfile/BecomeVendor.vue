<template>
    <div class="card mb-3">
        <div class="card-body">
            <div class="heading text-subheading grey-color font-600 ms-3">Details Of Vendor</div>
            <div class="body border-top border-dark mt-3">
                <form class="form-control border-0" style="padding: 10px 50px 10px 50px;">
                    <label for="cp" class="cp text-desc font-400">Business Name</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-400">Business Email</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="email" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-400">Business Contact</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-400">Address</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>

                    <div class="row input-group mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">Country</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="text" class="form-control" placeholder="Select Your state"
                                    style="border: none;">
                                </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">Area Pincode</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="number" class="form-control" placeholder="Select Your city"
                                    style="border: none;">
                                 </div>
                        </div>
                    </div>
                    <div class="row input-group mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">Opening Time</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="time" class="form-control" placeholder="Select Your state"
                                    style="border: none;">
                                </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">Closing Time</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="time" class="form-control" placeholder="Select Your city"
                                    style="border: none;">
                                 </div>
                        </div>
                    </div>
                    <label for="cp" class="cp text-desc font-400">Brief Description of Your Business</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <button class="btn frm-btn text-white w-100 text-center mt-1">Next</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'BecomeVendor'
}
</script>

<style scoped></style>