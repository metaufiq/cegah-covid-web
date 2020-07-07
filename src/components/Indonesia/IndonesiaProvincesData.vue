<template>
  <v-card>
    <v-card-title>
      Cegah Covid
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Cari Provinsi"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      :search="search"
      class="elevation-1"
      id="provinsi-table"
      loading="!this.isDataLoaded"
    >
      <template
        #item.kasusPositif="{ item }"
      >{{ (item.Kasus_Posi - item.Kasus_Semb - item.Kasus_Meni) | numFormat }}</template>
      <template #item.kasusTotal="{ item }">{{ item.Kasus_Posi | numFormat }}</template>
      <template #item.kasusSembuh="{ item }">{{ item.Kasus_Semb | numFormat }}</template>
      <template #item.kasusMeninggal="{ item }">{{ item.Kasus_Meni | numFormat }}</template>

    </v-data-table>
  </v-card>
</template>


<script>
import kawalCoronaIndonesiaService from "../../services/kawalCorona/IndonesiaService";

export default {
  name: "IndonesiaProvincesData",
  data() {
    return {
      search: "",
      isDataLoaded: false,
      isConnectionLost: false,
      data: [],
      headers: [
        {
          text: "Provinsi",
          align: "start",
          sortable: false,
          value: "Provinsi"
        },
        {
          text: "Positif",
          value: "kasusPositif",
          sortable: false,
          align: "center",
          filter: false
        },
        {
          text: "Sembuh",
          value: "kasusSembuh",
          sortable: false,
          align: "center",
          filter: false
        },
        {
          text: "Meninggal",
          value: "kasusMeninggal",
          sortable: false,
          align: "center",
          filter: false
        },
        {
          text: "Total Kasus",
          value: "kasusTotal",
          sortable: false,
          align: "center",
          filter: false
        }
      ]
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await kawalCoronaIndonesiaService.getIndonesiaProvincesCoronaData();

      data = data.map(provinsi => {
        return provinsi.attributes;
      });

      this.data = data;
      this.isDataLoaded = true;
    }
  }
};
</script>