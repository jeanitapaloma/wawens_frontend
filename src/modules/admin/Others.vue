<template>
  <div>
    <sidebar>
      <b-container class="mt-5">
        <div>
          <p class="d-flex justify-content-between pothers">Others</p>
        </div>
        <table class="table table-white">
          <thead>
            <tr>
              <th class="thothers" scope="col">TESTIMONIALs</th>
              <th class="thothers" scope="col">PARTNERs</th>
              <th class="thothers" scope="col">FAQs</th>
            </tr>
          </thead>
        </table>
      </b-container>
    </sidebar>
  </div>
</template>
<script>
import sidebar from "../../components/frame/sidebar";
export default {
  components: {
    sidebar
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
td {
  border: 2px solid violet;
  border-collapse: collapse;
  text-align: center;
  font-weight: bold;
}
.pothers {
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  margin-top: -2%;
  font-size: 20px;
}
.table-white {
  font-size: 18px;
  text-align: center;
  color: purple;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid violet;
  
}
.thothers {
  border: 1px solid #ddd;
  padding: 8px;
  color: purple;
  width: 30%;
}
.table {
  margin-bottom: 1rem;
  color: purple;
}
.thothers:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
