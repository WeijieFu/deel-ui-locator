import { Disclosure } from "@create-figma-plugin/ui"
import { useState } from "preact/hooks"
import styles from "../styles.css"
import { h } from "preact"

import { _Box } from "./_Box"
import { _BoilerPlate } from "./_BoilerPlate"
import { _Article } from "./_Article"

export const _Section = ({ section, currentTab }) => {
  // console.log(section)
  const [open, setOpen] = useState(true)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <Disclosure
      title={section.name}
      open={open}
      onClick={handleClick}
    >
      <div
        class={styles.boxesWrapper}
        style={{
          gridTemplateColumns:
            currentTab === "COMPONENTS"
              ? `repeat(3, 134px)`
              : currentTab === "BOILERPLATES"
              ? `repeat(2, 205px)`
              : `repeat(1, 420px)`,
        }}
      >
        {section.children.map((comp) => {
          if (currentTab === "COMPONENTS") {
            return <_Box comp={comp} />
          }
          if (currentTab === "BOILERPLATES") {
            return <_BoilerPlate comp={comp} />
          }
          if (currentTab === "USEFUL RESOURCES") {
            return <_Article comp={comp} />
          }
        })}
      </div>
    </Disclosure>
  )
}
