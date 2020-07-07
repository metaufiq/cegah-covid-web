<template>
  <v-card>
    <v-card-title>
      Cegah Covid
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Cari Negara"
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
    ></v-data-table>
  </v-card>
</template>


<script>
import kawalCoronaWorldService from "../../services/kawalCorona/WorldService";

export default {
  name: "WorldCountriesData",
  data() {
    return {
      isDataLoaded: false,
      isConnectionLost: false,
      data: [],
      headers: [
        {
          text: "Negara",
          align: "start",
          sortable: false,
          value: "attributes.Country_Region",
        },
        {
          text: "Positif",
          value: "attributes.Active",
          sortable: false,
          align: "center",
          filter:false
        },
        {
          text: "Sembuh",
          value: "attributes.Recovered",
          sortable: false,
          align: "center",
          filter:false
        },
        {
          text: "Meninggal",
          value: "attributes.Deaths",
          sortable: false,
          align: "center",
          filter:false
        },
        {
          text: "Total Kasus",
          value: "attributes.Confirmed",
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
      let data = await kawalCoronaWorldService.getWorldCoronaData();

      data = data.filter(country => {
        return country.attributes;
      });

      this.data = data;
      this.isDataLoaded = true;
    }
  }
};
</script>