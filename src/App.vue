<template>
  <div class="h-[100vh] overflow-hidden relative z-0">
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
}

input[type='email'],
input[type='text'],
input[type='date'],
input[type='password'] {
  background-color: rgb(212, 204, 204);
  padding: 4px;
  border-radius: 5px;
}

input[type='submit'] {
  background-color: #c10111;
  width: 100%;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 4px;
  font-size: larger;
}

input[type='submit']:hover {
  background-color: #8b020d;
}
</style>