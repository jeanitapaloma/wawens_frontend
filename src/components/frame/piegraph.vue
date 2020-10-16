<template>
  <div class="border mt-5 bg-light shadow-sm pt-0 m-0 rounded-lg" style="width:500px">
    <h1>
       <span class="badge badge-secondary text-center  " style="padding-top: 2rem !important;" >All</span>
      <Datepicker></Datepicker>
      <Monthpicker></Monthpicker>
    </h1>
    <apexchart type="pie" :options="options" :series="series"></apexchart>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import Datepicker from "@/components/frame/Datepicker.vue";
import Monthpicker from "@/components/frame/Monthpicker.vue";
export default {
  components: {
    apexchart: VueApexCharts,
    Datepicker,
    Monthpicker
  },
  data() {
    return {
      options: {
        chart: {
          width: 100,
          type: "pie"
        },
        labels: ["Ube Halaya Cake", "Ubechi", "Ube Halaya Jars"],
        responsive: [
          {
            breakpoint: 480,
            legend: {
              position: "bottom"
            }
          }
        ]
      },
      series: [44, 55, 33]
    };
  }
};
</script>
<style scoped>
.badge{
  height:50px;
  width:166px ! important;
  background-color:darkviolet;

}

</style>