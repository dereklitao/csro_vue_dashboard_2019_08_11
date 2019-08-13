<template>
  <v-card width="220" height="225">
    <PieChartJS :chart-data="datasetsfull"></PieChartJS>
  </v-card>
</template>

<script>
import PieChartJS from "@/components/charts/PieChartJS";
import { mapGetters } from "vuex";
export default {
  components: {
    PieChartJS
  },
  computed: {
    datasetsfull() {
      return {
        datasets: [
          {
            backgroundColor: [
              "rgba(0, 150, 136, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ],
            data: this.deviceOnlineCount,
            borderWidth: 4
          }
        ]
        // labels: [
        //   "Online" + " " + this.deviceOnlineCount[0],
        //   "Offline" + " " + this.deviceOnlineCount[1]
        // ]
      };
    },
    ...mapGetters(["deviceOnlineCount"])
  }
};
</script>

<style>
</style>
