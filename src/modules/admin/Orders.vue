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
              <th class="thtable" scope="col" @click="showComponent('pending')">PENDING</th>
              <th class="thtable" scope="col" @click="showComponent('confirmed')">CONFIRMED</th>
              <th class="thtable" scope="col" @click="showComponent('history')">HISTORY</th>
            </tr>
          </thead>
        </table>
        <PendingOrders v-show="categories[0].show"></PendingOrders>
        <ConfirmedOrders v-show="categories[1].show"></ConfirmedOrders>
        <OrderHistory v-show="categories[2].show"></OrderHistory>
      </b-container>
    </sidebar>
  </div>
</template>

<script>
import PendingOrders from "../../modules/basic/PendingOrders.vue";
import ConfirmedOrders from "../../modules/basic/ConfirmedOrders.vue";
import OrderHistory from "../../modules/basic/OrderHistory.vue";
import sidebar from "../../components/frame/sidebar";
export default {
  components: {
    sidebar,
    PendingOrders,
    ConfirmedOrders,
    OrderHistory
  },
  data: () => ({
    pending: true,
    confirmed: false,
    history: false,
    categories: [
      { name: "pending", show: true },
      { name: "confirmed", show: false },
      { name: "history", show: false }
    ]
  }),
  methods: {
    showComponent(category) {
      this.categories.forEach(component => {
        if (component.name == category) {
          component.show = true;
        } else {
          component.show = false;
        }
      });
    },
  },
};
</script>
<style scoped>
.thtable:hover {
  cursor: pointer;
  text-decoration: underline;
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
</style>
