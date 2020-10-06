<template>
  <div>
    <sidebar>
      <b-container class="mt-5">
        <div>
          <p class="d-flex justify-content-between porder">Account Management</p>
        </div>
        <div>
          <b-table striped hover :items="items" :fields="fields"></b-table>
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
      fields: ["DATE", "USERNAME", "EMAIL", "TYPE", "ACTIONS"],
      items: [
        {
          DATE: "2020-09-01 05:20:36",
          USERNAME: "Admin_username",
          EMAIL: "admin_username@gmail.com",
          TYPE: "",
          ACTION: ""
        },
        {
          DATE: "2020-10-01 05:20:36",
          USERNAME: "ajoc_gwapa",
          EMAIL: "ajoc_gwapa@gmail.com",
          TYPE: "",
          ACTION: ""
        },
        {
          DATE: "2020-10-01 05:20:36",
          USERNAME: "jeanita_maot",
          EMAIL: "jeanita_maot@gmail.com",
          TYPE: "",
          ACTION: ""
        }
      ]
    };
  }
};
</script>
<style>
.p1 {
  font-size: 12px;
  font-style: italic;
  color: purple;
  font-weight: bold;
}
table,
th,
td {
  border: 2px solid violet;
  border-collapse: collapse;
  text-align: center;
  font-weight: bold;
}
.porder {
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  font-size: 20px;
  /* margin-top: 1%; */
}
.ptotal {
  color: black;
  font-weight: bold;
  font-size: 20px;
  font-family: Arial;
  font-style: normal;
  /* margin-left: 40%; */
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
.table {
  /* width: 80%; */
  margin-bottom: 1rem;
  color: purple;
}
</style>
