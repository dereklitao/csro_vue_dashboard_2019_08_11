<template>
  <v-card width="380" height="275">
    <v-toolbar flat dark dense elevation="2" color="rgba(255, 205, 86, 0.85)" height="48">
      <v-icon dark large color mr-2>mdi-blur</v-icon>
      <v-layout row align-center justify-center ml-2 mt-0 mb-0>
        <v-flex>
          <v-toolbar-title>
            <span class="headline font-weight-normal font-color-white">{{pmDatas[0]}}</span>
            <span class="title font-weight-normal font-color-white">μg/m³</span>
          </v-toolbar-title>
        </v-flex>
        <v-flex>
          <v-toolbar-title>
            <span class="headline font-weight-normal font-color-white">{{pmDatas[1]}}</span>
            <span class="title font-weight-normal font-color-white">μg/m³</span>
          </v-toolbar-title>
        </v-flex>
        <v-flex>
          <v-toolbar-title>
            <span class="headline font-weight-normal font-color-white">{{pmDatas[2]}}</span>
            <span class="title font-weight-normal font-color-white">μg/m³</span>
          </v-toolbar-title>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-flex align-center>
      <BarChartJS :chart-data="chartdata" :options="options" :width="350" :height="205"></BarChartJS>
    </v-flex>
  </v-card>
</template>

<script>
import BarChartJS from "@/components/charts/chartJS/BarChartJS";
import { mapGetters } from "vuex";
export default {
  components: {
    BarChartJS
  },
  computed: {
    ...mapGetters(["pmDatas"]),
    chartdata() {
      return {
        labels: ["PM1.0", "PM2.5", "PM10"],
        datasets: [
          {
            data: this.pmDatas,
            backgroundColor: [
              "rgba(0, 150, 136, 0.5)",
              "rgba(255, 99, 132, 0.5)",
              "rgba(255, 205, 86, 0.5)"
            ]
          }
        ]
      };
    },
    options() {
      return {
        responsive: true,
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
                suggestedMin: 0,
                maxTicksLimit: 10
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
.pmicon {
  position: absolute;
  top: 5px;
  right: 5px;
  /* background-color: rgb(255, 255, 255); */
}
</style>
