import { h } from "preact"
import {
  Container,
  Stack,
  VerticalSpace,
  Text,
  Button,
} from "@create-figma-plugin/ui"
import styles from "../styles.css"
export const _About = () => {
  return (
    <div className={styles.about}>
      <Stack space='medium'>
        <p>
          This plugin creates a central place for the resources related to the
          Deel UI design system.
        </p>
        <p>
          If you have any feedback or suggestion, please reach out to @Weijie Fu
          on Slack.
        </p>
        <VerticalSpace space='large' />
        <p>Developed by: Weijie Fu</p>
        <p>Last update: Sep 16, 2023</p>
        <a
          href={"https://github.com/WeijieFu/deel-ui-locator"}
          target='_blank'
          class={styles.link}
        >
          <div class={styles.article}>Download the latest version</div>
        </a>
      </Stack>
    </div>
  )
}
