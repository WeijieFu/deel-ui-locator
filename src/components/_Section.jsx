import {
    Disclosure,
  } from "@create-figma-plugin/ui"
import {useState} from "preact/hooks"
import styles from "../styles.css"
import { h } from "preact"

import { _Box } from "./_Box"

export const _Section = ({section}) => {
    // console.log(section)
    const [open, setOpen] = useState(true)
    const handleClick = () => {
      setOpen(!open)
    }
    return (
      <Disclosure title={section.name} open={open} onClick={handleClick}>
         <div class={styles.boxesWrapper}>
            {section.children.map((comp)=>{
              return (
                <_Box comp={comp} />
              )
            })}
           </div>
      </Disclosure>
    )
  }