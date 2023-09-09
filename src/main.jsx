import { on, once, showUI } from "@create-figma-plugin/utilities"

import { getData } from "./api/getData"
import { insertData } from "./api/postData"
import {
  formatBoilerplates,
  formatComponents,
  formatResources,
} from "./data/formatData"
export default function () {
  init()

  on("ADDBOILERPLATE", async (componentKey) => {
    // console.log(componentKey)
    figma.importComponentByKeyAsync(componentKey).then((comp) => {
      const instance = comp.createInstance()
      figma.viewport.scrollAndZoomIntoView([instance])
    })

    //tracking
    await insertData(figma.currentUser.name, "add boilerplate")
  })
  on("GOTO", async (type) => {
    await insertData(figma.currentUser.name, type)
  })
}

const init = async () => {
  const [_components, _boilerplates, _resources] = await getData()
  // const _boilerplates = await getBoilerplates()

  const COMPONENTS = formatComponents(_components)
  const BOILERPLATES = formatBoilerplates(_boilerplates)
  const RESOURCES = formatResources(_resources)

  await insertData(figma.currentUser.name, "open plugin")

  showUI(
    {
      height: 600,
      width: 480,
    },
    { data: { COMPONENTS, BOILERPLATES, RESOURCES } }
  )
}
