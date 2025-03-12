const __resolved__virtual_storySource_srcStoriesPositionStoryVue = `<script setup lang="ts">\r
import DragAndResize from '@/components/DragAndResize.vue'\r
import { ref } from 'vue'\r
const p = ref('absolute')\r
<\/script>\r
\r
<template>\r
  <Story auto-props-disabled title="Position">\r
    <div id="parentDiv">\r
      <DragAndResize id="main" :width="200" :height="200" :position="p">\r
        I can move and resize\r
      </DragAndResize>\r
    </div>\r
    <template #controls>\r
      <HstButtonGroup\r
        v-model="p"\r
        title="position"\r
        :options="[\r
          {\r
            label: 'absolute',\r
            value: 'absolute',\r
          },\r
          {\r
            label: 'relative',\r
            value: 'relative',\r
          },\r
        ]"\r
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
#parentDiv {\r
  border: 2px solid blue;\r
  margin: 50px;\r
  height: 80vh;\r
}\r
</style>\r
`;
export {
  __resolved__virtual_storySource_srcStoriesPositionStoryVue as default
};
