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
            <th class="thtable2" scope="col">Total Orders</th>
            <th class="thtable3" scope="col">
              <b-form-input placeholder="Search here..."></b-form-input>
            </th>
          </tr>
        </thead>
      </table>
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
    };
  }
};
</script>
<style scoped>
table,
th,
td {
  border: 2px solid violet;
  border-collapse: collapse;
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
}
.thtable1 {
  border: 1px solid #ddd;
  padding: 8px;
  color: white;
  background-color: blueviolet;
  width: 10%;
}
.thtable2 {
  border: 1px solid #ddd;
  padding: 8px;
  color: purple;
  background-color: violet;
  width: 25%;
}
.thtable3 {
  font-weight: 12px;
  padding: 8px;
}
</style>
