const __resolved__virtual_storySource_srcStoriesResizedirectionsStoryVue = `<script setup lang="ts">\r
import DragAndResize from '@/components/DragAndResize.vue'\r
import { ref } from 'vue'\r
const rd = ref(['l', 'r', 'u', 'd', 'ul', 'ur', 'dl', 'dr'])\r
<\/script>\r
\r
<template>\r
  <Story auto-props-disabled title="Resize Direction">\r
    <DragAndResize id="main" :width="200" :height="200" :resize-directions="rd">\r
      I can move and resize\r
    </DragAndResize>\r
    <template #controls>\r
      <HstCheckboxList\r
        v-model="rd"\r
        title="Directions"\r
        :options="['l', 'r', 'u', 'd', 'ul', 'ur', 'dl', 'dr'].map((d) => ({ label: d, value: d }))"\r
      />\r
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
  __resolved__virtual_storySource_srcStoriesResizedirectionsStoryVue as default
};
