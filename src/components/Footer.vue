<template>
  <v-footer padless>
    <v-card width="100%" color="lime lighten-2" flat tile class="text-center">
      <v-card-text>
        <v-btn
          v-for="account in accounts"
          :key="account.title"
          :href="account.link"
          class="mx-4"
          icon
        >
          <v-icon size="36px">
            {{ account.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text>Copyright &copy; 2021 Sou Ishihara</v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  data () {
    return {
      accounts: [
        { title: 'twitter', icon: 'mdi-twitter', link: 'https://twitter.com/_sou_dev' },
        { title: 'github', icon: 'mdi-github', link: 'https://github.com/stonesaw' },
        { title: 'mail', icon: 'mdi-email', link: 'mailto:mail.sou.dev@gmail.com' },
      ]
    }
  }
}
</script>