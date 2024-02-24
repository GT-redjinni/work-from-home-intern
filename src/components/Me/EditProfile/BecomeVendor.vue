<template>

    <!-- Form 1 -->
    <div v-if="currentForm === 1" class="card mb-3">
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
                    <button @click="nextForm" class="btn frm-btn text-white w-100 text-center mt-1" style="background-color: #F20000;">Next</button>
                </form>
            </div>

        </div>
    </div>

    <!-- Form 2 -->
    <div v-if="currentForm === 2" class="card mb-3">
        <div class="card-body">
            <div class="d-flex">
                <button @click="prevForm" class="btn btn-sm frm-btn text-white  text-center mt-1" style="background-color: #F20000;">Back</button>
                <div class="heading text-subheading grey-color font-600 ms-3">Documents of Vendor</div>
            </div>
            <div class="body border-top border-dark mt-3">
                <form class="form-control border-0" style="padding: 10px 50px 10px 50px;">
                    <div class="input-group mb-3">
                        <label for="cp" class="cp text-desc font-400">Type of Business</label>
                        <select name="b_type" id="b_type" class="border rounded-3 border-dark" style="padding: 5px 5px 5px 5px;width: -webkit-fill-available;">
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
                        <label for="cp" class="cp text-desc font-400">Type of Document</label>
                        <select name="b_type" id="b_type" class="border rounded-3 border-dark" style="padding: 5px 5px 5px 5px;width: -webkit-fill-available;">
                            <option value="Select Your Business Type">Select Doc Type</option>
                            <option value="Hotel">PAN</option>
                            <option value="Salon">SSI</option>
                            <option value="Grocery">Shop & Establishment Certificate (Gumastadhra certificate)</option>
                        </select>
                    </div>
                    <label for="cp" class="cp text-desc font-400">Document Number</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="number" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-400">Upload GST Certificate</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="file" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-400">Customer Support Head Code</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="number" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-400">Upload Business Logo</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="file" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-400">Upload Business Place Image</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="file" class="form-control" style="border: none;">
                    </div>
                    <button @click="submitForm" class="btn frm-btn text-white w-100 text-center mt-1" style="background-color: #F20000;">Next</button>
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

<style scoped></style>