<template>
  <div class="container justify-content-center mt-5">
    <img class="logo mb-3" src="../assets/rp-logo.png" alt="Restaurant Logo">
    <div class="login">
      <form @submit.prevent="onSubmit">
        <input type="email" v-model="user.email" placeholder="Enter Email">
        <input type="password" v-model="user.password" placeholder="Enter Password">
        <input type="submit" class="confirm-btn w-100 p-2 text-center" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
// import users from './users.json';
// import axios from '../axios'
import { mapActions } from 'vuex';
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
    ...mapActions('login',['handleLogin']),
    onSubmit() {
      if (this.user.email.length === 0 || this.user.password.length === 0) {
        alert("Please fill in all the details");
      } else {
        this.handleLogin({
          email: this.user.email,
          password: this.user.password
        }).then((response) => {
          if (response.data && response.data.message) {
            // Show the message received from the server in the alert
            alert(response.data.message);
          } else {
            // Assuming response.data.success indicates successful login
            if (response.data.success) {
              // Redirect only when login is successful
              this.$router.push('/foodfie');
            }
          }
        }).catch((error) => {
          console.error("Login failed:", error);
          // Check if the error is due to 422 status code (Unprocessable Content)
          if (error.response && error.response.status === 422) {
            alert("Incorrect Email or Password");
          }
        });
      }
    },
  },
  mounted(){
    let user = localStorage.getItem('token');
    if (user) {
      this.$router.push('/foodfie');
    }
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