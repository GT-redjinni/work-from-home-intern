<template>
    <div class="modal fade" id="likesList" tabindex="-1" aria-labelledby="likesListLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-white" style="background: #EB0E19;">
                    <h5 class="modal-title" id="likesListLabel">
                        Likes
                        <img src="../../assets/like-icon.svg" alt="" height="25px" width="25px">
                        125
                    </h5>
                    <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-for="likeUser in likesList" :key="likeUser.id" class="border-top border-bottom ">
                        <div class="d-flex mb-3 ps-3 pe-3 p1 mt-3 mb-2">
                            <div><img :src="likeUser.image" alt="" height="43px" width="43px"
                                    class="img border rounded-circle" /></div>
                            <div class="text-start mx-2">
                                <p class="fw-normal grey-color font-600 mb-0 text-subheading">{{ likeUser.name }}</p>
                                <p class="fw-light grey-color font-400 mb-0 text-desc">{{ likeUser.location }}</p>
                            </div>
                            <div class="ms-auto">
                                <button class="btn ps-3 pe-3" :class="setButtonClass(likeUser)" @click="toggleFollow(likeUser)">
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
export default {
    name: 'LikesModal',
    data() {
        return {
            likesList: [
                { id: 1, name: 'Bianca Holmes', location: 'Czech Republic', image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
                { id: 2, name: 'Rebecca Palmer', location: 'Madagascar', image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: true },
                { id: 3, name: 'Craig Barnett', location: 'Puerto Rico', image: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
                { id: 4, name: 'Alex Hughes', location: 'Japan', image: "https://images.unsplash.com/photo-1496360166961-10a51d5f367a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: true },
                { id: 5, name: 'Lori Schneider', location: 'Oman', image: "https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
            ],
        }
    },
    methods: {
        toggleFollow(user) {
            user.isFollowing = !user.isFollowing;
        },
        setButtonClass(user) {
            return user.isFollowing ? 'decline-btn' : 'confirm-btn';
        }
    }
}
</script>

<style scoped>
   
</style>