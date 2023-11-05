<template>
    <div class="absolute flex justify-center items-center w-full h-screen px-[10vw]">
        <div
            class="bg-white w-full sm:max-w-[400px] p-[2vw] rounded-md shadow-md">
            <form @submit.prevent="handleSubmit()">
                <h4 class="text-center text-xl font-semibold text-red-600">Create New Password</h4>
                <p class="text-center">Your new password must be different from previous used password</p>
                <label for="password">New Password</label>
                <input type="password" id="password" required v-model="password" class="w-full h-8 mb-5 bg-gray-200">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirdm_password" required v-model="confirdm_password"
                    class="w-full h-8 mb-8 bg-gray-200">
                <input type="submit" value="Reset Password" class="h-8"/>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ResetPassword',
    data() {
        return {
            password: '',
            confirdm_password: ''
        }
    },
    methods: {
        handleSubmit() {
            this.$router.push({ name: 'Home', params: { msg: 'reset' } })
        }
    }
}
</script>