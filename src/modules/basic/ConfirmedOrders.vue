<template>
  <div>
    <p
      style=" font-size: 15px;font-style: italic;color: purple;font-weight: bold;"
    >This section displays all the completed orders...</p>
    <div>
      <b-table
        class="table table-bordered text-center"
        :items="items"
        :fields="fields"
        style="border: 2px solid violet;font-size: 13px;"
      >
        <template v-slot:cell(ACTIONS)>
          <i class="fa fa-eye" style="font-size:20px;" @click="freeodModal"></i>
        </template>
      </b-table>
    </div>
    <ConfirmedModal ref="freeorderModal"></ConfirmedModal>
  </div>
</template>
<script>
import ConfirmedModal from "../../modules/basic/ConfirmedModal.vue";
export default {
  components: {
      ConfirmedModal
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
          DATE_ORDERED: "10/16/20",
          ORDER_NO: "143",
          USERNAME: "pending",
          DELIVERY_ADDRESS: "Passerelles",
          PAYMENT: "COD",
          DELIVERY_DATE: "10/16/20",
          LABEL: "Way kami",
          ACTIONS: ""
        },
        {
          DATE_ORDERED: "10/16/20",
          ORDER_NO: "143",
          USERNAME: "pending",
          DELIVERY_ADDRESS: "Passerelles",
          PAYMENT: "COD",
          DELIVERY_DATE: "10/16/20",
          LABEL: "Way kami",
          ACTIONS: ""
        },
        {
          DATE_ORDERED: "10/16/20",
          ORDER_NO: "143",
          USERNAME: "pending",
          DELIVERY_ADDRESS: "Passerelles",
          PAYMENT: "COD",
          DELIVERY_DATE: "10/16/20",
          LABEL: "Way kami",
          ACTIONS: ""
        }
      ]
    };
  },
 methods: {
      freeodModal(){
          this.$refs.freeorderModal.shown();
      }
  }
};
</script>
<style scoped>
.fa-eye:hover {
  cursor: pointer;
}
</style>


