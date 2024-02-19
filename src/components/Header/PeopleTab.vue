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
                        <span class="fw-medium">{{ result.name }} </span> <span class="fw-light"> {{ result.location}}</span>
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
    name: 'PostTab',
    data(){
        return {
            searchData: [
                // people data
                { name: 'George lyan', location: 'Washington DC', cat: 'people', imgSrc: require('../../assets/user1.jpg') },
                { name: 'Ramkrishna Raju', location: 'UK', cat: 'people', imgSrc: require('../../assets/user2.jpg') },
                { name: 'Mayur Soni', location: 'USA', cat: 'people', imgSrc:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
                { name: 'Vinod dalal', location: 'Canada', cat: 'people', imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
                { name: 'Jay Naik', location: 'Ukraine', cat: 'people', imgSrc: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
                { name: 'Vijay Solanki', location: 'Europe', cat: 'people', imgSrc: "https://images.unsplash.com/photo-1496360166961-10a51d5f367a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
                { name: 'Nainesh Bhat', location: 'Australia', cat: 'people', imgSrc: "https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
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