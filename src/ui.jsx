import { Container, render, VerticalSpace, Tabs } from "@create-figma-plugin/ui"
import { useState } from "preact/hooks"
import { h } from "preact"

import { _Section } from "./components/_Section"
import { _BoilerPlate } from "./components/_BoilerPlate"
import { _About } from "./components/_About"

function Plugin({ data }) {
  // console.log(data)
  const [currentTab, setCurrentTab] = useState("COMPONENTS")
  const tabOptions = [
    {
      children: (
        <div>
          {data.COMPONENTS.map((section) => {
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
          {data.BOILERPLATES.map((section) => {
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
          {data.RESOURCES.map((section) => {
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
