<template>
  <v-card width="400px" height="225">
    <v-flex shrink>
      <LineChartJS :width="380" :height="210" :chart-data="tempLineData" :options="options"></LineChartJS>
      <v-icon color="teal lighten-2" class="tempicon">mdi-thermometer-lines</v-icon>
    </v-flex>
  </v-card>
</template>

<script>
import LineChartJS from "@/components/charts/chartJS/LineChartJS";
import { mapGetters } from "vuex";
export default {
  components: {
    LineChartJS
  },
  computed: {
    ...mapGetters({
      tempDatas: "tempDatas",
      tempLabels: "tempLabels"
    }),
    tempLineData() {
      return {
        labels: this.tempLabels,
        datasets: [
          {
            fill: true,
            pointRadius: 3,
            pointHoverRadius: 6,
            lineTension: 0.3,
            label: "室内温度",
            data: this.tempDatas,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "rgba(255, 99, 132, 1)"
          }
        ]
      };
    },
    options() {
      return {
        responsive: true,
        legend: {
          display: false,
          labels: {
            fontSize: 10,
            fontStyle: "light"
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                maxTicksLimit: 10
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                maxTicksLimit: 8
              }
            }
          ]
        }
      };
    }
  }
};
</script>

<style>
.tempicon {
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: rgb(255, 255, 255);
}
</style>
