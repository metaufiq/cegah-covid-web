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
                      <v-row
                        class="justify-center align-center text-h4 red--text"
                      >{{data.meninggal}}</v-row>
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
import kawalCoronaService from "../services/kawalCoronaService";
export default {
  name: "IndonesiaCumulativeData",
  data() {
    return {
      isDataLoaded: false,
      isConnectionLost: false,
      data: {
        positif: 0
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await kawalCoronaService.getIndonesiaCoronaData();

      data.aktif = data.positif - data.meninggal - data.sembuh;

      this.data = data;
    }
  }
};
</script>