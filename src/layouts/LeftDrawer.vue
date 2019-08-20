<template>
  <v-navigation-drawer :value="LeftDrawer" app clipped>
    <v-container grid-list-lg>
      <v-layout row justify-center>
        <v-flex shrink>
          <img width="180px" src="@/assets/image/logo-en.png" />
        </v-flex>
        <v-flex>
          <v-list>
            <LeftDrawerItem icon="mdi-view-dashboard" title="Dashboard" path="/"></LeftDrawerItem>
            <LeftDrawerItem icon="mdi-home-city" title="Area & Room" path="/rooms"></LeftDrawerItem>
            <LeftDrawerItem icon="mdi-movie-outline" title="Scene" path="/scenes"></LeftDrawerItem>
            <LeftDrawerItem icon="mdi-air-conditioner" title="Air System" path="/airsystem"></LeftDrawerItem>
            <LeftDrawerItem icon="mdi-bookmark-multiple" title="Curtain" path="/curtains"></LeftDrawerItem>
            <LeftDrawerItem icon="mdi-brightness-5" title="Light" path="/lights"></LeftDrawerItem>
          </v-list>
        </v-flex>
        <v-flex shrink>
          <v-card height="250px" width="250px" flat></v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import LeftDrawerItem from "@/components/drawer/LeftDrawerItem";
import { mapGetters } from "vuex";
export default {
  components: {
    LeftDrawerItem
  },
  computed: {
    ...mapGetters({
      LeftDrawer: "LeftDrawer"
    })
  }
};
</script>

<style>
</style>
