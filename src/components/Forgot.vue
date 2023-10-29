<template>
    <div
        class="flex justify-center rounded-md shadow-md bg-white absolute h-96 w-80 top-28 right-6 sm:right-40 px-10 py-14 ">
        <form @submit.prevent="sendLink()">
            <h4 class="text-center text-xl font-semibold text-red-600">Forgot Password ?</h4>
            <p class="text-center">Please enter the email address associated with your email. We will email you a link to
                reset your password.</p>
            <label for="email">Email</label>
            <input type="email" id="email" required v-model="email" class="w-full h-8 mb-5"/>
            <input type="submit" value="Send link" class="mb-5 h-8"/>
            <input type="button" @click="cancel()" value="Cancel" class="bg-white h-8 rounded-md w-full shadow-md cursor-pointer hover:bg-gray-200">
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Forgot',
    data() {
        return {
            email: '',
            result: null
        }
    },
    methods: {
        async ueserData() {
            return await axios.get(`http://localhost:3001/users/?email=${this.email}`);
        },
        async sendLink() {
            this.result = await this.ueserData()
            if (this.result.status === 200 && this.result.data.length > 0) {
                localStorage.setItem('user-info', JSON.stringify(this.result.data[0]))
                console.log('Forgot Component')
                this.$router.push({ name: 'Otp' })

            } else {
                alert('wrong email')
            }
        },
        cancel() {
            this.$router.push({ name: 'SignIn' })
        }
    },
}
</script>

