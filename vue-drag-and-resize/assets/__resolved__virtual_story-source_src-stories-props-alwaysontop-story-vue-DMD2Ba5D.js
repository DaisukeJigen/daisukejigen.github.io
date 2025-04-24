const __resolved__virtual_storySource_srcStoriesPropsAlwaysontopStoryVue = `<script setup lang="ts">
import DragAndResize from '@/components/DragAndResize.vue'
import { ref } from 'vue'
const aot = ref(true)
<\/script>

<template>
  <Story auto-props-disabled title="Always On Top">
    <DragAndResize id="main" :width="200" :height="200" :always-on-top="aot">
      I can move and resize
    </DragAndResize>
    <DragAndResize id="second" :width="200" :height="200" :top="200" :left="200" :always-on-top="aot">
      Me Too
    </DragAndResize>
    <template #controls>
      <HstCheckbox v-model="aot" title="AlwaysOnTop" />
    </template>
  </Story>
</template>

<docs lang="md">
## AlwaysOnTop
Components with AlwaysOnTop set to true will be brought to top (z-index set to 99999) when interacted with.
Others with AOT will then have their z-index adjusted to keep order.
</docs>

<style lang="scss">
#main {
  border: 2px solid red;
  background-color: orange;
}
#second {
  border: 2px solid blue;
  background-color: pink;
}
</style>
`;
export {
  __resolved__virtual_storySource_srcStoriesPropsAlwaysontopStoryVue as default
};
