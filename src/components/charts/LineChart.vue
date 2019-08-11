<template>
  <v-card width="400px" height="225">
    <LineChartJS :width="390" :height="220" :chart-data="datasetsfull"></LineChartJS>
  </v-card>
</template>

<script>
import LineChartJS from "@/components/charts/LineChartJS";
import { mapGetters } from "vuex";
import { truncate } from "fs";
export default {
  components: {
    LineChartJS
  },
  computed: {
    datasetsfull() {
      return {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            label: "客厅",
            fill: true,
            data: this.tempData[0],
            backgroundColor: ["rgba(0, 150, 136, 0.2)"],
            borderColor: ["rgba(0, 150, 136, 0.6)"],
            pointBackgroundColor: ["rgba(0, 150, 136, 0.6)"],
            pointBorderColor: ["rgba(0, 150, 136, 0.6)"],
            pointBorderWidth: 2,
            pointHitRadius: 1,
            pointHoverBackgroundColor: ["rgba(0, 150, 136, 0.6)"],
            borderWidth: 2
          },
          {
            label: "书房",
            fill: true,
            data: this.tempData[1],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 0.6)"],
            pointBorderWidth: 2,
            borderWidth: 2,
            spanGaps: true
          },
          {
            label: "卧室",
            fill: true,
            data: this.tempData[2],
            backgroundColor: ["rgba(63, 63, 191, 0.2)"],
            borderColor: ["rgba(63, 63, 191, 0.61)"],
            pointBorderWidth: 2,
            borderWidth: 2,
            spanGaps: true
          }
        ]
      };
    },
    ...mapGetters({
      tempData: "temperatureData"
    })
  }
};
</script>

<style>
</style>
