<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex shrink>
        <DevicePieChart></DevicePieChart>
      </v-flex>
      <v-flex>
        <LineChart></LineChart>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DevicePieChart from "@/components/charts/DevicePieChart";
import LineChart from "@/components/charts/LineChart";
import { mapMutations } from "vuex";
export default {
  name: "dashboard",
  components: {
    DevicePieChart,
    LineChart
  },
  data() {
    return {};
  },

  created: function() {
    this.$axios.get("/history/period").then(response => {
      console.log(response);
    });
  },

  methods: {
    ...mapMutations(["toggleShowLeftDrawer", "changePieData"]),
    changeData() {
      this.toggleShowLeftDrawer();
    },
    changePie() {
      this.changePieData();
    }
  }
};
</script>

<style>
</style>

