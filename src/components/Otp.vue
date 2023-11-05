<template>
    <div class="absolute flex justify-center items-center w-full h-screen px-[10vw]">
        <div
            class="bg-white w-full sm:max-w-[400px] p-[2vw] rounded-md shadow-md">
            <form @submit.prevent="otp()">
                <h4 class="text-center text-xl font-semibold text-red-600">OTP Verification</h4>
                <p class="text-center mb-1">Enter One-Time-Password send to Email</p>
                <div class="flex justify-center gap-4">
                    <div class="h-10 w-10 bg-gray-300 text-red-700 text-4xl text-center">--</div>
                    <div class="h-10 w-10 bg-gray-300 text-red-700 text-4xl text-center">--</div>
                    <div class="h-10 w-10 bg-gray-300 text-red-700 text-4xl text-center">--</div>
                    <div class="h-10 w-10 bg-gray-300 text-red-700 text-4xl text-center">--</div>
                </div>
                <a href="#" class="float-right mt-1 mr-4">Resend OTP</a>
                <input type="submit" value="Submit" class="mb-5 h-8 my-5">
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Otp',
    methods: {
        otp() {
            console.log('working')
            this.$router.push({ name: 'ResetPassword' })
        }
    }
}
</script>