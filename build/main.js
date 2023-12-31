var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@create-figma-plugin/utilities/lib/events.js
function on(name, handler) {
  const id = `${currentId}`;
  currentId += 1;
  eventHandlers[id] = { handler, name };
  return function() {
    delete eventHandlers[id];
  };
}
function invokeEventHandler(name, args) {
  let invoked = false;
  for (const id in eventHandlers) {
    if (eventHandlers[id].name === name) {
      eventHandlers[id].handler.apply(null, args);
      invoked = true;
    }
  }
  if (invoked === false) {
    throw new Error(`No event handler with name \`${name}\``);
  }
}
var eventHandlers, currentId;
var init_events = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
    eventHandlers = {};
    currentId = 0;
    if (typeof window === "undefined") {
      figma.ui.onmessage = function(args) {
        if (!Array.isArray(args)) {
          return;
        }
        const [name, ...rest] = args;
        if (typeof name !== "string") {
          return;
        }
        invokeEventHandler(name, rest);
      };
    } else {
      window.onmessage = function(event) {
        if (typeof event.data.pluginMessage === "undefined") {
          return;
        }
        const args = event.data.pluginMessage;
        if (!Array.isArray(args)) {
          return;
        }
        const [name, ...rest] = event.data.pluginMessage;
        if (typeof name !== "string") {
          return;
        }
        invokeEventHandler(name, rest);
      };
    }
  }
});

// node_modules/@create-figma-plugin/utilities/lib/ui.js
function showUI(options, data) {
  if (typeof __html__ === "undefined") {
    throw new Error("No UI defined");
  }
  const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}</script>`;
  figma.showUI(html, __spreadProps(__spreadValues({}, options), {
    themeColors: typeof options.themeColors === "undefined" ? true : options.themeColors
  }));
}
var init_ui = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/index.js
var init_lib = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
    init_events();
    init_ui();
  }
});

// src/api/endpoint.js
var url;
var init_endpoint = __esm({
  "src/api/endpoint.js"() {
    "use strict";
    url = "https://api-eu-west-2.hygraph.com/v2/clmc22rvx13mf01uj7se99gho/master";
  }
});

// src/api/getData.js
var getData;
var init_getData = __esm({
  "src/api/getData.js"() {
    "use strict";
    init_endpoint();
    getData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query: `
                query {
                    components(first:100) {
                      type
                      name
                      figmaLink
                      storybookLink
                      documentationLink
                      thumbnail {
                        url
                      }
                    }
                    boilerplates(first:100) {
                      type
                      name
                      description
                      figmaLink
                      componentKey
                      thumbnail{
                        url
                      }
                    }
                    resources(first:100){
                      type
                      name
                      link
                    }
                  }
              `
          })
        });
        const result = await response.json();
        return [
          result.data.components,
          result.data.boilerplates,
          result.data.resources
        ];
      } catch (err) {
        console.log(err);
      }
    };
  }
});

// src/api/postData.js
var insertData;
var init_postData = __esm({
  "src/api/postData.js"() {
    "use strict";
    init_endpoint();
    insertData = async (currentUser, type) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query: `
                mutation {
                    createView(data:{name: "${currentUser}", action: "${type}"}) {
                    id
                    } 
                }
              `
          })
        });
      } catch (err) {
        console.log(err);
      }
    };
  }
});

// src/data/formatData.js
var formatComponents, formatBoilerplates, formatResources;
var init_formatData = __esm({
  "src/data/formatData.js"() {
    "use strict";
    formatComponents = (components) => {
      const componentTypes = [];
      components.map((comp, index) => {
        if (!componentTypes.includes(comp.type)) {
          componentTypes.push(comp.type);
        }
      });
      const COMPONENTS = componentTypes.map((componentType, index) => {
        return { name: componentType, children: [] };
      });
      COMPONENTS.forEach((comp) => {
        components.forEach((c) => {
          if (c.type === comp.name) {
            comp.children.push({
              name: c.name,
              figmaLink: c.figmaLink,
              storybookLink: c.storybookLink,
              documentationLink: c.documentationLink,
              imageSrc: c.thumbnail.url
            });
          }
        });
      });
      return COMPONENTS;
    };
    formatBoilerplates = (boilerplates) => {
      const boilerplatesTypes = [];
      boilerplates.map((bp, index) => {
        if (!boilerplatesTypes.includes(bp.type)) {
          boilerplatesTypes.push(bp.type);
        }
      });
      const BOILERPLATES = boilerplatesTypes.map((boilerplateType, index) => {
        return { name: boilerplateType, children: [] };
      });
      BOILERPLATES.forEach((bp) => {
        boilerplates.forEach((b) => {
          if (b.type === bp.name) {
            bp.children.push({
              name: b.name,
              figmaLink: b.figmaLink,
              description: b.description,
              componentKey: b.componentKey,
              imageSrc: b.thumbnail.url
            });
          }
        });
      });
      return BOILERPLATES;
    };
    formatResources = (resources) => {
      const resourcesTypes = [];
      resources.map((rs, index) => {
        if (!resourcesTypes.includes(rs.type)) {
          resourcesTypes.push(rs.type);
        }
      });
      const RESOURCES = resourcesTypes.map((resorceType, index) => {
        return { name: resorceType, children: [] };
      });
      RESOURCES.forEach((rs) => {
        resources.forEach((r) => {
          if (r.type === rs.name) {
            rs.children.push({
              name: r.name,
              link: r.link
            });
          }
        });
      });
      return RESOURCES;
    };
  }
});

// src/main.jsx
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
function main_default() {
  init();
  on("ADDBOILERPLATE", async (componentKey) => {
    figma.importComponentByKeyAsync(componentKey).then((comp) => {
      const instance = comp.createInstance();
      figma.viewport.scrollAndZoomIntoView([instance]);
    });
    await insertData(figma.currentUser.name, "add boilerplate");
  });
  on("GOTO", async (type) => {
    await insertData(figma.currentUser.name, type);
  });
}
var init;
var init_main = __esm({
  "src/main.jsx"() {
    "use strict";
    init_lib();
    init_getData();
    init_postData();
    init_formatData();
    init = async () => {
      const [_components, _boilerplates, _resources] = await getData();
      const COMPONENTS = formatComponents(_components);
      const BOILERPLATES = formatBoilerplates(_boilerplates);
      const RESOURCES = formatResources(_resources);
      await insertData(figma.currentUser.name, "open plugin");
      showUI(
        {
          height: 600,
          width: 480
        },
        { data: { COMPONENTS, BOILERPLATES, RESOURCES } }
      );
    };
  }
});

// <stdin>
var modules = { "src/main.jsx--default": (init_main(), __toCommonJS(main_exports))["default"] };
var commandId = true ? "src/main.jsx--default" : figma.command;
modules[commandId]();
