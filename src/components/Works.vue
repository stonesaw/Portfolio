<template>
  <v-container id="Works">
    <v-row>
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold text-center my-3">
          <v-icon class="display-2 pb-3">mdi-hexagon-multiple</v-icon>
          Works
        </h1>
      </v-col>
    </v-row>

    <v-row style="padding: 0 7% 3rem 7%">
      <v-col
        cols="12" xs="12" sm="6" md="4" lg="4"
        v-for="work in works"
        :key="work.title"
      >
        <v-hover v-slot="{ hover }">
          <v-card height="100%">
            <v-img
              :src="work.thumbnail || default_thumbnail"
              :lazy-src="work.thumbnail_lazy || default_thumbnail_lazy"
              width="100%"
              :aspect-ratio="16/9"
            ></v-img>

            <v-card-title class="pt-3">
              {{ work.title }}
            </v-card-title>
            <v-card-subtitle class="pb-0">
              {{ work.subtitle }}
            </v-card-subtitle>

            <v-chip-group column style="padding: 3px 10px">
              <v-chip
                v-for="lib in work.libs"
                :key="lib"
                outlined
                :ripple="false"
              >
                {{ lib }}
              </v-chip>
            </v-chip-group>

            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#555">
                <v-btn :href="work.github" target="_blank">
                  <v-icon left>mdi-github</v-icon>
                  github
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  name: "Works",

  data: () => ({
    default_thumbnail: require("../assets/icon-high.png"),
    default_thumbnail_lazy: require("../assets/icon.png"),
    works: [
      {
        title: "Portfolio",
        subtitle: "My portfolio, built with Vue.js and Vuetify",
        thumbnail: require("../assets/portfolio.jpg"),
        thumbnail_lazy: null,
        libs: ["Vue.js", "Vuetify"],
        github: "https://github.com/stonesaw/Portfolio",
      },
      {
        title: "Spell Out",
        subtitle: "Shooting game. Can be played with just a mouse.",
        thumbnail: require("../assets/spell-out.jpg"),
        thumbnail_lazy: null,
        libs: ["Ruby", "DXRuby", "RuboCop"],
        github: "https://github.com/stonesaw/Spell-Out",
      },
    ],
  }),
};
</script>
