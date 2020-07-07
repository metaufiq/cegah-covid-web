<template>
  <v-container>
    <AppBar></AppBar>
    <IndonesiaCumulativeData></IndonesiaCumulativeData>
    <v-row>
      <v-col class="text-h3 mt-15 mb-5">Data Covid-19 Setiap Provinsi</v-col>
    </v-row>
    <IndonesiaProvincesData></IndonesiaProvincesData>
    <v-row class="ma-5"></v-row>
  </v-container>
</template>

<script>
import IndonesiaCumulativeData from "../components/Indonesia/IndonesiaCumulativeData";
import IndonesiaProvincesData from "../components/Indonesia/IndonesiaProvincesData";
import AppBar from '../components/common/AppBar'

export default {
  name: "Indonesia",
  components: { IndonesiaCumulativeData, IndonesiaProvincesData, AppBar }
};
</script>
