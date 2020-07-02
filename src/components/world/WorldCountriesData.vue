<template>

    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      class="elevation-1"
      id="provinsi-table"
    >
    </v-data-table>
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
          text: 'Provinsi',
          align: 'start',
          sortable: false,
          value: 'attributes.Country_Region',
        },
        { text: 'Positif', value: 'attributes.Active',sortable: false,align: 'center' },
        { text: 'Sembuh', value: 'attributes.Recovered',sortable: false,align: 'center' },
        { text: 'Meninggal', value: 'attributes.Deaths',sortable: false,align: 'center' },
        { text: 'Total Kasus', value: 'attributes.Confirmed',sortable: false,align: 'center' },

     ]
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await kawalCoronaWorldService.getWorldCoronaData();
      
      data = data.filter((country)=>{
          return country.attributes
      })
      
      this.data = data;
    }
  }
};
</script>