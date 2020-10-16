<template>
  <div>
    <sidebar>
      <b-container class="mt-5">
        <div>
        <p class="d-flex justify-content-between  porder">
          Others
        </p>
      </div>
      <div>
        <b-table></b-table>
      </div>
      </b-container>
    </sidebar>
  </div>
</template>

<script>
import sidebar from "../../components/frame/sidebar";
import axios from "axios";
export default {
  components: {
    sidebar
  },
  mounted(){
    // axios.post("http://127.0.0.1:8000/api/customers/1/carts", {id:19,sub_total:1000, sub_quantity:10000
    axios.post("http://127.0.0.1:8000/api/customers/1/carts", {'quantity':"fdsjkafhdj"

    }).then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
        
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
