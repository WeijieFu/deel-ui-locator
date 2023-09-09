import styles from "../styles.css"
import { h } from "preact"
import { emit } from "@create-figma-plugin/utilities"
export const _IconButton = ({ src, url, type }) => {
  return (
    <a
      href={url}
      target='_blank'
      onClick={() => {
        emit("GOTO", type)
      }}
    >
      <div class={styles.iconButton}>
        <img src={src} />
      </div>
    </a>
  )
}
