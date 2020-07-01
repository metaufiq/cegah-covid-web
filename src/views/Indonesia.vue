<template>
  <v-container>
  <IndonesiaCumulativeData></IndonesiaCumulativeData>
  <v-row>
    <v-col class="text-h3 mt-15 mb-5">
      Data Covid-19 Setiap Provinsi
    </v-col>
  </v-row>
  <IndonesiaProvincesData></IndonesiaProvincesData>
  <v-row class="ma-5"></v-row>
  </v-container>
</template>

<script>
import IndonesiaCumulativeData from '../components/IndonesiaCumulativeData';
import IndonesiaProvincesData from '../components/IndonesiaProvincesData';

export default {
  name: "Indonesia",
  components: {IndonesiaCumulativeData,IndonesiaProvincesData}
};
</script>
