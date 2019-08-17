<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex shrink>
        <TempLineChart></TempLineChart>
      </v-flex>
      <v-flex shrink>
        <HumiLineChart></HumiLineChart>
      </v-flex>
      <v-flex shrink>
        <HchoLineChart></HchoLineChart>
      </v-flex>
      <v-flex shrink>
        <PMBarChart></PMBarChart>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex shrink>
        <DevListTabs></DevListTabs>
      </v-flex>
      <v-flex shrink>
        <v-card width="522px" height="680px"></v-card>
      </v-flex>
      <v-flex shrink>
        <v-card width="522px" height="680px">
          <WeatherCard></WeatherCard>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TempLineChart from "@/components/charts/TempLineChart";
import PMBarChart from "@/components/charts/PMBarChart";
import HumiLineChart from "@/components/charts/HumiLineChart";
import HchoLineChart from "@/components/charts/HchoLineChart";
import DevListTabs from "@/components/tabs/DevListTabs";
import WeatherCard from "@/components/weather/WeatherCard";

import { mapMutations } from "vuex";
export default {
  name: "dashboard",
  components: {
    TempLineChart,
    HumiLineChart,
    PMBarChart,
    HchoLineChart,
    DevListTabs,
    WeatherCard
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

