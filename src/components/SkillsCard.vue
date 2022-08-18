<template>
  <v-container>
    <v-hover v-slot="{ hover }">
      <v-row>
        <v-col cols="5">
          <div v-if="hover">
            <v-icon
              :color="color"
              size="64"
            >{{ icon }}</v-icon>
            <p
              class="text-overline"
              :class="color_text"
              style="margin: 0;"
            >{{ name }}</p>
          </div>
          <div v-else>
            <v-icon
              size="64"
            >{{icon}}</v-icon>
            <p
              class="text-overline"
              style="margin: 0;"
            >{{ name }}</p>
          </div>
        </v-col>
        <v-col cols="7">
          <v-chip-group column>
            <v-chip
              v-for="lib in libs"
              :key="lib"
              outlined
              :ripple="false"
            >
              {{ lib }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-hover>
  </v-container>
</template>

<script>
export default {
  name: 'SkillsCard',

  props: {
    name: String,
    icon: String,
    color: String,
    libs: Array,
  },

  created() {
    const ary = this.color.split(' ');
    if (ary.length >= 3) {
      console.error('wrong languages.color format!');
      return;
    }
    if (ary[0]) { this.color_text = `${ary[0]}--text`; }
    if (ary[1]) { this.color_text += ` text--${ary[1]}`; }
  }
}
</script>
