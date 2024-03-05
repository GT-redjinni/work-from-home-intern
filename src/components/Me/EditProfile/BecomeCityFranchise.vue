<template>
    <div class="card mb-3">
        <div class="card-header bg-white border-2">
            <div class="heading text-subheading grey-color font-600 ms-3 p-2">City Franchise</div>
        </div>
        <div class="card-body">
            <div class="body">
                <form class="form-control border-0" style="padding: 5px 50px 10px 50px;">
                    <label for="cp" class="cp text-desc font-600">Business Name</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Turnover</label>
                    <div class="input-group mb-3">
                        <select name="b_type" id="b_type" class="border rounded-3 border-dark" style="padding: 5px 5px 5px 5px;width: -webkit-fill-available;">
                            <option value="Select Your Business Type">Select Your Business Type</option>
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
                    <label for="cp" class="cp text-desc font-600">Turnover</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="number" class="form-control" style="border: none;" min="10" max="10">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Business Mobile</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="number" class="form-control" style="border: none;" min="10" max="10">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Business Email</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="email" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Address</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>

                    <div class="row mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">Country</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="text" class="form-control" style="border: none;">
                                </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">State</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="number" class="form-control" style="border: none;" min="6" max="6">
                                 </div>
                        </div>
                    </div>
                    <div class="row mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">City</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="text" class="form-control" style="border: none;">
                                </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">Pin</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="number" class="form-control" style="border: none;">
                                 </div>
                        </div>
                    </div>
                    <button class="btn frm-btn text-white w-100 text-center mt-1" style="background-color: #F20000;">Apply</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'BecomCityFranchise'
}
</script>

<style scoped>
input:focus {
    outline: none;
    box-shadow: none;
}
</style>