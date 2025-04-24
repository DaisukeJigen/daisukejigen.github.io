import { ap as defineComponent, aq as resolveComponent, ar as createBlock, at as withCtx, aw as ref, as as openBlock, au as createVNode, az as createTextVNode } from "./vendor-D7sX2Tab.js";
import { _ as _export_sfc, D as DragAndResize } from "./DragAndResize-DhKmGSNz.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="alwaysontop" tabindex="-1">AlwaysOnTop <a class="header-anchor" href="#alwaysontop" aria-hidden="true">#</a></h2>\n<p>Components with AlwaysOnTop set to true will be brought to top (z-index set to 99999) when interacted with.\nOthers with AOT will then have their z-index adjusted to keep order.</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AlwaysOnTop.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const aot = ref(true);
    const __returned__ = { aot, DragAndResize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    "auto-props-disabled": "",
    title: "Always On Top"
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.aot,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.aot = $event),
        title: "AlwaysOnTop"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode($setup["DragAndResize"], {
        id: "main",
        width: 200,
        height: 200,
        "always-on-top": $setup.aot
      }, {
        default: withCtx(() => _cache[1] || (_cache[1] = [
          createTextVNode(" I can move and resize ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["always-on-top"]),
      createVNode($setup["DragAndResize"], {
        id: "second",
        width: 200,
        height: 200,
        top: 200,
        left: 200,
        "always-on-top": $setup.aot
      }, {
        default: withCtx(() => _cache[2] || (_cache[2] = [
          createTextVNode(" Me Too ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["always-on-top"])
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function") block0(_sfc_main);
_sfc_main.__file = "src/stories/props/AlwaysOnTop.story.vue";
const AlwaysOnTop_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Development/vue-drag-and-resize/src/stories/props/AlwaysOnTop.story.vue"]]);
export {
  AlwaysOnTop_story as default
};
