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

        <v-btn text to="/Indonesia">Data Indonesia</v-btn>

        <v-btn text>Data Dunia</v-btn>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <div id="app">
        <router-view />
      </div>
    </v-content>
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
