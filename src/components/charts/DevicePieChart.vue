<template>
  <v-card width="150" height="150" flat>
    <v-flex shrink>
      <PieChartJS :chart-data="chartdata" :options="options" :width="100" :height="100"></PieChartJS>
      <!-- <v-icon large color="rgba(0, 150, 136, 0.5)" class="deviceicon">mdi-home-automation</v-icon> -->
    </v-flex>
  </v-card>
</template>

<script>
import PieChartJS from "@/components/charts/chartJS/PieChartJS";
import { mapGetters } from "vuex";
export default {
  components: {
    PieChartJS
  },
  computed: {
    ...mapGetters(["deviceOnlineCount"]),
    chartdata() {
      return {
        datasets: [
          {
            backgroundColor: [
              "rgba(0, 150, 136, 0.65)",
              "rgba(255, 99, 132, 0.65)"
            ],
            data: this.deviceOnlineCount,
            borderWidth: 3,
            hoverBorderWidth: 0
          }
        ],
        labels: ["在线设备", "离线设备"]
      };
    },
    options() {
      return {
        cutoutPercentage: 0,
        legend: {
          display: false
        }
      };
    }
  }
};
</script>

<style>
.onlinelabels {
  position: absolute;
  top: 65px;
  left: 66px;
  font-size: 14px;
  font-weight: thin;
  color: grey;
}
.offlinelabels {
  position: absolute;
  top: 90px;
  left: 70px;
  font-size: 12px;
  color: rgba(255, 99, 132, 0.5);
}
.deviceicon {
  position: absolute;
  top: 58px;
  left: 58px;
}
</style>
