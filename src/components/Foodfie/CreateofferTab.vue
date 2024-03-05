<template>
    <div class="mt-2">
            <form class="form-control border-0" style="padding: 10px 50px 10px 50px;">
                    <p class="text-start mb-1">Offer Title</p>
                    <div class="input-group mb-3 border-bottom border-danger">
                        <input type="text" class="form-control" placeholder="Offer Title" style="border: none;">
                    </div>
                    <p class="text-start mb-1">Upload Offer Image</p>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" accept="image/png, image/jpeg">
                    </div>
                    <div class="input-group mb-3">
                        <textarea name="address" id="address" cols="100" rows="4" placeholder="About Offer..." class="border-subtule rounded-3 p-2"></textarea>
                    </div>
                    <div class="row mb-1">
                        <div class="col">
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="text" class="form-control" placeholder="About Offer (7Days)"
                                    style="border: none;">
                                </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="number" class="form-control" placeholder="Person"
                                    style="border: none;">
                                 </div>
                        </div>
                    </div>
                    <br>
                    <div class="input-group mb-1 border-bottom border-dark">
                        <input type="text" class="form-control" style="border: none;" placeholder="Address">
                    </div>
                </form>
              </div>
</template>

<script>
    export default {
        name:'CreateofferTab'
    }
</script>

<style scoped>

</style>