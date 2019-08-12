<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex shrink>
        <PieChart></PieChart>
      </v-flex>
      <v-flex>
        <LineChart></LineChart>
      </v-flex>
      <v-flex>
        <v-btn color="success" @click="changeData">ChangeDrawer</v-btn>
        <v-btn color="success" @click="changePie">ChangePie</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PieChart from "@/components/charts/PieChart";
import LineChart from "@/components/charts/LineChart";
import { mapMutations } from "vuex";
export default {
  name: "dashboard",
  components: {
    PieChart,
    LineChart
  },
  data() {
    return {};
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

