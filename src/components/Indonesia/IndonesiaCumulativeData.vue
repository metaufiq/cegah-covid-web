<template>
  <v-row>
    <v-col>

      <v-row class="justify-center align-center" v-if="this.isDataLoaded && !isConnectionLost">
        <v-col>
          <v-card class="mx-auto" color="white">
            <v-row align="center" justify="center">
              <v-col>
                <div class="d-flex flex-column">
                  <v-card-text class="text-h3">Total Kasus</v-card-text>
                  <v-card-text class="text-h3">{{data.positif}}</v-card-text>
                </div>
                <v-btn
                  @click="$vuetify.goTo('#provinsi-table')"
                  color="red"
                  dark
                >Lihat Data Provinsi</v-btn>
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
                        <v-row
                          class="justify-center align-center text-h4 green--text"
                        >{{data.sembuh}}</v-row>
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
      <ShimmerCumulativeData v-else></ShimmerCumulativeData>

    </v-col>
  </v-row>
</template>


<script>
import kawalCoronaIndonesiaService from "../../services/kawalCorona/IndonesiaService";
import ShimmerCumulativeData from "../common/ShimmerCumulativeData"
export default {
  name: "IndonesiaCumulativeData",
  components:{
    ShimmerCumulativeData
  },
  
  data() {
    return {
      isDataLoaded: false,
      data: {
        positif: "0",
        meninggal: "0",
        sembuh: "0",
        dirawat: "0"
      }
    };
  },
  props:["isConnectionLost", "setConnectionLost"],
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await kawalCoronaIndonesiaService.getIndonesiaCoronaData();
      if (data.status === 404) {
        this.$props.setConnectionLost()
        return
      }
      this.data = data;
      this.isDataLoaded = true
    }
  }
};
</script>