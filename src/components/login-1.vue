<template>
    <div class="container justify-content-center mt-5">
      <img class="logo mb-3" src="../assets/rp-logo.png" alt="Restaurant Logo">
      <div class="login">
        <input type="email" v-model="user.email" placeholder="Enter Email">
        <input type="password" v-model="user.password" placeholder="Enter Password">
        <button class="confirm-btn w-100 p-2 text-center" @click.prevent="login">Login</button>
      </div>
    </div>
  </template>

<script>
// import users from './users.json';
import axios from '../axios'
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
        async login() {
            if (this.user.email.length === 0 || this.user.password.length === 0) {
                alert("Please fill in the details");
            } 
            else {
                try {
                    const response = await axios.post("login", this.user);
                    localStorage.setItem('authToken', JSON.stringify(response.data.data.authorization));
                    this.$router.push('/foodfie');
                    window.location.reload();
                    // console.log(response.data,'you will be redirected to foodfie page');
                } 
                catch (error) {
                    console.error('Error making POST request:', error.message);
                    alert("Invalid Email or Password");
                }
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