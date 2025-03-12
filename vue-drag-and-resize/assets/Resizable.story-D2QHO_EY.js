import { ap as defineComponent, aq as resolveComponent, ar as createBlock, at as withCtx, aw as ref, as as openBlock, au as createVNode, av as createTextVNode } from "./vendor-BZmsE7G6.js";
import { _ as _export_sfc, D as DragAndResize } from "./DragAndResize-5cvHI1_V.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-component" tabindex="-1">Basic component <a class="header-anchor" href="#basic-component" aria-hidden="true">#</a></h2>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Resizable.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const r = ref(true);
    const __returned__ = { r, DragAndResize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    "auto-props-disabled": "",
    title: "Resizable"
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.r,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.r = $event),
        title: "Resizable"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode($setup["DragAndResize"], {
        id: "main",
        width: 200,
        height: 200,
        resizeable: $setup.r
      }, {
        default: withCtx(() => _cache[1] || (_cache[1] = [
          createTextVNode(" I can move and resize ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["resizeable"])
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function") block0(_sfc_main);
_sfc_main.__file = "src/stories/Resizable.story.vue";
const Resizable_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Development/vue-drag-and-resize/src/stories/Resizable.story.vue"]]);
export {
  Resizable_story as default
};
