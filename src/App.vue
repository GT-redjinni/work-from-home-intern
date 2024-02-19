<template>
    <LogIn v-if="!isUserLoggedIn"/>
    <HeaderComponent v-if="isUserLoggedIn" />
    <router-view v-if="isUserLoggedIn"></router-view>
</template>

<script>
import HeaderComponent from './components/Header/HeaderComponent.vue';
import LogIn from './components/LogIn.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    LogIn,
  },
  computed: {
    isUserLoggedIn() {
      const user = localStorage.getItem('token');
      return !!user; 
    },
  },
}
</script>

<style>
#app {
 background-color: rgb(245, 243, 243);
 min-height: 100vh;
}
</style>
