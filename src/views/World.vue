<template>
  <v-row>
    <AppBar :isConnectionLost="isConnectionLost"></AppBar>
    <v-col class="pa-0">
      <v-alert
        type="error"
        v-if="isConnectionLost"
        min-width="100%"
        class="px-10"
        :prominent="true"
      >Terjadi Kesalahan Saat Pengambilan Data.</v-alert>
      <v-container>
        <WorldCumulativeData :data="worldData" :isDataLoaded="isDataLoaded"></WorldCumulativeData>
        <v-row>
          <v-col class="text-h3 mt-15 mb-5">Data Covid-19 Setiap Negara</v-col>
        </v-row>
        <WorldCountriesData :data="countriesData" :isDataLoaded="isDataLoaded"></WorldCountriesData>
        <v-row class="ma-5"></v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import WorldCumulativeData from "../components/world/WorldCumulativeData";
import covid19APIService from "../services/covid19APIService";
import WorldCountriesData from "../components/world/WorldCountriesData";
import AppBar from "../components/common/AppBar";

export default {
  name: "Indonesia",
  components: { WorldCumulativeData, WorldCountriesData, AppBar },
  data() {
    return {
      isDataLoaded: false,
      isConnectionLost: false,
      worldData: {},
      countriesData: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let res = await covid19APIService.getWorldCoronaData();
      if (res.status === 404) {
        this.isConnectionLost = true;
        return;
      }
      this.worldData = res.Global;

      this.countriesData = res.Countries;
      this.isDataLoaded = true;
    }
  }
};
</script>
