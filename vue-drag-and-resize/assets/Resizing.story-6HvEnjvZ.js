import { ap as defineComponent, aq as resolveComponent, ar as createBlock, at as withCtx, aw as ref, as as openBlock, au as createVNode, av as createBaseVNode, ax as toDisplayString } from "./vendor-D7sX2Tab.js";
import { _ as _export_sfc, D as DragAndResize } from "./DragAndResize-DhKmGSNz.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="resizing" tabindex="-1">Resizing <a class="header-anchor" href="#resizing" aria-hidden="true">#</a></h2>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Resizing.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const endProduct = ref(), resizeStarted = ref(0), resizeStopped = ref(0), resizing = ref(0);
    const __returned__ = { endProduct, resizeStarted, resizeStopped, resizing, DragAndResize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    "auto-props-disabled": "",
    title: "Resizing"
  }, {
    default: withCtx(() => [
      createVNode($setup["DragAndResize"], {
        id: "main",
        width: 200,
        height: 200,
        onResizing: _cache[0] || (_cache[0] = () => {
          $setup.resizing += 1;
        }),
        onResizeStart: _cache[1] || (_cache[1] = () => $setup.resizeStarted += 1),
        onResizeEnd: _cache[2] || (_cache[2] = (ret) => {
          $setup.resizeStopped += 1, $setup.endProduct = ret;
        })
      }, {
        default: withCtx(() => [
          createBaseVNode(
            "span",
            null,
            "Resize Started: " + toDisplayString($setup.resizeStarted),
            1
            /* TEXT */
          ),
          _cache[3] || (_cache[3] = createBaseVNode(
            "br",
            null,
            null,
            -1
            /* HOISTED */
          )),
          createBaseVNode(
            "span",
            null,
            "Resizing: " + toDisplayString($setup.resizing),
            1
            /* TEXT */
          ),
          _cache[4] || (_cache[4] = createBaseVNode(
            "br",
            null,
            null,
            -1
            /* HOISTED */
          )),
          createBaseVNode(
            "span",
            null,
            "Resize Stopped: " + toDisplayString($setup.resizeStopped),
            1
            /* TEXT */
          ),
          _cache[5] || (_cache[5] = createBaseVNode(
            "br",
            null,
            null,
            -1
            /* HOISTED */
          )),
          createBaseVNode(
            "span",
            null,
            "Response: " + toDisplayString($setup.endProduct),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function") block0(_sfc_main);
_sfc_main.__file = "src/stories/events/Resizing.story.vue";
const Resizing_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Development/vue-drag-and-resize/src/stories/events/Resizing.story.vue"]]);
export {
  Resizing_story as default
};
