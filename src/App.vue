<template>
  <v-app>
    <navigationbar/>
    <footerbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import footerbar from "@/components/Footer.vue";
import navigationbar from "@/components/Header.vue";
export default {
  name: "App",

  components: {
    navigationbar,
    footerbar
  },

  data: () => ({})
};
</script>


