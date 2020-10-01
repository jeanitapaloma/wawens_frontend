<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" variant="none" class="navbar" fixed="top">
        <b-navbar-brand style="padding-bottom:60px;">
          <img :src="require('@/assets/logo.png')" class="logo-brand">
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" id="navbar-nav">
            <b-nav-item to="/" style="padding:5px;">HOME</b-nav-item>

            <b-nav-item-dropdown text="ABOUT" style="padding:5px;color:blue;" right>
              <b-dropdown-item class="drop" to="story">Our Story</b-dropdown-item>
              <b-dropdown-item class="drop" to="testimonial">Testimonials</b-dropdown-item>
              <b-dropdown-item class="drop" to="partner">Partner</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="PRODUCT" style="padding:5px;" right>
              <b-dropdown-item class="drop" to="product">All Product</b-dropdown-item>
              <b-dropdown-item class="drop" to="bottle">Ube Halaya Bottle</b-dropdown-item>
              <b-dropdown-item class="drop" to="ubechi">Ube Ubechi</b-dropdown-item>
              <b-dropdown-item class="drop" to="cake">Ube Cake</b-dropdown-item>
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
.navbar {
  background-color: #e5b1fd;
  height: 60px;
  width: 100%;
}

#navbar-nav {
  color: black;
  font-size:18px;
  font-weight: bold;
}

.logo-brand {
  width: 55px;
  height: 55px;
}

#app {
  width: 100%;
  top:0px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  position: relative;
}
.drop{
  font-size: 15px;
}
</style>
