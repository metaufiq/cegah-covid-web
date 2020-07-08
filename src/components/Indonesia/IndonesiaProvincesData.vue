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
      :custom-sort="customSort"
      :multi-sort="false"
      class="elevation-1"
      id="provinsi-table"
      loading="!this.isDataLoaded"
    >
      <template
        #item.positiveCase="{ item }"
      >{{ (item.Kasus_Posi - item.Kasus_Semb - item.Kasus_Meni) | numFormat }}</template>
      <template #item.totalCase="{ item }">{{ item.Kasus_Posi | numFormat }}</template>
      <template #item.recoveredCase="{ item }">{{ item.Kasus_Semb | numFormat }}</template>
      <template #item.deathsCase="{ item }">{{ item.Kasus_Meni | numFormat }}</template>
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
          // sortable: false,
          value: "Provinsi"
        },
        {
          text: "Positif",
          value: "positiveCase",
          align: "center",
          filter: false
        },
        {
          text: "Sembuh",
          value: "recoveredCase",
          // sortable: false,
          align: "center",
          filter: false
        },
        {
          text: "Meninggal",
          value: "deathsCase",
          // sortable: false,
          align: "center",
          filter: false
        },
        {
          text: "Total Kasus",
          value: "totalCase",
          // sortable: false,
          align: "center",
          filter: false
        }
      ],
      customSort: (items, index, isDesc) => {
        items.sort((a, b) => {
          if (index[0] == "Provinsi") {
            if (!isDesc[0]) {
              return a.Provinsi < b.Provinsi ? 1: -1;
            } else {
              return b.Provinsi < a.Provinsi ? 1: -1;
            }
          }
          if (index[0] === "positiveCase") {
            let dataA = a.Kasus_Posi - a.Kasus_Semb - a.Kasus_Meni;
            let dataB = b.Kasus_Posi - b.Kasus_Semb - b.Kasus_Meni;
            if (!isDesc[0]) {
              return dataA - dataB;
            } else {
              return dataB - dataA;
            }
          }
          if (index[0] === "totalCase") {
            if (!isDesc[0]) {
              return a.Kasus_Posi - b.Kasus_Posi;
            } else {
              return b.Kasus_Posi - a.Kasus_Posi;
            }
          }
          if (index[0] === "recoveredCase") {
            if (!isDesc[0]) {
              return a.Kasus_Semb - b.Kasus_Semb;
            } else {
              return b.Kasus_Semb - a.Kasus_Semb;
            }
          }
          if (index[0] === "deathsCase") {
            if (!isDesc[0]) {
              return a.Kasus_Meni - b.Kasus_Meni;
            } else {
              return b.Kasus_Meni - a.Kasus_Meni;
            }
          }
        });

        return items;
      }
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