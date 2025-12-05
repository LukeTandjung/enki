import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/views/App.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--59a5bced.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/vendor/react-refresh.js";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/luketandjung/Projects/enki/src/content/views/App.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import Logo from "/src/assets/crx.svg__import.js";
import __vite__cjsImport4_react from "/vendor/.vite-deps-react.js__v--59a5bced.js"; const useState = __vite__cjsImport4_react["useState"];
import "/src/content/views/App.css.js";
function App() {
  _s();
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  return /* @__PURE__ */ jsxDEV("div", { className: "popup-container", children: [
    show && /* @__PURE__ */ jsxDEV("div", { className: `popup-content ${show ? "opacity-100" : "opacity-0"}`, children: /* @__PURE__ */ jsxDEV("h1", { children: "HELLO CRXJS" }, void 0, false, {
      fileName: "/Users/luketandjung/Projects/enki/src/content/views/App.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/luketandjung/Projects/enki/src/content/views/App.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("button", { className: "toggle-button", onClick: toggle, children: /* @__PURE__ */ jsxDEV("img", { src: Logo, alt: "CRXJS logo", className: "button-icon" }, void 0, false, {
      fileName: "/Users/luketandjung/Projects/enki/src/content/views/App.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/luketandjung/Projects/enki/src/content/views/App.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/luketandjung/Projects/enki/src/content/views/App.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
_s(App, "NKb1ZOdhT+qUsWLXSgjSS2bk2C4=");
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/luketandjung/Projects/enki/src/content/views/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/luketandjung/Projects/enki/src/content/views/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
