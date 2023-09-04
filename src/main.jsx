import { on, once, showUI } from "@create-figma-plugin/utilities"
export default function () {
  on("ADDBOILERPLATE", (componentKey) => {
    console.log(componentKey)
    figma.importComponentByKeyAsync(componentKey).then((comp) => {
      const instance = comp.createInstance()
      figma.viewport.scrollAndZoomIntoView([instance])
    })
  })
  showUI({
    height: 600,
    width: 480,
  })
}
