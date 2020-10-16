<template>
  <div class=" border bg-light shadow-sm pt-0 m-0 rounded-lg" style="width:500px; margin-top:100px;" >
       <h1><span class="badge badge-secondary text-center pt-4"> YEAR: </span>
       <span class="badge badge-secondary text-center pt-4" style="background-color:white; color:darkviolet "> 2020 </span> 
       <Datepicker></Datepicker> </h1>
       
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
</div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import Datepicker from "@/components/frame/Datepicker.vue";
export default {
  components: {
    apexchart: VueApexCharts,
    Datepicker
    
  },
  data() {
    return {
      options: {
        chart: {
          id: "ube halaya chart",
          
        },
        xaxis: {
          categories: ["COMPLETE", "CANCELLED"]
        },

        grid: {
          borderColor: "#111"
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        stroke: {
          width: 2,
          curve: "smooth"
        }
      },
      series: [
        { 
          name: "January",
          data: [139]
        },
        {
          name: "February",
          data: [59]
        },
        {
          
          name: "March",
          data: [79]
        },
        {
          name: "April",
          data: [349]
        },
        {
        
          name: "May",
          data: [409]
        },
        {
          
          name: "June",
          data: [594]
        },
        {
        name: "July",
          data: [349]
        
        },
        {
        name: "August",
          data: [359]
        },
        {
        name: "September",
          data: [259]
         },
        {
        name: "October",
          data: [459]
        },
        { 
          
        name: "Novermber",
          data: [659]
        },
        {
          
        name: "December",
          data: [539]
        },
        {
        }
      ]
    };
  }
};
// import { Bar } from 'vue-chartjs'

// export default {
//   extends: Bar,
//   mounted () {
//     // Overwriting base render method with actual data.
//     this.renderChart({
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//       datasets: [
//         {
//           label: 'Ube Halaya',
//           backgroundColor: '#f87979',
//        
  //  height:'0px',
//           data: [20, 20, 12, 39, 10, 20, 39, 20, 40, 20, 12, 11]
//         }
//       ]
//     })
//   }
// }
</script>   
<style scoped>
.badge{
  height:50px;
  width:170px;
  background-color:darkviolet;
  font-size:16px;

}
</style>


