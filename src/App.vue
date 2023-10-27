<template>
  <div class="h-[100vh] overflow-hidden relative z-0">
    <BgDesign/>
    <router-view />
  </div>
</template>

<script>
import BgDesign from './components/BgDesign.vue';


export default{
    name: 'App',
    components: { BgDesign }
}
</script>