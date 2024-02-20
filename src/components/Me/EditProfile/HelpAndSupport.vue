<template>
    <div class="card mb-3">
        <div class="card-body">
            <div class="heading text-subheading grey-color font-600 ms-3">Raise a Ticket</div>
            <div class="body border-top border-dark mt-3">
                <form class="form-control border-0" style="padding: 10px 50px 10px 50px;">
                    <label for="cp" class="cp text-desc font-400">User Name</label>
                    <br>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-400">Email Address</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="email" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-400">Mobile Number</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="number" class="form-control" style="border: none;" min="10" max="10">
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
                                <input type="text" class="form-control" style="border: none;">
                                </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">State</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="number" class="form-control" style="border: none;" min="6" max="6">
                                 </div>
                        </div>
                    </div>
                    <div class="row input-group mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">City</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="text" class="form-control" style="border: none;">
                                </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">Pin</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="number" class="form-control" style="border: none;">
                                 </div>
                        </div>
                    </div>
                    <label for="cp" class="cp text-desc font-400">Upload Photo</label>
                    <div class="input-group mb-3 border rounded-3 border-dark">
                        <input type="email" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-400">Describe the problem</label>
                    <div class="input-group mb-3">
                        <textarea name="address" id="address" cols="100" rows="4" style="border: 1px solid black;border-radius: 8px;"></textarea>
                    </div>

                    <button class="btn frm-btn text-white w-100 text-center mt-1">Apply</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HelpAndSupport'
}
</script>

<style scoped></style>