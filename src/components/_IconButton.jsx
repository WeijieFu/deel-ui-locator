import styles from "../styles.css"
import { h } from "preact"

export const _IconButton = ({ src, url }) => {
    return (
      <a href={url} target="_blank" >
        <div class={styles.iconButton}>
          <img src={src} />
        </div>
      </a>
    )
  }