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
              <!-- このコンテナで1つの言語 -->
              <v-container>
                <v-row>
                  <v-col cos="5">
                    <v-hover v-slot="{ hover }">
                    <!-- <v-hover> -->
                      <div v-if="hover">
                        <v-icon
                          :color="language.color"
                          size="64"
                        >{{language.icon}}</v-icon>
                        <p 
                          class="text-overline"
                          :class="language.color_text"
                          style="margin: 0;"
                        >{{ language.name }}</p>
                      </div>
                      <div v-else>
                        <v-icon
                          size="64"
                        >{{language.icon}}</v-icon>
                        <p 
                          class="text-overline "
                          style="margin: 0;"
                        >{{ language.name }}</p>
                      </div>
                    </v-hover>
                  </v-col
                  >
                  <v-col cols="7">
                    <v-chip-group
                      column
                    >
                      <v-chip
                        v-for="lib in language.libs"
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

  mounted() {
    this.languages.forEach(language => {
      let ary = language.color.split(' ');
      if (ary[0]) {
        language.color_text = `${ary[0]}--text`;
      } else if (ary[1]) {
        language.color_text += ` text--${ary[1]}`;
      } else if (ary.length >= 3) {
        console.error('wrong languages.color format!');
      }
      console.log(language.color_text);
    })
  },
}
</script>
