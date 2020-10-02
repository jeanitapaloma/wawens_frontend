<template>
  <div>
    <div>
      <p class="porder">
        Order Management
        <span id="ptotal">TOTAL</span>
      </p>
    </div>
    <table class="table table-purple">
      <thead>
        <tr>
          <th class="thtable"  scope="col" href="#">PENDING</th>
          <th class="thtable" scope="col">CONFIRMED</th>
          <th class="thtable" scope="col">HISTORY</th>
        </tr>
      </thead>
    </table>
    <p class="p1">
      This section displays all the pending orders.(* The delivery displayed is
      selected by the customer)
    </p>
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
          DATE_ORDERED: 0,
          ORDER_NO: "",
          USERNAME: "",
          DELIVERY_ADDRESS: 0,
          PAYMENT: "",
          DELIVERY_DATE: "",
          LABEL: "",
          ACTIONS: ""
        }
      ]
    };
  }
};
</script>
<style>
.p1{
    font-size: 12px;
    font-style: italic;
    color: purple;
    font-weight: bold;
}
table,
th,
td {
  border: 2px solid violet;
  border-collapse: collapse;
  text-align: center;
  font-weight: bold;
}
.porder {
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  font-size: 20px;
  margin-top: 1%;
}
#ptotal {
  color: black;
  font-weight: bold;
  font-size: 20px;
  font-family: Arial;
  font-style: normal;
  margin-left: 40%;
}
.table-purple {
  background-color: blueviolet;
  font-size: 18px;
  text-align: center;
}
.thtable {
  border: 1px solid #ddd;
  padding: 8px;
  color: white;
}
.table {
  width: 80%;
  margin-bottom: 1rem;
  color: purple;
}
</style>
