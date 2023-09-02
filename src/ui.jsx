import {
  Container,
  render,
  VerticalSpace,
} from "@create-figma-plugin/ui"

import { h } from "preact"

import { _Section } from "./components/_Section"
import {DATA} from "./data"

function Plugin() {
  return (
    <Container space="extraSmall">
      <VerticalSpace space="extraSmall" />
          {DATA.map((section)=>{
            return <_Section section={section}/>
          })}
      <VerticalSpace space="extraSmall" />
    </Container>
  )
}


export default render(Plugin)
