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
      :custom-sort="customSort"
      :multi-sort="false"
      class="elevation-1"
      id="provinsi-table"
      loading="!this.isDataLoaded"
    >
      <template
        #item.positiveCase="{ item }"
      >{{ (item.TotalConfirmed - item.TotalRecovered - item.TotalDeaths) | numFormat }}</template>
      <template #item.totalCase="{ item }">{{ item.TotalConfirmed | numFormat }}</template>
      <template #item.recoveredCase="{ item }">{{ item.TotalRecovered | numFormat }}</template>
      <template #item.deathsCase="{ item }">{{ item.TotalDeaths | numFormat }}</template>
    </v-data-table>
  </v-card>
</template>


<script>
export default {
  name: "WorldCountriesData",
  props: ["data", "isDataLoaded"],
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Negara",
          align: "start",

          value: "Country"
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

          align: "center",
          filter: false
        },
        {
          text: "Meninggal",
          value: "deathsCase",

          align: "center",
          filter: false
        },
        {
          text: "Total Kasus",
          value: "totalCase",

          align: "center",
          filter: false
        }
      ],
      customSort: (items, index, isDesc) => {
        
        items.sort((a, b) => {
          if (index[0] == "Country") {
            if (!isDesc[0]) {
              return a.Country < b.Country ? 1 : -1;
            } else {
              return b.Country < a.Country ? 1 : -1;
            }
          }
          if (index[0] === "positiveCase") {
            let dataA = a.TotalConfirmed - a.TotalRecovered - a.TotalDeaths;
            let dataB = b.TotalConfirmed - b.TotalRecovered - b.TotalDeaths;
            if (!isDesc[0]) {
              return dataA - dataB;
            } else {
              return dataB - dataA;
            }
          }
          if (index[0] === "totalCase") {
            if (!isDesc[0]) {
              return a.TotalConfirmed - b.TotalConfirmed;
            } else {
              return b.TotalConfirmed - a.TotalConfirmed;
            }
          }
          if (index[0] === "recoveredCase") {
            if (!isDesc[0]) {
              return a.TotalRecovered - b.TotalRecovered;
            } else {
              return b.TotalRecovered - a.TotalRecovered;
            }
          }
          if (index[0] === "deathsCase") {
            if (!isDesc[0]) {
              return a.TotalDeaths - b.TotalDeaths;
            } else {
              return b.TotalDeaths - a.TotalDeaths;
            }
          }
        });

        return items;
      }
    };
  },

  created() {
    this.fetchData();
  }
};
</script>