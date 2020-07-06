<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto" color="white">
        <v-row align="center" justify="center">
          <v-col>
            <div class="d-flex flex-column">
              <v-skeleton-loader class="mx-auto mb-8" width="250" height="70" type="image"></v-skeleton-loader>

              <v-skeleton-loader class="mx-auto mb-5" width="180" height="70" type="image"></v-skeleton-loader>
            </div>
            <v-skeleton-loader class="mx-auto mb-5" width="180" height="50" type="image"></v-skeleton-loader>
          </v-col>
          <v-col class="justify-center align-center">
            <v-row>
              <v-col>
                <v-row>
                  <v-col>
                    <v-skeleton-loader class="mx-auto mb-8" width="200" height="50" type="image"></v-skeleton-loader>

                    <v-skeleton-loader class="mx-auto mb-5" width="140" height="50" type="image"></v-skeleton-loader>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-skeleton-loader class="mx-auto mb-8" width="200" height="50" type="image"></v-skeleton-loader>

                    <v-skeleton-loader class="mx-auto mb-5" width="140" height="50" type="image"></v-skeleton-loader>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-skeleton-loader class="mx-auto mb-8" width="200" height="50" type="image"></v-skeleton-loader>

                    <v-skeleton-loader class="mx-auto mb-5" width="140" height="50" type="image"></v-skeleton-loader>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
export default {
  name: "ShimmerIndonesiaCumulativeData",
};
</script>