<template>
  <v-container id="skills">
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold my-3">
          <v-icon class="display-2 pb-3">mdi-xml</v-icon>
          Skills
        </h1>

        <v-container class="mb-5">
          <v-row>
            <v-col
              cols="12" sm="6" md="6" lg="4" xl="4"
              v-for="language in languages"
              :key="language.name"
            >
              <SkillsCard
                :name="language.name"
                :icon="language.icon"
                :color="language.color"
                :libs="language.libs"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
import SkillsCard from './SkillsCard'

export default {
  name: 'Skills',

  components: {
    SkillsCard
  },

  data: () => ({
    languages: [
      {
        name: 'Ruby',
        icon: 'mdi-language-ruby',
        // color usage
        // ref https://vuetifyjs.com/ja/styles/colors/#section-30de30c630ea30a230eb30ab30e930fc
        color: 'red accent-1',
        libs: [
          'DXRuby', 'cli', 'RuboCop', 'YARD'
        ]
      },
      { 
        name: 'Python',
        color: 'blue lighten-2',
        icon: 'mdi-language-python',
        libs: [
          'Pillow', 'Discord.py', 'Pygame'
        ]
      },
      { 
        name: 'HTML/CSS',
        icon: 'mdi-language-html5',
        color: 'orange lighten-2',
        libs: [
          'HTML 5', 'CSS 3', 'Bootstrap'
        ]
      },
      {
        name: 'JavaScript',
        icon: 'mdi-language-javascript',
        color: 'amber lighten-2',
        libs: [
          'npm', 'Vue.js', 'Vuetify', 'Anime.js'
        ]
      }
    ]
  }),
}
</script>
