import { b as clientSupportPlugins, h as histoireConfig } from "./mapping-CGcG2iAR.js";
import { d as defineComponent, n as ref, V as watchEffect, W as markRaw, y as createBlock, g as createCommentVNode, o as openBlock, X as mergeProps, Y as resolveDynamicComponent, A as reactive, i as isRef, e as unref } from "./vendor-BZmsE7G6.js";
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericRenderStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        try {
          const pluginModule = await clientPlugin();
          mountComponent.value = markRaw(pluginModule.RenderStory);
        } catch (e) {
          console.error(e);
          throw e;
        }
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-render-story __histoire-render-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
const STATE_SYNC = "__histoire:state-sync";
const SANDBOX_READY = "__histoire:sandbox-ready";
const EVENT_SEND = "__histoire:event";
const PREVIEW_SETTINGS_SYNC = "__histoire:preview-settings-sync";
const receivedSettings = reactive({});
function applyPreviewSettings(settings) {
  Object.assign(receivedSettings, settings);
  document.documentElement.setAttribute("dir", settings.textDirection);
  const contrastColor = getContrastColor(settings);
  document.documentElement.style.setProperty("--histoire-contrast-color", contrastColor);
  if (histoireConfig.autoApplyContrastColor) {
    document.documentElement.style.color = contrastColor;
  }
}
function getContrastColor(setting) {
  var _a;
  return ((_a = histoireConfig.backgroundPresets.find((preset) => preset.color === setting.backgroundColor)) == null ? void 0 : _a.contrastColor) ?? "unset";
}
const isObject = (val) => val !== null && typeof val === "object";
function toRawDeep(val, clean = false, seen = /* @__PURE__ */ new WeakMap()) {
  const unwrappedValue = isRef(val) ? unref(val) : val;
  if (typeof unwrappedValue === "symbol") {
    return unwrappedValue.toString();
  }
  if (!isObject(unwrappedValue)) {
    return unwrappedValue;
  }
  if (seen.has(unwrappedValue)) {
    return seen.get(unwrappedValue);
  }
  if (Array.isArray(unwrappedValue)) {
    const result = [];
    seen.set(unwrappedValue, result);
    let list = unwrappedValue.map((value) => toRawDeep(value, clean, seen));
    if (clean) {
      list = list.filter((value) => typeof value !== "function");
    }
    result.push(...list);
    return result;
  } else {
    const result = {};
    seen.set(unwrappedValue, result);
    toRawObject(unwrappedValue, result, clean, seen);
    return result;
  }
}
function toRawObject(obj, target, clean = false, seen = /* @__PURE__ */ new WeakMap()) {
  Object.keys(obj).forEach((key) => {
    if (clean && typeof obj[key] === "function") {
      return;
    }
    target[key] = toRawDeep(obj[key], clean, seen);
  });
}
export {
  EVENT_SEND as E,
  PREVIEW_SETTINGS_SYNC as P,
  SANDBOX_READY as S,
  _sfc_main as _,
  STATE_SYNC as a,
  applyPreviewSettings as b,
  getContrastColor as g,
  toRawDeep as t
};
