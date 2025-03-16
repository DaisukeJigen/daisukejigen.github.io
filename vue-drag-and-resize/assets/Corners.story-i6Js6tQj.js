import { ap as defineComponent, aq as resolveComponent, ar as createBlock, at as withCtx, ay as computed, ax as ref, as as openBlock, au as createVNode, az as createTextVNode, aw as toDisplayString } from "./vendor-DmWNUJbz.js";
import { _ as _export_sfc, D as DragAndResize } from "./DragAndResize-CvzrV0pl.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="basic-component" tabindex="-1">Basic component <a class="header-anchor" href="#basic-component" aria-hidden="true">#</a></h2>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Corners.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const c = computed(
      () => {
        var _a;
        return (_a = main.value) == null ? void 0 : _a.corners;
      }
    ), main = ref();
    const __returned__ = { c, main, DragAndResize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    "auto-props-disabled": "",
    title: "Corners"
  }, {
    default: withCtx(() => [
      createVNode(
        $setup["DragAndResize"],
        {
          ref: "main",
          id: "main",
          width: 200,
          height: 200
        },
        {
          default: withCtx(() => [
            createTextVNode(
              " Corners " + toDisplayString($setup.c),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function") block0(_sfc_main);
_sfc_main.__file = "src/stories/expose/Corners.story.vue";
const Corners_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Development/vue-drag-and-resize/src/stories/expose/Corners.story.vue"]]);
export {
  Corners_story as default
};
