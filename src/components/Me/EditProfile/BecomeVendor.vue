<template>

    <!-- Form 1 -->
    <div v-if="currentForm === 1" class="card mb-3">
        <div class="card-header bg-white border-2">
            <div class="heading text-subheading grey-color font-600 ms-3 p-2">Details Of Vendor</div>
        </div>
        <div class="card-body">
            <div class="body">
                <form class="form-control border-0" style="padding: 5px 50px 10px 50px;">
                    <label for="cp" class="cp text-desc font-600">Business Name</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Business Email</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="email" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Business Contact</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Address</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>

                    <div class="row  mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">Country</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="text" class="form-control" placeholder="Select Your state"
                                    style="border: none;">
                            </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">Area Pincode</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="number" class="form-control" placeholder="Select Your city"
                                    style="border: none;">
                            </div>
                        </div>
                    </div>
                    <div class="row  mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">Opening Time</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="time" class="form-control" placeholder="Select Your state"
                                    style="border: none;">
                            </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">Closing Time</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="time" class="form-control" placeholder="Select Your city"
                                    style="border: none;">
                            </div>
                        </div>
                    </div>
                    <label for="cp" class="cp text-desc font-600">Brief Description of Your Business</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <button @click="nextForm" class="btn frm-btn text-white w-100 text-center mt-1"
                        style="background-color: #F20000;">Next</button>
                </form>
            </div>

        </div>
    </div>

    <!-- Form 2 -->
    <div v-if="currentForm === 2" class="card mb-3">
        <div class="card-header bg-white border-2">
            <div class="d-flex">
                <button @click="prevForm" class="btn btn-sm frm-btn text-white  text-center"
                    style="background-color: #F20000;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor"
                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                </button>
                <div class="heading text-subheading grey-color font-600 ms-3 p-2">Documents of Vendor</div>
            </div>
        </div>
        <div class="card-body">
            <div class="body">
                <form class="form-control border-0" style="padding: 5px 50px 10px 50px;">
                    <div class="input-group mb-3">
                        <label for="cp" class="cp text-desc font-600">Type of Business</label>
                        <select name="b_type" id="b_type" class="border rounded-3 border-dark"
                            style="padding: 5px 5px 5px 5px;width: -webkit-fill-available;">
                            <option value="Restaurants">Restaurants</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Salon">Salon</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Mall">Mall</option>
                            <option value="Multiplex">Multiplex</option>
                            <option value="Gym">Gym</option>
                            <option value="Dairy">Dairy</option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <label for="cp" class="cp text-desc font-600">Type of Document</label>
                        <select name="b_type" id="b_type" class="border rounded-3 border-dark"
                            style="padding: 5px 5px 5px 5px;width: -webkit-fill-available;">
                            <option value="Select Your Business Type">Select Doc Type</option>
                            <option value="Hotel">PAN</option>
                            <option value="Salon">SSI</option>
                            <option value="Grocery">Shop & Establishment Certificate (Gumastadhra certificate)</option>
                        </select>
                    </div>
                    <label for="cp" class="cp text-desc font-600">Document Number</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="number" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Upload GST Certificate</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="file" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Customer Support Head Code</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="number" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Upload Business Logo</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="file" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Upload Business Place Image</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="file" class="form-control" style="border: none;">
                    </div>
                    <button @click="submitForm" class="btn frm-btn text-white w-100 text-center mt-1"
                        style="background-color: #F20000;">Next</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'BecomeVendor',
    data() {
        return {
            currentForm: 1
        };
    },
    methods: {
        nextForm() {
            this.currentForm = 2;
        },
        prevForm() {
            this.currentForm = 1;
        },
        submitForm() {
            alert("Form Submitted Successfully")
        }
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
    box-shadow: none;
}
</style>