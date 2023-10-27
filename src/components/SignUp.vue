<template>
    <div class="h-full">
        <div
            class="absolute h-64 top-40 right-12 w-64 py-40 sm:top-[40px] sm:right-[150px] sm:h-[580px] sm:w-[450px] bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
            <div class="text-[#c10111] text-lg sm:text-2xl font-bold">Create an Account</div>
            <div class="sm:mt-2 sm:w-full sm:px-14">

                <form @submit.prevent="singUp()">
                    <div class="sm:mt-2 flex justify-between">
                        <div class="sm:w-[45%]">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" required v-model="firstName"
                                class="outline-none w-full border-b-2 focus:border-b-red-500 bg-gray-200 rounded-sm p-1">
                        </div>
                        <div class="sm:w-[45%]">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" required v-model="lastName"
                                class="outline-none w-full border-b-2 focus:border-b-red-500 bg-gray-200 rounded-sm p-1">
                        </div>
                    </div>
                    <div class="sm:mt-2 flex flex-col">
                        <label for="email">Email</label>
                        <input type="email" id="email" required v-model="email"
                            class="outline-none border-b-2 focus:border-b-red-500 bg-gray-200 rounded-sm p-1">
                    </div>
                    <div class="sm:mt-2 flex flex-col">
                        <label for="email">Date of Birth</label>
                        <input type="date" id="dob" required v-model="dob"
                            class="outline-none border-b-2 focus:border-b-red-500 bg-gray-200 rounded-sm p-1">
                    </div>
                    <div class="sm:mt-2 flex flex-col">
                        <p>Gender</p>
                        <div class="flex gap-36">
                            <div class="flex justify-center items-center gap-3">
                                <input id="male" type="radio" name="gender" v-model="gender"
                                    class="text-red-500 focus:ring-0">
                                <label for="male">Male</label>
                            </div>
                            <div class="flex justify-center items-center gap-3">
                                <input type="radio" id="female" name="gender" v-model="gender"
                                    class="text-red-500 focus:ring-0">
                                <label for="female">Female</label>
                            </div>

                        </div>
                    </div>
                    <div class="flex flex-col sm:mt-2">
                        <label for="password">Password</label>
                        <input type="password" id="password" required v-model="password"
                            class="outline-none border-b-2 focus:border-b-red-500 bg-gray-200 rounded-sm p-1">
                    </div>
                    <div class="flex flex-col sm:mt-2">
                        <label for="password">Confirm Password</label>
                        <input type="password" id="confirm_password" required v-model="confirm_password"
                            class="outline-none border-b-2 focus:border-b-red-500 bg-gray-200 rounded-sm p-1">
                    </div>
                    <div class="flex items-center sm:my-2">
                        <input type="checkbox" id="term" class="text-red-500 focus:ring-0 rounded-[4px]">
                        <label for="term" class="ml-1">I Agree & <i class="text-red-500">Terms and conditions.</i></label>
                    </div>
                    <button type="submit"
                        class="bg-[#c10111] p-1 w-full rounded-sm text-center text-white my-2 sm:mt-2 cursor-pointer hover:bg-red-800">Sign
                        Up
                    </button>
                    <div class="text-center sm:my-5">
                        <p>Already have an account? <router-link to="/signin" class="text-[#c10111]">Sign in
                                here</router-link> </p>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>
  
<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            firstName: '',
            lastName: '',
            gender: '',
            dob: '',
            confirm_password: '',
            password: '',
            email: '',
        }
    },
    methods: {
        async singUp() {
            let result = await axios.post('http://localhost:3001/users', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                gender: this.gender,
                dob: this.dob,
            });
            if (result.status === 201) {
                localStorage.setItem('user-info', JSON.stringify(result.data));
                this.$router.push({ name: 'Home' });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push({ name: 'Home' })
        }

    }
}
</script>
  