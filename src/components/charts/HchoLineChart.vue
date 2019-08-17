<template>
  <v-card width="390px" height="275">
    <v-toolbar flat dark dense elevation="2" color="rgba(54, 162, 235, 0.85)" height="48">
      <v-icon dark large color>mdi-skull-outline</v-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span class="headline font-weight-normal">{{humiDatas[humiDatas.length-1]}}</span>
        <span class="title font-weight-normal">%</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-flex>
      <LineChartJS :width="380" :height="220" :chart-data="tempLineData" :options="options"></LineChartJS>
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
      humiDatas: "humiDatas",
      humiLabels: "humiLabels"
    }),
    tempLineData() {
      return {
        labels: this.humiLabels,
        datasets: [
          {
            fill: true,
            pointRadius: 1,
            pointHoverRadius: 6,
            borderWidth: 2,
            label: "室内温度",
            data: this.humiDatas,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            pointBackgroundColor: "rgba(54, 162, 235, 1)",
            pointBorderColor: "rgba(54, 162, 235, 0.5)"
          }
        ]
      };
    },
    options() {
      return {
        legend: {
          display: false
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
                maxTicksLimit: 10,
                suggestedMin: 20,
                suggestedMax: 90
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
  right: 5px;
}
</style>
