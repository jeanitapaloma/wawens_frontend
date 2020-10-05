<template>
  <div>
    <sidebar>
      <b-container class="mt-5">
        <div>
        <p class="d-flex justify-content-between  porder">
          Order Management
          <span class="ptotal">TOTAL : 2</span>
        </p>
      </div>
      <table class="table table-purple">
        <thead>
          <tr>
            <th class="thtable" scope="col" href="#" @click="filter(status = 'pending')">PENDING</th>
            <th class="thtable" scope="col" @click="filter(status ='confirm')">CONFIRMED</th>
            <th class="thtable" scope="col" @click="filter(status = 'completed')">HISTORY</th>
          </tr>
        </thead>
      </table>
      <p class="p1">
        This section displays all the {{status}} orders.(* The delivery displayed is
        selected by the customer)
      </p>
      <div>
        <b-table striped hover :items="filterProducts" :fields="fields"></b-table>
      </div>
      </b-container>
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
        "DATE_ORDERED",
        "ORDER_NO",
        "USERNAME",
        "DELIVERY_ADDRESS",
        "PAYMENT",
        "DELIVERY_DATE",
        "LABEL",
        "ACTIONS"
      ],
      items: [
        {
          DATE_ORDERED: 0,
          ORDER_NO: "",
          USERNAME: "pending",
          DELIVERY_ADDRESS: 0,
          PAYMENT: "",
          DELIVERY_DATE: "",
          LABEL: "",
          ACTIONS: "",
          status: "pending"
        },
        {
          DATE_ORDERED: 0,
          ORDER_NO: "",
          USERNAME: "confirm",
          DELIVERY_ADDRESS: 0,
          PAYMENT: "",
          DELIVERY_DATE: "",
          LABEL: "",
          ACTIONS: "",
          status: "confirm"
        },
        {
          DATE_ORDERED: 0,
          ORDER_NO: "",
          USERNAME: "completed",
          DELIVERY_ADDRESS: 0,
          PAYMENT: "",
          DELIVERY_DATE: "",
          LABEL: "",
          ACTIONS: "",
          status: "completed"
        }
      ],
      products: [],
      status : 'pending',
    };
  },
  computed: {
    filterProducts() {
      return this.products;
    }
  },
  methods: {
    filter() {
      this.products = this.items.filter(item => item.status === this.status);
    }
  },
  mounted (){
    this.filter()
  }
};
</script>
<style>
.p1 {
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
  /* margin-top: 1%; */
}
.ptotal {
  color: black;
  font-weight: bold;
  font-size: 20px;
  font-family: Arial;
  font-style: normal;
  /* margin-left: 40%; */
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
  /* width: 80%; */
  margin-bottom: 1rem;
  color: purple;
}
</style>
