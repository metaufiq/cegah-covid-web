<template>
  <v-row>
    <AppBar :isConnectionLost="isConnectionLost"></AppBar>
    <v-col class="pa-0">
      <v-alert type="error" v-if="isConnectionLost" min-width="100%" class="px-10" :prominent="true">Terjadi Kesalahan Saat Pengambilan Data.</v-alert>
      <v-container>
        <IndonesiaCumulativeData
          :isConnectionLost="isConnectionLost"
          :setConnectionLost="setConnectionLost"
        ></IndonesiaCumulativeData>
        <v-row>
          <v-col class="text-h3 mt-15 mb-5">Data Covid-19 Setiap Provinsi</v-col>
        </v-row>
        <IndonesiaProvincesData :isConnectionLost="isConnectionLost" :setConnectionLost="setConnectionLost"></IndonesiaProvincesData>
        <v-row class="ma-5"></v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import IndonesiaCumulativeData from "../components/Indonesia/IndonesiaCumulativeData";
import IndonesiaProvincesData from "../components/Indonesia/IndonesiaProvincesData";
import AppBar from "../components/common/AppBar";

export default {
  name: "Indonesia",
  components: { IndonesiaCumulativeData, IndonesiaProvincesData, AppBar },
  data() {
    return {
      isConnectionLost: false
    };
  },
  methods: {
    setConnectionLost() {
      this.isConnectionLost = true;
    }
  }
};
</script>
