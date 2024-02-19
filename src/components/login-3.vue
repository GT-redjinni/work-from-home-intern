<template>
  <div class="container justify-content-center mt-5">
    <img class="logo mb-3" src="../assets/rp-logo.png" alt="Restaurant Logo">
    <div class="login">
      <input type="email" v-model="user.email" placeholder="Enter Email">
      <input type="password" v-model="user.password" placeholder="Enter Password">
      <button class="confirm-btn w-100 p-2 text-center" @click.prevent="handleLogin">Login</button>
    </div>
  </div>
</template>

<script>
// import users from './users.json';
// import axios from '../axios'
export default{
  name:'LogIn',
  data(){
      return{
          user:{
              email:'',
              password:'',
          },
      }
  },
  methods: {
    async handleLogin() {
      const success = await this.$store.dispatch('login/login', {
        email: this.user.email,
        password: this.user.password,
      });

      if (success) {
        this.$router.push('/foodfie');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    },
  },
};
</script>


<style scoped>
.container{
display: grid;
}
img{
  height: 150px;
  width: 300px;
}
.login input{
  width:300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #F20000;
  border-radius: 7px;
}
.login button{
  width: 320px;
  height: 40px;
  color: white;
  cursor: pointer;
  border-radius: 7px;
}
button:hover {
background-color: #ec4c4c;
transition: all 0.5s ease-in-out;
}
</style>