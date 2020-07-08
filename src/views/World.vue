<template>
  <v-container>
    <AppBar></AppBar>
    <WorldCumulativeData :data="worldData" :isDataLoaded="isDataLoaded"></WorldCumulativeData>
    <v-row>
      <v-col class="text-h3 mt-15 mb-5">Data Covid-19 Setiap Negara</v-col>
    </v-row>
    <WorldCountriesData :data="countriesData" :isDataLoaded="isDataLoaded"></WorldCountriesData>
    <v-row class="ma-5"></v-row>
  </v-container>
</template>

<script>
import WorldCumulativeData from "../components/world/WorldCumulativeData";
import covid19APIService from '../services/covid19APIService'
import WorldCountriesData from "../components/world/WorldCountriesData";
import AppBar from "../components/common/AppBar";

export default {
  name: "Indonesia",
  components: { WorldCumulativeData,WorldCountriesData, AppBar },
  data() {
    return {
      isDataLoaded: false,
      isConnectionLost: false,
      worldData: {},
      countriesData: []
    };
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      let res = await covid19APIService.getWorldCoronaData();

      this.worldData = res.Global;
      
      this.countriesData = res.Countries
      this.isDataLoaded = true;
    }
  }
};
</script>
