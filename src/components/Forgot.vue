<template>
    <div class="flex justify-center rounded-md shadow-md bg-white absolute h-96 w-80 top-28 right-6 sm:right-40 px-10 py-14 ">
        <form @submit.prevent="sendLink()">
            <h4 class="text-center text-xl font-semibold text-red-600">Forgot Password ?</h4>
            <p class="text-center">Please enter the email address associated with your email. We will email you a link to
                reset your password.</p>
            <label for="email">Email</label>
            <input type="email" id="email" required v-model="email" class="w-full h-8 mb-5 bg-gray-300 rounded-md border-none outline-none  focus:border-b-2 focus:border-b-red-600 ">
            <input type="submit" value="Send link"
                class="bg-red-600 mb-5 h-8 rounded-md w-full text-white cursor-pointer hover:bg-red-700">
            <input type="button" @click="cancel()" value="Cancel"
                class="bg-white h-8 rounded-md w-full shadow-md cursor-pointer hover:bg-gray-200">
        </form>
    </div>
</template>
<script>
export default {
    name: 'Forgot',
    data() {
        return {
            email: '',
        }
    },
    methods: {
        sendLink() {
            this.$router.push({ name: 'Otp' })
        },
        cancel() {
            this.$router.push({ name: 'SignIn' })
        }
    }
}
</script>
<style></style>