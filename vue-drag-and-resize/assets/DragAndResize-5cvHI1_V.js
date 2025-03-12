import { ap as defineComponent, ay as createElementBlock, az as renderSlot, ax as createBaseVNode, aA as createCommentVNode, aB as toDisplayString, aC as normalizeClass, aD as useCssVars, aw as ref, aE as computed, aF as onBeforeMount, aG as onMounted, aH as watch, aI as getCurrentInstance, as as openBlock } from "./vendor-BZmsE7G6.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DragAndResize",
  props: {
    bottomGutter: {
      default: 0,
      type: Number
    },
    dragDirections: {
      default: ["x", "y"]
    },
    draggable: {
      default: true,
      type: Boolean
    },
    dragOn: {
      default: "",
      type: String
    },
    grabWidth: {
      default: 5,
      type: Number
    },
    height: { required: true, type: Number },
    left: { default: null, type: Number },
    // maxX: {
    //   default: null,
    //   type: Number,
    // },
    // maxY: {
    //   default: null,
    //   type: Number,
    // },
    // minX: {
    //   default: null,
    //   type: Number,
    // },
    // minY: {
    //   default: null,
    //   type: Number,
    // },
    leftGutter: {
      default: 0,
      type: Number
    },
    position: {
      default: "absolute",
      type: String,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      validator(value, props) {
        return ["absolute", "relative"].includes(value);
      }
    },
    resizeable: {
      default: true,
      type: Boolean
    },
    resizeDirections: {
      default: ["l", "r", "u", "d", "ul", "ur", "dl", "dr"]
    },
    rightGutter: {
      default: 0,
      type: Number
    },
    top: { default: null, type: Number },
    topGutter: {
      default: 0,
      type: Number
    },
    width: { required: true, type: Number }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    useCssVars((_ctx) => ({
      "3f6ee2d4-cssWidth": cssWidth.value,
      "3f6ee2d4-cssHeight": cssHeight.value,
      "3f6ee2d4-cssPosition": cssPosition.value,
      "3f6ee2d4-cssLeft": cssLeft.value,
      "3f6ee2d4-cssTop": cssTop.value
    }));
    const borders = ref({ bottom: 0, left: 0, right: 0, top: 0 }), boundry = ref(), clickedAtPosition = ref({ x: 0, y: 0 }), collideBottom = computed(
      () => divPos.value.y + size.value.y > parentSize.value.y - props.bottomGutter - borders.value.bottom - parentBorders.value.bottom - borders.value.top - parentBorders.value.top
    ), collideLeft = computed(() => divPos.value.x < props.leftGutter), collideRight = computed(
      () => divPos.value.x + size.value.x > parentSize.value.x - props.rightGutter - borders.value.left - parentBorders.value.left - borders.value.right - parentBorders.value.right
    ), collideTop = computed(() => divPos.value.y < props.topGutter), collisionCheck = () => {
      var _a, _b, _c, _d;
      if (collideLeft.value) {
        divPos.value.x = ((_a = boundry.value) == null ? void 0 : _a.x.min) ?? 0;
      }
      if (collideRight.value) {
        divPos.value.x = (((_b = boundry.value) == null ? void 0 : _b.x.max) ?? 0) - size.value.x;
      }
      if (collideTop.value) {
        divPos.value.y = ((_c = boundry.value) == null ? void 0 : _c.y.min) ?? 0;
      }
      if (collideBottom.value) {
        divPos.value.y = (((_d = boundry.value) == null ? void 0 : _d.y.max) ?? 0) - size.value.y;
      }
    }, corners = computed(() => {
      return {
        bottomLeft: {
          x: divPos.value.x + parentPosition.value.x,
          y: divPos.value.y + size.value.y + parentPosition.value.y
        },
        bottomRight: {
          x: divPos.value.x + size.value.x + parentPosition.value.x,
          y: divPos.value.y + size.value.y + parentPosition.value.y
        },
        topLeft: {
          x: divPos.value.x + parentPosition.value.x,
          y: divPos.value.y + parentPosition.value.y
        },
        topRight: {
          x: divPos.value.x + size.value.x + parentPosition.value.x,
          y: divPos.value.y + parentPosition.value.y
        }
      };
    }), cssHeight = computed(() => size.value.y + "px"), cssLeft = computed(() => divPos.value.x + "px"), cssPosition = computed(() => props.position), cssTop = computed(() => divPos.value.y + "px"), cssWidth = computed(() => size.value.x + "px"), divPos = ref({ x: 0, y: 0 }), divPosWhenClicked = ref({ x: 0, y: 0 }), drag = () => {
      divPos.value = {
        x: props.dragDirections.includes("x") ? divPosWhenClicked.value.x + movedX.value : divPosWhenClicked.value.x,
        y: props.dragDirections.includes("y") ? divPosWhenClicked.value.y + movedY.value : divPosWhenClicked.value.y
      };
      collisionCheck();
    }, getParent = () => {
      var _a;
      return props.position == "relative" ? (_a = thisDiv.value) == null ? void 0 : _a.parentNode : document.documentElement;
    }, mousePosition = ref({ x: 0, y: 0 }), movedX = computed(() => mousePosition.value.x - clickedAtPosition.value.x), movedY = computed(() => mousePosition.value.y - clickedAtPosition.value.y), parentBorders = ref({ bottom: 0, left: 0, right: 0, top: 0 }), parentPosition = ref({ x: 0, y: 0 }), parentSize = ref({ x: 0, y: 0 }), props = __props, resize = () => {
      switch (resizeModeWhenClicked.value) {
        case "down":
          size.value.y += movedY.value;
          clickedAtPosition.value.y = mousePosition.value.y;
          break;
        case "downLeft":
          size.value.y += movedY.value;
          size.value.x -= movedX.value;
          divPos.value.x += movedX.value;
          clickedAtPosition.value.y = mousePosition.value.y;
          clickedAtPosition.value.x = mousePosition.value.x;
          break;
        case "downRight":
          size.value.y += movedY.value;
          size.value.x += movedX.value;
          clickedAtPosition.value.y = mousePosition.value.y;
          clickedAtPosition.value.x = mousePosition.value.x;
          break;
        case "left":
          size.value.x -= movedX.value;
          divPos.value.x += movedX.value;
          clickedAtPosition.value.x = mousePosition.value.x;
          break;
        case "right":
          size.value.x += movedX.value;
          clickedAtPosition.value.x = mousePosition.value.x;
          break;
        case "up":
          size.value.y -= movedY.value;
          divPos.value.y += movedY.value;
          clickedAtPosition.value.y = mousePosition.value.y;
          clickedAtPosition.value.x = mousePosition.value.x;
          break;
        case "upLeft":
          size.value.y -= movedY.value;
          divPos.value.y += movedY.value;
          size.value.x -= movedX.value;
          divPos.value.x += movedX.value;
          clickedAtPosition.value.y = mousePosition.value.y;
          clickedAtPosition.value.x = mousePosition.value.x;
          break;
        case "upRight":
          size.value.y -= movedY.value;
          divPos.value.y += movedY.value;
          size.value.x += movedX.value;
          clickedAtPosition.value.y = mousePosition.value.y;
          clickedAtPosition.value.x = mousePosition.value.x;
          break;
      }
    }, resizeMode = computed(() => {
      if (!props.resizeable) {
        return "";
      } else if (Math.abs(mousePosition.value.x - corners.value.topLeft.x) < props.grabWidth && Math.abs(mousePosition.value.y - corners.value.topLeft.y) < props.grabWidth && props.resizeDirections.includes("ul")) {
        return "upLeft";
      } else if (Math.abs(mousePosition.value.x - corners.value.topLeft.x) < props.grabWidth && Math.abs(mousePosition.value.y - corners.value.bottomLeft.y) < props.grabWidth && props.resizeDirections.includes("dl")) {
        return "downLeft";
      } else if (Math.abs(mousePosition.value.x - corners.value.topRight.x) < props.grabWidth && Math.abs(mousePosition.value.y - corners.value.topRight.y) < props.grabWidth && props.resizeDirections.includes("ul")) {
        return "upRight";
      } else if (Math.abs(mousePosition.value.x - corners.value.topRight.x) < props.grabWidth && Math.abs(mousePosition.value.y - corners.value.bottomRight.y) < props.grabWidth && props.resizeDirections.includes("dl")) {
        return "downRight";
      } else if (Math.abs(mousePosition.value.x - corners.value.topLeft.x) < props.grabWidth && props.resizeDirections.includes("l")) {
        return "left";
      } else if (Math.abs(mousePosition.value.x - corners.value.topRight.x) < props.grabWidth && props.resizeDirections.includes("r")) {
        return "right";
      } else if (Math.abs(mousePosition.value.y - corners.value.topRight.y) < props.grabWidth && props.resizeDirections.includes("u")) {
        return "up";
      } else if (Math.abs(mousePosition.value.y - corners.value.bottomRight.y) < props.grabWidth && props.resizeDirections.includes("d")) {
        return "down";
      } else {
        return "";
      }
    }), resizeModeWhenClicked = ref(null), selected = ref(null), setBoundries = () => {
      boundry.value = {
        x: {
          max: parentSize.value.x - props.rightGutter - borders.value.left - borders.value.right - parentBorders.value.left - parentBorders.value.right,
          min: props.leftGutter
        },
        y: {
          max: parentSize.value.y - props.bottomGutter - borders.value.top - borders.value.bottom - parentBorders.value.top - parentBorders.value.bottom,
          min: props.topGutter
        }
      };
    }, setParentInfo = () => {
      console.log("setParentInfo");
      const parent = getParent();
      const parentRect = parent.getBoundingClientRect();
      parentSize.value = {
        x: parentRect.width == 0 ? window.innerWidth : parentRect.width,
        y: parentRect.height == 0 ? window.innerHeight : parentRect.height
      };
      parentPosition.value = {
        x: parentRect.left,
        y: parentRect.top
      };
      const ps = window.getComputedStyle(getParent());
      parentBorders.value = {
        bottom: parseInt(ps.borderBottom.replace("px", "")),
        left: parseInt(ps.borderLeft.replace("px", "")),
        right: parseInt(ps.borderRight.replace("px", "")),
        top: parseInt(ps.borderTop.replace("px", ""))
      };
    }, size = ref({ x: 0, y: 0 }), thisDiv = computed(() => thisInstance == null ? void 0 : thisInstance.vnode.el), thisInstance = getCurrentInstance();
    onBeforeMount(() => {
      size.value = { x: props.width, y: props.height };
    });
    onMounted(() => {
      var _a, _b, _c, _d;
      window.addEventListener("mousemove", (event) => {
        mousePosition.value = { x: event.pageX, y: event.pageY };
        if (selected.value == "drag") {
          drag();
        } else if (selected.value == "resize") {
          resize();
        }
      });
      window.addEventListener("mouseup", () => {
        selected.value = null;
        resizeModeWhenClicked.value = null;
      });
      new ResizeObserver((entries) => {
        for (const entry of entries) {
          const width = entry.contentRect.width;
          const height = entry.contentRect.height;
          console.log("Div resized:", width, height);
          setParentInfo();
          setBoundries();
          collisionCheck();
        }
      }).observe((_a = thisDiv.value) == null ? void 0 : _a.parentNode);
      (_b = thisDiv.value) == null ? void 0 : _b.addEventListener("mousedown", (event) => {
        event.preventDefault();
        if (resizeMode.value != "") {
          if (props.resizeable) {
            selected.value = "resize";
          }
          resizeModeWhenClicked.value = resizeMode.value;
        } else {
          if (props.draggable && props.dragOn == "") {
            selected.value = "drag";
          }
        }
        clickedAtPosition.value = { x: event.pageX, y: event.pageY };
        divPosWhenClicked.value = divPos.value;
      });
      const rect = (_c = thisDiv.value) == null ? void 0 : _c.getBoundingClientRect();
      divPos.value = {
        x: props.left == null ? rect.left : props.left,
        y: props.top == null ? rect.top : props.top
      };
      setParentInfo();
      const s = window.getComputedStyle(thisDiv.value);
      borders.value = {
        bottom: parseInt(s.borderBottom.replace("px", "")),
        left: parseInt(s.borderLeft.replace("px", "")),
        right: parseInt(s.borderRight.replace("px", "")),
        top: parseInt(s.borderTop.replace("px", ""))
      };
      setBoundries();
      if (props.dragOn != "") {
        const dragItem = props.dragOn == "" ? thisDiv.value : (_d = thisDiv.value) == null ? void 0 : _d.querySelectorAll(props.dragOn);
        debugger;
        dragItem.forEach((di) => {
          di.classList.add("draggable");
          di.addEventListener("mousedown", (event) => {
            selected.value = "drag";
            event.preventDefault();
            clickedAtPosition.value = { x: event.pageX, y: event.pageY };
            divPosWhenClicked.value = divPos.value;
          });
        });
      }
    });
    watch(
      () => [
        props.leftGutter,
        props.rightGutter,
        props.topGutter,
        props.bottomGutter,
        props.position,
        props.width,
        props.height,
        props.left,
        props.top
      ],
      () => {
        setBoundries();
        collisionCheck();
      }
    );
    const __returned__ = { borders, boundry, clickedAtPosition, collideBottom, collideLeft, collideRight, collideTop, collisionCheck, corners, cssHeight, cssLeft, cssPosition, cssTop, cssWidth, divPos, divPosWhenClicked, drag, getParent, mousePosition, movedX, movedY, parentBorders, parentPosition, parentSize, props, resize, resizeMode, resizeModeWhenClicked, selected, setBoundries, setParentInfo, size, thisDiv, thisInstance };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass([
        "main",
        $setup.resizeModeWhenClicked == null ? $setup.resizeMode : $setup.resizeModeWhenClicked,
        $setup.props.draggable && $setup.props.dragOn == "" ? "draggable" : "",
        $setup.props.resizeable ? "resizable" : ""
      ])
    },
    [
      renderSlot(_ctx.$slots, "default", {}, void 0),
      createBaseVNode(
        "span",
        null,
        "div: x: " + toDisplayString($setup.divPos.x) + " - y: " + toDisplayString($setup.divPos.y),
        1
        /* TEXT */
      ),
      _cache[0] || (_cache[0] = createBaseVNode(
        "br",
        null,
        null,
        -1
        /* HOISTED */
      )),
      createCommentVNode(" <span>mousePosition: {{ mousePosition }}</span\n    ><br />\n    <span>corners: {{ corners }}</span> "),
      createCommentVNode(" <span>parentPosition: {{ parentPosition }}</span> "),
      createBaseVNode(
        "span",
        null,
        "selected: " + toDisplayString($setup.selected),
        1
        /* TEXT */
      ),
      _cache[1] || (_cache[1] = createBaseVNode(
        "br",
        null,
        null,
        -1
        /* HOISTED */
      )),
      createBaseVNode(
        "span",
        null,
        "resizeMode: " + toDisplayString($setup.resizeMode),
        1
        /* TEXT */
      )
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__file = "src/components/DragAndResize.vue";
const DragAndResize = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f6ee2d4"], ["__file", "C:/Development/vue-drag-and-resize/src/components/DragAndResize.vue"]]);
export {
  DragAndResize as D,
  _export_sfc as _
};
