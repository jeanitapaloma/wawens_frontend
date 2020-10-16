<template>
  <div>
    <p
      style=" font-size: 15px;font-style: italic;color: purple;font-weight: bold;"
    >This section displays all the pending orders...</p>
    <div>
      <b-table
        class="table table-bordered text-center"
        :items="items"
        :fields="fields"
        style="border: 2px solid violet;font-size: 13px;"
      >
        <template v-slot:cell(ACTIONS)>
          <i class="fa fa-eye" style="font-size:20px;" @click="orderDetails"></i>
        </template>
      </b-table>
    </div>
    <OrderDetails ref="orderModal"></OrderDetails>
  </div>
</template>
<script>
import OrderDetails from "../../modules/basic/OrderDetails.vue";
export default {
  components: {
      OrderDetails
  },
  data() {
    return {
      fields: [
        "DATE_ORDERED",
        "ORDER_NO",
        "USERNAME",
        "DELIVERY_ADDRESS",
        "PAYMENT",
        "LABEL",
        "ACTIONS"
      ],
      items: [
        {
          DATE_ORDERED: "10/16/20",
          ORDER_NO: "143",
          USERNAME: "pending",
          DELIVERY_ADDRESS: "Passerelles",
          PAYMENT: "COD",
          LABEL: "Way kami",
          ACTIONS: ""
        },
        {
         DATE_ORDERED: "10/16/20",
          ORDER_NO: "143",
          USERNAME: "pending",
          DELIVERY_ADDRESS: "Passerelles",
          PAYMENT: "COD",
          LABEL: "Way kami",
          ACTIONS: ""
        },
        {
          DATE_ORDERED: "10/16/20",
          ORDER_NO: "143",
          USERNAME: "pending",
          DELIVERY_ADDRESS: "Passerelles",
          PAYMENT: "COD",
          LABEL: "Way kami",
          ACTIONS: ""
        }
      ]
    };
  },
  methods: {
      orderDetails(){
          this.$refs.orderModal.shown();
      }
  }
};
</script>
<style scoped>
.fa-eye:hover {
  cursor: pointer;
}
</style>


