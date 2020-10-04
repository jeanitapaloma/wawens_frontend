<template>
  <div>
    <div>
      <p class="porder">
        Customer's Management
      </p>
    </div>
    <table class="table table-purple">
      <thead>
        <tr>
          <th class="thtable1"  scope="col" href="#">SORT</th>
          <th class="thtable2" scope="col">Total Orders
            
          </th>
          <th class="thtable3" scope="col">
            <b-form-input  placeholder="Search here..."></b-form-input>
          </th>
        </tr>
      </thead>
    </table>
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          USERNAME: "mingming",
          TOTAL_ORDERS: "",
          COMPLETED_ORDERS: "",
          CANCELLED_ORDERS: "",
          ACTIONS: ""
        }
      ]
    };
  }
};
</script>
<style>
table,
th,
td {
  border: 2px solid violet;
  border-collapse: collapse;
  text-align: center;
}
.porder {
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  font-size: 20px;
  margin-top: 6%;
}
.table-purple {
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
.table {
  width: 80%;
}

</style>
