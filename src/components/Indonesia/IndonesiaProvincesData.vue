<template>

    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      class="elevation-1"
      id="provinsi-table"
    >
    <template #item.positif="{ item }">{{ item.attributes.Kasus_Posi - item.attributes.Kasus_Semb - item.attributes.Kasus_Meni }}</template>
    </v-data-table>
</template>


<script>
import kawalCoronaIndonesiaService from "../../services/kawalCorona/IndonesiaService";

export default {
  name: "IndonesiaProvincesData",
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
          value: 'attributes.Provinsi',
        },
        { text: 'Positif', value: 'positif',sortable: false,align: 'center' },
        { text: 'Sembuh', value: 'attributes.Kasus_Semb',sortable: false,align: 'center' },
        { text: 'Meninggal', value: 'attributes.Kasus_Meni',sortable: false,align: 'center' },
        { text: 'Total Kasus', value: 'attributes.Kasus_Posi',sortable: false,align: 'center' },

     ]
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await kawalCoronaIndonesiaService.getIndonesiaProvincesCoronaData();
    
      data = data.filter((provinsi)=>{
          return provinsi.attributes
      })
      
      this.data = data;
    }
  }
};
</script>