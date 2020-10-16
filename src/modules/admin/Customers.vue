<template>
  <div>
    <sidebar>
      <div>
        <div>
          <p
            style="color: purple;font-weight: bold;font-family: Segoe Script;font-style: italic;font-size: 20px;margin-top: 1%;"
          >Customer's Management</p>
        </div>
        <div class="container">
          <!-- <div class="row">
            <div
              class="col-1"
              style="border:1px solid violet;background-color: blueviolet;height:40px;font-size:20px;color:white;font-weight:bold;"
            >SORT</div>
            <div
              class="col-3"
              style="border:1px solid violet;background-color:violet;height:40px;font-size:20px;color:blueviolet;font-weight:bold;text-align:center"
            >
              <a
                data-toggle="dropdown"
                class="dropdown-toggle"
                aria-haspopup="true"
                aria-expanded="false"
              >Total Orders</a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item">Completed Orders</a>
                  <a class="dropdown-item">Cancelled Orders</a>
                  <a class="dropdown-item">Best Buyers</a>
                </li>
              </ul>
            </div>
            <div class="input-group-prepend">
              <input type="text" class="form-control" placeholder="Search..." >
            </div>
          </div>-->
       
        <br>
        <table
          class="table table-purple"
          style="font-size: 15px;-align: center;margin-bottom: 1rem;width: 40%;"
        >
          <thead>
            <tr>
              <th
                scope="col"
                style="padding: 8px;color: white;background-color: blueviolet;width: 10%;border: 2px solid violet;"
              >SORT</th>
              <th class="dropdown" style="background-color: violet;color:purple;">
                <a
                  data-toggle="dropdown"
                  class="dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Total Orders</a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">Completed Orders</a>
                    <a class="dropdown-item">Cancelled Orders</a>
                    <a class="dropdown-item">Best Buyers</a>
                  </li>
                </ul>
              </th>
            </tr>
          </thead>
           <!-- <b-form-input class="searchbar" placeholder="Search here..."></b-form-input> -->
        </table>
       
         </div> 
        <div>
          <b-table :items="items" :fields="fields">
            <template v-slot:cell(ACTIONS)>
              <i
                @click="customerModal"
                class="fa fa-eye"
                data-toggle="modal-lg"
                data-target="#ViewHistory"
                style="font-size:20px;"
                aria-hidden="true"
              ></i>
            </template>
          </b-table>
        </div>
      </div>
    </sidebar>
    <customer-modal ref="Customermodal"/>
  </div>
</template>
<script>
import CustomerModal from "../basic/Customer_Modal";
import sidebar from "../../components/frame/sidebar";
export default {
  components: {
    sidebar,
    CustomerModal
  },
  data() {
    return {
      fields: [
        "USERNAME",
        "TOTAL_ORDERS",
        "COMPLETED_ORDERS",
        " CANCELLED_ORDERS",
        "ACTIONS"
      ],
      items: [
        {
          USERNAME: "mingming",
          TOTAL_ORDERS: "",
          COMPLETED_ORDERS: "",
          CANCELLED_ORDERS: ""
          // ACTIONS: ""
        },
        {
          USERNAME: "mingming",
          TOTAL_ORDERS: "",
          COMPLETED_ORDERS: "",
          CANCELLED_ORDERS: ""
          // ACTIONS: ""
        }
      ]
    };
  },
  methods: {
    customerModal() {
      this.$refs.Customermodal.shown();
    }
  }
};
</script>
<style scoped>

.dropdown-toggle {
  cursor: pointer;
}
a {
  color: purple;
  text-decoration: none;
  background-color: transparent;
}
.a:hover {
  color: purple;
  text-decoration: none;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  display: none;
  width: 102%;
  font-size: 1.5rem;
  color: blueviolet;
  text-align: center;
  list-style: none;
  background-color: violet;
  margin-left: -27%;
  margin-top: 3.5%;
}
.dropdown-menu:hover {
  cursor: pointer;
  background-color: violet;
}
table,
tr,
th,
tbody {
  border: 2px solid violet;
  text-align: center;
  vertical-align: bottom;
  border-bottom: 2px solid violet;
}

.fa-eye:hover {
  cursor: pointer;
}
</style>
