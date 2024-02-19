<template>
    <div class="container justify-content-center mt-5">
      <img class="logo mb-3" src="../assets/rp-logo.png" alt="Restaurant Logo">
      <div class="login">
        <input type="email" v-model="user.email" placeholder="Enter Email">
        <input type="password" v-model="user.password" placeholder="Enter Password">
        <button class="confirm-btn w-100 p-2 text-center" v-on:click="login">Login</button>
      </div>
    </div>
  </template>

<script>
import users from './users.json';
import axios from 'axios';
export default{
    name:'LogIn',
    data(){
        return{
            user:{
                email:'',
                password:'',
            },
            profileImage: '',
        }
    },
    methods:{
        login(){
            // const checkUser = users.find((user)=>user.email==this.user.email&&user.password==this.user.password)
            const checkUser = users.find((user)=>user.email==this.user.email&&user.password==this.user.password)
            if(checkUser){
              console.log('Login successful', this.user.email, this.user.password);
              localStorage.setItem('currentUser', JSON.stringify(checkUser));
              this.profileImage = checkUser.profile_img;
              this.$router.push('/foodfie');
              location.reload();
            }
            else if(this.user.email.length==0 || this.$router.length==0){
                alert("please fill the details")
            }
            else{
                alert("Invalid Email or Password")
            }
        }
    },
    mounted(){
            let user = localStorage.getItem('currentUser');
            if(user){
                this.$router.push('/foodfie')
            }
        }
}
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