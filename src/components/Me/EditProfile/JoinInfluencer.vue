<template>
    <div class="card mb-3">
        <div class="card-header bg-white border-2">
            <div class="heading text-subheading grey-color font-600 ms-3 p-2">Become an Influencer</div>
        </div>
        <div class="card-body">
            <div class="body">
                <form class="form-control border-0" style="padding: 5px 30px 10px 30px;">
                    <label for="cp" class="cp text-desc font-600">User Name</label>
                    <br>
                    <div class="input-group mb-3 border-bottom border-danger">
                        <input type="text" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Email Address</label>
                    <div class="input-group mb-3 border-bottom border-dark">
                        <input type="email" class="form-control" style="border: none;">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Mobile Number</label>
                    <div class="input-group mb-3 border-bottom border-dark">
                        <input type="number" class="form-control" style="border: none;" min="10" max="10">
                    </div>
                    <label for="cp" class="cp text-desc font-600">Address</label>
                    <br>
                    <div class="input-group mb-3 border-bottom border-dark">
                        <input type="text" class="form-control" style="border: none;">
                    </div>

                    <div class="row mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">Country</label>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="text" class="form-control" style="border: none;" value="India" readonly>
                            </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">Area Pincode</label>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="number" class="form-control" style="border: none;" min="6" max="6">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">State</label>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="text" class="form-control" style="border: none;" placeholder="Select Your state">
                            </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">City</label>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input type="text" class="form-control" style="border: none;" placeholder="Select Your city">
                            </div>
                        </div>
                    </div>
                    <div v-for="(platform, index) in platforms" :key="index" class="row mb-1">
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">Platform</label>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input v-model="platform.platform" type="text" class="form-control"
                                    style="border: none;">
                            </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">Social Media Link</label>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input v-model="platform.socialMediaLink" type="url" class="form-control"
                                    style="border: none;">
                            </div>
                        </div>
                        <div class="col">
                            <label for="cp" class="cp text-desc font-600">Follower</label>
                            <div class="input-group mb-3 border-bottom border-dark">
                                <input v-model="platform.follower" type="number" class="form-control"
                                    style="border: none;">
                            </div>
                        </div>
                        <div class="col-1" v-if="index > 0">
                            <button @click="removePlatform(index)" type="button" class="btn confirm-btn text-center mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="text-center">
                        <button @click="addPlatform" type="button"
                            class="btn btn-primary text-white text-center">Add</button>
                    </div>
                    <button class="btn frm-btn text-white w-100 text-center mt-3"
                        style="background-color: #F20000;">Submit</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'JoinInfluencer',
    data() {
        return {
            platforms: [{ platform: '', socialMediaLink: '', follower: '' }]
        }
    },
    methods: {
        addPlatform() {
            this.platforms.push({ platform: '', socialMediaLink: '', follower: '' });
        },
        removePlatform(index) {
            this.platforms.splice(index, 1);
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