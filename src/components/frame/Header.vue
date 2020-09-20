<template>
  <div>
    <b-navbar toggleable="lg" max-height="200px;" style="background-color:#e5b1fd;" fixed="top">
      <b-col md="5">
        <b-card-img :src="require('@/assets/logo.png')" class="rounded-0" id="userIcon"></b-card-img>
      </b-col>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item id="text" class="w-100 p-3" href="#">HOME</b-nav-item>

          <b-nav-item-dropdown id="text" class="w-100 p-3" text="ABOUT" right>
            <b-dropdown-item href="#">Our Story</b-dropdown-item>
            <b-dropdown-item href="#">Testimonials</b-dropdown-item>
            <b-dropdown-item href="#">Partner</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown id="text" class="w-100 p-3" text="PRODUCT" right>
            <b-dropdown-item href="#">All Product</b-dropdown-item>
            <b-dropdown-item href="#">Ube Halaya Bottle</b-dropdown-item>
            <b-dropdown-item href="#">Ube Ubechi</b-dropdown-item>
            <b-dropdown-item href="#">Ube Cake</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item id="text" class="w-100 p-3" to="faq">FAQs</b-nav-item>
          <b-nav-item id="text" class="w-100 p-3" to="login">LOGIN </b-nav-item>
          <b-nav-item id="text" class="w-100 p-3" to="register">SIGNUP</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import ROUTER from "router";
export default {
  methods: {
    redirect(route) {
      ROUTER.push(route);
    }
  }
};
</script>
<style scoped lang="scss">
#userIcon {
  width: 11%;
  height: auto;
}
#login {
  background: #bb6bd9;
  font-size: 16px;
}
#register {
  background: #bb6bd9;
  font-size: 16px;
}
#text {
  font-size: 16px;
}
</style>