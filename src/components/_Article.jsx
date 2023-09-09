import styles from "../styles.css"
import { h } from "preact"

import { _IconButton } from "./_IconButton"
import { emit } from "@create-figma-plugin/utilities"

export const _Article = ({ comp }) => {
  return (
    <a
      href={comp.link}
      target='_blank'
      class={styles.link}
      onClick={() => {
        emit("GOTO", "go to documentation")
      }}
    >
      <div class={`${styles.article}`}>{comp.name}</div>
    </a>
  )
}
