<template>
  <v-app id="inspire">
    <v-navigation-drawer app
      expand-on-hover
    >
      <v-list shaped>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :href="item.link"
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

    <v-main>
      <About/>
      <HelloWorld/>
      <Skills/>
      <Works/>
      <Contests/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contests from './components/Contests';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    HelloWorld,
    About,
    Skills,
    Works,
    Contests,
    Footer
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

  created() {
    this.items.forEach(item => {
      item.link = `#${item.title}`;
    });
  },
}
</script>
