<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <PieChart :chartData="datacollection"></PieChart>
      <v-btn color="success" @click="fillData">Randomize</v-btn>
      <v-btn ml-3 color="success" @click="changeData">Change</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import PieChart from "@/components/charts/PieChart";
export default {
  components: {
    PieChart
  },
  data() {
    return {
      datacollection: null,
      labels: [2018, 2019],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [1.5, 8]
        },
        {
          label: "Data two",
          backgroundColor: "#f87979",
          data: [7, 2]
        }
      ]
    };
  },
  methods: {
    changeData() {
      this.datacollection.datasets[0].data = [2.3, 1.6, 1.9, 2.5];
      console.log("data changed");
    }
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.labels,
        datasets: this.datasets
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    changeData() {
      this.datacollection = {
        labels: this.labels,
        datasets: this.datasets
      };
    }
  }
};
</script>

<style>
</style>

