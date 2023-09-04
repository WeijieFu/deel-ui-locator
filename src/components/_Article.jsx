import { Stack } from "@create-figma-plugin/ui"

import styles from "../styles.css"
import { h } from "preact"

import { _IconButton } from "./_IconButton"
import FigmaIcon from "../icons/figma.svg"
import StorybookIcon from "../icons/storybook.svg"
import DocIcon from "../icons/doc.svg"

export const _Article = ({ comp }) => {
  return (
    <a
      href={comp.link}
      target='_blank'
      class={styles.link}
    >
      <div class={styles.article}>{comp.name}</div>
    </a>
  )
}
