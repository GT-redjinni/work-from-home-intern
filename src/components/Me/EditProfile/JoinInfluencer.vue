<template>
    <div class="card mb-3">
        <div class="card-body">
            <div class="heading text-subheading grey-color font-600 ms-3">Become an Influencer</div>
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
                            <label for="cp" class="cp text-desc font-400">Area Pincode</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="number" class="form-control" style="border: none;" min="6" max="6">
                            </div>
                        </div>
                    </div>
                    <div class="row input-group mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">State</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="text" class="form-control" style="border: none;">
                            </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">City</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input type="number" class="form-control" style="border: none;">
                            </div>
                        </div>
                    </div>
                    <div v-for="(platform, index) in platforms" :key="index" class="row input-group mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">Platform</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input v-model="platform.platform" type="text" class="form-control" style="border: none;">
                            </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">Social Media Link</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input v-model="platform.socialMediaLink" type="url" class="form-control"
                                    style="border: none;">
                            </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-400">Follower</label>
                            <div class="input-group mb-3 border rounded-3 border-dark">
                                <input v-model="platform.follower" type="number" class="form-control" style="border: none;">
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button @click="addPlatform" type="button" class="btn btn-primary text-white text-center">Add</button>
                    </div>
                    <button class="btn frm-btn text-white w-100 text-center mt-3" style="background-color: #F20000;">Submit</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'JoinInfluencer',
    data(){
        return{
            platforms: [{ platform: '', socialMediaLink: '', follower: '' }]
        }
    },
    methods: {
    addPlatform() {
      this.platforms.push({ platform: '', socialMediaLink: '', follower: '' });
    }
  }
}
</script>

<style scoped></style>