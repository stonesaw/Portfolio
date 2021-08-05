<template>
  <v-app id="inspire">
    <v-navigation-drawer app
      v-model="drawer"
    >
      <v-list shaped>
        <v-list-item
          v-for="item in items"
          :key="item.title"
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

    <v-app-bar app
      color="#eee"
      flat
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Sou's Portfolio</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data () {
    return {
      drawer: false,
      items: [
        { title: 'About', icon: 'mdi-home' },
        { title: 'Skills', icon: 'mdi-xml' },
        { title: 'Works', icon: 'mdi-hexagon-multiple' },
        { title: 'Contests', icon: 'mdi-medal-outline' },
      ],
    }
  },
}
</script>
