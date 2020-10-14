<template>
  <div>
    <b-modal id="modal-multi-1" size="xl" hide-footer hide-header>
          <h2 class="modal-title">ORDER DETAILS</h2>
          <hr style="border-width: 2px;border-color: violet;">
          <b-container class="modal-history-row mb-3">
            <b-row cols="2">
              <b-col>USERNAME:</b-col>
              <b-col>DATE AND TIME ORDERED:</b-col>
            </b-row>
          </b-container>
          <b-container class="modal-history-row mb-3">
            <b-row class cols="2">
              <b-col>RECEIVER'S NAME:</b-col>
              <b-col>ORDER NO:</b-col>
            </b-row>
          </b-container>
          <b-container class="modal-history-row mb-3">
            <b-row class cols="2">
              <b-col>DELIVERY ADDRESS:</b-col>
              <b-col>LABEL:</b-col>
            </b-row>
          </b-container>
          <b-container class="modal-history-row">
            <b-row class align-h="between">
              <b-col cols="4" style="margin-left:33%;">SELECTED DELIVERY DATE:</b-col>
            </b-row>
          </b-container>
          <br>
          <b-container class="modal-history-row mb-3">
            <b-row class cols="2">
              <b-col>DELIVERY CONTACT:</b-col>
              <b-col>
                ACTUAL DELIVERY DATE:
                <b-button
                  id="button1"
                  class="text-align center font-weight-bold"
                  style="color:blueviolet;width:48%;"
                >APPROVED SELECTED DATE</b-button>
              </b-col>
            </b-row>
            <i
              class="fa fa-edit"
              style="font-size: 28px;float: right;margin-top: -3.5%;margin-right: 2%;color:blueviolet;"
            ></i>
          </b-container>
          <b-container class="modal-history-row mb-3">
            <b-row class cols="2">
              <b-col>PAYMENT MODE:</b-col>
            </b-row>
          </b-container>
          <b-container class="modal-history-row mb-3">
            <b-row class cols="2">
              <b-col>Message/Delivery Instructions(Optional):</b-col>
              <b-col>STATUS:</b-col>
            </b-row>
            <b-button
              id="bconfirm"
              class="text-align center font-weight-bold"
              style="color:blueviolet;width:10%;float:right;margin-top: -2%;"
            >CONFIRM</b-button>
          </b-container>
          <b-col sm="10" class="ml-4">
            <b-card style="align-items: center;width:115%;"></b-card>
          </b-col>
          <br>
          <b-table
            class="table-borderless text-center ml-5"
            :items="items"
            :fields="fields"
            style="width: 90%;font-size: 12px;"
          ></b-table>
          <br>
          <b-container class="modal-history-row">
            <b-row align-h="end">
              <b-col cols="4">TOTAL QUANTITY:</b-col>
              <b-col cols="4">TOTAL:</b-col>
            </b-row>
          </b-container>
          <b-container class="modal-history-row">
            <b-row align-h="end">
              <b-col cols="4">DELIVERY FEE:</b-col>
            </b-row>
            <b-button
              id="bfree"
              @click="FreeOrderDetails"
              class="text-align center font-weight-bold"
              style="color:blueviolet;width:10%;float:right;margin:right: 3%;margin-top: -2.5%;"
            >FREE</b-button>
            <i
              class="fa fa-edit"
              style="font-size: 30px;float:right;margin-top:-2.5%;color:blueviolet;"
            ></i>
          </b-container>
          <b-container class="modal-history-row">
            <b-row align-h="end">
              <b-col cols="4">TOTAL PAYMENT:</b-col>
            </b-row>
          </b-container>
    </b-modal>
    <free-orderdetails ref="FreeModal"></free-orderdetails>
    </div>
</template>
<script>
import FreeOrderDetails from "./FreeOrderDetails";
export default {
  FreeOrderDetails,
  data() {
    return {
      fields: ["ITEMS", "UNIT", "QUANTITY", "PRICE", "SUBTOTAL"],
      items: [
        {
          ITEMS: "UBECHI",
          UNIT: 40,
          QUANTITY: 0,
          PRICE: 0,
          SUBTOTAL: 0
        },
        {
          ITEMS: "UBECHI",
          UNIT: 40,
          QUANTITY: 0,
          PRICE: 0,
          SUBTOTAL: 0
        },
        {
          ITEMS: "UBECHI",
          UNIT: 40,
          QUANTITY: 0,
          PRICE: 0,
          SUBTOTAL: 0
        }
      ]
    };
  },
  methods: {
    shown() {
      this.$bvModal.show("modal-multi-1");
    },
    FreeOrderDetails(){
      this.$refs.FreeModal.shown();
    }
  }
};
</script>

<style scoped>
#button1 {
  background-color: transparent;
  border: 2px solid blueviolet;
}
#bconfirm {
  background-color: transparent;
  border: 2px solid blueviolet;
}
#bfree {
  background-color: transparent;
  border: 2px solid blueviolet;
}
.card {
  border: 2px solid blueviolet;
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
.fa-edit:hover {
  cursor: pointer;
}
.modal-history-row {
  font-size: 12px;
  font-weight: bold;
}
</style>
