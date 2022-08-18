<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      expand-on-hover
    >
      <v-list shaped>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="$vuetify.goTo(item.link, {duration: 500})"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="padding: 0px 0px 0px 56px;">
      <AppAbout/>
      <AppSkills/>
      <AppWorks/>
      <AppContests/>
      <AppFooter/>
    </v-main>
  </v-app>
</template>

<script>
import AppAbout from "./components/AppAbout";
import AppSkills from "./components/AppSkills";
import AppWorks from "./components/AppWorks";
import AppContests from "./components/AppContests";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",

  components: {
    AppAbout,
    AppSkills,
    AppWorks,
    AppContests,
    AppFooter
  },

  data () {
    return {
      drawer: false,
      items: [
        { title: "About", icon: "mdi-console" },
        { title: "Skills", icon: "mdi-xml" },
        { title: "Works", icon: "mdi-hexagon-multiple" },
        { title: "Contests", icon: "mdi-medal-outline" },
      ],
    }
  },

  created() {
    this.items.forEach(item => {
      item.link = `#${item.title.toLowerCase()}`;
    });
  },
}
</script>
