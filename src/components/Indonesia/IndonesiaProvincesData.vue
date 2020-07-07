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
        #item.positif="{ item }"
      >{{ item.attributes.Kasus_Posi - item.attributes.Kasus_Semb - item.attributes.Kasus_Meni }}</template>
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
          value: "attributes.Provinsi",
          
        },
        { text: "Positif", value: "positif", sortable: false, align: "center",filter:false },
        {
          text: "Sembuh",
          value: "attributes.Kasus_Semb",
          sortable: false,
          align: "center",
          filter:false
        },
        {
          text: "Meninggal",
          value: "attributes.Kasus_Meni",
          sortable: false,
          align: "center",
          filter:false
        },
        {
          text: "Total Kasus",
          value: "attributes.Kasus_Posi",
          sortable: false,
          align: "center",
          filter:false
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

      data = data.filter(provinsi => {
        return provinsi.attributes;
      });

      this.data = data;
      this.isDataLoaded = true;
    }
  }
};
</script>