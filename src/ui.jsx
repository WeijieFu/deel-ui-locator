import { Container, render, VerticalSpace, Tabs } from "@create-figma-plugin/ui"
import { useState } from "preact/hooks"
import { h } from "preact"

import { _Section } from "./components/_Section"
import { _BoilerPlate } from "./components/_BoilerPlate"
import { _About } from "./components/_About"
import { COMPONENTS } from "./data/COMPONENTS"
import { BOILERPLATES } from "./data/BOILERPLATES"
import { RESOURCES } from "./data/RESOURCES"

function Plugin() {
  const [currentTab, setCurrentTab] = useState("COMPONENTS")
  const tabOptions = [
    {
      children: (
        <div>
          {COMPONENTS.map((section) => {
            return (
              <_Section
                section={section}
                currentTab={currentTab}
              />
            )
          })}
        </div>
      ),
      value: "COMPONENTS",
    },
    {
      children: (
        <div>
          {BOILERPLATES.map((section) => {
            return (
              <_Section
                section={section}
                currentTab={currentTab}
              />
            )
          })}
        </div>
      ),
      value: "BOILERPLATES",
    },
    {
      children: (
        <div>
          {RESOURCES.map((section) => {
            return (
              <_Section
                section={section}
                currentTab={currentTab}
              />
            )
          })}
        </div>
      ),
      value: "USEFUL RESOURCES",
    },
    {
      children: <_About />,
      value: "ABOUT",
    },
  ]
  const handleTabClick = (value) => {
    setCurrentTab(value)
  }
  return (
    <Container space='extraSmall'>
      <VerticalSpace space='extraSmall' />
      <Tabs
        options={tabOptions}
        value={currentTab}
        onValueChange={handleTabClick}
      />
      <VerticalSpace space='extraSmall' />
    </Container>
  )
}

export default render(Plugin)
