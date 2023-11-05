<template>
    <div class="shadow-lg w-[60vw] sm:w-fit bg-white rounded-md max-w-[500px] lg:min-h-[4vw] fixed bg-orane-300 p-[4vw] sm:p-[1.5vw] md:right-[10vw]">
        <div
            class="">
            <div class="text-red-600 font-semibold text-center text-[5vw] sm:text-[5vw] md:text-[2vw]">Create an Account</div>
            <div class="sm:mt-2 sm:w-full sm:px-14">
                <form @submit.prevent="singUp()">
                    <div class="flex flex-col gap-x-5 sm:flex-row">
                        <div class="sm:w-[47%]">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" required v-model="firstName" class=" bg-gray-200 min-h-[6vw] w-full sm:min-h-[5vw] md:min-h-[4vw] lg:min-h-[2.5vw]">
                        </div>
                        <div class="sm:w-[47%]">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" required v-model="lastName" class=" bg-gray-200 min-h-[6vw] w-full sm:min-h-[5vw] md:min-h-[4vw] lg:min-h-[2.5vw]">
                        </div>
                    </div>
                    <div class="sm:mt-2 flex flex-col">
                        <label for="email">Email</label>
                        <input type="email" id="email" required v-model="email" class=" bg-gray-200 min-h-[6vw] sm:min-h-[5vw] md:min-h-[4vw] lg:min-h-[2.5vw]">
                    </div>
                    <div class="sm:mt-2 flex flex-col">
                        <label for="email">Date of Birth</label>
                        <input type="date" id="dob" required v-model="dob" class=" bg-gray-200 min-h-[6vw] sm:min-h-[5vw] md:min-h-[4vw] lg:min-h-[2.5vw]">
                    </div>
                    <div class="sm:mt-2 flex flex-col">
                        <p>Gender</p>
                        <div class="flex flex-col sm:flex-row sm:gap-36">
                            <div class="flex sm:justify-center items-center gap-3">
                                <input type="radio" id="male" name="gender" v-model="gender"
                                    class="text-red-600 focus:ring-0 focus:text-red-600">
                                <label for="male">Male</label>
                            </div>
                            <div class="flex sm:justify-center items-center gap-3">
                                <input type="radio" id="female" name="gender" v-model="gender"
                                    class="text-red-600 focus:ring-0 focus:bg-red-600">
                                <label for="female">Female</label>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:mt-2">
                        <label for="password">Password</label>
                        <input type="password" id="password" required v-model="password" class=" bg-gray-200 min-h-[6vw] sm:min-h-[5vw] md:min-h-[4vw] lg:min-h-[2.5vw]">
                    </div>
                    <div class="flex flex-col sm:mt-2">
                        <label for="password">Confirm Password</label>
                        <input type="password" id="confirm_password" required v-model="confirm_password" class=" bg-gray-200 min-h-[6vw] sm:min-h-[5vw] md:min-h-[4vw] lg:min-h-[2.5vw]">
                    </div>
                    <div class="flex items-center my-1 sm:my-2">
                        <input type="checkbox" id="term" class="text-red-600 ring-1 focus:ring-0 rounded-[4px]">
                        <label for="term" class="ml-1">I Agree & <i class="text-red-600">Terms and conditions.</i></label>
                    </div>
                    <input type="submit" class=" bg-gray-200 min-h-[5vw] sm:min-h-[5vw] md:min-h-[4vw] lg:min-h-[2.5vw]" value="Sign Up" />

                    <div class="text-center mt-1 sm:my-5 lg:my-1">
                        <p>Already have an account? <router-link to="/signin" class="text-red-600">Sign in here</router-link> </p>
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
  