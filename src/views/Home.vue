<template>
  <v-container>
  <AppBar></AppBar>
    <v-row class="justify-center align-center">
      <v-col>
        <v-img
          alt="Vuetify Logo"
          class="shrink"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          height="500"
          width="500"
        />
      </v-col>
      <v-col>
        <v-card class="mx-auto" color="white" max-width="400" max-height="400" elevation="0">
          <v-card-title>
            <span class="title font-weight-light">CegahCovid</span>
          </v-card-title>

          <v-card-text
            class="headline text-left"
          >Aplikasi Untuk Melihat Data Penyebaran Covid-19 di Indonesia dan di Dunia.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppBar from '../components/common/AppBar'

export default {
  name: "Home",
  components:{
    AppBar
  }
};
</script>
