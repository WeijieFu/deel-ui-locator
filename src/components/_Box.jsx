import { Stack } from "@create-figma-plugin/ui"

import styles from "../styles.css"
import { h } from "preact"

import { _IconButton } from "./_IconButton"
import FigmaIcon from "../icons/figma.svg"
import StorybookIcon from "../icons/storybook.svg"
import DocIcon from "../icons/doc.svg"

export const _Box = ({ comp }) => {
  return (
    <div class={styles.box}>
      <Stack space='extraSmall'>
        <div class={styles.title}>{comp.name}</div>
        <div class={[styles.iconButtons]}>
          <_IconButton
            src={FigmaIcon}
            url={comp.figmaLink}
            type='go to figma'
          />
          {comp.storybookLink && (
            <_IconButton
              src={StorybookIcon}
              url={comp.storybookLink}
              type='go to storybook'
            />
          )}
          {comp.documentationLink && (
            <_IconButton
              src={DocIcon}
              url={comp.documentationLink}
              type='go to component documentation'
            />
          )}
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
