<template>
  <v-list-item class="tablistlightitem">
    <!-- <v-layout column shrink justify-center>
      <v-flex shrink pa-0 mt-3>
        <v-icon v-if="status" large color="yellow" class="mr-2">mdi-ceiling-light</v-icon>
        <v-icon v-else large color="grey" class="mr-2">mdi-ceiling-light</v-icon>
      </v-flex>
      <v-flex shrink pa-0 ml-1>
        <p class="body-2 grey--text ma-0 font-weight-light">light</p>
      </v-flex>
    </v-layout>-->
    <v-list-item-avatar tile width="50px" height="50px" class="tablistlightavator">
      <v-icon x-large color="yellow">mdi-lightbulb-on</v-icon>
    </v-list-item-avatar>
    <v-list-item-content class="title grey--text">客厅灯带</v-list-item-content>
    <v-spacer></v-spacer>
    <v-btn class="mx-1" dark fab color="teal" height="45px" width="45px" depressed>
      <v-icon large>mdi-power-standby</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
export default {};
</script>

<style>
.tablistlightitem {
  padding: 0px;
}
.tablistlightavator {
  margin-right: 10px !important;
}
</style>