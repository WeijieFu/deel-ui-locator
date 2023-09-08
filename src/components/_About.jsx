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
    <Container space='medium'>
      <VerticalSpace space='medium' />
      <Stack space='medium'>
        <Text>
          This plugin creates a central place for the resources related to the
          Deel UI design system.
        </Text>
        <Text>
          If you have any feedback or suggestion, please reach out to @Weijie Fu
          on Slack.
        </Text>
        <VerticalSpace space='large' />
        <Text>Developed by: Weijie Fu</Text>
        <Text>Last update: Sep 4, 2023</Text>
        <a
          href={"https://github.com/WeijieFu/deel-ui-locator"}
          target='_blank'
          class={styles.link}
        >
          <div class={styles.article}>Download the latest version</div>
        </a>
      </Stack>
    </Container>
  )
}
