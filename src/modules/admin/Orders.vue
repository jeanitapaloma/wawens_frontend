<template>
  <div>
    <sidebar>
      <b-container class="mt-5">
        <div>
          <p class="d-flex justify-content-between porder">
            Order Management
            <span
              style="color: black;font-weight: bold;font-size: 20px;font-family: Arial;font-style: normal;"
            >TOTAL : 1</span>
          </p>
        </div>
        <table class="table table-purple" style="background-color: blueviolet;text-align: center;">
          <thead>
            <tr>
              <th class="thtable" scope="col" @click="filter(status = 'pending')">PENDING</th>
              <th class="thtable" scope="col" @click="filter(status ='confirmed')">CONFIRMED</th>
              <th class="thtable" scope="col" @click="filter(status = 'completed')">HISTORY</th>
            </tr>
          </thead>
        </table>
        <p
          style=" font-size: 12px;font-style: italic;color: purple;font-weight: bold;"
        >This section displays all the {{status}} orders.</p>
        <div>
          <b-table
            class="table table-bordered text-center"
            :items="filterProducts"
            :fields="fields"
            style="border: 2px solid violet;"
          >
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
        <div class="modal-dialog modal-lg" style="max-width: 1000px;">
          <!-- component -->
          <OrderDetails/>
        </div>
      </div>
    </sidebar>
  </div>
</template>

<script>
import sidebar from "../../components/frame/sidebar";
import OrderDetails from "./OrderDetails";
export default {
  components: {
    sidebar,
    OrderDetails
  },
  data() {
    return {
      modalfields: ["ITEMS", "UNIT", "QUANTITY", "PRICE", "SUBTOTAL"],
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
      modalitems: [
        {
          ITEMS: "",
          UNIT: "",
          QUANTITY: 0,
          PRICE: 0,
          SUBTOTAL: 0
        }
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
<style scoped>
.thtable:hover {
  text-decoration: underline;
  cursor: pointer;
}
.fa-eye:hover {
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
.thtable {
  padding: 8px;
  color: white;
  border: 2px solid violet;
  font-size: 20px;
}
#confirm {
  color: purple;
  font-weight: bold;
  height: 60%;
  width: 20%;
  margin-top: -7%;
  margin-left: 120%;
}
</style>
