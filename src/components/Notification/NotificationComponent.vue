<template>
    <div class="container">
        <div class="row text-center">
            <div class="col-md-3 mb-3">
                <div class="container bg-white rounded-3 mt-3 p-2 pb-5" style="border: .5px solid #434343;">
                    <div class="d-flex border-dark border-bottom mt-3 mb-3 p-1">
                        <p class="text-subheading font-600 grey-color">Notification Settings</p>
                        <div class="ms-auto"><img src="../../assets/settings-icon.png" alt="" height="20px" width="20px"></div>
                    </div>
                    <div class="text-start">
                        <p style="color: #787878;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo inventore doloribus temporibus maiores</p>
                    </div>
                </div>
                <br>
                <ProfilePizza />
            </div>
            <div class="col-md-6 mb-3" style="overflow-y: scroll;max-height: 720px;">
                <NotificationsDiv/>
            </div>
            <div class="col-md-3">
                <SuggestionIcecream />
                <br>
                <SuggestionAbout />
            </div>
        </div>
    </div>
</template>

<script>
import NotificationsDiv from '../Notification/NotificationsDiv.vue'
import ProfilePizza from '../Foodfie/ProfilePizza.vue';
import SuggestionIcecream from '../Foodfie/SuggestionIcecream.vue';
import SuggestionAbout from '../Foodfie/SuggestionAbout.vue';
export default {
    name: 'NotificationComponent',
    components: {
        ProfilePizza,
        SuggestionIcecream,
        SuggestionAbout,
        NotificationsDiv,
    }
}
</script>

<style scoped>

</style>