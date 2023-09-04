import { IconPlus32, Stack } from "@create-figma-plugin/ui"

import styles from "../styles.css"
import { h } from "preact"

import { _IconButton } from "./_IconButton"
import FigmaIcon from "../icons/figma.svg"
import AddIcon from "../icons/add.svg"
import { emit } from "@create-figma-plugin/utilities"

export const _BoilerPlate = ({ comp }) => {
  const handleAddBoilerplate = () => {
    emit("ADDBOILERPLATE", comp.componentKey)
  }
  return (
    <div class={`${styles.boilerplate}`}>
      <Stack space='extraSmall'>
        <div class={styles.title}>{comp.name}</div>
        <div className={styles.description}>{comp.description}</div>
        <div class={[styles.iconButtons]}>
          <_IconButton
            src={FigmaIcon}
            url={comp.figmaLink}
          />
          <div
            class={styles.iconButton}
            onClick={handleAddBoilerplate}
          >
            <img src={AddIcon} />
          </div>
        </div>
        <div className={styles.thumbnailWrapper}>
          <img
            class={styles.thumbnail}
            src={comp.imageSrc}
          />
        </div>
      </Stack>
    </div>
  )
}
