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
          <b-table class="tabledata" :items="filterProducts" :fields="fields">
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
          <div class="modal-content">
            <h2 class="modal-title">ORDER DETAILS</h2>
            <hr style="width: 100%;border-width: 2px;border-color: violet;">
            <div class="row">
              <div class="col-md-8 text-justify" style="margin-top: 1%;">
                <p class="font-weight-bold ml-5" style="font-size: 15px;">USERNAME:</p>
                <p class="font-weight-bold" style="font-size: 15px;float: right;margin-top:-5%;">DATE AND TIME ORDERED:</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <p class="font-weight-bold ml-5" style="font-size: 15px;">RECEIVER'S ADDRESS:</p>
                <p class="font-weight-bold" style=" font-size: 15px;float: right;margin-right: 14%;margin-top:-5%;">ORDERED NO:</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <p class="font-weight-bold ml-5" style="font-size: 15px;">DELIVERY ADDRESS:</p>
                <p
                  lass="font-weight-bold"
                  style=" font-size: 15px;font-weight: bold;float: right;margin-right: 22%;margin-top:-5%;">LABEL:</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <p class="font-weight-bold ml-5" style="font-size: 15px;">DELIVERY CONTACT:</p>
                <p class="font-weight-bold" style="font-size: 15px;float: right;margin-right: -28%;margin-top:-5%;"
                >
                  ACTUAL DELIVERY DATE:
                  <button
                    type="button"
                    id="button1"
                    class="btn btn-primary btn-sm"
                  >APPROVED SELECTED DATE</button>
                </p>
                <i
                  class="fa fa-edit"
                  style="font-size: 28px; float: right; margin-right: -68%; color:purple;margin-top:-5%;"
                ></i>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <p class="font-weight-bold ml-5" style="font-size: 15px;float: left;">PAYMENT MODE:</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <p
                  class="font-weight-bold ml-5"
                  style="font-size: 15px;"
                >Message/Delivery Instructions:</p>
                <p
                  class="font-weight-bold ml-5"
                  style="font-size: 15px;float: right;margin-right: 21%;margin-top:-5%;"
                >STATUS:</p>
                <button type="button" id="confirm" class="btn btn-primary btn-sm">CONFIRM</button>
              </div>
            </div>
            <b-form-textarea class="ml-5" rows="8" style="width: 90%;font-size: 12px;"></b-form-textarea>
            <br>
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
      fields1: ["ITEMS", "UNIT", "QUANTITY", "PRICE", "SUBTOTAL"],
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
      products: [],
      products1: [],
      status: "pending"
    };
  },
  computed: {
    filterProducts() {
      return this.products;
      // return this.products1;
    }
  },
  methods: {
    filter() {
      this.products = this.items.filter(item => item.status === this.status);
      // this.products1 = this.items1.filter
    }
  },
  mounted() {
    this.filter();
  }
};
</script>
<style scoped>
.card {
  width: 95%;
  margin-left: 3%;
  border-width: 2px;
  border-color: violet;
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
.thtable:hover {
  text-decoration: underline;
  cursor: pointer;
}
.fa-eye:hover {
  cursor: pointer;
}
.fa-edit:hover {
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
.tabledata {
  border: 2px solid violet;
  padding: 8px;
}
#button1 {
  color: purple;
  font-weight: bold;
  height: 1%;
  margin-left: 46%;
  width: 60%;
  margin-top: -12%;
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
