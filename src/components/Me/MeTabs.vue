<template>
    
    <div class="d-flex border rounded-2 bg-white">
        <div class="row w-100 ms-auto me-auto">
        <span :class="{'tab-active':activeTab === 'post'}" class="col-sm-3 col-6 tags" v-on:click="showContent('post')">Post</span>
        <span :class="{'tab-active':activeTab === 'follower'}" class="col-sm-3 col-6 tags" v-on:click="showContent('follower')">Followers</span>
        <span :class="{'tab-active':activeTab === 'following'}" class="col-sm-3 col-6 tags" v-on:click="showContent('following')">Following</span>
        <span :class="{'tab-active':activeTab === 'request'}" class="col-sm-3 col-6 tags" v-on:click="showContent('request')">Request</span>
    </div>
    </div>
            <div v-show="activeTab === 'post'" class="content mt-3" id="termsAndCondition">
                <UserPost/>
            </div>
            <div v-show="activeTab === 'follower'" class="content mt-3" id="aboutUs">
                 <UserFollower/>
            </div>
            <div v-show="activeTab === 'following'" class="content mt-3" id="contactUs">
                <UserFollowing/>
            </div>
            <div v-show="activeTab === 'request'" class="content mt-3" id="aboutUs">
                <UserRequest/>
            </div>
</template>

<script>
import UserPost from '../Foodfie/UserPost.vue';
import UserFollower from '../Me/UserFollower.vue';
import UserFollowing from '../Me/UserFollowing.vue';
import UserRequest from '../Me/UserRequest.vue';
    export default {
        name:'MeTabs',
        components:{
            UserPost,
            UserFollower,
            UserFollowing,
            UserRequest,
        },
        data(){
            return{
                activeTab:'post'
            }
        },
        methods:{
            showContent(tab){
                this.activeTab=tab;
            }
        }
    }
</script>

<style scoped>
.d-flex{
    padding: 10px 20px 20px 10px;
}
.tags{
    color: #B2B1B1;
    font-size: 20px;
    cursor: pointer;
}
.tab-active{
    color: red;
    border-bottom: 2px solid red;
}
@media (max-width: 767px) {
  .tags {
    font-size: 18px;
    padding-bottom: 5px;
    text-align: center;
  }
}
</style>