<template>
    <div
        class="h-96 w-80 sm:w-96 flex justify-center px-10 rounded-md py-14 shadow-md bg-white absolute top-28 right-7 sm:right-40">
        <form @submit.prevent="handleSubmit()">
            <h4 class="text-center text-xl font-semibold text-red-600">Create New Password</h4>
            <p class="text-center">Your new password must be different from previous used password</p>
            <label for="password">New Password</label>
            <input type="password" id="password" required v-model="password"
                class="w-full h-8 mb-5 bg-gray-300 rounded-md ">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirdm_password" required v-model="confirdm_password"
                class="w-full h-8 mb-8 bg-gray-300 rounded-md ">
            <input type="submit" value="Reset Password"
                class="bg-red-600 h-8 rounded-md w-full text-white cursor-pointer hover:bg-red-700">
        </form>
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
            this.$router.push({name:'Home',params:{msg:'reset'}})
        }
    }
}
</script>