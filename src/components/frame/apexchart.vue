<script>
import {apexchart} from 'vue-chartjs'
export default {
  extends:apexchart,
    // components: {
    //       apexchart: VueApexCharts
    //     },
             
    mounted () {
    // Overwriting base render method with actual data.
    this.renderChart ({
          
          series: [44, 55, 13, 43, 22],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          }
    })
 }
 } 
</script>
