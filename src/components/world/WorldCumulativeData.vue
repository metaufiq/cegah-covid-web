<template>
  <v-row class="justify-center align-center">
    <v-col>
      <v-card class="mx-auto" color="white">
        <v-row align="center" justify="center">
          <v-col>
            <div class="d-flex flex-column">
              <v-card-text class="text-h3">Total Kasus</v-card-text>
              <v-card-text class="text-h3">{{data.positif}}</v-card-text>
            </div>
            <v-btn @click="$vuetify.goTo('#provinsi-table')" color="red" dark>Lihat Data Negara</v-btn>
          </v-col>
          <v-col class="justify-center align-center">
            <v-row>
              <v-col>
                <v-row>
                  <v-col>
                    <v-row class="justify-center align-center">
                      <v-card-text class="text-h4">Positif</v-card-text>
                    </v-row>
                    <v-row
                      class="justify-center align-center text-h4 yellow--text text--darken-2"
                    >{{data.dirawat}}</v-row>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-row class="justify-center align-center">
                      <v-card-text class="text-h4">Sembuh</v-card-text>
                    </v-row>
                    <v-row class="justify-center align-center text-h4 green--text">{{data.sembuh}}</v-row>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-row class="justify-center align-center">
                      <v-card-text class="text-h4">Meninggal</v-card-text>
                    </v-row>
                    <v-row class="justify-center align-center text-h4 red--text">{{data.meninggal}}</v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
import kawalCoronaWorldService from "../../services/kawalCorona/WorldService";
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
export default {
  name: "WorldCumulativeData",
  data() {
    return {
      isDataLoaded: false,
      isConnectionLost: false,
      data: {
        positif: "_",
        meninggal: "_",
        sembuh: "_",
        dirawat: "_"
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      await Promise.all([
        this.fetchDataTotal(),
        this.fetchDataDeaths(),
        this.fetchDataRecovered()
      ]);
        console.log(parseInt(this.data.positif.replace(",", "").replace(",", "")));
        
      this.data.dirawat =
        parseInt(this.data.positif.replace(",", "").replace(",", "")) -
        (parseInt(this.data.meninggal.replace(",", "").replace(",", "")) +
          parseInt(this.data.sembuh.replace(",", "").replace(",", "")));
    },

    async fetchDataTotal() {
      let data = await kawalCoronaWorldService.getWorldCoronaDataTotal();

      this.data.positif = data.value;
    },

    async fetchDataDeaths() {
      let data = await kawalCoronaWorldService.getWorldCoronaDataDeaths();

      this.data.meninggal = data.value;
    },
    async fetchDataRecovered() {
      let data = await kawalCoronaWorldService.getWorldCoronaDataRecovered();

      this.data.sembuh = data.value;
    }
  }
};
</script>