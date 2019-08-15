<template>
  <v-card width="400px" height="225">
    <v-flex shrink>
      <LineChartJS :width="380" :height="220" :chart-data="tempLineData" :options="options"></LineChartJS>
    </v-flex>
  </v-card>
</template>

<script>
import LineChartJS from "@/components/charts/LineChartJS";
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
          display: true,
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
</style>
