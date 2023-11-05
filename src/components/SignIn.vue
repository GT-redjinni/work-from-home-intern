<template>
  <div class="shadow-lg bg-white max-w-[500px] lg:min-h-[4vw] fixed bg-orane-300 p-[4vw] md:right-[10vw]">
    <div class="">
      <div class="text-red-600 font-semibold text-center text-[5vw] sm:text-[5vw] md:text-[2vw]">Welcome to
        Garba Jockey</div>
      <form @submit.prevent="login()">
        <p class="">Sign In</p>
        <div class="flex flex-col">
          <label for="email" class="">Email</label>
          <input type="email" id="email" required v-model="email" class="bg-gray-200 min-h-[8vw] sm:min-h-[5vw] md:min-h-[4vw] lg:min-h-[2.5vw]">
        </div>

        <div class="flex flex-col">
          <label for="password" class="">Password</label>
          <input type="password" id="password" required v-model="password" class="bg-gray-200 min-h-[8vw]  sm:min-h-[4vw] md:min-h-[4vw] lg:min-h-[2.5vw]">
        </div>
        <div class="text-end my-[0.5vh]">
          <router-link to="/forgot" class="">Forgot
            Password?</router-link>
        </div>

        <!-- ! signIn button -->
        <input type="submit" value="Sign In" class="rounded-sm w-full bg-red-600 hover:bg-red-700 text-white min-h-[8vw]  sm:min-h-[4vw] md:min-h-[4vw] lg:min-h-[2.5vw]"/>


        <div class="text-center my-[0.5vh]">
          <p>New Here? <router-link to="/signUp" class="text-red-600">Create an Account</router-link></p>
        </div>
        <div class="flex justify-center items-center">
          <hr class="w-[49%] border-gray-400" />
          <p class="mx-[1vw]  text-[5vw] sm:text-[1.5vw]">OR</p>
          <hr class="w-[49%] border-gray-400" />
        </div>

        <div class="flex flex-col items-center justify-center sm:gap-10 sm:mt-[0.5vh] sm:flex-row">
          <p class="flex justify-center gap-x-1 text-[2vw] sm:text-[1.5vw] min:w-[8vw] max:w-[10vw] items-center py-[5px] px-[10px] shadow-md">
            <img src="../assets/google.svg" alt="google" class="w-[2.5vw]">Google
          </p>
          <p class="flex justify-center gap-x-1 text-[2vw] sm:text-[1.5vw] min:w-[8vw] max:w-[10vw] items-center shadow-md py-[5px] px-[10px]">
            <img src="../assets/facebook_icon.svg.png" alt="facebook" class="w-[2.5vw]">Facebook
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignIn',
  data() {
    return {
      password: '',
      email: '',
    }
  },
  methods: {
    async login() {
      let result = await axios.get(`http://localhost:3000/users/?email=${this.email}&password=${this.password}`)
      console.log('working')
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem('user-info', JSON.stringify(result.data[0]))
        this.$router.push({ name: 'Home' })
      } else {
        alert('Invalid Credential')
      }
    },
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (user) {
      this.$router.push({ name: 'Home' })
    }
  }
};
</script>
