<template>
  <div>
    <sidebar>
      <div>
        <p class="pcustomer">Customer's Management</p>
      </div>
      <table class="table table-white">
        <thead>
          <tr>
            <th class="thtable1" scope="col">SORT</th>
            <th class="dropdown">
              <a
                data-toggle="dropdown"
                class="dropdown-toggle"
                aria-haspopup="true"
                aria-expanded="false"
              >Total Orders</a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item">Completed Orders</a>
                  <a class="dropdown-item">Cancelled Orders</a>
                  <a class="dropdown-item">Best Buyers</a>
                </li>
              </ul>
            </th>
          </tr>
        </thead>
      </table>
      <b-form-input class="searchbar" placeholder="Search here..."></b-form-input>
      <div>
        <b-table :items="items" :fields="fields">
          <template v-slot:cell(ACTIONS)="row">
            <i @click="row.toggleDetails" class="fa fa-eye" style="font-size:20px;"></i>
          </template>
        </b-table>
      </div>
    </sidebar>
  </div>
</template>
<script>
import sidebar from "../../components/frame/sidebar";
export default {
  components: {
    sidebar
  },
  data() {
    return {
      fields: [
        "USERNAME",
        "TOTAL_ORDERS",
        "COMPLETED_ORDERS",
        " CANCELLED_ORDERS",
        "ACTIONS"
      ],
      items: [
        {
          USERNAME: "mingming",
          TOTAL_ORDERS: "",
          COMPLETED_ORDERS: "",
          CANCELLED_ORDERS: ""
          // ACTIONS: ""
        },
        {
          USERNAME: "mingming",
          TOTAL_ORDERS: "",
          COMPLETED_ORDERS: "",
          CANCELLED_ORDERS: ""
          // ACTIONS: ""
        }
      ]
      //       $(function(){
      //    $(".dropdown-menu").on('click', 'a', function(){
      //        $(this).parents('.dropdown').find('button').text($(this).text());
      //    });
      // });
    };
  }
};
</script>
<style scoped>
/* .dropdown {
  color: purple;
  background-color: violet;
  border: 2px solid violet;
  height: calc(2em + 0.75rem + 2px);
  margin-top: -5.3%;
  padding: 0.1rem 4rem;
}
.drop {
  font-size: 15px;
} */
.dropdown-toggle{
  cursor: pointer;
}
a {
  color: purple;
  text-decoration: none;
  background-color: transparent;
}
.a:hover {
  color: purple;
  text-decoration: none;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  display: none;
  float: left;
  width: 100%;
  font-size: 1.5rem;
  color: purple;
  text-align: center;
  list-style: none;
  background-color: violet;
  border-radius: 0.25rem;
}
.dropdown-menu:hover {
  background-color: violet;
}
table,
th,
td {
  border: 2px solid violet;
  text-align: center;
}
.pcustomer {
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  font-size: 20px;
  margin-top: 1%;
}
.table-white {
  font-size: 15px;
  text-align: center;
  margin-bottom: 1rem;
  width: 40%;
}
.thtable1 {
  padding: 8px;
  color: white;
  background-color: blueviolet;
  width: 10%;
  border: 2px solid violet;
}
#thtable2 {
  padding: 8px;
  color: purple;
  background-color: violet;
  border: 2px solid violet;
}
.form-control {
  width: 60%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 20px;
  color: violet;
  background-color: #fff;
  background-clip: padding-box;
  border: 2px solid violet;
  border-radius: 0.25rem;
  float: right;
  margin-top: -5.3%;
}
</style>
