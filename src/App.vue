<template>
  <div id="app">
    <navigationbar></navigationbar>
      <router-view></router-view>
    <!-- <footerbar></footerbar> -->
  </div>
</template>
<script>
import navigationbar from "@/components/frame/Header.vue";
// import footerbar from "@/components/Footer.vue";
export default {
  name: "App",

  components: {
    navigationbar,
    // footerbar
  },

  data: () => ({})
};
</script>
<style>
</style>



