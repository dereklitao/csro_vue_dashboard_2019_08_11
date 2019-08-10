<template>
  <v-navigation-drawer v-model="$store.state.drawer" app clipped>
    <v-layout column align-center>
      <v-flex shrink ma-3>
        <img width="180px" src="@/assets/image/logo-en.png" />
      </v-flex>
    </v-layout>
    <v-list two-line>
      <LeftDrawerItem icon="mdi-view-dashboard" title="Dashboard" path="/"></LeftDrawerItem>
      <LeftDrawerItem icon="mdi-home-city" title="Area & Room" path="/rooms"></LeftDrawerItem>
      <LeftDrawerItem icon="mdi-movie-outline" title="Scene" path="/scenes"></LeftDrawerItem>
      <LeftDrawerItem icon="mdi-air-conditioner" title="Air System" path="/airsystem"></LeftDrawerItem>
      <LeftDrawerItem icon="mdi-bookmark-multiple" title="Curtain" path="/curtains"></LeftDrawerItem>
      <LeftDrawerItem icon="mdi-brightness-5" title="Light" path="/lights"></LeftDrawerItem>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import LeftDrawerItem from "@/components/drawer/LeftDrawerItem";
export default {
  components: {
    LeftDrawerItem
  }
};
</script>

<style>
</style>
