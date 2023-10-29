<template>
    <div class="h-full">
        <div
            class="absolute h-64 sm:h-[580px] lg:h-[580px] top-32 right-12 w-60 py-40 sm:top-[40px] lg:top-1 sm:right-[150px]  sm:w-[450px] bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
            <div class="text-red-600 text-lg sm:text-2xl font-bold">Create an Account</div>
            <div class="sm:mt-2 sm:w-full sm:px-14">

                <form @submit.prevent="singUp()">
                    <div class="sm:mt-2 flex justify-between flex-col sm:flex-row">
                        <div class="sm:w-[47%]">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" required v-model="firstName" class="w-full">
                        </div>
                        <div class="sm:w-[47%]">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" required v-model="lastName" class="w-full">
                        </div>
                    </div>
                    <div class="sm:mt-2 flex flex-col">
                        <label for="email">Email</label>
                        <input type="email" id="email" required v-model="email">
                    </div>
                    <div class="sm:mt-2 flex flex-col">
                        <label for="email">Date of Birth</label>
                        <input type="date" id="dob" required v-model="dob">
                    </div>
                    <div class="sm:mt-2 flex flex-col">
                        <p>Gender</p>
                        <div class="flex gap-36">
                            <div class="flex justify-center items-center gap-3">
                                <input type="radio" id="male" name="gender" v-model="gender"
                                    class="text-red-600 focus:ring-0 ring-1">
                                <label for="male">Male</label>
                            </div>
                            <div class="flex justify-center items-center gap-3">
                                <input type="radio" id="female" name="gender" v-model="gender"
                                    class="text-red-600 focus:ring-0 ring-1">
                                <label for="female">Female</label>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:mt-2">
                        <label for="password">Password</label>
                        <input type="password" id="password" required v-model="password">
                    </div>
                    <div class="flex flex-col sm:mt-2">
                        <label for="password">Confirm Password</label>
                        <input type="password" id="confirm_password" required v-model="confirm_password">
                    </div>
                    <div class="flex items-center sm:my-2">
                        <input type="checkbox" id="term" class="text-red-600 ring-1 focus:ring-0 rounded-[4px]">
                        <label for="term" class="ml-1">I Agree & <i class="text-red-600">Terms and conditions.</i></label>
                    </div>
                    <input type="submit" class="text-center my-2 sm:mt-2" value="Sign Up" />

                    <div class="text-center sm:my-5 lg:my-1">
                        <p>Already have an account? <router-link to="/signin" class="text-red-600">Sign in
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
            gender: 'male',
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
  