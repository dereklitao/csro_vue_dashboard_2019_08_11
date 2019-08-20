<template>
  <v-card width="390px" height="275">
    <v-toolbar flat dark dense elevation="2" color="rgba(0, 150, 136, 0.85)" height="48">
      <v-icon dark large color>mdi-thermometer-lines</v-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span class="headline font-weight-normal">{{tempDatas[tempDatas.length-1]}}</span>
        <span class="title font-weight-normal">℃</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-flex align-center>
      <LineChartJS :width="380" :height="220" :chart-data="tempLineData" :options="options"></LineChartJS>
    </v-flex>
  </v-card>
</template>

<script>
import LineChartJS from "@/components/charts/chartJS/LineChartJS";
import { mapGetters, mapActions} from "vuex";
export default {
  components: {
    LineChartJS
  },
  computed: {
    ...mapGetters({
      tempDatas: "tempDatas",
    }),
    tempLineData() {
      return {
        datasets: [
          {
            fill: true,
            pointRadius: 1,
            pointHoverRadius: 6,
            borderWidth: 2,
            label: "室内温度",
            data: this.tempDatas,
            backgroundColor: "rgba(0, 150, 136, 0.5)",
            borderColor: "rgba(0, 150, 136, 1)",
            pointBackgroundColor: "rgba(0, 150, 136, 0.5)",
            pointBorderColor: "rgba(0, 150, 136, 1)"
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
};


</script>

<style>
.tempicon {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
