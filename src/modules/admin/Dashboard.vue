<template>
  <div>
    <sidebar>
      <b-container>
        <div>
          <b-jumbotron bg-variant="transparent">
            <u>Welcome to UBE HALAYA CEBU-Wawen's Ube Halaya Products</u>
            <br>
          </b-jumbotron>
          <p  style="font-size:18px">Awaits you ahead are.........</p>

          <div class="container">
            <div class="row">
              <div class="col" lg-6>
              <div class="border  bg-light shadow-sm pt-0 m-0 rounded-lg" >
              <h1><span class="badge badge-secondary text-center text-danger w-50 d"   >PENDING</span>
              <span class="badge badge-secondary text-center text-success w-50">CONFIRMED</span> </h1>
              <div class="row">
                <div class="col font-weight-bolder text-center display-2">589</div>
                <div class="col font-weight-bolder text-center display-2">340</div>
              </div>
            </div>
              
            <div class="row">
              <div class="col">
                  <h2 class="text-left ml-3"><br><u> Click and settle them now! </u></h2>
                <small class="text-center mt-5"
                style="font-size:16px" 
                > <br>* The following are the total products quantity made and the pending and confirmed products delivered</small>
              <table class="table table-purple rounded-lg mt-5">
                <thead>
                  <tr>
                    <th class="thtable" scope="col">PRODUCTS</th>
                    <th class="thtable" scope="col">QUANTITY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cake</td>
                    <td>140</td>
                  </tr>
                  <tr>
                    <td> Ubechi</td>
                    <td>340</td>
                  </tr>
                  <tr>
                    <td>Ube Jars</td>
                    <td>370</td>
                  </tr>
                </tbody>
              </table>
                </div>           
            </div>
          </div>
              <div class="row">
                  <div class="col">
                  <p class="text-center font-weight-bold " style="font-size:27px; color:darkviolet; font-family: Segoe Script;">
                  <br>PRODUCT SALES SUMMARY</p>
                  <p class="text-center font-weight-bolder " style="font-size:20px;">UBE HALAYA PRODUCTS </p>
                  <bar></bar>
                  </div>
                  </div>
                  </div>
                  </div>
              </div>

          <div class="container">
            <div class="row">
              <div class="col" lg-6>
                  <p class="text-center font-weight-bold" style="font-size:20px; color:darkviolet">
                  <br>PRODUCT SOLD OUT CHART (Category)
                </p>
                <p class="text-center font-weight-bold " style="font-size:20px;">TOTAL: 120,000 </p>
                <piegraph></piegraph>
                </div>  
            
          <!-- TOP TEN BEST BUYERS -->
            <div class="col">
              <b-table-lite class="table table-purple table-bordered mt-5" thead-class="thtable text-black  "  :items="items" >
                
              </b-table-lite>                
              </div>
            </div>
          </div>
      </b-container>
    </sidebar>
  </div>
</template>
<script>
import sidebar from "@/components/frame/sidebar.vue";
import bar from "@/components/frame/Bar.vue";
import piegraph from "@/components/frame/piegraph.vue";
export default {
  components: {
    sidebar,
    bar,
    piegraph
  },
  data() {
    return {
      items: [
          {  TOP_SPECIFIC_PRODUCTs: 'Product1', TOP_SPECIFIC_BUYERs: 'Customer1 (Rica Debuayan) ' },
          {  TOP_SPECIFIC_PRODUCTs: 'Product2', TOP_SPECIFIC_BUYERs:  'Customer2 (Roselyn Amoc) '    },
          {  TOP_SPECIFIC_PRODUCTs: 'Product3', TOP_SPECIFIC_BUYERs:  'Customer3 (Merry Cris Ajoc) '   },
          {  TOP_SPECIFIC_PRODUCTs: 'Product4', TOP_SPECIFIC_BUYERs:  'Customer4 (Jeanita Paloma) '  },
          {  TOP_SPECIFIC_PRODUCTs: 'Product5', TOP_SPECIFIC_BUYERs: 'Customer5 (Rica Debuayan) ' },
          {  TOP_SPECIFIC_PRODUCTs: 'Product6', TOP_SPECIFIC_BUYERs:  'Customer6 (Roselyn Amoc) '    },
          {  TOP_SPECIFIC_PRODUCTs: 'Product7', TOP_SPECIFIC_BUYERs:  'Customer7 (Merry Cris Ajoc) '   },
          {  TOP_SPECIFIC_PRODUCTs: 'Product8', TOP_SPECIFIC_BUYERs:  'Customer8 (Jeanita Paloma) '  },
          {  TOP_SPECIFIC_PRODUCTs: 'Product9', TOP_SPECIFIC_BUYERs: 'Customer9 (Rica Debuayan) ' },
          {  TOP_SPECIFIC_PRODUCTs: 'Product10', TOP_SPECIFIC_BUYERs:  'Customer10 (Roselyn Amoc) '    },
       ],
    };
  }
};
</script>

 <style scoped>
 .badge{
  height:50px;
  /* width:249px ! important; */
  background-color:white;
  padding-top: 1.9rem !important;
  font-size:20px;
  margin-top: 0px;
}
.bv-example-row {
  font-size: 20px;
}
.jumbotron {
  color: #8028d8;
  font-size: 28px;
  font-family: Segoe Script;
  font-weight: bolder;
  text-align: center;
}
h1 {
  font-size: 14px;
}
.v {
  border-left: 6px solid darkviolet;
  height: 100px;
  position: absolute;
  left: 70%;
  margin-left: -3px;
  top: 730px;
}
table, 
th
 {
  border: 2px solid violet;
  border-collapse: collapse;
  text-align: center;
  font-weight: bold;
  font-size: 18px;

}
td{
  font-size: 14px;
  border: 2px solid violet;
  border-collapse: collapse;
  text-align: center;
  font-weight: bold;

}
.thtable{
  border: 1px solid #ddd;
  padding: 8px;
  color: white;
  background-color: darkviolet;
}

.b-table{
  font-size: 14px ;

}

</style>
