<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo_only.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title class="mr-5">Cegah Covid</v-toolbar-title>
      </div>
        <v-tabs color="red" show-arrows="true" optional="true">
          <v-tab to="/">Beranda</v-tab>

          <v-tab to="/Indonesia">Covid-19 Indonesia</v-tab>
          <v-tab to="/Dunia">Covid-19 Dunia</v-tab>

          <!-- <v-tab>Data Dunia</v-tab> -->
        </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <div id="app">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
