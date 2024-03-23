<template>
    <div class="modal fade" id="likesList" tabindex="-1" aria-labelledby="likesListLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header text-white" style="background: #EB0E19;">
                    <h5 class="modal-title" id="likesListLabel">
                        Likes
                        <img src="../../assets/like-icon.svg" alt="" height="25px" width="25px" style="object-fit: cover;">
                        {{ likesCount }}
                    </h5>
                    <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body likesmodal">
                    <div v-if="loading" class="text-center">
                        <SpinnerComponent/>
                    </div>
                    <div v-else v-for="likeUser in likesList" :key="likeUser.user_id" class="border-top border-bottom ">
                        <div class="d-flex mb-3 ps-3 pe-3 p1 mt-3 mb-2">
                            <div><img :src="likeUser.user.profile_photo" alt="" height="43px" width="43px"
                                    class="img border rounded-circle" /></div>
                            <div class="text-start mx-2">
                                <p class="fw-normal grey-color font-600 mb-0 text-subheading">{{ likeUser.user.name }}
                                </p>
                                <p class="fw-light grey-color font-400 mb-0 text-desc">{{ likeUser.city }}</p>
                            </div>
                            <div class="ms-auto">
                                <button class="btn ps-3 pe-3" :class="setButtonClass(likeUser)"
                                    @click="toggleFollow(likeUser)">
                                    {{ likeUser.isFollowing ? 'Unfollow' : 'Follow' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SpinnerComponent from '../SpinnerComponent.vue';
export default {
    name: 'LikesModal',
    components:{
        SpinnerComponent
    },
    props: {
        p_id: {
        type: String,
        },
    },
    methods: {
        ...mapActions('likes', ['fetchLikes']),
        toggleFollow(user) {
            user.isFollowing = !user.isFollowing;
        },
        setButtonClass(user) {
            return user.isFollowing ? 'decline-btn' : 'confirm-btn';
        },
    },
    computed: {
        ...mapState('likes', ['likesData','loading']),
        likesList() {
            // console.log('Likes list in component:', this.likesData.likes || []);
            return this.likesData.likes || [];
        },
        likesCount() {
            // console.log('Likes count in component:', this.likesData.likes_count || 0);
            return this.likesData.likes_count || 0;
        },
    },
    watch: {
        async p_id(newPostId) {
            // console.log("likes modal -", newPostId);
            this.$store.commit('likes/SET_LOADING', true);
            await this.fetchLikes(newPostId);
            this.$store.commit('likes/SET_LOADING', false);
        },
    },
};
</script>

<style scoped>
.likesmodal::-webkit-scrollbar {
  display: none;
}
</style>