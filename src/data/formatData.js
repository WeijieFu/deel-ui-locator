export const formatComponents = (components) => {
  const componentTypes = []

  components.map((comp, index) => {
    if (!componentTypes.includes(comp.type)) {
      componentTypes.push(comp.type)
    }
  })

  const COMPONENTS = componentTypes.map((componentType, index) => {
    return { name: componentType, children: [] }
  })

  COMPONENTS.forEach((comp) => {
    components.forEach((c) => {
      if (c.type === comp.name) {
        comp.children.push({
          name: c.name,
          figmaLink: c.figmaLink,
          storybookLink: c.storybookLink,
          documentationLink: c.documentationLink,
          imageSrc: c.thumbnail.url,
        })
      }
    })
  })

  return COMPONENTS
}

export const formatBoilerplates = (boilerplates) => {
  const boilerplatesTypes = []
  boilerplates.map((bp, index) => {
    if (!boilerplatesTypes.includes(bp.type)) {
      boilerplatesTypes.push(bp.type)
    }
  })
  const BOILERPLATES = boilerplatesTypes.map((boilerplateType, index) => {
    return { name: boilerplateType, children: [] }
  })
  BOILERPLATES.forEach((bp) => {
    boilerplates.forEach((b) => {
      if (b.type === bp.name) {
        bp.children.push({
          name: b.name,
          figmaLink: b.figmaLink,
          description: b.description,
          componentKey: b.componentKey,
          imageSrc: b.thumbnail.url,
        })
      }
    })
  })
  return BOILERPLATES
}

export const formatResources = (resources) => {
  const resourcesTypes = []
  resources.map((rs, index) => {
    if (!resourcesTypes.includes(rs.type)) {
      resourcesTypes.push(rs.type)
    }
  })
  const RESOURCES = resourcesTypes.map((resorceType, index) => {
    return { name: resorceType, children: [] }
  })
  RESOURCES.forEach((rs) => {
    resources.forEach((r) => {
      if (r.type === rs.name) {
        rs.children.push({
          name: r.name,
          link: r.link,
        })
      }
    })
  })
  return RESOURCES
}
