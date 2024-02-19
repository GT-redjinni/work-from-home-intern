<template>
    <EliteButton/>
    <div class="mt-3"><CreatePost /></div>
    <UserPost/>
    <RecommendPost/>
</template>

<script>
import EliteButton from '../Foodfie/EliteButton.vue';
import CreatePost from '../Foodfie/CreatePost.vue';
import RecommendPost from '../Foodfie/RecommendPost.vue';
import UserPost from '../Foodfie/UserPost.vue';
    export default {
        name:'PostComponent',
        components:{
            EliteButton,
            CreatePost,
            RecommendPost,
            UserPost,
        },
    }
</script>

<style scoped>

</style>