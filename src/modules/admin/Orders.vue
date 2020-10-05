<template>
  <div>
    <sidebar>
      <b-container class="mt-5">
        <div>
          <p class="d-flex justify-content-between porder">
            Order Management
            <span class="ptotal">TOTAL : 2</span>
          </p>
        </div>
        <table class="table table-purple">
          <thead>
            <tr>
              <th class="thtable" scope="col" @click="filter(status = 'pending')">PENDING</th>
              <th class="thtable" scope="col" @click="filter(status ='confirmed')">CONFIRMED</th>
              <th class="thtable" scope="col" @click="filter(status = 'completed')">HISTORY</th>
            </tr>
          </thead>
        </table>
        <p class id="p1">This section displays all the {{status}} orders.</p>
        <div>
          <b-table :items="filterProducts" :fields="fields">
            <template v-slot:cell(ACTIONS)>
              <i
                class="fa fa-eye"
                style="font-size:20px;"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              ></i>
            </template>
          </b-table>
        </div>
      </b-container>
      <!-- MODAL -->
      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <h2 class="modal-title">ORDER DETAILS</h2>
            <hr>
            <div class="row">
              <div class="col-md-8 text-justify">
                <p class="pleft">USERNAME:</p>
                <p class="pright">DATE AND TIME ORDERED:</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <p class="pleft">RECEIVER'S ADDRESS:</p>
                <p class="pright1">ORDERED NO:</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <p class="pleft">DELIVERY ADDRESS:</p>
                <p class="pright2">LABEL:</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <p class="pleft">DELIVERY CONTACT:</p>
                <p class="pright3">ACTUAL DELIVERY DATE:</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <p class="pleft">PAYMENT MODE:</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <p class="pleft">Message/Delivery Instructions:</p>
                <p class="pright4">STATUS:</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <p>For the cake can you write:</p>
                <p>Happy 60th Birthday Mama!From: You Daughters!</p>
              </div>
            </div>
             <b-table :items1="filterProducts" :fields1="fields1"></b-table>
          </div>
        </div>
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
      fields1: [
        "ITEMS",
        "UNIT",
        "QUANTITY",
        "PRICE",
        "SUBTOTAL",
      ],
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
          status: "confirmed"
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
      items1: [
        {
          ITEMS	  : 0,
          UNIT: "",
          QUANTITY: "pending",
          PRICE: 0,
          SUBTOTAL: "",
        },
      ],
      products: [],
      status: "pending"
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
  mounted() {
    this.filter();
  }
};
</script>
<style>
.card {
  width: 95%;
  margin-left: 3%;
  border-width: 2px;
  border-color: violet;
}
.col-md-8 {
  margin-top: 1%;
}
.pright1 {
  font-size: 15px;
  font-weight: bold;
  float: right;
  margin-right: 17%;
}
.pright2 {
  font-size: 15px;
  font-weight: bold;
  float: right;
  margin-right: 27%;
}
.pright3 {
  font-size: 15px;
  font-weight: bold;
  float: right;
  margin-right: 3%;
}
.pright4 {
  font-size: 15px;
  font-weight: bold;
  float: right;
  margin-right: 25%;
}
.pright {
  font-size: 15px;
  font-weight: bold;
  float: right;
}
.pleft {
  font-size: 15px;
  font-weight: bold;
  float: left;
  margin-left: 5%;
}
.modal-title {
  font-size: 20px;
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  text-align: center;
  margin-top: 2%;
}
#p1 {
  font-size: 12px;
  font-style: italic;
  color: purple;
  font-weight: bold;
}
.thtable:hover {
  text-decoration: underline;
  cursor: pointer;
}
.porder {
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  font-size: 20px;
  margin-top: -2%;
}
.ptotal {
  color: black;
  font-weight: bold;
  font-size: 20px;
  font-family: Arial;
  font-style: normal;
}
.table-purple {
  background-color: blueviolet;
  text-align: center;
}
.thtable {
  padding: 8px;
  color: white;
  border: 2px solid violet;
  font-size: 20px;
}
table,
th,
td {
  border: 1px solid violet;
  align-items: center;
}
hr {
  width: 100%;
  border-width: 2px;
  border-color: violet;
}
</style>
