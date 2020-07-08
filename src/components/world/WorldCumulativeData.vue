<template>
  <v-row>
    <v-col>
      <v-row class="justify-center align-center" v-if="isDataLoaded">
        <v-col>
          <v-card class="mx-auto" color="white">
            <v-row align="center" justify="center">
              <v-col v-if="data.positif!='0'">
                <div class="d-flex flex-column">
                  <v-card-text class="text-h3">Total Kasus</v-card-text>
                  <v-card-text class="text-h3">{{data.TotalConfirmed | numFormat}}</v-card-text>
                </div>
                <v-btn @click="$vuetify.goTo('#provinsi-table')" color="red" dark>Lihat Data Negara</v-btn>
              </v-col>
              <v-col v-else>
                <div class="d-flex flex-column">
                  <v-skeleton-loader class="mx-auto mb-8" width="250" height="70" type="image"></v-skeleton-loader>

                  <v-skeleton-loader class="mx-auto mb-5" width="180" height="70" type="image"></v-skeleton-loader>
                </div>
                <v-skeleton-loader class="mx-auto mb-5" width="180" height="50" type="image"></v-skeleton-loader>
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
                        >{{(data.TotalConfirmed - data.TotalRecovered - data.TotalDeaths) | numFormat}}</v-row>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-row class="justify-center align-center">
                          <v-card-text class="text-h4">Sembuh</v-card-text>
                        </v-row>
                        <v-row
                          class="justify-center align-center text-h4 green--text"
                        >{{data.TotalRecovered | numFormat }}</v-row>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-row class="justify-center align-center">
                          <v-card-text class="text-h4">Meninggal</v-card-text>
                        </v-row>
                        <v-row
                          class="justify-center align-center text-h4 red--text"
                        >{{data.TotalDeaths | numFormat}}</v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <ShimmerCumulativeData v-else></ShimmerCumulativeData>
    </v-col>
  </v-row>
</template>


<script>
import ShimmerCumulativeData from "../common/ShimmerCumulativeData";
export default {
  name: "WorldCumulativeData",
  props: ["data", "isDataLoaded"],
  components: {
    ShimmerCumulativeData
  }
};
</script>