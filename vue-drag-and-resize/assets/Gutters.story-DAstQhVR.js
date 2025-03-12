import { ap as defineComponent, aq as resolveComponent, ar as createBlock, at as withCtx, aw as ref, as as openBlock, au as createVNode, av as createTextVNode } from "./vendor-BZmsE7G6.js";
import { _ as _export_sfc, D as DragAndResize } from "./DragAndResize-5cvHI1_V.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-component" tabindex="-1">Basic component <a class="header-anchor" href="#basic-component" aria-hidden="true">#</a></h2>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Gutters.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const b = ref(200), l = ref(50), r = ref(100), t = ref(150);
    const __returned__ = { b, l, r, t, DragAndResize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    "auto-props-disabled": "",
    title: "Gutters"
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstNumber, {
        modelValue: $setup.l,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.l = $event),
        step: 1,
        title: "Left Gutter"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstNumber, {
        modelValue: $setup.r,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.r = $event),
        step: 1,
        title: "Right Gutter"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstNumber, {
        modelValue: $setup.t,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.t = $event),
        step: 1,
        title: "Top Gutter"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstNumber, {
        modelValue: $setup.b,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.b = $event),
        step: 1,
        title: "Bottom Gutter"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode($setup["DragAndResize"], {
        id: "main",
        width: 200,
        height: 200,
        "left-gutter": $setup.l,
        "right-gutter": $setup.r,
        "top-gutter": $setup.t,
        "bottom-gutter": $setup.b
      }, {
        default: withCtx(() => _cache[4] || (_cache[4] = [
          createTextVNode(" I can move and resize ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["left-gutter", "right-gutter", "top-gutter", "bottom-gutter"])
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function") block0(_sfc_main);
_sfc_main.__file = "src/stories/Gutters.story.vue";
const Gutters_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Development/vue-drag-and-resize/src/stories/Gutters.story.vue"]]);
export {
  Gutters_story as default
};
