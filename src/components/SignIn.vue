<template>
  <div class="h-full">
    <div
      class="absolute bg-white shadow-lg rounded-lg flex flex-col justify-center items-center h-64 sm:h-[470px] md:h-[650px] lg:h-36 w-64 sm:w-96 md:w-[450px] lg:w-96 top-40 sm:top-[86px] md:top-52 lg:top-10 right-12 sm:right-[150px] md:right-24 lg:right-32 py-44 sm:py-64">
      <div class="text-red-600 text-lg sm:text-2xl font-bold">Welcome to Garba Jockey</div>
      <div class="sm:mt-5 sm:w-full sm:px-14">

        <form @submit.prevent="login()">
          <p class="sm:text-xl">Sign In</p>
          <div class="sm:mt-5 flex flex-col">
            <label for="email">Email</label>
            <input type="email" id="email" required v-model="email">
          </div>

          <div class="flex flex-col sm:mt-5">
            <label for="password">Password</label>
            <input type="password" id="password" required v-model="password">
          </div>
          <div class="text-right my-1 sm:my-[4px] text-sm">
            <router-link to="/forgot">Forgot Password?</router-link>
          </div>
          <input type="submit" class="text-center my-2 sm:mt-5" value="Sign In"/>
          <div class="text-center sm:my-5">
            <p>New Here? <router-link to="/signUp" class="text-red-600">Create an Account</router-link></p>
          </div>
          <div class="flex justify-center items-center">
            <hr class="sm:w-[115px]" />
            <p class="sm:mx-4">OR</p>
            <hr class="sm:w-[115px]" />
          </div>
          <div class="flex justify-between mb-2 sm:my-5">
            <div
              class="shadow-md cursor-pointer hover:bg-gray-200  flex justify-center sm:w-28 gap-1 p-1 text-sm font-semibold items-center">
              <img class="h-5 sm:h-5" src="../assets/google.svg" alt="google" />Google
            </div>
            <div
              class="shadow-md cursor-pointer hover:bg-gray-200 flex justify-center sm:w-28 gap-1 p-1 text-sm font-semibold items-center">
              <img class="h-5 sm:h-5" src="../assets/facebook_icon.svg.png" alt="facebook" />Facebook
            </div>
          </div>

        </form>
      </div>
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
      let result = await axios.get(`http://localhost:3001/users/?email=${this.email}&password=${this.password}`)

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
