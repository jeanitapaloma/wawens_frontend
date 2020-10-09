<template>
  <div>
    <sidebar>
      <b-container class="mt-5">
        <div>
          <p class="d-flex justify-content-between porder">Account Management</p>
        </div>
        <div>
          <b-table striped hover :items="items" :fields="fields" caption-top>
            <template v-slot:cell(ACTIONS)>
              <i
                class="fa fa-eye"
                style="font-size:20px;"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              ></i>
              <i
                class="fa fa-user-times"
                style="font-size:20px;"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              ></i>
            </template>
            <template v-slot:cell(TYPE) >
              <select v-model="selected" >
                <option v-for="option in options" v-bind:key="option">{{ option.text }}
                </option>
               </select>
            </template>
          </b-table>
        </div>
      </b-container>
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
      selected: "ADMIN",
      options: [{ text: "ADMIN" }, { text: "CUSTOMER" }],
      fields: ["DATE", "USERNAME", "EMAIL", "TYPE", "ACTIONS"],
      items: [
        {
          DATE: "2020-09-01 05:20:36",
          USERNAME: "Admin_username",
          EMAIL: "admin_username@gmail.com",
          TYPE: "ADMIN",
          ACTION: ""
        },
        {
          DATE: "2020-10-01 05:20:36",
          USERNAME: "ajoc_gwapa",
          EMAIL: "ajoc_gwapa@gmail.com",
          TYPE: "CUSTOMER",
          ACTION: ""
        },
        {
          DATE: "2020-10-01 05:20:36",
          USERNAME: "jeanita_maot",
          EMAIL: "jeanita_maot@gmail.com",
          TYPE: "CUSTOMER",
          ACTION: ""
        }
      ]
    };
  }
};
</script>
<style scoped>
.p1 {
  font-size: 12px;
  font-style: italic;
  color: purple;
  font-weight: bold;
}
table,
td {
  border: 1px solid lightgray;
  border-collapse: collapse;
  font-size: 13px;
}
th {
  border: 2px solid lightgray;
  border-collapse: collapse;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: darkviolet;
}
.porder {
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  font-size: 20px;
  /* margin-top: 1%; */
}

.table-purple {
  background-color: blueviolet;
  font-size: 18px;
  text-align: center;
}
.thtable {
  border: 1px solid #ddd;
  padding: 8px;
  color: white;
}

</style>
