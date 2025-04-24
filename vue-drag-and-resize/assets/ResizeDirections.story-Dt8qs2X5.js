import { ap as defineComponent, aq as resolveComponent, ar as createBlock, at as withCtx, aw as ref, as as openBlock, au as createVNode, az as createTextVNode } from "./vendor-D7sX2Tab.js";
import { _ as _export_sfc, D as DragAndResize } from "./DragAndResize-DhKmGSNz.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="resize-directions" tabindex="-1">Resize Directions <a class="header-anchor" href="#resize-directions" aria-hidden="true">#</a></h2>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ResizeDirections.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const rd = ref(["l", "r", "u", "d", "ul", "ur", "dl", "dr"]);
    const __returned__ = { rd, DragAndResize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckboxList = resolveComponent("HstCheckboxList");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    "auto-props-disabled": "",
    title: "Resize Direction"
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstCheckboxList, {
        modelValue: $setup.rd,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.rd = $event),
        title: "Directions",
        options: ["l", "r", "u", "d", "ul", "ur", "dl", "dr"].map((d) => ({ label: d, value: d }))
      }, null, 8, ["modelValue", "options"])
    ]),
    default: withCtx(() => [
      createVNode($setup["DragAndResize"], {
        id: "main",
        width: 200,
        height: 200,
        "resize-directions": $setup.rd
      }, {
        default: withCtx(() => _cache[1] || (_cache[1] = [
          createTextVNode(" I can move and resize ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["resize-directions"])
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function") block0(_sfc_main);
_sfc_main.__file = "src/stories/props/ResizeDirections.story.vue";
const ResizeDirections_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Development/vue-drag-and-resize/src/stories/props/ResizeDirections.story.vue"]]);
export {
  ResizeDirections_story as default
};
