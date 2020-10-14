<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 100%;">
      <div class="modal-content">
        <h2 class="modal-title">ORDER DETAILS</h2>
        <hr style="width: 100%;border-width: 2px;border-color: violet;">
        <b-container class="modal-history-row mb-3">
          <b-row cols="2">
            <b-col>USERNAME: Mingming Cute</b-col>
            <b-col>DATE AND TIME ORDERED: 10/14/20 10PM</b-col>
          </b-row>
        </b-container>
        <b-container class="modal-history-row mb-3">
          <b-row class cols="2">
            <b-col>RECEIVER'S NAME: Mingming Cute</b-col>
            <b-col>ORDER NO: 0000</b-col>
          </b-row>
        </b-container>
        <b-container class="modal-history-row mb-3">
          <b-row class cols="2">
            <b-col>DELIVERY ADDRESS: Brgy. DiMakita</b-col>
            <b-col>LABEL: Way kami</b-col>
          </b-row>
        </b-container>
        <b-container class="modal-history-row">
          <b-row class align-h="between">
            <b-col cols="4" style="margin-left:33%;">SELECTED DELIVERY DATE: 10/14/20</b-col>
          </b-row>
        </b-container>
        <br>
        <b-container class="modal-history-row mb-3">
          <b-row class cols="2">
            <b-col>DELIVERY CONTACT: 1111111</b-col>
            <b-col>
              ACTUAL DELIVERY DATE:
              <b-button
                id="button1"
                class="text-align center font-weight-bold"
                style="color:purple;width:48%;"
              >APPROVED SELECTED DATE</b-button>
            </b-col>
          </b-row>
          <i
            class="fa fa-edit"
            style="font-size: 27px;float: right;margin-top: -3%;margin-right: 3%;color:violet;"
          ></i>
        </b-container>
        <b-container class="modal-history-row mb-3">
          <b-row class cols="2">
            <b-col>PAYMENT MODE: COD</b-col>
          </b-row>
        </b-container>
        <b-container class="modal-history-row mb-3">
          <b-row class cols="2">
            <b-col>Message/Delivery Instructions(Optional):</b-col>
            <b-col>STATUS: SINGLE</b-col>
          </b-row>
          <b-button
            id="button1"
            class="text-align center font-weight-bold"
            style="color:purple;width:10%;float:right;margin-top: -2%;"
          >CONFIRM</b-button>
        </b-container>
        <b-col sm="10" class="ml-4">
          <b-card></b-card>
        </b-col>
        <br>
        <b-table
          class="table-borderless text-center ml-5"
          :items="items"
          :fields="fields"
          style="width: 90%;"
        ></b-table>
      </div>
    </b-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
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
  }
};
</script>

<style scoped>
#button1 {
  background-color: transparent;
  border: 2px solid violet;
}
.card {
  border: 2px solid violet;
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
  font-size: 15px;
}
</style>
