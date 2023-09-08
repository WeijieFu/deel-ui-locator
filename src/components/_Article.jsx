import styles from "../styles.css"
import { h } from "preact"

import { _IconButton } from "./_IconButton"

export const _Article = ({ comp }) => {
  return (
    <a
      href={comp.link}
      target='_blank'
      class={styles.link}
    >
      <div class={`${styles.article}`}>{comp.name}</div>
    </a>
  )
}
