<template>
  <v-container id="Skills">
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold my-3">
          Skills
        </h1>

        <v-container class="mb-5">
          <v-row>
            <v-col
              cols="12" sm="6" md="6" lg="4" xl="4"
              v-for="langage in languages"
              :key="langage.name"
            >
              <!-- このコンテナで1つの言語 -->
              <v-container>
                <v-row>
                  <v-col cos="5">
                    <v-icon size="64">{{langage.icon}}</v-icon>
                    <p class="text-overline" style="margin: 0;">{{ langage.name }}</p>
                  </v-col
                  >
                  <v-col cols="7">
                    <v-chip-group
                      column
                    >
                      <v-chip
                        v-for="lib in langage.libs"
                        :key="lib"
                        outlined
                        :ripple="false"
                      >
                        {{ lib }}
                      </v-chip>
                    </v-chip-group>
                  </v-col>
                </v-row>
              </v-container>
              <!-- このコンテナで1つの言語 -->

            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  name: 'Skills',

  data: () => ({
    languages: [
      {
        name: 'Ruby',
        icon: 'mdi-language-ruby',
        libs: [
          'DXRuby', 'cli', 'RuboCop', 'YARD'
        ]
      },
      { 
        name: 'Python',
        icon: 'mdi-language-python',
        libs: [
          'Pillow', 'Discord.py', 'Pygame'
        ]
      },
      { 
        name: 'HTML/CSS',
        icon: 'mdi-language-html5',
        libs: [
          'HTML 5', 'CSS 3', 'Bootstrap'
        ]
      },
      {
        name: 'JavaScript',
        icon: 'mdi-language-javascript',
        libs: [
          'npm', 'Vue.js', 'Vuetify', 'Anime.js'
        ]
      }
    ]
  })
}
</script>
