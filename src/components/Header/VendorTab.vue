<template>
    <div class="d-flex justify-content-between">
            <span class="text-start ms-2 text-subheading">People</span>
            <span class="text-end me-2 text-desc">See All</span>
        </div>
    <div v-for="(result, index) in searchData" :key="index">
        <div class="border-top">
            <div class="d-flex ps-2 pe-2 p-1 mt-2">
                <img :src="result.imgSrc" alt="" height="43px" width="43px" class="img border rounded-circle">
                <div class="text-start mx-2">
                    <p class="fw-normal name">
                        <span class="fw-medium">{{ result.name }} </span> <span class="fw-light"> {{ result.location
                        }}</span>
                    </p>
                </div>
                <div class="ms-auto">
                    <button class="btn confirm-btn" type="button">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VendorTab',
    data(){
        return {
            searchData: [
                // vendor data
                { name: 'The Pizza Shop', location: 'Ukrain', cat: 'vendor', imgSrc: require('../../assets/profile-pizza.jpg') },
                { name: 'Urban Panjab', location: 'Washington DC', cat: 'vendor', imgSrc: require('../../assets/suggestion-icecream.jpg') },
                { name: 'Jakkas Chinese', location: 'USA', cat: 'vendor', imgSrc: require('../../assets/jakkas-chinese.jpg') },
                { name: 'Burger King', location: 'Candaa', cat: 'vendor', imgSrc: require('../../assets/burger-king.png') },
                { name: 'Taco Bell', location: 'Australia', cat: 'vendor', imgSrc: require('../../assets/taco-bell.png') },
                
            ],
        }
    }
}
</script>

<style scoped>
.confirm-btn {
    padding: 3px 10px 3px 10px;
}
</style>