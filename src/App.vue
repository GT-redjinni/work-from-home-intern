<template>
  <div class="flex justify-center md:justify-normal items-center h-screen overscroll-y-auto">
    <BgDesign />
    <router-view />
  </div>
</template>

<script>
import BgDesign from './components/BgDesign.vue';

export default {
  name: 'App',
  components: { BgDesign }
}
</script>

<style>
input {
  border: none;
  outline: none;
}

input[type='email']:focus,
input[type='text']:focus,
input[type='date']:focus,
input[type='password']:focus {
  border-bottom: 2px solid red;
  padding-left: 10px;
}

input[type='email'],
input[type='text'],
input[type='date'],
input[type='password'] {
  background-color: rgb(212, 204, 204);
  border-radius: 0.2vw;
}

input[type='submit'] {
  background-color: #c10111;
  width: 100%;
  border-radius: 0.2vw;
  color: white;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #8b020d;
}
</style>