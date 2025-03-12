const __resolved__virtual_storySource_srcStoriesGuttersStoryVue = `<script setup lang="ts">\r
import DragAndResize from '@/components/DragAndResize.vue'\r
import { ref } from 'vue'\r
const b = ref(200),\r
  l = ref(50),\r
  r = ref(100),\r
  t = ref(150)\r
<\/script>\r
\r
<template>\r
  <Story auto-props-disabled title="Gutters">\r
    <DragAndResize\r
      id="main"\r
      :width="200"\r
      :height="200"\r
      :left-gutter="l"\r
      :right-gutter="r"\r
      :top-gutter="t"\r
      :bottom-gutter="b"\r
    >\r
      I can move and resize\r
    </DragAndResize>\r
    <template #controls>\r
      <HstNumber v-model="l" :step="1" title="Left Gutter" />\r
      <HstNumber v-model="r" :step="1" title="Right Gutter" />\r
      <HstNumber v-model="t" :step="1" title="Top Gutter" />\r
      <HstNumber v-model="b" :step="1" title="Bottom Gutter" />\r
    </template>\r
  </Story>\r
</template>\r
\r
<docs lang="md">\r
## Basic component\r
</docs>\r
\r
<style lang="scss">\r
#main {\r
  border: 2px solid red;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcStoriesGuttersStoryVue as default
};
