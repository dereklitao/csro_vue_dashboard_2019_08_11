<template>
  <v-app id="inspire">
    <LeftDrawer></LeftDrawer>

    <AppBar></AppBar>

    <Content></Content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import AppBar from "@/layouts/AppBar";
import Content from "@/layouts/Content";
import Footer from "@/layouts/Footer";
import LeftDrawer from "@/layouts/LeftDrawer";

export default {
  components: {
    AppBar,
    LeftDrawer,
    Content,
    Footer
  },
  data: () => ({})
};
</script>
