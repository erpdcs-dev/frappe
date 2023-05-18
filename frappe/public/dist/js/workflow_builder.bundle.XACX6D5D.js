frappe.dom.set_style("/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/TransitionEdge.vue?type=style&index=0 */\n.access[data-v-0c1414ff] {\n  pointer-events: all;\n  cursor: pointer;\n  position: absolute;\n  font-size: var(--text-sm);\n  padding: 2px 6px;\n  border-radius: 16px;\n  background-color: var(--fg-color);\n  border: 1px solid var(--gray-600);\n  box-shadow: var(--shadow-base);\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/StateNode.vue?type=style&index=0 */\n.node[data-v-a0c0593e] {\n  position: relative;\n  background-color: var(--fg-color);\n  font-weight: 500;\n  border-radius: var(--border-radius-full);\n  padding: 15px 25px;\n  color: var(--gray-600);\n  border: 1px solid var(--gray-600);\n  box-shadow: var(--shadow-base);\n}\n.node .node-label[data-v-a0c0593e] {\n  max-width: 110px;\n  text-align: center;\n}\n.vue-flow__node.selected .node[data-v-a0c0593e] {\n  outline: 1.5px solid var(--primary);\n  outline-offset: 2px;\n}\n.handle[data-v-a0c0593e] {\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  background-color: var(--gray-600);\n  border-radius: 50%;\n  transition: all 0.2s ease-in-out;\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/ActionNode.vue?type=style&index=0 */\n.node[data-v-2ee7d402] {\n  position: relative;\n  background-color: var(--gray-500);\n  font-weight: 500;\n  border-radius: 5px;\n  padding: 5px 10px;\n  color: var(--fg-color);\n  border: 1px solid var(--fg-color);\n  box-shadow: var(--shadow-base);\n}\n.vue-flow__node.selected .node[data-v-2ee7d402] {\n  outline: 1.5px solid var(--primary);\n  outline-offset: 2px;\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Properties.vue?type=style&index=0 */\n.title[data-v-fb74ba4f] {\n  font-size: var(--text-lg);\n  font-weight: 600;\n  padding: var(--padding-sm) var(--padding-md);\n  border-bottom: 1px solid var(--border-color);\n}\n.control-data[data-v-fb74ba4f] {\n  height: calc(100vh - 250px);\n  overflow-y: auto;\n  padding: 8px;\n}\n.control-data .field[data-v-fb74ba4f] {\n  margin: 5px;\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n.control-data .field[data-v-fb74ba4f] .form-control:disabled {\n  color: var(--disabled-text-color);\n  background-color: var(--disabled-control-bg);\n  cursor: default;\n}\n.control-data .field[data-v-fb74ba4f] .description {\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Sidebar.vue?type=style&index=0 */\n.sidebar-resizer[data-v-e852f9f4] {\n  position: absolute;\n  top: 0;\n  right: -6px;\n  width: 5px;\n  height: 100%;\n  opacity: 0;\n  background-color: var(--bg-gray);\n  transition: opacity 0.2s ease;\n  z-index: 10;\n  cursor: col-resize;\n}\n.sidebar-resizer[data-v-e852f9f4]:hover,\n.sidebar-resizer.resizing[data-v-e852f9f4] {\n  opacity: 1;\n}\n\n/* node_modules/@vue-flow/core/dist/style.css */\n.vue-flow {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 0;\n}\n.vue-flow__container {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n}\n.vue-flow__pane {\n  z-index: 1;\n}\n.vue-flow__pane.draggable {\n  cursor: grab;\n}\n.vue-flow__pane.dragging {\n  cursor: grabbing;\n}\n.vue-flow__pane.selection {\n  cursor: pointer;\n}\n.vue-flow__transformationpane {\n  transform-origin: 0 0;\n  z-index: 2;\n  pointer-events: none;\n}\n.vue-flow__viewport {\n  z-index: 4;\n}\n.vue-flow__selection {\n  z-index: 6;\n}\n.vue-flow__edge-labels {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.vue-flow__nodesselection-rect:focus,\n.vue-flow__nodesselection-rect:focus-visible {\n  outline: none;\n}\n.vue-flow .vue-flow__edges {\n  pointer-events: none;\n  overflow: visible;\n}\n.vue-flow__edge-path,\n.vue-flow__connection-path {\n  stroke: #b1b1b7;\n  stroke-width: 1;\n  fill: none;\n}\n.vue-flow__edge {\n  pointer-events: visibleStroke;\n  cursor: pointer;\n}\n.vue-flow__edge.animated path {\n  stroke-dasharray: 5;\n  animation: dashdraw 0.5s linear infinite;\n}\n.vue-flow__edge.inactive {\n  pointer-events: none;\n}\n.vue-flow__edge.selected,\n.vue-flow__edge:focus,\n.vue-flow__edge:focus-visible {\n  outline: none;\n}\n.vue-flow__edge.selected .vue-flow__edge-path,\n.vue-flow__edge:focus .vue-flow__edge-path,\n.vue-flow__edge:focus-visible .vue-flow__edge-path {\n  stroke: #555;\n}\n.vue-flow__edge-textwrapper {\n  pointer-events: all;\n}\n.vue-flow__edge-textbg {\n  fill: white;\n}\n.vue-flow__edge-text {\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.vue-flow__connection {\n  pointer-events: none;\n}\n.vue-flow__connection .animated {\n  stroke-dasharray: 5;\n  animation: dashdraw 0.5s linear infinite;\n}\n.vue-flow__connectionline {\n  z-index: 1001;\n}\n.vue-flow__nodes {\n  pointer-events: none;\n  transform-origin: 0 0;\n}\n.vue-flow__node-default,\n.vue-flow__node-input,\n.vue-flow__node-output {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #bbb;\n}\n.vue-flow__node-default.selected,\n.vue-flow__node-default:focus,\n.vue-flow__node-default:focus-visible,\n.vue-flow__node-input.selected,\n.vue-flow__node-input:focus,\n.vue-flow__node-input:focus-visible,\n.vue-flow__node-output.selected,\n.vue-flow__node-output:focus,\n.vue-flow__node-output:focus-visible {\n  outline: none;\n  border: 1px solid #555;\n}\n.vue-flow__node {\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  pointer-events: all;\n  transform-origin: 0 0;\n  box-sizing: border-box;\n  cursor: grab;\n}\n.vue-flow__node.dragging {\n  cursor: grabbing;\n}\n.vue-flow__nodesselection {\n  z-index: 3;\n  transform-origin: left top;\n  pointer-events: none;\n}\n.vue-flow__nodesselection-rect {\n  position: absolute;\n  pointer-events: all;\n  cursor: grab;\n}\n.vue-flow__nodesselection-rect.dragging {\n  cursor: grabbing;\n}\n.vue-flow__handle {\n  position: absolute;\n  pointer-events: none;\n  min-width: 5px;\n  min-height: 5px;\n}\n.vue-flow__handle.connectable {\n  pointer-events: all;\n  cursor: crosshair;\n}\n.vue-flow__handle-bottom {\n  top: auto;\n  left: 50%;\n  bottom: -4px;\n  transform: translate(-50%, 0);\n}\n.vue-flow__handle-top {\n  left: 50%;\n  top: -4px;\n  transform: translate(-50%, 0);\n}\n.vue-flow__handle-left {\n  top: 50%;\n  left: -4px;\n  transform: translate(0, -50%);\n}\n.vue-flow__handle-right {\n  right: -4px;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.vue-flow__edgeupdater {\n  cursor: move;\n  pointer-events: all;\n}\n.vue-flow__panel {\n  position: absolute;\n  z-index: 5;\n  margin: 15px;\n}\n.vue-flow__panel.top {\n  top: 0;\n}\n.vue-flow__panel.bottom {\n  bottom: 0;\n}\n.vue-flow__panel.left {\n  left: 0;\n}\n.vue-flow__panel.right {\n  right: 0;\n}\n.vue-flow__panel.center {\n  left: 50%;\n  transform: translateX(-50%);\n}\n@keyframes dashdraw {\n  from {\n    stroke-dashoffset: 10;\n  }\n}\n\n/* node_modules/@vue-flow/core/dist/theme-default.css */\n:root {\n  --vf-node-bg: #fff;\n  --vf-node-text: #222;\n  --vf-connection-path: #b1b1b7;\n  --vf-handle: #555;\n}\n.vue-flow__edge.updating .vue-flow__edge-path {\n  stroke: #777;\n}\n.vue-flow__edge-text {\n  font-size: 10px;\n}\n.vue-flow__edge-textbg {\n  fill: #fff;\n}\n.vue-flow__connection-path {\n  stroke: var(--vf-connection-path);\n}\n.vue-flow__node {\n  cursor: grab;\n}\n.vue-flow__node.selectable:focus,\n.vue-flow__node.selectable:focus-visible {\n  outline: none;\n}\n.vue-flow__node-default,\n.vue-flow__node-input,\n.vue-flow__node-output {\n  padding: 10px;\n  border-radius: 3px;\n  width: 150px;\n  font-size: 12px;\n  text-align: center;\n  border-width: 1px;\n  border-style: solid;\n  color: var(--vf-node-text);\n  background-color: var(--vf-node-bg);\n  border-color: var(--vf-node-color);\n}\n.vue-flow__node-default.selected,\n.vue-flow__node-default.selected:hover,\n.vue-flow__node-input.selected,\n.vue-flow__node-input.selected:hover,\n.vue-flow__node-output.selected,\n.vue-flow__node-output.selected:hover {\n  box-shadow: 0 0 0 0.5px var(--vf-box-shadow);\n}\n.vue-flow__node-default .vue-flow__handle,\n.vue-flow__node-input .vue-flow__handle,\n.vue-flow__node-output .vue-flow__handle {\n  background: var(--vf-handle);\n}\n.vue-flow__node-default.selectable:hover,\n.vue-flow__node-input.selectable:hover,\n.vue-flow__node-output.selectable:hover {\n  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.08);\n}\n.vue-flow__node-input {\n  --vf-node-color: var(--vf-node-color, #0041d0);\n  --vf-handle: var(--vf-node-color, #0041d0);\n  --vf-box-shadow: var(--vf-node-color, #0041d0);\n  background: var(--vf-node-bg);\n  border-color: var(--vf-node-color, #0041d0);\n}\n.vue-flow__node-input.selected,\n.vue-flow__node-input:focus,\n.vue-flow__node-input:focus-visible {\n  outline: none;\n  border: 1px solid var(--vf-node-color, #0041d0);\n}\n.vue-flow__node-default {\n  --vf-handle: var(--vf-node-color, #1a192b);\n  --vf-box-shadow: var(--vf-node-color, #1a192b);\n  background: var(--vf-node-bg);\n  border-color: var(--vf-node-color, #1a192b);\n}\n.vue-flow__node-default.selected,\n.vue-flow__node-default:focus,\n.vue-flow__node-default:focus-visible {\n  outline: none;\n  border: 1px solid var(--vf-node-color, #1a192b);\n}\n.vue-flow__node-output {\n  --vf-handle: var(--vf-node-color, #ff0072);\n  --vf-box-shadow: var(--vf-node-color, #ff0072);\n  background: var(--vf-node-bg);\n  border-color: var(--vf-node-color, #ff0072);\n}\n.vue-flow__node-output.selected,\n.vue-flow__node-output:focus,\n.vue-flow__node-output:focus-visible {\n  outline: none;\n  border: 1px solid var(--vf-node-color, #ff0072);\n}\n.vue-flow__nodesselection-rect,\n.vue-flow__selection {\n  background: rgba(0, 89, 220, 0.08);\n  border: 1px dotted rgba(0, 89, 220, 0.8);\n}\n.vue-flow__nodesselection-rect:focus,\n.vue-flow__nodesselection-rect:focus-visible,\n.vue-flow__selection:focus,\n.vue-flow__selection:focus-visible {\n  outline: none;\n}\n.vue-flow__handle {\n  width: 6px;\n  height: 6px;\n  background: var(--vf-handle);\n  border: 1px solid #fff;\n  border-radius: 100%;\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/WorkflowBuilder.vue?type=style&index=0 */\n.main[data-v-c4748aba] {\n  display: flex;\n  flex-direction: row;\n  height: calc(100vh - var(--navbar-height) - var(--page-head-height) - 65px);\n}\n.main.resizing[data-v-c4748aba] {\n  user-select: none;\n  cursor: col-resize;\n}\n.main .sidebar-container[data-v-c4748aba] {\n  position: relative;\n  height: 100%;\n  margin-right: 10px;\n  border-radius: var(--border-radius-lg);\n  border: 1px solid var(--border-color);\n  background-color: var(--fg-color);\n}\n.workflow-container[data-v-c4748aba] {\n  width: 100%;\n  height: calc(100vh - var(--navbar-height) - var(--page-head-height) - 65px);\n  border-radius: var(--border-radius-lg);\n  border: 1px solid var(--border-color);\n  background-color: var(--fg-color);\n}\n.drag-handle[data-v-c4748aba] {\n  background-color: var(--fg-color);\n  cursor: grab !important;\n}\n[data-v-c4748aba] .transition-edge {\n  stroke: var(--gray-600);\n  stroke-width: 1.5px;\n}\n[data-v-c4748aba] .selected .transition-edge {\n  stroke: var(--primary);\n  stroke-width: 2px;\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/ButtonControl.vue?type=style&index=0 */\nh4[data-v-ab7ce511] {\n  margin-bottom: 0px;\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/CheckControl.vue?type=style&index=0 */\nlabel[data-v-5fb03290],\ninput[data-v-5fb03290] {\n  margin-bottom: 0 !important;\n  cursor: pointer;\n}\nlabel .checkbox[data-v-5fb03290] {\n  display: flex;\n  align-items: center;\n}\nlabel .checkbox input[data-v-5fb03290] {\n  background-color: var(--fg-color);\n  box-shadow: none;\n  border: 1px solid var(--gray-400);\n  pointer-events: none;\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/DataControl.vue?type=style&index=0 */\n.selected-color[data-v-de81cdc3] {\n  background-color: transparent;\n  top: 32px !important;\n}\n.selected-phone[data-v-de81cdc3] {\n  top: 34px !important;\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/GeolocationControl.vue?type=style&index=0 */\n[data-v-6724c096] .clearfix {\n  display: none;\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/RatingControl.vue?type=style&index=0 */\n[data-v-3a354231] .rating {\n  --star-fill: var(--yellow-300) !important;\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SelectControl.vue?type=style&index=0 */\n.editable .select-icon[data-v-0e9440b9] {\n  top: 7px !important;\n}\n.select-input[data-v-0e9440b9] {\n  position: relative;\n}\n.select-input .select-icon[data-v-0e9440b9] {\n  position: absolute;\n  pointer-events: none;\n  top: 5px;\n  right: 10px;\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SignatureControl.vue?type=style&index=0 */\n.signature-field[data-v-c1582adf] {\n  border-radius: var(--border-radius);\n  height: 200px;\n  display: flex;\n  justify-content: center;\n}\n.signature-field[data-v-c1582adf]::before {\n  content: \"\";\n  background-color: var(--text-on-gray);\n  width: 70%;\n  height: 2px;\n  margin-top: 150px;\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TableControl.vue?type=style&index=0 */\n.grid-empty[data-v-9fc5e930] {\n  background-color: var(--fg-color);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  border: 1px solid var(--table-border-color);\n}\n.table-controls[data-v-9fc5e930] {\n  display: flex;\n}\n.table-controls .table-column[data-v-9fc5e930] {\n  position: relative;\n}\n.table-controls .table-column .table-field[data-v-9fc5e930] {\n  background-color: var(--fg-color);\n  border: 1px solid var(--table-border-color);\n  border-left: none;\n  padding: 8px 10px;\n  user-select: none;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.table-controls .table-column:first-child .table-field[data-v-9fc5e930] {\n  border-top-left-radius: var(--border-radius);\n  border-left: 1px solid var(--table-border-color);\n}\n.table-controls .table-column:last-child .table-field[data-v-9fc5e930] {\n  border-top-right-radius: var(--border-radius);\n}\n\n/* sfc-style:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TextEditorControl.vue?type=style&index=0 */\n[data-v-59de220a] .quill .ql-toolbar {\n  pointer-events: none;\n}\n[data-v-59de220a] .quill .ql-toolbar .ql-formats {\n  margin-right: 12px;\n}\n[data-v-59de220a] .quill .ql-container p {\n  cursor: pointer;\n}\n/*# sourceMappingURL=workflow_builder.bundle.SDEKORWN.css.map */\n");
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/@vue/shared/dist/shared.cjs.js
  var require_shared_cjs = __commonJS({
    "node_modules/@vue/shared/dist/shared.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function makeMap(str, expectsLowerCase) {
        const map = /* @__PURE__ */ Object.create(null);
        const list = str.split(",");
        for (let i = 0; i < list.length; i++) {
          map[list[i]] = true;
        }
        return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
      }
      var PatchFlagNames = {
        [1]: `TEXT`,
        [2]: `CLASS`,
        [4]: `STYLE`,
        [8]: `PROPS`,
        [16]: `FULL_PROPS`,
        [32]: `HYDRATE_EVENTS`,
        [64]: `STABLE_FRAGMENT`,
        [128]: `KEYED_FRAGMENT`,
        [256]: `UNKEYED_FRAGMENT`,
        [512]: `NEED_PATCH`,
        [1024]: `DYNAMIC_SLOTS`,
        [2048]: `DEV_ROOT_FRAGMENT`,
        [-1]: `HOISTED`,
        [-2]: `BAIL`
      };
      var slotFlagsText = {
        [1]: "STABLE",
        [2]: "DYNAMIC",
        [3]: "FORWARDED"
      };
      var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
      var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
      var range = 2;
      function generateCodeFrame(source, start = 0, end = source.length) {
        let lines = source.split(/(\r?\n)/);
        const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
        lines = lines.filter((_, idx) => idx % 2 === 0);
        let count = 0;
        const res = [];
        for (let i = 0; i < lines.length; i++) {
          count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
          if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
              if (j < 0 || j >= lines.length)
                continue;
              const line = j + 1;
              res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
              const lineLength = lines[j].length;
              const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
              if (j === i) {
                const pad = start - (count - (lineLength + newLineSeqLength));
                const length = Math.max(1, end > count ? lineLength - pad : end - start);
                res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
              } else if (j > i) {
                if (end > count) {
                  const length = Math.max(Math.min(end - count, lineLength), 1);
                  res.push(`   |  ` + "^".repeat(length));
                }
                count += lineLength + newLineSeqLength;
              }
            }
            break;
          }
        }
        return res.join("\n");
      }
      var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
      var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
      var isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
      function includeBooleanAttr(value) {
        return !!value || value === "";
      }
      var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
      var attrValidationCache = {};
      function isSSRSafeAttrName(name) {
        if (attrValidationCache.hasOwnProperty(name)) {
          return attrValidationCache[name];
        }
        const isUnsafe = unsafeAttrCharRE.test(name);
        if (isUnsafe) {
          console.error(`unsafe attribute name: ${name}`);
        }
        return attrValidationCache[name] = !isUnsafe;
      }
      var propsToAttrMap = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv"
      };
      var isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
      var isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
      var isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
      function normalizeStyle(value) {
        if (isArray(value)) {
          const res = {};
          for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = isString2(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) {
              for (const key in normalized) {
                res[key] = normalized[key];
              }
            }
          }
          return res;
        } else if (isString2(value)) {
          return value;
        } else if (isObject2(value)) {
          return value;
        }
      }
      var listDelimiterRE = /;(?![^(]*\))/g;
      var propertyDelimiterRE = /:(.+)/;
      function parseStringStyle(cssText) {
        const ret = {};
        cssText.split(listDelimiterRE).forEach((item) => {
          if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
          }
        });
        return ret;
      }
      function stringifyStyle(styles) {
        let ret = "";
        if (!styles || isString2(styles)) {
          return ret;
        }
        for (const key in styles) {
          const value = styles[key];
          const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
          if (isString2(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
            ret += `${normalizedKey}:${value};`;
          }
        }
        return ret;
      }
      function normalizeClass(value) {
        let res = "";
        if (isString2(value)) {
          res = value;
        } else if (isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
              res += normalized + " ";
            }
          }
        } else if (isObject2(value)) {
          for (const name in value) {
            if (value[name]) {
              res += name + " ";
            }
          }
        }
        return res.trim();
      }
      function normalizeProps(props) {
        if (!props)
          return null;
        let { class: klass, style } = props;
        if (klass && !isString2(klass)) {
          props.class = normalizeClass(klass);
        }
        if (style) {
          props.style = normalizeStyle(style);
        }
        return props;
      }
      var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
      var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
      var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
      var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
      var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
      var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
      var escapeRE = /["'&<>]/;
      function escapeHtml(string) {
        const str = "" + string;
        const match = escapeRE.exec(str);
        if (!match) {
          return str;
        }
        let html = "";
        let escaped;
        let index;
        let lastIndex = 0;
        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              escaped = "&quot;";
              break;
            case 38:
              escaped = "&amp;";
              break;
            case 39:
              escaped = "&#39;";
              break;
            case 60:
              escaped = "&lt;";
              break;
            case 62:
              escaped = "&gt;";
              break;
            default:
              continue;
          }
          if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
          }
          lastIndex = index + 1;
          html += escaped;
        }
        return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
      }
      var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
      function escapeHtmlComment(src) {
        return src.replace(commentStripRE, "");
      }
      function looseCompareArrays(a2, b) {
        if (a2.length !== b.length)
          return false;
        let equal = true;
        for (let i = 0; equal && i < a2.length; i++) {
          equal = looseEqual(a2[i], b[i]);
        }
        return equal;
      }
      function looseEqual(a2, b) {
        if (a2 === b)
          return true;
        let aValidType = isDate(a2);
        let bValidType = isDate(b);
        if (aValidType || bValidType) {
          return aValidType && bValidType ? a2.getTime() === b.getTime() : false;
        }
        aValidType = isSymbol(a2);
        bValidType = isSymbol(b);
        if (aValidType || bValidType) {
          return a2 === b;
        }
        aValidType = isArray(a2);
        bValidType = isArray(b);
        if (aValidType || bValidType) {
          return aValidType && bValidType ? looseCompareArrays(a2, b) : false;
        }
        aValidType = isObject2(a2);
        bValidType = isObject2(b);
        if (aValidType || bValidType) {
          if (!aValidType || !bValidType) {
            return false;
          }
          const aKeysCount = Object.keys(a2).length;
          const bKeysCount = Object.keys(b).length;
          if (aKeysCount !== bKeysCount) {
            return false;
          }
          for (const key in a2) {
            const aHasKey = a2.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a2[key], b[key])) {
              return false;
            }
          }
        }
        return String(a2) === String(b);
      }
      function looseIndexOf(arr, val) {
        return arr.findIndex((item) => looseEqual(item, val));
      }
      var toDisplayString = (val) => {
        return isString2(val) ? val : val == null ? "" : isArray(val) || isObject2(val) && (val.toString === objectToString || !isFunction2(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
      };
      var replacer = (_key, val) => {
        if (val && val.__v_isRef) {
          return replacer(_key, val.value);
        } else if (isMap(val)) {
          return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
              entries[`${key} =>`] = val2;
              return entries;
            }, {})
          };
        } else if (isSet(val)) {
          return {
            [`Set(${val.size})`]: [...val.values()]
          };
        } else if (isObject2(val) && !isArray(val) && !isPlainObject2(val)) {
          return String(val);
        }
        return val;
      };
      var EMPTY_OBJ = Object.freeze({});
      var EMPTY_ARR = Object.freeze([]);
      var NOOP = () => {
      };
      var NO = () => false;
      var onRE = /^on[^a-z]/;
      var isOn = (key) => onRE.test(key);
      var isModelListener = (key) => key.startsWith("onUpdate:");
      var extend = Object.assign;
      var remove = (arr, el2) => {
        const i = arr.indexOf(el2);
        if (i > -1) {
          arr.splice(i, 1);
        }
      };
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var hasOwn2 = (val, key) => hasOwnProperty.call(val, key);
      var isArray = Array.isArray;
      var isMap = (val) => toTypeString(val) === "[object Map]";
      var isSet = (val) => toTypeString(val) === "[object Set]";
      var isDate = (val) => toTypeString(val) === "[object Date]";
      var isFunction2 = (val) => typeof val === "function";
      var isString2 = (val) => typeof val === "string";
      var isSymbol = (val) => typeof val === "symbol";
      var isObject2 = (val) => val !== null && typeof val === "object";
      var isPromise = (val) => {
        return isObject2(val) && isFunction2(val.then) && isFunction2(val.catch);
      };
      var objectToString = Object.prototype.toString;
      var toTypeString = (value) => objectToString.call(value);
      var toRawType = (value) => {
        return toTypeString(value).slice(8, -1);
      };
      var isPlainObject2 = (val) => toTypeString(val) === "[object Object]";
      var isIntegerKey = (key) => isString2(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
      var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
      var isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
      var cacheStringFunction = (fn2) => {
        const cache = /* @__PURE__ */ Object.create(null);
        return (str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn2(str));
        };
      };
      var camelizeRE = /-(\w)/g;
      var camelize = cacheStringFunction((str) => {
        return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
      });
      var hyphenateRE = /\B([A-Z])/g;
      var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
      var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
      var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
      var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
      var invokeArrayFns = (fns, arg) => {
        for (let i = 0; i < fns.length; i++) {
          fns[i](arg);
        }
      };
      var def = (obj, key, value) => {
        Object.defineProperty(obj, key, {
          configurable: true,
          enumerable: false,
          value
        });
      };
      var toNumber = (val) => {
        const n = parseFloat(val);
        return isNaN(n) ? val : n;
      };
      var _globalThis;
      var getGlobalThis = () => {
        return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      };
      var identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
      function genPropsAccessExp(name) {
        return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
      }
      exports.EMPTY_ARR = EMPTY_ARR;
      exports.EMPTY_OBJ = EMPTY_OBJ;
      exports.NO = NO;
      exports.NOOP = NOOP;
      exports.PatchFlagNames = PatchFlagNames;
      exports.camelize = camelize;
      exports.capitalize = capitalize;
      exports.def = def;
      exports.escapeHtml = escapeHtml;
      exports.escapeHtmlComment = escapeHtmlComment;
      exports.extend = extend;
      exports.genPropsAccessExp = genPropsAccessExp;
      exports.generateCodeFrame = generateCodeFrame;
      exports.getGlobalThis = getGlobalThis;
      exports.hasChanged = hasChanged;
      exports.hasOwn = hasOwn2;
      exports.hyphenate = hyphenate;
      exports.includeBooleanAttr = includeBooleanAttr;
      exports.invokeArrayFns = invokeArrayFns;
      exports.isArray = isArray;
      exports.isBooleanAttr = isBooleanAttr;
      exports.isBuiltInDirective = isBuiltInDirective;
      exports.isDate = isDate;
      exports.isFunction = isFunction2;
      exports.isGloballyWhitelisted = isGloballyWhitelisted;
      exports.isHTMLTag = isHTMLTag;
      exports.isIntegerKey = isIntegerKey;
      exports.isKnownHtmlAttr = isKnownHtmlAttr;
      exports.isKnownSvgAttr = isKnownSvgAttr;
      exports.isMap = isMap;
      exports.isModelListener = isModelListener;
      exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
      exports.isObject = isObject2;
      exports.isOn = isOn;
      exports.isPlainObject = isPlainObject2;
      exports.isPromise = isPromise;
      exports.isReservedProp = isReservedProp;
      exports.isSSRSafeAttrName = isSSRSafeAttrName;
      exports.isSVGTag = isSVGTag;
      exports.isSet = isSet;
      exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
      exports.isString = isString2;
      exports.isSymbol = isSymbol;
      exports.isVoidTag = isVoidTag;
      exports.looseEqual = looseEqual;
      exports.looseIndexOf = looseIndexOf;
      exports.makeMap = makeMap;
      exports.normalizeClass = normalizeClass;
      exports.normalizeProps = normalizeProps;
      exports.normalizeStyle = normalizeStyle;
      exports.objectToString = objectToString;
      exports.parseStringStyle = parseStringStyle;
      exports.propsToAttrMap = propsToAttrMap;
      exports.remove = remove;
      exports.slotFlagsText = slotFlagsText;
      exports.stringifyStyle = stringifyStyle;
      exports.toDisplayString = toDisplayString;
      exports.toHandlerKey = toHandlerKey;
      exports.toNumber = toNumber;
      exports.toRawType = toRawType;
      exports.toTypeString = toTypeString;
    }
  });

  // node_modules/@vue/shared/index.js
  var require_shared = __commonJS({
    "node_modules/@vue/shared/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_shared_cjs();
      }
    }
  });

  // node_modules/@vue/reactivity/dist/reactivity.cjs.js
  var require_reactivity_cjs = __commonJS({
    "node_modules/@vue/reactivity/dist/reactivity.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var shared = require_shared();
      function warn2(msg, ...args) {
        console.warn(`[Vue warn] ${msg}`, ...args);
      }
      var activeEffectScope;
      var EffectScope = class {
        constructor(detached = false) {
          this.active = true;
          this.effects = [];
          this.cleanups = [];
          if (!detached && activeEffectScope) {
            this.parent = activeEffectScope;
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
          }
        }
        run(fn2) {
          if (this.active) {
            const currentEffectScope = activeEffectScope;
            try {
              activeEffectScope = this;
              return fn2();
            } finally {
              activeEffectScope = currentEffectScope;
            }
          } else {
            warn2(`cannot run an inactive effect scope.`);
          }
        }
        on() {
          activeEffectScope = this;
        }
        off() {
          activeEffectScope = this.parent;
        }
        stop(fromParent) {
          if (this.active) {
            let i, l;
            for (i = 0, l = this.effects.length; i < l; i++) {
              this.effects[i].stop();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
              this.cleanups[i]();
            }
            if (this.scopes) {
              for (i = 0, l = this.scopes.length; i < l; i++) {
                this.scopes[i].stop(true);
              }
            }
            if (this.parent && !fromParent) {
              const last = this.parent.scopes.pop();
              if (last && last !== this) {
                this.parent.scopes[this.index] = last;
                last.index = this.index;
              }
            }
            this.active = false;
          }
        }
      };
      function effectScope3(detached) {
        return new EffectScope(detached);
      }
      function recordEffectScope(effect2, scope = activeEffectScope) {
        if (scope && scope.active) {
          scope.effects.push(effect2);
        }
      }
      function getCurrentScope3() {
        return activeEffectScope;
      }
      function onScopeDispose2(fn2) {
        if (activeEffectScope) {
          activeEffectScope.cleanups.push(fn2);
        } else {
          warn2(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
        }
      }
      var createDep = (effects) => {
        const dep = new Set(effects);
        dep.w = 0;
        dep.n = 0;
        return dep;
      };
      var wasTracked = (dep) => (dep.w & trackOpBit) > 0;
      var newTracked = (dep) => (dep.n & trackOpBit) > 0;
      var initDepMarkers = ({ deps }) => {
        if (deps.length) {
          for (let i = 0; i < deps.length; i++) {
            deps[i].w |= trackOpBit;
          }
        }
      };
      var finalizeDepMarkers = (effect2) => {
        const { deps } = effect2;
        if (deps.length) {
          let ptr = 0;
          for (let i = 0; i < deps.length; i++) {
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) {
              dep.delete(effect2);
            } else {
              deps[ptr++] = dep;
            }
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
          }
          deps.length = ptr;
        }
      };
      var targetMap = /* @__PURE__ */ new WeakMap();
      var effectTrackDepth = 0;
      var trackOpBit = 1;
      var maxMarkerBits = 30;
      var activeEffect;
      var ITERATE_KEY = Symbol("iterate");
      var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
      var ReactiveEffect = class {
        constructor(fn2, scheduler2 = null, scope) {
          this.fn = fn2;
          this.scheduler = scheduler2;
          this.active = true;
          this.deps = [];
          this.parent = void 0;
          recordEffectScope(this, scope);
        }
        run() {
          if (!this.active) {
            return this.fn();
          }
          let parent = activeEffect;
          let lastShouldTrack = shouldTrack;
          while (parent) {
            if (parent === this) {
              return;
            }
            parent = parent.parent;
          }
          try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) {
              initDepMarkers(this);
            } else {
              cleanupEffect(this);
            }
            return this.fn();
          } finally {
            if (effectTrackDepth <= maxMarkerBits) {
              finalizeDepMarkers(this);
            }
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = void 0;
            if (this.deferStop) {
              this.stop();
            }
          }
        }
        stop() {
          if (activeEffect === this) {
            this.deferStop = true;
          } else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) {
              this.onStop();
            }
            this.active = false;
          }
        }
      };
      function cleanupEffect(effect2) {
        const { deps } = effect2;
        if (deps.length) {
          for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect2);
          }
          deps.length = 0;
        }
      }
      function effect(fn2, options) {
        if (fn2.effect) {
          fn2 = fn2.effect.fn;
        }
        const _effect = new ReactiveEffect(fn2);
        if (options) {
          shared.extend(_effect, options);
          if (options.scope)
            recordEffectScope(_effect, options.scope);
        }
        if (!options || !options.lazy) {
          _effect.run();
        }
        const runner = _effect.run.bind(_effect);
        runner.effect = _effect;
        return runner;
      }
      function stop(runner) {
        runner.effect.stop();
      }
      var shouldTrack = true;
      var trackStack = [];
      function pauseTracking() {
        trackStack.push(shouldTrack);
        shouldTrack = false;
      }
      function enableTracking() {
        trackStack.push(shouldTrack);
        shouldTrack = true;
      }
      function resetTracking() {
        const last = trackStack.pop();
        shouldTrack = last === void 0 ? true : last;
      }
      function track(target, type, key) {
        if (shouldTrack && activeEffect) {
          let depsMap = targetMap.get(target);
          if (!depsMap) {
            targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
          }
          let dep = depsMap.get(key);
          if (!dep) {
            depsMap.set(key, dep = createDep());
          }
          const eventInfo = { effect: activeEffect, target, type, key };
          trackEffects(dep, eventInfo);
        }
      }
      function trackEffects(dep, debuggerEventExtraInfo) {
        let shouldTrack2 = false;
        if (effectTrackDepth <= maxMarkerBits) {
          if (!newTracked(dep)) {
            dep.n |= trackOpBit;
            shouldTrack2 = !wasTracked(dep);
          }
        } else {
          shouldTrack2 = !dep.has(activeEffect);
        }
        if (shouldTrack2) {
          dep.add(activeEffect);
          activeEffect.deps.push(dep);
          if (activeEffect.onTrack) {
            activeEffect.onTrack(__spreadValues({
              effect: activeEffect
            }, debuggerEventExtraInfo));
          }
        }
      }
      function trigger(target, type, key, newValue, oldValue, oldTarget) {
        const depsMap = targetMap.get(target);
        if (!depsMap) {
          return;
        }
        let deps = [];
        if (type === "clear") {
          deps = [...depsMap.values()];
        } else if (key === "length" && shared.isArray(target)) {
          depsMap.forEach((dep, key2) => {
            if (key2 === "length" || key2 >= newValue) {
              deps.push(dep);
            }
          });
        } else {
          if (key !== void 0) {
            deps.push(depsMap.get(key));
          }
          switch (type) {
            case "add":
              if (!shared.isArray(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              } else if (shared.isIntegerKey(key)) {
                deps.push(depsMap.get("length"));
              }
              break;
            case "delete":
              if (!shared.isArray(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              }
              break;
            case "set":
              if (shared.isMap(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
              }
              break;
          }
        }
        const eventInfo = { target, type, key, newValue, oldValue, oldTarget };
        if (deps.length === 1) {
          if (deps[0]) {
            {
              triggerEffects(deps[0], eventInfo);
            }
          }
        } else {
          const effects = [];
          for (const dep of deps) {
            if (dep) {
              effects.push(...dep);
            }
          }
          {
            triggerEffects(createDep(effects), eventInfo);
          }
        }
      }
      function triggerEffects(dep, debuggerEventExtraInfo) {
        const effects = shared.isArray(dep) ? dep : [...dep];
        for (const effect2 of effects) {
          if (effect2.computed) {
            triggerEffect(effect2, debuggerEventExtraInfo);
          }
        }
        for (const effect2 of effects) {
          if (!effect2.computed) {
            triggerEffect(effect2, debuggerEventExtraInfo);
          }
        }
      }
      function triggerEffect(effect2, debuggerEventExtraInfo) {
        if (effect2 !== activeEffect || effect2.allowRecurse) {
          if (effect2.onTrigger) {
            effect2.onTrigger(shared.extend({ effect: effect2 }, debuggerEventExtraInfo));
          }
          if (effect2.scheduler) {
            effect2.scheduler();
          } else {
            effect2.run();
          }
        }
      }
      var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
      var builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(shared.isSymbol));
      var get = /* @__PURE__ */ createGetter();
      var shallowGet = /* @__PURE__ */ createGetter(false, true);
      var readonlyGet = /* @__PURE__ */ createGetter(true);
      var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
      var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
      function createArrayInstrumentations() {
        const instrumentations = {};
        ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
          instrumentations[key] = function(...args) {
            const arr = toRaw2(this);
            for (let i = 0, l = this.length; i < l; i++) {
              track(arr, "get", i + "");
            }
            const res = arr[key](...args);
            if (res === -1 || res === false) {
              return arr[key](...args.map(toRaw2));
            } else {
              return res;
            }
          };
        });
        ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
          instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw2(this)[key].apply(this, args);
            resetTracking();
            return res;
          };
        });
        return instrumentations;
      }
      function createGetter(isReadonly2 = false, shallow = false) {
        return function get2(target, key, receiver) {
          if (key === "__v_isReactive") {
            return !isReadonly2;
          } else if (key === "__v_isReadonly") {
            return isReadonly2;
          } else if (key === "__v_isShallow") {
            return shallow;
          } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
            return target;
          }
          const targetIsArray = shared.isArray(target);
          if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
          }
          const res = Reflect.get(target, key, receiver);
          if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
          }
          if (!isReadonly2) {
            track(target, "get", key);
          }
          if (shallow) {
            return res;
          }
          if (isRef4(res)) {
            return targetIsArray && shared.isIntegerKey(key) ? res : res.value;
          }
          if (shared.isObject(res)) {
            return isReadonly2 ? readonly3(res) : reactive4(res);
          }
          return res;
        };
      }
      var set2 = /* @__PURE__ */ createSetter();
      var shallowSet = /* @__PURE__ */ createSetter(true);
      function createSetter(shallow = false) {
        return function set3(target, key, value, receiver) {
          let oldValue = target[key];
          if (isReadonly(oldValue) && isRef4(oldValue) && !isRef4(value)) {
            return false;
          }
          if (!shallow) {
            if (!isShallow(value) && !isReadonly(value)) {
              oldValue = toRaw2(oldValue);
              value = toRaw2(value);
            }
            if (!shared.isArray(target) && isRef4(oldValue) && !isRef4(value)) {
              oldValue.value = value;
              return true;
            }
          }
          const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
          const result = Reflect.set(target, key, value, receiver);
          if (target === toRaw2(receiver)) {
            if (!hadKey) {
              trigger(target, "add", key, value);
            } else if (shared.hasChanged(value, oldValue)) {
              trigger(target, "set", key, value, oldValue);
            }
          }
          return result;
        };
      }
      function deleteProperty(target, key) {
        const hadKey = shared.hasOwn(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) {
          trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
      }
      function has(target, key) {
        const result = Reflect.has(target, key);
        if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
          track(target, "has", key);
        }
        return result;
      }
      function ownKeys(target) {
        track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
        return Reflect.ownKeys(target);
      }
      var mutableHandlers = {
        get,
        set: set2,
        deleteProperty,
        has,
        ownKeys
      };
      var readonlyHandlers = {
        get: readonlyGet,
        set(target, key) {
          {
            warn2(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
          }
          return true;
        },
        deleteProperty(target, key) {
          {
            warn2(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
          }
          return true;
        }
      };
      var shallowReactiveHandlers = /* @__PURE__ */ shared.extend({}, mutableHandlers, {
        get: shallowGet,
        set: shallowSet
      });
      var shallowReadonlyHandlers = /* @__PURE__ */ shared.extend({}, readonlyHandlers, {
        get: shallowReadonlyGet
      });
      var toShallow = (value) => value;
      var getProto = (v) => Reflect.getPrototypeOf(v);
      function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
        target = target["__v_raw"];
        const rawTarget = toRaw2(target);
        const rawKey = toRaw2(key);
        if (!isReadonly2) {
          if (key !== rawKey) {
            track(rawTarget, "get", key);
          }
          track(rawTarget, "get", rawKey);
        }
        const { has: has2 } = getProto(rawTarget);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        if (has2.call(rawTarget, key)) {
          return wrap(target.get(key));
        } else if (has2.call(rawTarget, rawKey)) {
          return wrap(target.get(rawKey));
        } else if (target !== rawTarget) {
          target.get(key);
        }
      }
      function has$1(key, isReadonly2 = false) {
        const target = this["__v_raw"];
        const rawTarget = toRaw2(target);
        const rawKey = toRaw2(key);
        if (!isReadonly2) {
          if (key !== rawKey) {
            track(rawTarget, "has", key);
          }
          track(rawTarget, "has", rawKey);
        }
        return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
      }
      function size(target, isReadonly2 = false) {
        target = target["__v_raw"];
        !isReadonly2 && track(toRaw2(target), "iterate", ITERATE_KEY);
        return Reflect.get(target, "size", target);
      }
      function add(value) {
        value = toRaw2(value);
        const target = toRaw2(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      }
      function set$1(key, value) {
        value = toRaw2(value);
        const target = toRaw2(this);
        const { has: has2, get: get2 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw2(key);
          hadKey = has2.call(target, key);
        } else {
          checkIdentityKeys(target, has2, key);
        }
        const oldValue = get2.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (shared.hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
        return this;
      }
      function deleteEntry(key) {
        const target = toRaw2(this);
        const { has: has2, get: get2 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw2(key);
          hadKey = has2.call(target, key);
        } else {
          checkIdentityKeys(target, has2, key);
        }
        const oldValue = get2 ? get2.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
      }
      function clear() {
        const target = toRaw2(this);
        const hadItems = target.size !== 0;
        const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
        const result = target.clear();
        if (hadItems) {
          trigger(target, "clear", void 0, void 0, oldTarget);
        }
        return result;
      }
      function createForEach(isReadonly2, isShallow2) {
        return function forEach(callback, thisArg) {
          const observed = this;
          const target = observed["__v_raw"];
          const rawTarget = toRaw2(target);
          const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
          !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
          return target.forEach((value, key) => {
            return callback.call(thisArg, wrap(value), wrap(key), observed);
          });
        };
      }
      function createIterableMethod(method, isReadonly2, isShallow2) {
        return function(...args) {
          const target = this["__v_raw"];
          const rawTarget = toRaw2(target);
          const targetIsMap = shared.isMap(rawTarget);
          const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
          const isKeyOnly = method === "keys" && targetIsMap;
          const innerIterator = target[method](...args);
          const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
          !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
          return {
            next() {
              const { value, done } = innerIterator.next();
              return done ? { value, done } : {
                value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                done
              };
            },
            [Symbol.iterator]() {
              return this;
            }
          };
        };
      }
      function createReadonlyMethod(type) {
        return function(...args) {
          {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw2(this));
          }
          return type === "delete" ? false : this;
        };
      }
      function createInstrumentations() {
        const mutableInstrumentations2 = {
          get(key) {
            return get$1(this, key);
          },
          get size() {
            return size(this);
          },
          has: has$1,
          add,
          set: set$1,
          delete: deleteEntry,
          clear,
          forEach: createForEach(false, false)
        };
        const shallowInstrumentations2 = {
          get(key) {
            return get$1(this, key, false, true);
          },
          get size() {
            return size(this);
          },
          has: has$1,
          add,
          set: set$1,
          delete: deleteEntry,
          clear,
          forEach: createForEach(false, true)
        };
        const readonlyInstrumentations2 = {
          get(key) {
            return get$1(this, key, true);
          },
          get size() {
            return size(this, true);
          },
          has(key) {
            return has$1.call(this, key, true);
          },
          add: createReadonlyMethod("add"),
          set: createReadonlyMethod("set"),
          delete: createReadonlyMethod("delete"),
          clear: createReadonlyMethod("clear"),
          forEach: createForEach(true, false)
        };
        const shallowReadonlyInstrumentations2 = {
          get(key) {
            return get$1(this, key, true, true);
          },
          get size() {
            return size(this, true);
          },
          has(key) {
            return has$1.call(this, key, true);
          },
          add: createReadonlyMethod("add"),
          set: createReadonlyMethod("set"),
          delete: createReadonlyMethod("delete"),
          clear: createReadonlyMethod("clear"),
          forEach: createForEach(true, true)
        };
        const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
        iteratorMethods.forEach((method) => {
          mutableInstrumentations2[method] = createIterableMethod(method, false, false);
          readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
          shallowInstrumentations2[method] = createIterableMethod(method, false, true);
          shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
        });
        return [
          mutableInstrumentations2,
          readonlyInstrumentations2,
          shallowInstrumentations2,
          shallowReadonlyInstrumentations2
        ];
      }
      var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
      function createInstrumentationGetter(isReadonly2, shallow) {
        const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
        return (target, key, receiver) => {
          if (key === "__v_isReactive") {
            return !isReadonly2;
          } else if (key === "__v_isReadonly") {
            return isReadonly2;
          } else if (key === "__v_raw") {
            return target;
          }
          return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
        };
      }
      var mutableCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, false)
      };
      var shallowCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, true)
      };
      var readonlyCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(true, false)
      };
      var shallowReadonlyCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(true, true)
      };
      function checkIdentityKeys(target, has2, key) {
        const rawKey = toRaw2(key);
        if (rawKey !== key && has2.call(target, rawKey)) {
          const type = shared.toRawType(target);
          console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
        }
      }
      var reactiveMap = /* @__PURE__ */ new WeakMap();
      var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
      var readonlyMap = /* @__PURE__ */ new WeakMap();
      var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
      function targetTypeMap(rawType) {
        switch (rawType) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      }
      function getTargetType(value) {
        return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
      }
      function reactive4(target) {
        if (isReadonly(target)) {
          return target;
        }
        return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
      }
      function shallowReactive(target) {
        return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
      }
      function readonly3(target) {
        return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
      }
      function shallowReadonly(target) {
        return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
      }
      function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
        if (!shared.isObject(target)) {
          {
            console.warn(`value cannot be made reactive: ${String(target)}`);
          }
          return target;
        }
        if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
          return target;
        }
        const existingProxy = proxyMap.get(target);
        if (existingProxy) {
          return existingProxy;
        }
        const targetType = getTargetType(target);
        if (targetType === 0) {
          return target;
        }
        const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
        proxyMap.set(target, proxy);
        return proxy;
      }
      function isReactive3(value) {
        if (isReadonly(value)) {
          return isReactive3(value["__v_raw"]);
        }
        return !!(value && value["__v_isReactive"]);
      }
      function isReadonly(value) {
        return !!(value && value["__v_isReadonly"]);
      }
      function isShallow(value) {
        return !!(value && value["__v_isShallow"]);
      }
      function isProxy(value) {
        return isReactive3(value) || isReadonly(value);
      }
      function toRaw2(observed) {
        const raw = observed && observed["__v_raw"];
        return raw ? toRaw2(raw) : observed;
      }
      function markRaw3(value) {
        shared.def(value, "__v_skip", true);
        return value;
      }
      var toReactive = (value) => shared.isObject(value) ? reactive4(value) : value;
      var toReadonly = (value) => shared.isObject(value) ? readonly3(value) : value;
      function trackRefValue(ref18) {
        if (shouldTrack && activeEffect) {
          ref18 = toRaw2(ref18);
          {
            trackEffects(ref18.dep || (ref18.dep = createDep()), {
              target: ref18,
              type: "get",
              key: "value"
            });
          }
        }
      }
      function triggerRefValue(ref18, newVal) {
        ref18 = toRaw2(ref18);
        if (ref18.dep) {
          {
            triggerEffects(ref18.dep, {
              target: ref18,
              type: "set",
              key: "value",
              newValue: newVal
            });
          }
        }
      }
      function isRef4(r) {
        return !!(r && r.__v_isRef === true);
      }
      function ref17(value) {
        return createRef(value, false);
      }
      function shallowRef3(value) {
        return createRef(value, true);
      }
      function createRef(rawValue, shallow) {
        if (isRef4(rawValue)) {
          return rawValue;
        }
        return new RefImpl(rawValue, shallow);
      }
      var RefImpl = class {
        constructor(value, __v_isShallow) {
          this.__v_isShallow = __v_isShallow;
          this.dep = void 0;
          this.__v_isRef = true;
          this._rawValue = __v_isShallow ? value : toRaw2(value);
          this._value = __v_isShallow ? value : toReactive(value);
        }
        get value() {
          trackRefValue(this);
          return this._value;
        }
        set value(newVal) {
          const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
          newVal = useDirectValue ? newVal : toRaw2(newVal);
          if (shared.hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
          }
        }
      };
      function triggerRef(ref18) {
        triggerRefValue(ref18, ref18.value);
      }
      function unref4(ref18) {
        return isRef4(ref18) ? ref18.value : ref18;
      }
      var shallowUnwrapHandlers = {
        get: (target, key, receiver) => unref4(Reflect.get(target, key, receiver)),
        set: (target, key, value, receiver) => {
          const oldValue = target[key];
          if (isRef4(oldValue) && !isRef4(value)) {
            oldValue.value = value;
            return true;
          } else {
            return Reflect.set(target, key, value, receiver);
          }
        }
      };
      function proxyRefs(objectWithRefs) {
        return isReactive3(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
      }
      var CustomRefImpl = class {
        constructor(factory) {
          this.dep = void 0;
          this.__v_isRef = true;
          const { get: get2, set: set3 } = factory(() => trackRefValue(this), () => triggerRefValue(this));
          this._get = get2;
          this._set = set3;
        }
        get value() {
          return this._get();
        }
        set value(newVal) {
          this._set(newVal);
        }
      };
      function customRef3(factory) {
        return new CustomRefImpl(factory);
      }
      function toRefs3(object) {
        if (!isProxy(object)) {
          console.warn(`toRefs() expects a reactive object but received a plain one.`);
        }
        const ret = shared.isArray(object) ? new Array(object.length) : {};
        for (const key in object) {
          ret[key] = toRef3(object, key);
        }
        return ret;
      }
      var ObjectRefImpl = class {
        constructor(_object, _key, _defaultValue) {
          this._object = _object;
          this._key = _key;
          this._defaultValue = _defaultValue;
          this.__v_isRef = true;
        }
        get value() {
          const val = this._object[this._key];
          return val === void 0 ? this._defaultValue : val;
        }
        set value(newVal) {
          this._object[this._key] = newVal;
        }
      };
      function toRef3(object, key, defaultValue) {
        const val = object[key];
        return isRef4(val) ? val : new ObjectRefImpl(object, key, defaultValue);
      }
      var _a3;
      var ComputedRefImpl = class {
        constructor(getter, _setter, isReadonly2, isSSR) {
          this._setter = _setter;
          this.dep = void 0;
          this.__v_isRef = true;
          this[_a3] = false;
          this._dirty = true;
          this.effect = new ReactiveEffect(getter, () => {
            if (!this._dirty) {
              this._dirty = true;
              triggerRefValue(this);
            }
          });
          this.effect.computed = this;
          this.effect.active = this._cacheable = !isSSR;
          this["__v_isReadonly"] = isReadonly2;
        }
        get value() {
          const self2 = toRaw2(this);
          trackRefValue(self2);
          if (self2._dirty || !self2._cacheable) {
            self2._dirty = false;
            self2._value = self2.effect.run();
          }
          return self2._value;
        }
        set value(newValue) {
          this._setter(newValue);
        }
      };
      _a3 = "__v_isReadonly";
      function computed15(getterOrOptions, debugOptions, isSSR = false) {
        let getter;
        let setter;
        const onlyGetter = shared.isFunction(getterOrOptions);
        if (onlyGetter) {
          getter = getterOrOptions;
          setter = () => {
            console.warn("Write operation failed: computed value is readonly");
          };
        } else {
          getter = getterOrOptions.get;
          setter = getterOrOptions.set;
        }
        const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
        if (debugOptions && !isSSR) {
          cRef.effect.onTrack = debugOptions.onTrack;
          cRef.effect.onTrigger = debugOptions.onTrigger;
        }
        return cRef;
      }
      var _a$1;
      var tick = /* @__PURE__ */ Promise.resolve();
      var queue = [];
      var queued = false;
      var scheduler = (fn2) => {
        queue.push(fn2);
        if (!queued) {
          queued = true;
          tick.then(flush);
        }
      };
      var flush = () => {
        for (let i = 0; i < queue.length; i++) {
          queue[i]();
        }
        queue.length = 0;
        queued = false;
      };
      var DeferredComputedRefImpl = class {
        constructor(getter) {
          this.dep = void 0;
          this._dirty = true;
          this.__v_isRef = true;
          this[_a$1] = true;
          let compareTarget;
          let hasCompareTarget = false;
          let scheduled = false;
          this.effect = new ReactiveEffect(getter, (computedTrigger) => {
            if (this.dep) {
              if (computedTrigger) {
                compareTarget = this._value;
                hasCompareTarget = true;
              } else if (!scheduled) {
                const valueToCompare = hasCompareTarget ? compareTarget : this._value;
                scheduled = true;
                hasCompareTarget = false;
                scheduler(() => {
                  if (this.effect.active && this._get() !== valueToCompare) {
                    triggerRefValue(this);
                  }
                  scheduled = false;
                });
              }
              for (const e4 of this.dep) {
                if (e4.computed instanceof DeferredComputedRefImpl) {
                  e4.scheduler(true);
                }
              }
            }
            this._dirty = true;
          });
          this.effect.computed = this;
        }
        _get() {
          if (this._dirty) {
            this._dirty = false;
            return this._value = this.effect.run();
          }
          return this._value;
        }
        get value() {
          trackRefValue(this);
          return toRaw2(this)._get();
        }
      };
      _a$1 = "__v_isReadonly";
      function deferredComputed(getter) {
        return new DeferredComputedRefImpl(getter);
      }
      exports.EffectScope = EffectScope;
      exports.ITERATE_KEY = ITERATE_KEY;
      exports.ReactiveEffect = ReactiveEffect;
      exports.computed = computed15;
      exports.customRef = customRef3;
      exports.deferredComputed = deferredComputed;
      exports.effect = effect;
      exports.effectScope = effectScope3;
      exports.enableTracking = enableTracking;
      exports.getCurrentScope = getCurrentScope3;
      exports.isProxy = isProxy;
      exports.isReactive = isReactive3;
      exports.isReadonly = isReadonly;
      exports.isRef = isRef4;
      exports.isShallow = isShallow;
      exports.markRaw = markRaw3;
      exports.onScopeDispose = onScopeDispose2;
      exports.pauseTracking = pauseTracking;
      exports.proxyRefs = proxyRefs;
      exports.reactive = reactive4;
      exports.readonly = readonly3;
      exports.ref = ref17;
      exports.resetTracking = resetTracking;
      exports.shallowReactive = shallowReactive;
      exports.shallowReadonly = shallowReadonly;
      exports.shallowRef = shallowRef3;
      exports.stop = stop;
      exports.toRaw = toRaw2;
      exports.toRef = toRef3;
      exports.toRefs = toRefs3;
      exports.track = track;
      exports.trigger = trigger;
      exports.triggerRef = triggerRef;
      exports.unref = unref4;
    }
  });

  // node_modules/@vue/reactivity/index.js
  var require_reactivity = __commonJS({
    "node_modules/@vue/reactivity/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_reactivity_cjs();
      }
    }
  });

  // node_modules/@vue/runtime-core/dist/runtime-core.cjs.js
  var require_runtime_core_cjs = __commonJS({
    "node_modules/@vue/runtime-core/dist/runtime-core.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var reactivity = require_reactivity();
      var shared = require_shared();
      var stack = [];
      function pushWarningContext(vnode) {
        stack.push(vnode);
      }
      function popWarningContext() {
        stack.pop();
      }
      function warn2(msg, ...args) {
        reactivity.pauseTracking();
        const instance = stack.length ? stack[stack.length - 1].component : null;
        const appWarnHandler = instance && instance.appContext.config.warnHandler;
        const trace = getComponentTrace();
        if (appWarnHandler) {
          callWithErrorHandling(appWarnHandler, instance, 11, [
            msg + args.join(""),
            instance && instance.proxy,
            trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
            trace
          ]);
        } else {
          const warnArgs = [`[Vue warn]: ${msg}`, ...args];
          if (trace.length && true) {
            warnArgs.push(`
`, ...formatTrace(trace));
          }
          console.warn(...warnArgs);
        }
        reactivity.resetTracking();
      }
      function getComponentTrace() {
        let currentVNode = stack[stack.length - 1];
        if (!currentVNode) {
          return [];
        }
        const normalizedStack = [];
        while (currentVNode) {
          const last = normalizedStack[0];
          if (last && last.vnode === currentVNode) {
            last.recurseCount++;
          } else {
            normalizedStack.push({
              vnode: currentVNode,
              recurseCount: 0
            });
          }
          const parentInstance = currentVNode.component && currentVNode.component.parent;
          currentVNode = parentInstance && parentInstance.vnode;
        }
        return normalizedStack;
      }
      function formatTrace(trace) {
        const logs = [];
        trace.forEach((entry, i) => {
          logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
        });
        return logs;
      }
      function formatTraceEntry({ vnode, recurseCount }) {
        const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
        const isRoot = vnode.component ? vnode.component.parent == null : false;
        const open2 = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
        const close = `>` + postfix;
        return vnode.props ? [open2, ...formatProps(vnode.props), close] : [open2 + close];
      }
      function formatProps(props) {
        const res = [];
        const keys = Object.keys(props);
        keys.slice(0, 3).forEach((key) => {
          res.push(...formatProp(key, props[key]));
        });
        if (keys.length > 3) {
          res.push(` ...`);
        }
        return res;
      }
      function formatProp(key, value, raw) {
        if (shared.isString(value)) {
          value = JSON.stringify(value);
          return raw ? value : [`${key}=${value}`];
        } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
          return raw ? value : [`${key}=${value}`];
        } else if (reactivity.isRef(value)) {
          value = formatProp(key, reactivity.toRaw(value.value), true);
          return raw ? value : [`${key}=Ref<`, value, `>`];
        } else if (shared.isFunction(value)) {
          return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
        } else {
          value = reactivity.toRaw(value);
          return raw ? value : [`${key}=`, value];
        }
      }
      var ErrorTypeStrings = {
        ["sp"]: "serverPrefetch hook",
        ["bc"]: "beforeCreate hook",
        ["c"]: "created hook",
        ["bm"]: "beforeMount hook",
        ["m"]: "mounted hook",
        ["bu"]: "beforeUpdate hook",
        ["u"]: "updated",
        ["bum"]: "beforeUnmount hook",
        ["um"]: "unmounted hook",
        ["a"]: "activated hook",
        ["da"]: "deactivated hook",
        ["ec"]: "errorCaptured hook",
        ["rtc"]: "renderTracked hook",
        ["rtg"]: "renderTriggered hook",
        [0]: "setup function",
        [1]: "render function",
        [2]: "watcher getter",
        [3]: "watcher callback",
        [4]: "watcher cleanup function",
        [5]: "native event handler",
        [6]: "component event handler",
        [7]: "vnode hook",
        [8]: "directive hook",
        [9]: "transition hook",
        [10]: "app errorHandler",
        [11]: "app warnHandler",
        [12]: "ref function",
        [13]: "async component loader",
        [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
      };
      function callWithErrorHandling(fn2, instance, type, args) {
        let res;
        try {
          res = args ? fn2(...args) : fn2();
        } catch (err) {
          handleError(err, instance, type);
        }
        return res;
      }
      function callWithAsyncErrorHandling(fn2, instance, type, args) {
        if (shared.isFunction(fn2)) {
          const res = callWithErrorHandling(fn2, instance, type, args);
          if (res && shared.isPromise(res)) {
            res.catch((err) => {
              handleError(err, instance, type);
            });
          }
          return res;
        }
        const values = [];
        for (let i = 0; i < fn2.length; i++) {
          values.push(callWithAsyncErrorHandling(fn2[i], instance, type, args));
        }
        return values;
      }
      function handleError(err, instance, type, throwInDev = true) {
        const contextVNode = instance ? instance.vnode : null;
        if (instance) {
          let cur = instance.parent;
          const exposedInstance = instance.proxy;
          const errorInfo = ErrorTypeStrings[type];
          while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
              for (let i = 0; i < errorCapturedHooks.length; i++) {
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                  return;
                }
              }
            }
            cur = cur.parent;
          }
          const appErrorHandler = instance.appContext.config.errorHandler;
          if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
            return;
          }
        }
        logError(err, type, contextVNode, throwInDev);
      }
      function logError(err, type, contextVNode, throwInDev = true) {
        {
          const info = ErrorTypeStrings[type];
          if (contextVNode) {
            pushWarningContext(contextVNode);
          }
          warn2(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
          if (contextVNode) {
            popWarningContext();
          }
          if (throwInDev) {
            throw err;
          } else {
            console.error(err);
          }
        }
      }
      var isFlushing = false;
      var isFlushPending = false;
      var queue = [];
      var flushIndex = 0;
      var pendingPostFlushCbs = [];
      var activePostFlushCbs = null;
      var postFlushIndex = 0;
      var resolvedPromise = /* @__PURE__ */ Promise.resolve();
      var currentFlushPromise = null;
      var RECURSION_LIMIT = 100;
      function nextTick8(fn2) {
        const p = currentFlushPromise || resolvedPromise;
        return fn2 ? p.then(this ? fn2.bind(this) : fn2) : p;
      }
      function findInsertionIndex(id2) {
        let start = flushIndex + 1;
        let end = queue.length;
        while (start < end) {
          const middle = start + end >>> 1;
          const middleJobId = getId(queue[middle]);
          middleJobId < id2 ? start = middle + 1 : end = middle;
        }
        return start;
      }
      function queueJob(job) {
        if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
          if (job.id == null) {
            queue.push(job);
          } else {
            queue.splice(findInsertionIndex(job.id), 0, job);
          }
          queueFlush();
        }
      }
      function queueFlush() {
        if (!isFlushing && !isFlushPending) {
          isFlushPending = true;
          currentFlushPromise = resolvedPromise.then(flushJobs);
        }
      }
      function invalidateJob(job) {
        const i = queue.indexOf(job);
        if (i > flushIndex) {
          queue.splice(i, 1);
        }
      }
      function queuePostFlushCb(cb) {
        if (!shared.isArray(cb)) {
          if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
            pendingPostFlushCbs.push(cb);
          }
        } else {
          pendingPostFlushCbs.push(...cb);
        }
        queueFlush();
      }
      function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
        {
          seen = seen || /* @__PURE__ */ new Map();
        }
        for (; i < queue.length; i++) {
          const cb = queue[i];
          if (cb && cb.pre) {
            if (checkRecursiveUpdates(seen, cb)) {
              continue;
            }
            queue.splice(i, 1);
            i--;
            cb();
          }
        }
      }
      function flushPostFlushCbs(seen) {
        if (pendingPostFlushCbs.length) {
          const deduped = [...new Set(pendingPostFlushCbs)];
          pendingPostFlushCbs.length = 0;
          if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
          }
          activePostFlushCbs = deduped;
          {
            seen = seen || /* @__PURE__ */ new Map();
          }
          activePostFlushCbs.sort((a2, b) => getId(a2) - getId(b));
          for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
              continue;
            }
            activePostFlushCbs[postFlushIndex]();
          }
          activePostFlushCbs = null;
          postFlushIndex = 0;
        }
      }
      var getId = (job) => job.id == null ? Infinity : job.id;
      var comparator = (a2, b) => {
        const diff = getId(a2) - getId(b);
        if (diff === 0) {
          if (a2.pre && !b.pre)
            return -1;
          if (b.pre && !a2.pre)
            return 1;
        }
        return diff;
      };
      function flushJobs(seen) {
        isFlushPending = false;
        isFlushing = true;
        {
          seen = seen || /* @__PURE__ */ new Map();
        }
        queue.sort(comparator);
        const check = (job) => checkRecursiveUpdates(seen, job);
        try {
          for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            const job = queue[flushIndex];
            if (job && job.active !== false) {
              if (check(job)) {
                continue;
              }
              callWithErrorHandling(job, null, 14);
            }
          }
        } finally {
          flushIndex = 0;
          queue.length = 0;
          flushPostFlushCbs(seen);
          isFlushing = false;
          currentFlushPromise = null;
          if (queue.length || pendingPostFlushCbs.length) {
            flushJobs(seen);
          }
        }
      }
      function checkRecursiveUpdates(seen, fn2) {
        if (!seen.has(fn2)) {
          seen.set(fn2, 1);
        } else {
          const count = seen.get(fn2);
          if (count > RECURSION_LIMIT) {
            const instance = fn2.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            warn2(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
            return true;
          } else {
            seen.set(fn2, count + 1);
          }
        }
      }
      var isHmrUpdating = false;
      var hmrDirtyComponents = /* @__PURE__ */ new Set();
      {
        shared.getGlobalThis().__VUE_HMR_RUNTIME__ = {
          createRecord: tryWrap(createRecord),
          rerender: tryWrap(rerender),
          reload: tryWrap(reload)
        };
      }
      var map = /* @__PURE__ */ new Map();
      function registerHMR(instance) {
        const id2 = instance.type.__hmrId;
        let record = map.get(id2);
        if (!record) {
          createRecord(id2, instance.type);
          record = map.get(id2);
        }
        record.instances.add(instance);
      }
      function unregisterHMR(instance) {
        map.get(instance.type.__hmrId).instances.delete(instance);
      }
      function createRecord(id2, initialDef) {
        if (map.has(id2)) {
          return false;
        }
        map.set(id2, {
          initialDef: normalizeClassComponent(initialDef),
          instances: /* @__PURE__ */ new Set()
        });
        return true;
      }
      function normalizeClassComponent(component) {
        return isClassComponent(component) ? component.__vccOpts : component;
      }
      function rerender(id2, newRender) {
        const record = map.get(id2);
        if (!record) {
          return;
        }
        record.initialDef.render = newRender;
        [...record.instances].forEach((instance) => {
          if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
          }
          instance.renderCache = [];
          isHmrUpdating = true;
          instance.update();
          isHmrUpdating = false;
        });
      }
      function reload(id2, newComp) {
        const record = map.get(id2);
        if (!record)
          return;
        newComp = normalizeClassComponent(newComp);
        updateComponentDef(record.initialDef, newComp);
        const instances = [...record.instances];
        for (const instance of instances) {
          const oldComp = normalizeClassComponent(instance.type);
          if (!hmrDirtyComponents.has(oldComp)) {
            if (oldComp !== record.initialDef) {
              updateComponentDef(oldComp, newComp);
            }
            hmrDirtyComponents.add(oldComp);
          }
          instance.appContext.optionsCache.delete(instance.type);
          if (instance.ceReload) {
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
          } else if (instance.parent) {
            queueJob(instance.parent.update);
            if (instance.parent.type.__asyncLoader && instance.parent.ceReload) {
              instance.parent.ceReload(newComp.styles);
            }
          } else if (instance.appContext.reload) {
            instance.appContext.reload();
          } else if (typeof window !== "undefined") {
            window.location.reload();
          } else {
            console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
          }
        }
        queuePostFlushCb(() => {
          for (const instance of instances) {
            hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
          }
        });
      }
      function updateComponentDef(oldComp, newComp) {
        shared.extend(oldComp, newComp);
        for (const key in oldComp) {
          if (key !== "__file" && !(key in newComp)) {
            delete oldComp[key];
          }
        }
      }
      function tryWrap(fn2) {
        return (id2, arg) => {
          try {
            return fn2(id2, arg);
          } catch (e4) {
            console.error(e4);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
          }
        };
      }
      var buffer = [];
      var devtoolsNotInstalled = false;
      function emit(event, ...args) {
        if (exports.devtools) {
          exports.devtools.emit(event, ...args);
        } else if (!devtoolsNotInstalled) {
          buffer.push({ event, args });
        }
      }
      function setDevtoolsHook(hook, target) {
        var _a3, _b;
        exports.devtools = hook;
        if (exports.devtools) {
          exports.devtools.enabled = true;
          buffer.forEach(({ event, args }) => exports.devtools.emit(event, ...args));
          buffer = [];
        } else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a3 = window.navigator) === null || _a3 === void 0 ? void 0 : _a3.userAgent) === null || _b === void 0 ? void 0 : _b.includes("jsdom"))) {
          const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
          replay.push((newHook) => {
            setDevtoolsHook(newHook, target);
          });
          setTimeout(() => {
            if (!exports.devtools) {
              target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
              devtoolsNotInstalled = true;
              buffer = [];
            }
          }, 3e3);
        } else {
          devtoolsNotInstalled = true;
          buffer = [];
        }
      }
      function devtoolsInitApp(app, version2) {
        emit("app:init", app, version2, {
          Fragment,
          Text,
          Comment,
          Static
        });
      }
      function devtoolsUnmountApp(app) {
        emit("app:unmount", app);
      }
      var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added");
      var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated");
      var devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook("component:removed");
      function createDevtoolsComponentHook(hook) {
        return (component) => {
          emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
        };
      }
      var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start");
      var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end");
      function createDevtoolsPerformanceHook(hook) {
        return (component, type, time) => {
          emit(hook, component.appContext.app, component.uid, component, type, time);
        };
      }
      function devtoolsComponentEmit(component, event, params) {
        emit("component:emit", component.appContext.app, component, event, params);
      }
      function emit$1(instance, event, ...rawArgs) {
        if (instance.isUnmounted)
          return;
        const props = instance.vnode.props || shared.EMPTY_OBJ;
        {
          const { emitsOptions, propsOptions: [propsOptions] } = instance;
          if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
              if (!propsOptions || !(shared.toHandlerKey(event) in propsOptions)) {
                warn2(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${shared.toHandlerKey(event)}" prop.`);
              }
            } else {
              const validator = emitsOptions[event];
              if (shared.isFunction(validator)) {
                const isValid = validator(...rawArgs);
                if (!isValid) {
                  warn2(`Invalid event arguments: event validation failed for event "${event}".`);
                }
              }
            }
          }
        }
        let args = rawArgs;
        const isModelListener = event.startsWith("update:");
        const modelArg = isModelListener && event.slice(7);
        if (modelArg && modelArg in props) {
          const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
          const { number, trim } = props[modifiersKey] || shared.EMPTY_OBJ;
          if (trim) {
            args = rawArgs.map((a2) => a2.trim());
          }
          if (number) {
            args = rawArgs.map(shared.toNumber);
          }
        }
        {
          devtoolsComponentEmit(instance, event, args);
        }
        {
          const lowerCaseEvent = event.toLowerCase();
          if (lowerCaseEvent !== event && props[shared.toHandlerKey(lowerCaseEvent)]) {
            warn2(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${shared.hyphenate(event)}" instead of "${event}".`);
          }
        }
        let handlerName;
        let handler = props[handlerName = shared.toHandlerKey(event)] || props[handlerName = shared.toHandlerKey(shared.camelize(event))];
        if (!handler && isModelListener) {
          handler = props[handlerName = shared.toHandlerKey(shared.hyphenate(event))];
        }
        if (handler) {
          callWithAsyncErrorHandling(handler, instance, 6, args);
        }
        const onceHandler = props[handlerName + `Once`];
        if (onceHandler) {
          if (!instance.emitted) {
            instance.emitted = {};
          } else if (instance.emitted[handlerName]) {
            return;
          }
          instance.emitted[handlerName] = true;
          callWithAsyncErrorHandling(onceHandler, instance, 6, args);
        }
      }
      function normalizeEmitsOptions(comp, appContext, asMixin = false) {
        const cache = appContext.emitsCache;
        const cached = cache.get(comp);
        if (cached !== void 0) {
          return cached;
        }
        const raw = comp.emits;
        let normalized = {};
        let hasExtends = false;
        if (!shared.isFunction(comp)) {
          const extendEmits = (raw2) => {
            const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
            if (normalizedFromExtend) {
              hasExtends = true;
              shared.extend(normalized, normalizedFromExtend);
            }
          };
          if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
          }
          if (comp.extends) {
            extendEmits(comp.extends);
          }
          if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
          }
        }
        if (!raw && !hasExtends) {
          if (shared.isObject(comp)) {
            cache.set(comp, null);
          }
          return null;
        }
        if (shared.isArray(raw)) {
          raw.forEach((key) => normalized[key] = null);
        } else {
          shared.extend(normalized, raw);
        }
        if (shared.isObject(comp)) {
          cache.set(comp, normalized);
        }
        return normalized;
      }
      function isEmitListener(options, key) {
        if (!options || !shared.isOn(key)) {
          return false;
        }
        key = key.slice(2).replace(/Once$/, "");
        return shared.hasOwn(options, key[0].toLowerCase() + key.slice(1)) || shared.hasOwn(options, shared.hyphenate(key)) || shared.hasOwn(options, key);
      }
      var currentRenderingInstance = null;
      var currentScopeId = null;
      function setCurrentRenderingInstance(instance) {
        const prev = currentRenderingInstance;
        currentRenderingInstance = instance;
        currentScopeId = instance && instance.type.__scopeId || null;
        return prev;
      }
      function pushScopeId(id2) {
        currentScopeId = id2;
      }
      function popScopeId() {
        currentScopeId = null;
      }
      var withScopeId = (_id) => withCtx;
      function withCtx(fn2, ctx = currentRenderingInstance, isNonScopedSlot) {
        if (!ctx)
          return fn2;
        if (fn2._n) {
          return fn2;
        }
        const renderFnWithContext = (...args) => {
          if (renderFnWithContext._d) {
            setBlockTracking(-1);
          }
          const prevInstance = setCurrentRenderingInstance(ctx);
          const res = fn2(...args);
          setCurrentRenderingInstance(prevInstance);
          if (renderFnWithContext._d) {
            setBlockTracking(1);
          }
          {
            devtoolsComponentUpdated(ctx);
          }
          return res;
        };
        renderFnWithContext._n = true;
        renderFnWithContext._c = true;
        renderFnWithContext._d = true;
        return renderFnWithContext;
      }
      var accessedAttrs = false;
      function markAttrsAccessed() {
        accessedAttrs = true;
      }
      function renderComponentRoot(instance) {
        const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render: render22, renderCache, data, setupState, ctx, inheritAttrs } = instance;
        let result;
        let fallthroughAttrs;
        const prev = setCurrentRenderingInstance(instance);
        {
          accessedAttrs = false;
        }
        try {
          if (vnode.shapeFlag & 4) {
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render22.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
          } else {
            const render23 = Component;
            if (attrs === props) {
              markAttrsAccessed();
            }
            result = normalizeVNode(render23.length > 1 ? render23(props, true ? {
              get attrs() {
                markAttrsAccessed();
                return attrs;
              },
              slots,
              emit: emit2
            } : { attrs, slots, emit: emit2 }) : render23(props, null));
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
          }
        } catch (err) {
          blockStack.length = 0;
          handleError(err, instance, 1);
          result = createVNode(Comment);
        }
        let root = result;
        let setRoot = void 0;
        if (result.patchFlag > 0 && result.patchFlag & 2048) {
          [root, setRoot] = getChildRoot(result);
        }
        if (fallthroughAttrs && inheritAttrs !== false) {
          const keys = Object.keys(fallthroughAttrs);
          const { shapeFlag } = root;
          if (keys.length) {
            if (shapeFlag & (1 | 6)) {
              if (propsOptions && keys.some(shared.isModelListener)) {
                fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
              }
              root = cloneVNode(root, fallthroughAttrs);
            } else if (!accessedAttrs && root.type !== Comment) {
              const allAttrs = Object.keys(attrs);
              const eventAttrs = [];
              const extraAttrs = [];
              for (let i = 0, l = allAttrs.length; i < l; i++) {
                const key = allAttrs[i];
                if (shared.isOn(key)) {
                  if (!shared.isModelListener(key)) {
                    eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                  }
                } else {
                  extraAttrs.push(key);
                }
              }
              if (extraAttrs.length) {
                warn2(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
              }
              if (eventAttrs.length) {
                warn2(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
              }
            }
          }
        }
        if (vnode.dirs) {
          if (!isElementRoot(root)) {
            warn2(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
          }
          root = cloneVNode(root);
          root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
        }
        if (vnode.transition) {
          if (!isElementRoot(root)) {
            warn2(`Component inside <Transition> renders non-element root node that cannot be animated.`);
          }
          root.transition = vnode.transition;
        }
        if (setRoot) {
          setRoot(root);
        } else {
          result = root;
        }
        setCurrentRenderingInstance(prev);
        return result;
      }
      var getChildRoot = (vnode) => {
        const rawChildren = vnode.children;
        const dynamicChildren = vnode.dynamicChildren;
        const childRoot = filterSingleRoot(rawChildren);
        if (!childRoot) {
          return [vnode, void 0];
        }
        const index = rawChildren.indexOf(childRoot);
        const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
        const setRoot = (updatedRoot) => {
          rawChildren[index] = updatedRoot;
          if (dynamicChildren) {
            if (dynamicIndex > -1) {
              dynamicChildren[dynamicIndex] = updatedRoot;
            } else if (updatedRoot.patchFlag > 0) {
              vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
          }
        };
        return [normalizeVNode(childRoot), setRoot];
      };
      function filterSingleRoot(children) {
        let singleRoot;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (isVNode(child)) {
            if (child.type !== Comment || child.children === "v-if") {
              if (singleRoot) {
                return;
              } else {
                singleRoot = child;
              }
            }
          } else {
            return;
          }
        }
        return singleRoot;
      }
      var getFunctionalFallthrough = (attrs) => {
        let res;
        for (const key in attrs) {
          if (key === "class" || key === "style" || shared.isOn(key)) {
            (res || (res = {}))[key] = attrs[key];
          }
        }
        return res;
      };
      var filterModelListeners = (attrs, props) => {
        const res = {};
        for (const key in attrs) {
          if (!shared.isModelListener(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
          }
        }
        return res;
      };
      var isElementRoot = (vnode) => {
        return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
      };
      function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
        const { props: prevProps, children: prevChildren, component } = prevVNode;
        const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
        const emits = component.emitsOptions;
        if ((prevChildren || nextChildren) && isHmrUpdating) {
          return true;
        }
        if (nextVNode.dirs || nextVNode.transition) {
          return true;
        }
        if (optimized && patchFlag >= 0) {
          if (patchFlag & 1024) {
            return true;
          }
          if (patchFlag & 16) {
            if (!prevProps) {
              return !!nextProps;
            }
            return hasPropsChanged(prevProps, nextProps, emits);
          } else if (patchFlag & 8) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
              const key = dynamicProps[i];
              if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
                return true;
              }
            }
          }
        } else {
          if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
              return true;
            }
          }
          if (prevProps === nextProps) {
            return false;
          }
          if (!prevProps) {
            return !!nextProps;
          }
          if (!nextProps) {
            return true;
          }
          return hasPropsChanged(prevProps, nextProps, emits);
        }
        return false;
      }
      function hasPropsChanged(prevProps, nextProps, emitsOptions) {
        const nextKeys = Object.keys(nextProps);
        if (nextKeys.length !== Object.keys(prevProps).length) {
          return true;
        }
        for (let i = 0; i < nextKeys.length; i++) {
          const key = nextKeys[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
            return true;
          }
        }
        return false;
      }
      function updateHOCHostEl({ vnode, parent }, el2) {
        while (parent && parent.subTree === vnode) {
          (vnode = parent.vnode).el = el2;
          parent = parent.parent;
        }
      }
      var isSuspense = (type) => type.__isSuspense;
      var SuspenseImpl = {
        name: "Suspense",
        __isSuspense: true,
        process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
          if (n1 == null) {
            mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
          } else {
            patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
          }
        },
        hydrate: hydrateSuspense,
        create: createSuspenseBoundary,
        normalize: normalizeSuspenseChildren
      };
      var Suspense = SuspenseImpl;
      function triggerEvent(vnode, name) {
        const eventListener = vnode.props && vnode.props[name];
        if (shared.isFunction(eventListener)) {
          eventListener();
        }
      }
      function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
        const { p: patch, o: { createElement } } = rendererInternals;
        const hiddenContainer = createElement("div");
        const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals);
        patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
        if (suspense.deps > 0) {
          triggerEvent(vnode, "onPending");
          triggerEvent(vnode, "onFallback");
          patch(null, vnode.ssFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds);
          setActiveBranch(suspense, vnode.ssFallback);
        } else {
          suspense.resolve();
        }
      }
      function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
        const suspense = n2.suspense = n1.suspense;
        suspense.vnode = n2;
        n2.el = n1.el;
        const newBranch = n2.ssContent;
        const newFallback = n2.ssFallback;
        const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
        if (pendingBranch) {
          suspense.pendingBranch = newBranch;
          if (isSameVNodeType(newBranch, pendingBranch)) {
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) {
              suspense.resolve();
            } else if (isInFallback) {
              patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
              setActiveBranch(suspense, newFallback);
            }
          } else {
            suspense.pendingId++;
            if (isHydrating) {
              suspense.isHydrating = false;
              suspense.activeBranch = pendingBranch;
            } else {
              unmount(pendingBranch, parentComponent, suspense);
            }
            suspense.deps = 0;
            suspense.effects.length = 0;
            suspense.hiddenContainer = createElement("div");
            if (isInFallback) {
              patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
              if (suspense.deps <= 0) {
                suspense.resolve();
              } else {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, newFallback);
              }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
              patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
              suspense.resolve(true);
            } else {
              patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
              if (suspense.deps <= 0) {
                suspense.resolve();
              }
            }
          }
        } else {
          if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            setActiveBranch(suspense, newBranch);
          } else {
            triggerEvent(n2, "onPending");
            suspense.pendingBranch = newBranch;
            suspense.pendingId++;
            patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) {
              suspense.resolve();
            } else {
              const { timeout, pendingId } = suspense;
              if (timeout > 0) {
                setTimeout(() => {
                  if (suspense.pendingId === pendingId) {
                    suspense.fallback(newFallback);
                  }
                }, timeout);
              } else if (timeout === 0) {
                suspense.fallback(newFallback);
              }
            }
          }
        }
      }
      var hasWarned = false;
      function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
        if (!hasWarned) {
          hasWarned = true;
          console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
        }
        const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
        const timeout = shared.toNumber(vnode.props && vnode.props.timeout);
        const suspense = {
          vnode,
          parent,
          parentComponent,
          isSVG,
          container,
          hiddenContainer,
          anchor,
          deps: 0,
          pendingId: 0,
          timeout: typeof timeout === "number" ? timeout : -1,
          activeBranch: null,
          pendingBranch: null,
          isInFallback: true,
          isHydrating,
          isUnmounted: false,
          effects: [],
          resolve(resume = false) {
            {
              if (!resume && !suspense.pendingBranch) {
                throw new Error(`suspense.resolve() is called without a pending branch.`);
              }
              if (suspense.isUnmounted) {
                throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
              }
            }
            const { vnode: vnode2, activeBranch, pendingBranch, pendingId, effects, parentComponent: parentComponent2, container: container2 } = suspense;
            if (suspense.isHydrating) {
              suspense.isHydrating = false;
            } else if (!resume) {
              const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
              if (delayEnter) {
                activeBranch.transition.afterLeave = () => {
                  if (pendingId === suspense.pendingId) {
                    move(pendingBranch, container2, anchor2, 0);
                  }
                };
              }
              let { anchor: anchor2 } = suspense;
              if (activeBranch) {
                anchor2 = next(activeBranch);
                unmount(activeBranch, parentComponent2, suspense, true);
              }
              if (!delayEnter) {
                move(pendingBranch, container2, anchor2, 0);
              }
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            let parent2 = suspense.parent;
            let hasUnresolvedAncestor = false;
            while (parent2) {
              if (parent2.pendingBranch) {
                parent2.effects.push(...effects);
                hasUnresolvedAncestor = true;
                break;
              }
              parent2 = parent2.parent;
            }
            if (!hasUnresolvedAncestor) {
              queuePostFlushCb(effects);
            }
            suspense.effects = [];
            triggerEvent(vnode2, "onResolve");
          },
          fallback(fallbackVNode) {
            if (!suspense.pendingBranch) {
              return;
            }
            const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, isSVG: isSVG2 } = suspense;
            triggerEvent(vnode2, "onFallback");
            const anchor2 = next(activeBranch);
            const mountFallback = () => {
              if (!suspense.isInFallback) {
                return;
              }
              patch(null, fallbackVNode, container2, anchor2, parentComponent2, null, isSVG2, slotScopeIds, optimized);
              setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
            if (delayEnter) {
              activeBranch.transition.afterLeave = mountFallback;
            }
            suspense.isInFallback = true;
            unmount(activeBranch, parentComponent2, null, true);
            if (!delayEnter) {
              mountFallback();
            }
          },
          move(container2, anchor2, type) {
            suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
            suspense.container = container2;
          },
          next() {
            return suspense.activeBranch && next(suspense.activeBranch);
          },
          registerDep(instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) {
              suspense.deps++;
            }
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err) => {
              handleError(err, instance, 0);
            }).then((asyncSetupResult) => {
              if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
                return;
              }
              instance.asyncResolved = true;
              const { vnode: vnode2 } = instance;
              {
                pushWarningContext(vnode2);
              }
              handleSetupResult(instance, asyncSetupResult, false);
              if (hydratedEl) {
                vnode2.el = hydratedEl;
              }
              const placeholder = !hydratedEl && instance.subTree.el;
              setupRenderEffect(instance, vnode2, parentNode(hydratedEl || instance.subTree.el), hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
              if (placeholder) {
                remove(placeholder);
              }
              updateHOCHostEl(instance, vnode2.el);
              {
                popWarningContext();
              }
              if (isInPendingSuspense && --suspense.deps === 0) {
                suspense.resolve();
              }
            });
          },
          unmount(parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) {
              unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            }
            if (suspense.pendingBranch) {
              unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
            }
          }
        };
        return suspense;
      }
      function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
        const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement("div"), null, isSVG, slotScopeIds, optimized, rendererInternals, true);
        const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
        if (suspense.deps === 0) {
          suspense.resolve();
        }
        return result;
      }
      function normalizeSuspenseChildren(vnode) {
        const { shapeFlag, children } = vnode;
        const isSlotChildren = shapeFlag & 32;
        vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
        vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
      }
      function normalizeSuspenseSlot(s2) {
        let block;
        if (shared.isFunction(s2)) {
          const trackBlock = isBlockTreeEnabled && s2._c;
          if (trackBlock) {
            s2._d = false;
            openBlock();
          }
          s2 = s2();
          if (trackBlock) {
            s2._d = true;
            block = currentBlock;
            closeBlock();
          }
        }
        if (shared.isArray(s2)) {
          const singleChild = filterSingleRoot(s2);
          if (!singleChild) {
            warn2(`<Suspense> slots expect a single root node.`);
          }
          s2 = singleChild;
        }
        s2 = normalizeVNode(s2);
        if (block && !s2.dynamicChildren) {
          s2.dynamicChildren = block.filter((c) => c !== s2);
        }
        return s2;
      }
      function queueEffectWithSuspense(fn2, suspense) {
        if (suspense && suspense.pendingBranch) {
          if (shared.isArray(fn2)) {
            suspense.effects.push(...fn2);
          } else {
            suspense.effects.push(fn2);
          }
        } else {
          queuePostFlushCb(fn2);
        }
      }
      function setActiveBranch(suspense, branch) {
        suspense.activeBranch = branch;
        const { vnode, parentComponent } = suspense;
        const el2 = vnode.el = branch.el;
        if (parentComponent && parentComponent.subTree === vnode) {
          parentComponent.vnode.el = el2;
          updateHOCHostEl(parentComponent, el2);
        }
      }
      function provide2(key, value) {
        if (!currentInstance) {
          {
            warn2(`provide() can only be used inside setup().`);
          }
        } else {
          let provides = currentInstance.provides;
          const parentProvides = currentInstance.parent && currentInstance.parent.provides;
          if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
          }
          provides[key] = value;
        }
      }
      function inject4(key, defaultValue, treatDefaultAsFactory = false) {
        const instance = currentInstance || currentRenderingInstance;
        if (instance) {
          const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
          if (provides && key in provides) {
            return provides[key];
          } else if (arguments.length > 1) {
            return treatDefaultAsFactory && shared.isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
          } else {
            warn2(`injection "${String(key)}" not found.`);
          }
        } else {
          warn2(`inject() can only be used inside setup() or functional components.`);
        }
      }
      function watchEffect3(effect, options) {
        return doWatch(effect, null, options);
      }
      function watchPostEffect(effect, options) {
        return doWatch(effect, null, __spreadProps(__spreadValues({}, options), { flush: "post" }));
      }
      function watchSyncEffect(effect, options) {
        return doWatch(effect, null, __spreadProps(__spreadValues({}, options), { flush: "sync" }));
      }
      var INITIAL_WATCHER_VALUE = {};
      function watch13(source, cb, options) {
        if (!shared.isFunction(cb)) {
          warn2(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
        }
        return doWatch(source, cb, options);
      }
      function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = shared.EMPTY_OBJ) {
        if (!cb) {
          if (immediate !== void 0) {
            warn2(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
          }
          if (deep !== void 0) {
            warn2(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
          }
        }
        const warnInvalidSource = (s2) => {
          warn2(`Invalid watch source: `, s2, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
        };
        const instance = currentInstance;
        let getter;
        let forceTrigger = false;
        let isMultiSource = false;
        if (reactivity.isRef(source)) {
          getter = () => source.value;
          forceTrigger = reactivity.isShallow(source);
        } else if (reactivity.isReactive(source)) {
          getter = () => source;
          deep = true;
        } else if (shared.isArray(source)) {
          isMultiSource = true;
          forceTrigger = source.some((s2) => reactivity.isReactive(s2) || reactivity.isShallow(s2));
          getter = () => source.map((s2) => {
            if (reactivity.isRef(s2)) {
              return s2.value;
            } else if (reactivity.isReactive(s2)) {
              return traverse(s2);
            } else if (shared.isFunction(s2)) {
              return callWithErrorHandling(s2, instance, 2);
            } else {
              warnInvalidSource(s2);
            }
          });
        } else if (shared.isFunction(source)) {
          if (cb) {
            getter = () => callWithErrorHandling(source, instance, 2);
          } else {
            getter = () => {
              if (instance && instance.isUnmounted) {
                return;
              }
              if (cleanup) {
                cleanup();
              }
              return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
            };
          }
        } else {
          getter = shared.NOOP;
          warnInvalidSource(source);
        }
        if (cb && deep) {
          const baseGetter = getter;
          getter = () => traverse(baseGetter());
        }
        let cleanup;
        let onCleanup = (fn2) => {
          cleanup = effect.onStop = () => {
            callWithErrorHandling(fn2, instance, 4);
          };
        };
        if (isInSSRComponentSetup) {
          onCleanup = shared.NOOP;
          if (!cb) {
            getter();
          } else if (immediate) {
            callWithAsyncErrorHandling(cb, instance, 3, [
              getter(),
              isMultiSource ? [] : void 0,
              onCleanup
            ]);
          }
          return shared.NOOP;
        }
        let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
        const job = () => {
          if (!effect.active) {
            return;
          }
          if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => shared.hasChanged(v, oldValue[i])) : shared.hasChanged(newValue, oldValue)) || false) {
              if (cleanup) {
                cleanup();
              }
              callWithAsyncErrorHandling(cb, instance, 3, [
                newValue,
                oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
                onCleanup
              ]);
              oldValue = newValue;
            }
          } else {
            effect.run();
          }
        };
        job.allowRecurse = !!cb;
        let scheduler;
        if (flush === "sync") {
          scheduler = job;
        } else if (flush === "post") {
          scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
        } else {
          job.pre = true;
          if (instance)
            job.id = instance.uid;
          scheduler = () => queueJob(job);
        }
        const effect = new reactivity.ReactiveEffect(getter, scheduler);
        {
          effect.onTrack = onTrack;
          effect.onTrigger = onTrigger;
        }
        if (cb) {
          if (immediate) {
            job();
          } else {
            oldValue = effect.run();
          }
        } else if (flush === "post") {
          queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
        } else {
          effect.run();
        }
        return () => {
          effect.stop();
          if (instance && instance.scope) {
            shared.remove(instance.scope.effects, effect);
          }
        };
      }
      function instanceWatch(source, value, options) {
        const publicThis = this.proxy;
        const getter = shared.isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
        let cb;
        if (shared.isFunction(value)) {
          cb = value;
        } else {
          cb = value.handler;
          options = value;
        }
        const cur = currentInstance;
        setCurrentInstance(this);
        const res = doWatch(getter, cb.bind(publicThis), options);
        if (cur) {
          setCurrentInstance(cur);
        } else {
          unsetCurrentInstance();
        }
        return res;
      }
      function createPathGetter(ctx, path) {
        const segments = path.split(".");
        return () => {
          let cur = ctx;
          for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
          }
          return cur;
        };
      }
      function traverse(value, seen) {
        if (!shared.isObject(value) || value["__v_skip"]) {
          return value;
        }
        seen = seen || /* @__PURE__ */ new Set();
        if (seen.has(value)) {
          return value;
        }
        seen.add(value);
        if (reactivity.isRef(value)) {
          traverse(value.value, seen);
        } else if (shared.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
          }
        } else if (shared.isSet(value) || shared.isMap(value)) {
          value.forEach((v) => {
            traverse(v, seen);
          });
        } else if (shared.isPlainObject(value)) {
          for (const key in value) {
            traverse(value[key], seen);
          }
        }
        return value;
      }
      function useTransitionState() {
        const state = {
          isMounted: false,
          isLeaving: false,
          isUnmounting: false,
          leavingVNodes: /* @__PURE__ */ new Map()
        };
        onMounted10(() => {
          state.isMounted = true;
        });
        onBeforeUnmount2(() => {
          state.isUnmounting = true;
        });
        return state;
      }
      var TransitionHookValidator = [Function, Array];
      var BaseTransitionImpl = {
        name: `BaseTransition`,
        props: {
          mode: String,
          appear: Boolean,
          persisted: Boolean,
          onBeforeEnter: TransitionHookValidator,
          onEnter: TransitionHookValidator,
          onAfterEnter: TransitionHookValidator,
          onEnterCancelled: TransitionHookValidator,
          onBeforeLeave: TransitionHookValidator,
          onLeave: TransitionHookValidator,
          onAfterLeave: TransitionHookValidator,
          onLeaveCancelled: TransitionHookValidator,
          onBeforeAppear: TransitionHookValidator,
          onAppear: TransitionHookValidator,
          onAfterAppear: TransitionHookValidator,
          onAppearCancelled: TransitionHookValidator
        },
        setup(props, { slots }) {
          const instance = getCurrentInstance4();
          const state = useTransitionState();
          let prevTransitionKey;
          return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
              return;
            }
            let child = children[0];
            if (children.length > 1) {
              let hasFound = false;
              for (const c of children) {
                if (c.type !== Comment) {
                  if (hasFound) {
                    warn2("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                    break;
                  }
                  child = c;
                  hasFound = true;
                }
              }
            }
            const rawProps = reactivity.toRaw(props);
            const { mode } = rawProps;
            if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
              warn2(`invalid <transition> mode: ${mode}`);
            }
            if (state.isLeaving) {
              return emptyPlaceholder(child);
            }
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
              return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
              const key = getTransitionKey();
              if (prevTransitionKey === void 0) {
                prevTransitionKey = key;
              } else if (key !== prevTransitionKey) {
                prevTransitionKey = key;
                transitionKeyChanged = true;
              }
            }
            if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
              const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
              setTransitionHooks(oldInnerChild, leavingHooks);
              if (mode === "out-in") {
                state.isLeaving = true;
                leavingHooks.afterLeave = () => {
                  state.isLeaving = false;
                  instance.update();
                };
                return emptyPlaceholder(child);
              } else if (mode === "in-out" && innerChild.type !== Comment) {
                leavingHooks.delayLeave = (el2, earlyRemove, delayedLeave) => {
                  const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                  leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                  el2._leaveCb = () => {
                    earlyRemove();
                    el2._leaveCb = void 0;
                    delete enterHooks.delayedLeave;
                  };
                  enterHooks.delayedLeave = delayedLeave;
                };
              }
            }
            return child;
          };
        }
      };
      var BaseTransition = BaseTransitionImpl;
      function getLeavingNodesForType(state, vnode) {
        const { leavingVNodes } = state;
        let leavingVNodesCache = leavingVNodes.get(vnode.type);
        if (!leavingVNodesCache) {
          leavingVNodesCache = /* @__PURE__ */ Object.create(null);
          leavingVNodes.set(vnode.type, leavingVNodesCache);
        }
        return leavingVNodesCache;
      }
      function resolveTransitionHooks(vnode, props, state, instance) {
        const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
        const key = String(vnode.key);
        const leavingVNodesCache = getLeavingNodesForType(state, vnode);
        const callHook2 = (hook, args) => {
          hook && callWithAsyncErrorHandling(hook, instance, 9, args);
        };
        const callAsyncHook = (hook, args) => {
          const done = args[1];
          callHook2(hook, args);
          if (shared.isArray(hook)) {
            if (hook.every((hook2) => hook2.length <= 1))
              done();
          } else if (hook.length <= 1) {
            done();
          }
        };
        const hooks = {
          mode,
          persisted,
          beforeEnter(el2) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
              if (appear) {
                hook = onBeforeAppear || onBeforeEnter;
              } else {
                return;
              }
            }
            if (el2._leaveCb) {
              el2._leaveCb(true);
            }
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
              leavingVNode.el._leaveCb();
            }
            callHook2(hook, [el2]);
          },
          enter(el2) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
              if (appear) {
                hook = onAppear || onEnter;
                afterHook = onAfterAppear || onAfterEnter;
                cancelHook = onAppearCancelled || onEnterCancelled;
              } else {
                return;
              }
            }
            let called = false;
            const done = el2._enterCb = (cancelled) => {
              if (called)
                return;
              called = true;
              if (cancelled) {
                callHook2(cancelHook, [el2]);
              } else {
                callHook2(afterHook, [el2]);
              }
              if (hooks.delayedLeave) {
                hooks.delayedLeave();
              }
              el2._enterCb = void 0;
            };
            if (hook) {
              callAsyncHook(hook, [el2, done]);
            } else {
              done();
            }
          },
          leave(el2, remove) {
            const key2 = String(vnode.key);
            if (el2._enterCb) {
              el2._enterCb(true);
            }
            if (state.isUnmounting) {
              return remove();
            }
            callHook2(onBeforeLeave, [el2]);
            let called = false;
            const done = el2._leaveCb = (cancelled) => {
              if (called)
                return;
              called = true;
              remove();
              if (cancelled) {
                callHook2(onLeaveCancelled, [el2]);
              } else {
                callHook2(onAfterLeave, [el2]);
              }
              el2._leaveCb = void 0;
              if (leavingVNodesCache[key2] === vnode) {
                delete leavingVNodesCache[key2];
              }
            };
            leavingVNodesCache[key2] = vnode;
            if (onLeave) {
              callAsyncHook(onLeave, [el2, done]);
            } else {
              done();
            }
          },
          clone(vnode2) {
            return resolveTransitionHooks(vnode2, props, state, instance);
          }
        };
        return hooks;
      }
      function emptyPlaceholder(vnode) {
        if (isKeepAlive(vnode)) {
          vnode = cloneVNode(vnode);
          vnode.children = null;
          return vnode;
        }
      }
      function getKeepAliveChild(vnode) {
        return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
      }
      function setTransitionHooks(vnode, hooks) {
        if (vnode.shapeFlag & 6 && vnode.component) {
          setTransitionHooks(vnode.component.subTree, hooks);
        } else if (vnode.shapeFlag & 128) {
          vnode.ssContent.transition = hooks.clone(vnode.ssContent);
          vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
        } else {
          vnode.transition = hooks;
        }
      }
      function getTransitionRawChildren(children, keepComment = false, parentKey) {
        let ret = [];
        let keyedFragmentCount = 0;
        for (let i = 0; i < children.length; i++) {
          let child = children[i];
          const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
          if (child.type === Fragment) {
            if (child.patchFlag & 128)
              keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
          } else if (keepComment || child.type !== Comment) {
            ret.push(key != null ? cloneVNode(child, { key }) : child);
          }
        }
        if (keyedFragmentCount > 1) {
          for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2;
          }
        }
        return ret;
      }
      function defineComponent(options) {
        return shared.isFunction(options) ? { setup: options, name: options.name } : options;
      }
      var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
      function defineAsyncComponent(source) {
        if (shared.isFunction(source)) {
          source = { loader: source };
        }
        const {
          loader,
          loadingComponent,
          errorComponent,
          delay = 200,
          timeout,
          suspensible = true,
          onError: userOnError
        } = source;
        let pendingRequest = null;
        let resolvedComp;
        let retries = 0;
        const retry = () => {
          retries++;
          pendingRequest = null;
          return load();
        };
        const load = () => {
          let thisRequest;
          return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) {
              return new Promise((resolve2, reject) => {
                const userRetry = () => resolve2(retry());
                const userFail = () => reject(err);
                userOnError(err, userRetry, userFail, retries + 1);
              });
            } else {
              throw err;
            }
          }).then((comp) => {
            if (thisRequest !== pendingRequest && pendingRequest) {
              return pendingRequest;
            }
            if (!comp) {
              warn2(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
            }
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
              comp = comp.default;
            }
            if (comp && !shared.isObject(comp) && !shared.isFunction(comp)) {
              throw new Error(`Invalid async component load result: ${comp}`);
            }
            resolvedComp = comp;
            return comp;
          }));
        };
        return defineComponent({
          name: "AsyncComponentWrapper",
          __asyncLoader: load,
          get __asyncResolved() {
            return resolvedComp;
          },
          setup() {
            const instance = currentInstance;
            if (resolvedComp) {
              return () => createInnerComp(resolvedComp, instance);
            }
            const onError = (err) => {
              pendingRequest = null;
              handleError(err, instance, 13, !errorComponent);
            };
            if (suspensible && instance.suspense || isInSSRComponentSetup) {
              return load().then((comp) => {
                return () => createInnerComp(comp, instance);
              }).catch((err) => {
                onError(err);
                return () => errorComponent ? createVNode(errorComponent, {
                  error: err
                }) : null;
              });
            }
            const loaded = reactivity.ref(false);
            const error = reactivity.ref();
            const delayed = reactivity.ref(!!delay);
            if (delay) {
              setTimeout(() => {
                delayed.value = false;
              }, delay);
            }
            if (timeout != null) {
              setTimeout(() => {
                if (!loaded.value && !error.value) {
                  const err = new Error(`Async component timed out after ${timeout}ms.`);
                  onError(err);
                  error.value = err;
                }
              }, timeout);
            }
            load().then(() => {
              loaded.value = true;
              if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                queueJob(instance.parent.update);
              }
            }).catch((err) => {
              onError(err);
              error.value = err;
            });
            return () => {
              if (loaded.value && resolvedComp) {
                return createInnerComp(resolvedComp, instance);
              } else if (error.value && errorComponent) {
                return createVNode(errorComponent, {
                  error: error.value
                });
              } else if (loadingComponent && !delayed.value) {
                return createVNode(loadingComponent);
              }
            };
          }
        });
      }
      function createInnerComp(comp, { vnode: { ref: ref17, props, children, shapeFlag }, parent }) {
        const vnode = createVNode(comp, props, children);
        vnode.ref = ref17;
        return vnode;
      }
      var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
      var KeepAliveImpl = {
        name: `KeepAlive`,
        __isKeepAlive: true,
        props: {
          include: [String, RegExp, Array],
          exclude: [String, RegExp, Array],
          max: [String, Number]
        },
        setup(props, { slots }) {
          const instance = getCurrentInstance4();
          const sharedContext = instance.ctx;
          if (!sharedContext.renderer) {
            return () => {
              const children = slots.default && slots.default();
              return children && children.length === 1 ? children[0] : children;
            };
          }
          const cache = /* @__PURE__ */ new Map();
          const keys = /* @__PURE__ */ new Set();
          let current = null;
          {
            instance.__v_cache = cache;
          }
          const parentSuspense = instance.suspense;
          const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
          const storageContainer = createElement("div");
          sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance2 = vnode.component;
            move(vnode, container, anchor, 0, parentSuspense);
            patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(() => {
              instance2.isDeactivated = false;
              if (instance2.a) {
                shared.invokeArrayFns(instance2.a);
              }
              const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
              if (vnodeHook) {
                invokeVNodeHook(vnodeHook, instance2.parent, vnode);
              }
            }, parentSuspense);
            {
              devtoolsComponentAdded(instance2);
            }
          };
          sharedContext.deactivate = (vnode) => {
            const instance2 = vnode.component;
            move(vnode, storageContainer, null, 1, parentSuspense);
            queuePostRenderEffect(() => {
              if (instance2.da) {
                shared.invokeArrayFns(instance2.da);
              }
              const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
              if (vnodeHook) {
                invokeVNodeHook(vnodeHook, instance2.parent, vnode);
              }
              instance2.isDeactivated = true;
            }, parentSuspense);
            {
              devtoolsComponentAdded(instance2);
            }
          };
          function unmount(vnode) {
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
          }
          function pruneCache(filter) {
            cache.forEach((vnode, key) => {
              const name = getComponentName(vnode.type);
              if (name && (!filter || !filter(name))) {
                pruneCacheEntry(key);
              }
            });
          }
          function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) {
              unmount(cached);
            } else if (current) {
              resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
          }
          watch13(() => [props.include, props.exclude], ([include, exclude]) => {
            include && pruneCache((name) => matches(include, name));
            exclude && pruneCache((name) => !matches(exclude, name));
          }, { flush: "post", deep: true });
          let pendingCacheKey = null;
          const cacheSubtree = () => {
            if (pendingCacheKey != null) {
              cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
          };
          onMounted10(cacheSubtree);
          onUpdated2(cacheSubtree);
          onBeforeUnmount2(() => {
            cache.forEach((cached) => {
              const { subTree, suspense } = instance;
              const vnode = getInnerChild(subTree);
              if (cached.type === vnode.type) {
                resetShapeFlag(vnode);
                const da2 = vnode.component.da;
                da2 && queuePostRenderEffect(da2, suspense);
                return;
              }
              unmount(cached);
            });
          });
          return () => {
            pendingCacheKey = null;
            if (!slots.default) {
              return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
              {
                warn2(`KeepAlive should contain exactly one component child.`);
              }
              current = null;
              return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
              current = null;
              return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include, exclude, max } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
              current = vnode;
              return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            if (vnode.el) {
              vnode = cloneVNode(vnode);
              if (rawVNode.shapeFlag & 128) {
                rawVNode.ssContent = vnode;
              }
            }
            pendingCacheKey = key;
            if (cachedVNode) {
              vnode.el = cachedVNode.el;
              vnode.component = cachedVNode.component;
              if (vnode.transition) {
                setTransitionHooks(vnode, vnode.transition);
              }
              vnode.shapeFlag |= 512;
              keys.delete(key);
              keys.add(key);
            } else {
              keys.add(key);
              if (max && keys.size > parseInt(max, 10)) {
                pruneCacheEntry(keys.values().next().value);
              }
            }
            vnode.shapeFlag |= 256;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
          };
        }
      };
      var KeepAlive = KeepAliveImpl;
      function matches(pattern, name) {
        if (shared.isArray(pattern)) {
          return pattern.some((p) => matches(p, name));
        } else if (shared.isString(pattern)) {
          return pattern.split(",").includes(name);
        } else if (pattern.test) {
          return pattern.test(name);
        }
        return false;
      }
      function onActivated(hook, target) {
        registerKeepAliveHook(hook, "a", target);
      }
      function onDeactivated(hook, target) {
        registerKeepAliveHook(hook, "da", target);
      }
      function registerKeepAliveHook(hook, type, target = currentInstance) {
        const wrappedHook = hook.__wdc || (hook.__wdc = () => {
          let current = target;
          while (current) {
            if (current.isDeactivated) {
              return;
            }
            current = current.parent;
          }
          return hook();
        });
        injectHook(type, wrappedHook, target);
        if (target) {
          let current = target.parent;
          while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
              injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
          }
        }
      }
      function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
        const injected = injectHook(type, hook, keepAliveRoot, true);
        onUnmounted3(() => {
          shared.remove(keepAliveRoot[type], injected);
        }, target);
      }
      function resetShapeFlag(vnode) {
        let shapeFlag = vnode.shapeFlag;
        if (shapeFlag & 256) {
          shapeFlag -= 256;
        }
        if (shapeFlag & 512) {
          shapeFlag -= 512;
        }
        vnode.shapeFlag = shapeFlag;
      }
      function getInnerChild(vnode) {
        return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
      }
      function injectHook(type, hook, target = currentInstance, prepend = false) {
        if (target) {
          const hooks = target[type] || (target[type] = []);
          const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
            if (target.isUnmounted) {
              return;
            }
            reactivity.pauseTracking();
            setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            unsetCurrentInstance();
            reactivity.resetTracking();
            return res;
          });
          if (prepend) {
            hooks.unshift(wrappedHook);
          } else {
            hooks.push(wrappedHook);
          }
          return wrappedHook;
        } else {
          const apiName = shared.toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
          warn2(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
        }
      }
      var createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
      var onBeforeMount2 = createHook("bm");
      var onMounted10 = createHook("m");
      var onBeforeUpdate2 = createHook("bu");
      var onUpdated2 = createHook("u");
      var onBeforeUnmount2 = createHook("bum");
      var onUnmounted3 = createHook("um");
      var onServerPrefetch = createHook("sp");
      var onRenderTriggered = createHook("rtg");
      var onRenderTracked = createHook("rtc");
      function onErrorCaptured(hook, target = currentInstance) {
        injectHook("ec", hook, target);
      }
      function validateDirectiveName(name) {
        if (shared.isBuiltInDirective(name)) {
          warn2("Do not use built-in directive ids as custom directive id: " + name);
        }
      }
      function withDirectives(vnode, directives) {
        const internalInstance = currentRenderingInstance;
        if (internalInstance === null) {
          warn2(`withDirectives can only be used inside render functions.`);
          return vnode;
        }
        const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
        const bindings = vnode.dirs || (vnode.dirs = []);
        for (let i = 0; i < directives.length; i++) {
          let [dir, value, arg, modifiers = shared.EMPTY_OBJ] = directives[i];
          if (shared.isFunction(dir)) {
            dir = {
              mounted: dir,
              updated: dir
            };
          }
          if (dir.deep) {
            traverse(value);
          }
          bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
          });
        }
        return vnode;
      }
      function invokeDirectiveHook(vnode, prevVNode, instance, name) {
        const bindings = vnode.dirs;
        const oldBindings = prevVNode && prevVNode.dirs;
        for (let i = 0; i < bindings.length; i++) {
          const binding = bindings[i];
          if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
          }
          let hook = binding.dir[name];
          if (hook) {
            reactivity.pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8, [
              vnode.el,
              binding,
              vnode,
              prevVNode
            ]);
            reactivity.resetTracking();
          }
        }
      }
      var COMPONENTS = "components";
      var DIRECTIVES = "directives";
      function resolveComponent(name, maybeSelfReference) {
        return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
      }
      var NULL_DYNAMIC_COMPONENT = Symbol();
      function resolveDynamicComponent(component) {
        if (shared.isString(component)) {
          return resolveAsset(COMPONENTS, component, false) || component;
        } else {
          return component || NULL_DYNAMIC_COMPONENT;
        }
      }
      function resolveDirective(name) {
        return resolveAsset(DIRECTIVES, name);
      }
      function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
        const instance = currentRenderingInstance || currentInstance;
        if (instance) {
          const Component = instance.type;
          if (type === COMPONENTS) {
            const selfName = getComponentName(Component, false);
            if (selfName && (selfName === name || selfName === shared.camelize(name) || selfName === shared.capitalize(shared.camelize(name)))) {
              return Component;
            }
          }
          const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
          if (!res && maybeSelfReference) {
            return Component;
          }
          if (warnMissing && !res) {
            const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
            warn2(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
          }
          return res;
        } else {
          warn2(`resolve${shared.capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
        }
      }
      function resolve(registry, name) {
        return registry && (registry[name] || registry[shared.camelize(name)] || registry[shared.capitalize(shared.camelize(name))]);
      }
      function renderList(source, renderItem, cache, index) {
        let ret;
        const cached = cache && cache[index];
        if (shared.isArray(source) || shared.isString(source)) {
          ret = new Array(source.length);
          for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
          }
        } else if (typeof source === "number") {
          if (!Number.isInteger(source)) {
            warn2(`The v-for range expect an integer value but got ${source}.`);
          }
          ret = new Array(source);
          for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
          }
        } else if (shared.isObject(source)) {
          if (source[Symbol.iterator]) {
            ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
          } else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
              const key = keys[i];
              ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
          }
        } else {
          ret = [];
        }
        if (cache) {
          cache[index] = ret;
        }
        return ret;
      }
      function createSlots(slots, dynamicSlots) {
        for (let i = 0; i < dynamicSlots.length; i++) {
          const slot = dynamicSlots[i];
          if (shared.isArray(slot)) {
            for (let j = 0; j < slot.length; j++) {
              slots[slot[j].name] = slot[j].fn;
            }
          } else if (slot) {
            slots[slot.name] = slot.key ? (...args) => {
              const res = slot.fn(...args);
              res.key = slot.key;
              return res;
            } : slot.fn;
          }
        }
        return slots;
      }
      function renderSlot(slots, name, props = {}, fallback, noSlotted) {
        if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
          return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
        }
        let slot = slots[name];
        if (slot && slot.length > 1) {
          warn2(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
          slot = () => [];
        }
        if (slot && slot._c) {
          slot._d = false;
        }
        openBlock();
        const validSlotContent = slot && ensureValidVNode(slot(props));
        const rendered = createBlock(Fragment, {
          key: props.key || validSlotContent && validSlotContent.key || `_${name}`
        }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
        if (!noSlotted && rendered.scopeId) {
          rendered.slotScopeIds = [rendered.scopeId + "-s"];
        }
        if (slot && slot._c) {
          slot._d = true;
        }
        return rendered;
      }
      function ensureValidVNode(vnodes) {
        return vnodes.some((child) => {
          if (!isVNode(child))
            return true;
          if (child.type === Comment)
            return false;
          if (child.type === Fragment && !ensureValidVNode(child.children))
            return false;
          return true;
        }) ? vnodes : null;
      }
      function toHandlers(obj, preserveCaseIfNecessary) {
        const ret = {};
        if (!shared.isObject(obj)) {
          warn2(`v-on with no argument expects an object value.`);
          return ret;
        }
        for (const key in obj) {
          ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : shared.toHandlerKey(key)] = obj[key];
        }
        return ret;
      }
      var getPublicInstance = (i) => {
        if (!i)
          return null;
        if (isStatefulComponent(i))
          return getExposeProxy(i) || i.proxy;
        return getPublicInstance(i.parent);
      };
      var publicPropertiesMap = /* @__PURE__ */ shared.extend(/* @__PURE__ */ Object.create(null), {
        $: (i) => i,
        $el: (i) => i.vnode.el,
        $data: (i) => i.data,
        $props: (i) => reactivity.shallowReadonly(i.props),
        $attrs: (i) => reactivity.shallowReadonly(i.attrs),
        $slots: (i) => reactivity.shallowReadonly(i.slots),
        $refs: (i) => reactivity.shallowReadonly(i.refs),
        $parent: (i) => getPublicInstance(i.parent),
        $root: (i) => getPublicInstance(i.root),
        $emit: (i) => i.emit,
        $options: (i) => resolveMergedOptions(i),
        $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
        $nextTick: (i) => i.n || (i.n = nextTick8.bind(i.proxy)),
        $watch: (i) => instanceWatch.bind(i)
      });
      var isReservedPrefix = (key) => key === "_" || key === "$";
      var PublicInstanceProxyHandlers = {
        get({ _: instance }, key) {
          const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
          if (key === "__isVue") {
            return true;
          }
          if (setupState !== shared.EMPTY_OBJ && setupState.__isScriptSetup && shared.hasOwn(setupState, key)) {
            return setupState[key];
          }
          let normalizedProps;
          if (key[0] !== "$") {
            const n = accessCache[key];
            if (n !== void 0) {
              switch (n) {
                case 1:
                  return setupState[key];
                case 2:
                  return data[key];
                case 4:
                  return ctx[key];
                case 3:
                  return props[key];
              }
            } else if (setupState !== shared.EMPTY_OBJ && shared.hasOwn(setupState, key)) {
              accessCache[key] = 1;
              return setupState[key];
            } else if (data !== shared.EMPTY_OBJ && shared.hasOwn(data, key)) {
              accessCache[key] = 2;
              return data[key];
            } else if ((normalizedProps = instance.propsOptions[0]) && shared.hasOwn(normalizedProps, key)) {
              accessCache[key] = 3;
              return props[key];
            } else if (ctx !== shared.EMPTY_OBJ && shared.hasOwn(ctx, key)) {
              accessCache[key] = 4;
              return ctx[key];
            } else if (shouldCacheAccess) {
              accessCache[key] = 0;
            }
          }
          const publicGetter = publicPropertiesMap[key];
          let cssModule, globalProperties;
          if (publicGetter) {
            if (key === "$attrs") {
              reactivity.track(instance, "get", key);
              markAttrsAccessed();
            }
            return publicGetter(instance);
          } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
            return cssModule;
          } else if (ctx !== shared.EMPTY_OBJ && shared.hasOwn(ctx, key)) {
            accessCache[key] = 4;
            return ctx[key];
          } else if (globalProperties = appContext.config.globalProperties, shared.hasOwn(globalProperties, key)) {
            {
              return globalProperties[key];
            }
          } else if (currentRenderingInstance && (!shared.isString(key) || key.indexOf("__v") !== 0)) {
            if (data !== shared.EMPTY_OBJ && isReservedPrefix(key[0]) && shared.hasOwn(data, key)) {
              warn2(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
            } else if (instance === currentRenderingInstance) {
              warn2(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
            }
          }
        },
        set({ _: instance }, key, value) {
          const { data, setupState, ctx } = instance;
          if (setupState !== shared.EMPTY_OBJ && shared.hasOwn(setupState, key)) {
            setupState[key] = value;
            return true;
          } else if (data !== shared.EMPTY_OBJ && shared.hasOwn(data, key)) {
            data[key] = value;
            return true;
          } else if (shared.hasOwn(instance.props, key)) {
            warn2(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
            return false;
          }
          if (key[0] === "$" && key.slice(1) in instance) {
            warn2(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`, instance);
            return false;
          } else {
            if (key in instance.appContext.config.globalProperties) {
              Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                value
              });
            } else {
              ctx[key] = value;
            }
          }
          return true;
        },
        has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
          let normalizedProps;
          return !!accessCache[key] || data !== shared.EMPTY_OBJ && shared.hasOwn(data, key) || setupState !== shared.EMPTY_OBJ && shared.hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && shared.hasOwn(normalizedProps, key) || shared.hasOwn(ctx, key) || shared.hasOwn(publicPropertiesMap, key) || shared.hasOwn(appContext.config.globalProperties, key);
        },
        defineProperty(target, key, descriptor) {
          if (descriptor.get != null) {
            target._.accessCache[key] = 0;
          } else if (shared.hasOwn(descriptor, "value")) {
            this.set(target, key, descriptor.value, null);
          }
          return Reflect.defineProperty(target, key, descriptor);
        }
      };
      {
        PublicInstanceProxyHandlers.ownKeys = (target) => {
          warn2(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
          return Reflect.ownKeys(target);
        };
      }
      var RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ shared.extend({}, PublicInstanceProxyHandlers, {
        get(target, key) {
          if (key === Symbol.unscopables) {
            return;
          }
          return PublicInstanceProxyHandlers.get(target, key, target);
        },
        has(_, key) {
          const has = key[0] !== "_" && !shared.isGloballyWhitelisted(key);
          if (!has && PublicInstanceProxyHandlers.has(_, key)) {
            warn2(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
          }
          return has;
        }
      });
      function createDevRenderContext(instance) {
        const target = {};
        Object.defineProperty(target, `_`, {
          configurable: true,
          enumerable: false,
          get: () => instance
        });
        Object.keys(publicPropertiesMap).forEach((key) => {
          Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => publicPropertiesMap[key](instance),
            set: shared.NOOP
          });
        });
        return target;
      }
      function exposePropsOnRenderContext(instance) {
        const { ctx, propsOptions: [propsOptions] } = instance;
        if (propsOptions) {
          Object.keys(propsOptions).forEach((key) => {
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => instance.props[key],
              set: shared.NOOP
            });
          });
        }
      }
      function exposeSetupStateOnRenderContext(instance) {
        const { ctx, setupState } = instance;
        Object.keys(reactivity.toRaw(setupState)).forEach((key) => {
          if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
              warn2(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
              return;
            }
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => setupState[key],
              set: shared.NOOP
            });
          }
        });
      }
      function createDuplicateChecker() {
        const cache = /* @__PURE__ */ Object.create(null);
        return (type, key) => {
          if (cache[key]) {
            warn2(`${type} property "${key}" is already defined in ${cache[key]}.`);
          } else {
            cache[key] = type;
          }
        };
      }
      var shouldCacheAccess = true;
      function applyOptions(instance) {
        const options = resolveMergedOptions(instance);
        const publicThis = instance.proxy;
        const ctx = instance.ctx;
        shouldCacheAccess = false;
        if (options.beforeCreate) {
          callHook(options.beforeCreate, instance, "bc");
        }
        const {
          data: dataOptions,
          computed: computedOptions,
          methods,
          watch: watchOptions,
          provide: provideOptions,
          inject: injectOptions,
          created,
          beforeMount,
          mounted,
          beforeUpdate,
          updated,
          activated,
          deactivated,
          beforeDestroy,
          beforeUnmount,
          destroyed,
          unmounted,
          render: render22,
          renderTracked,
          renderTriggered,
          errorCaptured,
          serverPrefetch,
          expose,
          inheritAttrs,
          components,
          directives,
          filters
        } = options;
        const checkDuplicateProperties = createDuplicateChecker();
        {
          const [propsOptions] = instance.propsOptions;
          if (propsOptions) {
            for (const key in propsOptions) {
              checkDuplicateProperties("Props", key);
            }
          }
        }
        if (injectOptions) {
          resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
        }
        if (methods) {
          for (const key in methods) {
            const methodHandler = methods[key];
            if (shared.isFunction(methodHandler)) {
              {
                Object.defineProperty(ctx, key, {
                  value: methodHandler.bind(publicThis),
                  configurable: true,
                  enumerable: true,
                  writable: true
                });
              }
              {
                checkDuplicateProperties("Methods", key);
              }
            } else {
              warn2(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
            }
          }
        }
        if (dataOptions) {
          if (!shared.isFunction(dataOptions)) {
            warn2(`The data option must be a function. Plain object usage is no longer supported.`);
          }
          const data = dataOptions.call(publicThis, publicThis);
          if (shared.isPromise(data)) {
            warn2(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
          }
          if (!shared.isObject(data)) {
            warn2(`data() should return an object.`);
          } else {
            instance.data = reactivity.reactive(data);
            {
              for (const key in data) {
                checkDuplicateProperties("Data", key);
                if (!isReservedPrefix(key[0])) {
                  Object.defineProperty(ctx, key, {
                    configurable: true,
                    enumerable: true,
                    get: () => data[key],
                    set: shared.NOOP
                  });
                }
              }
            }
          }
        }
        shouldCacheAccess = true;
        if (computedOptions) {
          for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = shared.isFunction(opt) ? opt.bind(publicThis, publicThis) : shared.isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : shared.NOOP;
            if (get === shared.NOOP) {
              warn2(`Computed property "${key}" has no getter.`);
            }
            const set2 = !shared.isFunction(opt) && shared.isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
              warn2(`Write operation failed: computed property "${key}" is readonly.`);
            };
            const c = computed15({
              get,
              set: set2
            });
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => c.value,
              set: (v) => c.value = v
            });
            {
              checkDuplicateProperties("Computed", key);
            }
          }
        }
        if (watchOptions) {
          for (const key in watchOptions) {
            createWatcher(watchOptions[key], ctx, publicThis, key);
          }
        }
        if (provideOptions) {
          const provides = shared.isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
          Reflect.ownKeys(provides).forEach((key) => {
            provide2(key, provides[key]);
          });
        }
        if (created) {
          callHook(created, instance, "c");
        }
        function registerLifecycleHook(register, hook) {
          if (shared.isArray(hook)) {
            hook.forEach((_hook) => register(_hook.bind(publicThis)));
          } else if (hook) {
            register(hook.bind(publicThis));
          }
        }
        registerLifecycleHook(onBeforeMount2, beforeMount);
        registerLifecycleHook(onMounted10, mounted);
        registerLifecycleHook(onBeforeUpdate2, beforeUpdate);
        registerLifecycleHook(onUpdated2, updated);
        registerLifecycleHook(onActivated, activated);
        registerLifecycleHook(onDeactivated, deactivated);
        registerLifecycleHook(onErrorCaptured, errorCaptured);
        registerLifecycleHook(onRenderTracked, renderTracked);
        registerLifecycleHook(onRenderTriggered, renderTriggered);
        registerLifecycleHook(onBeforeUnmount2, beforeUnmount);
        registerLifecycleHook(onUnmounted3, unmounted);
        registerLifecycleHook(onServerPrefetch, serverPrefetch);
        if (shared.isArray(expose)) {
          if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key) => {
              Object.defineProperty(exposed, key, {
                get: () => publicThis[key],
                set: (val) => publicThis[key] = val
              });
            });
          } else if (!instance.exposed) {
            instance.exposed = {};
          }
        }
        if (render22 && instance.render === shared.NOOP) {
          instance.render = render22;
        }
        if (inheritAttrs != null) {
          instance.inheritAttrs = inheritAttrs;
        }
        if (components)
          instance.components = components;
        if (directives)
          instance.directives = directives;
      }
      function resolveInjections(injectOptions, ctx, checkDuplicateProperties = shared.NOOP, unwrapRef = false) {
        if (shared.isArray(injectOptions)) {
          injectOptions = normalizeInject(injectOptions);
        }
        for (const key in injectOptions) {
          const opt = injectOptions[key];
          let injected;
          if (shared.isObject(opt)) {
            if ("default" in opt) {
              injected = inject4(opt.from || key, opt.default, true);
            } else {
              injected = inject4(opt.from || key);
            }
          } else {
            injected = inject4(opt);
          }
          if (reactivity.isRef(injected)) {
            if (unwrapRef) {
              Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => injected.value,
                set: (v) => injected.value = v
              });
            } else {
              {
                warn2(`injected property "${key}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`);
              }
              ctx[key] = injected;
            }
          } else {
            ctx[key] = injected;
          }
          {
            checkDuplicateProperties("Inject", key);
          }
        }
      }
      function callHook(hook, instance, type) {
        callWithAsyncErrorHandling(shared.isArray(hook) ? hook.map((h3) => h3.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
      }
      function createWatcher(raw, ctx, publicThis, key) {
        const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
        if (shared.isString(raw)) {
          const handler = ctx[raw];
          if (shared.isFunction(handler)) {
            watch13(getter, handler);
          } else {
            warn2(`Invalid watch handler specified by key "${raw}"`, handler);
          }
        } else if (shared.isFunction(raw)) {
          watch13(getter, raw.bind(publicThis));
        } else if (shared.isObject(raw)) {
          if (shared.isArray(raw)) {
            raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
          } else {
            const handler = shared.isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if (shared.isFunction(handler)) {
              watch13(getter, handler, raw);
            } else {
              warn2(`Invalid watch handler specified by key "${raw.handler}"`, handler);
            }
          }
        } else {
          warn2(`Invalid watch option: "${key}"`, raw);
        }
      }
      function resolveMergedOptions(instance) {
        const base = instance.type;
        const { mixins, extends: extendsOptions } = base;
        const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
        const cached = cache.get(base);
        let resolved;
        if (cached) {
          resolved = cached;
        } else if (!globalMixins.length && !mixins && !extendsOptions) {
          {
            resolved = base;
          }
        } else {
          resolved = {};
          if (globalMixins.length) {
            globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
          }
          mergeOptions(resolved, base, optionMergeStrategies);
        }
        if (shared.isObject(base)) {
          cache.set(base, resolved);
        }
        return resolved;
      }
      function mergeOptions(to2, from, strats, asMixin = false) {
        const { mixins, extends: extendsOptions } = from;
        if (extendsOptions) {
          mergeOptions(to2, extendsOptions, strats, true);
        }
        if (mixins) {
          mixins.forEach((m) => mergeOptions(to2, m, strats, true));
        }
        for (const key in from) {
          if (asMixin && key === "expose") {
            warn2(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
          } else {
            const strat = internalOptionMergeStrats[key] || strats && strats[key];
            to2[key] = strat ? strat(to2[key], from[key]) : from[key];
          }
        }
        return to2;
      }
      var internalOptionMergeStrats = {
        data: mergeDataFn,
        props: mergeObjectOptions,
        emits: mergeObjectOptions,
        methods: mergeObjectOptions,
        computed: mergeObjectOptions,
        beforeCreate: mergeAsArray,
        created: mergeAsArray,
        beforeMount: mergeAsArray,
        mounted: mergeAsArray,
        beforeUpdate: mergeAsArray,
        updated: mergeAsArray,
        beforeDestroy: mergeAsArray,
        beforeUnmount: mergeAsArray,
        destroyed: mergeAsArray,
        unmounted: mergeAsArray,
        activated: mergeAsArray,
        deactivated: mergeAsArray,
        errorCaptured: mergeAsArray,
        serverPrefetch: mergeAsArray,
        components: mergeObjectOptions,
        directives: mergeObjectOptions,
        watch: mergeWatchOptions,
        provide: mergeDataFn,
        inject: mergeInject
      };
      function mergeDataFn(to2, from) {
        if (!from) {
          return to2;
        }
        if (!to2) {
          return from;
        }
        return function mergedDataFn() {
          return shared.extend(shared.isFunction(to2) ? to2.call(this, this) : to2, shared.isFunction(from) ? from.call(this, this) : from);
        };
      }
      function mergeInject(to2, from) {
        return mergeObjectOptions(normalizeInject(to2), normalizeInject(from));
      }
      function normalizeInject(raw) {
        if (shared.isArray(raw)) {
          const res = {};
          for (let i = 0; i < raw.length; i++) {
            res[raw[i]] = raw[i];
          }
          return res;
        }
        return raw;
      }
      function mergeAsArray(to2, from) {
        return to2 ? [...new Set([].concat(to2, from))] : from;
      }
      function mergeObjectOptions(to2, from) {
        return to2 ? shared.extend(shared.extend(/* @__PURE__ */ Object.create(null), to2), from) : from;
      }
      function mergeWatchOptions(to2, from) {
        if (!to2)
          return from;
        if (!from)
          return to2;
        const merged = shared.extend(/* @__PURE__ */ Object.create(null), to2);
        for (const key in from) {
          merged[key] = mergeAsArray(to2[key], from[key]);
        }
        return merged;
      }
      function initProps(instance, rawProps, isStateful, isSSR = false) {
        const props = {};
        const attrs = {};
        shared.def(attrs, InternalObjectKey, 1);
        instance.propsDefaults = /* @__PURE__ */ Object.create(null);
        setFullProps(instance, rawProps, props, attrs);
        for (const key in instance.propsOptions[0]) {
          if (!(key in props)) {
            props[key] = void 0;
          }
        }
        {
          validateProps(rawProps || {}, props, instance);
        }
        if (isStateful) {
          instance.props = isSSR ? props : reactivity.shallowReactive(props);
        } else {
          if (!instance.type.props) {
            instance.props = attrs;
          } else {
            instance.props = props;
          }
        }
        instance.attrs = attrs;
      }
      function isInHmrContext(instance) {
        while (instance) {
          if (instance.type.__hmrId)
            return true;
          instance = instance.parent;
        }
      }
      function updateProps(instance, rawProps, rawPrevProps, optimized) {
        const { props, attrs, vnode: { patchFlag } } = instance;
        const rawCurrentProps = reactivity.toRaw(props);
        const [options] = instance.propsOptions;
        let hasAttrsChanged = false;
        if (!isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
          if (patchFlag & 8) {
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              let key = propsToUpdate[i];
              if (isEmitListener(instance.emitsOptions, key)) {
                continue;
              }
              const value = rawProps[key];
              if (options) {
                if (shared.hasOwn(attrs, key)) {
                  if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                  }
                } else {
                  const camelizedKey = shared.camelize(key);
                  props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                }
              } else {
                if (value !== attrs[key]) {
                  attrs[key] = value;
                  hasAttrsChanged = true;
                }
              }
            }
          }
        } else {
          if (setFullProps(instance, rawProps, props, attrs)) {
            hasAttrsChanged = true;
          }
          let kebabKey;
          for (const key in rawCurrentProps) {
            if (!rawProps || !shared.hasOwn(rawProps, key) && ((kebabKey = shared.hyphenate(key)) === key || !shared.hasOwn(rawProps, kebabKey))) {
              if (options) {
                if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
                  props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
                }
              } else {
                delete props[key];
              }
            }
          }
          if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
              if (!rawProps || !shared.hasOwn(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
              }
            }
          }
        }
        if (hasAttrsChanged) {
          reactivity.trigger(instance, "set", "$attrs");
        }
        {
          validateProps(rawProps || {}, props, instance);
        }
      }
      function setFullProps(instance, rawProps, props, attrs) {
        const [options, needCastKeys] = instance.propsOptions;
        let hasAttrsChanged = false;
        let rawCastValues;
        if (rawProps) {
          for (let key in rawProps) {
            if (shared.isReservedProp(key)) {
              continue;
            }
            const value = rawProps[key];
            let camelKey;
            if (options && shared.hasOwn(options, camelKey = shared.camelize(key))) {
              if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                props[camelKey] = value;
              } else {
                (rawCastValues || (rawCastValues = {}))[camelKey] = value;
              }
            } else if (!isEmitListener(instance.emitsOptions, key)) {
              if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            }
          }
        }
        if (needCastKeys) {
          const rawCurrentProps = reactivity.toRaw(props);
          const castValues = rawCastValues || shared.EMPTY_OBJ;
          for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !shared.hasOwn(castValues, key));
          }
        }
        return hasAttrsChanged;
      }
      function resolvePropValue(options, props, key, value, instance, isAbsent) {
        const opt = options[key];
        if (opt != null) {
          const hasDefault = shared.hasOwn(opt, "default");
          if (hasDefault && value === void 0) {
            const defaultValue = opt.default;
            if (opt.type !== Function && shared.isFunction(defaultValue)) {
              const { propsDefaults } = instance;
              if (key in propsDefaults) {
                value = propsDefaults[key];
              } else {
                setCurrentInstance(instance);
                value = propsDefaults[key] = defaultValue.call(null, props);
                unsetCurrentInstance();
              }
            } else {
              value = defaultValue;
            }
          }
          if (opt[0]) {
            if (isAbsent && !hasDefault) {
              value = false;
            } else if (opt[1] && (value === "" || value === shared.hyphenate(key))) {
              value = true;
            }
          }
        }
        return value;
      }
      function normalizePropsOptions(comp, appContext, asMixin = false) {
        const cache = appContext.propsCache;
        const cached = cache.get(comp);
        if (cached) {
          return cached;
        }
        const raw = comp.props;
        const normalized = {};
        const needCastKeys = [];
        let hasExtends = false;
        if (!shared.isFunction(comp)) {
          const extendProps = (raw2) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw2, appContext, true);
            shared.extend(normalized, props);
            if (keys)
              needCastKeys.push(...keys);
          };
          if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
          }
          if (comp.extends) {
            extendProps(comp.extends);
          }
          if (comp.mixins) {
            comp.mixins.forEach(extendProps);
          }
        }
        if (!raw && !hasExtends) {
          if (shared.isObject(comp)) {
            cache.set(comp, shared.EMPTY_ARR);
          }
          return shared.EMPTY_ARR;
        }
        if (shared.isArray(raw)) {
          for (let i = 0; i < raw.length; i++) {
            if (!shared.isString(raw[i])) {
              warn2(`props must be strings when using array syntax.`, raw[i]);
            }
            const normalizedKey = shared.camelize(raw[i]);
            if (validatePropName(normalizedKey)) {
              normalized[normalizedKey] = shared.EMPTY_OBJ;
            }
          }
        } else if (raw) {
          if (!shared.isObject(raw)) {
            warn2(`invalid props options`, raw);
          }
          for (const key in raw) {
            const normalizedKey = shared.camelize(key);
            if (validatePropName(normalizedKey)) {
              const opt = raw[key];
              const prop = normalized[normalizedKey] = shared.isArray(opt) || shared.isFunction(opt) ? { type: opt } : opt;
              if (prop) {
                const booleanIndex = getTypeIndex(Boolean, prop.type);
                const stringIndex = getTypeIndex(String, prop.type);
                prop[0] = booleanIndex > -1;
                prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
                if (booleanIndex > -1 || shared.hasOwn(prop, "default")) {
                  needCastKeys.push(normalizedKey);
                }
              }
            }
          }
        }
        const res = [normalized, needCastKeys];
        if (shared.isObject(comp)) {
          cache.set(comp, res);
        }
        return res;
      }
      function validatePropName(key) {
        if (key[0] !== "$") {
          return true;
        } else {
          warn2(`Invalid prop name: "${key}" is a reserved property.`);
        }
        return false;
      }
      function getType(ctor) {
        const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
        return match ? match[1] : ctor === null ? "null" : "";
      }
      function isSameType(a2, b) {
        return getType(a2) === getType(b);
      }
      function getTypeIndex(type, expectedTypes) {
        if (shared.isArray(expectedTypes)) {
          return expectedTypes.findIndex((t) => isSameType(t, type));
        } else if (shared.isFunction(expectedTypes)) {
          return isSameType(expectedTypes, type) ? 0 : -1;
        }
        return -1;
      }
      function validateProps(rawProps, props, instance) {
        const resolvedValues = reactivity.toRaw(props);
        const options = instance.propsOptions[0];
        for (const key in options) {
          let opt = options[key];
          if (opt == null)
            continue;
          validateProp(key, resolvedValues[key], opt, !shared.hasOwn(rawProps, key) && !shared.hasOwn(rawProps, shared.hyphenate(key)));
        }
      }
      function validateProp(name, value, prop, isAbsent) {
        const { type, required, validator } = prop;
        if (required && isAbsent) {
          warn2('Missing required prop: "' + name + '"');
          return;
        }
        if (value == null && !prop.required) {
          return;
        }
        if (type != null && type !== true) {
          let isValid = false;
          const types = shared.isArray(type) ? type : [type];
          const expectedTypes = [];
          for (let i = 0; i < types.length && !isValid; i++) {
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || "");
            isValid = valid;
          }
          if (!isValid) {
            warn2(getInvalidTypeMessage(name, value, expectedTypes));
            return;
          }
        }
        if (validator && !validator(value)) {
          warn2('Invalid prop: custom validator check failed for prop "' + name + '".');
        }
      }
      var isSimpleType = /* @__PURE__ */ shared.makeMap("String,Number,Boolean,Function,Symbol,BigInt");
      function assertType(value, type) {
        let valid;
        const expectedType = getType(type);
        if (isSimpleType(expectedType)) {
          const t = typeof value;
          valid = t === expectedType.toLowerCase();
          if (!valid && t === "object") {
            valid = value instanceof type;
          }
        } else if (expectedType === "Object") {
          valid = shared.isObject(value);
        } else if (expectedType === "Array") {
          valid = shared.isArray(value);
        } else if (expectedType === "null") {
          valid = value === null;
        } else {
          valid = value instanceof type;
        }
        return {
          valid,
          expectedType
        };
      }
      function getInvalidTypeMessage(name, value, expectedTypes) {
        let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(shared.capitalize).join(" | ")}`;
        const expectedType = expectedTypes[0];
        const receivedType = shared.toRawType(value);
        const expectedValue = styleValue(value, expectedType);
        const receivedValue = styleValue(value, receivedType);
        if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
          message += ` with value ${expectedValue}`;
        }
        message += `, got ${receivedType} `;
        if (isExplicable(receivedType)) {
          message += `with value ${receivedValue}.`;
        }
        return message;
      }
      function styleValue(value, type) {
        if (type === "String") {
          return `"${value}"`;
        } else if (type === "Number") {
          return `${Number(value)}`;
        } else {
          return `${value}`;
        }
      }
      function isExplicable(type) {
        const explicitTypes = ["string", "number", "boolean"];
        return explicitTypes.some((elem) => type.toLowerCase() === elem);
      }
      function isBoolean(...args) {
        return args.some((elem) => elem.toLowerCase() === "boolean");
      }
      var isInternalKey = (key) => key[0] === "_" || key === "$stable";
      var normalizeSlotValue = (value) => shared.isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
      var normalizeSlot = (key, rawSlot, ctx) => {
        if (rawSlot._n) {
          return rawSlot;
        }
        const normalized = withCtx((...args) => {
          if (currentInstance) {
            warn2(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
          }
          return normalizeSlotValue(rawSlot(...args));
        }, ctx);
        normalized._c = false;
        return normalized;
      };
      var normalizeObjectSlots = (rawSlots, slots, instance) => {
        const ctx = rawSlots._ctx;
        for (const key in rawSlots) {
          if (isInternalKey(key))
            continue;
          const value = rawSlots[key];
          if (shared.isFunction(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
          } else if (value != null) {
            {
              warn2(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
            }
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
          }
        }
      };
      var normalizeVNodeSlots = (instance, children) => {
        if (!isKeepAlive(instance.vnode) && true) {
          warn2(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
        }
        const normalized = normalizeSlotValue(children);
        instance.slots.default = () => normalized;
      };
      var initSlots = (instance, children) => {
        if (instance.vnode.shapeFlag & 32) {
          const type = children._;
          if (type) {
            instance.slots = reactivity.toRaw(children);
            shared.def(children, "_", type);
          } else {
            normalizeObjectSlots(children, instance.slots = {});
          }
        } else {
          instance.slots = {};
          if (children) {
            normalizeVNodeSlots(instance, children);
          }
        }
        shared.def(instance.slots, InternalObjectKey, 1);
      };
      var updateSlots = (instance, children, optimized) => {
        const { vnode, slots } = instance;
        let needDeletionCheck = true;
        let deletionComparisonTarget = shared.EMPTY_OBJ;
        if (vnode.shapeFlag & 32) {
          const type = children._;
          if (type) {
            if (isHmrUpdating) {
              shared.extend(slots, children);
            } else if (optimized && type === 1) {
              needDeletionCheck = false;
            } else {
              shared.extend(slots, children);
              if (!optimized && type === 1) {
                delete slots._;
              }
            }
          } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
          }
          deletionComparisonTarget = children;
        } else if (children) {
          normalizeVNodeSlots(instance, children);
          deletionComparisonTarget = { default: 1 };
        }
        if (needDeletionCheck) {
          for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
              delete slots[key];
            }
          }
        }
      };
      function createAppContext() {
        return {
          app: null,
          config: {
            isNativeTag: shared.NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
          },
          mixins: [],
          components: {},
          directives: {},
          provides: /* @__PURE__ */ Object.create(null),
          optionsCache: /* @__PURE__ */ new WeakMap(),
          propsCache: /* @__PURE__ */ new WeakMap(),
          emitsCache: /* @__PURE__ */ new WeakMap()
        };
      }
      var uid = 0;
      function createAppAPI(render22, hydrate) {
        return function createApp2(rootComponent, rootProps = null) {
          if (!shared.isFunction(rootComponent)) {
            rootComponent = __spreadValues({}, rootComponent);
          }
          if (rootProps != null && !shared.isObject(rootProps)) {
            warn2(`root props passed to app.mount() must be an object.`);
            rootProps = null;
          }
          const context = createAppContext();
          const installedPlugins = /* @__PURE__ */ new Set();
          let isMounted = false;
          const app = context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config() {
              return context.config;
            },
            set config(v) {
              {
                warn2(`app.config cannot be replaced. Modify individual options instead.`);
              }
            },
            use(plugin, ...options) {
              if (installedPlugins.has(plugin)) {
                warn2(`Plugin has already been applied to target app.`);
              } else if (plugin && shared.isFunction(plugin.install)) {
                installedPlugins.add(plugin);
                plugin.install(app, ...options);
              } else if (shared.isFunction(plugin)) {
                installedPlugins.add(plugin);
                plugin(app, ...options);
              } else {
                warn2(`A plugin must either be a function or an object with an "install" function.`);
              }
              return app;
            },
            mixin(mixin) {
              {
                if (!context.mixins.includes(mixin)) {
                  context.mixins.push(mixin);
                } else {
                  warn2("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
                }
              }
              return app;
            },
            component(name, component) {
              {
                validateComponentName(name, context.config);
              }
              if (!component) {
                return context.components[name];
              }
              if (context.components[name]) {
                warn2(`Component "${name}" has already been registered in target app.`);
              }
              context.components[name] = component;
              return app;
            },
            directive(name, directive) {
              {
                validateDirectiveName(name);
              }
              if (!directive) {
                return context.directives[name];
              }
              if (context.directives[name]) {
                warn2(`Directive "${name}" has already been registered in target app.`);
              }
              context.directives[name] = directive;
              return app;
            },
            mount(rootContainer, isHydrate, isSVG) {
              if (!isMounted) {
                if (rootContainer.__vue_app__) {
                  warn2(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
                }
                const vnode = createVNode(rootComponent, rootProps);
                vnode.appContext = context;
                {
                  context.reload = () => {
                    render22(cloneVNode(vnode), rootContainer, isSVG);
                  };
                }
                if (isHydrate && hydrate) {
                  hydrate(vnode, rootContainer);
                } else {
                  render22(vnode, rootContainer, isSVG);
                }
                isMounted = true;
                app._container = rootContainer;
                rootContainer.__vue_app__ = app;
                {
                  app._instance = vnode.component;
                  devtoolsInitApp(app, version);
                }
                return getExposeProxy(vnode.component) || vnode.component.proxy;
              } else {
                warn2(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
              }
            },
            unmount() {
              if (isMounted) {
                render22(null, app._container);
                {
                  app._instance = null;
                  devtoolsUnmountApp(app);
                }
                delete app._container.__vue_app__;
              } else {
                warn2(`Cannot unmount an app that is not mounted.`);
              }
            },
            provide(key, value) {
              if (key in context.provides) {
                warn2(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
              }
              context.provides[key] = value;
              return app;
            }
          };
          return app;
        };
      }
      function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
        if (shared.isArray(rawRef)) {
          rawRef.forEach((r, i) => setRef(r, oldRawRef && (shared.isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
          return;
        }
        if (isAsyncWrapper(vnode) && !isUnmount) {
          return;
        }
        const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
        const value = isUnmount ? null : refValue;
        const { i: owner, r: ref17 } = rawRef;
        if (!owner) {
          warn2(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
          return;
        }
        const oldRef = oldRawRef && oldRawRef.r;
        const refs = owner.refs === shared.EMPTY_OBJ ? owner.refs = {} : owner.refs;
        const setupState = owner.setupState;
        if (oldRef != null && oldRef !== ref17) {
          if (shared.isString(oldRef)) {
            refs[oldRef] = null;
            if (shared.hasOwn(setupState, oldRef)) {
              setupState[oldRef] = null;
            }
          } else if (reactivity.isRef(oldRef)) {
            oldRef.value = null;
          }
        }
        if (shared.isFunction(ref17)) {
          callWithErrorHandling(ref17, owner, 12, [value, refs]);
        } else {
          const _isString = shared.isString(ref17);
          const _isRef = reactivity.isRef(ref17);
          if (_isString || _isRef) {
            const doSet = () => {
              if (rawRef.f) {
                const existing = _isString ? refs[ref17] : ref17.value;
                if (isUnmount) {
                  shared.isArray(existing) && shared.remove(existing, refValue);
                } else {
                  if (!shared.isArray(existing)) {
                    if (_isString) {
                      refs[ref17] = [refValue];
                      if (shared.hasOwn(setupState, ref17)) {
                        setupState[ref17] = refs[ref17];
                      }
                    } else {
                      ref17.value = [refValue];
                      if (rawRef.k)
                        refs[rawRef.k] = ref17.value;
                    }
                  } else if (!existing.includes(refValue)) {
                    existing.push(refValue);
                  }
                }
              } else if (_isString) {
                refs[ref17] = value;
                if (shared.hasOwn(setupState, ref17)) {
                  setupState[ref17] = value;
                }
              } else if (_isRef) {
                ref17.value = value;
                if (rawRef.k)
                  refs[rawRef.k] = value;
              } else {
                warn2("Invalid template ref type:", ref17, `(${typeof ref17})`);
              }
            };
            if (value) {
              doSet.id = -1;
              queuePostRenderEffect(doSet, parentSuspense);
            } else {
              doSet();
            }
          } else {
            warn2("Invalid template ref type:", ref17, `(${typeof ref17})`);
          }
        }
      }
      var hasMismatch = false;
      var isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
      var isComment = (node) => node.nodeType === 8;
      function createHydrationFunctions(rendererInternals) {
        const { mt: mountComponent, p: patch, o: { patchProp, createText, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
        const hydrate = (vnode, container) => {
          if (!container.hasChildNodes()) {
            warn2(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
          }
          hasMismatch = false;
          hydrateNode(container.firstChild, vnode, null, null, null);
          flushPostFlushCbs();
          container._vnode = vnode;
          if (hasMismatch && true) {
            console.error(`Hydration completed but contains mismatches.`);
          }
        };
        const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
          const isFragmentStart = isComment(node) && node.data === "[";
          const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
          const { type, ref: ref17, shapeFlag, patchFlag } = vnode;
          const domType = node.nodeType;
          vnode.el = node;
          if (patchFlag === -2) {
            optimized = false;
            vnode.dynamicChildren = null;
          }
          let nextNode = null;
          switch (type) {
            case Text:
              if (domType !== 3) {
                if (vnode.children === "") {
                  insert(vnode.el = createText(""), parentNode(node), node);
                  nextNode = node;
                } else {
                  nextNode = onMismatch();
                }
              } else {
                if (node.data !== vnode.children) {
                  hasMismatch = true;
                  warn2(`Hydration text mismatch:
- Client: ${JSON.stringify(node.data)}
- Server: ${JSON.stringify(vnode.children)}`);
                  node.data = vnode.children;
                }
                nextNode = nextSibling(node);
              }
              break;
            case Comment:
              if (domType !== 8 || isFragmentStart) {
                nextNode = onMismatch();
              } else {
                nextNode = nextSibling(node);
              }
              break;
            case Static:
              if (domType !== 1 && domType !== 3) {
                nextNode = onMismatch();
              } else {
                nextNode = node;
                const needToAdoptContent = !vnode.children.length;
                for (let i = 0; i < vnode.staticCount; i++) {
                  if (needToAdoptContent)
                    vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
                  if (i === vnode.staticCount - 1) {
                    vnode.anchor = nextNode;
                  }
                  nextNode = nextSibling(nextNode);
                }
                return nextNode;
              }
              break;
            case Fragment:
              if (!isFragmentStart) {
                nextNode = onMismatch();
              } else {
                nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
              }
              break;
            default:
              if (shapeFlag & 1) {
                if (domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
                  nextNode = onMismatch();
                } else {
                  nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                }
              } else if (shapeFlag & 6) {
                vnode.slotScopeIds = slotScopeIds;
                const container = parentNode(node);
                mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
                if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") {
                  nextNode = nextSibling(nextNode);
                }
                if (isAsyncWrapper(vnode)) {
                  let subTree;
                  if (isFragmentStart) {
                    subTree = createVNode(Fragment);
                    subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                  } else {
                    subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
                  }
                  subTree.el = node;
                  vnode.component.subTree = subTree;
                }
              } else if (shapeFlag & 64) {
                if (domType !== 8) {
                  nextNode = onMismatch();
                } else {
                  nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                }
              } else if (shapeFlag & 128) {
                nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
              } else {
                warn2("Invalid HostVNode type:", type, `(${typeof type})`);
              }
          }
          if (ref17 != null) {
            setRef(ref17, null, parentSuspense, vnode);
          }
          return nextNode;
        };
        const hydrateElement = (el2, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          optimized = optimized || !!vnode.dynamicChildren;
          const { type, props, patchFlag, shapeFlag, dirs } = vnode;
          const forcePatchValue = type === "input" && dirs || type === "option";
          {
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "created");
            }
            if (props) {
              if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
                for (const key in props) {
                  if (forcePatchValue && key.endsWith("value") || shared.isOn(key) && !shared.isReservedProp(key)) {
                    patchProp(el2, key, null, props[key], false, void 0, parentComponent);
                  }
                }
              } else if (props.onClick) {
                patchProp(el2, "onClick", null, props.onClick, false, void 0, parentComponent);
              }
            }
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) {
              invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            }
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            }
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
              queueEffectWithSuspense(() => {
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
              }, parentSuspense);
            }
            if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
              let next = hydrateChildren(el2.firstChild, vnode, el2, parentComponent, parentSuspense, slotScopeIds, optimized);
              let hasWarned2 = false;
              while (next) {
                hasMismatch = true;
                if (!hasWarned2) {
                  warn2(`Hydration children mismatch in <${vnode.type}>: server rendered element contains more child nodes than client vdom.`);
                  hasWarned2 = true;
                }
                const cur = next;
                next = next.nextSibling;
                remove(cur);
              }
            } else if (shapeFlag & 8) {
              if (el2.textContent !== vnode.children) {
                hasMismatch = true;
                warn2(`Hydration text content mismatch in <${vnode.type}>:
- Client: ${el2.textContent}
- Server: ${vnode.children}`);
                el2.textContent = vnode.children;
              }
            }
          }
          return el2.nextSibling;
        };
        const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          optimized = optimized || !!parentVNode.dynamicChildren;
          const children = parentVNode.children;
          const l = children.length;
          let hasWarned2 = false;
          for (let i = 0; i < l; i++) {
            const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
            if (node) {
              node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            } else if (vnode.type === Text && !vnode.children) {
              continue;
            } else {
              hasMismatch = true;
              if (!hasWarned2) {
                warn2(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`);
                hasWarned2 = true;
              }
              patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
            }
          }
          return node;
        };
        const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          const { slotScopeIds: fragmentSlotScopeIds } = vnode;
          if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
          }
          const container = parentNode(node);
          const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
          if (next && isComment(next) && next.data === "]") {
            return nextSibling(vnode.anchor = next);
          } else {
            hasMismatch = true;
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
          }
        };
        const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
          hasMismatch = true;
          warn2(`Hydration node mismatch:
- Client vnode:`, vnode.type, `
- Server rendered DOM:`, node, node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``);
          vnode.el = null;
          if (isFragment) {
            const end = locateClosingAsyncAnchor(node);
            while (true) {
              const next2 = nextSibling(node);
              if (next2 && next2 !== end) {
                remove(next2);
              } else {
                break;
              }
            }
          }
          const next = nextSibling(node);
          const container = parentNode(node);
          remove(node);
          patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
          return next;
        };
        const locateClosingAsyncAnchor = (node) => {
          let match = 0;
          while (node) {
            node = nextSibling(node);
            if (node && isComment(node)) {
              if (node.data === "[")
                match++;
              if (node.data === "]") {
                if (match === 0) {
                  return nextSibling(node);
                } else {
                  match--;
                }
              }
            }
          }
          return node;
        };
        return [hydrate, hydrateNode];
      }
      var supported2;
      var perf2;
      function startMeasure(instance, type) {
        if (instance.appContext.config.performance && isSupported()) {
          perf2.mark(`vue-${type}-${instance.uid}`);
        }
        {
          devtoolsPerfStart(instance, type, isSupported() ? perf2.now() : Date.now());
        }
      }
      function endMeasure(instance, type) {
        if (instance.appContext.config.performance && isSupported()) {
          const startTag = `vue-${type}-${instance.uid}`;
          const endTag = startTag + `:end`;
          perf2.mark(endTag);
          perf2.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
          perf2.clearMarks(startTag);
          perf2.clearMarks(endTag);
        }
        {
          devtoolsPerfEnd(instance, type, isSupported() ? perf2.now() : Date.now());
        }
      }
      function isSupported() {
        if (supported2 !== void 0) {
          return supported2;
        }
        if (typeof window !== "undefined" && window.performance) {
          supported2 = true;
          perf2 = window.performance;
        } else {
          supported2 = false;
        }
        return supported2;
      }
      var queuePostRenderEffect = queueEffectWithSuspense;
      function createRenderer(options) {
        return baseCreateRenderer(options);
      }
      function createHydrationRenderer(options) {
        return baseCreateRenderer(options, createHydrationFunctions);
      }
      function baseCreateRenderer(options, createHydrationFns) {
        const target = shared.getGlobalThis();
        target.__VUE__ = true;
        {
          setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
        }
        const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = shared.NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
        const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
          if (n1 === n2) {
            return;
          }
          if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
          }
          if (n2.patchFlag === -2) {
            optimized = false;
            n2.dynamicChildren = null;
          }
          const { type, ref: ref17, shapeFlag } = n2;
          switch (type) {
            case Text:
              processText(n1, n2, container, anchor);
              break;
            case Comment:
              processCommentNode(n1, n2, container, anchor);
              break;
            case Static:
              if (n1 == null) {
                mountStaticNode(n2, container, anchor, isSVG);
              } else {
                patchStaticNode(n1, n2, container, isSVG);
              }
              break;
            case Fragment:
              processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              break;
            default:
              if (shapeFlag & 1) {
                processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              } else if (shapeFlag & 6) {
                processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              } else if (shapeFlag & 64) {
                type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
              } else if (shapeFlag & 128) {
                type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
              } else {
                warn2("Invalid VNode type:", type, `(${typeof type})`);
              }
          }
          if (ref17 != null && parentComponent) {
            setRef(ref17, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
          }
        };
        const processText = (n1, n2, container, anchor) => {
          if (n1 == null) {
            hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
          } else {
            const el2 = n2.el = n1.el;
            if (n2.children !== n1.children) {
              hostSetText(el2, n2.children);
            }
          }
        };
        const processCommentNode = (n1, n2, container, anchor) => {
          if (n1 == null) {
            hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
          } else {
            n2.el = n1.el;
          }
        };
        const mountStaticNode = (n2, container, anchor, isSVG) => {
          [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
        };
        const patchStaticNode = (n1, n2, container, isSVG) => {
          if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
          } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
          }
        };
        const moveStaticNode = ({ el: el2, anchor }, container, nextSibling) => {
          let next;
          while (el2 && el2 !== anchor) {
            next = hostNextSibling(el2);
            hostInsert(el2, container, nextSibling);
            el2 = next;
          }
          hostInsert(anchor, container, nextSibling);
        };
        const removeStaticNode = ({ el: el2, anchor }) => {
          let next;
          while (el2 && el2 !== anchor) {
            next = hostNextSibling(el2);
            hostRemove(el2);
            el2 = next;
          }
          hostRemove(anchor);
        };
        const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          isSVG = isSVG || n2.type === "svg";
          if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        };
        const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          let el2;
          let vnodeHook;
          const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
          {
            el2 = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
            if (shapeFlag & 8) {
              hostSetElementText(el2, vnode.children);
            } else if (shapeFlag & 16) {
              mountChildren(vnode.children, el2, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
            }
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "created");
            }
            if (props) {
              for (const key in props) {
                if (key !== "value" && !shared.isReservedProp(key)) {
                  hostPatchProp(el2, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
              }
              if ("value" in props) {
                hostPatchProp(el2, "value", null, props.value);
              }
              if (vnodeHook = props.onVnodeBeforeMount) {
                invokeVNodeHook(vnodeHook, parentComponent, vnode);
              }
            }
            setScopeId(el2, vnode, vnode.scopeId, slotScopeIds, parentComponent);
          }
          {
            Object.defineProperty(el2, "__vnode", {
              value: vnode,
              enumerable: false
            });
            Object.defineProperty(el2, "__vueParentComponent", {
              value: parentComponent,
              enumerable: false
            });
          }
          if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
          }
          const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
          if (needCallTransitionHooks) {
            transition.beforeEnter(el2);
          }
          hostInsert(el2, container, anchor);
          if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
              needCallTransitionHooks && transition.enter(el2);
              dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
          }
        };
        const setScopeId = (el2, vnode, scopeId, slotScopeIds, parentComponent) => {
          if (scopeId) {
            hostSetScopeId(el2, scopeId);
          }
          if (slotScopeIds) {
            for (let i = 0; i < slotScopeIds.length; i++) {
              hostSetScopeId(el2, slotScopeIds[i]);
            }
          }
          if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
              subTree = filterSingleRoot(subTree.children) || subTree;
            }
            if (vnode === subTree) {
              const parentVNode = parentComponent.vnode;
              setScopeId(el2, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
          }
        };
        const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
          for (let i = start; i < children.length; i++) {
            const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        };
        const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          const el2 = n2.el = n1.el;
          let { patchFlag, dynamicChildren, dirs } = n2;
          patchFlag |= n1.patchFlag & 16;
          const oldProps = n1.props || shared.EMPTY_OBJ;
          const newProps = n2.props || shared.EMPTY_OBJ;
          let vnodeHook;
          parentComponent && toggleRecurse(parentComponent, false);
          if (vnodeHook = newProps.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          }
          if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
          }
          parentComponent && toggleRecurse(parentComponent, true);
          if (isHmrUpdating) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
          }
          const areChildrenSVG = isSVG && n2.type !== "foreignObject";
          if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el2, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
            if (parentComponent && parentComponent.type.__hmrId) {
              traverseStaticChildren(n1, n2);
            }
          } else if (!optimized) {
            patchChildren(n1, n2, el2, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
          }
          if (patchFlag > 0) {
            if (patchFlag & 16) {
              patchProps(el2, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            } else {
              if (patchFlag & 2) {
                if (oldProps.class !== newProps.class) {
                  hostPatchProp(el2, "class", null, newProps.class, isSVG);
                }
              }
              if (patchFlag & 4) {
                hostPatchProp(el2, "style", oldProps.style, newProps.style, isSVG);
              }
              if (patchFlag & 8) {
                const propsToUpdate = n2.dynamicProps;
                for (let i = 0; i < propsToUpdate.length; i++) {
                  const key = propsToUpdate[i];
                  const prev = oldProps[key];
                  const next = newProps[key];
                  if (next !== prev || key === "value") {
                    hostPatchProp(el2, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                  }
                }
              }
            }
            if (patchFlag & 1) {
              if (n1.children !== n2.children) {
                hostSetElementText(el2, n2.children);
              }
            }
          } else if (!optimized && dynamicChildren == null) {
            patchProps(el2, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
          }
          if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
              dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
            }, parentSuspense);
          }
        };
        const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
          for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
          }
        };
        const patchProps = (el2, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
          if (oldProps !== newProps) {
            for (const key in newProps) {
              if (shared.isReservedProp(key))
                continue;
              const next = newProps[key];
              const prev = oldProps[key];
              if (next !== prev && key !== "value") {
                hostPatchProp(el2, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
            if (oldProps !== shared.EMPTY_OBJ) {
              for (const key in oldProps) {
                if (!shared.isReservedProp(key) && !(key in newProps)) {
                  hostPatchProp(el2, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
              }
            }
            if ("value" in newProps) {
              hostPatchProp(el2, "value", oldProps.value, newProps.value);
            }
          }
        };
        const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
          const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
          let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
          if (isHmrUpdating || patchFlag & 2048) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
          }
          if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
          }
          if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
              patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
              if (parentComponent && parentComponent.type.__hmrId) {
                traverseStaticChildren(n1, n2);
              } else if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
                traverseStaticChildren(n1, n2, true);
              }
            } else {
              patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
          }
        };
        const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          n2.slotScopeIds = slotScopeIds;
          if (n1 == null) {
            if (n2.shapeFlag & 512) {
              parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            } else {
              mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
          } else {
            updateComponent(n1, n2, optimized);
          }
        };
        const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
          const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
          if (instance.type.__hmrId) {
            registerHMR(instance);
          }
          {
            pushWarningContext(initialVNode);
            startMeasure(instance, `mount`);
          }
          if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
          }
          {
            {
              startMeasure(instance, `init`);
            }
            setupComponent(instance);
            {
              endMeasure(instance, `init`);
            }
          }
          if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            if (!initialVNode.el) {
              const placeholder = instance.subTree = createVNode(Comment);
              processCommentNode(null, placeholder, container, anchor);
            }
            return;
          }
          setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
          {
            popWarningContext();
            endMeasure(instance, `mount`);
          }
        };
        const updateComponent = (n1, n2, optimized) => {
          const instance = n2.component = n1.component;
          if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
              {
                pushWarningContext(n2);
              }
              updateComponentPreRender(instance, n2, optimized);
              {
                popWarningContext();
              }
              return;
            } else {
              instance.next = n2;
              invalidateJob(instance.update);
              instance.update();
            }
          } else {
            n2.el = n1.el;
            instance.vnode = n2;
          }
        };
        const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
          const componentUpdateFn = () => {
            if (!instance.isMounted) {
              let vnodeHook;
              const { el: el2, props } = initialVNode;
              const { bm, m, parent } = instance;
              const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
              toggleRecurse(instance, false);
              if (bm) {
                shared.invokeArrayFns(bm);
              }
              if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHook, parent, initialVNode);
              }
              toggleRecurse(instance, true);
              if (el2 && hydrateNode) {
                const hydrateSubTree = () => {
                  {
                    startMeasure(instance, `render`);
                  }
                  instance.subTree = renderComponentRoot(instance);
                  {
                    endMeasure(instance, `render`);
                  }
                  {
                    startMeasure(instance, `hydrate`);
                  }
                  hydrateNode(el2, instance.subTree, instance, parentSuspense, null);
                  {
                    endMeasure(instance, `hydrate`);
                  }
                };
                if (isAsyncWrapperVNode) {
                  initialVNode.type.__asyncLoader().then(() => !instance.isUnmounted && hydrateSubTree());
                } else {
                  hydrateSubTree();
                }
              } else {
                {
                  startMeasure(instance, `render`);
                }
                const subTree = instance.subTree = renderComponentRoot(instance);
                {
                  endMeasure(instance, `render`);
                }
                {
                  startMeasure(instance, `patch`);
                }
                patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                {
                  endMeasure(instance, `patch`);
                }
                initialVNode.el = subTree.el;
              }
              if (m) {
                queuePostRenderEffect(m, parentSuspense);
              }
              if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                const scopedInitialVNode = initialVNode;
                queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
              }
              if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
                instance.a && queuePostRenderEffect(instance.a, parentSuspense);
              }
              instance.isMounted = true;
              {
                devtoolsComponentAdded(instance);
              }
              initialVNode = container = anchor = null;
            } else {
              let { next, bu: bu2, u: u2, parent, vnode } = instance;
              let originNext = next;
              let vnodeHook;
              {
                pushWarningContext(next || instance.vnode);
              }
              toggleRecurse(instance, false);
              if (next) {
                next.el = vnode.el;
                updateComponentPreRender(instance, next, optimized);
              } else {
                next = vnode;
              }
              if (bu2) {
                shared.invokeArrayFns(bu2);
              }
              if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
                invokeVNodeHook(vnodeHook, parent, next, vnode);
              }
              toggleRecurse(instance, true);
              {
                startMeasure(instance, `render`);
              }
              const nextTree = renderComponentRoot(instance);
              {
                endMeasure(instance, `render`);
              }
              const prevTree = instance.subTree;
              instance.subTree = nextTree;
              {
                startMeasure(instance, `patch`);
              }
              patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
              {
                endMeasure(instance, `patch`);
              }
              next.el = nextTree.el;
              if (originNext === null) {
                updateHOCHostEl(instance, nextTree.el);
              }
              if (u2) {
                queuePostRenderEffect(u2, parentSuspense);
              }
              if (vnodeHook = next.props && next.props.onVnodeUpdated) {
                queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
              }
              {
                devtoolsComponentUpdated(instance);
              }
              {
                popWarningContext();
              }
            }
          };
          const effect = instance.effect = new reactivity.ReactiveEffect(componentUpdateFn, () => queueJob(update), instance.scope);
          const update = instance.update = () => effect.run();
          update.id = instance.uid;
          toggleRecurse(instance, true);
          {
            effect.onTrack = instance.rtc ? (e4) => shared.invokeArrayFns(instance.rtc, e4) : void 0;
            effect.onTrigger = instance.rtg ? (e4) => shared.invokeArrayFns(instance.rtg, e4) : void 0;
            update.ownerInstance = instance;
          }
          update();
        };
        const updateComponentPreRender = (instance, nextVNode, optimized) => {
          nextVNode.component = instance;
          const prevProps = instance.vnode.props;
          instance.vnode = nextVNode;
          instance.next = null;
          updateProps(instance, nextVNode.props, prevProps, optimized);
          updateSlots(instance, nextVNode.children, optimized);
          reactivity.pauseTracking();
          flushPreFlushCbs();
          reactivity.resetTracking();
        };
        const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
          const c1 = n1 && n1.children;
          const prevShapeFlag = n1 ? n1.shapeFlag : 0;
          const c2 = n2.children;
          const { patchFlag, shapeFlag } = n2;
          if (patchFlag > 0) {
            if (patchFlag & 128) {
              patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              return;
            } else if (patchFlag & 256) {
              patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              return;
            }
          }
          if (shapeFlag & 8) {
            if (prevShapeFlag & 16) {
              unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
              hostSetElementText(container, c2);
            }
          } else {
            if (prevShapeFlag & 16) {
              if (shapeFlag & 16) {
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              } else {
                unmountChildren(c1, parentComponent, parentSuspense, true);
              }
            } else {
              if (prevShapeFlag & 8) {
                hostSetElementText(container, "");
              }
              if (shapeFlag & 16) {
                mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              }
            }
          }
        };
        const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          c1 = c1 || shared.EMPTY_ARR;
          c2 = c2 || shared.EMPTY_ARR;
          const oldLength = c1.length;
          const newLength = c2.length;
          const commonLength = Math.min(oldLength, newLength);
          let i;
          for (i = 0; i < commonLength; i++) {
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
          if (oldLength > newLength) {
            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
          } else {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
          }
        };
        const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          let i = 0;
          const l2 = c2.length;
          let e1 = c1.length - 1;
          let e22 = l2 - 1;
          while (i <= e1 && i <= e22) {
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) {
              patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else {
              break;
            }
            i++;
          }
          while (i <= e1 && i <= e22) {
            const n1 = c1[e1];
            const n2 = c2[e22] = optimized ? cloneIfMounted(c2[e22]) : normalizeVNode(c2[e22]);
            if (isSameVNodeType(n1, n2)) {
              patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else {
              break;
            }
            e1--;
            e22--;
          }
          if (i > e1) {
            if (i <= e22) {
              const nextPos = e22 + 1;
              const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
              while (i <= e22) {
                patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                i++;
              }
            }
          } else if (i > e22) {
            while (i <= e1) {
              unmount(c1[i], parentComponent, parentSuspense, true);
              i++;
            }
          } else {
            const s1 = i;
            const s2 = i;
            const keyToNewIndexMap = /* @__PURE__ */ new Map();
            for (i = s2; i <= e22; i++) {
              const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
              if (nextChild.key != null) {
                if (keyToNewIndexMap.has(nextChild.key)) {
                  warn2(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                }
                keyToNewIndexMap.set(nextChild.key, i);
              }
            }
            let j;
            let patched = 0;
            const toBePatched = e22 - s2 + 1;
            let moved = false;
            let maxNewIndexSoFar = 0;
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
              newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
              const prevChild = c1[i];
              if (patched >= toBePatched) {
                unmount(prevChild, parentComponent, parentSuspense, true);
                continue;
              }
              let newIndex;
              if (prevChild.key != null) {
                newIndex = keyToNewIndexMap.get(prevChild.key);
              } else {
                for (j = s2; j <= e22; j++) {
                  if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                    newIndex = j;
                    break;
                  }
                }
              }
              if (newIndex === void 0) {
                unmount(prevChild, parentComponent, parentSuspense, true);
              } else {
                newIndexToOldIndexMap[newIndex - s2] = i + 1;
                if (newIndex >= maxNewIndexSoFar) {
                  maxNewIndexSoFar = newIndex;
                } else {
                  moved = true;
                }
                patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                patched++;
              }
            }
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : shared.EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            for (i = toBePatched - 1; i >= 0; i--) {
              const nextIndex = s2 + i;
              const nextChild = c2[nextIndex];
              const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
              if (newIndexToOldIndexMap[i] === 0) {
                patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              } else if (moved) {
                if (j < 0 || i !== increasingNewIndexSequence[j]) {
                  move(nextChild, container, anchor, 2);
                } else {
                  j--;
                }
              }
            }
          }
        };
        const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
          const { el: el2, type, transition, children, shapeFlag } = vnode;
          if (shapeFlag & 6) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
          }
          if (shapeFlag & 128) {
            vnode.suspense.move(container, anchor, moveType);
            return;
          }
          if (shapeFlag & 64) {
            type.move(vnode, container, anchor, internals);
            return;
          }
          if (type === Fragment) {
            hostInsert(el2, container, anchor);
            for (let i = 0; i < children.length; i++) {
              move(children[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
          }
          if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
          }
          const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
          if (needTransition) {
            if (moveType === 0) {
              transition.beforeEnter(el2);
              hostInsert(el2, container, anchor);
              queuePostRenderEffect(() => transition.enter(el2), parentSuspense);
            } else {
              const { leave, delayLeave, afterLeave } = transition;
              const remove2 = () => hostInsert(el2, container, anchor);
              const performLeave = () => {
                leave(el2, () => {
                  remove2();
                  afterLeave && afterLeave();
                });
              };
              if (delayLeave) {
                delayLeave(el2, remove2, performLeave);
              } else {
                performLeave();
              }
            }
          } else {
            hostInsert(el2, container, anchor);
          }
        };
        const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
          const { type, props, ref: ref17, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
          if (ref17 != null) {
            setRef(ref17, null, parentSuspense, vnode, true);
          }
          if (shapeFlag & 256) {
            parentComponent.ctx.deactivate(vnode);
            return;
          }
          const shouldInvokeDirs = shapeFlag & 1 && dirs;
          const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
          let vnodeHook;
          if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
          if (shapeFlag & 6) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
          } else {
            if (shapeFlag & 128) {
              vnode.suspense.unmount(parentSuspense, doRemove);
              return;
            }
            if (shouldInvokeDirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            }
            if (shapeFlag & 64) {
              vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
              unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
              unmountChildren(children, parentComponent, parentSuspense);
            }
            if (doRemove) {
              remove(vnode);
            }
          }
          if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
              shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
            }, parentSuspense);
          }
        };
        const remove = (vnode) => {
          const { type, el: el2, anchor, transition } = vnode;
          if (type === Fragment) {
            if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
              vnode.children.forEach((child) => {
                if (child.type === Comment) {
                  hostRemove(child.el);
                } else {
                  remove(child);
                }
              });
            } else {
              removeFragment(el2, anchor);
            }
            return;
          }
          if (type === Static) {
            removeStaticNode(vnode);
            return;
          }
          const performRemove = () => {
            hostRemove(el2);
            if (transition && !transition.persisted && transition.afterLeave) {
              transition.afterLeave();
            }
          };
          if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el2, performRemove);
            if (delayLeave) {
              delayLeave(vnode.el, performRemove, performLeave);
            } else {
              performLeave();
            }
          } else {
            performRemove();
          }
        };
        const removeFragment = (cur, end) => {
          let next;
          while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
          }
          hostRemove(end);
        };
        const unmountComponent = (instance, parentSuspense, doRemove) => {
          if (instance.type.__hmrId) {
            unregisterHMR(instance);
          }
          const { bum, scope, update, subTree, um } = instance;
          if (bum) {
            shared.invokeArrayFns(bum);
          }
          scope.stop();
          if (update) {
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
          }
          if (um) {
            queuePostRenderEffect(um, parentSuspense);
          }
          queuePostRenderEffect(() => {
            instance.isUnmounted = true;
          }, parentSuspense);
          if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
              parentSuspense.resolve();
            }
          }
          {
            devtoolsComponentRemoved(instance);
          }
        };
        const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
          for (let i = start; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
          }
        };
        const getNextHostNode = (vnode) => {
          if (vnode.shapeFlag & 6) {
            return getNextHostNode(vnode.component.subTree);
          }
          if (vnode.shapeFlag & 128) {
            return vnode.suspense.next();
          }
          return hostNextSibling(vnode.anchor || vnode.el);
        };
        const render22 = (vnode, container, isSVG) => {
          if (vnode == null) {
            if (container._vnode) {
              unmount(container._vnode, null, null, true);
            }
          } else {
            patch(container._vnode || null, vnode, container, null, null, null, isSVG);
          }
          flushPreFlushCbs();
          flushPostFlushCbs();
          container._vnode = vnode;
        };
        const internals = {
          p: patch,
          um: unmount,
          m: move,
          r: remove,
          mt: mountComponent,
          mc: mountChildren,
          pc: patchChildren,
          pbc: patchBlockChildren,
          n: getNextHostNode,
          o: options
        };
        let hydrate;
        let hydrateNode;
        if (createHydrationFns) {
          [hydrate, hydrateNode] = createHydrationFns(internals);
        }
        return {
          render: render22,
          hydrate,
          createApp: createAppAPI(render22, hydrate)
        };
      }
      function toggleRecurse({ effect, update }, allowed) {
        effect.allowRecurse = update.allowRecurse = allowed;
      }
      function traverseStaticChildren(n1, n2, shallow = false) {
        const ch1 = n1.children;
        const ch2 = n2.children;
        if (shared.isArray(ch1) && shared.isArray(ch2)) {
          for (let i = 0; i < ch1.length; i++) {
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
              if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
              }
              if (!shallow)
                traverseStaticChildren(c1, c2);
            }
            if (c2.type === Comment && !c2.el) {
              c2.el = c1.el;
            }
          }
        }
      }
      function getSequence(arr) {
        const p = arr.slice();
        const result = [0];
        let i, j, u2, v, c;
        const len = arr.length;
        for (i = 0; i < len; i++) {
          const arrI = arr[i];
          if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
              p[i] = j;
              result.push(i);
              continue;
            }
            u2 = 0;
            v = result.length - 1;
            while (u2 < v) {
              c = u2 + v >> 1;
              if (arr[result[c]] < arrI) {
                u2 = c + 1;
              } else {
                v = c;
              }
            }
            if (arrI < arr[result[u2]]) {
              if (u2 > 0) {
                p[i] = result[u2 - 1];
              }
              result[u2] = i;
            }
          }
        }
        u2 = result.length;
        v = result[u2 - 1];
        while (u2-- > 0) {
          result[u2] = v;
          v = p[v];
        }
        return result;
      }
      var isTeleport = (type) => type.__isTeleport;
      var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
      var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
      var resolveTarget = (props, select) => {
        const targetSelector = props && props.to;
        if (shared.isString(targetSelector)) {
          if (!select) {
            warn2(`Current renderer does not support string target for Teleports. (missing querySelector renderer option)`);
            return null;
          } else {
            const target = select(targetSelector);
            if (!target) {
              warn2(`Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`);
            }
            return target;
          }
        } else {
          if (!targetSelector && !isTeleportDisabled(props)) {
            warn2(`Invalid Teleport target: ${targetSelector}`);
          }
          return targetSelector;
        }
      };
      var TeleportImpl = {
        __isTeleport: true,
        process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
          const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
          const disabled = isTeleportDisabled(n2.props);
          let { shapeFlag, children, dynamicChildren } = n2;
          if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
          }
          if (n1 == null) {
            const placeholder = n2.el = createComment("teleport start");
            const mainAnchor = n2.anchor = createComment("teleport end");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
              insert(targetAnchor, target);
              isSVG = isSVG || isTargetSVG(target);
            } else if (!disabled) {
              warn2("Invalid Teleport target on mount:", target, `(${typeof target})`);
            }
            const mount = (container2, anchor2) => {
              if (shapeFlag & 16) {
                mountChildren(children, container2, anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              }
            };
            if (disabled) {
              mount(container, mainAnchor);
            } else if (target) {
              mount(target, targetAnchor);
            }
          } else {
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
              patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
              traverseStaticChildren(n1, n2, true);
            } else if (!optimized) {
              patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            }
            if (disabled) {
              if (!wasDisabled) {
                moveTeleport(n2, container, mainAnchor, internals, 1);
              }
            } else {
              if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                if (nextTarget) {
                  moveTeleport(n2, nextTarget, null, internals, 0);
                } else {
                  warn2("Invalid Teleport target on update:", target, `(${typeof target})`);
                }
              } else if (wasDisabled) {
                moveTeleport(n2, target, targetAnchor, internals, 1);
              }
            }
          }
        },
        remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
          const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
          if (target) {
            hostRemove(targetAnchor);
          }
          if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16) {
              for (let i = 0; i < children.length; i++) {
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
              }
            }
          }
        },
        move: moveTeleport,
        hydrate: hydrateTeleport
      };
      function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
        if (moveType === 0) {
          insert(vnode.targetAnchor, container, parentAnchor);
        }
        const { el: el2, anchor, shapeFlag, children, props } = vnode;
        const isReorder = moveType === 2;
        if (isReorder) {
          insert(el2, container, parentAnchor);
        }
        if (!isReorder || isTeleportDisabled(props)) {
          if (shapeFlag & 16) {
            for (let i = 0; i < children.length; i++) {
              move(children[i], container, parentAnchor, 2);
            }
          }
        }
        if (isReorder) {
          insert(anchor, container, parentAnchor);
        }
      }
      function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
        const target = vnode.target = resolveTarget(vnode.props, querySelector);
        if (target) {
          const targetNode = target._lpa || target.firstChild;
          if (vnode.shapeFlag & 16) {
            if (isTeleportDisabled(vnode.props)) {
              vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
              vnode.targetAnchor = targetNode;
            } else {
              vnode.anchor = nextSibling(node);
              let targetAnchor = targetNode;
              while (targetAnchor) {
                targetAnchor = nextSibling(targetAnchor);
                if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
                  vnode.targetAnchor = targetAnchor;
                  target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                  break;
                }
              }
              hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
          }
        }
        return vnode.anchor && nextSibling(vnode.anchor);
      }
      var Teleport = TeleportImpl;
      var Fragment = Symbol("Fragment");
      var Text = Symbol("Text");
      var Comment = Symbol("Comment");
      var Static = Symbol("Static");
      var blockStack = [];
      var currentBlock = null;
      function openBlock(disableTracking = false) {
        blockStack.push(currentBlock = disableTracking ? null : []);
      }
      function closeBlock() {
        blockStack.pop();
        currentBlock = blockStack[blockStack.length - 1] || null;
      }
      var isBlockTreeEnabled = 1;
      function setBlockTracking(value) {
        isBlockTreeEnabled += value;
      }
      function setupBlock(vnode) {
        vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || shared.EMPTY_ARR : null;
        closeBlock();
        if (isBlockTreeEnabled > 0 && currentBlock) {
          currentBlock.push(vnode);
        }
        return vnode;
      }
      function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
        return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
      }
      function createBlock(type, props, children, patchFlag, dynamicProps) {
        return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
      }
      function isVNode(value) {
        return value ? value.__v_isVNode === true : false;
      }
      function isSameVNodeType(n1, n2) {
        if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
          return false;
        }
        return n1.type === n2.type && n1.key === n2.key;
      }
      var vnodeArgsTransformer;
      function transformVNodeArgs(transformer) {
        vnodeArgsTransformer = transformer;
      }
      var createVNodeWithArgsTransform = (...args) => {
        return _createVNode7(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
      };
      var InternalObjectKey = `__vInternal`;
      var normalizeKey = ({ key }) => key != null ? key : null;
      var normalizeRef = ({ ref: ref17, ref_key, ref_for }) => {
        return ref17 != null ? shared.isString(ref17) || reactivity.isRef(ref17) || shared.isFunction(ref17) ? { i: currentRenderingInstance, r: ref17, k: ref_key, f: !!ref_for } : ref17 : null;
      };
      function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
        const vnode = {
          __v_isVNode: true,
          __v_skip: true,
          type,
          props,
          key: props && normalizeKey(props),
          ref: props && normalizeRef(props),
          scopeId: currentScopeId,
          slotScopeIds: null,
          children,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag,
          patchFlag,
          dynamicProps,
          dynamicChildren: null,
          appContext: null
        };
        if (needFullChildrenNormalization) {
          normalizeChildren(vnode, children);
          if (shapeFlag & 128) {
            type.normalize(vnode);
          }
        } else if (children) {
          vnode.shapeFlag |= shared.isString(children) ? 8 : 16;
        }
        if (vnode.key !== vnode.key) {
          warn2(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
        }
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
          currentBlock.push(vnode);
        }
        return vnode;
      }
      var createVNode = createVNodeWithArgsTransform;
      function _createVNode7(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
        if (!type || type === NULL_DYNAMIC_COMPONENT) {
          if (!type) {
            warn2(`Invalid vnode type when creating vnode: ${type}.`);
          }
          type = Comment;
        }
        if (isVNode(type)) {
          const cloned = cloneVNode(type, props, true);
          if (children) {
            normalizeChildren(cloned, children);
          }
          if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6) {
              currentBlock[currentBlock.indexOf(type)] = cloned;
            } else {
              currentBlock.push(cloned);
            }
          }
          cloned.patchFlag |= -2;
          return cloned;
        }
        if (isClassComponent(type)) {
          type = type.__vccOpts;
        }
        if (props) {
          props = guardReactiveProps(props);
          let { class: klass, style } = props;
          if (klass && !shared.isString(klass)) {
            props.class = shared.normalizeClass(klass);
          }
          if (shared.isObject(style)) {
            if (reactivity.isProxy(style) && !shared.isArray(style)) {
              style = shared.extend({}, style);
            }
            props.style = shared.normalizeStyle(style);
          }
        }
        const shapeFlag = shared.isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : shared.isObject(type) ? 4 : shared.isFunction(type) ? 2 : 0;
        if (shapeFlag & 4 && reactivity.isProxy(type)) {
          type = reactivity.toRaw(type);
          warn2(`Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
        }
        return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
      }
      function guardReactiveProps(props) {
        if (!props)
          return null;
        return reactivity.isProxy(props) || InternalObjectKey in props ? shared.extend({}, props) : props;
      }
      function cloneVNode(vnode, extraProps, mergeRef = false) {
        const { props, ref: ref17, patchFlag, children } = vnode;
        const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
        const cloned = {
          __v_isVNode: true,
          __v_skip: true,
          type: vnode.type,
          props: mergedProps,
          key: mergedProps && normalizeKey(mergedProps),
          ref: extraProps && extraProps.ref ? mergeRef && ref17 ? shared.isArray(ref17) ? ref17.concat(normalizeRef(extraProps)) : [ref17, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref17,
          scopeId: vnode.scopeId,
          slotScopeIds: vnode.slotScopeIds,
          children: patchFlag === -1 && shared.isArray(children) ? children.map(deepCloneVNode) : children,
          target: vnode.target,
          targetAnchor: vnode.targetAnchor,
          staticCount: vnode.staticCount,
          shapeFlag: vnode.shapeFlag,
          patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
          dynamicProps: vnode.dynamicProps,
          dynamicChildren: vnode.dynamicChildren,
          appContext: vnode.appContext,
          dirs: vnode.dirs,
          transition: vnode.transition,
          component: vnode.component,
          suspense: vnode.suspense,
          ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
          ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
          el: vnode.el,
          anchor: vnode.anchor
        };
        return cloned;
      }
      function deepCloneVNode(vnode) {
        const cloned = cloneVNode(vnode);
        if (shared.isArray(vnode.children)) {
          cloned.children = vnode.children.map(deepCloneVNode);
        }
        return cloned;
      }
      function createTextVNode(text = " ", flag = 0) {
        return createVNode(Text, null, text, flag);
      }
      function createStaticVNode(content, numberOfNodes) {
        const vnode = createVNode(Static, null, content);
        vnode.staticCount = numberOfNodes;
        return vnode;
      }
      function createCommentVNode(text = "", asBlock = false) {
        return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
      }
      function normalizeVNode(child) {
        if (child == null || typeof child === "boolean") {
          return createVNode(Comment);
        } else if (shared.isArray(child)) {
          return createVNode(Fragment, null, child.slice());
        } else if (typeof child === "object") {
          return cloneIfMounted(child);
        } else {
          return createVNode(Text, null, String(child));
        }
      }
      function cloneIfMounted(child) {
        return child.el === null || child.memo ? child : cloneVNode(child);
      }
      function normalizeChildren(vnode, children) {
        let type = 0;
        const { shapeFlag } = vnode;
        if (children == null) {
          children = null;
        } else if (shared.isArray(children)) {
          type = 16;
        } else if (typeof children === "object") {
          if (shapeFlag & (1 | 64)) {
            const slot = children.default;
            if (slot) {
              slot._c && (slot._d = false);
              normalizeChildren(vnode, slot());
              slot._c && (slot._d = true);
            }
            return;
          } else {
            type = 32;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
              children._ctx = currentRenderingInstance;
            } else if (slotFlag === 3 && currentRenderingInstance) {
              if (currentRenderingInstance.slots._ === 1) {
                children._ = 1;
              } else {
                children._ = 2;
                vnode.patchFlag |= 1024;
              }
            }
          }
        } else if (shared.isFunction(children)) {
          children = { default: children, _ctx: currentRenderingInstance };
          type = 32;
        } else {
          children = String(children);
          if (shapeFlag & 64) {
            type = 16;
            children = [createTextVNode(children)];
          } else {
            type = 8;
          }
        }
        vnode.children = children;
        vnode.shapeFlag |= type;
      }
      function mergeProps(...args) {
        const ret = {};
        for (let i = 0; i < args.length; i++) {
          const toMerge = args[i];
          for (const key in toMerge) {
            if (key === "class") {
              if (ret.class !== toMerge.class) {
                ret.class = shared.normalizeClass([ret.class, toMerge.class]);
              }
            } else if (key === "style") {
              ret.style = shared.normalizeStyle([ret.style, toMerge.style]);
            } else if (shared.isOn(key)) {
              const existing = ret[key];
              const incoming = toMerge[key];
              if (incoming && existing !== incoming && !(shared.isArray(existing) && existing.includes(incoming))) {
                ret[key] = existing ? [].concat(existing, incoming) : incoming;
              }
            } else if (key !== "") {
              ret[key] = toMerge[key];
            }
          }
        }
        return ret;
      }
      function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
        callWithAsyncErrorHandling(hook, instance, 7, [
          vnode,
          prevVNode
        ]);
      }
      var emptyAppContext = createAppContext();
      var uid$1 = 0;
      function createComponentInstance(vnode, parent, suspense) {
        const type = vnode.type;
        const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
        const instance = {
          uid: uid$1++,
          vnode,
          type,
          parent,
          appContext,
          root: null,
          next: null,
          subTree: null,
          effect: null,
          update: null,
          scope: new reactivity.EffectScope(true),
          render: null,
          proxy: null,
          exposed: null,
          exposeProxy: null,
          withProxy: null,
          provides: parent ? parent.provides : Object.create(appContext.provides),
          accessCache: null,
          renderCache: [],
          components: null,
          directives: null,
          propsOptions: normalizePropsOptions(type, appContext),
          emitsOptions: normalizeEmitsOptions(type, appContext),
          emit: null,
          emitted: null,
          propsDefaults: shared.EMPTY_OBJ,
          inheritAttrs: type.inheritAttrs,
          ctx: shared.EMPTY_OBJ,
          data: shared.EMPTY_OBJ,
          props: shared.EMPTY_OBJ,
          attrs: shared.EMPTY_OBJ,
          slots: shared.EMPTY_OBJ,
          refs: shared.EMPTY_OBJ,
          setupState: shared.EMPTY_OBJ,
          setupContext: null,
          suspense,
          suspenseId: suspense ? suspense.pendingId : 0,
          asyncDep: null,
          asyncResolved: false,
          isMounted: false,
          isUnmounted: false,
          isDeactivated: false,
          bc: null,
          c: null,
          bm: null,
          m: null,
          bu: null,
          u: null,
          um: null,
          bum: null,
          da: null,
          a: null,
          rtg: null,
          rtc: null,
          ec: null,
          sp: null
        };
        {
          instance.ctx = createDevRenderContext(instance);
        }
        instance.root = parent ? parent.root : instance;
        instance.emit = emit$1.bind(null, instance);
        if (vnode.ce) {
          vnode.ce(instance);
        }
        return instance;
      }
      var currentInstance = null;
      var getCurrentInstance4 = () => currentInstance || currentRenderingInstance;
      var setCurrentInstance = (instance) => {
        currentInstance = instance;
        instance.scope.on();
      };
      var unsetCurrentInstance = () => {
        currentInstance && currentInstance.scope.off();
        currentInstance = null;
      };
      var isBuiltInTag = /* @__PURE__ */ shared.makeMap("slot,component");
      function validateComponentName(name, config) {
        const appIsNativeTag = config.isNativeTag || shared.NO;
        if (isBuiltInTag(name) || appIsNativeTag(name)) {
          warn2("Do not use built-in or reserved HTML elements as component id: " + name);
        }
      }
      function isStatefulComponent(instance) {
        return instance.vnode.shapeFlag & 4;
      }
      var isInSSRComponentSetup = false;
      function setupComponent(instance, isSSR = false) {
        isInSSRComponentSetup = isSSR;
        const { props, children } = instance.vnode;
        const isStateful = isStatefulComponent(instance);
        initProps(instance, props, isStateful, isSSR);
        initSlots(instance, children);
        const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
        isInSSRComponentSetup = false;
        return setupResult;
      }
      function setupStatefulComponent(instance, isSSR) {
        var _a3;
        const Component = instance.type;
        {
          if (Component.name) {
            validateComponentName(Component.name, instance.appContext.config);
          }
          if (Component.components) {
            const names = Object.keys(Component.components);
            for (let i = 0; i < names.length; i++) {
              validateComponentName(names[i], instance.appContext.config);
            }
          }
          if (Component.directives) {
            const names = Object.keys(Component.directives);
            for (let i = 0; i < names.length; i++) {
              validateDirectiveName(names[i]);
            }
          }
          if (Component.compilerOptions && isRuntimeOnly()) {
            warn2(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
          }
        }
        instance.accessCache = /* @__PURE__ */ Object.create(null);
        instance.proxy = reactivity.markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
        {
          exposePropsOnRenderContext(instance);
        }
        const { setup } = Component;
        if (setup) {
          const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
          setCurrentInstance(instance);
          reactivity.pauseTracking();
          const setupResult = callWithErrorHandling(setup, instance, 0, [reactivity.shallowReadonly(instance.props), setupContext]);
          reactivity.resetTracking();
          unsetCurrentInstance();
          if (shared.isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) {
              return setupResult.then((resolvedResult) => {
                handleSetupResult(instance, resolvedResult, isSSR);
              }).catch((e4) => {
                handleError(e4, instance, 0);
              });
            } else {
              instance.asyncDep = setupResult;
              if (!instance.suspense) {
                const name = (_a3 = Component.name) !== null && _a3 !== void 0 ? _a3 : "Anonymous";
                warn2(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
              }
            }
          } else {
            handleSetupResult(instance, setupResult, isSSR);
          }
        } else {
          finishComponentSetup(instance, isSSR);
        }
      }
      function handleSetupResult(instance, setupResult, isSSR) {
        if (shared.isFunction(setupResult)) {
          if (instance.type.__ssrInlineRender) {
            instance.ssrRender = setupResult;
          } else {
            instance.render = setupResult;
          }
        } else if (shared.isObject(setupResult)) {
          if (isVNode(setupResult)) {
            warn2(`setup() should not return VNodes directly - return a render function instead.`);
          }
          {
            instance.devtoolsRawSetupState = setupResult;
          }
          instance.setupState = reactivity.proxyRefs(setupResult);
          {
            exposeSetupStateOnRenderContext(instance);
          }
        } else if (setupResult !== void 0) {
          warn2(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
        }
        finishComponentSetup(instance, isSSR);
      }
      var compile2;
      var installWithProxy;
      function registerRuntimeCompiler(_compile) {
        compile2 = _compile;
        installWithProxy = (i) => {
          if (i.render._rc) {
            i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
          }
        };
      }
      var isRuntimeOnly = () => !compile2;
      function finishComponentSetup(instance, isSSR, skipOptions) {
        const Component = instance.type;
        if (!instance.render) {
          if (!isSSR && compile2 && !Component.render) {
            const template = Component.template || resolveMergedOptions(instance).template;
            if (template) {
              {
                startMeasure(instance, `compile`);
              }
              const { isCustomElement, compilerOptions } = instance.appContext.config;
              const { delimiters, compilerOptions: componentCompilerOptions } = Component;
              const finalCompilerOptions = shared.extend(shared.extend({
                isCustomElement,
                delimiters
              }, compilerOptions), componentCompilerOptions);
              Component.render = compile2(template, finalCompilerOptions);
              {
                endMeasure(instance, `compile`);
              }
            }
          }
          instance.render = Component.render || shared.NOOP;
          if (installWithProxy) {
            installWithProxy(instance);
          }
        }
        {
          setCurrentInstance(instance);
          reactivity.pauseTracking();
          applyOptions(instance);
          reactivity.resetTracking();
          unsetCurrentInstance();
        }
        if (!Component.render && instance.render === shared.NOOP && !isSSR) {
          if (!compile2 && Component.template) {
            warn2(`Component provided template option but runtime compilation is not supported in this build of Vue.`);
          } else {
            warn2(`Component is missing template or render function.`);
          }
        }
      }
      function createAttrsProxy(instance) {
        return new Proxy(instance.attrs, {
          get(target, key) {
            markAttrsAccessed();
            reactivity.track(instance, "get", "$attrs");
            return target[key];
          },
          set() {
            warn2(`setupContext.attrs is readonly.`);
            return false;
          },
          deleteProperty() {
            warn2(`setupContext.attrs is readonly.`);
            return false;
          }
        });
      }
      function createSetupContext(instance) {
        const expose = (exposed) => {
          if (instance.exposed) {
            warn2(`expose() should be called only once per setup().`);
          }
          instance.exposed = exposed || {};
        };
        let attrs;
        {
          return Object.freeze({
            get attrs() {
              return attrs || (attrs = createAttrsProxy(instance));
            },
            get slots() {
              return reactivity.shallowReadonly(instance.slots);
            },
            get emit() {
              return (event, ...args) => instance.emit(event, ...args);
            },
            expose
          });
        }
      }
      function getExposeProxy(instance) {
        if (instance.exposed) {
          return instance.exposeProxy || (instance.exposeProxy = new Proxy(reactivity.proxyRefs(reactivity.markRaw(instance.exposed)), {
            get(target, key) {
              if (key in target) {
                return target[key];
              } else if (key in publicPropertiesMap) {
                return publicPropertiesMap[key](instance);
              }
            }
          }));
        }
      }
      var classifyRE = /(?:^|[-_])(\w)/g;
      var classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
      function getComponentName(Component, includeInferred = true) {
        return shared.isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
      }
      function formatComponentName(instance, Component, isRoot = false) {
        let name = getComponentName(Component);
        if (!name && Component.__file) {
          const match = Component.__file.match(/([^/\\]+)\.\w+$/);
          if (match) {
            name = match[1];
          }
        }
        if (!name && instance && instance.parent) {
          const inferFromRegistry = (registry) => {
            for (const key in registry) {
              if (registry[key] === Component) {
                return key;
              }
            }
          };
          name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
        }
        return name ? classify(name) : isRoot ? `App` : `Anonymous`;
      }
      function isClassComponent(value) {
        return shared.isFunction(value) && "__vccOpts" in value;
      }
      var computed15 = (getterOrOptions, debugOptions) => {
        return reactivity.computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
      };
      var warnRuntimeUsage = (method) => warn2(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
      function defineProps() {
        {
          warnRuntimeUsage(`defineProps`);
        }
        return null;
      }
      function defineEmits() {
        {
          warnRuntimeUsage(`defineEmits`);
        }
        return null;
      }
      function defineExpose(exposed) {
        {
          warnRuntimeUsage(`defineExpose`);
        }
      }
      function withDefaults(props, defaults) {
        {
          warnRuntimeUsage(`withDefaults`);
        }
        return null;
      }
      function useSlots7() {
        return getContext().slots;
      }
      function useAttrs() {
        return getContext().attrs;
      }
      function getContext() {
        const i = getCurrentInstance4();
        if (!i) {
          warn2(`useContext() called without active instance.`);
        }
        return i.setupContext || (i.setupContext = createSetupContext(i));
      }
      function mergeDefaults(raw, defaults) {
        const props = shared.isArray(raw) ? raw.reduce((normalized, p) => (normalized[p] = {}, normalized), {}) : raw;
        for (const key in defaults) {
          const opt = props[key];
          if (opt) {
            if (shared.isArray(opt) || shared.isFunction(opt)) {
              props[key] = { type: opt, default: defaults[key] };
            } else {
              opt.default = defaults[key];
            }
          } else if (opt === null) {
            props[key] = { default: defaults[key] };
          } else {
            warn2(`props default key "${key}" has no corresponding declaration.`);
          }
        }
        return props;
      }
      function createPropsRestProxy(props, excludedKeys) {
        const ret = {};
        for (const key in props) {
          if (!excludedKeys.includes(key)) {
            Object.defineProperty(ret, key, {
              enumerable: true,
              get: () => props[key]
            });
          }
        }
        return ret;
      }
      function withAsyncContext(getAwaitable) {
        const ctx = getCurrentInstance4();
        if (!ctx) {
          warn2(`withAsyncContext called without active current instance. This is likely a bug.`);
        }
        let awaitable = getAwaitable();
        unsetCurrentInstance();
        if (shared.isPromise(awaitable)) {
          awaitable = awaitable.catch((e4) => {
            setCurrentInstance(ctx);
            throw e4;
          });
        }
        return [awaitable, () => setCurrentInstance(ctx)];
      }
      function h2(type, propsOrChildren, children) {
        const l = arguments.length;
        if (l === 2) {
          if (shared.isObject(propsOrChildren) && !shared.isArray(propsOrChildren)) {
            if (isVNode(propsOrChildren)) {
              return createVNode(type, null, [propsOrChildren]);
            }
            return createVNode(type, propsOrChildren);
          } else {
            return createVNode(type, null, propsOrChildren);
          }
        } else {
          if (l > 3) {
            children = Array.prototype.slice.call(arguments, 2);
          } else if (l === 3 && isVNode(children)) {
            children = [children];
          }
          return createVNode(type, propsOrChildren, children);
        }
      }
      var ssrContextKey = Symbol(`ssrContext`);
      var useSSRContext = () => {
        {
          const ctx = inject4(ssrContextKey);
          if (!ctx) {
            warn2(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
          }
          return ctx;
        }
      };
      function isShallow(value) {
        return !!(value && value["__v_isShallow"]);
      }
      function initCustomFormatter2() {
        if (typeof window === "undefined") {
          return;
        }
        const vueStyle = { style: "color:#3ba776" };
        const numberStyle = { style: "color:#0b1bc9" };
        const stringStyle = { style: "color:#b62e24" };
        const keywordStyle = { style: "color:#9d288c" };
        const formatter = {
          header(obj) {
            if (!shared.isObject(obj)) {
              return null;
            }
            if (obj.__isVue) {
              return ["div", vueStyle, `VueInstance`];
            } else if (reactivity.isRef(obj)) {
              return [
                "div",
                {},
                ["span", vueStyle, genRefFlag(obj)],
                "<",
                formatValue(obj.value),
                `>`
              ];
            } else if (reactivity.isReactive(obj)) {
              return [
                "div",
                {},
                ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
                "<",
                formatValue(obj),
                `>${reactivity.isReadonly(obj) ? ` (readonly)` : ``}`
              ];
            } else if (reactivity.isReadonly(obj)) {
              return [
                "div",
                {},
                ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
                "<",
                formatValue(obj),
                ">"
              ];
            }
            return null;
          },
          hasBody(obj) {
            return obj && obj.__isVue;
          },
          body(obj) {
            if (obj && obj.__isVue) {
              return [
                "div",
                {},
                ...formatInstance(obj.$)
              ];
            }
          }
        };
        function formatInstance(instance) {
          const blocks = [];
          if (instance.type.props && instance.props) {
            blocks.push(createInstanceBlock("props", reactivity.toRaw(instance.props)));
          }
          if (instance.setupState !== shared.EMPTY_OBJ) {
            blocks.push(createInstanceBlock("setup", instance.setupState));
          }
          if (instance.data !== shared.EMPTY_OBJ) {
            blocks.push(createInstanceBlock("data", reactivity.toRaw(instance.data)));
          }
          const computed16 = extractKeys(instance, "computed");
          if (computed16) {
            blocks.push(createInstanceBlock("computed", computed16));
          }
          const injected = extractKeys(instance, "inject");
          if (injected) {
            blocks.push(createInstanceBlock("injected", injected));
          }
          blocks.push([
            "div",
            {},
            [
              "span",
              {
                style: keywordStyle.style + ";opacity:0.66"
              },
              "$ (internal): "
            ],
            ["object", { object: instance }]
          ]);
          return blocks;
        }
        function createInstanceBlock(type, target) {
          target = shared.extend({}, target);
          if (!Object.keys(target).length) {
            return ["span", {}];
          }
          return [
            "div",
            { style: "line-height:1.25em;margin-bottom:0.6em" },
            [
              "div",
              {
                style: "color:#476582"
              },
              type
            ],
            [
              "div",
              {
                style: "padding-left:1.25em"
              },
              ...Object.keys(target).map((key) => {
                return [
                  "div",
                  {},
                  ["span", keywordStyle, key + ": "],
                  formatValue(target[key], false)
                ];
              })
            ]
          ];
        }
        function formatValue(v, asRaw = true) {
          if (typeof v === "number") {
            return ["span", numberStyle, v];
          } else if (typeof v === "string") {
            return ["span", stringStyle, JSON.stringify(v)];
          } else if (typeof v === "boolean") {
            return ["span", keywordStyle, v];
          } else if (shared.isObject(v)) {
            return ["object", { object: asRaw ? reactivity.toRaw(v) : v }];
          } else {
            return ["span", stringStyle, String(v)];
          }
        }
        function extractKeys(instance, type) {
          const Comp = instance.type;
          if (shared.isFunction(Comp)) {
            return;
          }
          const extracted = {};
          for (const key in instance.ctx) {
            if (isKeyOfType(Comp, key, type)) {
              extracted[key] = instance.ctx[key];
            }
          }
          return extracted;
        }
        function isKeyOfType(Comp, key, type) {
          const opts = Comp[type];
          if (shared.isArray(opts) && opts.includes(key) || shared.isObject(opts) && key in opts) {
            return true;
          }
          if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
            return true;
          }
          if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
            return true;
          }
        }
        function genRefFlag(v) {
          if (isShallow(v)) {
            return `ShallowRef`;
          }
          if (v.effect) {
            return `ComputedRef`;
          }
          return `Ref`;
        }
        if (window.devtoolsFormatters) {
          window.devtoolsFormatters.push(formatter);
        } else {
          window.devtoolsFormatters = [formatter];
        }
      }
      function withMemo(memo, render22, cache, index) {
        const cached = cache[index];
        if (cached && isMemoSame(cached, memo)) {
          return cached;
        }
        const ret = render22();
        ret.memo = memo.slice();
        return cache[index] = ret;
      }
      function isMemoSame(cached, memo) {
        const prev = cached.memo;
        if (prev.length != memo.length) {
          return false;
        }
        for (let i = 0; i < prev.length; i++) {
          if (shared.hasChanged(prev[i], memo[i])) {
            return false;
          }
        }
        if (isBlockTreeEnabled > 0 && currentBlock) {
          currentBlock.push(cached);
        }
        return true;
      }
      var version = "3.2.39";
      var _ssrUtils = {
        createComponentInstance,
        setupComponent,
        renderComponentRoot,
        setCurrentRenderingInstance,
        isVNode,
        normalizeVNode
      };
      var ssrUtils = _ssrUtils;
      var resolveFilter = null;
      var compatUtils = null;
      exports.EffectScope = reactivity.EffectScope;
      exports.ReactiveEffect = reactivity.ReactiveEffect;
      exports.customRef = reactivity.customRef;
      exports.effect = reactivity.effect;
      exports.effectScope = reactivity.effectScope;
      exports.getCurrentScope = reactivity.getCurrentScope;
      exports.isProxy = reactivity.isProxy;
      exports.isReactive = reactivity.isReactive;
      exports.isReadonly = reactivity.isReadonly;
      exports.isRef = reactivity.isRef;
      exports.isShallow = reactivity.isShallow;
      exports.markRaw = reactivity.markRaw;
      exports.onScopeDispose = reactivity.onScopeDispose;
      exports.proxyRefs = reactivity.proxyRefs;
      exports.reactive = reactivity.reactive;
      exports.readonly = reactivity.readonly;
      exports.ref = reactivity.ref;
      exports.shallowReactive = reactivity.shallowReactive;
      exports.shallowReadonly = reactivity.shallowReadonly;
      exports.shallowRef = reactivity.shallowRef;
      exports.stop = reactivity.stop;
      exports.toRaw = reactivity.toRaw;
      exports.toRef = reactivity.toRef;
      exports.toRefs = reactivity.toRefs;
      exports.triggerRef = reactivity.triggerRef;
      exports.unref = reactivity.unref;
      exports.camelize = shared.camelize;
      exports.capitalize = shared.capitalize;
      exports.normalizeClass = shared.normalizeClass;
      exports.normalizeProps = shared.normalizeProps;
      exports.normalizeStyle = shared.normalizeStyle;
      exports.toDisplayString = shared.toDisplayString;
      exports.toHandlerKey = shared.toHandlerKey;
      exports.BaseTransition = BaseTransition;
      exports.Comment = Comment;
      exports.Fragment = Fragment;
      exports.KeepAlive = KeepAlive;
      exports.Static = Static;
      exports.Suspense = Suspense;
      exports.Teleport = Teleport;
      exports.Text = Text;
      exports.callWithAsyncErrorHandling = callWithAsyncErrorHandling;
      exports.callWithErrorHandling = callWithErrorHandling;
      exports.cloneVNode = cloneVNode;
      exports.compatUtils = compatUtils;
      exports.computed = computed15;
      exports.createBlock = createBlock;
      exports.createCommentVNode = createCommentVNode;
      exports.createElementBlock = createElementBlock;
      exports.createElementVNode = createBaseVNode;
      exports.createHydrationRenderer = createHydrationRenderer;
      exports.createPropsRestProxy = createPropsRestProxy;
      exports.createRenderer = createRenderer;
      exports.createSlots = createSlots;
      exports.createStaticVNode = createStaticVNode;
      exports.createTextVNode = createTextVNode;
      exports.createVNode = createVNode;
      exports.defineAsyncComponent = defineAsyncComponent;
      exports.defineComponent = defineComponent;
      exports.defineEmits = defineEmits;
      exports.defineExpose = defineExpose;
      exports.defineProps = defineProps;
      exports.getCurrentInstance = getCurrentInstance4;
      exports.getTransitionRawChildren = getTransitionRawChildren;
      exports.guardReactiveProps = guardReactiveProps;
      exports.h = h2;
      exports.handleError = handleError;
      exports.initCustomFormatter = initCustomFormatter2;
      exports.inject = inject4;
      exports.isMemoSame = isMemoSame;
      exports.isRuntimeOnly = isRuntimeOnly;
      exports.isVNode = isVNode;
      exports.mergeDefaults = mergeDefaults;
      exports.mergeProps = mergeProps;
      exports.nextTick = nextTick8;
      exports.onActivated = onActivated;
      exports.onBeforeMount = onBeforeMount2;
      exports.onBeforeUnmount = onBeforeUnmount2;
      exports.onBeforeUpdate = onBeforeUpdate2;
      exports.onDeactivated = onDeactivated;
      exports.onErrorCaptured = onErrorCaptured;
      exports.onMounted = onMounted10;
      exports.onRenderTracked = onRenderTracked;
      exports.onRenderTriggered = onRenderTriggered;
      exports.onServerPrefetch = onServerPrefetch;
      exports.onUnmounted = onUnmounted3;
      exports.onUpdated = onUpdated2;
      exports.openBlock = openBlock;
      exports.popScopeId = popScopeId;
      exports.provide = provide2;
      exports.pushScopeId = pushScopeId;
      exports.queuePostFlushCb = queuePostFlushCb;
      exports.registerRuntimeCompiler = registerRuntimeCompiler;
      exports.renderList = renderList;
      exports.renderSlot = renderSlot;
      exports.resolveComponent = resolveComponent;
      exports.resolveDirective = resolveDirective;
      exports.resolveDynamicComponent = resolveDynamicComponent;
      exports.resolveFilter = resolveFilter;
      exports.resolveTransitionHooks = resolveTransitionHooks;
      exports.setBlockTracking = setBlockTracking;
      exports.setDevtoolsHook = setDevtoolsHook;
      exports.setTransitionHooks = setTransitionHooks;
      exports.ssrContextKey = ssrContextKey;
      exports.ssrUtils = ssrUtils;
      exports.toHandlers = toHandlers;
      exports.transformVNodeArgs = transformVNodeArgs;
      exports.useAttrs = useAttrs;
      exports.useSSRContext = useSSRContext;
      exports.useSlots = useSlots7;
      exports.useTransitionState = useTransitionState;
      exports.version = version;
      exports.warn = warn2;
      exports.watch = watch13;
      exports.watchEffect = watchEffect3;
      exports.watchPostEffect = watchPostEffect;
      exports.watchSyncEffect = watchSyncEffect;
      exports.withAsyncContext = withAsyncContext;
      exports.withCtx = withCtx;
      exports.withDefaults = withDefaults;
      exports.withDirectives = withDirectives;
      exports.withMemo = withMemo;
      exports.withScopeId = withScopeId;
    }
  });

  // node_modules/@vue/runtime-core/index.js
  var require_runtime_core = __commonJS({
    "node_modules/@vue/runtime-core/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_runtime_core_cjs();
      }
    }
  });

  // node_modules/@vue/runtime-dom/dist/runtime-dom.cjs.js
  var require_runtime_dom_cjs = __commonJS({
    "node_modules/@vue/runtime-dom/dist/runtime-dom.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var runtimeCore = require_runtime_core();
      var shared = require_shared();
      var svgNS = "http://www.w3.org/2000/svg";
      var doc = typeof document !== "undefined" ? document : null;
      var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
      var nodeOps = {
        insert: (child, parent, anchor) => {
          parent.insertBefore(child, anchor || null);
        },
        remove: (child) => {
          const parent = child.parentNode;
          if (parent) {
            parent.removeChild(child);
          }
        },
        createElement: (tag, isSVG, is2, props) => {
          const el2 = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is2 ? { is: is2 } : void 0);
          if (tag === "select" && props && props.multiple != null) {
            el2.setAttribute("multiple", props.multiple);
          }
          return el2;
        },
        createText: (text) => doc.createTextNode(text),
        createComment: (text) => doc.createComment(text),
        setText: (node, text) => {
          node.nodeValue = text;
        },
        setElementText: (el2, text) => {
          el2.textContent = text;
        },
        parentNode: (node) => node.parentNode,
        nextSibling: (node) => node.nextSibling,
        querySelector: (selector) => doc.querySelector(selector),
        setScopeId(el2, id2) {
          el2.setAttribute(id2, "");
        },
        cloneNode(el2) {
          const cloned = el2.cloneNode(true);
          if (`_value` in el2) {
            cloned._value = el2._value;
          }
          return cloned;
        },
        insertStaticContent(content, parent, anchor, isSVG, start, end) {
          const before = anchor ? anchor.previousSibling : parent.lastChild;
          if (start && (start === end || start.nextSibling)) {
            while (true) {
              parent.insertBefore(start.cloneNode(true), anchor);
              if (start === end || !(start = start.nextSibling))
                break;
            }
          } else {
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
              const wrapper = template.firstChild;
              while (wrapper.firstChild) {
                template.appendChild(wrapper.firstChild);
              }
              template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
          }
          return [
            before ? before.nextSibling : parent.firstChild,
            anchor ? anchor.previousSibling : parent.lastChild
          ];
        }
      };
      function patchClass(el2, value, isSVG) {
        const transitionClasses = el2._vtc;
        if (transitionClasses) {
          value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
        }
        if (value == null) {
          el2.removeAttribute("class");
        } else if (isSVG) {
          el2.setAttribute("class", value);
        } else {
          el2.className = value;
        }
      }
      function patchStyle(el2, prev, next) {
        const style = el2.style;
        const isCssString = shared.isString(next);
        if (next && !isCssString) {
          for (const key in next) {
            setStyle(style, key, next[key]);
          }
          if (prev && !shared.isString(prev)) {
            for (const key in prev) {
              if (next[key] == null) {
                setStyle(style, key, "");
              }
            }
          }
        } else {
          const currentDisplay = style.display;
          if (isCssString) {
            if (prev !== next) {
              style.cssText = next;
            }
          } else if (prev) {
            el2.removeAttribute("style");
          }
          if ("_vod" in el2) {
            style.display = currentDisplay;
          }
        }
      }
      var importantRE = /\s*!important$/;
      function setStyle(style, name, val) {
        if (shared.isArray(val)) {
          val.forEach((v) => setStyle(style, name, v));
        } else {
          if (val == null)
            val = "";
          if (name.startsWith("--")) {
            style.setProperty(name, val);
          } else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
              style.setProperty(shared.hyphenate(prefixed), val.replace(importantRE, ""), "important");
            } else {
              style[prefixed] = val;
            }
          }
        }
      }
      var prefixes = ["Webkit", "Moz", "ms"];
      var prefixCache = {};
      function autoPrefix(style, rawName) {
        const cached = prefixCache[rawName];
        if (cached) {
          return cached;
        }
        let name = runtimeCore.camelize(rawName);
        if (name !== "filter" && name in style) {
          return prefixCache[rawName] = name;
        }
        name = shared.capitalize(name);
        for (let i = 0; i < prefixes.length; i++) {
          const prefixed = prefixes[i] + name;
          if (prefixed in style) {
            return prefixCache[rawName] = prefixed;
          }
        }
        return rawName;
      }
      var xlinkNS = "http://www.w3.org/1999/xlink";
      function patchAttr(el2, key, value, isSVG, instance) {
        if (isSVG && key.startsWith("xlink:")) {
          if (value == null) {
            el2.removeAttributeNS(xlinkNS, key.slice(6, key.length));
          } else {
            el2.setAttributeNS(xlinkNS, key, value);
          }
        } else {
          const isBoolean = shared.isSpecialBooleanAttr(key);
          if (value == null || isBoolean && !shared.includeBooleanAttr(value)) {
            el2.removeAttribute(key);
          } else {
            el2.setAttribute(key, isBoolean ? "" : value);
          }
        }
      }
      function patchDOMProp(el2, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
        if (key === "innerHTML" || key === "textContent") {
          if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
          }
          el2[key] = value == null ? "" : value;
          return;
        }
        if (key === "value" && el2.tagName !== "PROGRESS" && !el2.tagName.includes("-")) {
          el2._value = value;
          const newValue = value == null ? "" : value;
          if (el2.value !== newValue || el2.tagName === "OPTION") {
            el2.value = newValue;
          }
          if (value == null) {
            el2.removeAttribute(key);
          }
          return;
        }
        let needRemove = false;
        if (value === "" || value == null) {
          const type = typeof el2[key];
          if (type === "boolean") {
            value = shared.includeBooleanAttr(value);
          } else if (value == null && type === "string") {
            value = "";
            needRemove = true;
          } else if (type === "number") {
            value = 0;
            needRemove = true;
          }
        }
        try {
          el2[key] = value;
        } catch (e4) {
          {
            runtimeCore.warn(`Failed setting prop "${key}" on <${el2.tagName.toLowerCase()}>: value ${value} is invalid.`, e4);
          }
        }
        needRemove && el2.removeAttribute(key);
      }
      var [_getNow, skipTimestampCheck] = /* @__PURE__ */ (() => {
        let _getNow2 = Date.now;
        let skipTimestampCheck2 = false;
        if (typeof window !== "undefined") {
          if (Date.now() > document.createEvent("Event").timeStamp) {
            _getNow2 = performance.now.bind(performance);
          }
          const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
          skipTimestampCheck2 = !!(ffMatch && Number(ffMatch[1]) <= 53);
        }
        return [_getNow2, skipTimestampCheck2];
      })();
      var cachedNow = 0;
      var p = /* @__PURE__ */ Promise.resolve();
      var reset = () => {
        cachedNow = 0;
      };
      var getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
      function addEventListener(el2, event, handler, options) {
        el2.addEventListener(event, handler, options);
      }
      function removeEventListener(el2, event, handler, options) {
        el2.removeEventListener(event, handler, options);
      }
      function patchEvent(el2, rawName, prevValue, nextValue, instance = null) {
        const invokers = el2._vei || (el2._vei = {});
        const existingInvoker = invokers[rawName];
        if (nextValue && existingInvoker) {
          existingInvoker.value = nextValue;
        } else {
          const [name, options] = parseName(rawName);
          if (nextValue) {
            const invoker = invokers[rawName] = createInvoker(nextValue, instance);
            addEventListener(el2, name, invoker, options);
          } else if (existingInvoker) {
            removeEventListener(el2, name, existingInvoker, options);
            invokers[rawName] = void 0;
          }
        }
      }
      var optionsModifierRE = /(?:Once|Passive|Capture)$/;
      function parseName(name) {
        let options;
        if (optionsModifierRE.test(name)) {
          options = {};
          let m;
          while (m = name.match(optionsModifierRE)) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
          }
        }
        const event = name[2] === ":" ? name.slice(3) : shared.hyphenate(name.slice(2));
        return [event, options];
      }
      function createInvoker(initialValue, instance) {
        const invoker = (e4) => {
          const timeStamp = e4.timeStamp || _getNow();
          if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
            runtimeCore.callWithAsyncErrorHandling(patchStopImmediatePropagation(e4, invoker.value), instance, 5, [e4]);
          }
        };
        invoker.value = initialValue;
        invoker.attached = getNow();
        return invoker;
      }
      function patchStopImmediatePropagation(e4, value) {
        if (shared.isArray(value)) {
          const originalStop = e4.stopImmediatePropagation;
          e4.stopImmediatePropagation = () => {
            originalStop.call(e4);
            e4._stopped = true;
          };
          return value.map((fn2) => (e5) => !e5._stopped && fn2 && fn2(e5));
        } else {
          return value;
        }
      }
      var nativeOnRE = /^on[a-z]/;
      var patchProp = (el2, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
        if (key === "class") {
          patchClass(el2, nextValue, isSVG);
        } else if (key === "style") {
          patchStyle(el2, prevValue, nextValue);
        } else if (shared.isOn(key)) {
          if (!shared.isModelListener(key)) {
            patchEvent(el2, key, prevValue, nextValue, parentComponent);
          }
        } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el2, key, nextValue, isSVG)) {
          patchDOMProp(el2, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
        } else {
          if (key === "true-value") {
            el2._trueValue = nextValue;
          } else if (key === "false-value") {
            el2._falseValue = nextValue;
          }
          patchAttr(el2, key, nextValue, isSVG);
        }
      };
      function shouldSetAsProp(el2, key, value, isSVG) {
        if (isSVG) {
          if (key === "innerHTML" || key === "textContent") {
            return true;
          }
          if (key in el2 && nativeOnRE.test(key) && shared.isFunction(value)) {
            return true;
          }
          return false;
        }
        if (key === "spellcheck" || key === "draggable" || key === "translate") {
          return false;
        }
        if (key === "form") {
          return false;
        }
        if (key === "list" && el2.tagName === "INPUT") {
          return false;
        }
        if (key === "type" && el2.tagName === "TEXTAREA") {
          return false;
        }
        if (nativeOnRE.test(key) && shared.isString(value)) {
          return false;
        }
        return key in el2;
      }
      function defineCustomElement(options, hydrate2) {
        const Comp = runtimeCore.defineComponent(options);
        class VueCustomElement extends VueElement {
          constructor(initialProps) {
            super(Comp, initialProps, hydrate2);
          }
        }
        VueCustomElement.def = Comp;
        return VueCustomElement;
      }
      var defineSSRCustomElement = (options) => {
        return defineCustomElement(options, hydrate);
      };
      var BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
      };
      var VueElement = class extends BaseClass {
        constructor(_def, _props = {}, hydrate2) {
          super();
          this._def = _def;
          this._props = _props;
          this._instance = null;
          this._connected = false;
          this._resolved = false;
          this._numberProps = null;
          if (this.shadowRoot && hydrate2) {
            hydrate2(this._createVNode(), this.shadowRoot);
          } else {
            if (this.shadowRoot) {
              runtimeCore.warn(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
            }
            this.attachShadow({ mode: "open" });
          }
        }
        connectedCallback() {
          this._connected = true;
          if (!this._instance) {
            this._resolveDef();
          }
        }
        disconnectedCallback() {
          this._connected = false;
          runtimeCore.nextTick(() => {
            if (!this._connected) {
              render22(null, this.shadowRoot);
              this._instance = null;
            }
          });
        }
        _resolveDef() {
          if (this._resolved) {
            return;
          }
          this._resolved = true;
          for (let i = 0; i < this.attributes.length; i++) {
            this._setAttr(this.attributes[i].name);
          }
          new MutationObserver((mutations) => {
            for (const m of mutations) {
              this._setAttr(m.attributeName);
            }
          }).observe(this, { attributes: true });
          const resolve = (def) => {
            const { props, styles } = def;
            const hasOptions = !shared.isArray(props);
            const rawKeys = props ? hasOptions ? Object.keys(props) : props : [];
            let numberProps;
            if (hasOptions) {
              for (const key in this._props) {
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                  this._props[key] = shared.toNumber(this._props[key]);
                  (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[key] = true;
                }
              }
            }
            this._numberProps = numberProps;
            for (const key of Object.keys(this)) {
              if (key[0] !== "_") {
                this._setProp(key, this[key], true, false);
              }
            }
            for (const key of rawKeys.map(shared.camelize)) {
              Object.defineProperty(this, key, {
                get() {
                  return this._getProp(key);
                },
                set(val) {
                  this._setProp(key, val);
                }
              });
            }
            this._applyStyles(styles);
            this._update();
          };
          const asyncDef = this._def.__asyncLoader;
          if (asyncDef) {
            asyncDef().then(resolve);
          } else {
            resolve(this._def);
          }
        }
        _setAttr(key) {
          let value = this.getAttribute(key);
          if (this._numberProps && this._numberProps[key]) {
            value = shared.toNumber(value);
          }
          this._setProp(shared.camelize(key), value, false);
        }
        _getProp(key) {
          return this._props[key];
        }
        _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
          if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) {
              this._update();
            }
            if (shouldReflect) {
              if (val === true) {
                this.setAttribute(shared.hyphenate(key), "");
              } else if (typeof val === "string" || typeof val === "number") {
                this.setAttribute(shared.hyphenate(key), val + "");
              } else if (!val) {
                this.removeAttribute(shared.hyphenate(key));
              }
            }
          }
        }
        _update() {
          render22(this._createVNode(), this.shadowRoot);
        }
        _createVNode() {
          const vnode = runtimeCore.createVNode(this._def, shared.extend({}, this._props));
          if (!this._instance) {
            vnode.ce = (instance) => {
              this._instance = instance;
              instance.isCE = true;
              {
                instance.ceReload = (newStyles) => {
                  if (this._styles) {
                    this._styles.forEach((s2) => this.shadowRoot.removeChild(s2));
                    this._styles.length = 0;
                  }
                  this._applyStyles(newStyles);
                  if (!this._def.__asyncLoader) {
                    this._instance = null;
                    this._update();
                  }
                };
              }
              instance.emit = (event, ...args) => {
                this.dispatchEvent(new CustomEvent(event, {
                  detail: args
                }));
              };
              let parent = this;
              while (parent = parent && (parent.parentNode || parent.host)) {
                if (parent instanceof VueElement) {
                  instance.parent = parent._instance;
                  break;
                }
              }
            };
          }
          return vnode;
        }
        _applyStyles(styles) {
          if (styles) {
            styles.forEach((css) => {
              const s2 = document.createElement("style");
              s2.textContent = css;
              this.shadowRoot.appendChild(s2);
              {
                (this._styles || (this._styles = [])).push(s2);
              }
            });
          }
        }
      };
      function useCssModule(name = "$style") {
        {
          const instance = runtimeCore.getCurrentInstance();
          if (!instance) {
            runtimeCore.warn(`useCssModule must be called inside setup()`);
            return shared.EMPTY_OBJ;
          }
          const modules = instance.type.__cssModules;
          if (!modules) {
            runtimeCore.warn(`Current instance does not have CSS modules injected.`);
            return shared.EMPTY_OBJ;
          }
          const mod = modules[name];
          if (!mod) {
            runtimeCore.warn(`Current instance does not have CSS module named "${name}".`);
            return shared.EMPTY_OBJ;
          }
          return mod;
        }
      }
      function useCssVars(getter) {
        return;
      }
      var TRANSITION = "transition";
      var ANIMATION = "animation";
      var Transition = (props, { slots }) => runtimeCore.h(runtimeCore.BaseTransition, resolveTransitionProps(props), slots);
      Transition.displayName = "Transition";
      var DOMTransitionPropsValidators = {
        name: String,
        type: String,
        css: {
          type: Boolean,
          default: true
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
      };
      var TransitionPropsValidators = Transition.props = /* @__PURE__ */ shared.extend({}, runtimeCore.BaseTransition.props, DOMTransitionPropsValidators);
      var callHook = (hook, args = []) => {
        if (shared.isArray(hook)) {
          hook.forEach((h2) => h2(...args));
        } else if (hook) {
          hook(...args);
        }
      };
      var hasExplicitCallback = (hook) => {
        return hook ? shared.isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
      };
      function resolveTransitionProps(rawProps) {
        const baseProps = {};
        for (const key in rawProps) {
          if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
          }
        }
        if (rawProps.css === false) {
          return baseProps;
        }
        const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
        const durations = normalizeDuration(duration);
        const enterDuration = durations && durations[0];
        const leaveDuration = durations && durations[1];
        const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
        const finishEnter = (el2, isAppear, done) => {
          removeTransitionClass(el2, isAppear ? appearToClass : enterToClass);
          removeTransitionClass(el2, isAppear ? appearActiveClass : enterActiveClass);
          done && done();
        };
        const finishLeave = (el2, done) => {
          el2._isLeaving = false;
          removeTransitionClass(el2, leaveFromClass);
          removeTransitionClass(el2, leaveToClass);
          removeTransitionClass(el2, leaveActiveClass);
          done && done();
        };
        const makeEnterHook = (isAppear) => {
          return (el2, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el2, isAppear, done);
            callHook(hook, [el2, resolve]);
            nextFrame(() => {
              removeTransitionClass(el2, isAppear ? appearFromClass : enterFromClass);
              addTransitionClass(el2, isAppear ? appearToClass : enterToClass);
              if (!hasExplicitCallback(hook)) {
                whenTransitionEnds(el2, type, enterDuration, resolve);
              }
            });
          };
        };
        return shared.extend(baseProps, {
          onBeforeEnter(el2) {
            callHook(onBeforeEnter, [el2]);
            addTransitionClass(el2, enterFromClass);
            addTransitionClass(el2, enterActiveClass);
          },
          onBeforeAppear(el2) {
            callHook(onBeforeAppear, [el2]);
            addTransitionClass(el2, appearFromClass);
            addTransitionClass(el2, appearActiveClass);
          },
          onEnter: makeEnterHook(false),
          onAppear: makeEnterHook(true),
          onLeave(el2, done) {
            el2._isLeaving = true;
            const resolve = () => finishLeave(el2, done);
            addTransitionClass(el2, leaveFromClass);
            forceReflow();
            addTransitionClass(el2, leaveActiveClass);
            nextFrame(() => {
              if (!el2._isLeaving) {
                return;
              }
              removeTransitionClass(el2, leaveFromClass);
              addTransitionClass(el2, leaveToClass);
              if (!hasExplicitCallback(onLeave)) {
                whenTransitionEnds(el2, type, leaveDuration, resolve);
              }
            });
            callHook(onLeave, [el2, resolve]);
          },
          onEnterCancelled(el2) {
            finishEnter(el2, false);
            callHook(onEnterCancelled, [el2]);
          },
          onAppearCancelled(el2) {
            finishEnter(el2, true);
            callHook(onAppearCancelled, [el2]);
          },
          onLeaveCancelled(el2) {
            finishLeave(el2);
            callHook(onLeaveCancelled, [el2]);
          }
        });
      }
      function normalizeDuration(duration) {
        if (duration == null) {
          return null;
        } else if (shared.isObject(duration)) {
          return [NumberOf(duration.enter), NumberOf(duration.leave)];
        } else {
          const n = NumberOf(duration);
          return [n, n];
        }
      }
      function NumberOf(val) {
        const res = shared.toNumber(val);
        validateDuration(res);
        return res;
      }
      function validateDuration(val) {
        if (typeof val !== "number") {
          runtimeCore.warn(`<transition> explicit duration is not a valid number - got ${JSON.stringify(val)}.`);
        } else if (isNaN(val)) {
          runtimeCore.warn(`<transition> explicit duration is NaN - the duration expression might be incorrect.`);
        }
      }
      function addTransitionClass(el2, cls) {
        cls.split(/\s+/).forEach((c) => c && el2.classList.add(c));
        (el2._vtc || (el2._vtc = /* @__PURE__ */ new Set())).add(cls);
      }
      function removeTransitionClass(el2, cls) {
        cls.split(/\s+/).forEach((c) => c && el2.classList.remove(c));
        const { _vtc } = el2;
        if (_vtc) {
          _vtc.delete(cls);
          if (!_vtc.size) {
            el2._vtc = void 0;
          }
        }
      }
      function nextFrame(cb) {
        requestAnimationFrame(() => {
          requestAnimationFrame(cb);
        });
      }
      var endId = 0;
      function whenTransitionEnds(el2, expectedType, explicitTimeout, resolve) {
        const id2 = el2._endId = ++endId;
        const resolveIfNotStale = () => {
          if (id2 === el2._endId) {
            resolve();
          }
        };
        if (explicitTimeout) {
          return setTimeout(resolveIfNotStale, explicitTimeout);
        }
        const { type, timeout, propCount } = getTransitionInfo(el2, expectedType);
        if (!type) {
          return resolve();
        }
        const endEvent = type + "end";
        let ended = 0;
        const end = () => {
          el2.removeEventListener(endEvent, onEnd);
          resolveIfNotStale();
        };
        const onEnd = (e4) => {
          if (e4.target === el2 && ++ended >= propCount) {
            end();
          }
        };
        setTimeout(() => {
          if (ended < propCount) {
            end();
          }
        }, timeout + 1);
        el2.addEventListener(endEvent, onEnd);
      }
      function getTransitionInfo(el2, expectedType) {
        const styles = window.getComputedStyle(el2);
        const getStyleProperties = (key) => (styles[key] || "").split(", ");
        const transitionDelays = getStyleProperties(TRANSITION + "Delay");
        const transitionDurations = getStyleProperties(TRANSITION + "Duration");
        const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
        const animationDelays = getStyleProperties(ANIMATION + "Delay");
        const animationDurations = getStyleProperties(ANIMATION + "Duration");
        const animationTimeout = getTimeout(animationDelays, animationDurations);
        let type = null;
        let timeout = 0;
        let propCount = 0;
        if (expectedType === TRANSITION) {
          if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
          }
        } else if (expectedType === ANIMATION) {
          if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
          }
        } else {
          timeout = Math.max(transitionTimeout, animationTimeout);
          type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
          propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
        }
        const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
        return {
          type,
          timeout,
          propCount,
          hasTransform
        };
      }
      function getTimeout(delays, durations) {
        while (delays.length < durations.length) {
          delays = delays.concat(delays);
        }
        return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
      }
      function toMs(s2) {
        return Number(s2.slice(0, -1).replace(",", ".")) * 1e3;
      }
      function forceReflow() {
        return document.body.offsetHeight;
      }
      var positionMap = /* @__PURE__ */ new WeakMap();
      var newPositionMap = /* @__PURE__ */ new WeakMap();
      var TransitionGroupImpl = {
        name: "TransitionGroup",
        props: /* @__PURE__ */ shared.extend({}, TransitionPropsValidators, {
          tag: String,
          moveClass: String
        }),
        setup(props, { slots }) {
          const instance = runtimeCore.getCurrentInstance();
          const state = runtimeCore.useTransitionState();
          let prevChildren;
          let children;
          runtimeCore.onUpdated(() => {
            if (!prevChildren.length) {
              return;
            }
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
              return;
            }
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            forceReflow();
            movedChildren.forEach((c) => {
              const el2 = c.el;
              const style = el2.style;
              addTransitionClass(el2, moveClass);
              style.transform = style.webkitTransform = style.transitionDuration = "";
              const cb = el2._moveCb = (e4) => {
                if (e4 && e4.target !== el2) {
                  return;
                }
                if (!e4 || /transform$/.test(e4.propertyName)) {
                  el2.removeEventListener("transitionend", cb);
                  el2._moveCb = null;
                  removeTransitionClass(el2, moveClass);
                }
              };
              el2.addEventListener("transitionend", cb);
            });
          });
          return () => {
            const rawProps = runtimeCore.toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || runtimeCore.Fragment;
            prevChildren = children;
            children = slots.default ? runtimeCore.getTransitionRawChildren(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
              const child = children[i];
              if (child.key != null) {
                runtimeCore.setTransitionHooks(child, runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance));
              } else {
                runtimeCore.warn(`<TransitionGroup> children must be keyed.`);
              }
            }
            if (prevChildren) {
              for (let i = 0; i < prevChildren.length; i++) {
                const child = prevChildren[i];
                runtimeCore.setTransitionHooks(child, runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance));
                positionMap.set(child, child.el.getBoundingClientRect());
              }
            }
            return runtimeCore.createVNode(tag, null, children);
          };
        }
      };
      var TransitionGroup = TransitionGroupImpl;
      function callPendingCbs(c) {
        const el2 = c.el;
        if (el2._moveCb) {
          el2._moveCb();
        }
        if (el2._enterCb) {
          el2._enterCb();
        }
      }
      function recordPosition(c) {
        newPositionMap.set(c, c.el.getBoundingClientRect());
      }
      function applyTranslation(c) {
        const oldPos = positionMap.get(c);
        const newPos = newPositionMap.get(c);
        const dx = oldPos.left - newPos.left;
        const dy = oldPos.top - newPos.top;
        if (dx || dy) {
          const s2 = c.el.style;
          s2.transform = s2.webkitTransform = `translate(${dx}px,${dy}px)`;
          s2.transitionDuration = "0s";
          return c;
        }
      }
      function hasCSSTransform(el2, root, moveClass) {
        const clone = el2.cloneNode();
        if (el2._vtc) {
          el2._vtc.forEach((cls) => {
            cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
          });
        }
        moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
        clone.style.display = "none";
        const container = root.nodeType === 1 ? root : root.parentNode;
        container.appendChild(clone);
        const { hasTransform } = getTransitionInfo(clone);
        container.removeChild(clone);
        return hasTransform;
      }
      var getModelAssigner = (vnode) => {
        const fn2 = vnode.props["onUpdate:modelValue"] || false;
        return shared.isArray(fn2) ? (value) => shared.invokeArrayFns(fn2, value) : fn2;
      };
      function onCompositionStart(e4) {
        e4.target.composing = true;
      }
      function onCompositionEnd(e4) {
        const target = e4.target;
        if (target.composing) {
          target.composing = false;
          target.dispatchEvent(new Event("input"));
        }
      }
      var vModelText = {
        created(el2, { modifiers: { lazy, trim, number } }, vnode) {
          el2._assign = getModelAssigner(vnode);
          const castToNumber = number || vnode.props && vnode.props.type === "number";
          addEventListener(el2, lazy ? "change" : "input", (e4) => {
            if (e4.target.composing)
              return;
            let domValue = el2.value;
            if (trim) {
              domValue = domValue.trim();
            }
            if (castToNumber) {
              domValue = shared.toNumber(domValue);
            }
            el2._assign(domValue);
          });
          if (trim) {
            addEventListener(el2, "change", () => {
              el2.value = el2.value.trim();
            });
          }
          if (!lazy) {
            addEventListener(el2, "compositionstart", onCompositionStart);
            addEventListener(el2, "compositionend", onCompositionEnd);
            addEventListener(el2, "change", onCompositionEnd);
          }
        },
        mounted(el2, { value }) {
          el2.value = value == null ? "" : value;
        },
        beforeUpdate(el2, { value, modifiers: { lazy, trim, number } }, vnode) {
          el2._assign = getModelAssigner(vnode);
          if (el2.composing)
            return;
          if (document.activeElement === el2 && el2.type !== "range") {
            if (lazy) {
              return;
            }
            if (trim && el2.value.trim() === value) {
              return;
            }
            if ((number || el2.type === "number") && shared.toNumber(el2.value) === value) {
              return;
            }
          }
          const newValue = value == null ? "" : value;
          if (el2.value !== newValue) {
            el2.value = newValue;
          }
        }
      };
      var vModelCheckbox = {
        deep: true,
        created(el2, _, vnode) {
          el2._assign = getModelAssigner(vnode);
          addEventListener(el2, "change", () => {
            const modelValue = el2._modelValue;
            const elementValue = getValue(el2);
            const checked = el2.checked;
            const assign2 = el2._assign;
            if (shared.isArray(modelValue)) {
              const index = shared.looseIndexOf(modelValue, elementValue);
              const found = index !== -1;
              if (checked && !found) {
                assign2(modelValue.concat(elementValue));
              } else if (!checked && found) {
                const filtered = [...modelValue];
                filtered.splice(index, 1);
                assign2(filtered);
              }
            } else if (shared.isSet(modelValue)) {
              const cloned = new Set(modelValue);
              if (checked) {
                cloned.add(elementValue);
              } else {
                cloned.delete(elementValue);
              }
              assign2(cloned);
            } else {
              assign2(getCheckboxValue(el2, checked));
            }
          });
        },
        mounted: setChecked,
        beforeUpdate(el2, binding, vnode) {
          el2._assign = getModelAssigner(vnode);
          setChecked(el2, binding, vnode);
        }
      };
      function setChecked(el2, { value, oldValue }, vnode) {
        el2._modelValue = value;
        if (shared.isArray(value)) {
          el2.checked = shared.looseIndexOf(value, vnode.props.value) > -1;
        } else if (shared.isSet(value)) {
          el2.checked = value.has(vnode.props.value);
        } else if (value !== oldValue) {
          el2.checked = shared.looseEqual(value, getCheckboxValue(el2, true));
        }
      }
      var vModelRadio = {
        created(el2, { value }, vnode) {
          el2.checked = shared.looseEqual(value, vnode.props.value);
          el2._assign = getModelAssigner(vnode);
          addEventListener(el2, "change", () => {
            el2._assign(getValue(el2));
          });
        },
        beforeUpdate(el2, { value, oldValue }, vnode) {
          el2._assign = getModelAssigner(vnode);
          if (value !== oldValue) {
            el2.checked = shared.looseEqual(value, vnode.props.value);
          }
        }
      };
      var vModelSelect = {
        deep: true,
        created(el2, { value, modifiers: { number } }, vnode) {
          const isSetModel = shared.isSet(value);
          addEventListener(el2, "change", () => {
            const selectedVal = Array.prototype.filter.call(el2.options, (o) => o.selected).map((o) => number ? shared.toNumber(getValue(o)) : getValue(o));
            el2._assign(el2.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
          });
          el2._assign = getModelAssigner(vnode);
        },
        mounted(el2, { value }) {
          setSelected(el2, value);
        },
        beforeUpdate(el2, _binding, vnode) {
          el2._assign = getModelAssigner(vnode);
        },
        updated(el2, { value }) {
          setSelected(el2, value);
        }
      };
      function setSelected(el2, value) {
        const isMultiple = el2.multiple;
        if (isMultiple && !shared.isArray(value) && !shared.isSet(value)) {
          runtimeCore.warn(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
          return;
        }
        for (let i = 0, l = el2.options.length; i < l; i++) {
          const option = el2.options[i];
          const optionValue = getValue(option);
          if (isMultiple) {
            if (shared.isArray(value)) {
              option.selected = shared.looseIndexOf(value, optionValue) > -1;
            } else {
              option.selected = value.has(optionValue);
            }
          } else {
            if (shared.looseEqual(getValue(option), value)) {
              if (el2.selectedIndex !== i)
                el2.selectedIndex = i;
              return;
            }
          }
        }
        if (!isMultiple && el2.selectedIndex !== -1) {
          el2.selectedIndex = -1;
        }
      }
      function getValue(el2) {
        return "_value" in el2 ? el2._value : el2.value;
      }
      function getCheckboxValue(el2, checked) {
        const key = checked ? "_trueValue" : "_falseValue";
        return key in el2 ? el2[key] : checked;
      }
      var vModelDynamic = {
        created(el2, binding, vnode) {
          callModelHook(el2, binding, vnode, null, "created");
        },
        mounted(el2, binding, vnode) {
          callModelHook(el2, binding, vnode, null, "mounted");
        },
        beforeUpdate(el2, binding, vnode, prevVNode) {
          callModelHook(el2, binding, vnode, prevVNode, "beforeUpdate");
        },
        updated(el2, binding, vnode, prevVNode) {
          callModelHook(el2, binding, vnode, prevVNode, "updated");
        }
      };
      function resolveDynamicModel(tagName, type) {
        switch (tagName) {
          case "SELECT":
            return vModelSelect;
          case "TEXTAREA":
            return vModelText;
          default:
            switch (type) {
              case "checkbox":
                return vModelCheckbox;
              case "radio":
                return vModelRadio;
              default:
                return vModelText;
            }
        }
      }
      function callModelHook(el2, binding, vnode, prevVNode, hook) {
        const modelToUse = resolveDynamicModel(el2.tagName, vnode.props && vnode.props.type);
        const fn2 = modelToUse[hook];
        fn2 && fn2(el2, binding, vnode, prevVNode);
      }
      function initVModelForSSR() {
        vModelText.getSSRProps = ({ value }) => ({ value });
        vModelRadio.getSSRProps = ({ value }, vnode) => {
          if (vnode.props && shared.looseEqual(vnode.props.value, value)) {
            return { checked: true };
          }
        };
        vModelCheckbox.getSSRProps = ({ value }, vnode) => {
          if (shared.isArray(value)) {
            if (vnode.props && shared.looseIndexOf(value, vnode.props.value) > -1) {
              return { checked: true };
            }
          } else if (shared.isSet(value)) {
            if (vnode.props && value.has(vnode.props.value)) {
              return { checked: true };
            }
          } else if (value) {
            return { checked: true };
          }
        };
        vModelDynamic.getSSRProps = (binding, vnode) => {
          if (typeof vnode.type !== "string") {
            return;
          }
          const modelToUse = resolveDynamicModel(vnode.type.toUpperCase(), vnode.props && vnode.props.type);
          if (modelToUse.getSSRProps) {
            return modelToUse.getSSRProps(binding, vnode);
          }
        };
      }
      var systemModifiers = ["ctrl", "shift", "alt", "meta"];
      var modifierGuards = {
        stop: (e4) => e4.stopPropagation(),
        prevent: (e4) => e4.preventDefault(),
        self: (e4) => e4.target !== e4.currentTarget,
        ctrl: (e4) => !e4.ctrlKey,
        shift: (e4) => !e4.shiftKey,
        alt: (e4) => !e4.altKey,
        meta: (e4) => !e4.metaKey,
        left: (e4) => "button" in e4 && e4.button !== 0,
        middle: (e4) => "button" in e4 && e4.button !== 1,
        right: (e4) => "button" in e4 && e4.button !== 2,
        exact: (e4, modifiers) => systemModifiers.some((m) => e4[`${m}Key`] && !modifiers.includes(m))
      };
      var withModifiers = (fn2, modifiers) => {
        return (event, ...args) => {
          for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
              return;
          }
          return fn2(event, ...args);
        };
      };
      var keyNames = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
      };
      var withKeys = (fn2, modifiers) => {
        return (event) => {
          if (!("key" in event)) {
            return;
          }
          const eventKey = shared.hyphenate(event.key);
          if (modifiers.some((k3) => k3 === eventKey || keyNames[k3] === eventKey)) {
            return fn2(event);
          }
        };
      };
      var vShow = {
        beforeMount(el2, { value }, { transition }) {
          el2._vod = el2.style.display === "none" ? "" : el2.style.display;
          if (transition && value) {
            transition.beforeEnter(el2);
          } else {
            setDisplay(el2, value);
          }
        },
        mounted(el2, { value }, { transition }) {
          if (transition && value) {
            transition.enter(el2);
          }
        },
        updated(el2, { value, oldValue }, { transition }) {
          if (!value === !oldValue)
            return;
          if (transition) {
            if (value) {
              transition.beforeEnter(el2);
              setDisplay(el2, true);
              transition.enter(el2);
            } else {
              transition.leave(el2, () => {
                setDisplay(el2, false);
              });
            }
          } else {
            setDisplay(el2, value);
          }
        },
        beforeUnmount(el2, { value }) {
          setDisplay(el2, value);
        }
      };
      function setDisplay(el2, value) {
        el2.style.display = value ? el2._vod : "none";
      }
      function initVShowForSSR() {
        vShow.getSSRProps = ({ value }) => {
          if (!value) {
            return { style: { display: "none" } };
          }
        };
      }
      var rendererOptions = /* @__PURE__ */ shared.extend({ patchProp }, nodeOps);
      var renderer;
      var enabledHydration = false;
      function ensureRenderer() {
        return renderer || (renderer = runtimeCore.createRenderer(rendererOptions));
      }
      function ensureHydrationRenderer() {
        renderer = enabledHydration ? renderer : runtimeCore.createHydrationRenderer(rendererOptions);
        enabledHydration = true;
        return renderer;
      }
      var render22 = (...args) => {
        ensureRenderer().render(...args);
      };
      var hydrate = (...args) => {
        ensureHydrationRenderer().hydrate(...args);
      };
      var createApp2 = (...args) => {
        const app = ensureRenderer().createApp(...args);
        {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
        }
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (!container)
            return;
          const component = app._component;
          if (!shared.isFunction(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
          }
          container.innerHTML = "";
          const proxy = mount(container, false, container instanceof SVGElement);
          if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
          }
          return proxy;
        };
        return app;
      };
      var createSSRApp = (...args) => {
        const app = ensureHydrationRenderer().createApp(...args);
        {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
        }
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (container) {
            return mount(container, true, container instanceof SVGElement);
          }
        };
        return app;
      };
      function injectNativeTagCheck(app) {
        Object.defineProperty(app.config, "isNativeTag", {
          value: (tag) => shared.isHTMLTag(tag) || shared.isSVGTag(tag),
          writable: false
        });
      }
      function injectCompilerOptionsCheck(app) {
        if (runtimeCore.isRuntimeOnly()) {
          const isCustomElement = app.config.isCustomElement;
          Object.defineProperty(app.config, "isCustomElement", {
            get() {
              return isCustomElement;
            },
            set() {
              runtimeCore.warn(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
            }
          });
          const compilerOptions = app.config.compilerOptions;
          const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
          Object.defineProperty(app.config, "compilerOptions", {
            get() {
              runtimeCore.warn(msg);
              return compilerOptions;
            },
            set() {
              runtimeCore.warn(msg);
            }
          });
        }
      }
      function normalizeContainer(container) {
        if (shared.isString(container)) {
          const res = document.querySelector(container);
          if (!res) {
            runtimeCore.warn(`Failed to mount app: mount target selector "${container}" returned null.`);
          }
          return res;
        }
        if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
          runtimeCore.warn(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
        }
        return container;
      }
      var ssrDirectiveInitialized = false;
      var initDirectivesForSSR = () => {
        if (!ssrDirectiveInitialized) {
          ssrDirectiveInitialized = true;
          initVModelForSSR();
          initVShowForSSR();
        }
      };
      Object.keys(runtimeCore).forEach(function(k3) {
        if (k3 !== "default")
          exports[k3] = runtimeCore[k3];
      });
      exports.Transition = Transition;
      exports.TransitionGroup = TransitionGroup;
      exports.VueElement = VueElement;
      exports.createApp = createApp2;
      exports.createSSRApp = createSSRApp;
      exports.defineCustomElement = defineCustomElement;
      exports.defineSSRCustomElement = defineSSRCustomElement;
      exports.hydrate = hydrate;
      exports.initDirectivesForSSR = initDirectivesForSSR;
      exports.render = render22;
      exports.useCssModule = useCssModule;
      exports.useCssVars = useCssVars;
      exports.vModelCheckbox = vModelCheckbox;
      exports.vModelDynamic = vModelDynamic;
      exports.vModelRadio = vModelRadio;
      exports.vModelSelect = vModelSelect;
      exports.vModelText = vModelText;
      exports.vShow = vShow;
      exports.withKeys = withKeys;
      exports.withModifiers = withModifiers;
    }
  });

  // node_modules/@vue/runtime-dom/index.js
  var require_runtime_dom = __commonJS({
    "node_modules/@vue/runtime-dom/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_runtime_dom_cjs();
      }
    }
  });

  // node_modules/vue/dist/vue.runtime.esm-bundler.js
  var vue_runtime_esm_bundler_exports = {};
  __export(vue_runtime_esm_bundler_exports, {
    compile: () => compile
  });
  var import_runtime_dom = __toESM(require_runtime_dom());
  __reExport(vue_runtime_esm_bundler_exports, __toESM(require_runtime_dom()));
  function initDev() {
    {
      (0, import_runtime_dom.initCustomFormatter)();
    }
  }
  if (true) {
    initDev();
  }
  var compile = () => {
    if (true) {
      (0, import_runtime_dom.warn)(`Runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
    }
  };

  // node_modules/vue-demi/lib/index.mjs
  var lib_exports = {};
  __export(lib_exports, {
    Vue: () => vue_runtime_esm_bundler_exports,
    Vue2: () => Vue2,
    compile: () => compile,
    del: () => del,
    install: () => install,
    isVue2: () => isVue2,
    isVue3: () => isVue3,
    set: () => set
  });
  __reExport(lib_exports, vue_runtime_esm_bundler_exports);
  var isVue2 = false;
  var isVue3 = true;
  var Vue2 = void 0;
  function install() {
  }
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }

  // node_modules/@vue/devtools-api/lib/esm/env.js
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  var isProxyAvailable = typeof Proxy === "function";

  // node_modules/@vue/devtools-api/lib/esm/const.js
  var HOOK_SETUP = "devtools-plugin:setup";
  var HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";

  // node_modules/@vue/devtools-api/lib/esm/time.js
  var supported;
  var perf;
  function isPerformanceSupported() {
    var _a3;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a3 = global.perf_hooks) === null || _a3 === void 0 ? void 0 : _a3.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }

  // node_modules/@vue/devtools-api/lib/esm/proxy.js
  var ApiProxy = class {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id2 in plugin.settings) {
          const item = plugin.settings[id2];
          defaultSettings[id2] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e4) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e4) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  };

  // node_modules/@vue/devtools-api/lib/esm/index.js
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }

  // node_modules/pinia/dist/pinia.mjs
  var activePinia;
  var setActivePinia = (pinia) => activePinia = pinia;
  var piniaSymbol = true ? Symbol("pinia") : Symbol();
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  var IS_CLIENT = typeof window !== "undefined";
  var USE_DEVTOOLS = IS_CLIENT;
  var _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e4) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e4) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  var _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  var isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  var saveAs = !IS_CLIENT ? () => {
  } : typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : "msSaveOrOpenBlob" in _navigator ? msSaveAs : fileSaverSaveAs;
  function downloadSaveAs(blob, name = "download", opts) {
    const a2 = document.createElement("a");
    a2.download = name;
    a2.rel = "noopener";
    if (typeof blob === "string") {
      a2.href = blob;
      if (a2.origin !== location.origin) {
        if (corsEnabled(a2.href)) {
          download(blob, name, opts);
        } else {
          a2.target = "_blank";
          click(a2);
        }
      } else {
        click(a2);
      }
    } else {
      a2.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a2.href);
      }, 4e4);
      setTimeout(function() {
        click(a2);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a2 = document.createElement("a");
        a2.href = blob;
        a2.target = "_blank";
        setTimeout(function() {
          click(a2);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "\u{1F34D} " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      pinia.state.value = JSON.parse(await navigator.clipboard.readText());
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  var fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = await getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      pinia.state.value = JSON.parse(text);
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  var PINIA_ROOT_LABEL = "\u{1F34D} Pinia (root)";
  var PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id2) => storeMap.get(id2)._getters).map((id2) => {
          const store2 = storeMap.get(id2);
          return {
            editable: false,
            key: id2,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  var isTimelineActive = true;
  var componentStateTypes = [];
  var MUTATIONS_LAYER_ID = "pinia:mutations";
  var INSPECTOR_ID = "pinia";
  var getStoreType = (id2) => "\u{1F34D} " + id2;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia \u{1F34D}",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia \u{1F34D}`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia \u{1F34D}",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (!store._isOptionsAPI) {
                toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: (0, lib_exports.toRaw)(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : Object.keys(store.$state).reduce((state, key) => {
                state[key] = store.$state[key];
                return state;
              }, {})
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("\u{1F34D}")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia \u{1F34D}",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "\u{1F6EB} " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "\u{1F6EC} " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "\u{1F4A5} " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        (0, lib_exports.watch)(() => (0, lib_exports.unref)(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: __spreadValues({
            store: formatDisplay(store.$id)
          }, formatEventData(events)),
          groupId: activeAction
        };
        activeAction = void 0;
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "\u2935\uFE0F";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "\u{1F9E9}";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = (0, lib_exports.markRaw)((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "\u{1F525} " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store \u{1F5D1}`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed \u{1F195}`);
    });
  }
  var runningActionId = 0;
  var activeAction;
  function patchActionForGrouping(store, actionNames) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = (0, lib_exports.toRaw)(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        });
        return actions[actionName].apply(trackedStore, arguments);
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    if (options.state) {
      store._isOptionsAPI = true;
    }
    if (typeof options.state === "function") {
      patchActionForGrouping(store, Object.keys(options.actions));
      const originalHotUpdate = store._hotUpdate;
      (0, lib_exports.toRaw)(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
      };
    }
    addStoreToDevtools(app, store);
  }
  function createPinia() {
    const scope = (0, lib_exports.effectScope)(true);
    const state = scope.run(() => (0, lib_exports.ref)({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = (0, lib_exports.markRaw)({
      install(app) {
        setActivePinia(pinia);
        if (!isVue2) {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !(0, lib_exports.isRef)(subPatch) && !(0, lib_exports.isReactive)(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        if (isVue2) {
          set(newState, key, subPatch);
        } else {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  var noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && (0, lib_exports.getCurrentInstance)()) {
      (0, lib_exports.onUnmounted)(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !(0, lib_exports.isRef)(subPatch) && !(0, lib_exports.isReactive)(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  var skipHydrateSymbol = true ? Symbol("pinia:skipHydration") : Symbol();
  var skipHydrateMap = /* @__PURE__ */ new WeakMap();
  function shouldHydrate(obj) {
    return isVue2 ? !skipHydrateMap.has(obj) : !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  var { assign } = Object;
  function isComputed(o) {
    return !!((0, lib_exports.isRef)(o) && o.effect);
  }
  function createOptionsStore(id2, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id2];
    let store;
    function setup() {
      if (!initialState && !hot) {
        if (isVue2) {
          set(pinia.state.value, id2, state ? state() : {});
        } else {
          pinia.state.value[id2] = state ? state() : {};
        }
      }
      const localState = hot ? (0, lib_exports.toRefs)((0, lib_exports.ref)(state ? state() : {}).value) : (0, lib_exports.toRefs)(pinia.state.value[id2]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id2}".`);
        }
        computedGetters[name] = (0, lib_exports.markRaw)((0, lib_exports.computed)(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id2);
          if (isVue2 && !store2._r)
            return;
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id2, setup, options, pinia, hot, true);
    store.$reset = function $reset() {
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    };
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
    };
    if (!isVue2) {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = (0, lib_exports.markRaw)([]);
    let actionSubscriptions = (0, lib_exports.markRaw)([]);
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      if (isVue2) {
        set(pinia.state.value, $id, {});
      } else {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = (0, lib_exports.ref)({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      if (true) {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      (0, lib_exports.nextTick)().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = true ? () => {
      throw new Error(`\u{1F34D}: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    } : noop;
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ (0, lib_exports.markRaw)({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => (0, lib_exports.watch)(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    if (isVue2) {
      partialStore._r = false;
    }
    const store = (0, lib_exports.reactive)(true ? assign({
      _hmrPayload,
      _customProperties: (0, lib_exports.markRaw)(/* @__PURE__ */ new Set())
    }, partialStore) : partialStore);
    pinia._s.set($id, store);
    const setupStore = pinia._e.run(() => {
      scope = (0, lib_exports.effectScope)();
      return scope.run(() => setup());
    });
    for (const key in setupStore) {
      const prop = setupStore[key];
      if ((0, lib_exports.isRef)(prop) && !isComputed(prop) || (0, lib_exports.isReactive)(prop)) {
        if (hot) {
          set(hotState.value, key, (0, lib_exports.toRef)(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if ((0, lib_exports.isRef)(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          if (isVue2) {
            set(pinia.state.value[$id], key, prop);
          } else {
            pinia.state.value[$id][key] = prop;
          }
        }
        if (true) {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        if (isVue2) {
          set(setupStore, key, actionValue);
        } else {
          setupStore[key] = actionValue;
        }
        if (true) {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else if (true) {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? options.getters[key] : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || (setupStore._getters = (0, lib_exports.markRaw)([]));
            getters.push(key);
          }
        }
      }
    }
    if (isVue2) {
      Object.keys(setupStore).forEach((key) => {
        set(store, key, setupStore[key]);
      });
    } else {
      assign(store, setupStore);
      assign((0, lib_exports.toRaw)(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    if (true) {
      store._hotUpdate = (0, lib_exports.markRaw)((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, (0, lib_exports.toRef)(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = (0, lib_exports.toRef)(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        (0, lib_exports.nextTick)().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (0, lib_exports.computed)(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          }) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, __spreadValues({
          value: store[p]
        }, nonEnumerable));
      });
    }
    if (isVue2) {
      store._r = true;
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id2;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id2 = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id2 = idOrOptions.id;
    }
    function useStore3(pinia, hot) {
      const currentInstance = (0, lib_exports.getCurrentInstance)();
      pinia = (false ? null : pinia) || currentInstance && (0, lib_exports.inject)(piniaSymbol);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id2)) {
        if (isSetupStore) {
          createSetupStore(id2, setup, options, pinia);
        } else {
          createOptionsStore(id2, options, pinia);
        }
        if (true) {
          useStore3._pinia = pinia;
        }
      }
      const store = pinia._s.get(id2);
      if (hot) {
        const hotId = "__hot:" + id2;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT && currentInstance && currentInstance.proxy && !hot) {
        const vm = currentInstance.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id2] = store;
      }
      return store;
    }
    useStore3.$id = id2;
    return useStore3;
  }

  // frappe/public/js/workflow_builder/utils.js
  function get_workflow_elements(workflow) {
    let elements = [];
    let states = {};
    let x2 = 150;
    let y2 = 100;
    function state_obj(id2, data) {
      let state = {
        id: id2.toString(),
        type: "state",
        position: { x: x2, y: y2 },
        data
      };
      if (!states[data.state]) {
        states[data.state] = [id2, { x: x2, y: y2 }];
      }
      return state;
    }
    function action_obj(id2, data, position) {
      return {
        id: "action-" + id2,
        type: "action",
        position,
        data
      };
    }
    function transition_obj(id2, source, target) {
      return {
        id: "edge-" + id2,
        type: "transition",
        source: source.toString(),
        target: target.toString(),
        sourceHandle: "right",
        targetHandle: "left",
        updatable: true,
        animated: true
      };
    }
    workflow.states.forEach((state, i) => {
      x2 += 400;
      let doc_status_map = {
        0: "Draft",
        1: "Submitted",
        2: "Cancelled"
      };
      elements.push(state_obj(i + 1, {
        state: state.state,
        doc_status: doc_status_map[state.doc_status],
        allow_edit: state.allow_edit,
        update_field: state.update_field,
        update_value: state.update_value,
        is_optional_state: state.is_optional_state,
        next_action_email_template: state.next_action_email_template,
        message: state.message
      }));
    });
    workflow.transitions.forEach((transition, i) => {
      let source = states[transition.state];
      let target = states[transition.next_state];
      let position = { x: source[1].x + 250, y: y2 + 20 };
      let data = {
        from: transition.state,
        to: transition.next_state,
        action: transition.action,
        allowed: transition.allowed,
        allow_self_approval: transition.allow_self_approval,
        condition: transition.condition
      };
      let action = "action-" + (i + 1);
      elements.push(action_obj(i + 1, data, position));
      elements.push(transition_obj(source[0] + "-" + action, source[0], action));
      elements.push(transition_obj(action + "-" + target[0], action, target[0]));
    });
    return elements;
  }
  function validate_transitions(state, next_state) {
    let message;
    if (state.doc_status == "Cancelled") {
      message = __("Cannot change state of Cancelled Document <b>({0} State)</b>", [
        state.state
      ]);
    }
    if (state.doc_status == "Submitted" && next_state.doc_status == "Draft") {
      message = __("Submitted document cannot be converted back to draft while transitioning from <b>{0} State</b> to <b>{1} State</b>", [state.state, next_state.state]);
    }
    if (state.doc_status == "Draft" && next_state.doc_status == "Cancelled") {
      message = __("Cannot cancel before submitting while transitioning from <b>{0} State</b> to <b>{1} State</b>", [state.state, next_state.state]);
    }
    return message;
  }

  // node_modules/@vueuse/shared/index.mjs
  var _a;
  var isClient = typeof window !== "undefined";
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var timestamp = () => +Date.now();
  var noop2 = () => {
  };
  var isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
  function resolveUnref(r) {
    return typeof r === "function" ? r() : (0, lib_exports.unref)(r);
  }
  function createFilterWrapper(filter, fn2) {
    function wrapper(...args) {
      filter(() => fn2.apply(this, args), { fn: fn2, thisArg: this, args });
    }
    return wrapper;
  }
  var bypassFilter = (invoke) => {
    return invoke();
  };
  function debounceFilter(ms2, options = {}) {
    let timer;
    let maxTimer;
    const filter = (invoke) => {
      const duration = resolveUnref(ms2);
      const maxDuration = resolveUnref(options.maxWait);
      if (timer)
        clearTimeout(timer);
      if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
        if (maxTimer) {
          clearTimeout(maxTimer);
          maxTimer = null;
        }
        return invoke();
      }
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            clearTimeout(timer);
          maxTimer = null;
          invoke();
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          clearTimeout(maxTimer);
        maxTimer = null;
        invoke();
      }, duration);
    };
    return filter;
  }
  function pausableFilter(extendFilter = bypassFilter) {
    const isActive = (0, lib_exports.ref)(true);
    function pause() {
      isActive.value = false;
    }
    function resume() {
      isActive.value = true;
    }
    const eventFilter = (...args) => {
      if (isActive.value)
        extendFilter(...args);
    };
    return { isActive, pause, resume, eventFilter };
  }
  function identity(arg) {
    return arg;
  }
  function computedWithControl(source, fn2) {
    let v = void 0;
    let track;
    let trigger;
    const dirty = (0, lib_exports.ref)(true);
    const update = () => {
      dirty.value = true;
      trigger();
    };
    (0, lib_exports.watch)(source, update, { flush: "sync" });
    const get = isFunction(fn2) ? fn2 : fn2.get;
    const set2 = isFunction(fn2) ? void 0 : fn2.set;
    const result = (0, lib_exports.customRef)((_track, _trigger) => {
      track = _track;
      trigger = _trigger;
      return {
        get() {
          if (dirty.value) {
            v = get();
            dirty.value = false;
          }
          track();
          return v;
        },
        set(v2) {
          set2 == null ? void 0 : set2(v2);
        }
      };
    });
    if (Object.isExtensible(result))
      result.trigger = update;
    return result;
  }
  function tryOnScopeDispose(fn2) {
    if ((0, lib_exports.getCurrentScope)()) {
      (0, lib_exports.onScopeDispose)(fn2);
      return true;
    }
    return false;
  }
  var __defProp$3 = Object.defineProperty;
  var __defProps$3 = Object.defineProperties;
  var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
  var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
  var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$3 = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$3.call(b, prop))
        __defNormalProp$3(a2, prop, b[prop]);
    if (__getOwnPropSymbols$3)
      for (var prop of __getOwnPropSymbols$3(b)) {
        if (__propIsEnum$3.call(b, prop))
          __defNormalProp$3(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps$3 = (a2, b) => __defProps$3(a2, __getOwnPropDescs$3(b));
  var __objRest$2 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$3)
      for (var prop of __getOwnPropSymbols$3(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function watchIgnorable(source, cb, options = {}) {
    const _a3 = options, {
      eventFilter = bypassFilter
    } = _a3, watchOptions = __objRest$2(_a3, [
      "eventFilter"
    ]);
    const filteredCb = createFilterWrapper(eventFilter, cb);
    let ignoreUpdates;
    let ignorePrevAsyncUpdates;
    let stop;
    if (watchOptions.flush === "sync") {
      const ignore = (0, lib_exports.ref)(false);
      ignorePrevAsyncUpdates = () => {
      };
      ignoreUpdates = (updater) => {
        ignore.value = true;
        updater();
        ignore.value = false;
      };
      stop = (0, lib_exports.watch)(source, (...args) => {
        if (!ignore.value)
          filteredCb(...args);
      }, watchOptions);
    } else {
      const disposables = [];
      const ignoreCounter = (0, lib_exports.ref)(0);
      const syncCounter = (0, lib_exports.ref)(0);
      ignorePrevAsyncUpdates = () => {
        ignoreCounter.value = syncCounter.value;
      };
      disposables.push((0, lib_exports.watch)(source, () => {
        syncCounter.value++;
      }, __spreadProps$3(__spreadValues$3({}, watchOptions), { flush: "sync" })));
      ignoreUpdates = (updater) => {
        const syncCounterPrev = syncCounter.value;
        updater();
        ignoreCounter.value += syncCounter.value - syncCounterPrev;
      };
      disposables.push((0, lib_exports.watch)(source, (...args) => {
        const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
        ignoreCounter.value = 0;
        syncCounter.value = 0;
        if (ignore)
          return;
        filteredCb(...args);
      }, watchOptions));
      stop = () => {
        disposables.forEach((fn2) => fn2());
      };
    }
    return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
  }
  function whenever(source, cb, options) {
    return (0, lib_exports.watch)(source, (v, ov, onInvalidate) => {
      if (v)
        cb(v, ov, onInvalidate);
    }, options);
  }

  // node_modules/@vueuse/core/index.mjs
  function computedAsync(evaluationCallback, initialState, optionsOrRef) {
    let options;
    if ((0, lib_exports.isRef)(optionsOrRef)) {
      options = {
        evaluating: optionsOrRef
      };
    } else {
      options = optionsOrRef || {};
    }
    const {
      lazy = false,
      evaluating = void 0,
      onError = noop2
    } = options;
    const started = (0, lib_exports.ref)(!lazy);
    const current = (0, lib_exports.ref)(initialState);
    let counter = 0;
    (0, lib_exports.watchEffect)(async (onInvalidate) => {
      if (!started.value)
        return;
      counter++;
      const counterAtBeginning = counter;
      let hasFinished = false;
      if (evaluating) {
        Promise.resolve().then(() => {
          evaluating.value = true;
        });
      }
      try {
        const result = await evaluationCallback((cancelCallback) => {
          onInvalidate(() => {
            if (evaluating)
              evaluating.value = false;
            if (!hasFinished)
              cancelCallback();
          });
        });
        if (counterAtBeginning === counter)
          current.value = result;
      } catch (e4) {
        onError(e4);
      } finally {
        if (evaluating && counterAtBeginning === counter)
          evaluating.value = false;
        hasFinished = true;
      }
    });
    if (lazy) {
      return (0, lib_exports.computed)(() => {
        started.value = true;
        return current.value;
      });
    } else {
      return current;
    }
  }
  function unrefElement(elRef) {
    var _a3;
    const plain = resolveUnref(elRef);
    return (_a3 = plain == null ? void 0 : plain.$el) != null ? _a3 : plain;
  }
  var defaultWindow = isClient ? window : void 0;
  var defaultDocument = isClient ? window.document : void 0;
  var defaultNavigator = isClient ? window.navigator : void 0;
  var defaultLocation = isClient ? window.location : void 0;
  function useEventListener(...args) {
    let target;
    let events;
    let listeners;
    let options;
    if (isString(args[0]) || Array.isArray(args[0])) {
      [events, listeners, options] = args;
      target = defaultWindow;
    } else {
      [target, events, listeners, options] = args;
    }
    if (!target)
      return noop2;
    if (!Array.isArray(events))
      events = [events];
    if (!Array.isArray(listeners))
      listeners = [listeners];
    const cleanups = [];
    const cleanup = () => {
      cleanups.forEach((fn2) => fn2());
      cleanups.length = 0;
    };
    const register = (el2, event, listener) => {
      el2.addEventListener(event, listener, options);
      return () => el2.removeEventListener(event, listener, options);
    };
    const stopWatch = (0, lib_exports.watch)(() => unrefElement(target), (el2) => {
      cleanup();
      if (!el2)
        return;
      cleanups.push(...events.flatMap((event) => {
        return listeners.map((listener) => register(el2, event, listener));
      }));
    }, { immediate: true, flush: "post" });
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return stop;
  }
  function onClickOutside(target, handler, options = {}) {
    const { window: window2 = defaultWindow, ignore, capture = true, detectIframe = false } = options;
    if (!window2)
      return;
    const shouldListen = (0, lib_exports.ref)(true);
    let fallback;
    const listener = (event) => {
      window2.clearTimeout(fallback);
      const el2 = unrefElement(target);
      if (!el2 || el2 === event.target || event.composedPath().includes(el2) || !shouldListen.value)
        return;
      handler(event);
    };
    const shouldIgnore = (event) => {
      return ignore && ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || event.composedPath().includes(el2));
      });
    };
    const cleanup = [
      useEventListener(window2, "click", listener, { passive: true, capture }),
      useEventListener(window2, "pointerdown", (e4) => {
        const el2 = unrefElement(target);
        shouldListen.value = !!el2 && !e4.composedPath().includes(el2) && !shouldIgnore(e4);
      }, { passive: true }),
      useEventListener(window2, "pointerup", (e4) => {
        if (e4.button === 0) {
          const path = e4.composedPath();
          e4.composedPath = () => path;
          fallback = window2.setTimeout(() => listener(e4), 50);
        }
      }, { passive: true }),
      detectIframe && useEventListener(window2, "blur", (event) => {
        var _a3;
        const el2 = unrefElement(target);
        if (((_a3 = window2.document.activeElement) == null ? void 0 : _a3.tagName) === "IFRAME" && !(el2 == null ? void 0 : el2.contains(window2.document.activeElement)))
          handler(event);
      })
    ].filter(Boolean);
    const stop = () => cleanup.forEach((fn2) => fn2());
    return stop;
  }
  var __defProp$m = Object.defineProperty;
  var __defProps$9 = Object.defineProperties;
  var __getOwnPropDescs$9 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$o = Object.getOwnPropertySymbols;
  var __hasOwnProp$o = Object.prototype.hasOwnProperty;
  var __propIsEnum$o = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$m = (obj, key, value) => key in obj ? __defProp$m(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$m = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$o.call(b, prop))
        __defNormalProp$m(a2, prop, b[prop]);
    if (__getOwnPropSymbols$o)
      for (var prop of __getOwnPropSymbols$o(b)) {
        if (__propIsEnum$o.call(b, prop))
          __defNormalProp$m(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps$9 = (a2, b) => __defProps$9(a2, __getOwnPropDescs$9(b));
  var createKeyPredicate = (keyFilter) => {
    if (typeof keyFilter === "function")
      return keyFilter;
    else if (typeof keyFilter === "string")
      return (event) => event.key === keyFilter;
    else if (Array.isArray(keyFilter))
      return (event) => keyFilter.includes(event.key);
    return () => true;
  };
  function onKeyStroke(...args) {
    let key;
    let handler;
    let options = {};
    if (args.length === 3) {
      key = args[0];
      handler = args[1];
      options = args[2];
    } else if (args.length === 2) {
      if (typeof args[1] === "object") {
        key = true;
        handler = args[0];
        options = args[1];
      } else {
        key = args[0];
        handler = args[1];
      }
    } else {
      key = true;
      handler = args[0];
    }
    const { target = defaultWindow, eventName = "keydown", passive = false } = options;
    const predicate = createKeyPredicate(key);
    const listener = (e4) => {
      if (predicate(e4))
        handler(e4);
    };
    return useEventListener(target, eventName, listener, passive);
  }
  function onKeyDown(key, handler, options = {}) {
    return onKeyStroke(key, handler, __spreadProps$9(__spreadValues$m({}, options), { eventName: "keydown" }));
  }
  function useActiveElement(options = {}) {
    const { window: window2 = defaultWindow } = options;
    const activeElement = computedWithControl(() => null, () => window2 == null ? void 0 : window2.document.activeElement);
    if (window2) {
      useEventListener(window2, "blur", activeElement.trigger, true);
      useEventListener(window2, "focus", activeElement.trigger, true);
    }
    return activeElement;
  }
  function cloneFnJSON(source) {
    return JSON.parse(JSON.stringify(source));
  }
  var _global2 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var globalKey = "__vueuse_ssr_handlers__";
  _global2[globalKey] = _global2[globalKey] || {};
  var handlers = _global2[globalKey];
  var fnBypass = (v) => v;
  var fnSetSource = (source, value) => source.value = value;
  function defaultDump(clone) {
    return clone ? isFunction(clone) ? clone : cloneFnJSON : fnBypass;
  }
  function defaultParse(clone) {
    return clone ? isFunction(clone) ? clone : cloneFnJSON : fnBypass;
  }
  function useManualRefHistory(source, options = {}) {
    const {
      clone = false,
      dump = defaultDump(clone),
      parse = defaultParse(clone),
      setSource = fnSetSource
    } = options;
    function _createHistoryRecord() {
      return (0, lib_exports.markRaw)({
        snapshot: dump(source.value),
        timestamp: timestamp()
      });
    }
    const last = (0, lib_exports.ref)(_createHistoryRecord());
    const undoStack = (0, lib_exports.ref)([]);
    const redoStack = (0, lib_exports.ref)([]);
    const _setSource = (record) => {
      setSource(source, parse(record.snapshot));
      last.value = record;
    };
    const commit = () => {
      undoStack.value.unshift(last.value);
      last.value = _createHistoryRecord();
      if (options.capacity && undoStack.value.length > options.capacity)
        undoStack.value.splice(options.capacity, Infinity);
      if (redoStack.value.length)
        redoStack.value.splice(0, redoStack.value.length);
    };
    const clear = () => {
      undoStack.value.splice(0, undoStack.value.length);
      redoStack.value.splice(0, redoStack.value.length);
    };
    const undo = () => {
      const state = undoStack.value.shift();
      if (state) {
        redoStack.value.unshift(last.value);
        _setSource(state);
      }
    };
    const redo = () => {
      const state = redoStack.value.shift();
      if (state) {
        undoStack.value.unshift(last.value);
        _setSource(state);
      }
    };
    const reset = () => {
      _setSource(last.value);
    };
    const history = (0, lib_exports.computed)(() => [last.value, ...undoStack.value]);
    const canUndo = (0, lib_exports.computed)(() => undoStack.value.length > 0);
    const canRedo = (0, lib_exports.computed)(() => redoStack.value.length > 0);
    return {
      source,
      undoStack,
      redoStack,
      last,
      history,
      canUndo,
      canRedo,
      clear,
      commit,
      reset,
      undo,
      redo
    };
  }
  var __defProp$g = Object.defineProperty;
  var __defProps$6 = Object.defineProperties;
  var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$i = Object.getOwnPropertySymbols;
  var __hasOwnProp$i = Object.prototype.hasOwnProperty;
  var __propIsEnum$i = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$g = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$i.call(b, prop))
        __defNormalProp$g(a2, prop, b[prop]);
    if (__getOwnPropSymbols$i)
      for (var prop of __getOwnPropSymbols$i(b)) {
        if (__propIsEnum$i.call(b, prop))
          __defNormalProp$g(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps$6 = (a2, b) => __defProps$6(a2, __getOwnPropDescs$6(b));
  function useRefHistory(source, options = {}) {
    const {
      deep = false,
      flush = "pre",
      eventFilter
    } = options;
    const {
      eventFilter: composedFilter,
      pause,
      resume: resumeTracking,
      isActive: isTracking
    } = pausableFilter(eventFilter);
    const {
      ignoreUpdates,
      ignorePrevAsyncUpdates,
      stop
    } = watchIgnorable(source, commit, { deep, flush, eventFilter: composedFilter });
    function setSource(source2, value) {
      ignorePrevAsyncUpdates();
      ignoreUpdates(() => {
        source2.value = value;
      });
    }
    const manualHistory = useManualRefHistory(source, __spreadProps$6(__spreadValues$g({}, options), { clone: options.clone || deep, setSource }));
    const { clear, commit: manualCommit } = manualHistory;
    function commit() {
      ignorePrevAsyncUpdates();
      manualCommit();
    }
    function resume(commitNow) {
      resumeTracking();
      if (commitNow)
        commit();
    }
    function batch(fn2) {
      let canceled = false;
      const cancel = () => canceled = true;
      ignoreUpdates(() => {
        fn2(cancel);
      });
      if (!canceled)
        commit();
    }
    function dispose() {
      stop();
      clear();
    }
    return __spreadProps$6(__spreadValues$g({}, manualHistory), {
      isTracking,
      pause,
      resume,
      commit,
      batch,
      dispose
    });
  }
  var __defProp$f = Object.defineProperty;
  var __defProps$5 = Object.defineProperties;
  var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$h = Object.getOwnPropertySymbols;
  var __hasOwnProp$h = Object.prototype.hasOwnProperty;
  var __propIsEnum$h = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$f = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$h.call(b, prop))
        __defNormalProp$f(a2, prop, b[prop]);
    if (__getOwnPropSymbols$h)
      for (var prop of __getOwnPropSymbols$h(b)) {
        if (__propIsEnum$h.call(b, prop))
          __defNormalProp$f(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps$5 = (a2, b) => __defProps$5(a2, __getOwnPropDescs$5(b));
  function useDebouncedRefHistory(source, options = {}) {
    const filter = options.debounce ? debounceFilter(options.debounce) : void 0;
    const history = useRefHistory(source, __spreadProps$5(__spreadValues$f({}, options), { eventFilter: filter }));
    return __spreadValues$f({}, history);
  }
  var DefaultMagicKeysAliasMap = {
    ctrl: "control",
    command: "meta",
    cmd: "meta",
    option: "alt",
    up: "arrowup",
    down: "arrowdown",
    left: "arrowleft",
    right: "arrowright"
  };
  function useMagicKeys(options = {}) {
    const {
      reactive: useReactive = false,
      target = defaultWindow,
      aliasMap = DefaultMagicKeysAliasMap,
      passive = true,
      onEventFired = noop2
    } = options;
    const current = (0, lib_exports.reactive)(/* @__PURE__ */ new Set());
    const obj = { toJSON() {
      return {};
    }, current };
    const refs = useReactive ? (0, lib_exports.reactive)(obj) : obj;
    const metaDeps = /* @__PURE__ */ new Set();
    const usedKeys = /* @__PURE__ */ new Set();
    function setRefs(key, value) {
      if (key in refs) {
        if (useReactive)
          refs[key] = value;
        else
          refs[key].value = value;
      }
    }
    function reset() {
      for (const key of usedKeys)
        setRefs(key, false);
    }
    function updateRefs(e4, value) {
      var _a3, _b;
      const key = (_a3 = e4.key) == null ? void 0 : _a3.toLowerCase();
      const code = (_b = e4.code) == null ? void 0 : _b.toLowerCase();
      const values = [code, key].filter(Boolean);
      if (key) {
        if (value)
          current.add(key);
        else
          current.delete(key);
      }
      for (const key2 of values) {
        usedKeys.add(key2);
        setRefs(key2, value);
      }
      if (key === "meta" && !value) {
        metaDeps.forEach((key2) => {
          current.delete(key2);
          setRefs(key2, false);
        });
        metaDeps.clear();
      } else if (typeof e4.getModifierState === "function" && e4.getModifierState("Meta") && value) {
        [...current, ...values].forEach((key2) => metaDeps.add(key2));
      }
    }
    useEventListener(target, "keydown", (e4) => {
      updateRefs(e4, true);
      return onEventFired(e4);
    }, { passive });
    useEventListener(target, "keyup", (e4) => {
      updateRefs(e4, false);
      return onEventFired(e4);
    }, { passive });
    useEventListener("blur", reset, { passive: true });
    useEventListener("focus", reset, { passive: true });
    const proxy = new Proxy(refs, {
      get(target2, prop, rec) {
        if (typeof prop !== "string")
          return Reflect.get(target2, prop, rec);
        prop = prop.toLowerCase();
        if (prop in aliasMap)
          prop = aliasMap[prop];
        if (!(prop in refs)) {
          if (/[+_-]/.test(prop)) {
            const keys = prop.split(/[+_-]/g).map((i) => i.trim());
            refs[prop] = (0, lib_exports.computed)(() => keys.every((key) => (0, lib_exports.unref)(proxy[key])));
          } else {
            refs[prop] = (0, lib_exports.ref)(false);
          }
        }
        const r = Reflect.get(target2, prop, rec);
        return useReactive ? (0, lib_exports.unref)(r) : r;
      }
    });
    return proxy;
  }
  var SwipeDirection;
  (function(SwipeDirection2) {
    SwipeDirection2["UP"] = "UP";
    SwipeDirection2["RIGHT"] = "RIGHT";
    SwipeDirection2["DOWN"] = "DOWN";
    SwipeDirection2["LEFT"] = "LEFT";
    SwipeDirection2["NONE"] = "NONE";
  })(SwipeDirection || (SwipeDirection = {}));
  var __defProp2 = Object.defineProperty;
  var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues2 = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp2.call(b, prop))
        __defNormalProp2(a2, prop, b[prop]);
    if (__getOwnPropSymbols2)
      for (var prop of __getOwnPropSymbols2(b)) {
        if (__propIsEnum2.call(b, prop))
          __defNormalProp2(a2, prop, b[prop]);
      }
    return a2;
  };
  var _TransitionPresets = {
    easeInSine: [0.12, 0, 0.39, 0],
    easeOutSine: [0.61, 1, 0.88, 1],
    easeInOutSine: [0.37, 0, 0.63, 1],
    easeInQuad: [0.11, 0, 0.5, 0],
    easeOutQuad: [0.5, 1, 0.89, 1],
    easeInOutQuad: [0.45, 0, 0.55, 1],
    easeInCubic: [0.32, 0, 0.67, 0],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeInQuart: [0.5, 0, 0.75, 0],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInQuint: [0.64, 0, 0.78, 0],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
    easeInExpo: [0.7, 0, 0.84, 0],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeInCirc: [0.55, 0, 1, 0.45],
    easeOutCirc: [0, 0.55, 0.45, 1],
    easeInOutCirc: [0.85, 0, 0.15, 1],
    easeInBack: [0.36, 0, 0.66, -0.56],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeInOutBack: [0.68, -0.6, 0.32, 1.6]
  };
  var TransitionPresets = __spreadValues2({
    linear: identity
  }, _TransitionPresets);

  // frappe/public/js/workflow_builder/store.js
  var useStore = defineStore("workflow-builder-store", () => {
    let workflow_name = (0, vue_runtime_esm_bundler_exports.ref)(null);
    let workflow_doc = (0, vue_runtime_esm_bundler_exports.ref)(null);
    let workflow_doc_fields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let workflow = (0, vue_runtime_esm_bundler_exports.ref)({ elements: [], selected: null });
    let workflowfields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let statefields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let transitionfields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let ref_history = (0, vue_runtime_esm_bundler_exports.ref)(null);
    async function fetch() {
      await frappe.model.clear_doc("Workflow", workflow_name.value);
      await frappe.model.with_doc("Workflow", workflow_name.value);
      workflow_doc.value = frappe.get_doc("Workflow", workflow_name.value);
      await frappe.model.with_doctype(workflow_doc.value.document_type);
      if (!workflowfields.value.length) {
        await frappe.model.with_doctype("Workflow");
        workflowfields.value = frappe.get_meta("Workflow").fields;
      }
      if (!statefields.value.length) {
        await frappe.model.with_doctype("Workflow Document State");
        statefields.value = frappe.get_meta("Workflow Document State").fields;
      }
      if (!transitionfields.value.length) {
        await frappe.model.with_doctype("Workflow Transition");
        transitionfields.value = frappe.get_meta("Workflow Transition").fields;
      }
      if (!workflow_doc_fields.value.length) {
        let doc_type = workflow_doc.value.document_type;
        await frappe.model.with_doctype(doc_type);
        workflow_doc_fields.value = frappe.meta.get_docfields(doc_type, null, {
          fieldtype: ["not in", frappe.model.no_value_type]
        }).sort((a2, b) => {
          if (a2.label && b.label) {
            return a2.label.localeCompare(b.label);
          }
        }).map((df) => ({
          label: `${df.label || __("No Label")} (${df.fieldtype})`,
          value: df.fieldname
        }));
      }
      if (workflow_doc.value.workflow_data && typeof workflow_doc.value.workflow_data == "string" && JSON.parse(workflow_doc.value.workflow_data).length) {
        workflow.value.elements = JSON.parse(workflow_doc.value.workflow_data);
      } else {
        workflow.value.elements = get_workflow_elements(workflow_doc.value);
      }
      setup_undo_redo();
    }
    function reset_changes() {
      fetch();
    }
    async function save_changes() {
      frappe.dom.freeze(__("Saving..."));
      try {
        let doc = workflow_doc.value;
        doc.states = get_updated_states();
        doc.transitions = get_updated_transitions();
        validate_workflow(doc);
        clean_workflow_data();
        doc.workflow_data = JSON.stringify(workflow.value.elements);
        await frappe.call("frappe.client.save", { doc });
        frappe.toast("Workflow updated successfully");
        fetch();
      } catch (e4) {
        console.error(e4);
      } finally {
        frappe.dom.unfreeze();
      }
    }
    function validate_workflow(doc) {
      if (doc.is_active && (!doc.states.length || !doc.transitions.length)) {
        let message = "Workflow must have atleast one state and transition";
        frappe.throw({
          message: __(message),
          title: __("Missing Values Required"),
          indicator: "orange"
        });
      }
    }
    function clean_workflow_data() {
      workflow.value.elements.forEach((el2) => el2.selected = false);
    }
    function get_state_df(data) {
      let doc_status_map = {
        Draft: 0,
        Submitted: 1,
        Cancelled: 2
      };
      let docfield = "Workflow Document State";
      let df = frappe.model.get_new_doc(docfield);
      df.name = frappe.utils.get_random(8);
      df.state = data.state;
      df.doc_status = doc_status_map[data.doc_status];
      df.allow_edit = data.allow_edit;
      df.update_field = data.update_field;
      df.update_value = data.update_value;
      df.is_optional_state = data.is_optional_state;
      df.next_action_email_template = data.next_action_email_template;
      df.message = data.message;
      return df;
    }
    function get_updated_states() {
      let states = [];
      workflow.value.elements.forEach((element) => {
        if (element.type == "state") {
          states.push(get_state_df(element.data));
        }
      });
      return states;
    }
    function get_transition_df({ state, action, next_state, allowed }) {
      let docfield = "Workflow Transition";
      let df = frappe.model.get_new_doc(docfield);
      df.name = frappe.utils.get_random(8);
      df.state = state;
      df.action = action;
      df.next_state = next_state;
      df.allowed = allowed;
      return df;
    }
    function get_updated_transitions() {
      let transitions = [];
      let actions = [];
      workflow.value.elements.forEach((element) => {
        if (element.type == "action") {
          actions.push(element);
        }
      });
      actions.forEach((action) => {
        let states = workflow.value.elements.filter((e4) => e4.type == "state");
        let state = states.find((state2) => state2.data.state == action.data.from);
        let next_state = states.find((state2) => state2.data.state == action.data.to);
        let error = validate_transitions(state.data, next_state.data);
        if (error) {
          frappe.throw({
            message: error,
            title: __("Invalid Transition")
          });
        }
        transitions.push(get_transition_df({
          state: action.data.from,
          action: action.data.action,
          next_state: action.data.to,
          allowed: action.data.allowed
        }));
      });
      return transitions;
    }
    let undo_redo_keyboard_event = onKeyDown(true, (e4) => {
      if (!ref_history.value)
        return;
      if (e4.ctrlKey || e4.metaKey) {
        if (e4.key === "z" && !e4.shiftKey && ref_history.value.canUndo) {
          ref_history.value.undo();
        } else if (e4.key === "z" && e4.shiftKey && ref_history.value.canRedo) {
          ref_history.value.redo();
        }
      }
    });
    function setup_undo_redo() {
      ref_history.value = useManualRefHistory(workflow, { clone: true });
      undo_redo_keyboard_event;
    }
    return {
      workflow_name,
      workflow_doc,
      workflow_doc_fields,
      workflow,
      workflowfields,
      statefields,
      transitionfields,
      ref_history,
      fetch,
      reset_changes,
      save_changes,
      setup_undo_redo
    };
  });

  // node_modules/@vue-flow/core/dist/vue-flow-core.mjs
  var _o;
  var to = typeof window < "u";
  var Ir = (e4) => typeof e4 < "u";
  var Tr = (e4) => typeof e4 == "boolean";
  var ze = (e4) => typeof e4 == "function";
  var Te = (e4) => typeof e4 == "number";
  var Pe = (e4) => typeof e4 == "string";
  var Pr = () => {
  };
  to && ((_o = window == null ? void 0 : window.navigator) != null && _o.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
  function se(e4) {
    return typeof e4 == "function" ? e4() : (0, vue_runtime_esm_bundler_exports.unref)(e4);
  }
  function Dr(e4, t) {
    function n(...o) {
      return new Promise((i, r) => {
        Promise.resolve(e4(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(i).catch(r);
      });
    }
    return n;
  }
  var vi = (e4) => e4();
  function Ar(e4 = vi) {
    const t = (0, vue_runtime_esm_bundler_exports.ref)(true);
    function n() {
      t.value = false;
    }
    function o() {
      t.value = true;
    }
    const i = (...r) => {
      t.value && e4(...r);
    };
    return { isActive: (0, vue_runtime_esm_bundler_exports.readonly)(t), pause: n, resume: o, eventFilter: i };
  }
  function wo(e4, t = false, n = "Timeout") {
    return new Promise((o, i) => {
      setTimeout(t ? () => i(n) : o, e4);
    });
  }
  function zr(e4) {
    return e4;
  }
  function wn(e4, t) {
    let n, o, i;
    const r = (0, vue_runtime_esm_bundler_exports.ref)(true), a2 = () => {
      r.value = true, i();
    };
    (0, vue_runtime_esm_bundler_exports.watch)(e4, a2, { flush: "sync" });
    const s2 = ze(t) ? t : t.get, l = ze(t) ? void 0 : t.set, u2 = (0, vue_runtime_esm_bundler_exports.customRef)((c, h2) => (o = c, i = h2, {
      get() {
        return r.value && (n = s2(), r.value = false), o(), n;
      },
      set(g2) {
        l == null || l(g2);
      }
    }));
    return Object.isExtensible(u2) && (u2.trigger = a2), u2;
  }
  function Mt(e4) {
    return (0, vue_runtime_esm_bundler_exports.getCurrentScope)() ? ((0, vue_runtime_esm_bundler_exports.onScopeDispose)(e4), true) : false;
  }
  function Br(e4, t = true) {
    (0, vue_runtime_esm_bundler_exports.getCurrentInstance)() ? (0, vue_runtime_esm_bundler_exports.onMounted)(e4) : t ? e4() : (0, vue_runtime_esm_bundler_exports.nextTick)(e4);
  }
  function Rn(e4, t = false) {
    function n(h2, { flush: g2 = "sync", deep: w2 = false, timeout: f, throwOnTimeout: d } = {}) {
      let _ = null;
      const N = [new Promise((B2) => {
        _ = (0, vue_runtime_esm_bundler_exports.watch)(e4, (y2) => {
          h2(y2) !== t && (_ == null || _(), B2(y2));
        }, {
          flush: g2,
          deep: w2,
          immediate: true
        });
      })];
      return f != null && N.push(wo(f, d).then(() => se(e4)).finally(() => _ == null ? void 0 : _())), Promise.race(N);
    }
    function o(h2, g2) {
      if (!(0, vue_runtime_esm_bundler_exports.isRef)(h2))
        return n((y2) => y2 === h2, g2);
      const { flush: w2 = "sync", deep: f = false, timeout: d, throwOnTimeout: _ } = g2 != null ? g2 : {};
      let x2 = null;
      const B2 = [new Promise((y2) => {
        x2 = (0, vue_runtime_esm_bundler_exports.watch)([e4, h2], ([$3, I]) => {
          t !== ($3 === I) && (x2 == null || x2(), y2($3));
        }, {
          flush: w2,
          deep: f,
          immediate: true
        });
      })];
      return d != null && B2.push(wo(d, _).then(() => se(e4)).finally(() => (x2 == null || x2(), se(e4)))), Promise.race(B2);
    }
    function i(h2) {
      return n((g2) => Boolean(g2), h2);
    }
    function r(h2) {
      return o(null, h2);
    }
    function a2(h2) {
      return o(void 0, h2);
    }
    function s2(h2) {
      return n(Number.isNaN, h2);
    }
    function l(h2, g2) {
      return n((w2) => {
        const f = Array.from(w2);
        return f.includes(h2) || f.includes(se(h2));
      }, g2);
    }
    function u2(h2) {
      return c(1, h2);
    }
    function c(h2 = 1, g2) {
      let w2 = -1;
      return n(() => (w2 += 1, w2 >= h2), g2);
    }
    return Array.isArray(se(e4)) ? {
      toMatch: n,
      toContains: l,
      changed: u2,
      changedTimes: c,
      get not() {
        return Rn(e4, !t);
      }
    } : {
      toMatch: n,
      toBe: o,
      toBeTruthy: i,
      toBeNull: r,
      toBeNaN: s2,
      toBeUndefined: a2,
      changed: u2,
      changedTimes: c,
      get not() {
        return Rn(e4, !t);
      }
    };
  }
  function pe(e4) {
    return Rn(e4);
  }
  var bo = Object.getOwnPropertySymbols;
  var Rr = Object.prototype.hasOwnProperty;
  var Vr = Object.prototype.propertyIsEnumerable;
  var Hr = (e4, t) => {
    var n = {};
    for (var o in e4)
      Rr.call(e4, o) && t.indexOf(o) < 0 && (n[o] = e4[o]);
    if (e4 != null && bo)
      for (var o of bo(e4))
        t.indexOf(o) < 0 && Vr.call(e4, o) && (n[o] = e4[o]);
    return n;
  };
  function Lr(e4, t, n = {}) {
    const o = n, {
      eventFilter: i = vi
    } = o, r = Hr(o, [
      "eventFilter"
    ]);
    return (0, vue_runtime_esm_bundler_exports.watch)(e4, Dr(i, t), r);
  }
  var Fr = Object.defineProperty;
  var Gr = Object.defineProperties;
  var Yr = Object.getOwnPropertyDescriptors;
  var Ft = Object.getOwnPropertySymbols;
  var mi = Object.prototype.hasOwnProperty;
  var pi = Object.prototype.propertyIsEnumerable;
  var Eo = (e4, t, n) => t in e4 ? Fr(e4, t, { enumerable: true, configurable: true, writable: true, value: n }) : e4[t] = n;
  var Xr = (e4, t) => {
    for (var n in t || (t = {}))
      mi.call(t, n) && Eo(e4, n, t[n]);
    if (Ft)
      for (var n of Ft(t))
        pi.call(t, n) && Eo(e4, n, t[n]);
    return e4;
  };
  var Ur = (e4, t) => Gr(e4, Yr(t));
  var Zr = (e4, t) => {
    var n = {};
    for (var o in e4)
      mi.call(e4, o) && t.indexOf(o) < 0 && (n[o] = e4[o]);
    if (e4 != null && Ft)
      for (var o of Ft(e4))
        t.indexOf(o) < 0 && pi.call(e4, o) && (n[o] = e4[o]);
    return n;
  };
  function Je(e4, t, n = {}) {
    const o = n, {
      eventFilter: i
    } = o, r = Zr(o, [
      "eventFilter"
    ]), { eventFilter: a2, pause: s2, resume: l, isActive: u2 } = Ar(i);
    return { stop: Lr(e4, t, Ur(Xr({}, r), {
      eventFilter: a2
    })), pause: s2, resume: l, isActive: u2 };
  }
  function yi(e4) {
    var t;
    const n = se(e4);
    return (t = n == null ? void 0 : n.$el) != null ? t : n;
  }
  var no = to ? window : void 0;
  function oo(...e4) {
    let t, n, o, i;
    if (Pe(e4[0]) || Array.isArray(e4[0]) ? ([n, o, i] = e4, t = no) : [t, n, o, i] = e4, !t)
      return Pr;
    Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
    const r = [], a2 = () => {
      r.forEach((c) => c()), r.length = 0;
    }, s2 = (c, h2, g2, w2) => (c.addEventListener(h2, g2, w2), () => c.removeEventListener(h2, g2, w2)), l = (0, vue_runtime_esm_bundler_exports.watch)(() => [yi(t), se(i)], ([c, h2]) => {
      a2(), c && r.push(...n.flatMap((g2) => o.map((w2) => s2(c, g2, w2, h2))));
    }, { immediate: true, flush: "post" }), u2 = () => {
      l(), a2();
    };
    return Mt(u2), u2;
  }
  var Kr = (e4) => typeof e4 == "function" ? e4 : typeof e4 == "string" ? (t) => t.key === e4 : Array.isArray(e4) ? (t) => e4.includes(t.key) : () => true;
  function So(...e4) {
    let t, n, o = {};
    e4.length === 3 ? (t = e4[0], n = e4[1], o = e4[2]) : e4.length === 2 ? typeof e4[1] == "object" ? (t = true, n = e4[0], o = e4[1]) : (t = e4[0], n = e4[1]) : (t = true, n = e4[0]);
    const { target: i = no, eventName: r = "keydown", passive: a2 = false } = o, s2 = Kr(t);
    return oo(i, r, (u2) => {
      s2(u2) && n(u2);
    }, a2);
  }
  function Wr(e4, t = false) {
    const n = (0, vue_runtime_esm_bundler_exports.ref)(), o = () => n.value = Boolean(e4());
    return o(), Br(o, t), n;
  }
  function qr(e4) {
    return JSON.parse(JSON.stringify(e4));
  }
  var Vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  var Hn = "__vueuse_ssr_handlers__";
  Vn[Hn] = Vn[Hn] || {};
  Vn[Hn];
  var No = Object.getOwnPropertySymbols;
  var jr = Object.prototype.hasOwnProperty;
  var Qr = Object.prototype.propertyIsEnumerable;
  var Jr = (e4, t) => {
    var n = {};
    for (var o in e4)
      jr.call(e4, o) && t.indexOf(o) < 0 && (n[o] = e4[o]);
    if (e4 != null && No)
      for (var o of No(e4))
        t.indexOf(o) < 0 && Qr.call(e4, o) && (n[o] = e4[o]);
    return n;
  };
  function ea(e4, t, n = {}) {
    const o = n, { window: i = no } = o, r = Jr(o, ["window"]);
    let a2;
    const s2 = Wr(() => i && "ResizeObserver" in i), l = () => {
      a2 && (a2.disconnect(), a2 = void 0);
    }, u2 = (0, vue_runtime_esm_bundler_exports.watch)(() => yi(e4), (h2) => {
      l(), s2.value && i && h2 && (a2 = new ResizeObserver(t), a2.observe(h2, r));
    }, { immediate: true, flush: "post" }), c = () => {
      l(), u2();
    };
    return Mt(c), {
      isSupported: s2,
      stop: c
    };
  }
  var Co;
  (function(e4) {
    e4.UP = "UP", e4.RIGHT = "RIGHT", e4.DOWN = "DOWN", e4.LEFT = "LEFT", e4.NONE = "NONE";
  })(Co || (Co = {}));
  var ta = Object.defineProperty;
  var Mo = Object.getOwnPropertySymbols;
  var na = Object.prototype.hasOwnProperty;
  var oa = Object.prototype.propertyIsEnumerable;
  var $o = (e4, t, n) => t in e4 ? ta(e4, t, { enumerable: true, configurable: true, writable: true, value: n }) : e4[t] = n;
  var ia = (e4, t) => {
    for (var n in t || (t = {}))
      na.call(t, n) && $o(e4, n, t[n]);
    if (Mo)
      for (var n of Mo(t))
        oa.call(t, n) && $o(e4, n, t[n]);
    return e4;
  };
  var ra = {
    easeInSine: [0.12, 0, 0.39, 0],
    easeOutSine: [0.61, 1, 0.88, 1],
    easeInOutSine: [0.37, 0, 0.63, 1],
    easeInQuad: [0.11, 0, 0.5, 0],
    easeOutQuad: [0.5, 1, 0.89, 1],
    easeInOutQuad: [0.45, 0, 0.55, 1],
    easeInCubic: [0.32, 0, 0.67, 0],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeInQuart: [0.5, 0, 0.75, 0],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInQuint: [0.64, 0, 0.78, 0],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
    easeInExpo: [0.7, 0, 0.84, 0],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeInCirc: [0.55, 0, 1, 0.45],
    easeOutCirc: [0, 0.55, 0.45, 1],
    easeInOutCirc: [0.85, 0, 0.15, 1],
    easeInBack: [0.36, 0, 0.66, -0.56],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeInOutBack: [0.68, -0.6, 0.32, 1.6]
  };
  ia({
    linear: zr
  }, ra);
  function yt(e4, t, n, o = {}) {
    var i, r, a2;
    const {
      clone: s2 = false,
      passive: l = false,
      eventName: u2,
      deep: c = false,
      defaultValue: h2
    } = o, g2 = (0, vue_runtime_esm_bundler_exports.getCurrentInstance)(), w2 = n || (g2 == null ? void 0 : g2.emit) || ((i = g2 == null ? void 0 : g2.$emit) == null ? void 0 : i.bind(g2)) || ((a2 = (r = g2 == null ? void 0 : g2.proxy) == null ? void 0 : r.$emit) == null ? void 0 : a2.bind(g2 == null ? void 0 : g2.proxy));
    let f = u2;
    t || (t = "modelValue"), f = u2 || f || `update:${t.toString()}`;
    const d = (x2) => s2 ? ze(s2) ? s2(x2) : qr(x2) : x2, _ = () => Ir(e4[t]) ? d(e4[t]) : h2;
    if (l) {
      const x2 = _(), N = (0, vue_runtime_esm_bundler_exports.ref)(x2);
      return (0, vue_runtime_esm_bundler_exports.watch)(() => e4[t], (B2) => N.value = d(B2)), (0, vue_runtime_esm_bundler_exports.watch)(N, (B2) => {
        (B2 !== e4[t] || c) && w2(f, B2);
      }, { deep: c }), N;
    } else
      return (0, vue_runtime_esm_bundler_exports.computed)({
        get() {
          return _();
        },
        set(x2) {
          w2(f, x2);
        }
      });
  }
  function X(e4 = () => {
  }) {
    const t = (0, vue_runtime_esm_bundler_exports.ref)(/* @__PURE__ */ new Set());
    e4 && t.value.add(e4);
    const n = (r) => {
      t.value.delete(r);
    };
    return {
      on: (r) => {
        t.value.has(e4) && t.value.delete(e4), t.value.add(r);
        const a2 = () => n(r);
        return Mt(a2), {
          off: a2
        };
      },
      off: n,
      trigger: (r) => Promise.all(Array.from(t.value).map((a2) => a2(r))),
      fns: t
    };
  }
  var aa = ["production", "prod"];
  function wt(e4, ...t) {
    aa.includes("development") || console.warn(`[Vue Flow]: ${e4}`, ...t);
  }
  function sa() {
    return {
      edgesChange: X(),
      nodesChange: X(),
      nodeDoubleClick: X(),
      nodeClick: X(),
      nodeMouseEnter: X(),
      nodeMouseMove: X(),
      nodeMouseLeave: X(),
      nodeContextMenu: X(),
      nodeDragStart: X(),
      nodeDrag: X(),
      nodeDragStop: X(),
      nodesInitialized: X(),
      miniMapNodeClick: X(),
      miniMapNodeDoubleClick: X(),
      miniMapNodeMouseEnter: X(),
      miniMapNodeMouseMove: X(),
      miniMapNodeMouseLeave: X(),
      connect: X(),
      connectStart: X(),
      connectEnd: X(),
      clickConnectStart: X(),
      clickConnectEnd: X(),
      paneReady: X(),
      move: X(),
      moveStart: X(),
      moveEnd: X(),
      selectionDragStart: X(),
      selectionDrag: X(),
      selectionDragStop: X(),
      selectionContextMenu: X(),
      selectionStart: X(),
      selectionEnd: X(),
      viewportChangeStart: X(),
      viewportChange: X(),
      viewportChangeEnd: X(),
      paneScroll: X(),
      paneClick: X(),
      paneContextMenu: X(),
      paneMouseEnter: X(),
      paneMouseMove: X(),
      paneMouseLeave: X(),
      edgeContextMenu: X(),
      edgeMouseEnter: X(),
      edgeMouseMove: X(),
      edgeMouseLeave: X(),
      edgeDoubleClick: X(),
      edgeClick: X(),
      edgeUpdateStart: X(),
      edgeUpdate: X(),
      edgeUpdateEnd: X(),
      updateNodeInternals: X(),
      error: X((e4) => wt(e4.message))
    };
  }
  function la(e4, t) {
    (0, vue_runtime_esm_bundler_exports.onBeforeMount)(() => {
      for (const [n, o] of Object.entries(t.value)) {
        const i = (r) => {
          e4(n, r);
        };
        o.on(i), Mt(() => {
          o.off(i);
        });
      }
    });
  }
  var he = /* @__PURE__ */ ((e4) => (e4.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS", e4.NODE_NOT_FOUND = "NODE_NOT_FOUND", e4.NODE_MISSING_PARENT = "NODE_MISSING_PARENT", e4.NODE_TYPE_MISSING = "NODE_TYPE_MISSING", e4.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID", e4.EDGE_INVALID = "EDGE_INVALID", e4.EDGE_NOT_FOUND = "EDGE_NOT_FOUND", e4.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING", e4.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING", e4.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING", e4.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME", e4.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING", e4.EDGE_ORPHANED = "EDGE_ORPHANED", e4))(he || {});
  var bn = {
    MISSING_VIEWPORT_DIMENSIONS: () => "The Vue Flow parent container needs a width and a height to render the graph",
    NODE_NOT_FOUND: (e4) => `Node not found
Node: ${e4}`,
    NODE_MISSING_PARENT: (e4, t) => `Node is missing a parent
Node: ${e4}
Parent: ${t}`,
    NODE_TYPE_MISSING: (e4) => `Node type is missing
Type: ${e4}`,
    NODE_EXTENT_INVALID: (e4) => `Only child nodes can use a parent extent
Node: ${e4}`,
    EDGE_INVALID: (e4) => `An edge needs a source and a target
Edge: ${e4}`,
    EDGE_SOURCE_MISSING: (e4, t) => `Edge source is missing
Edge: ${e4} 
Source: ${t}`,
    EDGE_TARGET_MISSING: (e4, t) => `Edge target is missing
Edge: ${e4} 
Target: ${t}`,
    EDGE_TYPE_MISSING: (e4) => `Edge type is missing
Type: ${e4}`,
    EDGE_SOURCE_TARGET_SAME: (e4, t, n) => `Edge source and target are the same
Edge: ${e4} 
Source: ${t} 
Target: ${n}`,
    EDGE_SOURCE_TARGET_MISSING: (e4, t, n) => `Edge source or target is missing
Edge: ${e4} 
Source: ${t} 
Target: ${n}`,
    EDGE_ORPHANED: (e4) => `Edge was orphaned (suddenly missing source or target) and has been removed
Edge: ${e4}`,
    EDGE_NOT_FOUND: (e4) => `Edge not found
Edge: ${e4}`
  };
  var ve = class extends Error {
    constructor(t, ...n) {
      var o;
      super((o = bn[t]) == null ? void 0 : o.call(bn, ...n)), this.code = t;
    }
  };
  var io = () => typeof window < "u" ? window : { chrome: false };
  function ko(e4) {
    return __spreadProps(__spreadValues({}, e4.computedPosition || { x: 0, y: 0 }), {
      width: e4.dimensions.width || 0,
      height: e4.dimensions.height || 0
    });
  }
  function Ln(e4, t) {
    const n = Math.max(0, Math.min(e4.x + e4.width, t.x + t.width) - Math.max(e4.x, t.x)), o = Math.max(0, Math.min(e4.y + e4.height, t.y + t.height) - Math.max(e4.y, t.y));
    return Math.ceil(n * o);
  }
  function nn(e4) {
    return {
      width: e4.offsetWidth,
      height: e4.offsetHeight
    };
  }
  function ct(e4, t = 0, n = 1) {
    return Math.min(Math.max(e4, t), n);
  }
  function ro(e4, t) {
    return {
      x: ct(e4.x, t[0][0], t[1][0]),
      y: ct(e4.y, t[0][1], t[1][1])
    };
  }
  function Oo(e4) {
    const t = e4.getRootNode(), n = io();
    return "elementFromPoint" in t ? t : n.document;
  }
  function $e(e4) {
    return e4 && "id" in e4 && "source" in e4 && "target" in e4;
  }
  function ua(e4) {
    return $e(e4) && "sourceNode" in e4 && "targetNode" in e4;
  }
  function xt(e4) {
    return e4 && "id" in e4 && !$e(e4);
  }
  function et(e4) {
    return xt(e4) && "computedPosition" in e4;
  }
  function ca(e4) {
    return !!e4.width && !!e4.height && !!e4.x && !!e4.y;
  }
  function da(e4, t = {}) {
    var _a3, _b;
    let n = t;
    return et(e4) || (n = __spreadProps(__spreadValues({
      type: (_b = (_a3 = e4.type) != null ? _a3 : t.type) != null ? _b : "default",
      dimensions: (0, vue_runtime_esm_bundler_exports.markRaw)({
        width: 0,
        height: 0
      }),
      handleBounds: {
        source: [],
        target: []
      },
      computedPosition: (0, vue_runtime_esm_bundler_exports.markRaw)(__spreadValues({
        z: 0
      }, e4.position)),
      draggable: void 0,
      selectable: void 0,
      connectable: void 0,
      focusable: void 0,
      selected: false,
      dragging: false,
      resizing: false,
      initialized: false
    }, t), {
      data: ue(e4.data) ? e4.data : {},
      events: (0, vue_runtime_esm_bundler_exports.markRaw)(ue(e4.events) ? e4.events : {})
    })), Object.assign({}, n, e4, { id: e4.id.toString() });
  }
  function ao(e4, t = {}) {
    var _a3, _b, _c2, _d2, _e;
    const n = ue(e4.events) ? e4.events : t.events && ue(t.events) ? t.events : {}, o = ue(e4.data) ? e4.data : t.data && ue(t.data) ? t.data : {};
    return t = ua(e4) ? t : __spreadProps(__spreadValues({}, t), {
      sourceHandle: (e4.sourceHandle ? e4.sourceHandle.toString() : void 0) || t.sourceHandle,
      targetHandle: (e4.targetHandle ? e4.targetHandle.toString() : void 0) || t.targetHandle,
      type: (_b = (_a3 = e4.type) != null ? _a3 : t.type) != null ? _b : "default",
      source: e4.source.toString() || t.source,
      target: e4.target.toString() || t.target,
      updatable: (_c2 = e4.updatable) != null ? _c2 : t.updatable,
      selectable: (_d2 = e4.selectable) != null ? _d2 : t.selectable,
      focusable: (_e = e4.focusable) != null ? _e : t.focusable,
      data: o,
      events: (0, vue_runtime_esm_bundler_exports.markRaw)(n),
      label: (e4.label && !Pe(e4.label) ? (0, vue_runtime_esm_bundler_exports.markRaw)(e4.label) : e4.label) || t.label,
      interactionWidth: e4.interactionWidth || t.interactionWidth
    }), Object.assign({}, t, e4, { id: e4.id.toString() });
  }
  function on({ source: e4, sourceHandle: t, target: n, targetHandle: o }) {
    return `vueflow__edge-${e4}${t != null ? t : ""}-${n}${o != null ? o : ""}`;
  }
  function _i(e4, t) {
    return t.some((n) => $e(n) && n.source === e4.source && n.target === e4.target && (n.sourceHandle === e4.sourceHandle || !n.sourceHandle && !e4.sourceHandle) && (n.targetHandle === e4.targetHandle || !n.targetHandle && !e4.targetHandle));
  }
  function fa({ x: e4, y: t }, { x: n, y: o, zoom: i }) {
    return {
      x: e4 * i + n,
      y: t * i + o
    };
  }
  function so({ x: e4, y: t }, { x: n, y: o, zoom: i }, r, [a2, s2]) {
    const l = {
      x: (e4 - n) / i,
      y: (t - o) / i
    };
    return r ? {
      x: a2 * Math.round(l.x / a2),
      y: s2 * Math.round(l.y / s2)
    } : l;
  }
  function wi(e4, t) {
    return {
      x: Math.min(e4.x, t.x),
      y: Math.min(e4.y, t.y),
      x2: Math.max(e4.x2, t.x2),
      y2: Math.max(e4.y2, t.y2)
    };
  }
  function Gt({ x: e4, y: t, width: n, height: o }) {
    return {
      x: e4,
      y: t,
      x2: e4 + n,
      y2: t + o
    };
  }
  function bi({ x: e4, y: t, x2: n, y2: o }) {
    return {
      x: e4,
      y: t,
      width: n - e4,
      height: o - t
    };
  }
  function lo(e4) {
    const t = e4.reduce((n, { computedPosition: o = { x: 0, y: 0 }, dimensions: i = { width: 0, height: 0 } } = {}) => wi(n, Gt(__spreadValues(__spreadValues({}, o), i))), { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
    return bi(t);
  }
  function Ei(e4, t, { x: n, y: o, zoom: i } = { x: 0, y: 0, zoom: 1 }, r = false, a2 = false) {
    const s2 = {
      x: (t.x - n) / i,
      y: (t.y - o) / i,
      width: t.width / i,
      height: t.height / i
    };
    return e4.filter((l) => {
      const { computedPosition: u2 = { x: 0, y: 0 }, dimensions: c = { width: 0, height: 0 }, selectable: h2 } = l;
      if (a2 && !h2)
        return false;
      const g2 = __spreadProps(__spreadValues({}, u2), { width: c.width || 0, height: c.height || 0 }), w2 = Ln(s2, g2), f = typeof c.width > "u" || typeof c.height > "u" || c.width === 0 || c.height === 0, d = r && w2 > 0, _ = c.width * c.height;
      return f || d || w2 >= _;
    });
  }
  function rn(e4, t) {
    const n = e4.map((o) => Pe(o) ? o : o.id);
    return t.filter((o) => n.includes(o.source) || n.includes(o.target));
  }
  function Yt(e4, t, n, o, i, r = 0.1, a2 = { x: 0, y: 0 }) {
    var _a3, _b;
    const s2 = t / (e4.width * (1 + r)), l = n / (e4.height * (1 + r)), u2 = Math.min(s2, l), c = ct(u2, o, i), h2 = e4.x + e4.width / 2, g2 = e4.y + e4.height / 2, w2 = t / 2 - h2 * c + ((_a3 = a2.x) != null ? _a3 : 0), f = n / 2 - g2 * c + ((_b = a2.y) != null ? _b : 0);
    return { x: w2, y: f, zoom: c };
  }
  function ha(e4, t) {
    return {
      x: t.x + e4.x,
      y: t.y + e4.y,
      z: (e4.z > t.z ? e4.z : t.z) + 1
    };
  }
  function Si(e4, t) {
    if (!e4.parentNode)
      return false;
    const n = t(e4.parentNode);
    return n ? n.selected ? true : Si(n, t) : false;
  }
  function Xe(e4, t) {
    return typeof e4 > "u" ? "" : typeof e4 == "string" ? e4 : `${t ? `${t}__` : ""}${Object.keys(e4).sort().map((o) => `${o}=${e4[o]}`).join("&")}`;
  }
  function ue(e4) {
    return typeof (0, vue_runtime_esm_bundler_exports.unref)(e4) < "u";
  }
  function ga(e4, t, n) {
    if (!e4.source || !e4.target)
      return n(new ve(he.EDGE_INVALID, e4.id)), false;
    let o;
    return $e(e4) ? o = e4 : o = __spreadProps(__spreadValues({}, e4), {
      id: on(e4)
    }), o = ao(o), _i(o, t) ? false : o;
  }
  function va(e4, t, n, o, i, r) {
    if (!t.source || !t.target)
      return r(new ve(he.EDGE_INVALID, e4.id)), false;
    const a2 = o(e4.id);
    if (!a2)
      return r(new ve(he.EDGE_NOT_FOUND, e4.id)), false;
    const _a3 = e4, { id: s2 } = _a3, l = __objRest(_a3, ["id"]), u2 = __spreadProps(__spreadValues({}, l), {
      id: i ? on(t) : s2,
      source: t.source,
      target: t.target,
      sourceHandle: t.sourceHandle,
      targetHandle: t.targetHandle
    });
    return n.splice(n.indexOf(a2), 1, u2), u2;
  }
  function Io(e4, t, n, o) {
    const i = {}, r = e4.map((s2) => {
      const l = da(s2, __spreadProps(__spreadValues({}, n(s2.id)), {
        parentNode: s2.parentNode
      }));
      return s2.parentNode && (i[s2.parentNode] = true), l;
    }), a2 = [...r, ...t];
    return r.forEach((s2) => {
      const l = a2.find((u2) => u2.id === s2.parentNode);
      s2.parentNode && !l && o(new ve(he.NODE_MISSING_PARENT, s2.id, s2.parentNode)), (s2.parentNode || i[s2.id]) && (i[s2.id] && (s2.isParent = true), l && (l.isParent = true));
    }), r;
  }
  var Q = /* @__PURE__ */ ((e4) => (e4.Left = "left", e4.Top = "top", e4.Right = "right", e4.Bottom = "bottom", e4))(Q || {});
  var uo = /* @__PURE__ */ ((e4) => (e4.Partial = "partial", e4.Full = "full", e4))(uo || {});
  var Ye = /* @__PURE__ */ ((e4) => (e4.Bezier = "default", e4.SimpleBezier = "simple-bezier", e4.Straight = "straight", e4.Step = "step", e4.SmoothStep = "smoothstep", e4))(Ye || {});
  var je = /* @__PURE__ */ ((e4) => (e4.Strict = "strict", e4.Loose = "loose", e4))(je || {});
  var Fn = /* @__PURE__ */ ((e4) => (e4.Arrow = "arrow", e4.ArrowClosed = "arrowclosed", e4))(Fn || {});
  var Xt = /* @__PURE__ */ ((e4) => (e4.Free = "free", e4.Vertical = "vertical", e4.Horizontal = "horizontal", e4))(Xt || {});
  var ma = /* @__PURE__ */ ((e4) => (e4.TopLeft = "top-left", e4.TopCenter = "top-center", e4.TopRight = "top-right", e4.BottomLeft = "bottom-left", e4.BottomCenter = "bottom-center", e4.BottomRight = "bottom-right", e4))(ma || {});
  var To = Symbol("vueFlow");
  var Ni = Symbol("nodeId");
  var Ci = Symbol("nodeRef");
  var Mi = Symbol("edgeId");
  var $i = Symbol("edgeRef");
  var an = Symbol("slots");
  function pa(e4) {
    const t = e4 != null ? e4 : (0, vue_runtime_esm_bundler_exports.inject)(Ni, ""), n = (0, vue_runtime_esm_bundler_exports.inject)(Ci, null), { findNode: o, edges: i, emits: r } = de(), a2 = o(t);
    return a2 || r.error(new ve(he.NODE_NOT_FOUND, t)), {
      id: t,
      nodeEl: n,
      node: a2,
      parentNode: (0, vue_runtime_esm_bundler_exports.computed)(() => o(a2.parentNode)),
      connectedEdges: (0, vue_runtime_esm_bundler_exports.computed)(() => rn([a2], i.value))
    };
  }
  function co(e4) {
    return "clientX" in e4;
  }
  function ot(e4, t) {
    var _a3, _b;
    var r, a2;
    const n = co(e4), o = n ? e4.clientX : (r = e4.touches) == null ? void 0 : r[0].clientX, i = n ? e4.clientY : (a2 = e4.touches) == null ? void 0 : a2[0].clientY;
    return {
      x: o - ((_a3 = t == null ? void 0 : t.left) != null ? _a3 : 0),
      y: i - ((_b = t == null ? void 0 : t.top) != null ? _b : 0)
    };
  }
  function Ut(e4, t, n) {
    var _a3, _b, _c2, _d2;
    const o = ((_a3 = n == null ? void 0 : n.x) != null ? _a3 : 0) + t.x, i = ((_b = n == null ? void 0 : n.y) != null ? _b : 0) + t.y, r = (_c2 = n == null ? void 0 : n.width) != null ? _c2 : t.width, a2 = (_d2 = n == null ? void 0 : n.height) != null ? _d2 : t.height;
    switch (e4) {
      case Q.Top:
        return {
          x: o + r / 2,
          y: i
        };
      case Q.Right:
        return {
          x: o + r,
          y: i + a2 / 2
        };
      case Q.Bottom:
        return {
          x: o + r / 2,
          y: i + a2
        };
      case Q.Left:
        return {
          x: o,
          y: i + a2 / 2
        };
    }
  }
  function Po(e4 = [], t) {
    return e4.length ? !t || e4.length === 1 ? e4[0] : t && e4.find((n) => n.id === t) || null : null;
  }
  function ya(e4, t, n, o, i, r) {
    const a2 = Ut(n, __spreadValues(__spreadValues({}, e4.dimensions), e4.computedPosition), t), s2 = Ut(r, __spreadValues(__spreadValues({}, o.dimensions), o.computedPosition), i);
    return {
      sourceX: a2.x,
      sourceY: a2.y,
      targetX: s2.x,
      targetY: s2.y
    };
  }
  function xa({
    sourcePos: e4,
    targetPos: t,
    sourceWidth: n,
    sourceHeight: o,
    targetWidth: i,
    targetHeight: r,
    width: a2,
    height: s2,
    viewport: l
  }) {
    const u2 = {
      x: Math.min(e4.x, t.x),
      y: Math.min(e4.y, t.y),
      x2: Math.max(e4.x + n, t.x + i),
      y2: Math.max(e4.y + o, t.y + r)
    };
    u2.x === u2.x2 && (u2.x2 += 1), u2.y === u2.y2 && (u2.y2 += 1);
    const c = Gt({
      x: (0 - l.x) / l.zoom,
      y: (0 - l.y) / l.zoom,
      width: a2 / l.zoom,
      height: s2 / l.zoom
    }), h2 = Math.max(0, Math.min(c.x2, u2.x2) - Math.max(c.x, u2.x)), g2 = Math.max(0, Math.min(c.y2, u2.y2) - Math.max(c.y, u2.y));
    return Math.ceil(h2 * g2) > 0;
  }
  function _a2(e4, t, n = false) {
    let o = -1;
    const i = e4.reduce((r, a2) => {
      const s2 = Te(a2.zIndex);
      let l = s2 ? a2.zIndex : 0;
      const u2 = t(a2.source), c = t(a2.target);
      return !u2 || !c || (n && (l = s2 ? a2.zIndex : Math.max(u2.computedPosition.z || 0, c.computedPosition.z || 0)), r[l] ? r[l].push(a2) : r[l] = [a2], o = l > o ? l : o), r;
    }, {});
    return Object.entries(Object.keys(i).length ? i : { 0: [] }).map(([r, a2]) => {
      const s2 = +r;
      return {
        edges: a2,
        level: s2,
        isMaxLevel: s2 === o
      };
    });
  }
  function En(e4) {
    e4 == null || e4.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
  }
  function Do(e4, t, n, o) {
    return (t[n] || []).reduce((i, r) => (`${e4.id}-${r.id}-${n}` !== o && i.push(__spreadValues({
      id: r.id || null,
      type: n,
      nodeId: e4.id
    }, Ut(r.position, __spreadValues(__spreadValues({}, e4.dimensions), e4.computedPosition), r))), i), []);
  }
  function wa(e4, t, n) {
    let o = null, i = 1 / 0;
    return n.forEach((r) => {
      const a2 = Math.sqrt((r.x - e4.x) ** 2 + (r.y - e4.y) ** 2);
      a2 <= t && a2 < i && (i = a2, o = r);
    }), o;
  }
  function Ao(e4, t, n, o, i, r, a2, s2, l, u2) {
    const c = r === "target", h2 = s2.querySelector(`.vue-flow__handle[data-id="${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`), { x: g2, y: w2 } = ot(e4), f = s2.elementFromPoint(g2, w2), d = f != null && f.classList.contains("vue-flow__handle") ? f : h2, _ = {
      handleDomNode: d,
      isValid: false,
      connection: { source: "", target: "", sourceHandle: null, targetHandle: null },
      endHandle: null
    };
    if (d) {
      const x2 = ki(void 0, d), N = d.getAttribute("data-nodeid"), B2 = d.getAttribute("data-handleid"), y2 = d.classList.contains("connectable"), $3 = d.classList.contains("connectableend"), I = {
        source: c ? N : o,
        sourceHandle: c ? B2 : i,
        target: c ? o : N,
        targetHandle: c ? i : B2
      };
      _.connection = I, y2 && $3 && (n === je.Strict ? c && x2 === "source" || !c && x2 === "target" : N !== o || B2 !== i) && (_.endHandle = {
        nodeId: N,
        handleId: B2,
        type: x2
      }, _.isValid = a2(I, {
        edges: l,
        sourceNode: u2(I.source),
        targetNode: u2(I.target)
      }));
    }
    return _;
  }
  function ba({ nodes: e4, nodeId: t, handleId: n, handleType: o }) {
    return e4.reduce((i, r) => {
      const { handleBounds: a2 } = r;
      let s2 = [], l = [];
      return a2 && (s2 = Do(r, a2, "source", `${t}-${n}-${o}`), l = Do(r, a2, "target", `${t}-${n}-${o}`)), i.push(...s2, ...l), i;
    }, []);
  }
  function ki(e4, t) {
    return e4 || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
  }
  function Ea(e4, t) {
    let n = null;
    return t ? n = "valid" : e4 && !t && (n = "invalid"), n;
  }
  function zo(e4, t, n) {
    return e4 < t ? ct(Math.abs(e4 - t), 1, 50) / 50 : e4 > n ? -ct(Math.abs(e4 - n), 1, 50) / 50 : 0;
  }
  function Oi(e4, t) {
    const n = zo(e4.x, 35, t.width - 35) * 20, o = zo(e4.y, 35, t.height - 35) * 20;
    return [n, o];
  }
  function Ot() {
    return true;
  }
  function Ii({
    handleId: e4,
    nodeId: t,
    type: n,
    isValidConnection: o,
    edgeUpdaterType: i,
    onEdgeUpdate: r,
    onEdgeUpdateEnd: a2
  }) {
    const s2 = (0, vue_runtime_esm_bundler_exports.computed)(() => se(n) === "target"), {
      vueFlowRef: l,
      connectionMode: u2,
      connectionRadius: c,
      connectOnClick: h2,
      connectionClickStartHandle: g2,
      nodesConnectable: w2,
      autoPanOnConnect: f,
      findNode: d,
      panBy: _,
      getNodes: x2,
      startConnection: N,
      updateConnection: B2,
      endConnection: y2,
      emits: $3,
      viewport: I,
      edges: m,
      isValidConnection: G2
    } = de();
    let D = null, M2 = false, H = null;
    function j(p) {
      var L2;
      const R = co(p), E2 = Oo(p.target);
      if (R && p.button === 0 || !R) {
        let U = function(z2) {
          F = ot(z2, v), A2 = wa(so(F, I.value, false, [1, 1]), c.value, V), T || (C2(), T = true);
          const ne = Ao(z2, A2, u2.value, se(t), se(e4), s2.value ? "target" : "source", K, E2, m.value, d);
          if (D = ne.connection, M2 = ne.isValid, H = ne.handleDomNode, B2(A2 && M2 ? fa({
            x: A2.x,
            y: A2.y
          }, I.value) : F, ne.endHandle, Ea(!!A2, M2)), !A2 && !M2 && !H)
            return En(b);
          D && D.source !== D.target && H && (En(b), b = H, H.classList.add("connecting", "vue-flow__handle-connecting"), H.classList.toggle("valid", M2), H.classList.toggle("vue-flow__handle-valid", M2));
        }, W = function(z2) {
          (A2 || H) && D && M2 && (r ? r(z2, D) : $3.connect(D)), $3.connectEnd(z2), i && (a2 == null || a2(z2)), En(b), cancelAnimationFrame(J), y2(z2), T = false, M2 = false, D = null, H = null, E2.removeEventListener("mousemove", U), E2.removeEventListener("mouseup", W), E2.removeEventListener("touchmove", U), E2.removeEventListener("touchend", W);
        };
        const P = d(se(t));
        let K = o || G2.value || Ot;
        !K && P && (K = (s2 ? P.isValidSourcePos : P.isValidTargetPos) || Ot);
        let A2, J = 0;
        const { x: Z, y: q } = ot(p), O = E2 == null ? void 0 : E2.elementFromPoint(Z, q), Y = ki(se(i), O), v = (L2 = l.value) == null ? void 0 : L2.getBoundingClientRect();
        if (!v || !Y)
          return;
        let b, F = ot(p, v), T = false;
        const V = ba({
          nodes: x2.value,
          nodeId: se(t),
          handleId: se(e4),
          handleType: Y
        }), C2 = () => {
          if (!f)
            return;
          const [z2, ne] = Oi(F, v);
          _({ x: z2, y: ne }), J = requestAnimationFrame(C2);
        };
        N({
          nodeId: se(t),
          handleId: se(e4),
          type: Y
        }, {
          x: Z - v.left,
          y: q - v.top
        }, p), $3.connectStart({ event: p, nodeId: se(t), handleId: se(e4), handleType: Y }), E2.addEventListener("mousemove", U), E2.addEventListener("mouseup", W), E2.addEventListener("touchmove", U), E2.addEventListener("touchend", W);
      }
    }
    function te(p) {
      if (h2.value)
        if (!g2.value)
          $3.clickConnectStart({ event: p, nodeId: se(t), handleId: se(e4) }), N({ nodeId: se(t), type: se(n), handleId: se(e4) }, void 0, p, true);
        else {
          let R = o || G2.value || Ot;
          const E2 = d(se(t));
          if (!R && E2 && (R = (s2 ? E2.isValidSourcePos : E2.isValidTargetPos) || Ot), E2 && (typeof E2.connectable > "u" ? w2.value : E2.connectable) === false)
            return;
          const L2 = Oo(p.target), { connection: U, isValid: W } = Ao(p, {
            nodeId: se(t),
            id: se(e4),
            type: se(n)
          }, u2.value, g2.value.nodeId, g2.value.handleId || null, g2.value.type, R, L2, m.value, d), P = U.source === U.target;
          W && !P && $3.connect(U), $3.clickConnectEnd(p), y2(p, true);
        }
    }
    return {
      handlePointerDown: j,
      handleClick: te
    };
  }
  function Sa(e4, t) {
    const n = {};
    for (const o in e4)
      t.includes(o) || Object.defineProperty(n, o, {
        enumerable: true,
        get: () => e4[o]
      });
    return n;
  }
  var Na = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"];
  var Ca = {
    name: "Handle",
    compatConfig: { MODE: 3 }
  };
  var Zt = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, Ca), {
    props: {
      id: null,
      type: null,
      position: { default: Q.Top },
      isValidConnection: { type: Function },
      connectable: { type: [Boolean, String, Function], default: void 0 },
      connectableStart: { type: Boolean, default: true },
      connectableEnd: { type: Boolean, default: true }
    },
    setup(e4) {
      const t = Sa(e4, ["position", "connectable", "connectableStart", "connectableEnd", "id", "isValidConnection"]), n = (0, vue_runtime_esm_bundler_exports.toRef)(t, "type", "source"), {
        connectionStartHandle: o,
        connectionClickStartHandle: i,
        connectionEndHandle: r,
        vueFlowRef: a2,
        nodesConnectable: s2,
        noDragClassName: l,
        noPanClassName: u2
      } = de(), { id: c, node: h2, nodeEl: g2, connectedEdges: w2 } = pa(), f = (0, vue_runtime_esm_bundler_exports.ref)(), d = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var _a3;
        return (_a3 = e4.id) != null ? _a3 : `${c}__handle-${e4.position}`;
      }), _ = (0, vue_runtime_esm_bundler_exports.computed)(() => typeof e4.connectableStart < "u" ? e4.connectableStart : true), x2 = (0, vue_runtime_esm_bundler_exports.computed)(() => typeof e4.connectableEnd < "u" ? e4.connectableEnd : true), { handlePointerDown: N, handleClick: B2 } = Ii({
        nodeId: c,
        handleId: d,
        isValidConnection: e4.isValidConnection,
        type: n
      }), y2 = (0, vue_runtime_esm_bundler_exports.computed)(() => Pe(e4.connectable) && e4.connectable === "single" ? !w2.value.some((D) => {
        const M2 = D[`${n.value}Handle`];
        return D[n.value] !== c ? false : M2 ? M2 === d.value : true;
      }) : ze(e4.connectable) ? e4.connectable(h2, w2.value) : ue(e4.connectable) ? e4.connectable : s2.value), $3 = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var D, M2, H, j, te, p;
        return ((D = o.value) == null ? void 0 : D.nodeId) === c && ((M2 = o.value) == null ? void 0 : M2.handleId) === d.value && ((H = o.value) == null ? void 0 : H.type) === n.value || ((j = r.value) == null ? void 0 : j.nodeId) === c && ((te = r.value) == null ? void 0 : te.handleId) === d.value && ((p = r.value) == null ? void 0 : p.type) === n.value;
      }), I = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var D, M2, H;
        return ((D = i.value) == null ? void 0 : D.nodeId) === c && ((M2 = i.value) == null ? void 0 : M2.handleId) === d.value && ((H = i.value) == null ? void 0 : H.type) === n.value;
      });
      pe(() => h2.initialized).toBe(true, { flush: "post" }).then(() => {
        var _a3;
        var E2;
        const D = (E2 = h2.handleBounds[n.value]) == null ? void 0 : E2.find((L2) => L2.id === d.value);
        if (!a2.value || D)
          return;
        const M2 = a2.value.querySelector(".vue-flow__transformationpane");
        if (!g2 || !f.value || !M2 || !d.value)
          return;
        const H = g2.value.getBoundingClientRect(), j = f.value.getBoundingClientRect(), te = window.getComputedStyle(M2), { m22: p } = new window.DOMMatrixReadOnly(te.transform), R = __spreadValues({
          id: d.value,
          position: e4.position,
          x: (j.left - H.left) / p,
          y: (j.top - H.top) / p
        }, nn(f.value));
        h2.handleBounds[n.value] = [...(_a3 = h2.handleBounds[n.value]) != null ? _a3 : [], R];
      });
      function m(D) {
        const M2 = co(D);
        y2.value && _.value && (M2 && D.button === 0 || !M2) && N(D);
      }
      function G2(D) {
        !c || !i.value && !_.value || y2.value && B2(D);
      }
      return (D, M2) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        ref_key: "handle",
        ref: f,
        "data-id": `${(0, vue_runtime_esm_bundler_exports.unref)(c)}-${(0, vue_runtime_esm_bundler_exports.unref)(d)}-${(0, vue_runtime_esm_bundler_exports.unref)(n)}`,
        "data-handleid": (0, vue_runtime_esm_bundler_exports.unref)(d),
        "data-nodeid": (0, vue_runtime_esm_bundler_exports.unref)(c),
        "data-handlepos": e4.position,
        class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["vue-flow__handle", [
          `vue-flow__handle-${e4.position}`,
          `vue-flow__handle-${(0, vue_runtime_esm_bundler_exports.unref)(d)}`,
          (0, vue_runtime_esm_bundler_exports.unref)(l),
          (0, vue_runtime_esm_bundler_exports.unref)(u2),
          (0, vue_runtime_esm_bundler_exports.unref)(n),
          {
            connectable: (0, vue_runtime_esm_bundler_exports.unref)(y2),
            connecting: (0, vue_runtime_esm_bundler_exports.unref)(I),
            connectablestart: (0, vue_runtime_esm_bundler_exports.unref)(_),
            connectableend: (0, vue_runtime_esm_bundler_exports.unref)(x2),
            connectionindicator: (0, vue_runtime_esm_bundler_exports.unref)(y2) && ((0, vue_runtime_esm_bundler_exports.unref)(_) && !(0, vue_runtime_esm_bundler_exports.unref)($3) || (0, vue_runtime_esm_bundler_exports.unref)(x2) && (0, vue_runtime_esm_bundler_exports.unref)($3))
          }
        ]]),
        onMousedown: m,
        onTouchstartPassive: m,
        onClick: G2
      }, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(D.$slots, "default", { id: e4.id })
      ], 42, Na));
    }
  }));
  var sn = function({
    sourcePosition: e4 = Q.Bottom,
    targetPosition: t = Q.Top,
    label: n,
    connectable: o = true,
    isValidTargetPos: i,
    isValidSourcePos: r
  }) {
    return [
      (0, vue_runtime_esm_bundler_exports.h)(Zt, { type: "target", position: t, connectable: o, isValidConnection: i }),
      typeof n != "string" && n ? (0, vue_runtime_esm_bundler_exports.h)(n) : (0, vue_runtime_esm_bundler_exports.h)("div", { innerHTML: n }),
      (0, vue_runtime_esm_bundler_exports.h)(Zt, { type: "source", position: e4, connectable: o, isValidConnection: r })
    ];
  };
  sn.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable"];
  sn.inheritAttrs = false;
  sn.compatConfig = { MODE: 3 };
  var Ma = sn;
  var ln = function({
    sourcePosition: e4 = Q.Bottom,
    label: t,
    connectable: n = true,
    isValidSourcePos: o
  }) {
    return [
      typeof t != "string" && t ? (0, vue_runtime_esm_bundler_exports.h)(t) : (0, vue_runtime_esm_bundler_exports.h)("div", { innerHTML: t }),
      (0, vue_runtime_esm_bundler_exports.h)(Zt, { type: "source", position: e4, connectable: n, isValidConnection: o })
    ];
  };
  ln.props = ["sourcePosition", "label", "isValidSourcePos", "connectable"];
  ln.inheritAttrs = false;
  ln.compatConfig = { MODE: 3 };
  var $a = ln;
  var un = function({
    targetPosition: e4 = Q.Top,
    label: t,
    connectable: n = true,
    isValidTargetPos: o
  }) {
    return [
      (0, vue_runtime_esm_bundler_exports.h)(Zt, { type: "target", position: e4, connectable: n, isValidConnection: o }),
      typeof t != "string" && t ? (0, vue_runtime_esm_bundler_exports.h)(t) : (0, vue_runtime_esm_bundler_exports.h)("div", { innerHTML: t })
    ];
  };
  un.props = ["targetPosition", "label", "isValidTargetPos", "connectable"];
  un.inheritAttrs = false;
  un.compatConfig = { MODE: 3 };
  var ka = un;
  function Bo(e4, t, n) {
    let o = e4;
    do {
      if (o && o.matches(t))
        return true;
      if (o === n)
        return false;
      o = o.parentElement;
    } while (o);
    return false;
  }
  function Oa(e4, t, n, o, i) {
    return e4.filter((r) => (r.selected || r.id === i) && (!r.parentNode || !Si(r, o)) && (r.draggable || t && typeof r.draggable > "u")).map((r) => {
      var a2, s2;
      return (0, vue_runtime_esm_bundler_exports.markRaw)({
        id: r.id,
        position: r.position || { x: 0, y: 0 },
        distance: {
          x: n.x - ((a2 = r.computedPosition) == null ? void 0 : a2.x) || 0,
          y: n.y - ((s2 = r.computedPosition) == null ? void 0 : s2.y) || 0
        },
        from: r.computedPosition,
        extent: r.extent,
        parentNode: r.parentNode,
        dimensions: r.dimensions
      });
    });
  }
  function Sn({
    id: e4,
    dragItems: t,
    findNode: n
  }) {
    const o = t.map((i) => n(i.id));
    return [e4 ? o.find((i) => i.id === e4) : o[0], o];
  }
  function Ti(e4) {
    if (Array.isArray(e4))
      switch (e4.length) {
        case 1:
          return [e4[0], e4[0], e4[0], e4[0]];
        case 2:
          return [e4[0], e4[1], e4[0], e4[1]];
        case 3:
          return [e4[0], e4[1], e4[2], e4[1]];
        case 4:
          return e4;
        default:
          return [0, 0, 0, 0];
      }
    return [e4, e4, e4, e4];
  }
  function Ia(e4, t, n) {
    const [o, i, r, a2] = typeof e4 != "string" ? Ti(e4.padding) : [0, 0, 0, 0];
    return n && Te(n.computedPosition.x) && Te(n.computedPosition.y) && Te(n.dimensions.width) && Te(n.dimensions.height) ? [
      [n.computedPosition.x + a2, n.computedPosition.y + o],
      [
        n.computedPosition.x + (n.dimensions.width - t.dimensions.width) - i,
        n.computedPosition.y + (n.dimensions.height - t.dimensions.height) - r
      ]
    ] : false;
  }
  function Ta(e4, t, n, o) {
    let i = e4.extent || n;
    if (i === "parent" || !Array.isArray(i) && (i == null ? void 0 : i.range) === "parent")
      if (e4.parentNode && o && e4.dimensions.width && e4.dimensions.height) {
        const r = Ia(i, e4, o);
        r && (i = r);
      } else
        t(new ve(he.NODE_EXTENT_INVALID, e4.id)), i = n;
    else if (Array.isArray(i)) {
      const r = (o == null ? void 0 : o.computedPosition.x) || 0, a2 = (o == null ? void 0 : o.computedPosition.y) || 0;
      i = [
        [i[0][0] + r, i[0][1] + a2],
        [i[1][0] + r, i[1][1] + a2]
      ];
    } else if (i != null && i.range && Array.isArray(i.range)) {
      const [r, a2, s2, l] = Ti(i.padding), u2 = (o == null ? void 0 : o.computedPosition.x) || 0, c = (o == null ? void 0 : o.computedPosition.y) || 0;
      i = [
        [i.range[0][0] + u2 + l, i.range[0][1] + c + r],
        [i.range[1][0] + u2 - a2, i.range[1][1] + c - s2]
      ];
    }
    return i;
  }
  function fo(e4, t, n, o, i) {
    const r = Ta(e4, n, o, i), a2 = ro(t, r);
    return {
      position: {
        x: a2.x - ((i == null ? void 0 : i.computedPosition.x) || 0),
        y: a2.y - ((i == null ? void 0 : i.computedPosition.y) || 0)
      },
      computedPosition: a2
    };
  }
  function Pi() {
    const { getSelectedNodes: e4, nodeExtent: t, updateNodePositions: n, findNode: o, snapGrid: i, snapToGrid: r, nodesDraggable: a2, emits: s2 } = de();
    return (l, u2 = false) => {
      const c = r.value ? i.value[0] : 5, h2 = r.value ? i.value[1] : 5, g2 = u2 ? 4 : 1, w2 = l.x * c * g2, f = l.y * h2 * g2, d = e4.value.filter((_) => _.draggable || a2 && typeof _.draggable > "u").map((_) => {
        const x2 = { x: _.computedPosition.x + w2, y: _.computedPosition.y + f }, { computedPosition: N } = fo(_, x2, s2.error, t.value, _.parentNode ? o(_.parentNode) : void 0);
        return {
          id: _.id,
          position: N,
          from: _.position,
          distance: { x: l.x, y: l.y },
          dimensions: _.dimensions
        };
      });
      n(d, true, false);
    };
  }
  function Pa() {
    return {
      doubleClick: X(),
      click: X(),
      mouseEnter: X(),
      mouseMove: X(),
      mouseLeave: X(),
      contextMenu: X(),
      dragStart: X(),
      drag: X(),
      dragStop: X()
    };
  }
  function Da(e4, t) {
    const n = Pa();
    return n.doubleClick.on((o) => {
      var i, r;
      t.nodeDoubleClick(o), (r = (i = e4.events) == null ? void 0 : i.doubleClick) == null || r.call(i, o);
    }), n.click.on((o) => {
      var i, r;
      t.nodeClick(o), (r = (i = e4.events) == null ? void 0 : i.click) == null || r.call(i, o);
    }), n.mouseEnter.on((o) => {
      var i, r;
      t.nodeMouseEnter(o), (r = (i = e4.events) == null ? void 0 : i.mouseEnter) == null || r.call(i, o);
    }), n.mouseMove.on((o) => {
      var i, r;
      t.nodeMouseMove(o), (r = (i = e4.events) == null ? void 0 : i.mouseMove) == null || r.call(i, o);
    }), n.mouseLeave.on((o) => {
      var i, r;
      t.nodeMouseLeave(o), (r = (i = e4.events) == null ? void 0 : i.mouseLeave) == null || r.call(i, o);
    }), n.contextMenu.on((o) => {
      var i, r;
      t.nodeContextMenu(o), (r = (i = e4.events) == null ? void 0 : i.contextMenu) == null || r.call(i, o);
    }), n.dragStart.on((o) => {
      var i, r;
      t.nodeDragStart(o), (r = (i = e4.events) == null ? void 0 : i.dragStart) == null || r.call(i, o);
    }), n.drag.on((o) => {
      var i, r;
      t.nodeDrag(o), (r = (i = e4.events) == null ? void 0 : i.drag) == null || r.call(i, o);
    }), n.dragStop.on((o) => {
      var i, r;
      t.nodeDragStop(o), (r = (i = e4.events) == null ? void 0 : i.dragStop) == null || r.call(i, o);
    }), Object.entries(n).reduce((o, [i, r]) => (o.emit[i] = r.trigger, o.on[i] = r.on, o), { emit: {}, on: {} });
  }
  function Aa() {
    const { viewport: e4, snapGrid: t, snapToGrid: n } = de();
    return ({ sourceEvent: o }) => {
      const i = o.touches ? o.touches[0].clientX : o.clientX, r = o.touches ? o.touches[0].clientY : o.clientY, a2 = {
        x: (i - e4.value.x) / e4.value.zoom,
        y: (r - e4.value.y) / e4.value.zoom
      };
      return __spreadValues({
        xSnapped: n.value ? t.value[0] * Math.round(a2.x / t.value[0]) : a2.x,
        ySnapped: n.value ? t.value[1] * Math.round(a2.y / t.value[1]) : a2.y
      }, a2);
    };
  }
  function Ro(e4, t, n) {
    const o = t.querySelectorAll(`.vue-flow__handle${e4}`);
    if (!o || !o.length)
      return;
    const i = Array.from(o), r = t.getBoundingClientRect();
    return i.map((a2) => {
      const s2 = a2.getBoundingClientRect();
      return __spreadValues({
        id: a2.getAttribute("data-handleid"),
        position: a2.getAttribute("data-handlepos"),
        x: (s2.left - r.left) / n,
        y: (s2.top - r.top) / n
      }, nn(a2));
    });
  }
  function Gn(e4, t, n, o, i, r = false, a2) {
    i.value = false, e4.selected ? (r || e4.selected && t) && (o([e4]), (0, vue_runtime_esm_bundler_exports.nextTick)(a2.blur)) : n([e4]);
  }
  var za = { value: () => {
  } };
  function cn() {
    for (var e4 = 0, t = arguments.length, n = {}, o; e4 < t; ++e4) {
      if (!(o = arguments[e4] + "") || o in n || /[\s.]/.test(o))
        throw new Error("illegal type: " + o);
      n[o] = [];
    }
    return new Rt(n);
  }
  function Rt(e4) {
    this._ = e4;
  }
  function Ba(e4, t) {
    return e4.trim().split(/^|\s+/).map(function(n) {
      var o = "", i = n.indexOf(".");
      if (i >= 0 && (o = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n))
        throw new Error("unknown type: " + n);
      return { type: n, name: o };
    });
  }
  Rt.prototype = cn.prototype = {
    constructor: Rt,
    on: function(e4, t) {
      var n = this._, o = Ba(e4 + "", n), i, r = -1, a2 = o.length;
      if (arguments.length < 2) {
        for (; ++r < a2; )
          if ((i = (e4 = o[r]).type) && (i = Ra(n[i], e4.name)))
            return i;
        return;
      }
      if (t != null && typeof t != "function")
        throw new Error("invalid callback: " + t);
      for (; ++r < a2; )
        if (i = (e4 = o[r]).type)
          n[i] = Vo(n[i], e4.name, t);
        else if (t == null)
          for (i in n)
            n[i] = Vo(n[i], e4.name, null);
      return this;
    },
    copy: function() {
      var e4 = {}, t = this._;
      for (var n in t)
        e4[n] = t[n].slice();
      return new Rt(e4);
    },
    call: function(e4, t) {
      if ((i = arguments.length - 2) > 0)
        for (var n = new Array(i), o = 0, i, r; o < i; ++o)
          n[o] = arguments[o + 2];
      if (!this._.hasOwnProperty(e4))
        throw new Error("unknown type: " + e4);
      for (r = this._[e4], o = 0, i = r.length; o < i; ++o)
        r[o].value.apply(t, n);
    },
    apply: function(e4, t, n) {
      if (!this._.hasOwnProperty(e4))
        throw new Error("unknown type: " + e4);
      for (var o = this._[e4], i = 0, r = o.length; i < r; ++i)
        o[i].value.apply(t, n);
    }
  };
  function Ra(e4, t) {
    for (var n = 0, o = e4.length, i; n < o; ++n)
      if ((i = e4[n]).name === t)
        return i.value;
  }
  function Vo(e4, t, n) {
    for (var o = 0, i = e4.length; o < i; ++o)
      if (e4[o].name === t) {
        e4[o] = za, e4 = e4.slice(0, o).concat(e4.slice(o + 1));
        break;
      }
    return n != null && e4.push({ name: t, value: n }), e4;
  }
  var Yn = "http://www.w3.org/1999/xhtml";
  var Ho = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: Yn,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  function dn(e4) {
    var t = e4 += "", n = t.indexOf(":");
    return n >= 0 && (t = e4.slice(0, n)) !== "xmlns" && (e4 = e4.slice(n + 1)), Ho.hasOwnProperty(t) ? { space: Ho[t], local: e4 } : e4;
  }
  function Va(e4) {
    return function() {
      var t = this.ownerDocument, n = this.namespaceURI;
      return n === Yn && t.documentElement.namespaceURI === Yn ? t.createElement(e4) : t.createElementNS(n, e4);
    };
  }
  function Ha(e4) {
    return function() {
      return this.ownerDocument.createElementNS(e4.space, e4.local);
    };
  }
  function Di(e4) {
    var t = dn(e4);
    return (t.local ? Ha : Va)(t);
  }
  function La() {
  }
  function ho(e4) {
    return e4 == null ? La : function() {
      return this.querySelector(e4);
    };
  }
  function Fa(e4) {
    typeof e4 != "function" && (e4 = ho(e4));
    for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
      for (var r = t[i], a2 = r.length, s2 = o[i] = new Array(a2), l, u2, c = 0; c < a2; ++c)
        (l = r[c]) && (u2 = e4.call(l, l.__data__, c, r)) && ("__data__" in l && (u2.__data__ = l.__data__), s2[c] = u2);
    return new xe(o, this._parents);
  }
  function Ga(e4) {
    return e4 == null ? [] : Array.isArray(e4) ? e4 : Array.from(e4);
  }
  function Ya() {
    return [];
  }
  function Ai(e4) {
    return e4 == null ? Ya : function() {
      return this.querySelectorAll(e4);
    };
  }
  function Xa(e4) {
    return function() {
      return Ga(e4.apply(this, arguments));
    };
  }
  function Ua(e4) {
    typeof e4 == "function" ? e4 = Xa(e4) : e4 = Ai(e4);
    for (var t = this._groups, n = t.length, o = [], i = [], r = 0; r < n; ++r)
      for (var a2 = t[r], s2 = a2.length, l, u2 = 0; u2 < s2; ++u2)
        (l = a2[u2]) && (o.push(e4.call(l, l.__data__, u2, a2)), i.push(l));
    return new xe(o, i);
  }
  function zi(e4) {
    return function() {
      return this.matches(e4);
    };
  }
  function Bi(e4) {
    return function(t) {
      return t.matches(e4);
    };
  }
  var Za = Array.prototype.find;
  function Ka(e4) {
    return function() {
      return Za.call(this.children, e4);
    };
  }
  function Wa() {
    return this.firstElementChild;
  }
  function qa(e4) {
    return this.select(e4 == null ? Wa : Ka(typeof e4 == "function" ? e4 : Bi(e4)));
  }
  var ja = Array.prototype.filter;
  function Qa() {
    return Array.from(this.children);
  }
  function Ja(e4) {
    return function() {
      return ja.call(this.children, e4);
    };
  }
  function es(e4) {
    return this.selectAll(e4 == null ? Qa : Ja(typeof e4 == "function" ? e4 : Bi(e4)));
  }
  function ts(e4) {
    typeof e4 != "function" && (e4 = zi(e4));
    for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
      for (var r = t[i], a2 = r.length, s2 = o[i] = [], l, u2 = 0; u2 < a2; ++u2)
        (l = r[u2]) && e4.call(l, l.__data__, u2, r) && s2.push(l);
    return new xe(o, this._parents);
  }
  function Ri(e4) {
    return new Array(e4.length);
  }
  function ns() {
    return new xe(this._enter || this._groups.map(Ri), this._parents);
  }
  function Kt(e4, t) {
    this.ownerDocument = e4.ownerDocument, this.namespaceURI = e4.namespaceURI, this._next = null, this._parent = e4, this.__data__ = t;
  }
  Kt.prototype = {
    constructor: Kt,
    appendChild: function(e4) {
      return this._parent.insertBefore(e4, this._next);
    },
    insertBefore: function(e4, t) {
      return this._parent.insertBefore(e4, t);
    },
    querySelector: function(e4) {
      return this._parent.querySelector(e4);
    },
    querySelectorAll: function(e4) {
      return this._parent.querySelectorAll(e4);
    }
  };
  function os(e4) {
    return function() {
      return e4;
    };
  }
  function is(e4, t, n, o, i, r) {
    for (var a2 = 0, s2, l = t.length, u2 = r.length; a2 < u2; ++a2)
      (s2 = t[a2]) ? (s2.__data__ = r[a2], o[a2] = s2) : n[a2] = new Kt(e4, r[a2]);
    for (; a2 < l; ++a2)
      (s2 = t[a2]) && (i[a2] = s2);
  }
  function rs(e4, t, n, o, i, r, a2) {
    var s2, l, u2 = /* @__PURE__ */ new Map(), c = t.length, h2 = r.length, g2 = new Array(c), w2;
    for (s2 = 0; s2 < c; ++s2)
      (l = t[s2]) && (g2[s2] = w2 = a2.call(l, l.__data__, s2, t) + "", u2.has(w2) ? i[s2] = l : u2.set(w2, l));
    for (s2 = 0; s2 < h2; ++s2)
      w2 = a2.call(e4, r[s2], s2, r) + "", (l = u2.get(w2)) ? (o[s2] = l, l.__data__ = r[s2], u2.delete(w2)) : n[s2] = new Kt(e4, r[s2]);
    for (s2 = 0; s2 < c; ++s2)
      (l = t[s2]) && u2.get(g2[s2]) === l && (i[s2] = l);
  }
  function as(e4) {
    return e4.__data__;
  }
  function ss(e4, t) {
    if (!arguments.length)
      return Array.from(this, as);
    var n = t ? rs : is, o = this._parents, i = this._groups;
    typeof e4 != "function" && (e4 = os(e4));
    for (var r = i.length, a2 = new Array(r), s2 = new Array(r), l = new Array(r), u2 = 0; u2 < r; ++u2) {
      var c = o[u2], h2 = i[u2], g2 = h2.length, w2 = ls(e4.call(c, c && c.__data__, u2, o)), f = w2.length, d = s2[u2] = new Array(f), _ = a2[u2] = new Array(f), x2 = l[u2] = new Array(g2);
      n(c, h2, d, _, x2, w2, t);
      for (var N = 0, B2 = 0, y2, $3; N < f; ++N)
        if (y2 = d[N]) {
          for (N >= B2 && (B2 = N + 1); !($3 = _[B2]) && ++B2 < f; )
            ;
          y2._next = $3 || null;
        }
    }
    return a2 = new xe(a2, o), a2._enter = s2, a2._exit = l, a2;
  }
  function ls(e4) {
    return typeof e4 == "object" && "length" in e4 ? e4 : Array.from(e4);
  }
  function us() {
    return new xe(this._exit || this._groups.map(Ri), this._parents);
  }
  function cs(e4, t, n) {
    var o = this.enter(), i = this, r = this.exit();
    return typeof e4 == "function" ? (o = e4(o), o && (o = o.selection())) : o = o.append(e4 + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? r.remove() : n(r), o && i ? o.merge(i).order() : i;
  }
  function ds(e4) {
    for (var t = e4.selection ? e4.selection() : e4, n = this._groups, o = t._groups, i = n.length, r = o.length, a2 = Math.min(i, r), s2 = new Array(i), l = 0; l < a2; ++l)
      for (var u2 = n[l], c = o[l], h2 = u2.length, g2 = s2[l] = new Array(h2), w2, f = 0; f < h2; ++f)
        (w2 = u2[f] || c[f]) && (g2[f] = w2);
    for (; l < i; ++l)
      s2[l] = n[l];
    return new xe(s2, this._parents);
  }
  function fs() {
    for (var e4 = this._groups, t = -1, n = e4.length; ++t < n; )
      for (var o = e4[t], i = o.length - 1, r = o[i], a2; --i >= 0; )
        (a2 = o[i]) && (r && a2.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(a2, r), r = a2);
    return this;
  }
  function hs(e4) {
    e4 || (e4 = gs);
    function t(h2, g2) {
      return h2 && g2 ? e4(h2.__data__, g2.__data__) : !h2 - !g2;
    }
    for (var n = this._groups, o = n.length, i = new Array(o), r = 0; r < o; ++r) {
      for (var a2 = n[r], s2 = a2.length, l = i[r] = new Array(s2), u2, c = 0; c < s2; ++c)
        (u2 = a2[c]) && (l[c] = u2);
      l.sort(t);
    }
    return new xe(i, this._parents).order();
  }
  function gs(e4, t) {
    return e4 < t ? -1 : e4 > t ? 1 : e4 >= t ? 0 : NaN;
  }
  function vs() {
    var e4 = arguments[0];
    return arguments[0] = this, e4.apply(null, arguments), this;
  }
  function ms() {
    return Array.from(this);
  }
  function ps() {
    for (var e4 = this._groups, t = 0, n = e4.length; t < n; ++t)
      for (var o = e4[t], i = 0, r = o.length; i < r; ++i) {
        var a2 = o[i];
        if (a2)
          return a2;
      }
    return null;
  }
  function ys() {
    let e4 = 0;
    for (const t of this)
      ++e4;
    return e4;
  }
  function xs() {
    return !this.node();
  }
  function _s(e4) {
    for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
      for (var i = t[n], r = 0, a2 = i.length, s2; r < a2; ++r)
        (s2 = i[r]) && e4.call(s2, s2.__data__, r, i);
    return this;
  }
  function ws(e4) {
    return function() {
      this.removeAttribute(e4);
    };
  }
  function bs(e4) {
    return function() {
      this.removeAttributeNS(e4.space, e4.local);
    };
  }
  function Es(e4, t) {
    return function() {
      this.setAttribute(e4, t);
    };
  }
  function Ss(e4, t) {
    return function() {
      this.setAttributeNS(e4.space, e4.local, t);
    };
  }
  function Ns(e4, t) {
    return function() {
      var n = t.apply(this, arguments);
      n == null ? this.removeAttribute(e4) : this.setAttribute(e4, n);
    };
  }
  function Cs(e4, t) {
    return function() {
      var n = t.apply(this, arguments);
      n == null ? this.removeAttributeNS(e4.space, e4.local) : this.setAttributeNS(e4.space, e4.local, n);
    };
  }
  function Ms(e4, t) {
    var n = dn(e4);
    if (arguments.length < 2) {
      var o = this.node();
      return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
    }
    return this.each((t == null ? n.local ? bs : ws : typeof t == "function" ? n.local ? Cs : Ns : n.local ? Ss : Es)(n, t));
  }
  function Vi(e4) {
    return e4.ownerDocument && e4.ownerDocument.defaultView || e4.document && e4 || e4.defaultView;
  }
  function $s(e4) {
    return function() {
      this.style.removeProperty(e4);
    };
  }
  function ks(e4, t, n) {
    return function() {
      this.style.setProperty(e4, t, n);
    };
  }
  function Os(e4, t, n) {
    return function() {
      var o = t.apply(this, arguments);
      o == null ? this.style.removeProperty(e4) : this.style.setProperty(e4, o, n);
    };
  }
  function Is(e4, t, n) {
    return arguments.length > 1 ? this.each((t == null ? $s : typeof t == "function" ? Os : ks)(e4, t, n != null ? n : "")) : dt(this.node(), e4);
  }
  function dt(e4, t) {
    return e4.style.getPropertyValue(t) || Vi(e4).getComputedStyle(e4, null).getPropertyValue(t);
  }
  function Ts(e4) {
    return function() {
      delete this[e4];
    };
  }
  function Ps(e4, t) {
    return function() {
      this[e4] = t;
    };
  }
  function Ds(e4, t) {
    return function() {
      var n = t.apply(this, arguments);
      n == null ? delete this[e4] : this[e4] = n;
    };
  }
  function As(e4, t) {
    return arguments.length > 1 ? this.each((t == null ? Ts : typeof t == "function" ? Ds : Ps)(e4, t)) : this.node()[e4];
  }
  function Hi(e4) {
    return e4.trim().split(/^|\s+/);
  }
  function go(e4) {
    return e4.classList || new Li(e4);
  }
  function Li(e4) {
    this._node = e4, this._names = Hi(e4.getAttribute("class") || "");
  }
  Li.prototype = {
    add: function(e4) {
      var t = this._names.indexOf(e4);
      t < 0 && (this._names.push(e4), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function(e4) {
      var t = this._names.indexOf(e4);
      t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function(e4) {
      return this._names.indexOf(e4) >= 0;
    }
  };
  function Fi(e4, t) {
    for (var n = go(e4), o = -1, i = t.length; ++o < i; )
      n.add(t[o]);
  }
  function Gi(e4, t) {
    for (var n = go(e4), o = -1, i = t.length; ++o < i; )
      n.remove(t[o]);
  }
  function zs(e4) {
    return function() {
      Fi(this, e4);
    };
  }
  function Bs(e4) {
    return function() {
      Gi(this, e4);
    };
  }
  function Rs(e4, t) {
    return function() {
      (t.apply(this, arguments) ? Fi : Gi)(this, e4);
    };
  }
  function Vs(e4, t) {
    var n = Hi(e4 + "");
    if (arguments.length < 2) {
      for (var o = go(this.node()), i = -1, r = n.length; ++i < r; )
        if (!o.contains(n[i]))
          return false;
      return true;
    }
    return this.each((typeof t == "function" ? Rs : t ? zs : Bs)(n, t));
  }
  function Hs() {
    this.textContent = "";
  }
  function Ls(e4) {
    return function() {
      this.textContent = e4;
    };
  }
  function Fs(e4) {
    return function() {
      var t = e4.apply(this, arguments);
      this.textContent = t != null ? t : "";
    };
  }
  function Gs(e4) {
    return arguments.length ? this.each(e4 == null ? Hs : (typeof e4 == "function" ? Fs : Ls)(e4)) : this.node().textContent;
  }
  function Ys() {
    this.innerHTML = "";
  }
  function Xs(e4) {
    return function() {
      this.innerHTML = e4;
    };
  }
  function Us(e4) {
    return function() {
      var t = e4.apply(this, arguments);
      this.innerHTML = t != null ? t : "";
    };
  }
  function Zs(e4) {
    return arguments.length ? this.each(e4 == null ? Ys : (typeof e4 == "function" ? Us : Xs)(e4)) : this.node().innerHTML;
  }
  function Ks() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function Ws() {
    return this.each(Ks);
  }
  function qs() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function js() {
    return this.each(qs);
  }
  function Qs(e4) {
    var t = typeof e4 == "function" ? e4 : Di(e4);
    return this.select(function() {
      return this.appendChild(t.apply(this, arguments));
    });
  }
  function Js() {
    return null;
  }
  function el(e4, t) {
    var n = typeof e4 == "function" ? e4 : Di(e4), o = t == null ? Js : typeof t == "function" ? t : ho(t);
    return this.select(function() {
      return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
    });
  }
  function tl() {
    var e4 = this.parentNode;
    e4 && e4.removeChild(this);
  }
  function nl() {
    return this.each(tl);
  }
  function ol() {
    var e4 = this.cloneNode(false), t = this.parentNode;
    return t ? t.insertBefore(e4, this.nextSibling) : e4;
  }
  function il() {
    var e4 = this.cloneNode(true), t = this.parentNode;
    return t ? t.insertBefore(e4, this.nextSibling) : e4;
  }
  function rl(e4) {
    return this.select(e4 ? il : ol);
  }
  function al(e4) {
    return arguments.length ? this.property("__data__", e4) : this.node().__data__;
  }
  function sl(e4) {
    return function(t) {
      e4.call(this, t, this.__data__);
    };
  }
  function ll(e4) {
    return e4.trim().split(/^|\s+/).map(function(t) {
      var n = "", o = t.indexOf(".");
      return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
    });
  }
  function ul(e4) {
    return function() {
      var t = this.__on;
      if (t) {
        for (var n = 0, o = -1, i = t.length, r; n < i; ++n)
          r = t[n], (!e4.type || r.type === e4.type) && r.name === e4.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++o] = r;
        ++o ? t.length = o : delete this.__on;
      }
    };
  }
  function cl(e4, t, n) {
    return function() {
      var o = this.__on, i, r = sl(t);
      if (o) {
        for (var a2 = 0, s2 = o.length; a2 < s2; ++a2)
          if ((i = o[a2]).type === e4.type && i.name === e4.name) {
            this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = r, i.options = n), i.value = t;
            return;
          }
      }
      this.addEventListener(e4.type, r, n), i = { type: e4.type, name: e4.name, value: t, listener: r, options: n }, o ? o.push(i) : this.__on = [i];
    };
  }
  function dl(e4, t, n) {
    var o = ll(e4 + ""), i, r = o.length, a2;
    if (arguments.length < 2) {
      var s2 = this.node().__on;
      if (s2) {
        for (var l = 0, u2 = s2.length, c; l < u2; ++l)
          for (i = 0, c = s2[l]; i < r; ++i)
            if ((a2 = o[i]).type === c.type && a2.name === c.name)
              return c.value;
      }
      return;
    }
    for (s2 = t ? cl : ul, i = 0; i < r; ++i)
      this.each(s2(o[i], t, n));
    return this;
  }
  function Yi(e4, t, n) {
    var o = Vi(e4), i = o.CustomEvent;
    typeof i == "function" ? i = new i(t, n) : (i = o.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, false, false)), e4.dispatchEvent(i);
  }
  function fl(e4, t) {
    return function() {
      return Yi(this, e4, t);
    };
  }
  function hl(e4, t) {
    return function() {
      return Yi(this, e4, t.apply(this, arguments));
    };
  }
  function gl(e4, t) {
    return this.each((typeof t == "function" ? hl : fl)(e4, t));
  }
  function* vl() {
    for (var e4 = this._groups, t = 0, n = e4.length; t < n; ++t)
      for (var o = e4[t], i = 0, r = o.length, a2; i < r; ++i)
        (a2 = o[i]) && (yield a2);
  }
  var Xi = [null];
  function xe(e4, t) {
    this._groups = e4, this._parents = t;
  }
  function $t() {
    return new xe([[document.documentElement]], Xi);
  }
  function ml() {
    return this;
  }
  xe.prototype = $t.prototype = {
    constructor: xe,
    select: Fa,
    selectAll: Ua,
    selectChild: qa,
    selectChildren: es,
    filter: ts,
    data: ss,
    enter: ns,
    exit: us,
    join: cs,
    merge: ds,
    selection: ml,
    order: fs,
    sort: hs,
    call: vs,
    nodes: ms,
    node: ps,
    size: ys,
    empty: xs,
    each: _s,
    attr: Ms,
    style: Is,
    property: As,
    classed: Vs,
    text: Gs,
    html: Zs,
    raise: Ws,
    lower: js,
    append: Qs,
    insert: el,
    remove: nl,
    clone: rl,
    datum: al,
    on: dl,
    dispatch: gl,
    [Symbol.iterator]: vl
  };
  function we(e4) {
    return typeof e4 == "string" ? new xe([[document.querySelector(e4)]], [document.documentElement]) : new xe([[e4]], Xi);
  }
  function pl(e4) {
    let t;
    for (; t = e4.sourceEvent; )
      e4 = t;
    return e4;
  }
  function Ne(e4, t) {
    if (e4 = pl(e4), t === void 0 && (t = e4.currentTarget), t) {
      var n = t.ownerSVGElement || t;
      if (n.createSVGPoint) {
        var o = n.createSVGPoint();
        return o.x = e4.clientX, o.y = e4.clientY, o = o.matrixTransform(t.getScreenCTM().inverse()), [o.x, o.y];
      }
      if (t.getBoundingClientRect) {
        var i = t.getBoundingClientRect();
        return [e4.clientX - i.left - t.clientLeft, e4.clientY - i.top - t.clientTop];
      }
    }
    return [e4.pageX, e4.pageY];
  }
  var yl = { passive: false };
  var bt = { capture: true, passive: false };
  function Nn(e4) {
    e4.stopImmediatePropagation();
  }
  function it(e4) {
    e4.preventDefault(), e4.stopImmediatePropagation();
  }
  function Ui(e4) {
    var t = e4.document.documentElement, n = we(e4).on("dragstart.drag", it, bt);
    "onselectstart" in t ? n.on("selectstart.drag", it, bt) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
  }
  function Zi(e4, t) {
    var n = e4.document.documentElement, o = we(e4).on("dragstart.drag", null);
    t && (o.on("click.drag", it, bt), setTimeout(function() {
      o.on("click.drag", null);
    }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
  }
  var It = (e4) => () => e4;
  function Xn(e4, {
    sourceEvent: t,
    subject: n,
    target: o,
    identifier: i,
    active: r,
    x: a2,
    y: s2,
    dx: l,
    dy: u2,
    dispatch: c
  }) {
    Object.defineProperties(this, {
      type: { value: e4, enumerable: true, configurable: true },
      sourceEvent: { value: t, enumerable: true, configurable: true },
      subject: { value: n, enumerable: true, configurable: true },
      target: { value: o, enumerable: true, configurable: true },
      identifier: { value: i, enumerable: true, configurable: true },
      active: { value: r, enumerable: true, configurable: true },
      x: { value: a2, enumerable: true, configurable: true },
      y: { value: s2, enumerable: true, configurable: true },
      dx: { value: l, enumerable: true, configurable: true },
      dy: { value: u2, enumerable: true, configurable: true },
      _: { value: c }
    });
  }
  Xn.prototype.on = function() {
    var e4 = this._.on.apply(this._, arguments);
    return e4 === this._ ? this : e4;
  };
  function xl(e4) {
    return !e4.ctrlKey && !e4.button;
  }
  function _l() {
    return this.parentNode;
  }
  function wl(e4, t) {
    return t != null ? t : { x: e4.x, y: e4.y };
  }
  function bl() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function El() {
    var e4 = xl, t = _l, n = wl, o = bl, i = {}, r = cn("start", "drag", "end"), a2 = 0, s2, l, u2, c, h2 = 0;
    function g2(y2) {
      y2.on("mousedown.drag", w2).filter(o).on("touchstart.drag", _).on("touchmove.drag", x2, yl).on("touchend.drag touchcancel.drag", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function w2(y2, $3) {
      if (!(c || !e4.call(this, y2, $3))) {
        var I = B2(this, t.call(this, y2, $3), y2, $3, "mouse");
        I && (we(y2.view).on("mousemove.drag", f, bt).on("mouseup.drag", d, bt), Ui(y2.view), Nn(y2), u2 = false, s2 = y2.clientX, l = y2.clientY, I("start", y2));
      }
    }
    function f(y2) {
      if (it(y2), !u2) {
        var $3 = y2.clientX - s2, I = y2.clientY - l;
        u2 = $3 * $3 + I * I > h2;
      }
      i.mouse("drag", y2);
    }
    function d(y2) {
      we(y2.view).on("mousemove.drag mouseup.drag", null), Zi(y2.view, u2), it(y2), i.mouse("end", y2);
    }
    function _(y2, $3) {
      if (e4.call(this, y2, $3)) {
        var I = y2.changedTouches, m = t.call(this, y2, $3), G2 = I.length, D, M2;
        for (D = 0; D < G2; ++D)
          (M2 = B2(this, m, y2, $3, I[D].identifier, I[D])) && (Nn(y2), M2("start", y2, I[D]));
      }
    }
    function x2(y2) {
      var $3 = y2.changedTouches, I = $3.length, m, G2;
      for (m = 0; m < I; ++m)
        (G2 = i[$3[m].identifier]) && (it(y2), G2("drag", y2, $3[m]));
    }
    function N(y2) {
      var $3 = y2.changedTouches, I = $3.length, m, G2;
      for (c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, 500), m = 0; m < I; ++m)
        (G2 = i[$3[m].identifier]) && (Nn(y2), G2("end", y2, $3[m]));
    }
    function B2(y2, $3, I, m, G2, D) {
      var M2 = r.copy(), H = Ne(D || I, $3), j, te, p;
      if ((p = n.call(y2, new Xn("beforestart", {
        sourceEvent: I,
        target: g2,
        identifier: G2,
        active: a2,
        x: H[0],
        y: H[1],
        dx: 0,
        dy: 0,
        dispatch: M2
      }), m)) != null)
        return j = p.x - H[0] || 0, te = p.y - H[1] || 0, function R(E2, L2, U) {
          var W = H, P;
          switch (E2) {
            case "start":
              i[G2] = R, P = a2++;
              break;
            case "end":
              delete i[G2], --a2;
            case "drag":
              H = Ne(U || L2, $3), P = a2;
              break;
          }
          M2.call(E2, y2, new Xn(E2, {
            sourceEvent: L2,
            subject: p,
            target: g2,
            identifier: G2,
            active: P,
            x: H[0] + j,
            y: H[1] + te,
            dx: H[0] - W[0],
            dy: H[1] - W[1],
            dispatch: M2
          }), m);
        };
    }
    return g2.filter = function(y2) {
      return arguments.length ? (e4 = typeof y2 == "function" ? y2 : It(!!y2), g2) : e4;
    }, g2.container = function(y2) {
      return arguments.length ? (t = typeof y2 == "function" ? y2 : It(y2), g2) : t;
    }, g2.subject = function(y2) {
      return arguments.length ? (n = typeof y2 == "function" ? y2 : It(y2), g2) : n;
    }, g2.touchable = function(y2) {
      return arguments.length ? (o = typeof y2 == "function" ? y2 : It(!!y2), g2) : o;
    }, g2.on = function() {
      var y2 = r.on.apply(r, arguments);
      return y2 === r ? g2 : y2;
    }, g2.clickDistance = function(y2) {
      return arguments.length ? (h2 = (y2 = +y2) * y2, g2) : Math.sqrt(h2);
    }, g2;
  }
  function Ki(e4) {
    const t = de(), n = (0, vue_runtime_esm_bundler_exports.toRef)(t, "vueFlowRef"), o = (0, vue_runtime_esm_bundler_exports.toRef)(t, "snapToGrid"), i = (0, vue_runtime_esm_bundler_exports.toRef)(t, "snapGrid"), r = (0, vue_runtime_esm_bundler_exports.toRef)(t, "noDragClassName"), a2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "nodes"), s2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "nodeExtent"), l = (0, vue_runtime_esm_bundler_exports.toRef)(t, "viewport"), u2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "autoPanOnNodeDrag"), c = (0, vue_runtime_esm_bundler_exports.toRef)(t, "nodesDraggable"), h2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "panBy"), g2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "findNode"), w2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "multiSelectionActive"), f = (0, vue_runtime_esm_bundler_exports.toRef)(t, "nodesSelectionActive"), d = (0, vue_runtime_esm_bundler_exports.toRef)(t, "selectNodesOnDrag"), _ = (0, vue_runtime_esm_bundler_exports.toRef)(t, "removeSelectedElements"), x2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "addSelectedNodes"), N = (0, vue_runtime_esm_bundler_exports.toRef)(t, "updateNodePositions"), B2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "emits"), { onStart: y2, onDrag: $3, onStop: I, el: m, disabled: G2, id: D, selectable: M2 } = e4, H = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let j = (0, vue_runtime_esm_bundler_exports.ref)([]), te = (0, vue_runtime_esm_bundler_exports.ref)(), p = (0, vue_runtime_esm_bundler_exports.ref)(null), R = (0, vue_runtime_esm_bundler_exports.ref)({ x: void 0, y: void 0 }), E2 = (0, vue_runtime_esm_bundler_exports.ref)({ x: 0, y: 0 }), L2 = (0, vue_runtime_esm_bundler_exports.ref)(null), U = (0, vue_runtime_esm_bundler_exports.ref)(0), W = (0, vue_runtime_esm_bundler_exports.ref)(false), P = (0, vue_runtime_esm_bundler_exports.ref)({ x: 0, y: 0 });
    const K = Aa(), A2 = ({ x: Z, y: q }) => {
      R.value = { x: Z, y: q };
      let O = false;
      if (j.value = j.value.map((Y) => {
        const v = { x: Z - Y.distance.x, y: q - Y.distance.y };
        o.value && (v.x = i.value[0] * Math.round(v.x / i.value[0]), v.y = i.value[1] * Math.round(v.y / i.value[1]));
        const { computedPosition: b } = fo(Y, v, B2.value.error, s2.value, Y.parentNode ? g2.value(Y.parentNode) : void 0);
        return O = O || Y.position.x !== b.x || Y.position.y !== b.y, Y.position = b, Y;
      }), !!O && (N.value(j.value, true, true), H.value = true, L2.value)) {
        const [Y, v] = Sn({
          id: D,
          dragItems: j.value,
          findNode: g2.value
        });
        $3({ event: L2.value, node: Y, nodes: v });
      }
    }, J = () => {
      var _a3, _b;
      if (!p.value)
        return;
      const [Z, q] = Oi(E2.value, p.value);
      if (Z !== 0 || q !== 0) {
        const O = {
          x: ((_a3 = R.value.x) != null ? _a3 : 0) - Z / l.value.zoom,
          y: ((_b = R.value.y) != null ? _b : 0) - q / l.value.zoom
        };
        h2.value({ x: Z, y: q }, (Y) => {
          (Math.round(Y.x) !== Math.round(P.value.x) || Math.round(Y.y) !== Math.round(P.value.y)) && (A2(O), P.value = Y, R.value = O);
        });
      }
      U.value = requestAnimationFrame(J);
    };
    return (0, vue_runtime_esm_bundler_exports.watch)([() => se(G2), m], ([Z, q]) => {
      if (q) {
        const O = we(q);
        if (Z)
          O.on(".drag", null);
        else {
          const Y = g2.value(D);
          te.value = El().on("start", (v) => {
            var F;
            !d.value && !w2.value && Y && (Y.selected || _.value()), Y && se(M2) && d.value && Gn(Y, w2.value, x2.value, _.value, f, false, q);
            const b = K(v);
            if (R.value = b, j.value = Oa(a2.value, c.value, b, g2.value, D), j.value.length) {
              const [T, V] = Sn({
                id: D,
                dragItems: j.value,
                findNode: g2.value
              });
              y2({ event: v.sourceEvent, node: T, nodes: V });
            }
            p.value = ((F = n.value) == null ? void 0 : F.getBoundingClientRect()) || null, E2.value = ot(v.sourceEvent, p.value);
          }).on("drag", (v) => {
            const b = K(v);
            !W.value && u2.value && (W.value = true, J()), (R.value.x !== b.xSnapped || R.value.y !== b.ySnapped) && j.value.length && (L2.value = v.sourceEvent, E2.value = ot(v.sourceEvent, p.value), A2(b));
          }).on("end", (v) => {
            if (H.value = false, W.value = false, cancelAnimationFrame(U.value), j.value.length) {
              N.value(j.value, false, false);
              const [b, F] = Sn({
                id: D,
                dragItems: j.value,
                findNode: g2.value
              });
              I({ event: v.sourceEvent, node: b, nodes: F });
            }
          }).filter((v) => {
            const b = v.target;
            return !v.button && (!r.value || !Bo(b, `.${r.value}`, q) && (!(Y != null && Y.dragHandle) || Bo(b, Y.dragHandle, q)));
          }), O.call(te.value);
        }
      }
    }), H;
  }
  var Wi = "vue-flow__node-desc";
  var qi = "vue-flow__edge-desc";
  var Sl = "vue-flow__aria-live";
  var ji = ["Enter", " ", "Escape"];
  var rt = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 }
  };
  function Un(e4) {
    var i, r;
    const t = ((r = (i = e4.composedPath) == null ? void 0 : i.call(e4)) == null ? void 0 : r[0]) || e4.target, n = ze(t.hasAttribute) ? t.hasAttribute("contenteditable") : false, o = ze(t.closest) ? t.closest(".nokey") : null;
    return ["INPUT", "SELECT", "TEXTAREA"].includes(t == null ? void 0 : t.nodeName) || n || !!o;
  }
  function Nl(e4) {
    return e4.ctrlKey || e4.metaKey || e4.shiftKey;
  }
  function Cl(e4, t) {
    return (n) => e4.some((o) => {
      const i = o.split("+").map((r) => r.trim().toLowerCase());
      return i.length === 1 ? n.key === o : (t.add(n.key.toLowerCase()), i.every((r) => t.has(r)));
    });
  }
  var _t = (e4, t) => {
    const n = io(), o = (0, vue_runtime_esm_bundler_exports.ref)(se(e4) === true), i = (0, vue_runtime_esm_bundler_exports.ref)(false), r = (0, vue_runtime_esm_bundler_exports.ref)(/* @__PURE__ */ new Set());
    return (0, vue_runtime_esm_bundler_exports.watch)(o, () => {
      t == null || t(o.value);
    }), (0, vue_runtime_esm_bundler_exports.watchEffect)(() => {
      let a2 = se(e4);
      if (n && typeof n.addEventListener < "u" && oo(n, "blur", () => {
        o.value = false;
      }), Tr(a2)) {
        o.value = a2;
        return;
      }
      Array.isArray(a2) && (a2 = Cl(a2, r.value)), a2 && (So(a2, (s2) => {
        i.value = Nl(s2), !(!i.value && Un(s2)) && (s2.preventDefault(), o.value = true);
      }, { eventName: "keydown" }), So(a2, (s2) => {
        if (o.value) {
          if (!i.value && Un(s2))
            return;
          i.value = false, r.value.clear(), o.value = false;
        }
      }, { eventName: "keyup" }));
    }), o;
  };
  var Ml = (0, vue_runtime_esm_bundler_exports.defineComponent)({
    name: "Node",
    compatConfig: { MODE: 3 },
    props: ["name", "type", "id", "draggable", "selectable", "focusable", "connectable", "node", "resizeObserver"],
    setup(e4) {
      (0, vue_runtime_esm_bundler_exports.provide)(Ni, e4.id);
      const t = de(), n = (0, vue_runtime_esm_bundler_exports.toRef)(t, "id"), o = (0, vue_runtime_esm_bundler_exports.toRef)(t, "edges"), i = (0, vue_runtime_esm_bundler_exports.toRef)(t, "noPanClassName"), r = (0, vue_runtime_esm_bundler_exports.toRef)(t, "selectNodesOnDrag"), a2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "nodesSelectionActive"), s2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "multiSelectionActive"), l = (0, vue_runtime_esm_bundler_exports.toRef)(t, "emits"), u2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "findNode"), c = (0, vue_runtime_esm_bundler_exports.toRef)(t, "removeSelectedNodes"), h2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "addSelectedNodes"), g2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "updateNodeDimensions"), w2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "onUpdateNodeInternals"), f = (0, vue_runtime_esm_bundler_exports.toRef)(t, "getIntersectingNodes"), d = (0, vue_runtime_esm_bundler_exports.toRef)(t, "getNodeTypes"), _ = (0, vue_runtime_esm_bundler_exports.toRef)(t, "nodeExtent"), x2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "elevateNodesOnSelect"), N = (0, vue_runtime_esm_bundler_exports.toRef)(t, "disableKeyboardA11y"), B2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "ariaLiveMessage"), y2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "snapToGrid"), $3 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "snapGrid"), I = Pi(), m = yt(e4, "node"), G2 = (0, vue_runtime_esm_bundler_exports.computed)(() => u2.value(m.value.parentNode)), D = (0, vue_runtime_esm_bundler_exports.computed)(() => rn([m.value], o.value)), M2 = (0, vue_runtime_esm_bundler_exports.ref)();
      (0, vue_runtime_esm_bundler_exports.provide)(Ci, M2);
      const { emit: H, on: j } = Da(m.value, l.value), te = Ki({
        id: e4.id,
        el: M2,
        disabled: () => !e4.draggable,
        selectable: () => e4.selectable,
        onStart(O) {
          H.dragStart(__spreadProps(__spreadValues({}, O), { intersections: f.value(m.value) }));
        },
        onDrag(O) {
          H.drag(__spreadProps(__spreadValues({}, O), { intersections: f.value(m.value) }));
        },
        onStop(O) {
          H.dragStop(__spreadProps(__spreadValues({}, O), { intersections: f.value(m.value) }));
        }
      }), p = (0, vue_runtime_esm_bundler_exports.computed)(() => m.value.class instanceof Function ? m.value.class(m.value) : m.value.class), R = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        const O = (m.value.style instanceof Function ? m.value.style(m.value) : m.value.style) || {}, Y = m.value.width instanceof Function ? m.value.width(m.value) : m.value.width, v = m.value.height instanceof Function ? m.value.height(m.value) : m.value.height;
        return Y && (O.width = typeof Y == "string" ? Y : `${Y}px`), v && (O.height = typeof v == "string" ? v : `${v}px`), O;
      }), E2 = () => {
        var _a3, _b;
        return Number((_b = (_a3 = m.value.zIndex) != null ? _a3 : R.value.zIndex) != null ? _b : 0);
      };
      return w2.value((O) => {
        O.includes(e4.id) && U();
      }), (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        e4.resizeObserver.observe(M2.value);
      }), (0, vue_runtime_esm_bundler_exports.onBeforeUnmount)(() => {
        e4.resizeObserver.unobserve(M2.value);
      }), (0, vue_runtime_esm_bundler_exports.watch)([() => m.value.type, () => m.value.sourcePosition, () => m.value.targetPosition], () => {
        g2.value([{ id: e4.id, nodeElement: M2.value, forceUpdate: true }]);
      }, { flush: "pre" }), (0, vue_runtime_esm_bundler_exports.watch)([
        () => m.value.position.x,
        () => m.value.position.y,
        () => {
          var O;
          return (O = G2.value) == null ? void 0 : O.computedPosition.x;
        },
        () => {
          var O;
          return (O = G2.value) == null ? void 0 : O.computedPosition.y;
        },
        () => {
          var O;
          return (O = G2.value) == null ? void 0 : O.computedPosition.z;
        },
        () => E2(),
        () => m.value.selected,
        () => m.value.dimensions.height,
        () => m.value.dimensions.width,
        () => {
          var O;
          return (O = G2.value) == null ? void 0 : O.dimensions.height;
        },
        () => {
          var O;
          return (O = G2.value) == null ? void 0 : O.dimensions.width;
        }
      ], ([O, Y, v, b, F, T]) => {
        const V = {
          x: O,
          y: Y,
          z: T + (x2.value && m.value.selected ? 1e3 : 0)
        };
        Te(v) && Te(b) ? m.value.computedPosition = ha({ x: v, y: b, z: F }, V) : m.value.computedPosition = V;
      }, { flush: "pre", immediate: true }), (0, vue_runtime_esm_bundler_exports.watch)([() => m.value.extent, () => _.value], ([O, Y], [v, b]) => {
        (O !== v || Y !== b) && L2();
      }), m.value.extent === "parent" || typeof m.value.extent == "object" && "range" in m.value.extent && m.value.extent.range === "parent" ? pe(() => m.value.initialized).toBe(true).then(L2) : L2(), () => {
        var _a3;
        return (0, vue_runtime_esm_bundler_exports.h)("div", {
          ref: M2,
          "data-id": m.value.id,
          class: [
            "vue-flow__node",
            `vue-flow__node-${e4.type === false ? "default" : e4.name}`,
            {
              [i.value]: e4.draggable,
              dragging: te == null ? void 0 : te.value,
              selected: m.value.selected,
              selectable: e4.selectable
            },
            p.value
          ],
          style: __spreadValues({
            zIndex: (_a3 = m.value.computedPosition.z) != null ? _a3 : E2(),
            transform: `translate(${m.value.computedPosition.x}px,${m.value.computedPosition.y}px)`,
            pointerEvents: e4.selectable || e4.draggable ? "all" : "none",
            visibility: m.value.initialized ? "visible" : "hidden"
          }, R.value),
          tabIndex: e4.focusable ? 0 : void 0,
          role: e4.focusable ? "button" : void 0,
          "aria-describedby": N.value ? void 0 : `${Wi}-${n.value}`,
          "aria-label": m.value.ariaLabel,
          onMouseenter: W,
          onMousemove: P,
          onMouseleave: K,
          onContextmenu: A2,
          onClick: Z,
          onDblclick: J,
          onKeydown: q
        }, [
          (0, vue_runtime_esm_bundler_exports.h)(e4.type === false ? d.value.default : e4.type, {
            id: m.value.id,
            type: m.value.type,
            data: m.value.data,
            events: __spreadValues(__spreadValues({}, m.value.events), j),
            selected: !!m.value.selected,
            resizing: !!m.value.resizing,
            dragging: te.value,
            connectable: e4.connectable,
            position: m.value.position,
            dimensions: m.value.dimensions,
            isValidTargetPos: m.value.isValidTargetPos,
            isValidSourcePos: m.value.isValidSourcePos,
            parent: m.value.parentNode,
            zIndex: m.value.computedPosition.z,
            targetPosition: m.value.targetPosition,
            sourcePosition: m.value.sourcePosition,
            label: m.value.label,
            dragHandle: m.value.dragHandle,
            onUpdateNodeInternals: U
          })
        ]);
      };
      function L2() {
        const O = m.value.computedPosition;
        y2.value && (O.x = $3.value[0] * Math.round(O.x / $3.value[0]), O.y = $3.value[1] * Math.round(O.y / $3.value[1]));
        const { computedPosition: Y, position: v } = fo(m.value, O, l.value.error, _.value, G2.value);
        (m.value.computedPosition.x !== Y.x || m.value.computedPosition.y !== Y.y) && (m.value.computedPosition = __spreadValues(__spreadValues({}, m.value.computedPosition), Y)), (m.value.position.x !== v.x || m.value.position.y !== v.y) && (m.value.position = v);
      }
      function U() {
        M2.value && g2.value([{ id: e4.id, nodeElement: M2.value, forceUpdate: true }]);
      }
      function W(O) {
        te != null && te.value || H.mouseEnter({ event: O, node: m.value, connectedEdges: D.value });
      }
      function P(O) {
        te != null && te.value || H.mouseMove({ event: O, node: m.value, connectedEdges: D.value });
      }
      function K(O) {
        te != null && te.value || H.mouseLeave({ event: O, node: m.value, connectedEdges: D.value });
      }
      function A2(O) {
        return H.contextMenu({ event: O, node: m.value, connectedEdges: D.value });
      }
      function J(O) {
        return H.doubleClick({ event: O, node: m.value, connectedEdges: D.value });
      }
      function Z(O) {
        e4.selectable && (!r.value || !e4.draggable) && Gn(m.value, s2.value, h2.value, c.value, a2, false, M2.value), H.click({ event: O, node: m.value, connectedEdges: D.value });
      }
      function q(O) {
        var Y;
        if (!Un(O))
          if (ji.includes(O.key) && e4.selectable) {
            const v = O.key === "Escape";
            v && ((Y = M2.value) == null || Y.blur()), Gn(m.value, s2.value, h2.value, c.value, a2, v, M2.value);
          } else
            !N.value && e4.draggable && m.value.selected && rt[O.key] && (B2.value = `Moved selected node ${O.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~m.value.position.x}, y: ${~~m.value.position.y}`, I({
              x: rt[O.key].x,
              y: rt[O.key].y
            }, O.shiftKey));
      }
    }
  });
  var $l = Ml;
  var kl = ["transform"];
  var Ol = ["width", "height", "x", "y", "rx", "ry"];
  var Il = ["y"];
  var Tl = {
    name: "EdgeText",
    compatConfig: { MODE: 3 }
  };
  var Pl = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, Tl), {
    props: {
      x: null,
      y: null,
      label: null,
      labelStyle: { default: {} },
      labelShowBg: { type: Boolean, default: true },
      labelBgStyle: { default: {} },
      labelBgPadding: { default: [2, 4] },
      labelBgBorderRadius: { default: 2 }
    },
    setup(e4) {
      let t = (0, vue_runtime_esm_bundler_exports.ref)({ x: 0, y: 0, width: 0, height: 0 });
      const n = (0, vue_runtime_esm_bundler_exports.ref)(null), o = (0, vue_runtime_esm_bundler_exports.computed)(() => `translate(${e4.x - t.value.width / 2} ${e4.y - t.value.height / 2})`);
      (0, vue_runtime_esm_bundler_exports.onMounted)(i), (0, vue_runtime_esm_bundler_exports.watch)([() => e4.x, () => e4.y, n, () => e4.label], i);
      function i() {
        if (!n.value)
          return;
        const r = n.value.getBBox();
        (r.width !== t.value.width || r.height !== t.value.height) && (t.value = r);
      }
      return (r, a2) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("g", {
        transform: (0, vue_runtime_esm_bundler_exports.unref)(o),
        class: "vue-flow__edge-textwrapper"
      }, [
        e4.labelShowBg ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("rect", {
          key: 0,
          class: "vue-flow__edge-textbg",
          width: `${(0, vue_runtime_esm_bundler_exports.unref)(t).width + 2 * e4.labelBgPadding[0]}px`,
          height: `${(0, vue_runtime_esm_bundler_exports.unref)(t).height + 2 * e4.labelBgPadding[1]}px`,
          x: -e4.labelBgPadding[0],
          y: -e4.labelBgPadding[1],
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)(e4.labelBgStyle),
          rx: e4.labelBgBorderRadius,
          ry: e4.labelBgBorderRadius
        }, null, 12, Ol)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("text", (0, vue_runtime_esm_bundler_exports.mergeProps)(r.$attrs, {
          ref_key: "el",
          ref: n,
          class: "vue-flow__edge-text",
          y: (0, vue_runtime_esm_bundler_exports.unref)(t).height / 2,
          dy: "0.3em",
          style: e4.labelStyle
        }), [
          (0, vue_runtime_esm_bundler_exports.renderSlot)(r.$slots, "default", {}, () => [
            (0, vue_runtime_esm_bundler_exports.unref)(Pe)(e4.label) ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, { key: 1 }, [
              (0, vue_runtime_esm_bundler_exports.createTextVNode)((0, vue_runtime_esm_bundler_exports.toDisplayString)(e4.label), 1)
            ], 64)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.resolveDynamicComponent)(e4.label), { key: 0 }))
          ])
        ], 16, Il)
      ], 8, kl));
    }
  }));
  var fn = function({
    path: e4,
    label: t,
    labelX: n,
    labelY: o,
    labelBgBorderRadius: i,
    labelBgPadding: r,
    labelBgStyle: a2,
    labelShowBg: s2 = true,
    labelStyle: l,
    markerStart: u2,
    markerEnd: c,
    interactionWidth: h2 = 20
  }, { attrs: g2 }) {
    return [
      (0, vue_runtime_esm_bundler_exports.h)("path", {
        style: g2.style,
        class: ["vue-flow__edge-path", g2.class].join(" "),
        d: e4,
        "marker-end": c,
        "marker-start": u2
      }),
      h2 ? (0, vue_runtime_esm_bundler_exports.h)("path", {
        d: e4,
        fill: "none",
        "stroke-opacity": 0,
        "stroke-width": h2
      }) : null,
      t && Te(n) && Te(o) ? (0, vue_runtime_esm_bundler_exports.h)(Pl, {
        x: n,
        y: o,
        label: t,
        labelStyle: l,
        labelShowBg: s2,
        labelBgStyle: a2,
        labelBgPadding: r,
        labelBgBorderRadius: i
      }) : null
    ];
  };
  fn.props = [
    "path",
    "labelX",
    "labelY",
    "label",
    "labelBgBorderRadius",
    "labelBgPadding",
    "labelBgStyle",
    "labelShowBg",
    "labelStyle",
    "markerStart",
    "markerEnd",
    "interactionWidth"
  ];
  fn.inheritAttrs = false;
  fn.compatConfig = { MODE: 3 };
  var hn = fn;
  function Qi({
    sourceX: e4,
    sourceY: t,
    targetX: n,
    targetY: o
  }) {
    const i = Math.abs(n - e4) / 2, r = n < e4 ? n + i : n - i, a2 = Math.abs(o - t) / 2, s2 = o < t ? o + a2 : o - a2;
    return [r, s2, i, a2];
  }
  function Ji({
    sourceX: e4,
    sourceY: t,
    targetX: n,
    targetY: o,
    sourceControlX: i,
    sourceControlY: r,
    targetControlX: a2,
    targetControlY: s2
  }) {
    const l = e4 * 0.125 + i * 0.375 + a2 * 0.375 + n * 0.125, u2 = t * 0.125 + r * 0.375 + s2 * 0.375 + o * 0.125, c = Math.abs(l - e4), h2 = Math.abs(u2 - t);
    return [l, u2, c, h2];
  }
  function Tt(e4, t) {
    return e4 >= 0 ? 0.5 * e4 : t * 25 * Math.sqrt(-e4);
  }
  function Lo({ pos: e4, x1: t, y1: n, x2: o, y2: i, c: r }) {
    let a2, s2;
    switch (e4) {
      case Q.Left:
        a2 = t - Tt(t - o, r), s2 = n;
        break;
      case Q.Right:
        a2 = t + Tt(o - t, r), s2 = n;
        break;
      case Q.Top:
        a2 = t, s2 = n - Tt(n - i, r);
        break;
      case Q.Bottom:
        a2 = t, s2 = n + Tt(i - n, r);
        break;
    }
    return [a2, s2];
  }
  function Zn({
    sourceX: e4,
    sourceY: t,
    sourcePosition: n = Q.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: r = Q.Top,
    curvature: a2 = 0.25
  }) {
    const [s2, l] = Lo({
      pos: n,
      x1: e4,
      y1: t,
      x2: o,
      y2: i,
      c: a2
    }), [u2, c] = Lo({
      pos: r,
      x1: o,
      y1: i,
      x2: e4,
      y2: t,
      c: a2
    }), [h2, g2, w2, f] = Ji({
      sourceX: e4,
      sourceY: t,
      targetX: o,
      targetY: i,
      sourceControlX: s2,
      sourceControlY: l,
      targetControlX: u2,
      targetControlY: c
    });
    return [
      `M${e4},${t} C${s2},${l} ${u2},${c} ${o},${i}`,
      h2,
      g2,
      w2,
      f
    ];
  }
  var gn = function(_a3, { attrs: o }) {
    var _b = _a3, { sourcePosition: e4 = Q.Bottom, targetPosition: t = Q.Top } = _b, n = __objRest(_b, ["sourcePosition", "targetPosition"]);
    const [i, r, a2] = Zn(__spreadValues({
      sourcePosition: e4,
      targetPosition: t
    }, n));
    return (0, vue_runtime_esm_bundler_exports.h)(hn, __spreadValues(__spreadValues({
      path: i,
      labelX: r,
      labelY: a2
    }, n), o));
  };
  gn.props = [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "curvature",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ];
  gn.inheritAttrs = false;
  gn.compatConfig = { MODE: 3 };
  var Dl = gn;
  function Fo({ pos: e4, x1: t, y1: n, x2: o, y2: i }) {
    let r, a2;
    switch (e4) {
      case Q.Left:
      case Q.Right:
        r = 0.5 * (t + o), a2 = n;
        break;
      case Q.Top:
      case Q.Bottom:
        r = t, a2 = 0.5 * (n + i);
        break;
    }
    return [r, a2];
  }
  function er({
    sourceX: e4,
    sourceY: t,
    sourcePosition: n = Q.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: r = Q.Top
  }) {
    const [a2, s2] = Fo({
      pos: n,
      x1: e4,
      y1: t,
      x2: o,
      y2: i
    }), [l, u2] = Fo({
      pos: r,
      x1: o,
      y1: i,
      x2: e4,
      y2: t
    }), [c, h2, g2, w2] = Ji({
      sourceX: e4,
      sourceY: t,
      targetX: o,
      targetY: i,
      sourceControlX: a2,
      sourceControlY: s2,
      targetControlX: l,
      targetControlY: u2
    });
    return [
      `M${e4},${t} C${a2},${s2} ${l},${u2} ${o},${i}`,
      c,
      h2,
      g2,
      w2
    ];
  }
  var vn = function(_a3, { attrs: o }) {
    var _b = _a3, { sourcePosition: e4 = Q.Bottom, targetPosition: t = Q.Top } = _b, n = __objRest(_b, ["sourcePosition", "targetPosition"]);
    const [i, r, a2] = er(__spreadValues({
      sourcePosition: e4,
      targetPosition: t
    }, n));
    return (0, vue_runtime_esm_bundler_exports.h)(hn, __spreadValues(__spreadValues({
      path: i,
      labelX: r,
      labelY: a2
    }, n), o));
  };
  vn.props = [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ];
  vn.inheritAttrs = false;
  vn.compatConfig = { MODE: 3 };
  var Al = vn;
  var Go = {
    [Q.Left]: { x: -1, y: 0 },
    [Q.Right]: { x: 1, y: 0 },
    [Q.Top]: { x: 0, y: -1 },
    [Q.Bottom]: { x: 0, y: 1 }
  };
  function zl({
    source: e4,
    sourcePosition: t = Q.Bottom,
    target: n
  }) {
    return t === Q.Left || t === Q.Right ? e4.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e4.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
  }
  function Yo(e4, t) {
    return Math.sqrt((t.x - e4.x) ** 2 + (t.y - e4.y) ** 2);
  }
  function Bl({
    source: e4,
    sourcePosition: t = Q.Bottom,
    target: n,
    targetPosition: o = Q.Top,
    center: i,
    offset: r
  }) {
    const a2 = Go[t], s2 = Go[o], l = { x: e4.x + a2.x * r, y: e4.y + a2.y * r }, u2 = { x: n.x + s2.x * r, y: n.y + s2.y * r }, c = zl({
      source: l,
      sourcePosition: t,
      target: u2
    }), h2 = c.x !== 0 ? "x" : "y", g2 = c[h2];
    let w2, f, d;
    const [_, x2, N, B2] = Qi({
      sourceX: e4.x,
      sourceY: e4.y,
      targetX: n.x,
      targetY: n.y
    });
    if (a2[h2] * s2[h2] === -1) {
      f = i.x || _, d = i.y || x2;
      const $3 = [
        { x: f, y: l.y },
        { x: f, y: u2.y }
      ], I = [
        { x: l.x, y: d },
        { x: u2.x, y: d }
      ];
      a2[h2] === g2 ? w2 = h2 === "x" ? $3 : I : w2 = h2 === "x" ? I : $3;
    } else {
      const $3 = [{ x: l.x, y: u2.y }], I = [{ x: u2.x, y: l.y }];
      if (h2 === "x" ? w2 = a2.x === g2 ? I : $3 : w2 = a2.y === g2 ? $3 : I, t !== o) {
        const m = h2 === "x" ? "y" : "x", G2 = a2[h2] === s2[m], D = l[m] > u2[m], M2 = l[m] < u2[m];
        (a2[h2] === 1 && (!G2 && D || G2 && M2) || a2[h2] !== 1 && (!G2 && M2 || G2 && D)) && (w2 = h2 === "x" ? $3 : I);
      }
      f = w2[0].x, d = w2[0].y;
    }
    return [[e4, l, ...w2, u2, n], f, d, N, B2];
  }
  function Rl(e4, t, n, o) {
    const i = Math.min(Yo(e4, t) / 2, Yo(t, n) / 2, o), { x: r, y: a2 } = t;
    if (e4.x === r && r === n.x || e4.y === a2 && a2 === n.y)
      return `L${r} ${a2}`;
    if (e4.y === a2) {
      const u2 = e4.x < n.x ? -1 : 1, c = e4.y < n.y ? 1 : -1;
      return `L ${r + i * u2},${a2}Q ${r},${a2} ${r},${a2 + i * c}`;
    }
    const s2 = e4.x < n.x ? 1 : -1, l = e4.y < n.y ? -1 : 1;
    return `L ${r},${a2 + i * l}Q ${r},${a2} ${r + i * s2},${a2}`;
  }
  function Kn({
    sourceX: e4,
    sourceY: t,
    sourcePosition: n = Q.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: r = Q.Top,
    borderRadius: a2 = 5,
    centerX: s2,
    centerY: l,
    offset: u2 = 20
  }) {
    const [c, h2, g2, w2, f] = Bl({
      source: { x: e4, y: t },
      sourcePosition: n,
      target: { x: o, y: i },
      targetPosition: r,
      center: { x: s2, y: l },
      offset: u2
    });
    return [c.reduce((_, x2, N) => {
      let B2;
      return N > 0 && N < c.length - 1 ? B2 = Rl(c[N - 1], x2, c[N + 1], a2) : B2 = `${N === 0 ? "M" : "L"}${x2.x} ${x2.y}`, _ += B2, _;
    }, ""), h2, g2, w2, f];
  }
  var mn = function(_a3, { attrs: o }) {
    var _b = _a3, { sourcePosition: e4 = Q.Bottom, targetPosition: t = Q.Top } = _b, n = __objRest(_b, ["sourcePosition", "targetPosition"]);
    const [i, r, a2] = Kn(__spreadValues({
      sourcePosition: e4,
      targetPosition: t
    }, n));
    return (0, vue_runtime_esm_bundler_exports.h)(hn, __spreadValues(__spreadValues({
      path: i,
      labelX: r,
      labelY: a2
    }, n), o));
  };
  mn.props = [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "borderRadius",
    "markerEnd",
    "markerStart",
    "interactionWidth",
    "offset"
  ];
  mn.inheritAttrs = false;
  mn.compatConfig = { MODE: 3 };
  var tr = mn;
  var pn = function(e4, { attrs: t }) {
    return (0, vue_runtime_esm_bundler_exports.h)(tr, __spreadProps(__spreadValues(__spreadValues({}, e4), t), { borderRadius: 0 }));
  };
  pn.props = [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ];
  pn.inheritAttrs = false;
  pn.compatConfig = { MODE: 3 };
  var Vl = pn;
  function nr({
    sourceX: e4,
    sourceY: t,
    targetX: n,
    targetY: o
  }) {
    const [i, r, a2, s2] = Qi({
      sourceX: e4,
      sourceY: t,
      targetX: n,
      targetY: o
    });
    return [`M ${e4},${t}L ${n},${o}`, i, r, a2, s2];
  }
  var yn = function(e4, { attrs: t }) {
    const [n, o, i] = nr(e4);
    return (0, vue_runtime_esm_bundler_exports.h)(hn, __spreadValues(__spreadValues({
      path: n,
      labelX: o,
      labelY: i
    }, e4), t));
  };
  yn.props = [
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ];
  yn.inheritAttrs = false;
  yn.compatConfig = { MODE: 3 };
  var Hl = yn;
  function Ll(e4, t, n) {
    return n === Q.Left ? e4 - t : n === Q.Right ? e4 + t : e4;
  }
  function Fl(e4, t, n) {
    return n === Q.Top ? e4 - t : n === Q.Bottom ? e4 + t : e4;
  }
  var vo = function({
    radius: e4 = 10,
    centerX: t = 0,
    centerY: n = 0,
    position: o = Q.Top,
    type: i
  }) {
    return (0, vue_runtime_esm_bundler_exports.h)("circle", {
      class: `vue-flow__edgeupdater vue-flow__edgeupdater-${i}`,
      cx: Ll(t, e4, o),
      cy: Fl(n, e4, o),
      r: e4,
      stroke: "transparent",
      fill: "transparent"
    });
  };
  vo.props = ["radius", "centerX", "centerY", "position", "type"];
  vo.compatConfig = { MODE: 3 };
  var Xo = vo;
  function Gl() {
    return {
      doubleClick: X(),
      click: X(),
      mouseEnter: X(),
      mouseMove: X(),
      mouseLeave: X(),
      contextMenu: X(),
      updateStart: X(),
      update: X(),
      updateEnd: X()
    };
  }
  function Yl(e4, t) {
    const n = Gl();
    return n.doubleClick.on((o) => {
      var i, r;
      t.edgeDoubleClick(o), (r = (i = e4.events) == null ? void 0 : i.doubleClick) == null || r.call(i, o);
    }), n.click.on((o) => {
      var i, r;
      t.edgeClick(o), (r = (i = e4.events) == null ? void 0 : i.click) == null || r.call(i, o);
    }), n.mouseEnter.on((o) => {
      var i, r;
      t.edgeMouseEnter(o), (r = (i = e4.events) == null ? void 0 : i.mouseEnter) == null || r.call(i, o);
    }), n.mouseMove.on((o) => {
      var i, r;
      t.edgeMouseMove(o), (r = (i = e4.events) == null ? void 0 : i.mouseMove) == null || r.call(i, o);
    }), n.mouseLeave.on((o) => {
      var i, r;
      t.edgeMouseLeave(o), (r = (i = e4.events) == null ? void 0 : i.mouseLeave) == null || r.call(i, o);
    }), n.contextMenu.on((o) => {
      var i, r;
      t.edgeContextMenu(o), (r = (i = e4.events) == null ? void 0 : i.contextMenu) == null || r.call(i, o);
    }), n.updateStart.on((o) => {
      var i, r;
      t.edgeUpdateStart(o), (r = (i = e4.events) == null ? void 0 : i.updateStart) == null || r.call(i, o);
    }), n.update.on((o) => {
      var i, r;
      t.edgeUpdate(o), (r = (i = e4.events) == null ? void 0 : i.update) == null || r.call(i, o);
    }), n.updateEnd.on((o) => {
      var i, r;
      t.edgeUpdateEnd(o), (r = (i = e4.events) == null ? void 0 : i.updateEnd) == null || r.call(i, o);
    }), Object.entries(n).reduce((o, [i, r]) => (o.emit[i] = r.trigger, o.on[i] = r.on, o), { emit: {}, on: {} });
  }
  var Xl = (0, vue_runtime_esm_bundler_exports.defineComponent)({
    name: "Edge",
    compatConfig: { MODE: 3 },
    props: ["name", "type", "id", "updatable", "selectable", "focusable", "edge"],
    setup(e4) {
      const {
        id: t,
        addSelectedEdges: n,
        connectionMode: o,
        edgeUpdaterRadius: i,
        emits: r,
        nodesSelectionActive: a2,
        noPanClassName: s2,
        getEdgeTypes: l,
        removeSelectedEdges: u2,
        findEdge: c,
        findNode: h2,
        isValidConnection: g2
      } = de(), w2 = Yl(e4.edge, r), f = yt(e4, "edge");
      let d = (0, vue_runtime_esm_bundler_exports.ref)(false), _ = (0, vue_runtime_esm_bundler_exports.ref)(false);
      const x2 = (0, vue_runtime_esm_bundler_exports.ref)(""), N = (0, vue_runtime_esm_bundler_exports.ref)(null), B2 = (0, vue_runtime_esm_bundler_exports.ref)("source"), y2 = (0, vue_runtime_esm_bundler_exports.ref)();
      (0, vue_runtime_esm_bundler_exports.provide)(Mi, e4.id), (0, vue_runtime_esm_bundler_exports.provide)($i, y2);
      const $3 = (0, vue_runtime_esm_bundler_exports.computed)(() => f.value.class instanceof Function ? f.value.class(f.value) : f.value.class), I = (0, vue_runtime_esm_bundler_exports.computed)(() => f.value.style instanceof Function ? f.value.style(f.value) : f.value.style), { handlePointerDown: m } = Ii({
        nodeId: x2,
        handleId: N,
        type: B2,
        isValidConnection: g2.value,
        edgeUpdaterType: B2,
        onEdgeUpdate: M2,
        onEdgeUpdateEnd: H
      });
      return () => {
        const A2 = h2(f.value.source), J = h2(f.value.target);
        if (!A2 || !J || !f.value)
          return null;
        let Z;
        o.value === je.Strict ? Z = A2.handleBounds.source : Z = [...A2.handleBounds.source || [], ...A2.handleBounds.target || []];
        const q = Po(Z, f.value.sourceHandle);
        let O;
        o.value === je.Strict ? O = J.handleBounds.target : O = [...J.handleBounds.target || [], ...J.handleBounds.source || []];
        const Y = Po(O, f.value.targetHandle), v = q ? q.position : Q.Bottom, b = Y ? Y.position : Q.Top, { sourceX: F, sourceY: T, targetY: V, targetX: C2 } = ya(A2, q, v, J, Y, b);
        return f.value.sourceX = F, f.value.sourceY = T, f.value.targetX = C2, f.value.targetY = V, (0, vue_runtime_esm_bundler_exports.h)("g", {
          ref: y2,
          key: e4.id,
          "data-id": e4.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${e4.type === false ? "default" : e4.name}`,
            s2.value,
            $3.value,
            {
              updating: d.value,
              selected: f.value.selected,
              animated: f.value.animated,
              inactive: !e4.selectable
            }
          ],
          onClick: te,
          onContextmenu: p,
          onDblclick: R,
          onMouseenter: E2,
          onMousemove: L2,
          onMouseleave: U,
          onKeyDown: e4.focusable ? K : void 0,
          tabIndex: e4.focusable ? 0 : void 0,
          "aria-label": f.value.ariaLabel === null ? void 0 : f.value.ariaLabel || `Edge from ${f.value.source} to ${f.value.target}`,
          "aria-describedby": e4.focusable ? `${qi}-${t}` : void 0,
          role: e4.focusable ? "button" : void 0
        }, [
          _.value ? null : (0, vue_runtime_esm_bundler_exports.h)(e4.type === false ? l.value.default : e4.type, {
            id: e4.id,
            sourceNode: A2,
            targetNode: J,
            source: f.value.source,
            target: f.value.target,
            type: f.value.type,
            updatable: e4.updatable,
            selected: f.value.selected,
            animated: f.value.animated,
            label: f.value.label,
            labelStyle: f.value.labelStyle,
            labelShowBg: f.value.labelShowBg,
            labelBgStyle: f.value.labelBgStyle,
            labelBgPadding: f.value.labelBgPadding,
            labelBgBorderRadius: f.value.labelBgBorderRadius,
            data: f.value.data,
            events: __spreadValues(__spreadValues({}, f.value.events), w2.on),
            style: I.value,
            markerStart: `url(#${Xe(f.value.markerStart, t)})`,
            markerEnd: `url(#${Xe(f.value.markerEnd, t)})`,
            sourcePosition: v,
            targetPosition: b,
            sourceX: F,
            sourceY: T,
            targetX: C2,
            targetY: V,
            sourceHandleId: f.value.sourceHandle,
            targetHandleId: f.value.targetHandle,
            interactionWidth: f.value.interactionWidth
          }),
          [
            e4.updatable === "source" || e4.updatable === true ? [
              (0, vue_runtime_esm_bundler_exports.h)("g", {
                onMousedown: W,
                onMouseenter: G2,
                onMouseout: D
              }, (0, vue_runtime_esm_bundler_exports.h)(Xo, {
                position: v,
                centerX: F,
                centerY: T,
                radius: i.value,
                type: "source",
                "data-type": "source"
              }))
            ] : null,
            e4.updatable === "target" || e4.updatable === true ? [
              (0, vue_runtime_esm_bundler_exports.h)("g", {
                onMousedown: P,
                onMouseenter: G2,
                onMouseout: D
              }, (0, vue_runtime_esm_bundler_exports.h)(Xo, {
                position: b,
                centerX: C2,
                centerY: V,
                radius: i.value,
                type: "target",
                "data-type": "target"
              }))
            ] : null
          ]
        ]);
      };
      function G2() {
        d.value = true;
      }
      function D() {
        d.value = false;
      }
      function M2(A2, J) {
        w2.emit.update({ event: A2, edge: f.value, connection: J });
      }
      function H(A2) {
        w2.emit.updateEnd({ event: A2, edge: f.value }), _.value = false;
      }
      function j(A2, J) {
        var _a3;
        A2.button === 0 && (_.value = true, x2.value = J ? f.value.target : f.value.source, N.value = (_a3 = J ? f.value.targetHandle : f.value.sourceHandle) != null ? _a3 : "", B2.value = J ? "target" : "source", w2.emit.updateStart({ event: A2, edge: f.value }), m(A2));
      }
      function te(A2) {
        const J = { event: A2, edge: f.value };
        e4.selectable && (a2.value = false, n([f.value])), w2.emit.click(J);
      }
      function p(A2) {
        w2.emit.contextMenu({ event: A2, edge: f.value });
      }
      function R(A2) {
        w2.emit.doubleClick({ event: A2, edge: f.value });
      }
      function E2(A2) {
        w2.emit.mouseEnter({ event: A2, edge: f.value });
      }
      function L2(A2) {
        w2.emit.mouseMove({ event: A2, edge: f.value });
      }
      function U(A2) {
        w2.emit.mouseLeave({ event: A2, edge: f.value });
      }
      function W(A2) {
        j(A2, true);
      }
      function P(A2) {
        j(A2, false);
      }
      function K(A2) {
        var J;
        ji.includes(A2.key) && e4.selectable && (A2.key === "Escape" ? ((J = y2.value) == null || J.blur(), u2([c(e4.id)])) : n([c(e4.id)]));
      }
    }
  });
  var Ul = Xl;
  var Zl = {
    height: "0",
    width: "0"
  };
  var Kl = {
    name: "EdgeLabelRenderer",
    compatConfig: { MODE: 3 }
  };
  var Ad = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, Kl), {
    setup(e4) {
      const { viewportRef: t } = de(), n = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var o;
        return (o = t.value) == null ? void 0 : o.getElementsByClassName("vue-flow__edge-labels")[0];
      });
      return (o, i) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("svg", null, [
        ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("foreignObject", Zl, [
          ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)(vue_runtime_esm_bundler_exports.Teleport, {
            to: (0, vue_runtime_esm_bundler_exports.unref)(n),
            disabled: !(0, vue_runtime_esm_bundler_exports.unref)(n)
          }, [
            (0, vue_runtime_esm_bundler_exports.renderSlot)(o.$slots, "default")
          ], 8, ["to", "disabled"]))
        ]))
      ]));
    }
  }));
  var Wl = { class: "vue-flow__connection" };
  var ql = ["d", "marker-end", "marker-start"];
  var jl = {
    name: "ConnectionLine",
    compatConfig: { MODE: 3 }
  };
  var Ql = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, jl), {
    props: {
      sourceNode: null
    },
    setup(e4) {
      var D;
      const t = de(), n = (0, vue_runtime_esm_bundler_exports.toRef)(t, "connectionMode"), o = (0, vue_runtime_esm_bundler_exports.toRef)(t, "connectionStartHandle"), i = (0, vue_runtime_esm_bundler_exports.toRef)(t, "connectionEndHandle"), r = (0, vue_runtime_esm_bundler_exports.toRef)(t, "connectionPosition"), a2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "connectionLineType"), s2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "connectionLineStyle"), l = (0, vue_runtime_esm_bundler_exports.toRef)(t, "connectionLineOptions"), u2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "connectionStatus"), c = (0, vue_runtime_esm_bundler_exports.toRef)(t, "viewport"), h2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "findNode"), g2 = {
        [Q.Left]: Q.Right,
        [Q.Right]: Q.Left,
        [Q.Top]: Q.Bottom,
        [Q.Bottom]: Q.Top
      }, w2 = (D = (0, vue_runtime_esm_bundler_exports.inject)(an)) == null ? void 0 : D["connection-line"], f = (0, vue_runtime_esm_bundler_exports.computed)(() => o.value.handleId), d = (0, vue_runtime_esm_bundler_exports.computed)(() => o.value.type), _ = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var M2;
        return ((M2 = i.value) == null ? void 0 : M2.handleId) && h2.value(i.value.nodeId) || null;
      }), x2 = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var _a3;
        var M2, H;
        return (n.value === je.Strict ? (M2 = e4.sourceNode.handleBounds[d.value]) == null ? void 0 : M2.find((j) => j.id === f.value) : [...e4.sourceNode.handleBounds.source || [], ...e4.sourceNode.handleBounds.target || []].find((j) => j.id === f.value)) || ((H = e4.sourceNode.handleBounds[(_a3 = d.value) != null ? _a3 : "source"]) == null ? void 0 : H[0]);
      }), N = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var _a3;
        var M2, H, j;
        return _.value && ((M2 = i.value) == null ? void 0 : M2.handleId) && ((n.value === je.Strict ? (H = _.value.handleBounds[d.value === "source" ? "target" : "source"]) == null ? void 0 : H.find((te) => {
          var p;
          return te.id === ((p = i.value) == null ? void 0 : p.handleId);
        }) : [..._.value.handleBounds.source || [], ..._.value.handleBounds.target || []].find((te) => {
          var p;
          return te.id === ((p = i.value) == null ? void 0 : p.handleId);
        })) || ((j = _.value.handleBounds[(_a3 = d.value) != null ? _a3 : "target"]) == null ? void 0 : j[0])) || null;
      }), B2 = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var M2;
        return (M2 = x2.value) == null ? void 0 : M2.position;
      }), y2 = (0, vue_runtime_esm_bundler_exports.computed)(() => x2.value ? Ut(B2.value || Q.Top, __spreadValues(__spreadValues({}, e4.sourceNode.dimensions), e4.sourceNode.computedPosition), x2.value) : {
        x: e4.sourceNode.dimensions.width / 2,
        y: e4.sourceNode.dimensions.height / 2
      }), $3 = (0, vue_runtime_esm_bundler_exports.computed)(() => B2.value ? g2[B2.value] : void 0), I = (0, vue_runtime_esm_bundler_exports.computed)(() => (r.value.x - c.value.x) / c.value.zoom), m = (0, vue_runtime_esm_bundler_exports.computed)(() => (r.value.y - c.value.y) / c.value.zoom), G2 = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var _a3;
        let M2;
        const H = {
          sourceX: y2.value.x,
          sourceY: y2.value.y,
          sourcePosition: B2.value,
          targetX: I.value,
          targetY: m.value,
          targetPosition: $3.value
        };
        switch ((_a3 = a2.value) != null ? _a3 : l.value.type) {
          case Ye.Bezier:
            [M2] = Zn(H);
            break;
          case Ye.Step:
            [M2] = Kn(__spreadProps(__spreadValues({}, H), {
              borderRadius: 0
            }));
            break;
          case Ye.SmoothStep:
            [M2] = Kn(H);
            break;
          case Ye.SimpleBezier:
            [M2] = er(H);
            break;
          case Ye.Straight:
            [M2] = nr(H);
            break;
          default:
            [M2] = Zn(H);
            break;
        }
        return M2;
      });
      return (M2, H) => {
        var j;
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("g", Wl, [
          (0, vue_runtime_esm_bundler_exports.unref)(w2) ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.resolveDynamicComponent)((0, vue_runtime_esm_bundler_exports.unref)(w2)), (0, vue_runtime_esm_bundler_exports.normalizeProps)((0, vue_runtime_esm_bundler_exports.mergeProps)({ key: 0 }, {
            sourceX: (0, vue_runtime_esm_bundler_exports.unref)(y2).x,
            sourceY: (0, vue_runtime_esm_bundler_exports.unref)(y2).y,
            sourcePosition: (j = (0, vue_runtime_esm_bundler_exports.unref)(x2)) == null ? void 0 : j.position,
            targetX: (0, vue_runtime_esm_bundler_exports.unref)(I),
            targetY: (0, vue_runtime_esm_bundler_exports.unref)(m),
            targetPosition: (0, vue_runtime_esm_bundler_exports.unref)($3),
            sourceNode: e4.sourceNode,
            sourceHandle: (0, vue_runtime_esm_bundler_exports.unref)(x2),
            targetNode: (0, vue_runtime_esm_bundler_exports.unref)(_),
            targetHandle: (0, vue_runtime_esm_bundler_exports.unref)(N),
            markerEnd: `url(#${(0, vue_runtime_esm_bundler_exports.unref)(Xe)((0, vue_runtime_esm_bundler_exports.unref)(l).markerEnd)})`,
            markerStart: `url(#${(0, vue_runtime_esm_bundler_exports.unref)(Xe)((0, vue_runtime_esm_bundler_exports.unref)(l).markerStart)})`,
            connectionStatus: (0, vue_runtime_esm_bundler_exports.unref)(u2)
          })), null, 16)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("path", {
            key: 1,
            d: (0, vue_runtime_esm_bundler_exports.unref)(G2),
            class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["vue-flow__connection-path", [(0, vue_runtime_esm_bundler_exports.unref)(l).class, (0, vue_runtime_esm_bundler_exports.unref)(u2)]]),
            style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)((0, vue_runtime_esm_bundler_exports.unref)(s2) || (0, vue_runtime_esm_bundler_exports.unref)(l).style || {}),
            "marker-end": `url(#${(0, vue_runtime_esm_bundler_exports.unref)(Xe)((0, vue_runtime_esm_bundler_exports.unref)(l).markerEnd)})`,
            "marker-start": `url(#${(0, vue_runtime_esm_bundler_exports.unref)(Xe)((0, vue_runtime_esm_bundler_exports.unref)(l).markerStart)})`
          }, null, 14, ql))
        ]);
      };
    }
  }));
  var Jl = ["tabIndex"];
  var eu = {
    name: "NodesSelection",
    compatConfig: { MODE: 3 }
  };
  var tu = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, eu), {
    setup(e4) {
      const t = de(), n = (0, vue_runtime_esm_bundler_exports.toRef)(t, "emits"), o = (0, vue_runtime_esm_bundler_exports.toRef)(t, "viewport"), i = (0, vue_runtime_esm_bundler_exports.toRef)(t, "getSelectedNodes"), r = (0, vue_runtime_esm_bundler_exports.toRef)(t, "noPanClassName"), a2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "disableKeyboardA11y"), s2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "userSelectionActive"), l = Pi(), u2 = (0, vue_runtime_esm_bundler_exports.ref)(), c = Ki({
        el: u2,
        onStart(d) {
          n.value.selectionDragStart(d);
        },
        onDrag(d) {
          n.value.selectionDrag(d);
        },
        onStop(d) {
          n.value.selectionDragStop(d);
        }
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        var d;
        a2.value || (d = u2.value) == null || d.focus({ preventScroll: true });
      });
      const h2 = (0, vue_runtime_esm_bundler_exports.computed)(() => lo(i.value)), g2 = (0, vue_runtime_esm_bundler_exports.computed)(() => ({
        width: `${h2.value.width}px`,
        height: `${h2.value.height}px`,
        top: `${h2.value.y}px`,
        left: `${h2.value.x}px`
      }));
      function w2(d) {
        n.value.selectionContextMenu({ event: d, nodes: i.value });
      }
      function f(d) {
        a2.value || rt[d.key] && l({
          x: rt[d.key].x,
          y: rt[d.key].y
        }, d.shiftKey);
      }
      return (d, _) => !(0, vue_runtime_esm_bundler_exports.unref)(s2) && (0, vue_runtime_esm_bundler_exports.unref)(h2).width && (0, vue_runtime_esm_bundler_exports.unref)(h2).height ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["vue-flow__nodesselection vue-flow__container", (0, vue_runtime_esm_bundler_exports.unref)(r)]),
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ transform: `translate(${(0, vue_runtime_esm_bundler_exports.unref)(o).x}px,${(0, vue_runtime_esm_bundler_exports.unref)(o).y}px) scale(${(0, vue_runtime_esm_bundler_exports.unref)(o).zoom})` })
      }, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
          ref_key: "el",
          ref: u2,
          class: (0, vue_runtime_esm_bundler_exports.normalizeClass)([{ dragging: (0, vue_runtime_esm_bundler_exports.unref)(c) }, "vue-flow__nodesselection-rect"]),
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)((0, vue_runtime_esm_bundler_exports.unref)(g2)),
          tabIndex: (0, vue_runtime_esm_bundler_exports.unref)(a2) ? void 0 : -1,
          onContextmenu: w2,
          onKeydown: f
        }, null, 46, Jl)
      ], 6)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true);
    }
  }));
  var nu = {
    name: "UserSelection",
    compatConfig: { MODE: 3 }
  };
  var ou = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, nu), {
    setup(e4) {
      const { userSelectionRect: t } = de();
      return (n, o) => {
        var i, r, a2, s2;
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          class: "vue-flow__selection vue-flow__container",
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
            width: `${(i = (0, vue_runtime_esm_bundler_exports.unref)(t)) == null ? void 0 : i.width}px`,
            height: `${(r = (0, vue_runtime_esm_bundler_exports.unref)(t)) == null ? void 0 : r.height}px`,
            transform: `translate(${(a2 = (0, vue_runtime_esm_bundler_exports.unref)(t)) == null ? void 0 : a2.x}px, ${(s2 = (0, vue_runtime_esm_bundler_exports.unref)(t)) == null ? void 0 : s2.y}px)`
          })
        }, null, 4);
      };
    }
  }));
  var iu = {
    input: $a,
    default: Ma,
    output: ka
  };
  var ru = {
    default: Dl,
    straight: Hl,
    step: Vl,
    smoothstep: tr,
    simplebezier: Al
  };
  function au() {
    return {
      vueFlowRef: null,
      viewportRef: null,
      nodes: [],
      edges: [],
      nodeTypes: {},
      edgeTypes: {},
      initialized: false,
      dimensions: {
        width: 0,
        height: 0
      },
      viewport: { x: 0, y: 0, zoom: 1 },
      d3Zoom: null,
      d3Selection: null,
      d3ZoomHandler: null,
      minZoom: 0.5,
      maxZoom: 2,
      translateExtent: [
        [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
        [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
      ],
      nodeExtent: [
        [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
        [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
      ],
      selectionMode: uo.Full,
      paneDragging: false,
      preventScrolling: true,
      zoomOnScroll: true,
      zoomOnPinch: true,
      zoomOnDoubleClick: true,
      panOnScroll: false,
      panOnScrollSpeed: 0.5,
      panOnScrollMode: Xt.Free,
      panOnDrag: true,
      edgeUpdaterRadius: 10,
      onlyRenderVisibleElements: false,
      defaultViewport: { x: 0, y: 0, zoom: 1 },
      nodesSelectionActive: false,
      userSelectionActive: false,
      userSelectionRect: null,
      defaultMarkerColor: "#b1b1b7",
      connectionLineStyle: {},
      connectionLineType: null,
      connectionLineOptions: {
        type: Ye.Bezier,
        style: {}
      },
      connectionMode: je.Loose,
      connectionStartHandle: null,
      connectionEndHandle: null,
      connectionClickStartHandle: null,
      connectionPosition: { x: NaN, y: NaN },
      connectionRadius: 20,
      connectOnClick: true,
      connectionStatus: null,
      isValidConnection: null,
      snapGrid: [15, 15],
      snapToGrid: false,
      edgesUpdatable: false,
      edgesFocusable: true,
      nodesFocusable: true,
      nodesConnectable: true,
      nodesDraggable: true,
      elementsSelectable: true,
      selectNodesOnDrag: true,
      multiSelectionActive: false,
      selectionKeyCode: "Shift",
      multiSelectionKeyCode: "Meta",
      zoomActivationKeyCode: "Meta",
      deleteKeyCode: "Backspace",
      panActivationKeyCode: "Space",
      hooks: sa(),
      applyDefault: true,
      autoConnect: false,
      fitViewOnInit: false,
      noDragClassName: "nodrag",
      noWheelClassName: "nowheel",
      noPanClassName: "nopan",
      defaultEdgeOptions: void 0,
      elevateEdgesOnSelect: false,
      elevateNodesOnSelect: true,
      autoPanOnNodeDrag: true,
      autoPanOnConnect: true,
      disableKeyboardA11y: false,
      ariaLiveMessage: "",
      __experimentalFeatures: {
        nestedFlow: false
      }
    };
  }
  function or(e4) {
    const t = au();
    return e4 && Object.keys(e4).forEach((n) => {
      const o = e4[n];
      ue(o) && (t[n] = o);
    }), t;
  }
  function su(e4, t, n) {
    const o = (0, vue_runtime_esm_bundler_exports.computed)(() => (d) => e4.nodes && !t.value.length ? e4.nodes.find((_) => _.id === d) : e4.nodes[t.value.indexOf(d)]), i = (0, vue_runtime_esm_bundler_exports.computed)(() => (d) => e4.edges && !n.value.length ? e4.edges.find((_) => _.id === d) : e4.edges[n.value.indexOf(d)]), r = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      var x2;
      const d = __spreadValues(__spreadValues({}, ru), e4.edgeTypes), _ = Object.keys(d);
      return (x2 = e4.edges) == null || x2.forEach((N) => N.type && !_.includes(N.type) && (d[N.type] = N.type)), d;
    }), a2 = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      var x2;
      const d = __spreadValues(__spreadValues({}, iu), e4.nodeTypes), _ = Object.keys(d);
      return (x2 = e4.nodes) == null || x2.forEach((N) => N.type && !_.includes(N.type) && (d[N.type] = N.type)), d;
    }), s2 = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      const d = e4.nodes.filter((_) => !_.hidden);
      return e4.onlyRenderVisibleElements ? d && Ei(d, {
        x: 0,
        y: 0,
        width: e4.dimensions.width,
        height: e4.dimensions.height
      }, e4.viewport, true) : d != null ? d : [];
    }), l = (d, _, x2) => {
      if (_ = _ != null ? _ : o.value(d.source), x2 = x2 != null ? x2 : o.value(d.target), !_ || !x2) {
        e4.hooks.error.trigger(new ve(he.EDGE_ORPHANED, d.id));
        return;
      }
      return !d.hidden && !x2.hidden && !_.hidden;
    }, u2 = (0, vue_runtime_esm_bundler_exports.computed)(() => e4.onlyRenderVisibleElements ? e4.edges.filter((d) => {
      const _ = o.value(d.source), x2 = o.value(d.target);
      return l(d, _, x2) && xa({
        sourcePos: _.computedPosition || { x: 0, y: 0 },
        targetPos: x2.computedPosition || { x: 0, y: 0 },
        sourceWidth: _.dimensions.width,
        sourceHeight: _.dimensions.height,
        targetWidth: x2.dimensions.width,
        targetHeight: x2.dimensions.height,
        width: e4.dimensions.width,
        height: e4.dimensions.height,
        viewport: e4.viewport
      });
    }) : e4.edges.filter((d) => l(d))), c = (0, vue_runtime_esm_bundler_exports.computed)(() => [...s2.value, ...u2.value]), h2 = (0, vue_runtime_esm_bundler_exports.computed)(() => e4.nodes.filter((d) => d.selected)), g2 = (0, vue_runtime_esm_bundler_exports.computed)(() => e4.edges.filter((d) => d.selected)), w2 = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      var _a3, _b;
      return [
        ...(_a3 = h2.value) != null ? _a3 : [],
        ...(_b = g2.value) != null ? _b : []
      ];
    }), f = (0, vue_runtime_esm_bundler_exports.computed)(() => s2.value.filter((d) => d.initialized && d.handleBounds !== void 0));
    return {
      getNode: o,
      getEdge: i,
      getElements: c,
      getEdgeTypes: r,
      getNodeTypes: a2,
      getEdges: u2,
      getNodes: s2,
      getSelectedElements: w2,
      getSelectedNodes: h2,
      getSelectedEdges: g2,
      getNodesInitialized: f
    };
  }
  function mo(e4, t, n) {
    e4.prototype = t.prototype = n, n.constructor = e4;
  }
  function ir(e4, t) {
    var n = Object.create(e4.prototype);
    for (var o in t)
      n[o] = t[o];
    return n;
  }
  function kt() {
  }
  var Et = 0.7;
  var Wt = 1 / Et;
  var at = "\\s*([+-]?\\d+)\\s*";
  var St = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var Me = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var lu = /^#([0-9a-f]{3,8})$/;
  var uu = new RegExp(`^rgb\\(${at},${at},${at}\\)$`);
  var cu = new RegExp(`^rgb\\(${Me},${Me},${Me}\\)$`);
  var du = new RegExp(`^rgba\\(${at},${at},${at},${St}\\)$`);
  var fu = new RegExp(`^rgba\\(${Me},${Me},${Me},${St}\\)$`);
  var hu = new RegExp(`^hsl\\(${St},${Me},${Me}\\)$`);
  var gu = new RegExp(`^hsla\\(${St},${Me},${Me},${St}\\)$`);
  var Uo = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  mo(kt, Nt, {
    copy(e4) {
      return Object.assign(new this.constructor(), this, e4);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: Zo,
    formatHex: Zo,
    formatHex8: vu,
    formatHsl: mu,
    formatRgb: Ko,
    toString: Ko
  });
  function Zo() {
    return this.rgb().formatHex();
  }
  function vu() {
    return this.rgb().formatHex8();
  }
  function mu() {
    return rr(this).formatHsl();
  }
  function Ko() {
    return this.rgb().formatRgb();
  }
  function Nt(e4) {
    var t, n;
    return e4 = (e4 + "").trim().toLowerCase(), (t = lu.exec(e4)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Wo(t) : n === 3 ? new me(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Pt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Pt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = uu.exec(e4)) ? new me(t[1], t[2], t[3], 1) : (t = cu.exec(e4)) ? new me(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = du.exec(e4)) ? Pt(t[1], t[2], t[3], t[4]) : (t = fu.exec(e4)) ? Pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = hu.exec(e4)) ? Qo(t[1], t[2] / 100, t[3] / 100, 1) : (t = gu.exec(e4)) ? Qo(t[1], t[2] / 100, t[3] / 100, t[4]) : Uo.hasOwnProperty(e4) ? Wo(Uo[e4]) : e4 === "transparent" ? new me(NaN, NaN, NaN, 0) : null;
  }
  function Wo(e4) {
    return new me(e4 >> 16 & 255, e4 >> 8 & 255, e4 & 255, 1);
  }
  function Pt(e4, t, n, o) {
    return o <= 0 && (e4 = t = n = NaN), new me(e4, t, n, o);
  }
  function pu(e4) {
    return e4 instanceof kt || (e4 = Nt(e4)), e4 ? (e4 = e4.rgb(), new me(e4.r, e4.g, e4.b, e4.opacity)) : new me();
  }
  function Wn(e4, t, n, o) {
    return arguments.length === 1 ? pu(e4) : new me(e4, t, n, o != null ? o : 1);
  }
  function me(e4, t, n, o) {
    this.r = +e4, this.g = +t, this.b = +n, this.opacity = +o;
  }
  mo(me, Wn, ir(kt, {
    brighter(e4) {
      return e4 = e4 == null ? Wt : Math.pow(Wt, e4), new me(this.r * e4, this.g * e4, this.b * e4, this.opacity);
    },
    darker(e4) {
      return e4 = e4 == null ? Et : Math.pow(Et, e4), new me(this.r * e4, this.g * e4, this.b * e4, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new me(Ke(this.r), Ke(this.g), Ke(this.b), qt(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: qo,
    formatHex: qo,
    formatHex8: yu,
    formatRgb: jo,
    toString: jo
  }));
  function qo() {
    return `#${Ue(this.r)}${Ue(this.g)}${Ue(this.b)}`;
  }
  function yu() {
    return `#${Ue(this.r)}${Ue(this.g)}${Ue(this.b)}${Ue((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function jo() {
    const e4 = qt(this.opacity);
    return `${e4 === 1 ? "rgb(" : "rgba("}${Ke(this.r)}, ${Ke(this.g)}, ${Ke(this.b)}${e4 === 1 ? ")" : `, ${e4})`}`;
  }
  function qt(e4) {
    return isNaN(e4) ? 1 : Math.max(0, Math.min(1, e4));
  }
  function Ke(e4) {
    return Math.max(0, Math.min(255, Math.round(e4) || 0));
  }
  function Ue(e4) {
    return e4 = Ke(e4), (e4 < 16 ? "0" : "") + e4.toString(16);
  }
  function Qo(e4, t, n, o) {
    return o <= 0 ? e4 = t = n = NaN : n <= 0 || n >= 1 ? e4 = t = NaN : t <= 0 && (e4 = NaN), new be(e4, t, n, o);
  }
  function rr(e4) {
    if (e4 instanceof be)
      return new be(e4.h, e4.s, e4.l, e4.opacity);
    if (e4 instanceof kt || (e4 = Nt(e4)), !e4)
      return new be();
    if (e4 instanceof be)
      return e4;
    e4 = e4.rgb();
    var t = e4.r / 255, n = e4.g / 255, o = e4.b / 255, i = Math.min(t, n, o), r = Math.max(t, n, o), a2 = NaN, s2 = r - i, l = (r + i) / 2;
    return s2 ? (t === r ? a2 = (n - o) / s2 + (n < o) * 6 : n === r ? a2 = (o - t) / s2 + 2 : a2 = (t - n) / s2 + 4, s2 /= l < 0.5 ? r + i : 2 - r - i, a2 *= 60) : s2 = l > 0 && l < 1 ? 0 : a2, new be(a2, s2, l, e4.opacity);
  }
  function xu(e4, t, n, o) {
    return arguments.length === 1 ? rr(e4) : new be(e4, t, n, o != null ? o : 1);
  }
  function be(e4, t, n, o) {
    this.h = +e4, this.s = +t, this.l = +n, this.opacity = +o;
  }
  mo(be, xu, ir(kt, {
    brighter(e4) {
      return e4 = e4 == null ? Wt : Math.pow(Wt, e4), new be(this.h, this.s, this.l * e4, this.opacity);
    },
    darker(e4) {
      return e4 = e4 == null ? Et : Math.pow(Et, e4), new be(this.h, this.s, this.l * e4, this.opacity);
    },
    rgb() {
      var e4 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e4) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - o;
      return new me(Cn(e4 >= 240 ? e4 - 240 : e4 + 120, i, o), Cn(e4, i, o), Cn(e4 < 120 ? e4 + 240 : e4 - 120, i, o), this.opacity);
    },
    clamp() {
      return new be(Jo(this.h), Dt(this.s), Dt(this.l), qt(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl() {
      const e4 = qt(this.opacity);
      return `${e4 === 1 ? "hsl(" : "hsla("}${Jo(this.h)}, ${Dt(this.s) * 100}%, ${Dt(this.l) * 100}%${e4 === 1 ? ")" : `, ${e4})`}`;
    }
  }));
  function Jo(e4) {
    return e4 = (e4 || 0) % 360, e4 < 0 ? e4 + 360 : e4;
  }
  function Dt(e4) {
    return Math.max(0, Math.min(1, e4 || 0));
  }
  function Cn(e4, t, n) {
    return (e4 < 60 ? t + (n - t) * e4 / 60 : e4 < 180 ? n : e4 < 240 ? t + (n - t) * (240 - e4) / 60 : t) * 255;
  }
  var ar = (e4) => () => e4;
  function _u(e4, t) {
    return function(n) {
      return e4 + n * t;
    };
  }
  function wu(e4, t, n) {
    return e4 = Math.pow(e4, n), t = Math.pow(t, n) - e4, n = 1 / n, function(o) {
      return Math.pow(e4 + o * t, n);
    };
  }
  function bu(e4) {
    return (e4 = +e4) == 1 ? sr : function(t, n) {
      return n - t ? wu(t, n, e4) : ar(isNaN(t) ? n : t);
    };
  }
  function sr(e4, t) {
    var n = t - e4;
    return n ? _u(e4, n) : ar(isNaN(e4) ? t : e4);
  }
  var ei = function e(t) {
    var n = bu(t);
    function o(i, r) {
      var a2 = n((i = Wn(i)).r, (r = Wn(r)).r), s2 = n(i.g, r.g), l = n(i.b, r.b), u2 = sr(i.opacity, r.opacity);
      return function(c) {
        return i.r = a2(c), i.g = s2(c), i.b = l(c), i.opacity = u2(c), i + "";
      };
    }
    return o.gamma = e, o;
  }(1);
  function Re(e4, t) {
    return e4 = +e4, t = +t, function(n) {
      return e4 * (1 - n) + t * n;
    };
  }
  var qn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var Mn = new RegExp(qn.source, "g");
  function Eu(e4) {
    return function() {
      return e4;
    };
  }
  function Su(e4) {
    return function(t) {
      return e4(t) + "";
    };
  }
  function Nu(e4, t) {
    var n = qn.lastIndex = Mn.lastIndex = 0, o, i, r, a2 = -1, s2 = [], l = [];
    for (e4 = e4 + "", t = t + ""; (o = qn.exec(e4)) && (i = Mn.exec(t)); )
      (r = i.index) > n && (r = t.slice(n, r), s2[a2] ? s2[a2] += r : s2[++a2] = r), (o = o[0]) === (i = i[0]) ? s2[a2] ? s2[a2] += i : s2[++a2] = i : (s2[++a2] = null, l.push({ i: a2, x: Re(o, i) })), n = Mn.lastIndex;
    return n < t.length && (r = t.slice(n), s2[a2] ? s2[a2] += r : s2[++a2] = r), s2.length < 2 ? l[0] ? Su(l[0].x) : Eu(t) : (t = l.length, function(u2) {
      for (var c = 0, h2; c < t; ++c)
        s2[(h2 = l[c]).i] = h2.x(u2);
      return s2.join("");
    });
  }
  var ti = 180 / Math.PI;
  var jn = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function lr(e4, t, n, o, i, r) {
    var a2, s2, l;
    return (a2 = Math.sqrt(e4 * e4 + t * t)) && (e4 /= a2, t /= a2), (l = e4 * n + t * o) && (n -= e4 * l, o -= t * l), (s2 = Math.sqrt(n * n + o * o)) && (n /= s2, o /= s2, l /= s2), e4 * o < t * n && (e4 = -e4, t = -t, l = -l, a2 = -a2), {
      translateX: i,
      translateY: r,
      rotate: Math.atan2(t, e4) * ti,
      skewX: Math.atan(l) * ti,
      scaleX: a2,
      scaleY: s2
    };
  }
  var At;
  function Cu(e4) {
    const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e4 + "");
    return t.isIdentity ? jn : lr(t.a, t.b, t.c, t.d, t.e, t.f);
  }
  function Mu(e4) {
    return e4 == null || (At || (At = document.createElementNS("http://www.w3.org/2000/svg", "g")), At.setAttribute("transform", e4), !(e4 = At.transform.baseVal.consolidate())) ? jn : (e4 = e4.matrix, lr(e4.a, e4.b, e4.c, e4.d, e4.e, e4.f));
  }
  function ur(e4, t, n, o) {
    function i(u2) {
      return u2.length ? u2.pop() + " " : "";
    }
    function r(u2, c, h2, g2, w2, f) {
      if (u2 !== h2 || c !== g2) {
        var d = w2.push("translate(", null, t, null, n);
        f.push({ i: d - 4, x: Re(u2, h2) }, { i: d - 2, x: Re(c, g2) });
      } else
        (h2 || g2) && w2.push("translate(" + h2 + t + g2 + n);
    }
    function a2(u2, c, h2, g2) {
      u2 !== c ? (u2 - c > 180 ? c += 360 : c - u2 > 180 && (u2 += 360), g2.push({ i: h2.push(i(h2) + "rotate(", null, o) - 2, x: Re(u2, c) })) : c && h2.push(i(h2) + "rotate(" + c + o);
    }
    function s2(u2, c, h2, g2) {
      u2 !== c ? g2.push({ i: h2.push(i(h2) + "skewX(", null, o) - 2, x: Re(u2, c) }) : c && h2.push(i(h2) + "skewX(" + c + o);
    }
    function l(u2, c, h2, g2, w2, f) {
      if (u2 !== h2 || c !== g2) {
        var d = w2.push(i(w2) + "scale(", null, ",", null, ")");
        f.push({ i: d - 4, x: Re(u2, h2) }, { i: d - 2, x: Re(c, g2) });
      } else
        (h2 !== 1 || g2 !== 1) && w2.push(i(w2) + "scale(" + h2 + "," + g2 + ")");
    }
    return function(u2, c) {
      var h2 = [], g2 = [];
      return u2 = e4(u2), c = e4(c), r(u2.translateX, u2.translateY, c.translateX, c.translateY, h2, g2), a2(u2.rotate, c.rotate, h2, g2), s2(u2.skewX, c.skewX, h2, g2), l(u2.scaleX, u2.scaleY, c.scaleX, c.scaleY, h2, g2), u2 = c = null, function(w2) {
        for (var f = -1, d = g2.length, _; ++f < d; )
          h2[(_ = g2[f]).i] = _.x(w2);
        return h2.join("");
      };
    };
  }
  var $u = ur(Cu, "px, ", "px)", "deg)");
  var ku = ur(Mu, ", ", ")", ")");
  var Ou = 1e-12;
  function ni(e4) {
    return ((e4 = Math.exp(e4)) + 1 / e4) / 2;
  }
  function Iu(e4) {
    return ((e4 = Math.exp(e4)) - 1 / e4) / 2;
  }
  function Tu(e4) {
    return ((e4 = Math.exp(2 * e4)) - 1) / (e4 + 1);
  }
  var Pu = function e2(t, n, o) {
    function i(r, a2) {
      var s2 = r[0], l = r[1], u2 = r[2], c = a2[0], h2 = a2[1], g2 = a2[2], w2 = c - s2, f = h2 - l, d = w2 * w2 + f * f, _, x2;
      if (d < Ou)
        x2 = Math.log(g2 / u2) / t, _ = function(m) {
          return [
            s2 + m * w2,
            l + m * f,
            u2 * Math.exp(t * m * x2)
          ];
        };
      else {
        var N = Math.sqrt(d), B2 = (g2 * g2 - u2 * u2 + o * d) / (2 * u2 * n * N), y2 = (g2 * g2 - u2 * u2 - o * d) / (2 * g2 * n * N), $3 = Math.log(Math.sqrt(B2 * B2 + 1) - B2), I = Math.log(Math.sqrt(y2 * y2 + 1) - y2);
        x2 = (I - $3) / t, _ = function(m) {
          var G2 = m * x2, D = ni($3), M2 = u2 / (n * N) * (D * Tu(t * G2 + $3) - Iu($3));
          return [
            s2 + M2 * w2,
            l + M2 * f,
            u2 * D / ni(t * G2 + $3)
          ];
        };
      }
      return _.duration = x2 * 1e3 * t / Math.SQRT2, _;
    }
    return i.rho = function(r) {
      var a2 = Math.max(1e-3, +r), s2 = a2 * a2, l = s2 * s2;
      return e2(a2, s2, l);
    }, i;
  }(Math.SQRT2, 2, 4);
  var ft = 0;
  var mt = 0;
  var gt = 0;
  var cr = 1e3;
  var jt;
  var pt;
  var Qt = 0;
  var Qe = 0;
  var xn = 0;
  var Ct = typeof performance == "object" && performance.now ? performance : Date;
  var dr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e4) {
    setTimeout(e4, 17);
  };
  function po() {
    return Qe || (dr(Du), Qe = Ct.now() + xn);
  }
  function Du() {
    Qe = 0;
  }
  function Jt() {
    this._call = this._time = this._next = null;
  }
  Jt.prototype = fr.prototype = {
    constructor: Jt,
    restart: function(e4, t, n) {
      if (typeof e4 != "function")
        throw new TypeError("callback is not a function");
      n = (n == null ? po() : +n) + (t == null ? 0 : +t), !this._next && pt !== this && (pt ? pt._next = this : jt = this, pt = this), this._call = e4, this._time = n, Qn();
    },
    stop: function() {
      this._call && (this._call = null, this._time = 1 / 0, Qn());
    }
  };
  function fr(e4, t, n) {
    var o = new Jt();
    return o.restart(e4, t, n), o;
  }
  function Au() {
    po(), ++ft;
    for (var e4 = jt, t; e4; )
      (t = Qe - e4._time) >= 0 && e4._call.call(void 0, t), e4 = e4._next;
    --ft;
  }
  function oi() {
    Qe = (Qt = Ct.now()) + xn, ft = mt = 0;
    try {
      Au();
    } finally {
      ft = 0, Bu(), Qe = 0;
    }
  }
  function zu() {
    var e4 = Ct.now(), t = e4 - Qt;
    t > cr && (xn -= t, Qt = e4);
  }
  function Bu() {
    for (var e4, t = jt, n, o = 1 / 0; t; )
      t._call ? (o > t._time && (o = t._time), e4 = t, t = t._next) : (n = t._next, t._next = null, t = e4 ? e4._next = n : jt = n);
    pt = e4, Qn(o);
  }
  function Qn(e4) {
    if (!ft) {
      mt && (mt = clearTimeout(mt));
      var t = e4 - Qe;
      t > 24 ? (e4 < 1 / 0 && (mt = setTimeout(oi, e4 - Ct.now() - xn)), gt && (gt = clearInterval(gt))) : (gt || (Qt = Ct.now(), gt = setInterval(zu, cr)), ft = 1, dr(oi));
    }
  }
  function ii(e4, t, n) {
    var o = new Jt();
    return t = t == null ? 0 : +t, o.restart((i) => {
      o.stop(), e4(i + t);
    }, t, n), o;
  }
  var Ru = cn("start", "end", "cancel", "interrupt");
  var Vu = [];
  var hr = 0;
  var ri = 1;
  var Jn = 2;
  var Vt = 3;
  var ai = 4;
  var eo = 5;
  var Ht = 6;
  function _n(e4, t, n, o, i, r) {
    var a2 = e4.__transition;
    if (!a2)
      e4.__transition = {};
    else if (n in a2)
      return;
    Hu(e4, n, {
      name: t,
      index: o,
      group: i,
      on: Ru,
      tween: Vu,
      time: r.time,
      delay: r.delay,
      duration: r.duration,
      ease: r.ease,
      timer: null,
      state: hr
    });
  }
  function yo(e4, t) {
    var n = Se(e4, t);
    if (n.state > hr)
      throw new Error("too late; already scheduled");
    return n;
  }
  function ke(e4, t) {
    var n = Se(e4, t);
    if (n.state > Vt)
      throw new Error("too late; already running");
    return n;
  }
  function Se(e4, t) {
    var n = e4.__transition;
    if (!n || !(n = n[t]))
      throw new Error("transition not found");
    return n;
  }
  function Hu(e4, t, n) {
    var o = e4.__transition, i;
    o[t] = n, n.timer = fr(r, 0, n.time);
    function r(u2) {
      n.state = ri, n.timer.restart(a2, n.delay, n.time), n.delay <= u2 && a2(u2 - n.delay);
    }
    function a2(u2) {
      var c, h2, g2, w2;
      if (n.state !== ri)
        return l();
      for (c in o)
        if (w2 = o[c], w2.name === n.name) {
          if (w2.state === Vt)
            return ii(a2);
          w2.state === ai ? (w2.state = Ht, w2.timer.stop(), w2.on.call("interrupt", e4, e4.__data__, w2.index, w2.group), delete o[c]) : +c < t && (w2.state = Ht, w2.timer.stop(), w2.on.call("cancel", e4, e4.__data__, w2.index, w2.group), delete o[c]);
        }
      if (ii(function() {
        n.state === Vt && (n.state = ai, n.timer.restart(s2, n.delay, n.time), s2(u2));
      }), n.state = Jn, n.on.call("start", e4, e4.__data__, n.index, n.group), n.state === Jn) {
        for (n.state = Vt, i = new Array(g2 = n.tween.length), c = 0, h2 = -1; c < g2; ++c)
          (w2 = n.tween[c].value.call(e4, e4.__data__, n.index, n.group)) && (i[++h2] = w2);
        i.length = h2 + 1;
      }
    }
    function s2(u2) {
      for (var c = u2 < n.duration ? n.ease.call(null, u2 / n.duration) : (n.timer.restart(l), n.state = eo, 1), h2 = -1, g2 = i.length; ++h2 < g2; )
        i[h2].call(e4, c);
      n.state === eo && (n.on.call("end", e4, e4.__data__, n.index, n.group), l());
    }
    function l() {
      n.state = Ht, n.timer.stop(), delete o[t];
      for (var u2 in o)
        return;
      delete e4.__transition;
    }
  }
  function Lt(e4, t) {
    var n = e4.__transition, o, i, r = true, a2;
    if (n) {
      t = t == null ? null : t + "";
      for (a2 in n) {
        if ((o = n[a2]).name !== t) {
          r = false;
          continue;
        }
        i = o.state > Jn && o.state < eo, o.state = Ht, o.timer.stop(), o.on.call(i ? "interrupt" : "cancel", e4, e4.__data__, o.index, o.group), delete n[a2];
      }
      r && delete e4.__transition;
    }
  }
  function Lu(e4) {
    return this.each(function() {
      Lt(this, e4);
    });
  }
  function Fu(e4, t) {
    var n, o;
    return function() {
      var i = ke(this, e4), r = i.tween;
      if (r !== n) {
        o = n = r;
        for (var a2 = 0, s2 = o.length; a2 < s2; ++a2)
          if (o[a2].name === t) {
            o = o.slice(), o.splice(a2, 1);
            break;
          }
      }
      i.tween = o;
    };
  }
  function Gu(e4, t, n) {
    var o, i;
    if (typeof n != "function")
      throw new Error();
    return function() {
      var r = ke(this, e4), a2 = r.tween;
      if (a2 !== o) {
        i = (o = a2).slice();
        for (var s2 = { name: t, value: n }, l = 0, u2 = i.length; l < u2; ++l)
          if (i[l].name === t) {
            i[l] = s2;
            break;
          }
        l === u2 && i.push(s2);
      }
      r.tween = i;
    };
  }
  function Yu(e4, t) {
    var n = this._id;
    if (e4 += "", arguments.length < 2) {
      for (var o = Se(this.node(), n).tween, i = 0, r = o.length, a2; i < r; ++i)
        if ((a2 = o[i]).name === e4)
          return a2.value;
      return null;
    }
    return this.each((t == null ? Fu : Gu)(n, e4, t));
  }
  function xo(e4, t, n) {
    var o = e4._id;
    return e4.each(function() {
      var i = ke(this, o);
      (i.value || (i.value = {}))[t] = n.apply(this, arguments);
    }), function(i) {
      return Se(i, o).value[t];
    };
  }
  function gr(e4, t) {
    var n;
    return (typeof t == "number" ? Re : t instanceof Nt ? ei : (n = Nt(t)) ? (t = n, ei) : Nu)(e4, t);
  }
  function Xu(e4) {
    return function() {
      this.removeAttribute(e4);
    };
  }
  function Uu(e4) {
    return function() {
      this.removeAttributeNS(e4.space, e4.local);
    };
  }
  function Zu(e4, t, n) {
    var o, i = n + "", r;
    return function() {
      var a2 = this.getAttribute(e4);
      return a2 === i ? null : a2 === o ? r : r = t(o = a2, n);
    };
  }
  function Ku(e4, t, n) {
    var o, i = n + "", r;
    return function() {
      var a2 = this.getAttributeNS(e4.space, e4.local);
      return a2 === i ? null : a2 === o ? r : r = t(o = a2, n);
    };
  }
  function Wu(e4, t, n) {
    var o, i, r;
    return function() {
      var a2, s2 = n(this), l;
      return s2 == null ? void this.removeAttribute(e4) : (a2 = this.getAttribute(e4), l = s2 + "", a2 === l ? null : a2 === o && l === i ? r : (i = l, r = t(o = a2, s2)));
    };
  }
  function qu(e4, t, n) {
    var o, i, r;
    return function() {
      var a2, s2 = n(this), l;
      return s2 == null ? void this.removeAttributeNS(e4.space, e4.local) : (a2 = this.getAttributeNS(e4.space, e4.local), l = s2 + "", a2 === l ? null : a2 === o && l === i ? r : (i = l, r = t(o = a2, s2)));
    };
  }
  function ju(e4, t) {
    var n = dn(e4), o = n === "transform" ? ku : gr;
    return this.attrTween(e4, typeof t == "function" ? (n.local ? qu : Wu)(n, o, xo(this, "attr." + e4, t)) : t == null ? (n.local ? Uu : Xu)(n) : (n.local ? Ku : Zu)(n, o, t));
  }
  function Qu(e4, t) {
    return function(n) {
      this.setAttribute(e4, t.call(this, n));
    };
  }
  function Ju(e4, t) {
    return function(n) {
      this.setAttributeNS(e4.space, e4.local, t.call(this, n));
    };
  }
  function ec(e4, t) {
    var n, o;
    function i() {
      var r = t.apply(this, arguments);
      return r !== o && (n = (o = r) && Ju(e4, r)), n;
    }
    return i._value = t, i;
  }
  function tc(e4, t) {
    var n, o;
    function i() {
      var r = t.apply(this, arguments);
      return r !== o && (n = (o = r) && Qu(e4, r)), n;
    }
    return i._value = t, i;
  }
  function nc(e4, t) {
    var n = "attr." + e4;
    if (arguments.length < 2)
      return (n = this.tween(n)) && n._value;
    if (t == null)
      return this.tween(n, null);
    if (typeof t != "function")
      throw new Error();
    var o = dn(e4);
    return this.tween(n, (o.local ? ec : tc)(o, t));
  }
  function oc(e4, t) {
    return function() {
      yo(this, e4).delay = +t.apply(this, arguments);
    };
  }
  function ic(e4, t) {
    return t = +t, function() {
      yo(this, e4).delay = t;
    };
  }
  function rc(e4) {
    var t = this._id;
    return arguments.length ? this.each((typeof e4 == "function" ? oc : ic)(t, e4)) : Se(this.node(), t).delay;
  }
  function ac(e4, t) {
    return function() {
      ke(this, e4).duration = +t.apply(this, arguments);
    };
  }
  function sc(e4, t) {
    return t = +t, function() {
      ke(this, e4).duration = t;
    };
  }
  function lc(e4) {
    var t = this._id;
    return arguments.length ? this.each((typeof e4 == "function" ? ac : sc)(t, e4)) : Se(this.node(), t).duration;
  }
  function uc(e4, t) {
    if (typeof t != "function")
      throw new Error();
    return function() {
      ke(this, e4).ease = t;
    };
  }
  function cc(e4) {
    var t = this._id;
    return arguments.length ? this.each(uc(t, e4)) : Se(this.node(), t).ease;
  }
  function dc(e4, t) {
    return function() {
      var n = t.apply(this, arguments);
      if (typeof n != "function")
        throw new Error();
      ke(this, e4).ease = n;
    };
  }
  function fc(e4) {
    if (typeof e4 != "function")
      throw new Error();
    return this.each(dc(this._id, e4));
  }
  function hc(e4) {
    typeof e4 != "function" && (e4 = zi(e4));
    for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
      for (var r = t[i], a2 = r.length, s2 = o[i] = [], l, u2 = 0; u2 < a2; ++u2)
        (l = r[u2]) && e4.call(l, l.__data__, u2, r) && s2.push(l);
    return new Be(o, this._parents, this._name, this._id);
  }
  function gc(e4) {
    if (e4._id !== this._id)
      throw new Error();
    for (var t = this._groups, n = e4._groups, o = t.length, i = n.length, r = Math.min(o, i), a2 = new Array(o), s2 = 0; s2 < r; ++s2)
      for (var l = t[s2], u2 = n[s2], c = l.length, h2 = a2[s2] = new Array(c), g2, w2 = 0; w2 < c; ++w2)
        (g2 = l[w2] || u2[w2]) && (h2[w2] = g2);
    for (; s2 < o; ++s2)
      a2[s2] = t[s2];
    return new Be(a2, this._parents, this._name, this._id);
  }
  function vc(e4) {
    return (e4 + "").trim().split(/^|\s+/).every(function(t) {
      var n = t.indexOf(".");
      return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
    });
  }
  function mc(e4, t, n) {
    var o, i, r = vc(t) ? yo : ke;
    return function() {
      var a2 = r(this, e4), s2 = a2.on;
      s2 !== o && (i = (o = s2).copy()).on(t, n), a2.on = i;
    };
  }
  function pc(e4, t) {
    var n = this._id;
    return arguments.length < 2 ? Se(this.node(), n).on.on(e4) : this.each(mc(n, e4, t));
  }
  function yc(e4) {
    return function() {
      var t = this.parentNode;
      for (var n in this.__transition)
        if (+n !== e4)
          return;
      t && t.removeChild(this);
    };
  }
  function xc() {
    return this.on("end.remove", yc(this._id));
  }
  function _c(e4) {
    var t = this._name, n = this._id;
    typeof e4 != "function" && (e4 = ho(e4));
    for (var o = this._groups, i = o.length, r = new Array(i), a2 = 0; a2 < i; ++a2)
      for (var s2 = o[a2], l = s2.length, u2 = r[a2] = new Array(l), c, h2, g2 = 0; g2 < l; ++g2)
        (c = s2[g2]) && (h2 = e4.call(c, c.__data__, g2, s2)) && ("__data__" in c && (h2.__data__ = c.__data__), u2[g2] = h2, _n(u2[g2], t, n, g2, u2, Se(c, n)));
    return new Be(r, this._parents, t, n);
  }
  function wc(e4) {
    var t = this._name, n = this._id;
    typeof e4 != "function" && (e4 = Ai(e4));
    for (var o = this._groups, i = o.length, r = [], a2 = [], s2 = 0; s2 < i; ++s2)
      for (var l = o[s2], u2 = l.length, c, h2 = 0; h2 < u2; ++h2)
        if (c = l[h2]) {
          for (var g2 = e4.call(c, c.__data__, h2, l), w2, f = Se(c, n), d = 0, _ = g2.length; d < _; ++d)
            (w2 = g2[d]) && _n(w2, t, n, d, g2, f);
          r.push(g2), a2.push(c);
        }
    return new Be(r, a2, t, n);
  }
  var bc = $t.prototype.constructor;
  function Ec() {
    return new bc(this._groups, this._parents);
  }
  function Sc(e4, t) {
    var n, o, i;
    return function() {
      var r = dt(this, e4), a2 = (this.style.removeProperty(e4), dt(this, e4));
      return r === a2 ? null : r === n && a2 === o ? i : i = t(n = r, o = a2);
    };
  }
  function vr(e4) {
    return function() {
      this.style.removeProperty(e4);
    };
  }
  function Nc(e4, t, n) {
    var o, i = n + "", r;
    return function() {
      var a2 = dt(this, e4);
      return a2 === i ? null : a2 === o ? r : r = t(o = a2, n);
    };
  }
  function Cc(e4, t, n) {
    var o, i, r;
    return function() {
      var a2 = dt(this, e4), s2 = n(this), l = s2 + "";
      return s2 == null && (l = s2 = (this.style.removeProperty(e4), dt(this, e4))), a2 === l ? null : a2 === o && l === i ? r : (i = l, r = t(o = a2, s2));
    };
  }
  function Mc(e4, t) {
    var n, o, i, r = "style." + t, a2 = "end." + r, s2;
    return function() {
      var l = ke(this, e4), u2 = l.on, c = l.value[r] == null ? s2 || (s2 = vr(t)) : void 0;
      (u2 !== n || i !== c) && (o = (n = u2).copy()).on(a2, i = c), l.on = o;
    };
  }
  function $c(e4, t, n) {
    var o = (e4 += "") == "transform" ? $u : gr;
    return t == null ? this.styleTween(e4, Sc(e4, o)).on("end.style." + e4, vr(e4)) : typeof t == "function" ? this.styleTween(e4, Cc(e4, o, xo(this, "style." + e4, t))).each(Mc(this._id, e4)) : this.styleTween(e4, Nc(e4, o, t), n).on("end.style." + e4, null);
  }
  function kc(e4, t, n) {
    return function(o) {
      this.style.setProperty(e4, t.call(this, o), n);
    };
  }
  function Oc(e4, t, n) {
    var o, i;
    function r() {
      var a2 = t.apply(this, arguments);
      return a2 !== i && (o = (i = a2) && kc(e4, a2, n)), o;
    }
    return r._value = t, r;
  }
  function Ic(e4, t, n) {
    var o = "style." + (e4 += "");
    if (arguments.length < 2)
      return (o = this.tween(o)) && o._value;
    if (t == null)
      return this.tween(o, null);
    if (typeof t != "function")
      throw new Error();
    return this.tween(o, Oc(e4, t, n != null ? n : ""));
  }
  function Tc(e4) {
    return function() {
      this.textContent = e4;
    };
  }
  function Pc(e4) {
    return function() {
      var t = e4(this);
      this.textContent = t != null ? t : "";
    };
  }
  function Dc(e4) {
    return this.tween("text", typeof e4 == "function" ? Pc(xo(this, "text", e4)) : Tc(e4 == null ? "" : e4 + ""));
  }
  function Ac(e4) {
    return function(t) {
      this.textContent = e4.call(this, t);
    };
  }
  function zc(e4) {
    var t, n;
    function o() {
      var i = e4.apply(this, arguments);
      return i !== n && (t = (n = i) && Ac(i)), t;
    }
    return o._value = e4, o;
  }
  function Bc(e4) {
    var t = "text";
    if (arguments.length < 1)
      return (t = this.tween(t)) && t._value;
    if (e4 == null)
      return this.tween(t, null);
    if (typeof e4 != "function")
      throw new Error();
    return this.tween(t, zc(e4));
  }
  function Rc() {
    for (var e4 = this._name, t = this._id, n = mr(), o = this._groups, i = o.length, r = 0; r < i; ++r)
      for (var a2 = o[r], s2 = a2.length, l, u2 = 0; u2 < s2; ++u2)
        if (l = a2[u2]) {
          var c = Se(l, t);
          _n(l, e4, n, u2, a2, {
            time: c.time + c.delay + c.duration,
            delay: 0,
            duration: c.duration,
            ease: c.ease
          });
        }
    return new Be(o, this._parents, e4, n);
  }
  function Vc() {
    var e4, t, n = this, o = n._id, i = n.size();
    return new Promise(function(r, a2) {
      var s2 = { value: a2 }, l = { value: function() {
        --i === 0 && r();
      } };
      n.each(function() {
        var u2 = ke(this, o), c = u2.on;
        c !== e4 && (t = (e4 = c).copy(), t._.cancel.push(s2), t._.interrupt.push(s2), t._.end.push(l)), u2.on = t;
      }), i === 0 && r();
    });
  }
  var Hc = 0;
  function Be(e4, t, n, o) {
    this._groups = e4, this._parents = t, this._name = n, this._id = o;
  }
  function mr() {
    return ++Hc;
  }
  var Oe = $t.prototype;
  Be.prototype = {
    constructor: Be,
    select: _c,
    selectAll: wc,
    selectChild: Oe.selectChild,
    selectChildren: Oe.selectChildren,
    filter: hc,
    merge: gc,
    selection: Ec,
    transition: Rc,
    call: Oe.call,
    nodes: Oe.nodes,
    node: Oe.node,
    size: Oe.size,
    empty: Oe.empty,
    each: Oe.each,
    on: pc,
    attr: ju,
    attrTween: nc,
    style: $c,
    styleTween: Ic,
    text: Dc,
    textTween: Bc,
    remove: xc,
    tween: Yu,
    delay: rc,
    duration: lc,
    ease: cc,
    easeVarying: fc,
    end: Vc,
    [Symbol.iterator]: Oe[Symbol.iterator]
  };
  function Lc(e4) {
    return ((e4 *= 2) <= 1 ? e4 * e4 * e4 : (e4 -= 2) * e4 * e4 + 2) / 2;
  }
  var Fc = {
    time: null,
    delay: 0,
    duration: 250,
    ease: Lc
  };
  function Gc(e4, t) {
    for (var n; !(n = e4.__transition) || !(n = n[t]); )
      if (!(e4 = e4.parentNode))
        throw new Error(`transition ${t} not found`);
    return n;
  }
  function Yc(e4) {
    var t, n;
    e4 instanceof Be ? (t = e4._id, e4 = e4._name) : (t = mr(), (n = Fc).time = po(), e4 = e4 == null ? null : e4 + "");
    for (var o = this._groups, i = o.length, r = 0; r < i; ++r)
      for (var a2 = o[r], s2 = a2.length, l, u2 = 0; u2 < s2; ++u2)
        (l = a2[u2]) && _n(l, e4, t, u2, a2, n || Gc(l, t));
    return new Be(o, this._parents, e4, t);
  }
  $t.prototype.interrupt = Lu;
  $t.prototype.transition = Yc;
  var zt = (e4) => () => e4;
  function Xc(e4, {
    sourceEvent: t,
    target: n,
    transform: o,
    dispatch: i
  }) {
    Object.defineProperties(this, {
      type: { value: e4, enumerable: true, configurable: true },
      sourceEvent: { value: t, enumerable: true, configurable: true },
      target: { value: n, enumerable: true, configurable: true },
      transform: { value: o, enumerable: true, configurable: true },
      _: { value: i }
    });
  }
  function De(e4, t, n) {
    this.k = e4, this.x = t, this.y = n;
  }
  De.prototype = {
    constructor: De,
    scale: function(e4) {
      return e4 === 1 ? this : new De(this.k * e4, this.x, this.y);
    },
    translate: function(e4, t) {
      return e4 === 0 & t === 0 ? this : new De(this.k, this.x + this.k * e4, this.y + this.k * t);
    },
    apply: function(e4) {
      return [e4[0] * this.k + this.x, e4[1] * this.k + this.y];
    },
    applyX: function(e4) {
      return e4 * this.k + this.x;
    },
    applyY: function(e4) {
      return e4 * this.k + this.y;
    },
    invert: function(e4) {
      return [(e4[0] - this.x) / this.k, (e4[1] - this.y) / this.k];
    },
    invertX: function(e4) {
      return (e4 - this.x) / this.k;
    },
    invertY: function(e4) {
      return (e4 - this.y) / this.k;
    },
    rescaleX: function(e4) {
      return e4.copy().domain(e4.range().map(this.invertX, this).map(e4.invert, e4));
    },
    rescaleY: function(e4) {
      return e4.copy().domain(e4.range().map(this.invertY, this).map(e4.invert, e4));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var ht = new De(1, 0, 0);
  De.prototype;
  function $n(e4) {
    e4.stopImmediatePropagation();
  }
  function vt(e4) {
    e4.preventDefault(), e4.stopImmediatePropagation();
  }
  function Uc(e4) {
    return (!e4.ctrlKey || e4.type === "wheel") && !e4.button;
  }
  function Zc() {
    var e4 = this;
    return e4 instanceof SVGElement ? (e4 = e4.ownerSVGElement || e4, e4.hasAttribute("viewBox") ? (e4 = e4.viewBox.baseVal, [[e4.x, e4.y], [e4.x + e4.width, e4.y + e4.height]]) : [[0, 0], [e4.width.baseVal.value, e4.height.baseVal.value]]) : [[0, 0], [e4.clientWidth, e4.clientHeight]];
  }
  function si() {
    return this.__zoom || ht;
  }
  function Kc(e4) {
    return -e4.deltaY * (e4.deltaMode === 1 ? 0.05 : e4.deltaMode ? 1 : 2e-3) * (e4.ctrlKey ? 10 : 1);
  }
  function Wc() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function qc(e4, t, n) {
    var o = e4.invertX(t[0][0]) - n[0][0], i = e4.invertX(t[1][0]) - n[1][0], r = e4.invertY(t[0][1]) - n[0][1], a2 = e4.invertY(t[1][1]) - n[1][1];
    return e4.translate(i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i), a2 > r ? (r + a2) / 2 : Math.min(0, r) || Math.max(0, a2));
  }
  function jc() {
    var e4 = Uc, t = Zc, n = qc, o = Kc, i = Wc, r = [0, 1 / 0], a2 = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s2 = 250, l = Pu, u2 = cn("start", "zoom", "end"), c, h2, g2, w2 = 500, f = 150, d = 0, _ = 10;
    function x2(p) {
      p.property("__zoom", si).on("wheel.zoom", G2, { passive: false }).on("mousedown.zoom", D).on("dblclick.zoom", M2).filter(i).on("touchstart.zoom", H).on("touchmove.zoom", j).on("touchend.zoom touchcancel.zoom", te).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    x2.transform = function(p, R, E2, L2) {
      var U = p.selection ? p.selection() : p;
      U.property("__zoom", si), p !== U ? $3(p, R, E2, L2) : U.interrupt().each(function() {
        I(this, arguments).event(L2).start().zoom(null, typeof R == "function" ? R.apply(this, arguments) : R).end();
      });
    }, x2.scaleBy = function(p, R, E2, L2) {
      x2.scaleTo(p, function() {
        var U = this.__zoom.k, W = typeof R == "function" ? R.apply(this, arguments) : R;
        return U * W;
      }, E2, L2);
    }, x2.scaleTo = function(p, R, E2, L2) {
      x2.transform(p, function() {
        var U = t.apply(this, arguments), W = this.__zoom, P = E2 == null ? y2(U) : typeof E2 == "function" ? E2.apply(this, arguments) : E2, K = W.invert(P), A2 = typeof R == "function" ? R.apply(this, arguments) : R;
        return n(B2(N(W, A2), P, K), U, a2);
      }, E2, L2);
    }, x2.translateBy = function(p, R, E2, L2) {
      x2.transform(p, function() {
        return n(this.__zoom.translate(typeof R == "function" ? R.apply(this, arguments) : R, typeof E2 == "function" ? E2.apply(this, arguments) : E2), t.apply(this, arguments), a2);
      }, null, L2);
    }, x2.translateTo = function(p, R, E2, L2, U) {
      x2.transform(p, function() {
        var W = t.apply(this, arguments), P = this.__zoom, K = L2 == null ? y2(W) : typeof L2 == "function" ? L2.apply(this, arguments) : L2;
        return n(ht.translate(K[0], K[1]).scale(P.k).translate(typeof R == "function" ? -R.apply(this, arguments) : -R, typeof E2 == "function" ? -E2.apply(this, arguments) : -E2), W, a2);
      }, L2, U);
    };
    function N(p, R) {
      return R = Math.max(r[0], Math.min(r[1], R)), R === p.k ? p : new De(R, p.x, p.y);
    }
    function B2(p, R, E2) {
      var L2 = R[0] - E2[0] * p.k, U = R[1] - E2[1] * p.k;
      return L2 === p.x && U === p.y ? p : new De(p.k, L2, U);
    }
    function y2(p) {
      return [(+p[0][0] + +p[1][0]) / 2, (+p[0][1] + +p[1][1]) / 2];
    }
    function $3(p, R, E2, L2) {
      p.on("start.zoom", function() {
        I(this, arguments).event(L2).start();
      }).on("interrupt.zoom end.zoom", function() {
        I(this, arguments).event(L2).end();
      }).tween("zoom", function() {
        var U = this, W = arguments, P = I(U, W).event(L2), K = t.apply(U, W), A2 = E2 == null ? y2(K) : typeof E2 == "function" ? E2.apply(U, W) : E2, J = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), Z = U.__zoom, q = typeof R == "function" ? R.apply(U, W) : R, O = l(Z.invert(A2).concat(J / Z.k), q.invert(A2).concat(J / q.k));
        return function(Y) {
          if (Y === 1)
            Y = q;
          else {
            var v = O(Y), b = J / v[2];
            Y = new De(b, A2[0] - v[0] * b, A2[1] - v[1] * b);
          }
          P.zoom(null, Y);
        };
      });
    }
    function I(p, R, E2) {
      return !E2 && p.__zooming || new m(p, R);
    }
    function m(p, R) {
      this.that = p, this.args = R, this.active = 0, this.sourceEvent = null, this.extent = t.apply(p, R), this.taps = 0;
    }
    m.prototype = {
      event: function(p) {
        return p && (this.sourceEvent = p), this;
      },
      start: function() {
        return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
      },
      zoom: function(p, R) {
        return this.mouse && p !== "mouse" && (this.mouse[1] = R.invert(this.mouse[0])), this.touch0 && p !== "touch" && (this.touch0[1] = R.invert(this.touch0[0])), this.touch1 && p !== "touch" && (this.touch1[1] = R.invert(this.touch1[0])), this.that.__zoom = R, this.emit("zoom"), this;
      },
      end: function() {
        return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
      },
      emit: function(p) {
        var R = we(this.that).datum();
        u2.call(p, this.that, new Xc(p, {
          sourceEvent: this.sourceEvent,
          target: x2,
          type: p,
          transform: this.that.__zoom,
          dispatch: u2
        }), R);
      }
    };
    function G2(p, ...R) {
      if (!e4.apply(this, arguments))
        return;
      var E2 = I(this, R).event(p), L2 = this.__zoom, U = Math.max(r[0], Math.min(r[1], L2.k * Math.pow(2, o.apply(this, arguments)))), W = Ne(p);
      if (E2.wheel)
        (E2.mouse[0][0] !== W[0] || E2.mouse[0][1] !== W[1]) && (E2.mouse[1] = L2.invert(E2.mouse[0] = W)), clearTimeout(E2.wheel);
      else {
        if (L2.k === U)
          return;
        E2.mouse = [W, L2.invert(W)], Lt(this), E2.start();
      }
      vt(p), E2.wheel = setTimeout(P, f), E2.zoom("mouse", n(B2(N(L2, U), E2.mouse[0], E2.mouse[1]), E2.extent, a2));
      function P() {
        E2.wheel = null, E2.end();
      }
    }
    function D(p, ...R) {
      if (g2 || !e4.apply(this, arguments))
        return;
      var E2 = p.currentTarget, L2 = I(this, R, true).event(p), U = we(p.view).on("mousemove.zoom", A2, true).on("mouseup.zoom", J, true), W = Ne(p, E2), P = p.clientX, K = p.clientY;
      Ui(p.view), $n(p), L2.mouse = [W, this.__zoom.invert(W)], Lt(this), L2.start();
      function A2(Z) {
        if (vt(Z), !L2.moved) {
          var q = Z.clientX - P, O = Z.clientY - K;
          L2.moved = q * q + O * O > d;
        }
        L2.event(Z).zoom("mouse", n(B2(L2.that.__zoom, L2.mouse[0] = Ne(Z, E2), L2.mouse[1]), L2.extent, a2));
      }
      function J(Z) {
        U.on("mousemove.zoom mouseup.zoom", null), Zi(Z.view, L2.moved), vt(Z), L2.event(Z).end();
      }
    }
    function M2(p, ...R) {
      if (e4.apply(this, arguments)) {
        var E2 = this.__zoom, L2 = Ne(p.changedTouches ? p.changedTouches[0] : p, this), U = E2.invert(L2), W = E2.k * (p.shiftKey ? 0.5 : 2), P = n(B2(N(E2, W), L2, U), t.apply(this, R), a2);
        vt(p), s2 > 0 ? we(this).transition().duration(s2).call($3, P, L2, p) : we(this).call(x2.transform, P, L2, p);
      }
    }
    function H(p, ...R) {
      if (e4.apply(this, arguments)) {
        var E2 = p.touches, L2 = E2.length, U = I(this, R, p.changedTouches.length === L2).event(p), W, P, K, A2;
        for ($n(p), P = 0; P < L2; ++P)
          K = E2[P], A2 = Ne(K, this), A2 = [A2, this.__zoom.invert(A2), K.identifier], U.touch0 ? !U.touch1 && U.touch0[2] !== A2[2] && (U.touch1 = A2, U.taps = 0) : (U.touch0 = A2, W = true, U.taps = 1 + !!c);
        c && (c = clearTimeout(c)), W && (U.taps < 2 && (h2 = A2[0], c = setTimeout(function() {
          c = null;
        }, w2)), Lt(this), U.start());
      }
    }
    function j(p, ...R) {
      if (this.__zooming) {
        var E2 = I(this, R).event(p), L2 = p.changedTouches, U = L2.length, W, P, K, A2;
        for (vt(p), W = 0; W < U; ++W)
          P = L2[W], K = Ne(P, this), E2.touch0 && E2.touch0[2] === P.identifier ? E2.touch0[0] = K : E2.touch1 && E2.touch1[2] === P.identifier && (E2.touch1[0] = K);
        if (P = E2.that.__zoom, E2.touch1) {
          var J = E2.touch0[0], Z = E2.touch0[1], q = E2.touch1[0], O = E2.touch1[1], Y = (Y = q[0] - J[0]) * Y + (Y = q[1] - J[1]) * Y, v = (v = O[0] - Z[0]) * v + (v = O[1] - Z[1]) * v;
          P = N(P, Math.sqrt(Y / v)), K = [(J[0] + q[0]) / 2, (J[1] + q[1]) / 2], A2 = [(Z[0] + O[0]) / 2, (Z[1] + O[1]) / 2];
        } else if (E2.touch0)
          K = E2.touch0[0], A2 = E2.touch0[1];
        else
          return;
        E2.zoom("touch", n(B2(P, K, A2), E2.extent, a2));
      }
    }
    function te(p, ...R) {
      if (this.__zooming) {
        var E2 = I(this, R).event(p), L2 = p.changedTouches, U = L2.length, W, P;
        for ($n(p), g2 && clearTimeout(g2), g2 = setTimeout(function() {
          g2 = null;
        }, w2), W = 0; W < U; ++W)
          P = L2[W], E2.touch0 && E2.touch0[2] === P.identifier ? delete E2.touch0 : E2.touch1 && E2.touch1[2] === P.identifier && delete E2.touch1;
        if (E2.touch1 && !E2.touch0 && (E2.touch0 = E2.touch1, delete E2.touch1), E2.touch0)
          E2.touch0[1] = this.__zoom.invert(E2.touch0[0]);
        else if (E2.end(), E2.taps === 2 && (P = Ne(P, this), Math.hypot(h2[0] - P[0], h2[1] - P[1]) < _)) {
          var K = we(this).on("dblclick.zoom");
          K && K.apply(this, arguments);
        }
      }
    }
    return x2.wheelDelta = function(p) {
      return arguments.length ? (o = typeof p == "function" ? p : zt(+p), x2) : o;
    }, x2.filter = function(p) {
      return arguments.length ? (e4 = typeof p == "function" ? p : zt(!!p), x2) : e4;
    }, x2.touchable = function(p) {
      return arguments.length ? (i = typeof p == "function" ? p : zt(!!p), x2) : i;
    }, x2.extent = function(p) {
      return arguments.length ? (t = typeof p == "function" ? p : zt([[+p[0][0], +p[0][1]], [+p[1][0], +p[1][1]]]), x2) : t;
    }, x2.scaleExtent = function(p) {
      return arguments.length ? (r[0] = +p[0], r[1] = +p[1], x2) : [r[0], r[1]];
    }, x2.translateExtent = function(p) {
      return arguments.length ? (a2[0][0] = +p[0][0], a2[1][0] = +p[1][0], a2[0][1] = +p[0][1], a2[1][1] = +p[1][1], x2) : [[a2[0][0], a2[0][1]], [a2[1][0], a2[1][1]]];
    }, x2.constrain = function(p) {
      return arguments.length ? (n = p, x2) : n;
    }, x2.duration = function(p) {
      return arguments.length ? (s2 = +p, x2) : s2;
    }, x2.interpolate = function(p) {
      return arguments.length ? (l = p, x2) : l;
    }, x2.on = function() {
      var p = u2.on.apply(u2, arguments);
      return p === u2 ? x2 : p;
    }, x2.clickDistance = function(p) {
      return arguments.length ? (d = (p = +p) * p, x2) : Math.sqrt(d);
    }, x2.tapDistance = function(p) {
      return arguments.length ? (_ = +p, x2) : _;
    }, x2;
  }
  var kn = 0.1;
  function Fe() {
  }
  var Qc = {
    zoomIn: Fe,
    zoomOut: Fe,
    zoomTo: Fe,
    fitView: Fe,
    setCenter: Fe,
    fitBounds: Fe,
    project: (e4) => e4,
    setTransform: Fe,
    getTransform: () => ({ x: 0, y: 0, zoom: 1 }),
    initialized: false
  };
  var Jc = (e4, t) => {
    const n = e4, o = (0, vue_runtime_esm_bundler_exports.toRef)(n, "nodes"), i = (0, vue_runtime_esm_bundler_exports.toRef)(n, "d3Zoom"), r = (0, vue_runtime_esm_bundler_exports.toRef)(n, "d3Selection"), a2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "dimensions"), s2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "translateExtent"), l = (0, vue_runtime_esm_bundler_exports.toRef)(n, "minZoom"), u2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "maxZoom"), c = (0, vue_runtime_esm_bundler_exports.toRef)(n, "viewport"), h2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "snapToGrid"), g2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "snapGrid"), w2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "hooks"), f = t, d = (0, vue_runtime_esm_bundler_exports.toRef)(f, "getNodes"), _ = (0, vue_runtime_esm_bundler_exports.ref)(false);
    w2.value.nodesInitialized.on(() => {
      _.value = true;
    });
    const x2 = (0, vue_runtime_esm_bundler_exports.computed)(() => !!i.value && !!r.value && !!a2.value.width && !!a2.value.height && _.value);
    function N(y2, $3) {
      r.value && i.value && i.value.scaleBy(On(r.value, $3), y2);
    }
    function B2(y2, $3, I, m) {
      const { x: G2, y: D } = ro({ x: -y2, y: -$3 }, s2.value), M2 = ht.translate(-G2, -D).scale(I);
      r.value && i.value && i.value.transform(On(r.value, m), M2);
    }
    return (0, vue_runtime_esm_bundler_exports.computed)(() => x2.value ? {
      initialized: true,
      zoomIn: (y2) => {
        N(1.2, y2 == null ? void 0 : y2.duration);
      },
      zoomOut: (y2) => {
        N(1 / 1.2, y2 == null ? void 0 : y2.duration);
      },
      zoomTo: (y2, $3) => {
        r.value && i.value && i.value.scaleTo(On(r.value, $3 == null ? void 0 : $3.duration), y2);
      },
      setTransform: (y2, $3) => {
        B2(y2.x, y2.y, y2.zoom, $3 == null ? void 0 : $3.duration);
      },
      getTransform: () => ({
        x: c.value.x,
        y: c.value.y,
        zoom: c.value.zoom
      }),
      fitView: (y2 = {
        padding: kn,
        includeHiddenNodes: false,
        duration: 0
      }) => {
        var _a3, _b, _c2;
        if (!o.value.length)
          return;
        const $3 = (y2.includeHiddenNodes ? o.value : d.value).filter((M2) => {
          var te;
          const H = M2.initialized && M2.dimensions.width && M2.dimensions.height;
          let j = true;
          return (te = y2.nodes) != null && te.length && (j = y2.nodes.includes(M2.id)), H && j;
        }), I = lo($3), { x: m, y: G2, zoom: D } = Yt(I, a2.value.width, a2.value.height, (_a3 = y2.minZoom) != null ? _a3 : l.value, (_b = y2.maxZoom) != null ? _b : u2.value, (_c2 = y2.padding) != null ? _c2 : kn, y2.offset);
        B2(m, G2, D, y2 == null ? void 0 : y2.duration);
      },
      setCenter: (y2, $3, I) => {
        const m = typeof (I == null ? void 0 : I.zoom) < "u" ? I.zoom : u2.value, G2 = a2.value.width / 2 - y2 * m, D = a2.value.height / 2 - $3 * m;
        B2(G2, D, m, I == null ? void 0 : I.duration);
      },
      fitBounds: (y2, $3 = { padding: kn }) => {
        const { x: I, y: m, zoom: G2 } = Yt(y2, a2.value.width, a2.value.height, l.value, u2.value, $3.padding);
        B2(I, m, G2, $3 == null ? void 0 : $3.duration);
      },
      project: (y2) => so(y2, c.value, h2.value, g2.value)
    } : Qc);
  };
  function On(e4, t = 0) {
    return e4.transition().duration(t);
  }
  function In(e4, t) {
    var _a3, _b;
    if (t) {
      const n = e4.position.x + e4.dimensions.width - t.dimensions.width, o = e4.position.y + e4.dimensions.height - t.dimensions.height;
      if (n > 0 || o > 0 || e4.position.x < 0 || e4.position.y < 0) {
        let i = {};
        if (ze(t.style) ? i = __spreadValues({}, t.style(t)) : t.style && (i = __spreadValues({}, t.style)), i.width = (_a3 = i.width) != null ? _a3 : `${t.dimensions.width}px`, i.height = (_b = i.height) != null ? _b : `${t.dimensions.height}px`, n > 0)
          if (Pe(i.width)) {
            const r = Number(i.width.replace("px", ""));
            i.width = `${r + n}px`;
          } else
            i.width += n;
        if (o > 0)
          if (Pe(i.height)) {
            const r = Number(i.height.replace("px", ""));
            i.height = `${r + o}px`;
          } else
            i.height += o;
        if (e4.position.x < 0) {
          const r = Math.abs(e4.position.x);
          if (t.position.x = t.position.x - r, Pe(i.width)) {
            const a2 = Number(i.width.replace("px", ""));
            i.width = `${a2 + r}px`;
          } else
            i.width += r;
          e4.position.x = 0;
        }
        if (e4.position.y < 0) {
          const r = Math.abs(e4.position.y);
          if (t.position.y = t.position.y - r, Pe(i.height)) {
            const a2 = Number(i.height.replace("px", ""));
            i.height = `${a2 + r}px`;
          } else
            i.height += r;
          e4.position.y = 0;
        }
        t.dimensions.width = Number(i.width.toString().replace("px", "")), t.dimensions.height = Number(i.height.toString().replace("px", "")), ze(t.style) ? t.style = (r) => {
          const a2 = t.style;
          return __spreadValues(__spreadValues({}, a2(r)), i);
        } : t.style = __spreadValues(__spreadValues({}, t.style), i);
      }
    }
  }
  function en(e4, t) {
    e4.filter((i) => i.type === "add" || i.type === "remove").forEach((i) => {
      if (i.type === "add")
        t.findIndex((a2) => a2.id === i.item.id) === -1 && t.push(i.item);
      else if (i.type === "remove") {
        const r = t.findIndex((a2) => a2.id === i.id);
        r !== -1 && t.splice(r, 1);
      }
    });
    const o = t.map((i) => i.id);
    return t.forEach((i) => {
      var a2, s2;
      const r = e4.filter((l) => l.id === i.id);
      for (const l of r)
        switch (l.type) {
          case "select":
            i.selected = l.selected;
            break;
          case "position":
            if (et(i) && (typeof l.position < "u" && (i.position = l.position), typeof l.dragging < "u" && (i.dragging = l.dragging), i.expandParent && i.parentNode)) {
              const u2 = t[o.indexOf(i.parentNode)];
              u2 && et(u2) && In(i, u2);
            }
            break;
          case "dimensions":
            if (et(i)) {
              if (typeof l.dimensions < "u" && (i.dimensions = l.dimensions), typeof l.updateStyle < "u" && (i.style = __spreadProps(__spreadValues({}, i.style || {}), {
                width: `${(a2 = l.dimensions) == null ? void 0 : a2.width}px`,
                height: `${(s2 = l.dimensions) == null ? void 0 : s2.height}px`
              })), typeof l.resizing < "u" && (i.resizing = l.resizing), i.expandParent && i.parentNode) {
                const u2 = t[o.indexOf(i.parentNode)];
                u2 && et(u2) && (u2.initialized ? In(i, u2) : (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
                  In(i, u2);
                }));
              }
              i.initialized || (i.initialized = true);
            }
            break;
        }
    }), t;
  }
  function Ie(e4, t) {
    return {
      id: e4,
      type: "select",
      selected: t
    };
  }
  function li(e4) {
    return {
      item: e4,
      type: "add"
    };
  }
  function Tn(e4) {
    return {
      id: e4,
      type: "remove"
    };
  }
  function Pn(e4, t) {
    return e4.reduce((n, o) => {
      let i = t.includes(o.id);
      ue(o.selectable) && !o.selectable && (i = false);
      const r = et(o) ? "changedNodes" : "changedEdges";
      return !o.selected && i ? n[r].push(Ie(o.id, true)) : o.selected && !i && n[r].push(Ie(o.id, false)), n;
    }, { changedNodes: [], changedEdges: [] });
  }
  function ed(e4, t, n, o) {
    let i = false;
    const r = Jc(e4, t), a2 = (v) => {
      var _a3;
      const b = (_a3 = v != null ? v : n.value) != null ? _a3 : [];
      e4.hooks.updateNodeInternals.trigger(b);
    }, s2 = (v) => {
      if (v)
        return e4.nodes && !n.value.length ? e4.nodes.find((b) => b.id === v) : e4.nodes[n.value.indexOf(v)];
    }, l = (v) => {
      if (v)
        return e4.edges && !o.value.length ? e4.edges.find((b) => b.id === v) : e4.edges[o.value.indexOf(v)];
    }, u2 = (v, b, F) => {
      const T = [];
      v.forEach((V) => {
        var _a3, _b;
        var z2, ne;
        const C2 = {
          id: V.id,
          type: "position",
          dragging: F,
          from: V.from
        };
        if (b && (C2.position = V.position, V.parentNode)) {
          const re = s2(V.parentNode);
          C2.position = {
            x: C2.position.x - ((_a3 = (z2 = re == null ? void 0 : re.computedPosition) == null ? void 0 : z2.x) != null ? _a3 : 0),
            y: C2.position.y - ((_b = (ne = re == null ? void 0 : re.computedPosition) == null ? void 0 : ne.y) != null ? _b : 0)
          };
        }
        T.push(C2);
      }), T != null && T.length && e4.hooks.nodesChange.trigger(T);
    }, c = (v) => {
      var V;
      if (!e4.vueFlowRef)
        return;
      const b = e4.vueFlowRef.querySelector(".vue-flow__transformationpane");
      if (!b)
        return;
      let F;
      if ((V = e4.__experimentalFeatures) != null && V.nestedFlow) {
        let C2 = [b], z2 = b, ne;
        for (; !ne && z2; )
          z2 = z2.parentElement, ne = z2 == null ? void 0 : z2.classList.contains("vue-flow__transformationpane"), ne && (C2 = [z2, ...C2]);
        C2.forEach((re) => {
          const fe = window.getComputedStyle(re), { m22: _e } = new window.DOMMatrixReadOnly(fe.transform);
          F ? F *= _e : F = _e;
        });
      } else {
        const C2 = window.getComputedStyle(b), { m22: z2 } = new window.DOMMatrixReadOnly(C2.transform);
        F = z2;
      }
      const T = v.reduce((C2, z2) => {
        const ne = s2(z2.id);
        if (ne) {
          const re = nn(z2.nodeElement);
          !!(re.width && re.height && (ne.dimensions.width !== re.width || ne.dimensions.height !== re.height || z2.forceUpdate)) && (ne.handleBounds.source = Ro(".source", z2.nodeElement, F), ne.handleBounds.target = Ro(".target", z2.nodeElement, F), ne.dimensions = re, ne.initialized = true, C2.push({
            id: ne.id,
            type: "dimensions",
            dimensions: re
          }));
        }
        return C2;
      }, []);
      e4.fitViewOnInit && !i && (pe(() => r.value.initialized).toBe(true).then(() => {
        r.value.fitView();
      }), i = true), T.length && e4.hooks.nodesChange.trigger(T);
    }, h2 = (v, b) => {
      const F = v.map((C2) => C2.id);
      let T, V = [];
      if (e4.multiSelectionActive)
        T = F.map((C2) => Ie(C2, b));
      else {
        const C2 = Pn([...e4.nodes, ...e4.edges], F);
        T = C2.changedNodes, V = C2.changedEdges;
      }
      T.length && e4.hooks.nodesChange.trigger(T), V.length && e4.hooks.edgesChange.trigger(V);
    }, g2 = (v, b) => {
      const F = v.map((C2) => C2.id);
      let T = [], V;
      if (e4.multiSelectionActive)
        V = F.map((C2) => Ie(C2, b));
      else {
        const C2 = Pn([...e4.nodes, ...e4.edges], F);
        T = C2.changedNodes, V = C2.changedEdges;
      }
      T.length && e4.hooks.nodesChange.trigger(T), V.length && e4.hooks.edgesChange.trigger(V);
    }, w2 = (v, b) => {
      const F = v.filter(xt).map((z2) => z2.id), T = v.filter($e).map((z2) => z2.id);
      let { changedNodes: V, changedEdges: C2 } = Pn([...e4.nodes, ...e4.edges], [...F, ...T]);
      e4.multiSelectionActive && (V = F.map((z2) => Ie(z2, b)), C2 = T.map((z2) => Ie(z2, b))), V.length && e4.hooks.nodesChange.trigger(V), C2.length && e4.hooks.edgesChange.trigger(C2);
    }, f = (v) => {
      h2(v, true);
    }, d = (v) => {
      g2(v, true);
    }, _ = (v) => {
      w2(v, true);
    }, x2 = (v) => {
      if (!v.length)
        return h2(v, false);
      const F = v.map((T) => T.id).map((T) => Ie(T, false));
      F.length && e4.hooks.nodesChange.trigger(F);
    }, N = (v) => {
      if (!v.length)
        return g2(v, false);
      const F = v.map((T) => T.id).map((T) => Ie(T, false));
      F.length && e4.hooks.edgesChange.trigger(F);
    }, B2 = (v) => {
      if (!v || !v.length)
        return w2([], false);
      const { changedNodes: b, changedEdges: F } = v.reduce((T, V) => {
        const C2 = Ie(V.id, false);
        return xt(V) ? T.changedNodes.push(C2) : T.changedEdges.push(C2), T;
      }, { changedNodes: [], changedEdges: [] });
      b.length && e4.hooks.nodesChange.trigger(b), F.length && e4.hooks.edgesChange.trigger(F);
    }, y2 = (v) => {
      var b;
      (b = e4.d3Zoom) == null || b.scaleExtent([v, e4.maxZoom]), e4.minZoom = v;
    }, $3 = (v) => {
      var b;
      (b = e4.d3Zoom) == null || b.scaleExtent([e4.minZoom, v]), e4.maxZoom = v;
    }, I = (v) => {
      var b;
      (b = e4.d3Zoom) == null || b.translateExtent(v), e4.translateExtent = v;
    }, m = (v) => {
      e4.nodeExtent = v, a2(n.value);
    }, G2 = (v) => {
      e4.nodesDraggable = v, e4.nodesConnectable = v, e4.elementsSelectable = v;
    }, D = (v) => {
      const b = v instanceof Function ? v(e4.nodes) : v;
      !e4.initialized && !b.length || (e4.nodes = Io(b, e4.nodes, s2, e4.hooks.error.trigger));
    }, M2 = (v) => {
      const b = v instanceof Function ? v(e4.edges) : v;
      if (!e4.initialized && !b.length)
        return;
      const F = e4.isValidConnection ? b.filter((T) => e4.isValidConnection(T, {
        edges: e4.edges,
        sourceNode: s2(T.source),
        targetNode: s2(T.target)
      })) : b;
      e4.edges = F.reduce((T, V) => {
        const C2 = s2(V.source), z2 = s2(V.target), ne = !C2 || typeof C2 > "u", re = !z2 || typeof z2 > "u";
        if (ne && re ? e4.hooks.error.trigger(new ve(he.EDGE_SOURCE_TARGET_MISSING, V.id, V.source, V.target)) : (ne && e4.hooks.error.trigger(new ve(he.EDGE_SOURCE_MISSING, V.id, V.source)), re && e4.hooks.error.trigger(new ve(he.EDGE_TARGET_MISSING, V.id, V.target))), ne || re)
          return T;
        const fe = l(V.id);
        return T.push(__spreadProps(__spreadValues({}, ao(V, Object.assign({}, fe, e4.defaultEdgeOptions))), {
          sourceNode: C2,
          targetNode: z2
        })), T;
      }, []);
    }, H = (v) => {
      const b = v instanceof Function ? v([...e4.nodes, ...e4.edges]) : v;
      !e4.initialized && !b.length || (D(b.filter(xt)), M2(b.filter($e)));
    }, j = (v) => {
      const b = v instanceof Function ? v(e4.nodes) : v, T = Io(b, e4.nodes, s2, e4.hooks.error.trigger).map(li);
      T.length && e4.hooks.nodesChange.trigger(T);
    }, te = (v) => {
      const b = v instanceof Function ? v(e4.edges) : v, T = (e4.isValidConnection ? b.filter((V) => e4.isValidConnection(V, {
        edges: e4.edges,
        sourceNode: s2(V.source),
        targetNode: s2(V.target)
      })) : b).reduce((V, C2) => {
        const z2 = ga(__spreadValues(__spreadValues({}, C2), e4.defaultEdgeOptions), e4.edges, e4.hooks.error.trigger);
        if (z2) {
          const ne = s2(z2.source), re = s2(z2.target), fe = !ne || typeof ne > "u", _e = !re || typeof re > "u";
          if (fe && _e ? e4.hooks.error.trigger(new ve(he.EDGE_SOURCE_TARGET_MISSING, z2.id, z2.source, z2.target)) : (fe && e4.hooks.error.trigger(new ve(he.EDGE_SOURCE_MISSING, z2.id, z2.source)), _e && e4.hooks.error.trigger(new ve(he.EDGE_TARGET_MISSING, z2.id, z2.target))), fe || _e)
            return V;
          V.push(li(__spreadProps(__spreadValues({}, z2), {
            sourceNode: ne,
            targetNode: re
          })));
        }
        return V;
      }, []);
      T.length && e4.hooks.edgesChange.trigger(T);
    }, p = (v, b = true) => {
      const F = v instanceof Function ? v(e4.nodes) : v, T = [], V = [];
      F.forEach((C2) => {
        const z2 = typeof C2 == "string" ? s2(C2) : C2;
        if (!(ue(z2.deletable) && !z2.deletable) && (T.push(Tn(z2.id)), b)) {
          const ne = rn([z2], e4.edges).filter((re) => ue(re.deletable) ? re.deletable : true);
          V.push(...ne.map((re) => Tn(re.id)));
        }
      }), V.length && e4.hooks.edgesChange.trigger(V), T.length && e4.hooks.nodesChange.trigger(T);
    }, R = (v) => {
      const b = v instanceof Function ? v(e4.edges) : v, F = [];
      b.forEach((T) => {
        const V = typeof T == "string" ? l(T) : T;
        ue(V.deletable) && !V.deletable || F.push(Tn(typeof T == "string" ? T : T.id));
      }), e4.hooks.edgesChange.trigger(F);
    }, E2 = (v, b, F = true) => va(v, b, e4.edges, l, F, e4.hooks.error.trigger), L2 = (v) => en(v, e4.nodes), U = (v) => en(v, e4.edges), W = (v, b, F, T = false) => {
      T ? e4.connectionClickStartHandle = v : e4.connectionStartHandle = v, e4.connectionEndHandle = null, e4.connectionStatus = null, b && (e4.connectionPosition = b);
    }, P = (v, b = null, F = null) => {
      e4.connectionStartHandle && (e4.connectionPosition = v, e4.connectionEndHandle = b, e4.connectionStatus = F);
    }, K = (v, b) => {
      e4.connectionPosition = { x: NaN, y: NaN }, e4.connectionStatus = null, b ? e4.connectionClickStartHandle = null : e4.connectionStartHandle = null;
    }, A2 = (v) => {
      const b = ca(v), F = b ? null : s2(v.id);
      return !b && !F ? [null, null, b] : [b ? v : ko(F), F, b];
    }, J = (v, b = true, F) => {
      const [T, V, C2] = A2(v);
      return T ? (F || e4.nodes).filter((z2) => {
        if (!C2 && (z2.id === V.id || !z2.computedPosition))
          return false;
        const ne = ko(z2), re = Ln(ne, T);
        return b && re > 0 || re >= Number(v.width) * Number(v.height);
      }) : [];
    }, Z = (v, b, F = true) => {
      const [T] = A2(v);
      if (!T)
        return false;
      const V = Ln(T, b);
      return F && V > 0 || V >= Number(v.width) * Number(v.height);
    }, q = (v, b) => {
      const { viewport: F, dimensions: T, d3Zoom: V, d3Selection: C2, translateExtent: z2 } = e4;
      if (!V || !C2 || !v.x && !v.y)
        return;
      const ne = ht.translate(F.x + v.x, F.y + v.y).scale(F.zoom), re = [
        [0, 0],
        [T.width, T.height]
      ], fe = V.constrain()(ne, re, z2);
      b == null || b(fe), V.transform(C2, fe);
    }, O = (v) => {
      const b = v instanceof Function ? v(e4) : v, F = [
        "modelValue",
        "nodes",
        "edges",
        "maxZoom",
        "minZoom",
        "translateExtent",
        "nodeExtent",
        "hooks",
        "defaultEdgeOptions"
      ];
      ue(b.defaultEdgeOptions) && (e4.defaultEdgeOptions = b.defaultEdgeOptions);
      const T = b.modelValue || b.nodes || b.edges ? [] : void 0;
      T && (b.modelValue && T.push(...b.modelValue), b.nodes && T.push(...b.nodes), b.edges && T.push(...b.edges), H(T));
      const V = () => {
        ue(b.maxZoom) && $3(b.maxZoom), ue(b.minZoom) && y2(b.minZoom), ue(b.translateExtent) && I(b.translateExtent), ue(b.nodeExtent) && m(b.nodeExtent);
      };
      Object.keys(b).forEach((C2) => {
        const z2 = b[C2];
        !F.includes(C2) && ue(z2) && (e4[C2] = z2);
      }), e4.d3Zoom ? V() : pe(() => e4.d3Zoom).not.toBeUndefined().then(V), e4.initialized || (e4.initialized = true);
    };
    return {
      updateNodePositions: u2,
      updateNodeDimensions: c,
      setElements: H,
      setNodes: D,
      setEdges: M2,
      addNodes: j,
      addEdges: te,
      removeNodes: p,
      removeEdges: R,
      findNode: s2,
      findEdge: l,
      updateEdge: E2,
      applyEdgeChanges: U,
      applyNodeChanges: L2,
      addSelectedElements: _,
      addSelectedNodes: f,
      addSelectedEdges: d,
      setMinZoom: y2,
      setMaxZoom: $3,
      setTranslateExtent: I,
      setNodeExtent: m,
      removeSelectedElements: B2,
      removeSelectedNodes: x2,
      removeSelectedEdges: N,
      startConnection: W,
      updateConnection: P,
      endConnection: K,
      setInteractive: G2,
      setState: O,
      getIntersectingNodes: J,
      isNodeIntersecting: Z,
      panBy: q,
      fitView: async (v = { padding: 0.1 }) => {
        await pe(() => r.value.initialized).toBe(true), r.value.fitView(v);
      },
      zoomIn: async (v) => {
        await pe(() => r.value.initialized).toBe(true), r.value.zoomIn(v);
      },
      zoomOut: async (v) => {
        await pe(() => r.value.initialized).toBe(true), r.value.zoomOut(v);
      },
      zoomTo: async (v, b) => {
        await pe(() => r.value.initialized).toBe(true), r.value.zoomTo(v, b);
      },
      setTransform: async (v, b) => {
        await pe(() => r.value.initialized).toBe(true), r.value.setTransform(v, b);
      },
      getTransform: () => r.value.getTransform(),
      setCenter: async (v, b, F) => {
        await pe(() => r.value.initialized).toBe(true), r.value.setCenter(v, b, F);
      },
      fitBounds: async (v, b) => {
        await pe(() => r.value.initialized).toBe(true), r.value.fitBounds(v, b);
      },
      project: (v) => r.value.project(v),
      toObject: () => JSON.parse(JSON.stringify({
        nodes: e4.nodes.map((v) => {
          const _a3 = v, {
            computedPosition: b,
            handleBounds: F,
            selected: T,
            dimensions: V,
            isParent: C2,
            resizing: z2,
            dragging: ne,
            initialized: re
          } = _a3, fe = __objRest(_a3, [
            "computedPosition",
            "handleBounds",
            "selected",
            "dimensions",
            "isParent",
            "resizing",
            "dragging",
            "initialized"
          ]);
          return fe;
        }),
        edges: e4.edges.map((v) => {
          const _a3 = v, { selected: b, sourceNode: F, targetNode: T } = _a3, V = __objRest(_a3, ["selected", "sourceNode", "targetNode"]);
          return V;
        }),
        position: [e4.viewport.x, e4.viewport.y],
        zoom: e4.viewport.zoom
      })),
      updateNodeInternals: a2,
      $reset: () => {
        e4.edges = [], e4.nodes = [], O(or());
      },
      $destroy: () => {
      }
    };
  }
  var tt = class {
    constructor() {
      this.currentId = 0, this.flows = /* @__PURE__ */ new Map();
    }
    static getInstance() {
      return tt.instance || (tt.instance = new tt()), tt.instance;
    }
    set(t, n) {
      return this.flows.set(t, n);
    }
    get(t) {
      return this.flows.get(t);
    }
    remove(t) {
      return this.flows.delete(t);
    }
    create(t, n) {
      const o = or(n), i = (0, vue_runtime_esm_bundler_exports.reactive)(o), r = (0, vue_runtime_esm_bundler_exports.computed)(() => i.nodes.map((g2) => g2.id)), a2 = (0, vue_runtime_esm_bundler_exports.computed)(() => i.edges.map((g2) => g2.id)), s2 = su(i, r, a2), l = ed(i, s2, r, a2), u2 = {};
      Object.entries(i.hooks).forEach(([g2, w2]) => {
        const f = `on${g2.charAt(0).toUpperCase() + g2.slice(1)}`;
        u2[f] = w2.on;
      });
      const c = {};
      Object.entries(i.hooks).forEach(([g2, w2]) => {
        c[g2] = w2.trigger;
      }), l.setState(i);
      const h2 = __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, u2), s2), l), (0, vue_runtime_esm_bundler_exports.toRefs)(i)), {
        emits: c,
        id: t,
        vueFlowVersion: "1.19.2",
        $destroy: () => {
          this.remove(t);
        }
      });
      return this.set(t, h2), h2;
    }
    getId() {
      return `vue-flow-${this.currentId++}`;
    }
  };
  var de = (e4) => {
    const t = tt.getInstance(), n = (0, vue_runtime_esm_bundler_exports.getCurrentScope)(), o = e4 == null ? void 0 : e4.id, i = (n == null ? void 0 : n.vueFlowId) || o;
    let r, a2 = false;
    if (n) {
      const s2 = (0, vue_runtime_esm_bundler_exports.inject)(To, null);
      typeof s2 < "u" && s2 !== null && (r = s2);
    }
    if (r || i && (r = t.get(i)), !r || r && o && o !== r.id) {
      const s2 = o != null ? o : t.getId();
      r = t.create(s2, e4), n && (a2 = true);
    } else
      e4 && r.setState(e4);
    return n && ((0, vue_runtime_esm_bundler_exports.provide)(To, r), n.vueFlowId = r.id, a2 && Mt(() => {
      if (r) {
        const s2 = t.get(r.id);
        s2 ? s2.$destroy() : wt(`No store instance found for id ${r.id} in storage.`);
      }
    })), r;
  };
  function td(e4, t, n) {
    const o = (0, vue_runtime_esm_bundler_exports.effectScope)();
    return o.run(() => {
      [
        () => {
          o.run(() => {
            let f, d, _ = !!(n.nodes.value.length || n.edges.value.length);
            f = Je([e4.modelValue, () => {
              var x2, N;
              return (N = (x2 = e4.modelValue) == null ? void 0 : x2.value) == null ? void 0 : N.length;
            }], ([x2]) => {
              x2 && Array.isArray(x2) && (d == null || d.pause(), n.setElements(x2), !d && !_ && x2.length ? _ = true : d == null || d.resume());
            }), d = Je([n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length], ([x2, N]) => {
              var B2;
              (B2 = e4.modelValue) != null && B2.value && Array.isArray(e4.modelValue.value) && (f == null || f.pause(), e4.modelValue.value = [...x2, ...N], (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
                f == null || f.resume();
              }));
            }, { immediate: _ }), (0, vue_runtime_esm_bundler_exports.onScopeDispose)(() => {
              f == null || f.stop(), d == null || d.stop();
            });
          });
        },
        () => {
          o.run(() => {
            let f, d, _ = !!n.nodes.value.length;
            f = Je([e4.nodes, () => {
              var x2, N;
              return (N = (x2 = e4.nodes) == null ? void 0 : x2.value) == null ? void 0 : N.length;
            }], ([x2]) => {
              x2 && Array.isArray(x2) && (d == null || d.pause(), n.setNodes(x2), !d && !_ && x2.length ? _ = true : d == null || d.resume());
            }), d = Je([n.nodes, () => n.nodes.value.length], ([x2]) => {
              var N;
              (N = e4.nodes) != null && N.value && Array.isArray(e4.nodes.value) && (f == null || f.pause(), e4.nodes.value = [...x2], (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
                f == null || f.resume();
              }));
            }, { immediate: _ }), (0, vue_runtime_esm_bundler_exports.onScopeDispose)(() => {
              f == null || f.stop(), d == null || d.stop();
            });
          });
        },
        () => {
          o.run(() => {
            let f, d, _ = !!n.edges.value.length;
            f = Je([e4.edges, () => {
              var x2, N;
              return (N = (x2 = e4.edges) == null ? void 0 : x2.value) == null ? void 0 : N.length;
            }], ([x2]) => {
              x2 && Array.isArray(x2) && (d == null || d.pause(), n.setEdges(x2), !d && !_ && x2.length ? _ = true : d == null || d.resume());
            }), d = Je([n.edges, () => n.edges.value.length], ([x2]) => {
              var N;
              (N = e4.edges) != null && N.value && Array.isArray(e4.edges.value) && (f == null || f.pause(), e4.edges.value = [...x2], (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
                f == null || f.resume();
              }));
            }, { immediate: _ }), (0, vue_runtime_esm_bundler_exports.onScopeDispose)(() => {
              f == null || f.stop(), d == null || d.stop();
            });
          });
        },
        () => {
          o.run(() => {
            (0, vue_runtime_esm_bundler_exports.watch)(() => t.minZoom, () => {
              t.minZoom && ue(t.minZoom) && n.setMinZoom(t.minZoom);
            });
          });
        },
        () => {
          o.run(() => {
            (0, vue_runtime_esm_bundler_exports.watch)(() => t.maxZoom, () => {
              t.maxZoom && ue(t.maxZoom) && n.setMaxZoom(t.maxZoom);
            });
          });
        },
        () => {
          o.run(() => {
            (0, vue_runtime_esm_bundler_exports.watch)(() => t.translateExtent, () => {
              t.translateExtent && ue(t.translateExtent) && n.setTranslateExtent(t.translateExtent);
            });
          });
        },
        () => {
          o.run(() => {
            (0, vue_runtime_esm_bundler_exports.watch)(() => t.nodeExtent, () => {
              t.nodeExtent && ue(t.nodeExtent) && n.setNodeExtent(t.nodeExtent);
            });
          });
        },
        () => {
          o.run(() => {
            (0, vue_runtime_esm_bundler_exports.watch)(() => t.applyDefault, () => {
              ue(t.applyDefault) && (n.applyDefault.value = t.applyDefault);
            }), (0, vue_runtime_esm_bundler_exports.watch)(n.applyDefault, (f, d, _) => {
              n.applyDefault.value ? (n.onNodesChange(n.applyNodeChanges), n.onEdgesChange(n.applyEdgeChanges)) : (n.hooks.value.nodesChange.off(n.applyNodeChanges), n.hooks.value.edgesChange.off(n.applyEdgeChanges)), _(() => {
                n.hooks.value.nodesChange.off(n.applyNodeChanges), n.hooks.value.edgesChange.off(n.applyEdgeChanges);
              });
            }, { immediate: true });
          });
        },
        () => {
          o.run(() => {
            const f = async (d) => {
              let _ = d;
              ze(t.autoConnect) && (_ = await t.autoConnect(d)), _ !== false && n.addEdges([_]);
            };
            (0, vue_runtime_esm_bundler_exports.watch)(() => t.autoConnect, () => {
              ue(t.autoConnect) && (n.autoConnect.value = t.autoConnect);
            }), (0, vue_runtime_esm_bundler_exports.watch)(n.autoConnect, (d, _, x2) => {
              d ? n.onConnect(f) : n.hooks.value.connect.off(f), x2(() => {
                n.hooks.value.connect.off(f);
              });
            }, { immediate: true });
          });
        },
        () => {
          const f = [
            "id",
            "modelValue",
            "translateExtent",
            "nodeExtent",
            "edges",
            "nodes",
            "maxZoom",
            "minZoom",
            "applyDefault",
            "autoConnect"
          ];
          Object.keys(t).forEach((d) => {
            if (!f.includes(d)) {
              const _ = (0, vue_runtime_esm_bundler_exports.toRef)(t, d), x2 = n[d];
              o.run(() => {
                (0, vue_runtime_esm_bundler_exports.watch)(_, (N) => {
                  ue(N) && (x2.value = N);
                }, { flush: "pre" });
              });
            }
          });
        }
      ].forEach((f) => f());
    }), () => o.stop();
  }
  function ui(e4, t) {
    return {
      x: e4.clientX - t.left,
      y: e4.clientY - t.top
    };
  }
  var nd = {
    name: "Pane",
    compatConfig: { MODE: 3 }
  };
  var od = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, nd), {
    props: {
      isSelecting: { type: Boolean }
    },
    setup(e4) {
      const {
        id: t,
        vueFlowRef: n,
        getNodes: o,
        getEdges: i,
        viewport: r,
        emits: a2,
        userSelectionActive: s2,
        removeSelectedElements: l,
        panOnDrag: u2,
        userSelectionRect: c,
        elementsSelectable: h2,
        nodesSelectionActive: g2,
        addSelectedElements: w2,
        getSelectedEdges: f,
        getSelectedNodes: d,
        removeNodes: _,
        removeEdges: x2,
        selectionMode: N,
        deleteKeyCode: B2,
        multiSelectionKeyCode: y2,
        multiSelectionActive: $3
      } = de(), I = (0, vue_runtime_esm_bundler_exports.ref)(null), m = (0, vue_runtime_esm_bundler_exports.ref)(0), G2 = (0, vue_runtime_esm_bundler_exports.ref)(0), D = (0, vue_runtime_esm_bundler_exports.ref)(), M2 = (0, vue_runtime_esm_bundler_exports.computed)(() => h2.value && (e4.isSelecting || s2.value));
      _t(B2, (P) => {
        if (!P)
          return;
        const K = o.value.reduce((A2, J) => ((!J.selected && J.parentNode && A2.find((Z) => Z.id === J.parentNode) || J.selected) && A2.push(J), A2), []);
        (K || f.value) && (f.value.length > 0 && x2(f.value), K.length > 0 && _(K), g2.value = false, l());
      }), _t(y2, (P) => {
        $3.value = P;
      });
      function H() {
        s2.value = false, c.value = null, m.value = 0, G2.value = 0;
      }
      function j(P) {
        P.target !== I.value || M2.value || (a2.paneClick(P), l(), g2.value = false);
      }
      function te(P) {
        var K;
        if (P.target === I.value) {
          if (Array.isArray(u2.value) && ((K = u2.value) != null && K.includes(2))) {
            P.preventDefault();
            return;
          }
          a2.paneContextMenu(P);
        }
      }
      function p(P) {
        P.target === I.value && a2.paneScroll(P);
      }
      function R(P) {
        if (D.value = n.value.getBoundingClientRect(), !M2.value || !h2 || !e4.isSelecting || P.button !== 0 || P.target !== I.value || !D.value)
          return;
        const { x: K, y: A2 } = ui(P, D.value);
        l(), c.value = {
          width: 0,
          height: 0,
          startX: K,
          startY: A2,
          x: K,
          y: A2
        }, s2.value = true, a2.selectionStart(P);
      }
      function E2(P) {
        var _a3, _b;
        if (!e4.isSelecting || !D.value || !c.value)
          return;
        if (!M2.value)
          return a2.paneMouseMove(P);
        s2.value || (s2.value = true), g2.value && (g2.value = false);
        const K = ui(P, D.value), A2 = (_a3 = c.value.startX) != null ? _a3 : 0, J = (_b = c.value.startY) != null ? _b : 0, Z = __spreadProps(__spreadValues({}, c.value), {
          x: K.x < A2 ? K.x : A2,
          y: K.y < J ? K.y : J,
          width: Math.abs(K.x - A2),
          height: Math.abs(K.y - J)
        }), q = Ei(o.value, c.value, r.value, N.value === uo.Partial), O = rn(q, i.value);
        m.value = q.length, G2.value = O.length, c.value = Z, w2([...q, ...O]);
      }
      function L2(P) {
        M2.value && P.button === 0 && (!s2.value && c.value && P.target === I.value && j(P), g2.value = m.value > 0, H(), a2.selectionEnd(P));
      }
      function U(P) {
        var K;
        if (!M2.value)
          return a2.paneMouseLeave(P);
        s2.value && (g2.value = m.value > 0, (K = a2.selectionEnd) == null || K.call(a2, P)), H();
      }
      function W(P) {
        M2.value || a2.paneMouseEnter(P);
      }
      return (P, K) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        ref_key: "container",
        ref: I,
        key: `pane-${(0, vue_runtime_esm_bundler_exports.unref)(t)}`,
        class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["vue-flow__pane vue-flow__container", { selection: e4.isSelecting }]),
        onClick: j,
        onContextmenu: te,
        onWheelPassive: p,
        onMouseenter: W,
        onMousedown: R,
        onMousemove: E2,
        onMouseup: L2,
        onMouseleave: U
      }, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(P.$slots, "default"),
        (0, vue_runtime_esm_bundler_exports.unref)(s2) && (0, vue_runtime_esm_bundler_exports.unref)(c) ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)(ou, { key: 0 })) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true),
        (0, vue_runtime_esm_bundler_exports.unref)(g2) && (0, vue_runtime_esm_bundler_exports.unref)(d).length ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)(tu, { key: 1 })) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true)
      ], 34));
    }
  }));
  var id = { class: "vue-flow__nodes vue-flow__container" };
  var rd = {
    name: "Nodes",
    compatConfig: { MODE: 3 }
  };
  var ad = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, rd), {
    setup(e4) {
      const t = (0, vue_runtime_esm_bundler_exports.inject)(an), n = de(), o = (0, vue_runtime_esm_bundler_exports.toRef)(n, "nodesDraggable"), i = (0, vue_runtime_esm_bundler_exports.toRef)(n, "nodesFocusable"), r = (0, vue_runtime_esm_bundler_exports.toRef)(n, "elementsSelectable"), a2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "nodesConnectable"), s2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "getNodes"), l = (0, vue_runtime_esm_bundler_exports.toRef)(n, "getNodesInitialized"), u2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "getNodeTypes"), c = (0, vue_runtime_esm_bundler_exports.toRef)(n, "updateNodeDimensions"), h2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "emits");
      let g2 = (0, vue_runtime_esm_bundler_exports.ref)();
      pe(() => s2.value.length > 0 && l.value.length === s2.value.length).toBe(true).then(() => {
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
          h2.value.nodesInitialized(l.value);
        });
      }), (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        g2.value = new ResizeObserver((N) => {
          const B2 = N.map((y2) => ({
            id: y2.target.getAttribute("data-id"),
            nodeElement: y2.target,
            forceUpdate: true
          }));
          c.value(B2);
        });
      }), (0, vue_runtime_esm_bundler_exports.onBeforeUnmount)(() => {
        var N;
        return (N = g2.value) == null ? void 0 : N.disconnect();
      });
      function w2(N) {
        return typeof N > "u" ? o.value : N;
      }
      function f(N) {
        return typeof N > "u" ? r.value : N;
      }
      function d(N) {
        return typeof N > "u" ? a2.value : N;
      }
      function _(N) {
        return typeof N > "u" ? i.value : N;
      }
      function x2(N, B2) {
        const y2 = N || "default";
        let $3 = B2 != null ? B2 : u2.value[y2];
        const I = (0, vue_runtime_esm_bundler_exports.getCurrentInstance)();
        if (typeof $3 == "string" && I) {
          const G2 = Object.keys(I.appContext.components);
          G2 && G2.includes(y2) && ($3 = (0, vue_runtime_esm_bundler_exports.resolveComponent)(y2, false));
        }
        if (typeof $3 != "string")
          return $3;
        const m = t == null ? void 0 : t[`node-${y2}`];
        return m || (h2.value.error(new ve(he.NODE_TYPE_MISSING, $3)), false);
      }
      return (N, B2) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", id, [
        (0, vue_runtime_esm_bundler_exports.unref)(g2) ? ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, { key: 0 }, (0, vue_runtime_esm_bundler_exports.renderList)((0, vue_runtime_esm_bundler_exports.unref)(s2), (y2) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.unref)($l), {
          id: y2.id,
          key: y2.id,
          "resize-observer": (0, vue_runtime_esm_bundler_exports.unref)(g2),
          type: x2(y2.type, y2.template),
          name: y2.type || "default",
          draggable: w2(y2.draggable),
          selectable: f(y2.selectable),
          connectable: d(y2.connectable),
          focusable: _(y2.focusable),
          node: y2
        }, null, 8, ["id", "resize-observer", "type", "name", "draggable", "selectable", "connectable", "focusable", "node"]))), 128)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true)
      ]));
    }
  }));
  var sd = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"];
  var ld = ["stroke", "stroke-width", "fill"];
  var ud = ["stroke", "stroke-width"];
  var cd = {
    name: "MarkerType",
    compatConfig: { MODE: 3 }
  };
  var dd = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, cd), {
    props: {
      id: null,
      type: null,
      color: { default: "none" },
      width: { default: 12.5 },
      height: { default: 12.5 },
      markerUnits: { default: "strokeWidth" },
      orient: { default: "auto-start-reverse" },
      strokeWidth: { default: 1 }
    },
    setup(e4) {
      return (t, n) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("marker", {
        id: e4.id,
        class: "vue-flow__arrowhead",
        viewBox: "-10 -10 20 20",
        refX: "0",
        refY: "0",
        markerWidth: `${e4.width}`,
        markerHeight: `${e4.height}`,
        markerUnits: e4.markerUnits,
        orient: e4.orient
      }, [
        e4.type === (0, vue_runtime_esm_bundler_exports.unref)(Fn).ArrowClosed ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("polyline", {
          key: 0,
          stroke: e4.color,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": e4.strokeWidth,
          fill: e4.color,
          points: "-5,-4 0,0 -5,4 -5,-4"
        }, null, 8, ld)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true),
        e4.type === (0, vue_runtime_esm_bundler_exports.unref)(Fn).Arrow ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("polyline", {
          key: 1,
          stroke: e4.color,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": e4.strokeWidth,
          fill: "none",
          points: "-5,-4 0,0 -5,4"
        }, null, 8, ud)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true)
      ], 8, sd));
    }
  }));
  var fd = {
    name: "MarkerDefinitions",
    compatConfig: { MODE: 3 }
  };
  var hd = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, fd), {
    setup(e4) {
      const t = de(), n = (0, vue_runtime_esm_bundler_exports.toRef)(t, "id"), o = (0, vue_runtime_esm_bundler_exports.toRef)(t, "edges"), i = (0, vue_runtime_esm_bundler_exports.toRef)(t, "connectionLineOptions"), r = (0, vue_runtime_esm_bundler_exports.toRef)(t, "defaultMarkerColor"), a2 = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        const s2 = [], l = [], u2 = (c) => {
          if (c) {
            const h2 = Xe(c, n.value);
            s2.includes(h2) || (typeof c == "object" ? l.push(__spreadProps(__spreadValues({}, c), { id: h2, color: c.color || r.value })) : l.push({ id: h2, color: r.value, type: c }), s2.push(h2));
          }
        };
        return [i.value.markerEnd, i.value.markerStart].forEach(u2), o.value.reduce((c, h2) => ([h2.markerStart, h2.markerEnd].forEach(u2), c.sort((g2, w2) => g2.id.localeCompare(w2.id))), l), l;
      });
      return (s2, l) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("defs", null, [
        ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)((0, vue_runtime_esm_bundler_exports.unref)(a2), (u2) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)(dd, {
          id: u2.id,
          key: u2.id,
          type: u2.type,
          color: u2.color,
          width: u2.width,
          height: u2.height,
          markerUnits: u2.markerUnits,
          "stroke-width": u2.strokeWidth,
          orient: u2.orient
        }, null, 8, ["id", "type", "color", "width", "height", "markerUnits", "stroke-width", "orient"]))), 128))
      ]));
    }
  }));
  var gd = {
    key: 0,
    class: "vue-flow__edges vue-flow__connectionline vue-flow__container"
  };
  var vd = {
    name: "Edges",
    compatConfig: { MODE: 3 }
  };
  var md = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, vd), {
    setup(e4) {
      const t = (0, vue_runtime_esm_bundler_exports.inject)(an), n = de(), o = (0, vue_runtime_esm_bundler_exports.toRef)(n, "connectionStartHandle"), i = (0, vue_runtime_esm_bundler_exports.toRef)(n, "nodesConnectable"), r = (0, vue_runtime_esm_bundler_exports.toRef)(n, "edgesUpdatable"), a2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "edgesFocusable"), s2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "elementsSelectable"), l = (0, vue_runtime_esm_bundler_exports.toRef)(n, "getSelectedNodes"), u2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "findNode"), c = (0, vue_runtime_esm_bundler_exports.toRef)(n, "getEdges"), h2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "getNodesInitialized"), g2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "getEdgeTypes"), w2 = (0, vue_runtime_esm_bundler_exports.toRef)(n, "elevateEdgesOnSelect"), f = (0, vue_runtime_esm_bundler_exports.toRef)(n, "dimensions"), d = (0, vue_runtime_esm_bundler_exports.toRef)(n, "emits"), _ = wn(() => {
        var m;
        return (m = o.value) == null ? void 0 : m.nodeId;
      }, () => {
        var m;
        return (m = o.value) != null && m.nodeId ? u2.value(o.value.nodeId) : false;
      }), x2 = wn(() => {
        var m;
        return (m = o.value) == null ? void 0 : m.nodeId;
      }, () => {
        var m, G2;
        return !!(_.value && (typeof _.value.connectable > "u" ? i.value : _.value.connectable) && ((m = o.value) != null && m.nodeId) && ((G2 = o.value) != null && G2.type));
      }), N = wn([
        () => c.value.map((m) => m.zIndex),
        () => w2.value ? [l.value.length] : [0],
        () => w2.value ? h2.value.map((m) => m.computedPosition.z) : []
      ], () => _a2(c.value, u2.value, w2.value));
      function B2(m) {
        return typeof m > "u" ? s2.value : m;
      }
      function y2(m) {
        return typeof m > "u" ? r.value : m;
      }
      function $3(m) {
        return typeof m > "u" ? a2.value : m;
      }
      function I(m, G2) {
        const D = m || "default";
        let M2 = G2 != null ? G2 : g2.value[D];
        const H = (0, vue_runtime_esm_bundler_exports.getCurrentInstance)();
        if (typeof M2 == "string" && H) {
          const te = Object.keys(H.appContext.components);
          te && te.includes(D) && (M2 = (0, vue_runtime_esm_bundler_exports.resolveComponent)(D, false));
        }
        if (M2 && typeof M2 != "string")
          return M2;
        const j = t == null ? void 0 : t[`edge-${D}`];
        return j || (d.value.error(new ve(he.EDGE_TYPE_MISSING, M2)), false);
      }
      return (m, G2) => (0, vue_runtime_esm_bundler_exports.unref)(f).width && (0, vue_runtime_esm_bundler_exports.unref)(f).height ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, { key: 0 }, [
        ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)((0, vue_runtime_esm_bundler_exports.unref)(N), (D) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("svg", {
          key: D.level,
          class: "vue-flow__edges vue-flow__container",
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)(`z-index: ${D.level}`)
        }, [
          D.isMaxLevel ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)(hd, { key: 0 })) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true),
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("g", null, [
            ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)(D.edges, (M2) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.unref)(Ul), {
              id: M2.id,
              key: M2.id,
              edge: M2,
              type: I(M2.type, M2.template),
              name: M2.type || "default",
              selectable: B2(M2.selectable),
              updatable: y2(M2.updatable),
              focusable: $3(M2.focusable)
            }, null, 8, ["id", "edge", "type", "name", "selectable", "updatable", "focusable"]))), 128))
          ])
        ], 4))), 128)),
        (0, vue_runtime_esm_bundler_exports.unref)(x2) && (0, vue_runtime_esm_bundler_exports.unref)(_) ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("svg", gd, [
          (0, vue_runtime_esm_bundler_exports.createVNode)(Ql, { "source-node": (0, vue_runtime_esm_bundler_exports.unref)(_) }, null, 8, ["source-node"])
        ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true)
      ], 64)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true);
    }
  }));
  var pd = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", { class: "vue-flow__edge-labels" }, null, -1);
  var yd = {
    name: "Transform",
    compatConfig: { MODE: 3 }
  };
  var xd = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, yd), {
    setup(e4) {
      const _a3 = de(), { id: t, viewport: n, emits: o, d3Zoom: i, d3Selection: r, dimensions: a2 } = _a3, s2 = __objRest(_a3, ["id", "viewport", "emits", "d3Zoom", "d3Selection", "dimensions"]), l = (0, vue_runtime_esm_bundler_exports.ref)(!to);
      return pe(() => i.value && r.value && a2.value.width > 0 && a2.value.height > 0).toBeTruthy().then(() => {
        o.paneReady(__spreadValues({
          id: t,
          viewport: n,
          emits: o,
          d3Zoom: i,
          d3Selection: r,
          dimensions: a2
        }, s2)), setTimeout(() => {
          l.value = true;
        }, 0);
      }), (u2, c) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: `transform-${(0, vue_runtime_esm_bundler_exports.unref)(t)}`,
        class: "vue-flow__transformationpane vue-flow__container",
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
          transform: `translate(${(0, vue_runtime_esm_bundler_exports.unref)(n).x}px,${(0, vue_runtime_esm_bundler_exports.unref)(n).y}px) scale(${(0, vue_runtime_esm_bundler_exports.unref)(n).zoom})`,
          opacity: (0, vue_runtime_esm_bundler_exports.unref)(l) ? void 0 : 0
        })
      }, [
        (0, vue_runtime_esm_bundler_exports.createVNode)(md),
        pd,
        (0, vue_runtime_esm_bundler_exports.createVNode)(ad),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(u2.$slots, "default")
      ], 4));
    }
  }));
  var _d = {
    name: "Viewport",
    compatConfig: { MODE: 3 }
  };
  var wd = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, _d), {
    setup(e4) {
      const t = de(), n = (0, vue_runtime_esm_bundler_exports.toRef)(t, "id"), o = (0, vue_runtime_esm_bundler_exports.toRef)(t, "minZoom"), i = (0, vue_runtime_esm_bundler_exports.toRef)(t, "maxZoom"), r = (0, vue_runtime_esm_bundler_exports.toRef)(t, "defaultViewport"), a2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "translateExtent"), s2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "dimensions"), l = (0, vue_runtime_esm_bundler_exports.toRef)(t, "zoomActivationKeyCode"), u2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "selectionKeyCode"), c = (0, vue_runtime_esm_bundler_exports.toRef)(t, "panActivationKeyCode"), h2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "panOnScroll"), g2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "panOnScrollMode"), w2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "panOnScrollSpeed"), f = (0, vue_runtime_esm_bundler_exports.toRef)(t, "panOnDrag"), d = (0, vue_runtime_esm_bundler_exports.toRef)(t, "zoomOnDoubleClick"), _ = (0, vue_runtime_esm_bundler_exports.toRef)(t, "zoomOnPinch"), x2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "zoomOnScroll"), N = (0, vue_runtime_esm_bundler_exports.toRef)(t, "preventScrolling"), B2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "noWheelClassName"), y2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "noPanClassName"), $3 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "setState"), I = (0, vue_runtime_esm_bundler_exports.toRef)(t, "emits"), m = (0, vue_runtime_esm_bundler_exports.toRef)(t, "connectionStartHandle"), G2 = (0, vue_runtime_esm_bundler_exports.toRef)(t, "userSelectionActive"), D = (0, vue_runtime_esm_bundler_exports.toRef)(t, "paneDragging"), M2 = (0, vue_runtime_esm_bundler_exports.ref)();
      let H = (0, vue_runtime_esm_bundler_exports.ref)(false), j = (0, vue_runtime_esm_bundler_exports.ref)(false), te = (0, vue_runtime_esm_bundler_exports.ref)(false), p = (0, vue_runtime_esm_bundler_exports.ref)(0);
      const R = _t(c.value), E2 = (0, vue_runtime_esm_bundler_exports.computed)(() => !H.value && f.value && R.value), L2 = (0, vue_runtime_esm_bundler_exports.computed)(() => u2.value !== true && H.value || u2.value === true && E2.value !== true);
      let U = (0, vue_runtime_esm_bundler_exports.ref)({
        x: 0,
        y: 0,
        zoom: 0
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        ea(M2, A2);
        const Z = io();
        oo(Z, "resize", A2);
      }), (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        var _a3, _b, _c2;
        const Z = M2.value, q = Z.getBoundingClientRect(), O = jc().scaleExtent([o.value, i.value]).translateExtent(a2.value), Y = we(Z).call(O), v = Y.on("wheel.zoom"), b = ht.translate((_a3 = r.value.x) != null ? _a3 : 0, (_b = r.value.y) != null ? _b : 0).scale(ct((_c2 = r.value.zoom) != null ? _c2 : 1, o.value, i.value)), F = [
          [0, 0],
          [q.width, q.height]
        ], T = O.constrain()(b, F, a2.value);
        O.transform(Y, T), $3.value({
          d3Zoom: O,
          d3Selection: Y,
          d3ZoomHandler: v,
          viewport: { x: T.x, y: T.y, zoom: T.k },
          viewportRef: Z
        }), _t(u2.value, (C2) => {
          H.value = C2;
        });
        const V = _t(l.value);
        (0, vue_runtime_esm_bundler_exports.watchEffect)(() => {
          H.value && G2.value && !j.value ? O.on("zoom", null) : !H.value && !G2.value && O.on("zoom", (C2) => {
            var _a4;
            $3.value({ viewport: { x: C2.transform.x, y: C2.transform.y, zoom: C2.transform.k } });
            const z2 = K(C2.transform);
            te.value = W(f.value, (_a4 = p.value) != null ? _a4 : 0), I.value.viewportChange(z2), I.value.move({ event: C2, flowTransform: z2 });
          });
        }), O.on("start", (C2) => {
          var ne;
          if (!C2.sourceEvent)
            return null;
          p.value = C2.sourceEvent.button, j.value = true;
          const z2 = K(C2.transform);
          ((ne = C2.sourceEvent) == null ? void 0 : ne.type) === "mousedown" && $3.value({ paneDragging: true }), U.value = z2, I.value.viewportChangeStart(z2), I.value.moveStart({ event: C2, flowTransform: z2 });
        }), O.on("end", (C2) => {
          var _a4;
          if (!C2.sourceEvent)
            return null;
          if (j.value = false, $3.value({ paneDragging: false }), W(f.value, (_a4 = p.value) != null ? _a4 : 0) && !te.value && I.value.paneContextMenu(C2.sourceEvent), te.value = false, P(U.value, C2.transform)) {
            const z2 = K(C2.transform);
            U.value = z2, I.value.viewportChangeEnd(z2), I.value.moveEnd({ event: C2, flowTransform: z2 });
          }
        }), (0, vue_runtime_esm_bundler_exports.watchEffect)(() => {
          h2.value && !V.value && !G2.value ? Y.on("wheel.zoom", (C2) => {
            if (J(C2, B2.value))
              return false;
            C2.preventDefault(), C2.stopImmediatePropagation();
            const z2 = Y.property("__zoom").k || 1;
            if (C2.ctrlKey && _.value) {
              const _e = Ne(C2), pr = -C2.deltaY * (C2.deltaMode === 1 ? 0.05 : C2.deltaMode ? 1 : 2e-3) * 10, yr = z2 * 2 ** pr;
              O.scaleTo(Y, yr, _e);
              return;
            }
            const ne = C2.deltaMode === 1 ? 20 : 1, re = g2.value === Xt.Vertical ? 0 : C2.deltaX * ne, fe = g2.value === Xt.Horizontal ? 0 : C2.deltaY * ne;
            O.translateBy(Y, -(re / z2) * w2.value, -(fe / z2) * w2.value);
          }, { passive: false }) : typeof v < "u" && Y.on("wheel.zoom", function(C2, z2) {
            if (!N.value || J(C2, B2.value))
              return null;
            C2.preventDefault(), v.call(this, C2, z2);
          }, { passive: false });
        }), O.filter((C2) => {
          var fe, _e;
          const z2 = V.value || x2.value, ne = _.value && C2.ctrlKey;
          if (C2.button === 1 && C2.type === "mousedown" && ((fe = C2.target) != null && fe.closest(".vue-flow__node") || (_e = C2.target) != null && _e.closest(".vue-flow__edge")))
            return true;
          if (!f.value && !z2 && !h2.value && !d.value && !_.value || G2.value || !d.value && C2.type === "dblclick" || J(C2, B2.value) && C2.type === "wheel" || J(C2, y2.value) && C2.type !== "wheel" || !_.value && C2.ctrlKey && C2.type === "wheel" || !z2 && !h2.value && !ne && C2.type === "wheel" || !f.value && (C2.type === "mousedown" || C2.type === "touchstart") || Array.isArray(f.value) && !f.value.includes(C2.button) && (C2.type === "mousedown" || C2.type === "touchstart"))
            return false;
          const re = Array.isArray(f.value) && f.value.includes(C2.button) || !C2.button || C2.button <= 1;
          return (!C2.ctrlKey || C2.type === "wheel") && re;
        });
      });
      function W(Z, q) {
        return q === 2 && Array.isArray(Z) && Z.includes(2);
      }
      function P(Z, q) {
        return Z.x !== q.x && !isNaN(q.x) || Z.y !== q.y && !isNaN(q.y) || Z.zoom !== q.k && !isNaN(q.k);
      }
      function K(Z) {
        return {
          x: Z.x,
          y: Z.y,
          zoom: Z.k
        };
      }
      function A2() {
        if (!M2.value)
          return;
        const { width: Z, height: q } = nn(M2.value);
        (Z === 0 || q === 0) && I.value.error(new ve(he.MISSING_VIEWPORT_DIMENSIONS)), s2.value.width = Z || 500, s2.value.height = q || 500;
      }
      function J(Z, q) {
        return Z.target.closest(`.${q}`);
      }
      return (Z, q) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, [
        ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          ref_key: "viewportEl",
          ref: M2,
          key: `viewport-${(0, vue_runtime_esm_bundler_exports.unref)(n)}`,
          class: "vue-flow__viewport vue-flow__container"
        }, [
          (0, vue_runtime_esm_bundler_exports.createVNode)(od, {
            "is-selecting": (0, vue_runtime_esm_bundler_exports.unref)(L2),
            class: (0, vue_runtime_esm_bundler_exports.normalizeClass)({ connecting: !!(0, vue_runtime_esm_bundler_exports.unref)(m), dragging: (0, vue_runtime_esm_bundler_exports.unref)(D), draggable: !!(0, vue_runtime_esm_bundler_exports.unref)(f) })
          }, {
            default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
              (0, vue_runtime_esm_bundler_exports.createVNode)(xd, null, {
                default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
                  (0, vue_runtime_esm_bundler_exports.renderSlot)(Z.$slots, "zoom-pane")
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 8, ["is-selecting", "class"])
        ])),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(Z.$slots, "default")
      ], 64));
    }
  }));
  var bd = ["id"];
  var Ed = ["id"];
  var Sd = ["id"];
  var Nd = {
    name: "A11yDescriptions",
    compatConfig: { MODE: 3 }
  };
  var Cd = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, Nd), {
    setup(e4) {
      const { id: t, disableKeyboardA11y: n, ariaLiveMessage: o } = de(), i = {
        position: "absolute",
        width: 1,
        height: 1,
        margin: -1,
        border: 0,
        padding: 0,
        overflow: "hidden",
        clip: "rect(0px, 0px, 0px, 0px)",
        clipPath: "inset(100%)"
      };
      return (r, a2) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
          id: `${(0, vue_runtime_esm_bundler_exports.unref)(Wi)}-${(0, vue_runtime_esm_bundler_exports.unref)(t)}`,
          style: { display: "none" }
        }, " Press enter or space to select a node. " + (0, vue_runtime_esm_bundler_exports.toDisplayString)((0, vue_runtime_esm_bundler_exports.unref)(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, bd),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
          id: `${(0, vue_runtime_esm_bundler_exports.unref)(qi)}-${(0, vue_runtime_esm_bundler_exports.unref)(t)}`,
          style: { display: "none" }
        }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, Ed),
        (0, vue_runtime_esm_bundler_exports.unref)(n) ? (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          key: 0,
          id: `${(0, vue_runtime_esm_bundler_exports.unref)(Sl)}-${(0, vue_runtime_esm_bundler_exports.unref)(t)}`,
          "aria-live": "assertive",
          "aria-atomic": "true",
          style: i
        }, (0, vue_runtime_esm_bundler_exports.toDisplayString)((0, vue_runtime_esm_bundler_exports.unref)(o)), 9, Sd))
      ], 64));
    }
  }));
  var Md = {
    name: "VueFlow",
    compatConfig: { MODE: 3 }
  };
  var Rd = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, Md), {
    props: {
      id: null,
      modelValue: null,
      nodes: null,
      edges: null,
      edgeTypes: null,
      nodeTypes: null,
      connectionMode: null,
      connectionLineType: null,
      connectionLineStyle: { default: void 0 },
      connectionLineOptions: { default: void 0 },
      connectionRadius: null,
      isValidConnection: { type: [Function, null], default: void 0 },
      deleteKeyCode: null,
      selectionKeyCode: null,
      multiSelectionKeyCode: null,
      zoomActivationKeyCode: null,
      panActivationKeyCode: null,
      snapToGrid: { type: Boolean, default: void 0 },
      snapGrid: null,
      onlyRenderVisibleElements: { type: Boolean, default: void 0 },
      edgesUpdatable: { type: [Boolean, String], default: void 0 },
      nodesDraggable: { type: Boolean, default: void 0 },
      nodesConnectable: { type: Boolean, default: void 0 },
      elementsSelectable: { type: Boolean, default: void 0 },
      selectNodesOnDrag: { type: Boolean, default: void 0 },
      panOnDrag: { type: [Boolean, Array], default: void 0 },
      minZoom: null,
      maxZoom: null,
      defaultViewport: null,
      translateExtent: null,
      nodeExtent: null,
      defaultMarkerColor: null,
      zoomOnScroll: { type: Boolean, default: void 0 },
      zoomOnPinch: { type: Boolean, default: void 0 },
      panOnScroll: { type: Boolean, default: void 0 },
      panOnScrollSpeed: null,
      panOnScrollMode: null,
      zoomOnDoubleClick: { type: Boolean, default: void 0 },
      preventScrolling: { type: Boolean, default: void 0 },
      selectionMode: null,
      edgeUpdaterRadius: null,
      fitViewOnInit: { type: Boolean, default: void 0 },
      connectOnClick: { type: Boolean, default: void 0 },
      applyDefault: { type: Boolean, default: void 0 },
      autoConnect: { type: [Boolean, Function], default: void 0 },
      noDragClassName: null,
      noWheelClassName: null,
      noPanClassName: null,
      defaultEdgeOptions: null,
      elevateEdgesOnSelect: { type: Boolean, default: void 0 },
      elevateNodesOnSelect: { type: Boolean, default: void 0 },
      disableKeyboardA11y: { type: Boolean, default: void 0 },
      edgesFocusable: { type: Boolean, default: void 0 },
      nodesFocusable: { type: Boolean, default: void 0 },
      autoPanOnConnect: { type: Boolean, default: void 0 },
      autoPanOnNodeDrag: { type: Boolean, default: void 0 },
      __experimentalFeatures: null
    },
    emits: ["nodesChange", "edgesChange", "nodeDoubleClick", "nodeClick", "nodeMouseEnter", "nodeMouseMove", "nodeMouseLeave", "nodeContextMenu", "nodeDragStart", "nodeDrag", "nodeDragStop", "nodesInitialized", "miniMapNodeClick", "miniMapNodeDoubleClick", "miniMapNodeMouseEnter", "miniMapNodeMouseMove", "miniMapNodeMouseLeave", "connect", "connectStart", "connectEnd", "clickConnectStart", "clickConnectEnd", "moveStart", "move", "moveEnd", "selectionDragStart", "selectionDrag", "selectionDragStop", "selectionContextMenu", "selectionStart", "selectionEnd", "viewportChangeStart", "viewportChange", "viewportChangeEnd", "paneReady", "paneScroll", "paneClick", "paneContextMenu", "paneMouseEnter", "paneMouseMove", "paneMouseLeave", "edgeContextMenu", "edgeMouseEnter", "edgeMouseMove", "edgeMouseLeave", "edgeDoubleClick", "edgeClick", "edgeUpdateStart", "edgeUpdate", "edgeUpdateEnd", "updateNodeInternals", "error", "update:modelValue", "update:nodes", "update:edges"],
    setup(e4, { expose: t, emit: n }) {
      const o = e4, i = yt(o, "modelValue", n), r = yt(o, "nodes", n), a2 = yt(o, "edges", n), _a3 = de(o), { vueFlowRef: s2, hooks: l, getNodeTypes: u2, getEdgeTypes: c } = _a3, h2 = __objRest(_a3, ["vueFlowRef", "hooks", "getNodeTypes", "getEdgeTypes"]), g2 = td({ modelValue: i, nodes: r, edges: a2 }, o, __spreadValues({
        vueFlowRef: s2,
        hooks: l,
        getNodeTypes: u2,
        getEdgeTypes: c
      }, h2));
      la(n, l);
      const w2 = (0, vue_runtime_esm_bundler_exports.ref)();
      return (0, vue_runtime_esm_bundler_exports.provide)(an, (0, vue_runtime_esm_bundler_exports.useSlots)()), (0, vue_runtime_esm_bundler_exports.onUnmounted)(() => {
        g2();
      }), (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        s2.value = w2.value;
      }), t(__spreadValues({
        vueFlowRef: s2,
        hooks: l,
        getNodeTypes: u2,
        getEdgeTypes: c
      }, h2)), (f, d) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        ref_key: "el",
        ref: w2,
        class: "vue-flow"
      }, [
        (0, vue_runtime_esm_bundler_exports.createVNode)(wd, null, {
          nodes: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
            ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)(Object.keys((0, vue_runtime_esm_bundler_exports.unref)(u2)), (_) => (0, vue_runtime_esm_bundler_exports.renderSlot)(f.$slots, `node-${_}`)), 256))
          ]),
          edges: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
            ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)(Object.keys((0, vue_runtime_esm_bundler_exports.unref)(c)), (_) => (0, vue_runtime_esm_bundler_exports.renderSlot)(f.$slots, `edge-${_}`)), 256))
          ]),
          "connection-name": (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
            (0, vue_runtime_esm_bundler_exports.renderSlot)(f.$slots, "connection-line")
          ]),
          "zoom-pane": (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
            (0, vue_runtime_esm_bundler_exports.renderSlot)(f.$slots, "zoom-pane")
          ]),
          default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
            (0, vue_runtime_esm_bundler_exports.renderSlot)(f.$slots, "default")
          ]),
          _: 3
        }),
        (0, vue_runtime_esm_bundler_exports.createVNode)(Cd)
      ], 512));
    }
  }));
  var $d = {
    name: "Panel",
    compatConfig: { MODE: 3 }
  };
  var Vd = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, $d), {
    props: {
      position: null
    },
    setup(e4) {
      const t = e4, { userSelectionActive: n } = de(), o = (0, vue_runtime_esm_bundler_exports.computed)(() => `${t.position}`.split("-"));
      return (i, r) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["vue-flow__panel", (0, vue_runtime_esm_bundler_exports.unref)(o)]),
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ pointerEvents: (0, vue_runtime_esm_bundler_exports.unref)(n) ? "none" : "all" })
      }, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(i.$slots, "default")
      ], 6));
    }
  }));

  // node_modules/@vue-flow/background/dist/vue-flow-background.mjs
  var a = /* @__PURE__ */ ((t) => (t.Lines = "lines", t.Dots = "dots", t))(a || {});
  var z = function({ dimensions: t, size: l, color: d }) {
    return (0, vue_runtime_esm_bundler_exports.h)("path", {
      stroke: d,
      "stroke-width": l,
      d: `M${t[0] / 2} 0 V${t[1]} M0 ${t[1] / 2} H${t[0]}`
    });
  };
  var C = function({ radius: t, color: l }) {
    return (0, vue_runtime_esm_bundler_exports.h)("circle", { cx: t, cy: t, r: t, fill: l });
  };
  a.Lines + "", a.Dots + "";
  var L = ["id", "x", "y", "width", "height", "patternTransform"];
  var B = {
    key: 2,
    height: "100",
    width: "100"
  };
  var S2 = ["fill"];
  var E = ["x", "y", "fill"];
  var M = {
    name: "Background",
    compatConfig: { MODE: 3 }
  };
  var A = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, M), {
    props: {
      id: null,
      variant: { default: a.Dots },
      gap: { default: 20 },
      size: { default: 1 },
      lineWidth: { default: 1 },
      patternColor: null,
      bgColor: null,
      height: { default: 100 },
      width: { default: 100 },
      x: { default: 0 },
      y: { default: 0 },
      offset: { default: 2 }
    },
    setup(t) {
      const l = {
        [a.Dots]: "#81818a",
        [a.Lines]: "#eee"
      }, { id: d, viewport: o } = de(), n = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        const [i, v] = Array.isArray(t.gap) ? t.gap : [t.gap, t.gap], c = [i * o.value.zoom || 1, v * o.value.zoom || 1], f = t.size * o.value.zoom, D = t.variant === a.Dots ? [f / t.offset, f / t.offset] : [c[0] / t.offset, c[1] / t.offset];
        return {
          scaledGap: c,
          offset: D,
          size: f
        };
      }), r = (0, vue_runtime_esm_bundler_exports.computed)(() => `pattern-${d}${t.id ? `-${t.id}` : ""}`), m = (0, vue_runtime_esm_bundler_exports.computed)(() => t.patternColor || l[t.variant || a.Dots]);
      return (i, v) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("svg", {
        class: "vue-flow__background vue-flow__container",
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
          height: `${t.height > 100 ? 100 : t.height}%`,
          width: `${t.width > 100 ? 100 : t.width}%`
        })
      }, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(i.$slots, "pattern-container", { id: (0, vue_runtime_esm_bundler_exports.unref)(r) }, () => [
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("pattern", {
            id: (0, vue_runtime_esm_bundler_exports.unref)(r),
            x: (0, vue_runtime_esm_bundler_exports.unref)(o).x % (0, vue_runtime_esm_bundler_exports.unref)(n).scaledGap[0],
            y: (0, vue_runtime_esm_bundler_exports.unref)(o).y % (0, vue_runtime_esm_bundler_exports.unref)(n).scaledGap[1],
            width: (0, vue_runtime_esm_bundler_exports.unref)(n).scaledGap[0],
            height: (0, vue_runtime_esm_bundler_exports.unref)(n).scaledGap[1],
            patternTransform: `translate(-${(0, vue_runtime_esm_bundler_exports.unref)(n).offset[0]},-${(0, vue_runtime_esm_bundler_exports.unref)(n).offset[1]})`,
            patternUnits: "userSpaceOnUse"
          }, [
            (0, vue_runtime_esm_bundler_exports.renderSlot)(i.$slots, "pattern", {}, () => [
              t.variant === (0, vue_runtime_esm_bundler_exports.unref)(a).Lines ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.unref)(z), {
                key: 0,
                size: t.lineWidth,
                color: (0, vue_runtime_esm_bundler_exports.unref)(m),
                dimensions: (0, vue_runtime_esm_bundler_exports.unref)(n).scaledGap
              }, null, 8, ["size", "color", "dimensions"])) : t.variant === (0, vue_runtime_esm_bundler_exports.unref)(a).Dots ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.unref)(C), {
                key: 1,
                color: (0, vue_runtime_esm_bundler_exports.unref)(m),
                radius: (0, vue_runtime_esm_bundler_exports.unref)(n).size / t.offset
              }, null, 8, ["color", "radius"])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true),
              t.bgColor ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("svg", B, [
                (0, vue_runtime_esm_bundler_exports.createElementVNode)("rect", {
                  width: "100%",
                  height: "100%",
                  fill: t.bgColor
                }, null, 8, S2)
              ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true)
            ])
          ], 8, L)
        ]),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("rect", {
          x: t.x,
          y: t.y,
          width: "100%",
          height: "100%",
          fill: `url(#${(0, vue_runtime_esm_bundler_exports.unref)(r)})`
        }, null, 8, E),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(i.$slots, "default", { id: (0, vue_runtime_esm_bundler_exports.unref)(r) })
      ], 4));
    }
  }));

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/TransitionEdge.vue?type=script
  var __default__ = {
    inheritAttrs: false
  };
  var TransitionEdge_default = /* @__PURE__ */ Object.assign(__default__, {
    __name: "TransitionEdge",
    props: {
      id: { type: String, required: true },
      sourceX: { type: Number, required: true },
      sourceY: { type: Number, required: true },
      targetX: { type: Number, required: true },
      targetY: { type: Number, required: true },
      sourcePosition: { type: String, required: false },
      targetPosition: { type: String, required: false },
      sourceHandle: { type: String, required: false },
      targetHandle: { type: String, required: false },
      source: { type: String, required: false },
      target: { type: String, required: false },
      sourceNode: { type: Object, required: true },
      targetNode: { type: Object, required: true },
      markerEnd: { type: String, required: false },
      selected: { type: Boolean, required: false },
      data: { type: Object, required: false }
    },
    setup(__props, { expose }) {
      expose();
      const props = __props;
      let { findEdge, getSelectedNodes } = de();
      let marker_end = {
        type: "arrow",
        width: 15,
        height: 15,
        strokeWidth: 1.5,
        color: "#687178"
      };
      let marker_end_primary = {
        type: "arrow",
        width: 11,
        height: 11,
        strokeWidth: 1.7,
        color: "#2490ef"
      };
      (0, vue_runtime_esm_bundler_exports.watch)(() => props.selected, (val) => {
        var _a3;
        let target_is_action = (_a3 = props.target) == null ? void 0 : _a3.startsWith("action-");
        val && selectAction(target_is_action);
        if (target_is_action)
          return;
        findEdge(props.id).markerEnd = val ? marker_end_primary : marker_end;
      }, { immediate: true });
      function selectAction(target_is_action) {
        var _a3;
        let action = target_is_action ? props.targetNode : props.sourceNode;
        if (action.selected)
          return;
        (_a3 = getSelectedNodes.value) == null ? void 0 : _a3.forEach((node) => node.selected = false);
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => action.selected = true);
      }
      const d = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        return Kn({
          sourceX: props.sourceX,
          sourceY: props.sourceY,
          targetX: props.targetX,
          targetY: props.targetY,
          sourceHandle: props.sourceHandle,
          targetHandle: props.targetHandle,
          sourcePosition: props.sourcePosition,
          targetPosition: props.targetPosition,
          targetNode: props.targetNode,
          borderRadius: 30
        });
      });
      const __returned__ = { findEdge, getSelectedNodes, props, marker_end, marker_end_primary, selectAction, d, computed: vue_runtime_esm_bundler_exports.computed, nextTick: vue_runtime_esm_bundler_exports.nextTick, watch: vue_runtime_esm_bundler_exports.watch, getSmoothStepPath: Kn, SmoothStepEdge: tr, useVueFlow: de, EdgeLabelRenderer: Ad };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/TransitionEdge.vue?type=template
  var _hoisted_1 = ["innerHTML"];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, [
      (0, vue_runtime_esm_bundler_exports.createVNode)($setup["SmoothStepEdge"], {
        class: "transition-edge",
        id: $props.id,
        path: $setup.d[0],
        markerEnd: $props.markerEnd
      }, null, 8, ["id", "path", "markerEnd"]),
      $props.markerEnd == "url(#)" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)($setup["EdgeLabelRenderer"], { key: 0 }, {
        default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
            onClick: _cache[0] || (_cache[0] = (0, vue_runtime_esm_bundler_exports.withModifiers)(($event) => $setup.selectAction(true), ["stop"])),
            style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
              transform: `translate(-50%, -50%) translate(${$setup.d[1]}px, ${$setup.d[2]}px)`,
              borderColor: $props.selected ? "var(--primary)" : "var(--gray-600)",
              borderWidth: $props.selected ? "1.5px" : "1px"
            }),
            class: "access nodrag nopan"
          }, [
            (0, vue_runtime_esm_bundler_exports.createElementVNode)("span", {
              class: "mr-1",
              innerHTML: _ctx.frappe.utils.icon("users", "sm")
            }, null, 8, _hoisted_1),
            (0, vue_runtime_esm_bundler_exports.createElementVNode)("span", null, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.targetNode.data.allowed), 1)
          ], 4)
        ]),
        _: 1
      })) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 64);
  }

  // frappe/public/js/workflow_builder/components/TransitionEdge.vue
  TransitionEdge_default.render = render;
  TransitionEdge_default.__file = "frappe/public/js/workflow_builder/components/TransitionEdge.vue";
  TransitionEdge_default.__scopeId = "data-v-0c1414ff";
  var TransitionEdge_default2 = TransitionEdge_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/StateNode.vue?type=script
  var StateNode_default = {
    __name: "StateNode",
    props: {
      node: {
        type: Object,
        required: true
      }
    },
    setup(__props, { expose }) {
      expose();
      const props = __props;
      const isValidConnection = ({ source, target }) => {
        if (source.startsWith("action-") && !target.startsWith("action-") || !source.startsWith("action-") && target.startsWith("action-")) {
          return false;
        }
        return source !== target;
      };
      let store = useStore();
      const { findNode } = de();
      (0, vue_runtime_esm_bundler_exports.watch)(() => {
        var _a3;
        return (_a3 = findNode(props.node.id)) == null ? void 0 : _a3.selected;
      }, (val) => {
        if (val)
          store.workflow.selected = props.node;
      });
      let label = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var _a3, _b;
        return (_b = (_a3 = findNode(props.node.id)) == null ? void 0 : _a3.data) == null ? void 0 : _b.state;
      });
      (0, vue_runtime_esm_bundler_exports.watch)(() => props.node.data, () => {
        store.ref_history.commit();
      }, { deep: true });
      const __returned__ = { props, isValidConnection, store, findNode, label, Handle: Zt, useVueFlow: de, watch: vue_runtime_esm_bundler_exports.watch, computed: vue_runtime_esm_bundler_exports.computed, useStore };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/StateNode.vue?type=template
  var _hoisted_12 = {
    key: 0,
    class: "node-label"
  };
  var _hoisted_2 = {
    key: 1,
    class: "node-placeholder text-muted"
  };
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: "node",
      tabindex: "0",
      onClick: _cache[0] || (_cache[0] = (0, vue_runtime_esm_bundler_exports.withModifiers)(($event) => $setup.store.workflow.selected = $props.node, ["stop"]))
    }, [
      $setup.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_12, (0, vue_runtime_esm_bundler_exports.toDisplayString)($setup.label), 1)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_2, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("No Label")), 1)),
      ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)(["top", "right", "bottom", "left"], (handle) => {
        return (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Handle"], {
          class: "handle",
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ [handle]: "-12px" }),
          type: "source",
          position: handle,
          id: handle,
          isValidConnection: $setup.isValidConnection
        }, null, 8, ["style", "position", "id"]);
      }), 64))
    ]);
  }

  // frappe/public/js/workflow_builder/components/StateNode.vue
  StateNode_default.render = render2;
  StateNode_default.__file = "frappe/public/js/workflow_builder/components/StateNode.vue";
  StateNode_default.__scopeId = "data-v-a0c0593e";
  var StateNode_default2 = StateNode_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/ActionNode.vue?type=script
  var ActionNode_default = {
    __name: "ActionNode",
    props: {
      node: {
        type: Object,
        required: true
      }
    },
    setup(__props, { expose }) {
      expose();
      const props = __props;
      const isValidConnection = ({ source, target }) => {
        if (source.startsWith("action-") && !target.startsWith("action-") || !source.startsWith("action-") && target.startsWith("action-") || source.startsWith("action-") && target.startsWith("action-")) {
          return false;
        }
        return source !== target;
      };
      let store = useStore();
      const { edges, findNode } = de();
      (0, vue_runtime_esm_bundler_exports.watch)(() => {
        var _a3;
        return (_a3 = findNode(props.node.id)) == null ? void 0 : _a3.selected;
      }, (val) => {
        if (val)
          store.workflow.selected = props.node;
        let connected_edges = edges.value.filter((edge) => edge.source === props.node.id || edge.target === props.node.id);
        connected_edges.forEach((edge) => edge.selected = val);
      });
      let label = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var _a3, _b;
        return (_b = (_a3 = findNode(props.node.id)) == null ? void 0 : _a3.data) == null ? void 0 : _b.action;
      });
      (0, vue_runtime_esm_bundler_exports.watch)(() => props.node.data, () => {
        store.ref_history.commit();
      }, { deep: true });
      const __returned__ = { props, isValidConnection, store, edges, findNode, label, Handle: Zt, useVueFlow: de, watch: vue_runtime_esm_bundler_exports.watch, computed: vue_runtime_esm_bundler_exports.computed, useStore };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/ActionNode.vue?type=template
  var _hoisted_13 = {
    key: 0,
    class: "node-label"
  };
  var _hoisted_22 = {
    key: 1,
    class: "node-placeholder text-muted"
  };
  function render3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: "node",
      tabindex: "0",
      onClick: _cache[1] || (_cache[1] = (0, vue_runtime_esm_bundler_exports.withModifiers)(($event) => $setup.store.workflow.selected = $props.node, ["stop"]))
    }, [
      $setup.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_13, (0, vue_runtime_esm_bundler_exports.toDisplayString)($setup.label), 1)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_22, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("No Label")), 1)),
      ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)(["top", "right", "bottom", "left"], (handle) => {
        return (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Handle"], {
          class: "handle",
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ [handle]: "-3px", opacity: 0 }),
          type: "source",
          position: handle,
          id: handle,
          isValidConnection: $setup.isValidConnection,
          onClick: _cache[0] || (_cache[0] = (0, vue_runtime_esm_bundler_exports.withModifiers)(() => {
          }, ["stop"]))
        }, null, 8, ["style", "position", "id"]);
      }), 64))
    ]);
  }

  // frappe/public/js/workflow_builder/components/ActionNode.vue
  ActionNode_default.render = render3;
  ActionNode_default.__file = "frappe/public/js/workflow_builder/components/ActionNode.vue";
  ActionNode_default.__scopeId = "data-v-2ee7d402";
  var ActionNode_default2 = ActionNode_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/ConnectionLine.vue?type=script
  var ConnectionLine_default = {
    __name: "ConnectionLine",
    props: {
      sourceX: { type: Number, required: true },
      sourceY: { type: Number, required: true },
      targetX: { type: Number, required: true },
      targetY: { type: Number, required: true },
      sourcePosition: { type: String, required: false },
      targetPosition: { type: String, required: false },
      sourceHandle: { type: Object, required: false },
      targetHandle: { type: Object, required: false },
      markerEnd: { type: String, required: false }
    },
    setup(__props, { expose }) {
      expose();
      const props = __props;
      let opposite = {
        left: "left",
        right: "right",
        top: "bottom",
        bottom: "top"
      };
      const d = (0, vue_runtime_esm_bundler_exports.computed)(() => Kn(__spreadProps(__spreadValues({}, props), {
        borderRadius: 30,
        targetPosition: opposite[props.targetPosition]
      })));
      const __returned__ = { props, opposite, d, getSmoothStepPath: Kn, SmoothStepEdge: tr, computed: vue_runtime_esm_bundler_exports.computed };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/ConnectionLine.vue?type=template
  function render4(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)($setup["SmoothStepEdge"], {
      class: "animated",
      path: $setup.d[0]
    }, null, 8, ["path"]);
  }

  // frappe/public/js/workflow_builder/components/ConnectionLine.vue
  ConnectionLine_default.render = render4;
  ConnectionLine_default.__file = "frappe/public/js/workflow_builder/components/ConnectionLine.vue";
  var ConnectionLine_default2 = ConnectionLine_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Properties.vue?type=script
  var Properties_default = {
    __name: "Properties",
    setup(__props, { expose }) {
      expose();
      let store = useStore();
      let { nodes } = de();
      let title = (0, vue_runtime_esm_bundler_exports.ref)("Workflow Details");
      let doc = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        return store.workflow.selected ? store.workflow.selected.data : store.workflow_doc;
      });
      let properties = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
          let field = $(".field input[data-fieldname!='document_type']").first();
          if (field.val() === "")
            field.focus();
        });
        if (store.workflow.selected && "action" in store.workflow.selected.data) {
          title.value = "Transition Properties";
          return store.transitionfields.filter((df) => {
            if (in_list(["action", "allowed", "allow_self_approval", "condition"], df.fieldname)) {
              return true;
            }
            return false;
          });
        } else if (store.workflow.selected && "state" in store.workflow.selected.data) {
          title.value = "State Properties";
          let allow_edit = store.statefields.find((df) => df.fieldname == "allow_edit");
          store.statefields = store.statefields.filter((df) => df.fieldname != "allow_edit");
          store.statefields.splice(2, 0, allow_edit);
          return store.statefields.filter((df) => {
            if (df.fieldname == "doc_status") {
              df.options = ["Draft", "Submitted", "Cancelled"];
              df.description = "";
            }
            if (df.fieldname == "state") {
              let filter = nodes.value.filter((state) => state.type == "state").map((node) => node.data.state);
              if (doc.value.state) {
                filter = filter.filter((state) => state !== doc.value.state);
              }
              df.filters = {
                name: ["not in", filter]
              };
            }
            if (df.fieldname == "update_field") {
              df.options = store.workflow_doc_fields;
            }
            return true;
          });
        }
        title.value = "Workflow Details";
        return store.workflowfields.filter((df) => {
          if (in_list(["states", "transitions", "workflow_data", "workflow_name"], df.fieldname)) {
            return false;
          }
          return true;
        });
      });
      const __returned__ = { store, nodes, title, doc, properties, ref: vue_runtime_esm_bundler_exports.ref, computed: vue_runtime_esm_bundler_exports.computed, nextTick: vue_runtime_esm_bundler_exports.nextTick, useStore, useVueFlow: de };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Properties.vue?type=template
  var _hoisted_14 = { class: "title" };
  var _hoisted_23 = { class: "properties" };
  var _hoisted_3 = { class: "control-data" };
  var _hoisted_4 = { key: 0 };
  function render5(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_14, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__($setup.title)), 1),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_23, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_3, [
          $setup.doc ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_4, [
            ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)($setup.properties, (df) => {
              return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
                class: "field",
                key: df.name
              }, [
                ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.resolveDynamicComponent)(df.fieldtype.replace(" ", "") + "Control"), {
                  df,
                  value: $setup.doc[df.fieldname],
                  modelValue: $setup.doc[df.fieldname],
                  "onUpdate:modelValue": ($event) => $setup.doc[df.fieldname] = $event,
                  "data-fieldname": df.fieldname,
                  "data-fieldtype": df.fieldtype
                }, null, 8, ["df", "value", "modelValue", "onUpdate:modelValue", "data-fieldname", "data-fieldtype"]))
              ]);
            }), 128))
          ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
        ])
      ])
    ], 64);
  }

  // frappe/public/js/workflow_builder/components/Properties.vue
  Properties_default.render = render5;
  Properties_default.__file = "frappe/public/js/workflow_builder/components/Properties.vue";
  Properties_default.__scopeId = "data-v-fb74ba4f";
  var Properties_default2 = Properties_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Sidebar.vue?type=script
  var Sidebar_default = {
    __name: "Sidebar",
    setup(__props, { expose }) {
      expose();
      let sidebar_width = (0, vue_runtime_esm_bundler_exports.ref)(272);
      let sidebar_resizing = (0, vue_runtime_esm_bundler_exports.ref)(false);
      function start_resize() {
        $(document).on("mousemove", resize);
        $(document).on("mouseup", () => {
          $(".main").removeClass("resizing");
          sidebar_resizing.value = false;
          $(document).off("mousemove", resize);
        });
      }
      function resize(e4) {
        sidebar_resizing.value = true;
        $(".main").addClass("resizing");
        sidebar_width.value = e4.clientX - 90;
        if (sidebar_width.value < 16 * 16) {
          sidebar_width.value = 16 * 16;
        }
        if (sidebar_width.value > 24 * 16) {
          sidebar_width.value = 24 * 16;
        }
      }
      const __returned__ = { sidebar_width, sidebar_resizing, start_resize, resize, Properties: Properties_default2, ref: vue_runtime_esm_bundler_exports.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Sidebar.vue?type=template
  function render6(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
        class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["sidebar-resizer", $setup.sidebar_resizing ? "resizing" : ""]),
        onMousedown: $setup.start_resize
      }, null, 34),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ width: `${$setup.sidebar_width}px` })
      }, [
        (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Properties"])
      ], 4)
    ], 64);
  }

  // frappe/public/js/workflow_builder/components/Sidebar.vue
  Sidebar_default.render = render6;
  Sidebar_default.__file = "frappe/public/js/workflow_builder/components/Sidebar.vue";
  Sidebar_default.__scopeId = "data-v-e852f9f4";
  var Sidebar_default2 = Sidebar_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/WorkflowBuilder.vue?type=script
  var WorkflowBuilder_default = {
    __name: "WorkflowBuilder",
    setup(__props, { expose }) {
      expose();
      let store = useStore();
      const {
        nodes,
        getEdges,
        getSelectedNodes,
        findNode,
        onNodeDragStop,
        onConnect,
        onEdgeUpdate,
        onEdgeUpdateEnd,
        addNodes,
        addEdges,
        setEdges,
        updateEdge,
        removeNodes,
        endConnection,
        onPaneReady,
        fitView,
        zoomIn,
        zoomOut,
        project,
        vueFlowRef
      } = de();
      let main = (0, vue_runtime_esm_bundler_exports.ref)(null);
      onClickOutside(main, loose_focus);
      const {
        meta_s,
        ctrl_s,
        Backspace,
        meta_backspace,
        ctrl_backspace
      } = useMagicKeys();
      whenever(() => meta_s.value || ctrl_s.value, () => {
        store.save_changes();
      });
      const activeElement = useActiveElement();
      const notUsingInput = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var _a3, _b;
        return ((_a3 = activeElement.value) == null ? void 0 : _a3.tagName) !== "INPUT" && ((_b = activeElement.value) == null ? void 0 : _b.tagName) !== "TEXTAREA";
      });
      whenever(() => Backspace.value || meta_backspace.value || ctrl_backspace.value, () => {
        var _a3;
        if (meta_backspace.value || ctrl_backspace.value)
          return;
        if (store.workflow.selected) {
          if (notUsingInput.value && (store.workflow.selected.type === "state" || store.workflow.selected.type === "action")) {
            removeNodes([store.workflow.selected.id]);
            if ((_a3 = store.workflow.selected.data) == null ? void 0 : _a3.state) {
              let connected_nodes = [];
              connected_nodes = nodes.value.filter((node) => node.data.from == store.workflow.selected.data.state || node.data.to == store.workflow.selected.data.state).map((node) => node.id);
              removeNodes(connected_nodes);
            }
            store.workflow.selected = null;
            (0, vue_runtime_esm_bundler_exports.nextTick)(() => store.ref_history.commit());
          }
        }
      });
      onNodeDragStop(() => {
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => store.ref_history.commit());
      });
      onConnect((edge) => {
        let source_node = findNode(edge.source);
        let target_node = findNode(edge.target);
        let error = validate_transitions(source_node.data, target_node.data);
        if (error) {
          endConnection();
          (0, vue_runtime_esm_bundler_exports.nextTick)(() => frappe.throw({
            title: "Invalid Transition",
            message: error
          }));
          return;
        }
        let source_center = {
          x: source_node.position.x + source_node.dimensions.width / 2,
          y: source_node.position.y + source_node.dimensions.height / 2
        };
        let target_center = {
          x: target_node.position.x + target_node.dimensions.width / 2,
          y: target_node.position.y + target_node.dimensions.height / 2
        };
        let center_x = (source_center.x + target_center.x) / 2;
        let center_y = source_center.y;
        const action_node = {
          id: "action-" + frappe.utils.get_random(5),
          type: "action",
          position: { x: center_x, y: center_y },
          selected: true,
          data: {
            action: "",
            allowed: "All",
            from: source_node.data.state,
            to: target_node.data.state
          }
        };
        addNodes([action_node]);
        let action_edge = {
          source: edge.source,
          sourceHandle: edge.sourceHandle,
          target: action_node.id,
          targetHandle: "left",
          type: "transition",
          updatable: true,
          animated: true
        };
        let state_edge = {
          source: action_node.id,
          sourceHandle: "right",
          target: edge.target,
          targetHandle: edge.targetHandle,
          type: "transition",
          updatable: true,
          animated: true
        };
        addEdges([action_edge, state_edge]);
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
          const node = findNode(action_node.id);
          const stop = (0, vue_runtime_esm_bundler_exports.watch)(() => node.dimensions, (dimensions) => {
            if (dimensions.width > 0 && dimensions.height > 0) {
              node.position = {
                x: node.position.x - node.dimensions.width / 2,
                y: node.position.y - node.dimensions.height / 2
              };
              stop();
              node.selected = true;
              store.workflow.selected = node;
              store.ref_history.commit();
            }
          }, { deep: true, flush: "post" });
        });
      });
      onEdgeUpdateEnd(({ edge }) => {
        var _a3;
        (_a3 = getSelectedNodes.value) == null ? void 0 : _a3.forEach((node) => node.selected = false);
        if (edge.source.startsWith("action-")) {
          setTimeout(() => findNode(edge.source).selected = true);
        } else if (edge.target.startsWith("action-")) {
          setTimeout(() => findNode(edge.target).selected = true);
        }
      });
      onEdgeUpdate(({ edge, connection }) => {
        if (connection.source == edge.source && connection.target != edge.target || connection.source != edge.source && connection.target == edge.target || connection.source === connection.target)
          return;
        updateEdge(edge, connection);
        setEdges(getEdges.value);
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => store.ref_history.commit());
      });
      function onDragOver(event) {
        event.preventDefault();
        if (event.dataTransfer) {
          event.dataTransfer.dropEffect = "move";
        }
      }
      function onDrop(event) {
        var _a3;
        const { left, top } = vueFlowRef.value.getBoundingClientRect();
        (_a3 = getSelectedNodes.value) == null ? void 0 : _a3.forEach((node) => node.selected = false);
        const position = project({
          x: event.clientX - left,
          y: event.clientY - top
        });
        let state_ids = nodes.value.filter((node) => node.type == "state").map((node) => node.id);
        let state_id = state_ids.length ? (Math.max(...state_ids) + 1).toString() : "1";
        const new_state = {
          id: state_id,
          type: "state",
          position,
          selected: true,
          data: {
            state: "",
            doc_status: "Draft",
            allow_edit: "All"
          }
        };
        addNodes([new_state]);
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
          const node = findNode(new_state.id);
          const stop = (0, vue_runtime_esm_bundler_exports.watch)(() => node.dimensions, (dimensions) => {
            if (dimensions.width > 0 && dimensions.height > 0) {
              node.position = {
                x: node.position.x - node.dimensions.width / 2,
                y: node.position.y - node.dimensions.height / 2
              };
              stop();
              store.workflow.selected = node;
              store.ref_history.commit();
            }
          }, { deep: true, flush: "post" });
        });
      }
      function onDragStart(event) {
        if (event.dataTransfer) {
          event.dataTransfer.effectAllowed = "move";
        }
        loose_focus();
      }
      function loose_focus() {
        var _a3;
        (_a3 = getSelectedNodes.value) == null ? void 0 : _a3.forEach((node) => node.selected = false);
        store.workflow.selected = null;
      }
      onPaneReady(() => fitView());
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => store.fetch());
      const __returned__ = { store, nodes, getEdges, getSelectedNodes, findNode, onNodeDragStop, onConnect, onEdgeUpdate, onEdgeUpdateEnd, addNodes, addEdges, setEdges, updateEdge, removeNodes, endConnection, onPaneReady, fitView, zoomIn, zoomOut, project, vueFlowRef, main, meta_s, ctrl_s, Backspace, meta_backspace, ctrl_backspace, activeElement, notUsingInput, onDragOver, onDrop, onDragStart, loose_focus, VueFlow: Rd, useVueFlow: de, Panel: Vd, PanelPosition: ma, Background: A, TransitionEdge: TransitionEdge_default2, StateNode: StateNode_default2, ActionNode: ActionNode_default2, ConnectionLine: ConnectionLine_default2, Sidebar: Sidebar_default2, useStore, validate_transitions, ref: vue_runtime_esm_bundler_exports.ref, computed: vue_runtime_esm_bundler_exports.computed, nextTick: vue_runtime_esm_bundler_exports.nextTick, onMounted: vue_runtime_esm_bundler_exports.onMounted, watch: vue_runtime_esm_bundler_exports.watch, onClickOutside, useMagicKeys, whenever, useActiveElement };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/WorkflowBuilder.vue?type=template
  var _hoisted_15 = {
    class: "main",
    ref: "main"
  };
  var _hoisted_24 = ["onClick"];
  var _hoisted_32 = { class: "empty-state" };
  function render7(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_15, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
        class: "sidebar-container",
        onClick: _cache[0] || (_cache[0] = (0, vue_runtime_esm_bundler_exports.withModifiers)(() => {
        }, ["stop"]))
      }, [
        (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Sidebar"])
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
        class: "workflow-container",
        onDrop: $setup.onDrop,
        onClick: (0, vue_runtime_esm_bundler_exports.withModifiers)($setup.loose_focus, ["stop"])
      }, [
        (0, vue_runtime_esm_bundler_exports.createVNode)($setup["VueFlow"], {
          modelValue: $setup.store.workflow.elements,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.store.workflow.elements = $event),
          "connection-mode": "loose",
          onDragover: $setup.onDragOver,
          "delete-key-code": null
        }, {
          "node-state": (0, vue_runtime_esm_bundler_exports.withCtx)((node) => [
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["StateNode"], { node }, null, 8, ["node"])
          ]),
          "node-action": (0, vue_runtime_esm_bundler_exports.withCtx)((node) => [
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["ActionNode"], { node }, null, 8, ["node"])
          ]),
          "edge-transition": (0, vue_runtime_esm_bundler_exports.withCtx)((props) => [
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["TransitionEdge"], (0, vue_runtime_esm_bundler_exports.normalizeProps)((0, vue_runtime_esm_bundler_exports.guardReactiveProps)(props)), null, 16)
          ]),
          "connection-line": (0, vue_runtime_esm_bundler_exports.withCtx)((props) => [
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["ConnectionLine"], (0, vue_runtime_esm_bundler_exports.normalizeProps)((0, vue_runtime_esm_bundler_exports.guardReactiveProps)(props)), null, 16)
          ]),
          default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Background"], {
              "pattern-color": "#aaa",
              gap: "10"
            }),
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Panel"], {
              position: $setup.PanelPosition.TopRight
            }, {
              default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
                (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_32, [
                  (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
                    class: "btn btn-md drag-handle",
                    draggable: true,
                    onDragstart: $setup.onDragStart
                  }, " Drag to add state ", 32)
                ])
              ]),
              _: 1
            }, 8, ["position"]),
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Panel"], {
              position: $setup.PanelPosition.BottomLeft
            }, {
              default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
                (0, vue_runtime_esm_bundler_exports.createElementVNode)("button", {
                  class: "btn btn-sm btn-default mr-2",
                  onClick: _cache[1] || (_cache[1] = (...args) => $setup.zoomIn && $setup.zoomIn(...args))
                }, " + "),
                (0, vue_runtime_esm_bundler_exports.createElementVNode)("button", {
                  class: "btn btn-sm btn-default mr-2",
                  onClick: _cache[2] || (_cache[2] = (...args) => $setup.zoomOut && $setup.zoomOut(...args))
                }, " - "),
                (0, vue_runtime_esm_bundler_exports.createElementVNode)("button", {
                  class: "btn btn-sm btn-default",
                  onClick: _cache[3] || (_cache[3] = ($event) => $setup.fitView())
                }, " Fit ")
              ]),
              _: 1
            }, 8, ["position"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 40, _hoisted_24)
    ], 512);
  }

  // frappe/public/js/workflow_builder/WorkflowBuilder.vue
  WorkflowBuilder_default.render = render7;
  WorkflowBuilder_default.__file = "frappe/public/js/workflow_builder/WorkflowBuilder.vue";
  WorkflowBuilder_default.__scopeId = "data-v-c4748aba";
  var WorkflowBuilder_default2 = WorkflowBuilder_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/AttachControl.vue?type=script
  var AttachControl_default = {
    __name: "AttachControl",
    props: ["df"],
    setup(__props, { expose }) {
      expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/AttachControl.vue?type=template
  var _hoisted_16 = { class: "control editable" };
  var _hoisted_25 = { class: "field-controls" };
  var _hoisted_33 = { class: "btn btn-sm btn-default" };
  var _hoisted_42 = ["innerHTML"];
  function render8(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_16, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_25, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label"),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions")
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" attach button "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("button", _hoisted_33, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Attach")), 1),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_42)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/AttachControl.vue
  AttachControl_default.render = render8;
  AttachControl_default.__file = "frappe/public/js/form_builder/components/controls/AttachControl.vue";
  var AttachControl_default2 = AttachControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/ButtonControl.vue?type=script
  var ButtonControl_default = {
    __name: "ButtonControl",
    props: ["df", "value"],
    setup(__props, { expose }) {
      expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/ButtonControl.vue?type=template
  var _hoisted_17 = ["data-fieldtype"];
  var _hoisted_26 = { class: "field-controls" };
  var _hoisted_34 = { key: 0 };
  var _hoisted_43 = {
    key: 1,
    class: "btn btn-xs btn-default"
  };
  var _hoisted_5 = ["innerHTML"];
  function render9(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: "control frappe-control editable",
      "data-fieldtype": $props.df.fieldtype
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_26, [
        $props.df.fieldtype == "Heading" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("h4", _hoisted_34, [
          (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true)
        ])) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("button", _hoisted_43, [
          (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true)
        ])),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_5)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 8, _hoisted_17);
  }

  // frappe/public/js/form_builder/components/controls/ButtonControl.vue
  ButtonControl_default.render = render9;
  ButtonControl_default.__file = "frappe/public/js/form_builder/components/controls/ButtonControl.vue";
  ButtonControl_default.__scopeId = "data-v-ab7ce511";
  var ButtonControl_default2 = ButtonControl_default;

  // frappe/public/js/form_builder/utils.js
  function create_layout(fields) {
    let store = useStore2();
    let layout = {
      tabs: []
    };
    let tab = null, section = null, column = null;
    function set_tab(df) {
      tab = get_new_tab(df);
      column = null;
      section = null;
      layout.tabs.push(tab);
    }
    function set_section(df) {
      if (!tab)
        set_tab();
      section = get_new_section(df, tab);
      column = null;
      tab.sections.push(section);
    }
    function set_column(df) {
      if (!section)
        set_section();
      column = get_new_column(df);
      section.columns.push(column);
    }
    function get_new_tab(df) {
      let _tab = {};
      _tab.df = df || store.get_df("Tab Break", "", __("Details"));
      _tab.sections = [];
      _tab.is_first = !df;
      return _tab;
    }
    function get_new_section(df) {
      let _section = {};
      _section.df = df || store.get_df("Section Break");
      _section.columns = [];
      _section.is_first = !df;
      return _section;
    }
    function get_new_column(df) {
      let _column = {};
      _column.df = df || store.get_df("Column Break");
      _column.fields = [];
      _column.is_first = !df;
      return _column;
    }
    for (let df of fields) {
      if (df.fieldname) {
        df = JSON.parse(JSON.stringify(df));
      } else {
        continue;
      }
      if (df.fieldtype === "Tab Break") {
        set_tab(df);
      } else if (df.fieldtype === "Section Break") {
        set_section(df);
      } else if (df.fieldtype === "Column Break") {
        set_column(df);
      } else if (df.name) {
        if (!column)
          set_column();
        let field = { df };
        if (df.fieldtype === "Table") {
          field.table_columns = get_table_columns(df);
        }
        column.fields.push(field);
        section.has_fields = true;
      }
    }
    for (let tab2 of layout.tabs) {
      for (let i = tab2.sections.length - 1; i >= 0; --i) {
        let section2 = tab2.sections[i];
        if (!section2.has_fields) {
          tab2.sections.splice(tab2.sections.indexOf(section2), 1);
        }
      }
    }
    return layout;
  }
  async function get_table_columns(df, child_doctype) {
    let table_columns = [];
    if (!frappe.get_meta(df.options)) {
      await frappe.model.with_doctype(df.options);
    }
    if (!child_doctype) {
      child_doctype = frappe.get_meta(df.options);
    }
    let table_fields = child_doctype.fields;
    let total_colsize = 1;
    table_columns.push([
      {
        label: __("No.")
      },
      1
    ]);
    for (let tf of table_fields) {
      if (!in_list(frappe.model.layout_fields, tf.fieldtype) && tf.in_list_view && tf.label) {
        let colsize;
        if (tf.columns) {
          colsize = tf.columns;
        } else {
          colsize = update_default_colsize(tf);
        }
        if (total_colsize > 11 + colsize) {
          continue;
        } else {
          total_colsize += colsize;
          table_columns.push([
            {
              label: tf.label,
              fieldname: tf.fieldname,
              fieldtype: tf.fieldtype
            },
            colsize
          ]);
        }
      }
    }
    adjust_column_size(total_colsize, true);
    adjust_column_size(total_colsize);
    function adjust_column_size(total_colsize2, increase) {
      let passes = 0;
      let start_condition = increase ? total_colsize2 < 11 : total_colsize2 >= 11;
      while (start_condition && passes < 11) {
        for (var i in table_columns) {
          var _df = table_columns[i][0];
          var colsize = table_columns[i][1];
          if (colsize > 1 && colsize < 11 && frappe.model.is_non_std_field(_df.fieldname)) {
            if (passes < 3 && ["Int", "Currency", "Float", "Check", "Percent"].indexOf(_df.fieldtype) !== -1) {
              continue;
            }
            if (increase) {
              table_columns[i][1] += 1;
              total_colsize2++;
            } else {
              table_columns[i][1] -= 1;
              total_colsize2--;
            }
          }
          if (increase && total_colsize2 > 9)
            break;
          if (!increase && total_colsize2 < 11)
            break;
        }
        passes++;
      }
    }
    function update_default_colsize(_df) {
      let colsize = 2;
      switch (_df.fieldtype) {
        case "Text":
          break;
        case "Small Text":
          colsize = 3;
          break;
        case "Check":
          colsize = 1;
      }
      return colsize;
    }
    return table_columns;
  }
  function scrub_field_names(fields) {
    fields.forEach((d) => {
      if (d.fieldtype) {
        if (!d.fieldname) {
          if (d.label) {
            d.fieldname = d.label.trim().toLowerCase().replaceAll(" ", "_");
            if (d.fieldname.endsWith("?")) {
              d.fieldname = d.fieldname.slice(0, -1);
            }
            if (in_list(frappe.model.restricted_fields, d.fieldname)) {
              d.fieldname = d.fieldname + "1";
            }
            if (d.fieldtype == "Section Break") {
              d.fieldname = d.fieldname + "_section";
            } else if (d.fieldtype == "Column Break") {
              d.fieldname = d.fieldname + "_column";
            } else if (d.fieldtype == "Tab Break") {
              d.fieldname = d.fieldname + "_tab";
            }
          } else {
            d.fieldname = d.fieldtype.toLowerCase().replaceAll(" ", "_") + "_" + frappe.utils.get_random(4);
          }
        } else {
          if (in_list(frappe.model.restricted_fields, d.fieldname)) {
            frappe.throw(__("Fieldname {0} is restricted", [d.fieldname]));
          }
        }
        let regex = new RegExp(/['",./%@()<>{}]/g);
        d.fieldname = d.fieldname.replace(regex, "");
        d.fieldname = d.fieldname.toLowerCase();
      }
      if (d.unique) {
        d.search_index = 0;
      }
    });
    return fields;
  }

  // frappe/public/js/form_builder/store.js
  var useStore2 = defineStore("form-builder-store", () => {
    let doctype = (0, vue_runtime_esm_bundler_exports.ref)("");
    let doc = (0, vue_runtime_esm_bundler_exports.ref)(null);
    let docfields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let custom_docfields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let form = (0, vue_runtime_esm_bundler_exports.ref)({
      layout: {},
      active_tab: null,
      selected_field: null
    });
    let dirty = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let read_only = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let is_customize_form = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let preview = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let drag = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let get_animation = "cubic-bezier(0.34, 1.56, 0.64, 1)";
    let ref_history = (0, vue_runtime_esm_bundler_exports.ref)(null);
    let get_docfields = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      return is_customize_form.value ? custom_docfields.value : docfields.value;
    });
    let current_tab = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      return form.value.layout.tabs.find((tab) => tab.df.name == form.value.active_tab);
    });
    function selected(name) {
      var _a3;
      return ((_a3 = form.value.selected_field) == null ? void 0 : _a3.name) == name;
    }
    function get_df(fieldtype, fieldname = "", label = "") {
      let docfield = is_customize_form.value ? "Customize Form Field" : "DocField";
      let df = frappe.model.get_new_doc(docfield);
      df.name = frappe.utils.get_random(8);
      df.fieldtype = fieldtype;
      df.fieldname = fieldname;
      df.label = label;
      is_customize_form.value && (df.is_custom_field = 1);
      return df;
    }
    function has_standard_field(field) {
      if (!is_customize_form.value)
        return;
      if (!field.df.is_custom_field)
        return true;
      let children = {
        "Tab Break": "sections",
        "Section Break": "columns",
        "Column Break": "fields"
      }[field.df.fieldtype];
      if (!children)
        return false;
      return field[children].some((child) => {
        if (!child.df.is_custom_field)
          return true;
        return has_standard_field(child);
      });
    }
    async function fetch() {
      await frappe.model.clear_doc("DocType", doctype.value);
      await frappe.model.with_doctype(doctype.value);
      if (is_customize_form.value) {
        await frappe.model.with_doc("Customize Form");
        let _doc = frappe.get_doc("Customize Form");
        _doc.doc_type = doctype.value;
        let r = await frappe.call({ method: "fetch_to_customize", doc: _doc });
        doc.value = r.docs[0];
      } else {
        doc.value = await frappe.db.get_doc("DocType", doctype.value);
      }
      if (!get_docfields.value.length) {
        let docfield = is_customize_form.value ? "Customize Form Field" : "DocField";
        await frappe.model.with_doctype(docfield);
        let df = frappe.get_meta(docfield).fields;
        if (is_customize_form.value) {
          custom_docfields.value = df;
        } else {
          docfields.value = df;
        }
      }
      form.value.layout = get_layout();
      form.value.active_tab = form.value.layout.tabs[0].df.name;
      form.value.selected_field = null;
      (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
        dirty.value = false;
        read_only.value = !is_customize_form.value && !frappe.boot.developer_mode && !doc.value.custom;
        preview.value = false;
      });
      setup_undo_redo();
      setup_breadcrumbs();
    }
    let undo_redo_keyboard_event = onKeyDown(true, (e4) => {
      if (!ref_history.value)
        return;
      if (e4.ctrlKey || e4.metaKey) {
        if (e4.key === "z" && !e4.shiftKey && ref_history.value.canUndo) {
          ref_history.value.undo();
        } else if (e4.key === "z" && e4.shiftKey && ref_history.value.canRedo) {
          ref_history.value.redo();
        }
      }
    });
    function setup_undo_redo() {
      ref_history.value = useDebouncedRefHistory(form, { deep: true, debounce: 100 });
      undo_redo_keyboard_event;
    }
    function setup_breadcrumbs() {
      let breadcrumbs = `
			<li><a href="/app/doctype">${__("DocType")}</a></li>
			<li><a href="/app/doctype/${doctype.value}">${__(doctype.value)}</a></li>
		`;
      if (is_customize_form.value) {
        breadcrumbs = `
				<li><a href="/app/customize-form?doc_type=${doctype.value}">
					${__("Customize Form")}
				</a></li>
			`;
      }
      breadcrumbs += `<li class="disabled"><a href="#">${__("Form Builder")}</a></li>`;
      frappe.breadcrumbs.clear();
      frappe.breadcrumbs.$breadcrumbs.append(breadcrumbs);
    }
    function reset_changes() {
      fetch();
    }
    function validate_fields(fields, is_table) {
      fields = scrub_field_names(fields);
      let not_allowed_in_list_view = ["Attach Image", ...frappe.model.no_value_type];
      if (is_table) {
        not_allowed_in_list_view = not_allowed_in_list_view.filter((f) => f != "Button");
      }
      function get_field_data(df) {
        let fieldname = `<b>${df.label} (${df.fieldname})</b>`;
        if (!df.label) {
          fieldname = `<b>${df.fieldname}</b>`;
        }
        let fieldtype = `<b>${df.fieldtype}</b>`;
        return [fieldname, fieldtype];
      }
      fields.forEach((df) => {
        let duplicate = fields.filter((f) => f.fieldname == df.fieldname);
        if (duplicate.length > 1) {
          frappe.throw(__("Fieldname {0} appears multiple times", get_field_data(df)));
        }
        if (in_list(["Link", ...frappe.model.table_fields], df.fieldtype) && !df.options) {
          frappe.throw(__("Options is required for field {0} of type {1}", get_field_data(df)));
        }
        if (df.hidden && df.reqd && !df.default) {
          frappe.throw(__("{0} cannot be hidden and mandatory without any default value", get_field_data(df)));
        }
        if (df.in_list_view && in_list(not_allowed_in_list_view, df.fieldtype)) {
          frappe.throw(__("'In List View' is not allowed for field {0} of type {1}", get_field_data(df)));
        }
        if (df.in_global_search && in_list(frappe.model.no_value_type, df.fieldtype)) {
          frappe.throw(__("'In Global Search' is not allowed for field {0} of type {1}", get_field_data(df)));
        }
      });
    }
    async function save_changes() {
      if (!dirty.value) {
        frappe.show_alert({ message: __("No changes to save"), indicator: "orange" });
        return;
      }
      frappe.dom.freeze(__("Saving..."));
      try {
        if (is_customize_form.value) {
          let _doc = frappe.get_doc("Customize Form");
          _doc.doc_type = doctype.value;
          _doc.fields = get_updated_fields();
          validate_fields(_doc.fields, _doc.istable);
          await frappe.call({ method: "save_customization", doc: _doc });
        } else {
          doc.value.fields = get_updated_fields();
          validate_fields(doc.value.fields, doc.value.istable);
          await frappe.call("frappe.client.save", { doc: doc.value });
          frappe.toast("Fields Table Updated");
        }
        fetch();
      } catch (e4) {
        console.error(e4);
      } finally {
        frappe.dom.unfreeze();
      }
    }
    function get_updated_fields() {
      let fields = [];
      let idx = 0;
      let layout_fields = JSON.parse(JSON.stringify(form.value.layout.tabs));
      layout_fields.forEach((tab, i) => {
        if (i == 0 && is_df_updated(tab.df, get_df("Tab Break", "", __("Details"))) || i > 0) {
          idx++;
          tab.df.idx = idx;
          fields.push(tab.df);
        }
        tab.sections.forEach((section, j) => {
          let fields_copy = JSON.parse(JSON.stringify(fields));
          let old_idx = idx;
          section.has_fields = false;
          if (j == 0 && is_df_updated(section.df, get_df("Section Break")) || j > 0) {
            idx++;
            section.df.idx = idx;
            fields.push(section.df);
          }
          section.columns.forEach((column, k3) => {
            if (k3 == 0 && is_df_updated(column.df, get_df("Column Break")) || k3 > 0 || column.fields.length == 0) {
              idx++;
              column.df.idx = idx;
              fields.push(column.df);
            }
            column.fields.forEach((field) => {
              idx++;
              field.df.idx = idx;
              fields.push(field.df);
              section.has_fields = true;
            });
          });
          if (!section.has_fields) {
            fields = fields_copy || [];
            idx = old_idx;
          }
        });
      });
      return fields;
    }
    function is_df_updated(df, new_df) {
      delete df.name;
      delete new_df.name;
      return JSON.stringify(df) != JSON.stringify(new_df);
    }
    function get_layout() {
      return create_layout(doc.value.fields);
    }
    return {
      doctype,
      doc,
      form,
      dirty,
      read_only,
      is_customize_form,
      preview,
      drag,
      get_animation,
      get_docfields,
      current_tab,
      selected,
      get_df,
      has_standard_field,
      fetch,
      reset_changes,
      validate_fields,
      save_changes,
      get_updated_fields,
      is_df_updated,
      get_layout
    };
  });

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/CheckControl.vue?type=script
  var CheckControl_default = {
    __name: "CheckControl",
    props: ["df", "value"],
    setup(__props, { expose }) {
      expose();
      const props = __props;
      let store = useStore2();
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      const __returned__ = { store, props, slots, useStore: useStore2, useSlots: vue_runtime_esm_bundler_exports.useSlots };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/CheckControl.vue?type=template
  var _withScopeId = (n) => ((0, vue_runtime_esm_bundler_exports.pushScopeId)("data-v-5fb03290"), n = n(), (0, vue_runtime_esm_bundler_exports.popScopeId)(), n);
  var _hoisted_18 = {
    key: 0,
    class: "field-controls"
  };
  var _hoisted_27 = { class: "checkbox" };
  var _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
    type: "checkbox",
    disabled: ""
  }, null, -1));
  var _hoisted_44 = { key: 1 };
  var _hoisted_52 = ["checked", "disabled"];
  var _hoisted_6 = ["innerHTML"];
  function render10(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control checkbox", { editable: $setup.slots.label }])
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" checkbox "),
      $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("label", _hoisted_18, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_27, [
          _hoisted_35,
          (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true)
        ]),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ])) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("label", _hoisted_44, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
          type: "checkbox",
          checked: $props.value,
          disabled: $setup.store.read_only || $props.df.read_only,
          onChange: _cache[0] || (_cache[0] = (event) => _ctx.$emit("update:modelValue", event.target.checked))
        }, null, 40, _hoisted_52),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("span", {
          class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["label-area", { reqd: $props.df.reqd }])
        }, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.df.label), 3)
      ])),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 2,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_6)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 2);
  }

  // frappe/public/js/form_builder/components/controls/CheckControl.vue
  CheckControl_default.render = render10;
  CheckControl_default.__file = "frappe/public/js/form_builder/components/controls/CheckControl.vue";
  CheckControl_default.__scopeId = "data-v-5fb03290";
  var CheckControl_default2 = CheckControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/CodeControl.vue?type=script
  var CodeControl_default = {
    __name: "CodeControl",
    props: ["df", "modelValue"],
    emits: ["update:modelValue"],
    setup(__props, { expose, emit }) {
      expose();
      const props = __props;
      let store = useStore2();
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      let code = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let code_control = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let update_control = (0, vue_runtime_esm_bundler_exports.ref)(true);
      let content = (0, vue_runtime_esm_bundler_exports.computed)({
        get: () => props.modelValue,
        set: (value) => emit("update:modelValue", value)
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (code.value) {
          code_control.value = frappe.ui.form.make_control({
            parent: code.value,
            df: __spreadProps(__spreadValues({}, props.df), {
              fieldtype: "Code",
              hidden: 0,
              read_only: store.read_only,
              change: () => {
                if (update_control.value) {
                  content.value = code_control.value.get_value();
                }
                update_control.value = true;
              }
            }),
            value: content.value,
            disabled: Boolean(slots.label) || store.read_only,
            render_input: true,
            only_input: Boolean(slots.label)
          });
        }
      });
      (0, vue_runtime_esm_bundler_exports.watch)(() => content.value, (value) => {
        update_control.value = false;
        code_control.value.set_value(value);
      });
      (0, vue_runtime_esm_bundler_exports.watch)(() => props.df.max_height, (value) => {
        if (code_control.value) {
          code_control.value.ace_editor_target.css("max-height", value);
        }
      });
      const __returned__ = { store, props, emit, slots, code, code_control, update_control, content, computed: vue_runtime_esm_bundler_exports.computed, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref, useSlots: vue_runtime_esm_bundler_exports.useSlots, watch: vue_runtime_esm_bundler_exports.watch, useStore: useStore2 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/CodeControl.vue?type=template
  var _hoisted_19 = { class: "field-controls" };
  var _hoisted_28 = { ref: "code" };
  var _hoisted_36 = ["innerHTML"];
  var _hoisted_45 = {
    key: 1,
    class: "control",
    ref: "code"
  };
  function render11(_ctx, _cache, $props, $setup, $data, $options) {
    return $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      key: 0,
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control", { editable: $setup.slots.label }])
    }, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_19, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label"),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions")
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_28, null, 512),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_36)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 2)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_45, null, 512));
  }

  // frappe/public/js/form_builder/components/controls/CodeControl.vue
  CodeControl_default.render = render11;
  CodeControl_default.__file = "frappe/public/js/form_builder/components/controls/CodeControl.vue";
  var CodeControl_default2 = CodeControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/DataControl.vue?type=script
  var DataControl_default = {
    __name: "DataControl",
    props: ["df", "value"],
    setup(__props, { expose }) {
      expose();
      const props = __props;
      let store = useStore2();
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      let time_zone = (0, vue_runtime_esm_bundler_exports.ref)("");
      let placeholder = (0, vue_runtime_esm_bundler_exports.ref)("");
      if (props.df.fieldtype === "Datetime") {
        let time_zone_text = frappe.boot.time_zone ? frappe.boot.time_zone.user : frappe.sys_defaults.time_zone;
        time_zone.value = time_zone_text;
      }
      if (props.df.fieldtype === "Color") {
        placeholder.value = __("Choose a color");
      }
      if (props.df.fieldtype === "Icon") {
        placeholder.value = __("Choose an icon");
      }
      const __returned__ = { store, props, slots, time_zone, placeholder, useStore: useStore2, ref: vue_runtime_esm_bundler_exports.ref, useSlots: vue_runtime_esm_bundler_exports.useSlots };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/DataControl.vue?type=template
  var _withScopeId2 = (n) => ((0, vue_runtime_esm_bundler_exports.pushScopeId)("data-v-de81cdc3"), n = n(), (0, vue_runtime_esm_bundler_exports.popScopeId)(), n);
  var _hoisted_110 = {
    key: 0,
    class: "field-controls"
  };
  var _hoisted_29 = ["placeholder"];
  var _hoisted_37 = ["value", "disabled"];
  var _hoisted_46 = {
    key: 4,
    class: "mt-2 form-control",
    type: "text",
    style: { height: "110px" },
    readonly: ""
  };
  var _hoisted_53 = ["innerHTML"];
  var _hoisted_62 = ["innerHTML"];
  var _hoisted_7 = /* @__PURE__ */ _withScopeId2(() => /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", { class: "selected-color no-value" }, null, -1));
  var _hoisted_8 = ["innerHTML"];
  var _hoisted_9 = ["innerHTML"];
  function render12(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control frappe-control", { editable: $setup.slots.label }])
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_110, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ])) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 1,
        class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["label", { reqd: $props.df.reqd }])
      }, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.df.label), 3)),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" data input "),
      $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("input", {
        key: 2,
        class: "form-control",
        type: "text",
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ height: $props.df.fieldtype == "Table MultiSelect" ? "42px" : "" }),
        placeholder: $setup.placeholder,
        readonly: ""
      }, null, 12, _hoisted_29)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("input", {
        key: 3,
        class: "form-control",
        type: "text",
        value: $props.value,
        disabled: $setup.store.read_only || $props.df.read_only,
        onInput: _cache[0] || (_cache[0] = (event) => _ctx.$emit("update:modelValue", event.target.value))
      }, null, 40, _hoisted_37)),
      $setup.slots.label && $props.df.fieldtype === "Barcode" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("input", _hoisted_46)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 5,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_53)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" timezone for datetime field "),
      $setup.time_zone ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 6,
        class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["time-zone", !$props.df.description ? "mt-2" : ""]),
        innerHTML: $setup.time_zone
      }, null, 10, _hoisted_62)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" color selector icon "),
      _hoisted_7,
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" icon selector icon "),
      $props.df.fieldtype == "Icon" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 7,
        class: "selected-icon no-value",
        innerHTML: _ctx.frappe.utils.icon("folder-normal", "md")
      }, null, 8, _hoisted_8)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" phone selector icon "),
      $props.df.fieldtype == "Phone" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 8,
        class: "selected-phone no-value",
        innerHTML: _ctx.frappe.utils.icon("down", "sm")
      }, null, 8, _hoisted_9)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 2);
  }

  // frappe/public/js/form_builder/components/controls/DataControl.vue
  DataControl_default.render = render12;
  DataControl_default.__file = "frappe/public/js/form_builder/components/controls/DataControl.vue";
  DataControl_default.__scopeId = "data-v-de81cdc3";
  var DataControl_default2 = DataControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/GeolocationControl.vue?type=script
  var GeolocationControl_default = {
    __name: "GeolocationControl",
    props: ["df"],
    setup(__props, { expose }) {
      expose();
      const props = __props;
      let map = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let map_control = (0, vue_runtime_esm_bundler_exports.ref)(null);
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (map.value) {
          map_control.value = frappe.ui.form.make_control({
            parent: map.value,
            df: __spreadProps(__spreadValues({}, props.df), { hidden: 0 }),
            frm: true,
            disabled: true,
            render_input: true
          });
        }
      });
      const __returned__ = { props, map, map_control, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/GeolocationControl.vue?type=template
  var _hoisted_111 = { class: "control editable" };
  var _hoisted_210 = { class: "field-controls" };
  var _hoisted_38 = { ref: "map" };
  var _hoisted_47 = ["innerHTML"];
  function render13(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_111, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_210, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_38, null, 512),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_47)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/GeolocationControl.vue
  GeolocationControl_default.render = render13;
  GeolocationControl_default.__file = "frappe/public/js/form_builder/components/controls/GeolocationControl.vue";
  GeolocationControl_default.__scopeId = "data-v-6724c096";
  var GeolocationControl_default2 = GeolocationControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/ImageControl.vue?type=script
  var ImageControl_default = {
    __name: "ImageControl",
    props: ["df"],
    setup(__props, { expose }) {
      expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/ImageControl.vue?type=template
  var _hoisted_112 = { class: "control editable" };
  var _hoisted_211 = { class: "field-controls" };
  var _hoisted_39 = ["innerHTML"];
  var _hoisted_48 = ["innerHTML"];
  function render14(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_112, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_211, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label"),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions")
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
        class: "missing-image",
        innerHTML: _ctx.frappe.utils.icon("restriction", "md")
      }, null, 8, _hoisted_39),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_48)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/ImageControl.vue
  ImageControl_default.render = render14;
  ImageControl_default.__file = "frappe/public/js/form_builder/components/controls/ImageControl.vue";
  var ImageControl_default2 = ImageControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/LinkControl.vue?type=script
  var LinkControl_default = {
    __name: "LinkControl",
    props: ["args", "df", "modelValue"],
    emits: ["update:modelValue"],
    setup(__props, { expose, emit }) {
      expose();
      const props = __props;
      let store = useStore2();
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      let link = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let link_control = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let update_control = (0, vue_runtime_esm_bundler_exports.ref)(true);
      let content = (0, vue_runtime_esm_bundler_exports.computed)({
        get: () => props.modelValue,
        set: (value) => emit("update:modelValue", value)
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        var _a3;
        if (link.value) {
          if ((_a3 = props.args) == null ? void 0 : _a3.is_table_field) {
            if (props.df.filters) {
              props.df.filters.istable = 1;
            } else {
              props.df.filters = { istable: 1 };
            }
          } else {
            if (props.df.filters && "istable" in props.df.filters) {
              delete props.df.filters.istable;
            }
          }
          link_control.value = frappe.ui.form.make_control({
            parent: link.value,
            df: __spreadProps(__spreadValues({}, props.df), {
              hidden: 0,
              read_only: Boolean(slots.label) || store.read_only,
              change: () => {
                if (update_control.value) {
                  content.value = link_control.value.get_value();
                }
                update_control.value = true;
              }
            }),
            value: content.value,
            render_input: true,
            only_input: Boolean(slots.label)
          });
        }
      });
      (0, vue_runtime_esm_bundler_exports.watch)(() => content.value, (value) => {
        update_control.value = false;
        link_control.value.set_value(value);
      });
      const __returned__ = { store, props, emit, slots, link, link_control, update_control, content, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref, useSlots: vue_runtime_esm_bundler_exports.useSlots, computed: vue_runtime_esm_bundler_exports.computed, watch: vue_runtime_esm_bundler_exports.watch, useStore: useStore2 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/LinkControl.vue?type=template
  var _hoisted_113 = ["data-fieldtype"];
  var _hoisted_212 = { class: "field-controls" };
  var _hoisted_310 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
    class: "form-control",
    type: "text",
    readonly: ""
  }, null, -1);
  var _hoisted_49 = ["innerHTML"];
  var _hoisted_54 = {
    key: 1,
    ref: "link"
  };
  function render15(_ctx, _cache, $props, $setup, $data, $options) {
    return $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      key: 0,
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control frappe-control", { editable: $setup.slots.label }]),
      "data-fieldtype": $props.df.fieldtype
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_212, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label"),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions")
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" link input "),
      _hoisted_310,
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_49)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 10, _hoisted_113)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_54, null, 512));
  }

  // frappe/public/js/form_builder/components/controls/LinkControl.vue
  LinkControl_default.render = render15;
  LinkControl_default.__file = "frappe/public/js/form_builder/components/controls/LinkControl.vue";
  var LinkControl_default2 = LinkControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/RatingControl.vue?type=script
  var RatingControl_default = {
    __name: "RatingControl",
    props: ["df"],
    setup(__props, { expose }) {
      expose();
      const props = __props;
      let rating = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let rating_control = (0, vue_runtime_esm_bundler_exports.ref)(null);
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (rating.value) {
          rating_control.value = frappe.ui.form.make_control({
            parent: rating.value,
            df: __spreadProps(__spreadValues({}, props.df), { hidden: 0 }),
            disabled: true,
            render_input: true,
            only_input: true
          });
        }
      });
      (0, vue_runtime_esm_bundler_exports.watch)(() => props.df.options, (value) => {
        if (rating_control.value) {
          rating_control.value.df.options = value;
          rating_control.value.make_input();
        }
      });
      const __returned__ = { props, rating, rating_control, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref, watch: vue_runtime_esm_bundler_exports.watch };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/RatingControl.vue?type=template
  var _hoisted_114 = { class: "control editable" };
  var _hoisted_213 = { class: "field-controls" };
  var _hoisted_311 = { ref: "rating" };
  var _hoisted_410 = ["innerHTML"];
  function render16(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_114, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_213, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_311, null, 512),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_410)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/RatingControl.vue
  RatingControl_default.render = render16;
  RatingControl_default.__file = "frappe/public/js/form_builder/components/controls/RatingControl.vue";
  RatingControl_default.__scopeId = "data-v-3a354231";
  var RatingControl_default2 = RatingControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SelectControl.vue?type=script
  var SelectControl_default = {
    __name: "SelectControl",
    props: ["df", "modelValue", "no_label"],
    emits: ["update:modelValue"],
    setup(__props, { expose, emit }) {
      expose();
      const props = __props;
      let store = useStore2();
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      let select = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let update_control = (0, vue_runtime_esm_bundler_exports.ref)(true);
      function get_options() {
        let options = props.df.options;
        if (typeof options == "string") {
          options = options.split("\n") || "";
          options = options.map((opt) => {
            return { label: __(opt), value: opt };
          });
        }
        if ((options == null ? void 0 : options.length) && typeof options[0] == "string") {
          options = options.map((opt) => {
            return { label: __(opt), value: opt };
          });
        }
        if (props.df.fieldname == "fieldtype") {
          if (!in_list(frappe.model.layout_fields, props.modelValue)) {
            options = options && options.filter((opt) => !in_list(frappe.model.layout_fields, opt.label));
          } else {
            options = [{ label: __(props.modelValue), value: props.modelValue }];
          }
        }
        return options;
      }
      let select_control = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        if (!select.value)
          return;
        select.value.innerHTML = "";
        return frappe.ui.form.make_control({
          parent: select.value,
          df: __spreadProps(__spreadValues({}, props.df), {
            fieldtype: "Select",
            hidden: 0,
            options: get_options(),
            read_only: Boolean(slots.label) || store.read_only,
            change: () => {
              if (update_control.value) {
                content.value = select_control.value.get_value();
              }
              update_control.value = true;
            }
          }),
          value: content.value,
          render_input: true,
          only_input: Boolean(slots.label) || props.no_label
        });
      });
      let content = (0, vue_runtime_esm_bundler_exports.computed)({
        get: () => props.modelValue,
        set: (value) => emit("update:modelValue", value)
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (select.value)
          select_control.value;
      });
      (0, vue_runtime_esm_bundler_exports.watch)(() => content.value, (value) => {
        var _a3;
        update_control.value = false;
        (_a3 = select_control.value) == null ? void 0 : _a3.set_value(value);
      });
      (0, vue_runtime_esm_bundler_exports.watch)(() => props.df.options, () => {
        select_control.value;
      });
      const __returned__ = { store, props, emit, slots, select, update_control, get_options, select_control, content, useStore: useStore2, useSlots: vue_runtime_esm_bundler_exports.useSlots, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref, computed: vue_runtime_esm_bundler_exports.computed, watch: vue_runtime_esm_bundler_exports.watch };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SelectControl.vue?type=template
  var _withScopeId3 = (n) => ((0, vue_runtime_esm_bundler_exports.pushScopeId)("data-v-0e9440b9"), n = n(), (0, vue_runtime_esm_bundler_exports.popScopeId)(), n);
  var _hoisted_115 = { class: "field-controls" };
  var _hoisted_214 = { class: "select-input" };
  var _hoisted_312 = /* @__PURE__ */ _withScopeId3(() => /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
    class: "form-control",
    readonly: ""
  }, null, -1));
  var _hoisted_411 = ["innerHTML"];
  var _hoisted_55 = ["innerHTML"];
  var _hoisted_63 = {
    key: 1,
    class: "control",
    ref: "select"
  };
  function render17(_ctx, _cache, $props, $setup, $data, $options) {
    return $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      key: 0,
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control", { editable: $setup.slots.label }])
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_115, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" select input "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_214, [
        _hoisted_312,
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
          class: "select-icon",
          innerHTML: _ctx.frappe.utils.icon("select", "sm")
        }, null, 8, _hoisted_411)
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_55)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 2)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_63, null, 512));
  }

  // frappe/public/js/form_builder/components/controls/SelectControl.vue
  SelectControl_default.render = render17;
  SelectControl_default.__file = "frappe/public/js/form_builder/components/controls/SelectControl.vue";
  SelectControl_default.__scopeId = "data-v-0e9440b9";
  var SelectControl_default2 = SelectControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SignatureControl.vue?type=script
  var SignatureControl_default = {
    __name: "SignatureControl",
    props: ["df"],
    setup(__props, { expose }) {
      expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SignatureControl.vue?type=template
  var _withScopeId4 = (n) => ((0, vue_runtime_esm_bundler_exports.pushScopeId)("data-v-c1582adf"), n = n(), (0, vue_runtime_esm_bundler_exports.popScopeId)(), n);
  var _hoisted_116 = { class: "control editable" };
  var _hoisted_215 = { class: "field-controls" };
  var _hoisted_313 = /* @__PURE__ */ _withScopeId4(() => /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", { class: "signature-field" }, null, -1));
  var _hoisted_412 = ["innerHTML"];
  function render18(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_116, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_215, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      _hoisted_313,
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_412)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/SignatureControl.vue
  SignatureControl_default.render = render18;
  SignatureControl_default.__file = "frappe/public/js/form_builder/components/controls/SignatureControl.vue";
  SignatureControl_default.__scopeId = "data-v-c1582adf";
  var SignatureControl_default2 = SignatureControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TableControl.vue?type=script
  var TableControl_default = {
    __name: "TableControl",
    props: ["df"],
    setup(__props, { expose }) {
      expose();
      const props = __props;
      let table_columns = computedAsync(async () => {
        let doctype = props.df.options;
        if (!doctype)
          return [];
        await frappe.model.with_doctype(doctype);
        let child_doctype = frappe.get_meta(doctype);
        return get_table_columns(props.df, child_doctype);
      }, []);
      const __returned__ = { props, table_columns, get_table_columns, computedAsync };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TableControl.vue?type=template
  var _hoisted_117 = { class: "control editable" };
  var _hoisted_216 = { class: "field-controls" };
  var _hoisted_314 = {
    key: 0,
    class: "table-controls row no-gutters",
    style: { opacity: 1 }
  };
  var _hoisted_413 = { class: "table-field ellipsis" };
  var _hoisted_56 = { class: "grid-empty text-center" };
  var _hoisted_64 = ["alt"];
  var _hoisted_72 = ["innerHTML"];
  function render19(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_117, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_216, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" table grid "),
      $props.df.fieldtype == "Table" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_314, [
        ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)($setup.table_columns, ([tf, size], i) => {
          return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
            class: "table-column",
            style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ width: size * 10 + "%" }),
            key: i
          }, [
            (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_413, (0, vue_runtime_esm_bundler_exports.toDisplayString)(tf.label), 1)
          ], 4);
        }), 128))
      ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_56, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("img", {
          src: "/assets/frappe/images/ui-states/grid-empty-state.svg",
          alt: _ctx.__("Grid Empty State"),
          class: "grid-empty-illustration"
        }, null, 8, _hoisted_64),
        (0, vue_runtime_esm_bundler_exports.createTextVNode)(" " + (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("No Data")), 1)
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 1,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_72)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/TableControl.vue
  TableControl_default.render = render19;
  TableControl_default.__file = "frappe/public/js/form_builder/components/controls/TableControl.vue";
  TableControl_default.__scopeId = "data-v-9fc5e930";
  var TableControl_default2 = TableControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TextControl.vue?type=script
  var TextControl_default = {
    __name: "TextControl",
    props: ["df", "value", "modelValue"],
    emits: ["update:modelValue"],
    setup(__props, { expose, emit }) {
      expose();
      const props = __props;
      let store = useStore2();
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      let height = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        if (props.df.fieldtype == "Small Text") {
          return "150px";
        }
        return "300px";
      });
      let doctype = (0, vue_runtime_esm_bundler_exports.ref)("");
      let fieldname = (0, vue_runtime_esm_bundler_exports.ref)("");
      let doctypes = (0, vue_runtime_esm_bundler_exports.ref)("");
      let doctype_df = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        doctypes.value = store.get_updated_fields().filter((df) => df.fieldtype == "Link").filter((df) => df.options && df.fieldname != store.form.selected_field.fieldname).sort((a2, b) => a2.options.localeCompare(b.options)).map((df) => ({
          label: `${df.options} (${df.fieldname})`,
          value: df.fieldname,
          doctype_name: df.options
        }));
        let options = [{ label: __("Select DocType"), value: "" }, ...doctypes.value];
        return { fieldtype: "Select", label: __("Fetch Form"), options };
      });
      let field_df = computedAsync(async () => {
        var _a3;
        let options = [{ label: __("Select Field"), value: "" }];
        let df = { fieldtype: "Select", label: __("Fetch Form"), options };
        if (!doctype.value)
          return df;
        let doctype_name = (_a3 = doctypes.value) == null ? void 0 : _a3.find((df2) => df2.value == doctype.value).doctype_name;
        if (!doctype_name)
          return df;
        if (props.value.split(".")[0] != doctype.value) {
          fieldname.value = "";
        }
        await frappe.model.with_doctype(doctype_name);
        let fields = frappe.meta.get_docfields(doctype_name, null, {
          fieldtype: ["not in", frappe.model.no_value_type]
        }).sort((a2, b) => {
          if (a2.label && b.label) {
            return a2.label.localeCompare(b.label);
          }
        }).map((df2) => ({
          label: `${df2.label || __("No Label")} (${df2.fieldtype})`,
          value: df2.fieldname
        }));
        df.options = df.options.concat(fields);
        return df;
      }, {});
      (0, vue_runtime_esm_bundler_exports.watch)(() => props.value, (value) => {
        if (props.df.fieldname == "fetch_from") {
          [doctype.value, fieldname.value] = (value == null ? void 0 : value.split(".")) || ["", ""];
        }
      }, { immediate: true });
      (0, vue_runtime_esm_bundler_exports.watch)([() => doctype.value, () => fieldname.value], ([doctype_value, fieldname_value]) => {
        var _a3;
        let [doctype_name, field_name] = ((_a3 = props.value) == null ? void 0 : _a3.split(".")) || ["", ""];
        if (props.df.fieldname == "fetch_from" && (doctype_value != doctype_name || fieldname_value != field_name)) {
          emit("update:modelValue", `${doctype_value}.${fieldname_value}`);
        }
      });
      const __returned__ = { store, props, emit, slots, height, doctype, fieldname, doctypes, doctype_df, field_df, useStore: useStore2, useSlots: vue_runtime_esm_bundler_exports.useSlots, ref: vue_runtime_esm_bundler_exports.ref, computed: vue_runtime_esm_bundler_exports.computed, watch: vue_runtime_esm_bundler_exports.watch, computedAsync };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TextControl.vue?type=template
  var _hoisted_118 = { key: 0 };
  var _hoisted_217 = {
    key: 0,
    class: "field-controls"
  };
  var _hoisted_315 = {
    key: 1,
    class: "label"
  };
  var _hoisted_414 = ["value", "disabled"];
  var _hoisted_57 = ["innerHTML"];
  function render20(_ctx, _cache, $props, $setup, $data, $options) {
    var _a3, _b;
    const _component_SelectControl = (0, vue_runtime_esm_bundler_exports.resolveComponent)("SelectControl");
    return $props.df.fieldname == "fetch_from" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_118, [
      (0, vue_runtime_esm_bundler_exports.createVNode)(_component_SelectControl, {
        df: $setup.doctype_df,
        value: $setup.doctype,
        modelValue: $setup.doctype,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.doctype = $event)
      }, null, 8, ["df", "value", "modelValue"]),
      $setup.doctype ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)(_component_SelectControl, {
        key: 0,
        df: $setup.field_df,
        value: $setup.fieldname,
        modelValue: $setup.fieldname,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.fieldname = $event),
        no_label: true
      }, null, 8, ["df", "value", "modelValue"])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ])) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      key: 1,
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control", { editable: $setup.slots.label }])
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_217, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label"),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions")
      ])) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_315, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.df.label), 1)),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" textarea input "),
      $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("textarea", {
        key: 2,
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ height: $setup.height, maxHeight: (_a3 = $props.df.max_height) != null ? _a3 : "" }),
        class: "form-control",
        type: "text",
        readonly: ""
      }, null, 4)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("textarea", {
        key: 3,
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ height: $setup.height, maxHeight: (_b = $props.df.max_height) != null ? _b : "" }),
        class: "form-control",
        type: "text",
        value: $props.value,
        disabled: $setup.store.read_only || $props.df.read_only,
        onInput: _cache[2] || (_cache[2] = (event) => _ctx.$emit("update:modelValue", event.target.value))
      }, null, 44, _hoisted_414)),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 4,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_57)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 2));
  }

  // frappe/public/js/form_builder/components/controls/TextControl.vue
  TextControl_default.render = render20;
  TextControl_default.__file = "frappe/public/js/form_builder/components/controls/TextControl.vue";
  var TextControl_default2 = TextControl_default;

  // sfc-script:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TextEditorControl.vue?type=script
  var TextEditorControl_default = {
    __name: "TextEditorControl",
    props: ["df"],
    setup(__props, { expose }) {
      expose();
      const props = __props;
      let quill = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let quill_control = (0, vue_runtime_esm_bundler_exports.ref)(null);
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (quill.value) {
          quill_control.value = frappe.ui.form.make_control({
            parent: quill.value,
            df: __spreadProps(__spreadValues({}, props.df), { hidden: 0 }),
            disabled: true,
            render_input: true,
            only_input: true
          });
        }
      });
      const __returned__ = { props, quill, quill_control, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/frappe/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TextEditorControl.vue?type=template
  var _hoisted_119 = { class: "control editable" };
  var _hoisted_218 = { class: "field-controls" };
  var _hoisted_316 = {
    class: "quill",
    ref: "quill"
  };
  var _hoisted_415 = ["innerHTML"];
  function render21(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_119, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_218, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_316, null, 512),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_415)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/TextEditorControl.vue
  TextEditorControl_default.render = render21;
  TextEditorControl_default.__file = "frappe/public/js/form_builder/components/controls/TextEditorControl.vue";
  TextEditorControl_default.__scopeId = "data-v-59de220a";
  var TextEditorControl_default2 = TextEditorControl_default;

  // frappe/public/js/workflow_builder/globals.js
  function registerGlobalComponents(app) {
    app.component("AttachControl", AttachControl_default2).component("AttachImageControl", AttachControl_default2).component("AutocompleteControl", DataControl_default2).component("BarcodeControl", DataControl_default2).component("ButtonControl", ButtonControl_default2).component("CheckControl", CheckControl_default2).component("CodeControl", CodeControl_default2).component("ColorControl", DataControl_default2).component("CurrencyControl", DataControl_default2).component("DataControl", DataControl_default2).component("DateControl", DataControl_default2).component("DatetimeControl", DataControl_default2).component("DurationControl", DataControl_default2).component("DynamicLinkControl", DataControl_default2).component("FloatControl", DataControl_default2).component("GeolocationControl", GeolocationControl_default2).component("HeadingControl", ButtonControl_default2).component("HTMLControl", DataControl_default2).component("HTMLEditorControl", CodeControl_default2).component("IconControl", DataControl_default2).component("ImageControl", ImageControl_default2).component("IntControl", DataControl_default2).component("JSONControl", CodeControl_default2).component("LinkControl", LinkControl_default2).component("LongTextControl", TextControl_default2).component("MarkdownEditorControl", CodeControl_default2).component("PasswordControl", DataControl_default2).component("PercentControl", DataControl_default2).component("PhoneControl", DataControl_default2).component("ReadOnlyControl", DataControl_default2).component("RatingControl", RatingControl_default2).component("SelectControl", SelectControl_default2).component("SignatureControl", SignatureControl_default2).component("SmallTextControl", TextControl_default2).component("TableControl", TableControl_default2).component("TableMultiSelectControl", DataControl_default2).component("TextControl", TextControl_default2).component("TextEditorControl", TextEditorControl_default2).component("TimeControl", DataControl_default2);
  }

  // frappe/public/js/workflow_builder/workflow_builder.bundle.js
  var WorkflowBuilder = class {
    constructor({ wrapper, page, workflow }) {
      this.$wrapper = $(wrapper);
      this.page = page;
      this.workflow = workflow;
      this.init();
    }
    init() {
      this.page.set_title(__("Editing {0}", [this.workflow]));
      this.setup_page_actions();
      this.setup_app();
    }
    setup_page_actions() {
      this.page.clear_actions();
      this.page.clear_menu();
      this.page.clear_custom_actions();
      this.primary_btn = this.page.set_primary_action(__("Save"), () => this.store.save_changes());
      this.reset_changes_btn = this.page.add_button(__("Reset Changes"), () => {
        this.store.reset_changes();
      });
      this.go_to_doctype_btn = this.page.add_menu_item(__("Go to Workflow"), () => frappe.set_route("Form", "Workflow", this.workflow));
    }
    setup_app() {
      let pinia = createPinia();
      let app = (0, vue_runtime_esm_bundler_exports.createApp)(WorkflowBuilder_default2, { workflow: this.workflow });
      SetVueGlobals(app);
      app.use(pinia);
      this.store = useStore();
      this.store.workflow_name = this.workflow;
      registerGlobalComponents(app);
      this.$workflow_builder = app.mount(this.$wrapper.get(0));
    }
  };
  frappe.provide("frappe.ui");
  frappe.ui.WorkflowBuilder = WorkflowBuilder;
  var workflow_builder_bundle_default = WorkflowBuilder;
})();
/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
//# sourceMappingURL=workflow_builder.bundle.XACX6D5D.js.map
