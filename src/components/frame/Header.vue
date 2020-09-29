<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" variant="none" class="navbar" fixed="top">
        <b-navbar-brand>
          <img :src="require('@/assets/logo.png')" class="logo-brand">
        </b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" style="font-size:15px;">
            <b-nav-item to="/" style="padding:5px;">HOME</b-nav-item>

            <b-nav-item-dropdown text="ABOUT" style="padding:5px;color:blue;" right>
              <b-dropdown-item to="profile">Our Story</b-dropdown-item>
              <b-dropdown-item to="testimonial">Testimonials</b-dropdown-item>
              <b-dropdown-item to="partner">Partner</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="PRODUCT" style="padding:5px;" right>
              <b-dropdown-item to="product">All Product</b-dropdown-item>
              <b-dropdown-item to="bottle">Ube Halaya Bottle</b-dropdown-item>
              <b-dropdown-item to="ubechi">Ube Ubechi</b-dropdown-item>
              <b-dropdown-item to="cake">Ube Cake</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item to="faq" style="padding:5px;">FAQs</b-nav-item>
            <b-nav-item to="login" style="padding:5px;">LOGIN</b-nav-item>
            <b-nav-item to="register" style="padding:5px;">SIGNUP</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<style scoped lang="scss">
.navbar{
  background-color: #e5b1fd;
  color: black;
  font-weight: bold;
  height: 50px;
  width: 100%;
}

.logo-brand {
  width: 40px;
  height: 40px;
}
</style>
