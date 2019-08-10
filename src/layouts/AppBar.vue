<template>
  <v-app-bar app clipped-left dense color="teal" dark>
    <v-app-bar-nav-icon @click.stop="$store.commit('toggledrawer')"></v-app-bar-nav-icon>
    <v-toolbar-title class="align-center">
      <span class="title font-weight-light">壹品慧居</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title class="mr-5 align-center">
      <span class="title font-weight-light">您的舒适人居管家</span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>
