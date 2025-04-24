import { ap as defineComponent, aq as resolveComponent, ar as createBlock, at as withCtx, aw as ref, as as openBlock, au as createVNode, av as createBaseVNode } from "./vendor-D7sX2Tab.js";
import { _ as _export_sfc, D as DragAndResize } from "./DragAndResize-DhKmGSNz.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="multipe-components" tabindex="-1">Multipe Components <a class="header-anchor" href="#multipe-components" aria-hidden="true">#</a></h2>\n<p>When dragging/resizing, selected component moves to top</p>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Multiple.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const p = ref("absolute");
    const __returned__ = { p, DragAndResize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstButtonGroup = resolveComponent("HstButtonGroup");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    "auto-props-disabled": "",
    title: "Multiple Components"
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstButtonGroup, {
        modelValue: $setup.p,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.p = $event),
        title: "position",
        options: [
          {
            label: "absolute",
            value: "absolute"
          },
          {
            label: "relative",
            value: "relative"
          }
        ]
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode($setup["DragAndResize"], {
        id: "one",
        width: 300,
        height: 150
      }, {
        default: withCtx(() => _cache[1] || (_cache[1] = [
          createBaseVNode(
            "span",
            null,
            "I am div #1",
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "br",
            null,
            null,
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "span",
            null,
            "I will stay on top",
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }),
      createVNode($setup["DragAndResize"], {
        id: "two",
        width: 200,
        height: 200,
        position: $setup.p,
        left: 50,
        top: 200,
        "always-on-top": false
      }, {
        default: withCtx(() => _cache[2] || (_cache[2] = [
          createBaseVNode(
            "span",
            null,
            "I am div #2",
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "br",
            null,
            null,
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "span",
            null,
            "I won't stay on top",
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }, 8, ["position"]),
      createVNode($setup["DragAndResize"], {
        id: "three",
        width: 300,
        height: 100,
        position: $setup.p,
        left: 150,
        top: 100
      }, {
        default: withCtx(() => _cache[3] || (_cache[3] = [
          createBaseVNode(
            "span",
            null,
            "I am div #3",
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "br",
            null,
            null,
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "span",
            null,
            "I will stay on top",
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }, 8, ["position"])
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function") block0(_sfc_main);
_sfc_main.__file = "src/stories/basic/Multiple.story.vue";
const Multiple_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Development/vue-drag-and-resize/src/stories/basic/Multiple.story.vue"]]);
export {
  Multiple_story as default
};
