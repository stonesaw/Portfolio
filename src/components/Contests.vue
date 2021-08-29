<template>
  <v-container
    id="contests"
    class="text-center"
  >
    <v-row>
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold my-3">
          <v-icon class="display-2 pb-3">mdi-medal-outline</v-icon>
          Contests
        </h1>

      </v-col>
        <v-col
          cols="12"
          v-for="content in contents"
          :key="content.name"
          class="mb-3 "
        >
          <p class="text-md-h6" style="margin: 0;">{{ content.name }}</p>
          <p style="margin-bottom: 0.5rem;">{{ content.result }}</p>
          <p><a target="_blank" :href="content.link">{{ content.link }}</a></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contests',
  data() {
    return {
      contents: [
        {
          name: '高専プロコン 2019 都城大会',
          result: 'サブメンバーとして参加',
          link: 'https://www.procon.gr.jp/?cat=1661'
        },
        {
          name: '中高生国際Rubyプログラミングコンテスト 2020',
          result: 'ゲーム部門 最優秀賞',
          link: 'https://www.ruby-procon.net/'
        },
      ]
    }
  },
}
</script>
