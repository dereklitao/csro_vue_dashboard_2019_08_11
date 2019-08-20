<template>
  <v-card width="380" height="275">
    <v-toolbar flat dark dense elevation="2" color="rgba(255, 205, 86, 0.85)" height="48">
      <v-icon dark large color mr-2>mdi-blur</v-icon>
      <v-layout row align-center justify-center ml-2 mt-0 mb-0>
        <v-flex>
          <v-toolbar-title>
            <span class="headline font-weight-normal font-color-white">{{pm1Datas}}</span>
            <span class="title font-weight-normal font-color-white">μg/m³</span>
          </v-toolbar-title>
        </v-flex>
        <v-flex>
          <v-toolbar-title>
            <span class="headline font-weight-normal font-color-white">{{pm25Datas}}</span>
            <span class="title font-weight-normal font-color-white">μg/m³</span>
          </v-toolbar-title>
        </v-flex>
        <v-flex>
          <v-toolbar-title>
            <span class="headline font-weight-normal font-color-white">{{pm10Datas}}</span>
            <span class="title font-weight-normal font-color-white">μg/m³</span>
          </v-toolbar-title>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-flex align-center>
      <LineChartJS :chart-data="pmLineData" :options="options" :width="350" :height="205"></LineChartJS>
    </v-flex>
  </v-card>
</template>

<script>
import LineChartJS from "@/components/charts/chartJS/LineChartJS";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    LineChartJS
  },
  computed: {
    ...mapGetters({
      pm1Datas:"pm1Datas", 
      pm25Datas:"pm25Datas", 
      pm10Datas:"pm10Datas"
      }),
    pmLineData() {
      return {
        datasets: [
          {
            fill: true,
            pointRadius: 1,
            pointHoverRadius: 6,
            borderWidth: 2,
            label: "室内温度",
            data: this.pm1Datas,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBackgroundColor: "rgba(255, 99, 132, 0.5)",
            pointBorderColor: "rgba(255, 99, 132, 1)"
          }
        ]
      };
    },
  options() {
      return {
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "hour"
              }
            }
          ]
        }
      };
    },
  }
}
</script>

<style>
.pmicon {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
