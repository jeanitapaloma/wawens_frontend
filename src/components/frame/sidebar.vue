<template>
  <b-container class="mt-5 pt-5 h-100" fluid >
    <b-row >
      <b-col lg="2" class="pt-5 side-nav-border">
        <div class="text-center mb-5">
          <h1>ADMIN</h1>
          <i class="fa fa-user-circle-o my-3"></i>
          <h3>{{message}}</h3>
        </div>
        <b-list-group>
          <div class="d-flex justify-content-between align-items-center py-2 text " v-for="(item,i) in sidenav" :key="i">
            <i :class="'fa ' + item.icon"></i>
            <b-list-group-item :to="item.link" :active="item.link === $router.currentRoute? true:false"  v-text="item.text" class="rounded" active-class="active"></b-list-group-item>
          </div>
        </b-list-group>
      </b-col>
      <b-col lg="10" >
        <slot></slot>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data: () => ({
    message: "Admin_Username",
    sidenav: [
      { icon : 'fa-user',text : 'My Profile' , link : '/profile'},
      { icon : 'fa-group',text : 'Accounts' , link : '/accounts'},
      { icon : 'fa-list-alt',text : 'Orders' , link : '/orders'},
      { icon : 'fa-vcard-o',text : 'Customers' , link : '/customers'},
      { icon : 'fa-asterisk',text : 'Others' , link : '/others'},
      { icon : 'fa-sign-out',text : 'Logout' , link : '/logout'}
    ]
  })
};
</script>

<style scoped>
.active{
  background-color: #bb6bd9!important;
}
.h-100 {
  height: 100vh !important;
}
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 200px; /* Set the width of the sidebar */
  top: 0; /* Stay at the top */
  left: 0;
  background-image: linear-gradient(#e5b1fd, #efe0f8);
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 50px;
  border-left: 1px solid #12335e;
}
.fa-user-circle-o {
  font-size: 36px;
}
.side-nav-border {
  border-right: 3px solid rgba(209, 119, 236, 0.5);
  height: 100vh !important;
}

.rounded {
  border-radius: 10px !important;
  border: 2px solid #bb6bd9;
  
}
.text .fa {
  font-size: 24px;
  width: 50px
}

/* The navigation menu links */
.text {
  padding: 6px 8px 6px 16px;
  font-size: 16px;
  color: black;
  padding-top: 18%;
  text-align: center;
 
}
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
  height: calc(2em + 0.75rem + 2px);
  width: 85%;
  font-size: 15px;
  margin-left: 5%;
  border-radius: 5px;
  border: 2px solid #bb6bd9;
  margin-top: 5%;
}
</style>

