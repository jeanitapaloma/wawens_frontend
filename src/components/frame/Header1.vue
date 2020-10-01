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

            <b-nav-item-dropdown  text="ABOUT" style="padding:5px;color:blue;" right>
              <b-dropdown-item to="story">Our Story</b-dropdown-item>
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
            <button class="dropbtn">
              <i class="fa fa-shopping-cart" style="font-size:28px"></i>
            </button>
            <div class="dropdown" style="float:right;">
              <button class="dropbtn">
                <i class="fa fa-user" style="font-size:28px"></i>
              </button>
              <div class="dropdown-content">
                <button class="dropdown-item">Profile</button>
                <button class="dropdown-item">Order Status</button>
                <button class="dropdown-item">Logout</button>
              </div>
            </div>
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
.dropbtn {
  background-color: transparent;
  color: black;
  padding: 16px;
  font-size: 16px;
  border: transparent;
  cursor: pointer;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  min-height: 50px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-family: "Multi-bold";
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .dropbtn {
  background-color: transparent;
}
</style>
