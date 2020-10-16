<template>
  <div>
    <div>
      <b-modal id="customer-modal" size="lg">
        <template v-slot:modal-header>
          <h5
            class="text-center"
            style="font-family: Segoe Script;font-weight:bold; font-size:20px;color:darkviolet; margin-left:26%;"
            centered
          >CUSTOMER TRANSACTION HISTORY</h5>
        </template>
        <br>
        <b-container class="bv-example-row">
          <b-row>
            <p style="font-weight:bold; font-size:16px;">
              USERNAME:&nbsp;&nbsp;
              <!-- <span style="font-style:italic; font-size:16px;">Ahjook</span> -->
            </p>
            <p style="font-weight:bold; font-size:16px; margin-left:38%;">
              FIRSTNAME:
              <!-- <span style="font-style:italic; font-size:16px;">Merry Cris Ajoc</span> -->
            </p>
          </b-row>
          <br>
          <b-row>
            <b-col sm="8">
              <b-row>
                <table
                  class="table table-purple"
                  style="border:1px solid darkviolet;text-align:center;font-size:15px;border-bottom:1px solid darkviolet;"
                  border
                >
                  <thead>
                    <tr>
                      <th
                        class="thtable"
                        scope="col"
                        @click="filter(status = 'completed')"
                      >COMPLETED ORDERS</th>
                      <th
                        class="thtable"
                        scope="col"
                        @click="filter(status ='cancelled')"
                      >CANCELLED ORDERS</th>
                    </tr>
                  </thead>
                </table>
                <p
                  style=" font-size: 13px; font-style: italic;  color: purple;font-weight: bold;"
                >This section displays all the {{status}} orders.</p>
                <b-row>
                  <b-col>
                    <b-table
                      class="table table-purple"
                      :fields="fields"
                      :items="filterOrders"
                      style="border:1px solid darkviolet;text-align:center; width:520px;font-size:13px;color:black;"
                      outlined
                      head-variant="lightgrey"
                    >
                      <template v-slot:cell(ACTION)>
                        <i
                          class="fa fa-eye"
                          style="font-size:20px;"
                          data-toggle="modal"
                          data-target=".bd-example-modal-lg"
                          @click="orderDetails"
                        ></i>
                      </template>
                    </b-table>
                  </b-col>
                  <b-col sm="5"></b-col>
                </b-row>
              </b-row>
            </b-col>
            <b-col sm="4">
              <p
                style="font-weight:bold; font-size:15px; text-align:center;height:20px;"
              >PRODUCTS PURCHASED CHART</p>
              <b-container class="bv-example-row">
                <b-row>
                  <b-form-select
                    v-model="selected"
                    :options="options"
                    centered
                    class="selectForm"
                    style="border:1px solid black;font-size:12px;color:black;"
                  ></b-form-select>
                  <!-- <p style="font-weight:bold; font-size:12px;margin-left:50px;">TOTAL:</p> -->
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
         <template v-slot:modal-footer="{close}">
          <button type="button" class="btn" @click="close()">CLOSE</button>
        </template>
      </b-modal>
    </div>
    <order-details-modal ref="detailsModal"/>
  </div>
</template>
<script>
import OrderDetailsModal from '../basic/OrderDetails_Modal'
export default {
  components: {
      OrderDetailsModal
  },
  data() {
    return {
      selected: null,
      options: [
        { id: null, text: "--PLEASE SELECT YEAR--", disabled: true },
        { id: 2, text: "2020" },
        { id: 3, text: "2019" },
        { id: 3, text: "2018" },
        { id: 3, text: "2017" },
        { id: 3, text: "2016" },
        { id: 3, text: "2015" }
      ],
      fields: ["ORDER_NO.", "COMPLETED_AT", "ACTION"],
      items: [
        {
          ORDER_NO: "18106093",
          COMPLETED_AT: "2020-09-27 07:32 PM",
          ACTIONS: "",
          status: "completed"
        },
        {
          ORDER_NO: "18106093",
          COMPLETED_AT: "2020-09-27 07:32 PM",
          ACTIONS: "",
          status: "completed"
        },
        {
          ORDER_NO: "18106093",
          COMPLETED_AT: "2020-09-27 07:32 PM",
          ACTIONS: "",
          status: "completed"
        },

        {
          ORDER_NO: "20202022",
          COMPLETED_AT: "12019-02-14 12:32 PM",
          ACTIONS: "",
          status: "cancelled"
        },
        {
          ORDER_NO: "20202022",
          COMPLETED_AT: "12019-02-14 12:32 PM",
          ACTIONS: "",
          status: "cancelled"
        },
        {
          ORDER_NO: "20202022",
          COMPLETED_AT: "12019-02-14 12:32 PM",
          ACTIONS: "",
          status: "cancelled"
        }
      ],
      orders: [],
      status: "completed"
    };
  },
  methods: {
    shown() {
      this.$bvModal.show("customer-modal");
    },
    orderDetails() {
      this.$refs.detailsModal.shown();
    },
    filter() {
      this.orders = this.items.filter(item => item.status === this.status);
    }
  },
  computed: {
    filterOrders() {
      return this.orders;
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
.selectForm {
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
}
#file {
  background: lightgrey;
  height: calc(2em + 0.75rem + 2px);
  min-width: 75px;
  font-size: 1rem;
  color: darkviolet;
  border: 1px solid darkviolet;
  font-weight: bold;
}
.btn {
  background: #bb6bd9;
  height: calc(2.5em + 0.75rem + 2px);
  width: 15%;
  font-size: 11PX;
  color: black;
  height: calc(2.5em + 0.75rem + 2px);
  border: 1px solid darkviolet;
  font-weight: bold;
}
table,
tr,
th,
tbody {
  border: 2px solid darkviolet;
  text-align: center;
  vertical-align: bottom;
  border-bottom: 2px solid violet;
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
.fa-eye:hover {
  cursor: pointer;
}
</style>
