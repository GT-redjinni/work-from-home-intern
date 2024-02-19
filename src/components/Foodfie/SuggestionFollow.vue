<template>
    <div class="card rounded mb-3">
        <div class="card-header text-start fw-semibold">
            Follow Request
        </div>
        <div class="card-body">
            <div class="d-flex mb-3">
                <img src="../../assets/follow-img.jpg" alt="" height="43px" width="43px" class="img border rounded-circle">
                <div class="text-start mx-2">
                    <p class="fw-normal name text-subheading">Rajkumar Gupta</p>
                    <p class="fw-light mf text-desc"> 12 mutual friends</p>
                </div>
            </div>
            <button class="btn w-50  confirm-btn">Confirm</button>
            <button class="btn w-50  decline-btn">Decline</button>
        </div>
        <div class="card-footer">
            <div class="row">
                <div class="col text-start">
                    <img v-for="(user,index) in followList" :key="index" :src="user.image" alt="" height="20px" width="20px" class="img border rounded-circle">
                    <a href="#" class="nostyle" data-bs-toggle="modal" data-bs-target="#rqList">  view all friends requests</a>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="rqList" tabindex="-1" aria-labelledby="rqListLabel" aria-hidden="true" >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header text-white" style="background: #EB0E19;">
            <h5 class="modal-title" id="rqListLabel">Request List</h5>
            <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-for="(user, index) in followList" :key="index" class="border-top border-bottom ">
                <div class="d-flex mb-3 ps-3 pe-3 p1 mt-3 mb-2">
                    <div><img :src="user.image" alt="" height="43px" width="43px" class="img border rounded-circle" /></div>
                    <div class="text-start mx-2">
                        <p class="fw-normal name text-subheading">{{ user.name }}</p>
                        <p class="fw-light mf text-desc">{{ user.mutualFriends }} mutual friends</p>
                    </div>
                    <div class="ms-auto">
                        <button class="btn" :class="setButtonClass(user)" @click="toggleFollow(user)">
                            {{ user.isFollowing ? 'Decline' : 'Confirm' }}
                        </button>
                    </div>
                    </div>
                </div>
        
          </div>
        </div>
      </div>
    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="card mt-3 mb-3">
        <div class="card-header text-start fw-semibold">
            Suggestion
        </div>
        <div class="card-body">
            <div class="d-flex mb-3">
                <img src="../../assets/suggestion-img.jpg" alt="" height="43px" width="43px" class="img border rounded-circle">
            <!-- <p>Anthondy Daugloi
                <br>
                12 mutual friends
            </p> -->
            <div class="text-start mx-2">
                <p class="fw-normal name text-subheading">Anand Dalal</p>
                <p class="fw-light mf text-desc"> 12 mutual friends</p>
            </div>
            </div>
            <button class="btn w-100 confirm-btn">Follow</button>
        </div>
        <div class="card-footer">
            <div class="row">
                <div class="col text-start">
                    <img v-for="(user,index) in suggestionList" :key="index" :src="user.image" alt="" height="20px" width="20px" class="img border rounded-circle">
                    <a href="#" class="nostyle" data-bs-toggle="modal" data-bs-target="#sgList">  view all suggestion</a>

                    <div class="modal fade" id="sgList" tabindex="-1" aria-labelledby="sgListLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header text-white" style="background: #EB0E19;">
        <h5 class="modal-title" id="sgListLabel">Suggestion List</h5>
        <button type="button" class="btn-close rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div v-for="(user, index) in suggestionList" :key="index" class="border-top border-bottom ">
        <div class="d-flex mb-3 ps-3 pe-3 p1 mt-3 mb-2">
            <div><img :src="user.image" alt="" height="43px" width="43px" class="img border rounded-circle" /></div>
            <div class="text-start mx-2">
                <p class="fw-normal name text-subheading">{{ user.name }}</p>
                <p class="fw-light mf text-desc">{{ user.mutualFriends }} mutual friends</p>
            </div>
            <div class="ms-auto">
                <button class="btn" :class="setButtonClass(user)" @click="toggleFollow(user)">
                    {{ user.isFollowing ? 'Unfollow' : 'Follow' }}
                </button>
            </div>
            </div>
        </div>
        
        
      </div>
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
        name:'SuggestionFollow',
        data(){
            return{
                suggestionList: [
                    { name: 'Mayur Soni', mutualFriends: 12, image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
                    { name: 'Vinod dalal', mutualFriends: 10, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
                    { name: 'Jay Naik', mutualFriends: 15, image: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
                    { name: 'Vijay Solanki', mutualFriends: 5, image: "https://images.unsplash.com/photo-1496360166961-10a51d5f367a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
                    { name: 'Nainesh Bhat', mutualFriends: 12, image: "https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
                ],
                followList: [
                    { name: 'Nainesh Bhat', mutualFriends: 12, image: "https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
                    { name: 'Vijay Solanki', mutualFriends: 5, image: "https://images.unsplash.com/photo-1496360166961-10a51d5f367a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
                    { name: 'Jay Naik', mutualFriends: 15, image: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
                    { name: 'Vinod dalal', mutualFriends: 10, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },
                    { name: 'Mayur Soni', mutualFriends: 12, image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isFollowing: false },

                ],
            }
        },
        methods:{
            toggleFollow(user){
                user.isFollowing=!user.isFollowing;
            },
            setButtonClass(user){
                return user.isFollowing ? 'decline-btn':'confirm-btn';
            }
        }
    }
</script>

<style scoped>
a.nostyle:link {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
}

a.nostyle:visited {
    text-decoration: inherit;
    cursor: auto;
}
.name{
    color: #787878;
    margin-bottom: 0;
}
.mf{
    color: #989898;
    margin-bottom: 0;
}
   
.nostyle{
    font-size: 14px;
    color: #989898;
}
</style>