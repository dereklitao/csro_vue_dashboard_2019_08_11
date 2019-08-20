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
        <PMLineChart></PMLineChart>
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
import PMLineChart from "@/components/charts/PMLineChart";
import HumiLineChart from "@/components/charts/HumiLineChart";
import HchoLineChart from "@/components/charts/HchoLineChart";
import DevListTabs from "@/components/tabs/DevListTabs";
import WeatherCard from "@/components/weather/WeatherCard";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      initStates: "initStates"
    })
  },
  name: "dashboard",
  components: {
    TempLineChart,
    HumiLineChart,
    PMLineChart,
    HchoLineChart,
    DevListTabs,
    WeatherCard
  },
  beforeMount() {
    this.initStates();
  }
};
</script>

<style>
</style>

