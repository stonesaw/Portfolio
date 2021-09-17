<template>
  <v-container id="about">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :aspect-ratio="1/1"
          :src="icon_image"
          :lazy-src="icon_image_lazy"
          class="rounded-circle"
          width="500px"
          style="display: block; margin: auto;"
        />
      </v-col>

      <v-col class="mb-3">
        <h1 class="display-2 font-weight-bold mb-2">
          Sou Ishihara
        </h1>

        <p class="subheading font-weight-regular">
          学生・ゲーム開発が好き
          <br>たまに、ドット絵を描きます
        </p>
      </v-col>

      <!-- outlines -->

      <!-- 最後の要素だけ last-item クラスを付ける  -->
      <v-col
        cols="12"
        v-for="(outline, index) in outlines"
        :key="outline.title"
        :class="{ 'last-item': index == outlines.length - 1 }"
      >
        <h2 class="headline font-weight-bold mb-3">
          {{ outline.title }}
        </h2>
        <v-row justify="center">
          <p class="subheading font-weight-regular">
            <label
              v-for="item in outline.items"
              :key="item"
              class="mx-3"
            >
              {{ item }}
            </label>
          </p>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
  import isWebpSupported from './isWebpSupported'

  export default {
    name: 'About',

    computed: {
      format () {
        return isWebpSupported ? 'webp' : 'jpg'
      }
    },

    created() {
      this.icon_image = require(`@/assets/icon-high.${this.format}`);
      this.icon_image_lazy = require(`@/assets/icon.${this.format}`);
    },

    data: () => ({
      icon_image: null,
      icon_image_lazy: null,
      
      outlines: [
        { title: 'School', items: ['松江工業高等専門学校'] },
        { title: 'Editor', items: ['vscode'] },
        { title: 'Listen', items: ['millenium parade', '藤井風', 'lofi hip hop'] },
      ]
    }),
  }
</script>

<style>
  .last-item {
    margin-bottom: 3rem;
  }
</style>