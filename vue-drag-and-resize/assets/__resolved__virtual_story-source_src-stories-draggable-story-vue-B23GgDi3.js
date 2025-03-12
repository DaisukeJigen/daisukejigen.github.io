const __resolved__virtual_storySource_srcStoriesDraggableStoryVue = `<script setup lang="ts">\r
import DragAndResize from '@/components/DragAndResize.vue'\r
import { ref } from 'vue'\r
const d = ref(true)\r
<\/script>\r
\r
<template>\r
  <Story auto-props-disabled title="Draggable">\r
    <DragAndResize id="main" :width="200" :height="200" :draggable="d">\r
      I can move and resize\r
    </DragAndResize>\r
    <template #controls>\r
      <HstCheckbox v-model="d" title="Draggable" />\r
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
  __resolved__virtual_storySource_srcStoriesDraggableStoryVue as default
};
