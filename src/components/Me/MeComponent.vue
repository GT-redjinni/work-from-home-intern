<template>
    <div class="container">
        <MeProfile/>
        <div class="row text-center">
            <div class="col-12 col-md-1"></div>
            <div class="col-md-12 col-lg-3">
                <BalancePost class="mb-3"/>
                <PersonalInfo class="mb-3"/>
                <MePost class="mb-3"/>
                <MeTagPost class="mb-3"/>
            </div>
            <div class="col-md-12 col-lg-7">
                <MeTabs/>
            </div>
        </div>
    </div>
</template>

<script>
import MeProfile from '../Me/MeProfile.vue';
import MePost from '../Me/MePost.vue';
import MeTagPost from '../Me/MeTagPost.vue';
import BalancePost from '../Me/BalancePost.vue'
import PersonalInfo from '../Me/PersonalInfo.vue'
import MeTabs from '../Me/MeTabs.vue';
    export default {
        name:'MeComponent',
        components:{
            MeProfile,
            MePost,
            MeTagPost,
            BalancePost,
            PersonalInfo,
            MeTabs
        }
    }
</script>

<style scoped>

</style>