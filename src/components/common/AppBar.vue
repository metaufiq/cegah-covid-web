<template>
    <div>
    <v-app-bar app  color="white">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../../assets/logo_only.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title class="mr-5">Cegah Covid</v-toolbar-title>

      </div>

        <v-tabs color="red" class="hidden-sm-and-down">
          <v-tab to="/">Beranda</v-tab>

          <v-tab to="/indonesia">Covid-19 Indonesia</v-tab>
          <!-- <v-tab to="/dunia">Covid-19 Dunia</v-tab> -->
        </v-tabs>

      <v-spacer></v-spacer>        
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
        <v-navigation-drawer v-model="sidebar"  app hide-overlay  disable-resize-watcher>
            <v-list>
                <v-list-item to="/" color="red">Beranda</v-list-item>
                <v-list-item to="/indonesia" color="red">Covid-19 Indonesia</v-list-item>
                <!-- <v-list-item to="/dunia" color="red">Covid-19 Dunia</v-list-item> -->
            </v-list>
        </v-navigation-drawer>
        <v-btn icon  href="https://github.com/metaufiq/cegah-covid-web" target="_blank">
          <v-icon >mdi-github</v-icon>
        </v-btn>
    </v-app-bar>
    </div>
</template>

<script>
export default {
    name:"AppBar",
    data() {
        return {
            sidebar: false
        }
    },
}
</script>