import { ap as defineComponent, aq as resolveComponent, ar as createBlock, as as openBlock, at as withCtx, au as createVNode, av as createBaseVNode, aw as toDisplayString, ax as ref } from "./vendor-DmWNUJbz.js";
import { _ as _export_sfc, D as DragAndResize } from "./DragAndResize-CvzrV0pl.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-component" tabindex="-1">Basic component <a class="header-anchor" href="#basic-component" aria-hidden="true">#</a></h2>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dragging.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const dragging = ref(0), dragStarted = ref(0), dragStopped = ref(0), endProduct = ref();
    const __returned__ = { dragging, dragStarted, dragStopped, endProduct, DragAndResize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    "auto-props-disabled": "",
    title: "Dragging"
  }, {
    default: withCtx(() => [
      createVNode($setup["DragAndResize"], {
        id: "main",
        width: 200,
        height: 200,
        onDragging: _cache[0] || (_cache[0] = () => {
          $setup.dragging += 1;
        }),
        onDragStart: _cache[1] || (_cache[1] = () => $setup.dragStarted += 1),
        onDragEnd: _cache[2] || (_cache[2] = (ret) => {
          $setup.dragStopped += 1;
          $setup.endProduct = ret;
        })
      }, {
        default: withCtx(() => [
          createBaseVNode(
            "span",
            null,
            "Drag Started: " + toDisplayString($setup.dragStarted),
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
            "Dragging: " + toDisplayString($setup.dragging),
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
            "Drag Stopped: " + toDisplayString($setup.dragStopped),
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
_sfc_main.__file = "src/stories/events/Dragging.story.vue";
const Dragging_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Development/vue-drag-and-resize/src/stories/events/Dragging.story.vue"]]);
export {
  Dragging_story as default
};
