import Blank_PrimaryPageImage from "../images/boilerplates/Blank_PrimaryPage.png"
import Blank_SecondaryPageImage from "../images/boilerplates/Blank_SecondaryPage.png"
import DefinedColumns_1ColImage from "../images/boilerplates/DefinedColumns_1Col.png"
import DefinedColumns_5050ColImage from "../images/boilerplates/DefinedColumns_5050Col.png"

const BLANKPAGES = {
  name: "Blank Pages",
  children: [
    {
      name: "Primary Page",
      description:
        "A primary page is one which is generally accessed from the nav bar",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=6508-165181&mode=design&t=vnxFZbp0P1WRfXm0-4",
      componentKey: "dd8ccc2c9bb21a2d35cb11ec9260b55bc01a3110",
      imageSrc: Blank_PrimaryPageImage,
    },
    {
      name: "Secondary Page",
      description:
        "A secondary page is generally accessed from a primary page, you can go back to the Primary page by clicking the ‘Back’ in the page header. This is baked into the page header component.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=6542-175720&mode=design&t=vnxFZbp0P1WRfXm0-4",
      componentKey: "4bc648d4d3ed40d68e7beeceb11f11114f044506",
      imageSrc: Blank_SecondaryPageImage,
    },
  ],
}

const DEFINEDCOLUMNS = {
  name: "Defined Columns",
  children: [
    {
      name: "1 Col",
      description:
        "Generally 1 column layouts are used for items such as the Data Grid, the width should extend 100%.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=6501-192659&mode=design&t=vnxFZbp0P1WRfXm0-4",
      componentKey: "96b5e3f3eeaa1c447a180fcf4480ce8d2715655a",
      imageSrc: DefinedColumns_1ColImage,
    },
    {
      name: "2 cols 50% 50%",
      description:
        "The page has two equally defined columns with a 24px gutter between the two.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7111-165235&mode=design&t=vnxFZbp0P1WRfXm0-4",
      componentKey: "e54aaf034166254d30ecb8cae8efc420df25c80a",
      imageSrc: DefinedColumns_5050ColImage,
    },
  ],
}

export const BOILERPLATES = [BLANKPAGES, DEFINEDCOLUMNS]
