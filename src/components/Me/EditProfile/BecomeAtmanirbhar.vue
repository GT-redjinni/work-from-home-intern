<template>
    <div class="card mb-3">
        <div class="card-header bg-white border-2">
            <div class="heading text-subheading grey-color font-600 ms-3 p-2">Apply For Atmanirbhar</div>
        </div>
        <div class="card-body">
            <div class="body">
                <form class="form-control border-0" style="padding: 5px 50px 10px 50px;">
                    <label for="cp" class="cp text-desc font-600">Full Name</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Business Name</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Email Id</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="email" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Permanent Address</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Business Address</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <!-- <label for="cp" class="cp text-desc font-600">Business Contact</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div> -->

                    <div class="row mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">State</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="text" class="form-control" placeholder="Select Your state"
                                    style="border: none;">
                                </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">City</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="number" class="form-control" placeholder="Select Your city"
                                    style="border: none;">
                                 </div>
                        </div>
                    </div>
                    <label for="cp" class="cp text-desc font-600">Current Occupation</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Net Annual Income in INR</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Education (Please Specify)</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Total Year of Experience</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Why are you willing to join Redprix?</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Why should Redprix support you with subsidy</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Pan Number</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Upload Pancard</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="file" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Aadhar Number</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="number" class="form-control" style="border: none;" min="12" max="12">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Upload Aadharcard</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="file" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">GST Number</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="number" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Upload GST Certificate</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="file" class="form-control" style="border: none;">
                    </div>
                    <input type="checkbox" class="mb-3" required> I declare that my annual income is less than Rs 3 LPA
                    <button class="btn confirm-btn text-white w-100 text-center mt-1">Next</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'BecomeAtmanirbhar'
}
</script>

<style scoped>
input:focus {
    outline: none;
    box-shadow: none;
}
</style>