<template>
  <v-container>
    <AppBar></AppBar>
    <WorldCumulativeData></WorldCumulativeData>
    <v-row>
      <v-col class="text-h3 mt-15 mb-5">Data Covid-19 Setiap Negara</v-col>
    </v-row>
    <WorldCountriesData></WorldCountriesData>
    <v-row class="ma-5"></v-row>
  </v-container>
</template>

<script>
import WorldCumulativeData from "../components/world/WorldCumulativeData";
import WorldCountriesData from "../components/world/WorldCountriesData";
import AppBar from '../components/common/AppBar'

export default {
  name: "Indonesia",
  components: { WorldCumulativeData, WorldCountriesData,AppBar }
};
</script>
