<template>
  <v-footer padless>
    <v-card
      width="100%"
      class="text-center"
      color="blue-grey darken-1"
      flat
      tile
    >
      <v-card-text>
        <v-btn
          v-for="account in accounts"
          :key="account.title"
          :href="account.link"
          class="mx-4"
          icon
        >
          <v-icon
            size="36px"
            color="white"
          >
            {{ account.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text>
        <span class="white--text">
          Copyright &copy; 2022 Sou Ishihara
        </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  data () {
    return {
      accounts: [
        { title: 'twitter', icon: 'mdi-twitter', link: 'https://twitter.com/sou_0x0v' },
        { title: 'github', icon: 'mdi-github', link: 'https://github.com/stonesaw' },
        { title: 'mail', icon: 'mdi-email', link: 'mailto:mail.sou.dev@gmail.com' },
      ]
    }
  }
}
</script>