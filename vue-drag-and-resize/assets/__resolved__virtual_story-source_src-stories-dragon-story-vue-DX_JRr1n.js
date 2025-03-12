const __resolved__virtual_storySource_srcStoriesDragonStoryVue = `<script setup lang="ts">\r
import DragAndResize from '@/components/DragAndResize.vue'\r
import { ref } from 'vue'\r
const d = ref('#header')\r
<\/script>\r
\r
<template>\r
  <Story auto-props-disabled title="Drag On">\r
    <DragAndResize id="main" :width="200" :height="200" :drag-on="d">\r
      <div id="header">Header</div>\r
      <br />\r
      I can move and resize\r
    </DragAndResize>\r
    <template #controls>\r
      <HstText v-model="d" title="DragOn" />\r
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
#header {\r
  width: 100%;\r
  background: blue;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcStoriesDragonStoryVue as default
};
