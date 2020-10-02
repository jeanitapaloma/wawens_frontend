<template>
  <div>
    <div class="sidenav">
      <div class="side">
        <h1 class="text">ADMIN</h1>
        <i class="fa fa-user-circle-o"></i>
        <br>
        <br>
        <br>
        <h1>{{message}}</h1>
      </div>
      <div class="icone">
        <button class="btn">
          <span class="fa fa-user" style=" font-size:25px;" ></span> My Profile
        </button>
      </div>
      <div class="icone">
        <button class="btn">
          <span class="fa fa-group" style=" font-size:25px;" ></span> Accounts
        </button>
      </div>
      <div class="icone">
        <button class="btn">
          <span class="fa fa-list-alt" style=" font-size:25px;" ></span> Ordersss
        </button>
      </div>
      <div class="icone">
        <button class="btn">
          <span class="fa fa-vcard-o" style=" font-size:25px;" ></span>Customers
        </button>
      </div>
      <div class="icone">
        <button class="btn">
          <span class="	fa fa-asterisk" style=" font-size:25px;" ></span> Others
        </button>
      </div>
      <div class="icone">
        <button class="btn">
          <span class="fa fa-sign-out" style=" font-size:25px;" ></span> Logout
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    message: "Admin_Username"
  })
};
</script>

<style>
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 200px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-image: linear-gradient(#e5b1fd, #efe0f8);
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 50px;
  border-left: 1px solid #12335e;
}
.fa-user-circle-o {
  font-size: 36px;
  position: absolute;
  margin-left: 40%;
}

/* The navigation menu links */
.text {
  padding: 6px 8px 6px 16px;
  font-size: 20px;
  color: black;
  padding-top: 18%;
  text-align: center;
}
h1 {
  font-size: 15px;
  text-align: center;
}
/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
.btn {
  background: transparent;
  height: calc(2.0em + 0.75rem + 2px);
  width: 85%;
  font-size: 15px;
  margin-left: 5%;
  border-radius: 5px;
  border: 2px solid #bb6bd9;
  margin-top: 5%;
}
</style>

