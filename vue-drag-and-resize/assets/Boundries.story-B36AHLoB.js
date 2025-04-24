import { ap as defineComponent, aq as resolveComponent, ar as createBlock, at as withCtx, ay as computed, aw as ref, as as openBlock, au as createVNode, av as createBaseVNode, az as createTextVNode, ax as toDisplayString } from "./vendor-D7sX2Tab.js";
import { _ as _export_sfc, D as DragAndResize } from "./DragAndResize-DhKmGSNz.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="boundries" tabindex="-1">Boundries <a class="header-anchor" href="#boundries" aria-hidden="true">#</a></h2>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Boundries.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const b = computed(
      () => {
        var _a;
        return (_a = main.value) == null ? void 0 : _a.boundries;
      }
    ), main = ref();
    const __returned__ = { b, main, DragAndResize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    "auto-props-disabled": "",
    title: "Boundries"
  }, {
    default: withCtx(() => [
      createVNode($setup["DragAndResize"], {
        id: "parent",
        width: 500,
        height: 700
      }, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createBaseVNode(
            "span",
            null,
            "Resize me to change child's boundries",
            -1
            /* HOISTED */
          )),
          createVNode(
            $setup["DragAndResize"],
            {
              ref: "main",
              id: "main",
              width: 200,
              height: 200,
              left: 100,
              top: 200
            },
            {
              default: withCtx(() => [
                createTextVNode(
                  " Boundries " + toDisplayString($setup.b),
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
      })
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function") block0(_sfc_main);
_sfc_main.__file = "src/stories/expose/Boundries.story.vue";
const Boundries_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Development/vue-drag-and-resize/src/stories/expose/Boundries.story.vue"]]);
export {
  Boundries_story as default
};
