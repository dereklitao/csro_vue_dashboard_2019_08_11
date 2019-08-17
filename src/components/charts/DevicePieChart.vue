<template>
  <v-card width="220" height="225">
    <PieChartJS :chart-data="chartdata" :options="options"></PieChartJS>
    <v-icon color="teal lighten-2" class="connetcionicon">mdi-access-point-network</v-icon>
    <p class="onlinelabels">{{deviceOnlineCount[0]}}在线</p>
    <p class="offlinelabels">{{deviceOnlineCount[1]}}离线</p>
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
              "rgba(0, 150, 136, 0.5)",
              "rgba(255, 99, 132, 0.5)"
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
        cutoutPercentage: 40,
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
  top: 88px;
  left: 85px;
  font-weight: lighter;
  color: rgba(0, 150, 136, 0.5);
}
.offlinelabels {
  position: absolute;
  top: 112px;
  left: 85px;
  font-weight: lighter;
  color: rgba(255, 99, 132, 0.5);
}
.connetcionicon {
  position: absolute;
  top: 5px;
  left: 5px;
}
</style>
