import { ap as defineComponent, aq as resolveComponent, ar as createBlock, as as openBlock, at as withCtx, au as createVNode, av as createBaseVNode } from "./vendor-CflhQFKT.js";
import { _ as _export_sfc, D as DragAndResize } from "./DragAndResize-9ag_pOVF.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-component" tabindex="-1">Basic component <a class="header-anchor" href="#basic-component" aria-hidden="true">#</a></h2>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Basic.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { DragAndResize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    "auto-props-disabled": "",
    title: "Basic component"
  }, {
    default: withCtx(() => [
      createVNode($setup["DragAndResize"], { id: "main" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode(
            "span",
            null,
            "I can move and resize",
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function") block0(_sfc_main);
_sfc_main.__file = "src/stories/basic/Basic.story.vue";
const Basic_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Development/vue-drag-and-resize/src/stories/basic/Basic.story.vue"]]);
export {
  Basic_story as default
};
