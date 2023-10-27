<template>
    <div class="h-[340px] w-80 flex justify-center px-10 rounded-md py-14 shadow-md bg-white absolute top-36 right-40">
        <form @submit.prevent="otp()">
            <h4 class="text-center text-xl font-semibold text-red-600">OTP Verification</h4>
            <p class="text-center">Enter One-Time-Password send to Email</p>
            <div class="flex justify-center gap-4">
                <div class="h-10 w-10 bg-gray-300 rounded-md text-red-800 text-4xl text-center">--</div>
                <div class="h-10 w-10 bg-gray-300 rounded-md text-red-800 text-4xl text-center">--</div>
                <div class="h-10 w-10 bg-gray-300 rounded-md text-red-800 text-4xl text-center">--</div>
                <div class="h-10 w-10 bg-gray-300 rounded-md text-red-800 text-4xl text-center">--</div>
            </div>
            <a href="#" class="float-right mt-1 mr-4">Resend OTP</a>
            <input type="submit" value="Submit"
                class="bg-red-600 mb-5 h-8 my-8 rounded-md w-full text-white cursor-pointer hover:bg-red-700">
        </form>
    </div>
</template>
<script>
export default {
    name: 'Otp',
    methods:{
        otp(){
            console.log('working')
            this.$router.push({name:'ResetPassword'})
        }
    }
}
</script>