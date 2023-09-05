import Blank_PrimaryPageImage from "../images/boilerplates/Blank_PrimaryPage.png"
import Blank_SecondaryPageImage from "../images/boilerplates/Blank_SecondaryPage.png"
import DefinedColumns_1ColImage from "../images/boilerplates/DefinedColumns_1Col.png"
import DefinedColumns_5050ColImage from "../images/boilerplates/DefinedColumns_5050Col.png"
import DefinedColumns_5842ColImage from "../images/boilerplates/DefinedColumns_5842Col.png"
import DefinedColumns_3366ColImage from "../images/boilerplates/DefinedColumns_3366Col.png"
import ComponentLayouts_CardsImage from "../images/boilerplates/ComponentLayouts_Cards.png"
import ComponentLayouts_ProductLandingPageImage from "../images/boilerplates/ComponentLayouts_ProductLandingPage.png"
import Tables_SimpleTableImage from "../images/boilerplates/Tables_SimpleTable.png"
import Tables_OverflowTableImage from "../images/boilerplates/Tables_OverflowTable.png"
import Tables_FullscreenTableImage from "../images/boilerplates/Tables_FullscreenTable.png"
import MasterDetail_StandaloneImage from "../images/boilerplates/MasterDetail_Standalone.png"
import MasterDetail_WithSearchFilterImage from "../images/boilerplates/MasterDetail_WithSearchFilter.png"
import FormLayouts_FormInitialImage from "../images/boilerplates/FormLayouts_FormInitial.png"
import FormLayouts_FormStep2Image from "../images/boilerplates/FormLayouts_FormStep2.png"
import FormLayouts_DocumentReviewerImage from "../images/boilerplates/FormLayouts_DocumentReviewer.png"
import FormLayouts_EditorImage from "../images/boilerplates/FormLayouts_Editor.png"
import Admin_BlankPrimaryPageImage from "../images/boilerplates/Admin_BlankPrimaryPage.png"
import Admin_BlankSecondaryPageImage from "../images/boilerplates/Admin_BlankSecondaryPage.png"
import Admin_2ColImage from "../images/boilerplates/Admin_2Col.png"
import Admin_TableImage from "../images/boilerplates/Admin_Table.png"
import Admin_MasterDetailImage from "../images/boilerplates/Admin_MasterDetail.png"
import Misc_LoginPageImage from "../images/boilerplates/Misc_LoginPage.png"

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
    {
      name: "2 cols 58% 42%",
      description:
        "The page has a larger left column and a smaller right column. 24px gutter between the two.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7111-180027&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "c3833ad9ba9d7edc184b60ad5c9807af8bde54dd",
      imageSrc: DefinedColumns_5842ColImage,
    },
    {
      name: "2 cols 33% 66%",
      description:
        "Narrow left column and a larger right column with a 24px gutter between the two.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=6512-176537&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "0ea5ff2c4201c268e17201123b2ff7abe61926cb",
      imageSrc: DefinedColumns_3366ColImage,
    },
  ],
}

const COMPONENTLAYOUTS = {
  name: "Component Layouts",
  children: [
    {
      name: "Cards",
      description:
        "Cards should stretch to 33% of the width of the central container with 24px gutters applied.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=6560-190625&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "e6a2f90b4878240e0a0a635c03c42894a950d58e",
      imageSrc: ComponentLayouts_CardsImage,
    },
    {
      name: "Product Landing Page",
      description:
        "Always use the component from the Design System and ensure it stretches the entire length of the container.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=6501-231395&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "98e5ce2dfcca52ce19291cad0b3afc4ed1078b2d",
      imageSrc: ComponentLayouts_ProductLandingPageImage,
    },
  ],
}

const TABLES = {
  name: "Tables",
  children: [
    {
      name: "Simple Table",
      description:
        "Stretches 100% of the width of the table with actions and details pinned to the right of the content.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7111-176473&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "1884c1063316b46bad2abb09ee9aff920a1e2b87",
      imageSrc: Tables_SimpleTableImage,
    },
    {
      name: "Overflow Table",
      description:
        "Example of a table which content exceeds the width of the container, requiring a scroll to see additional content.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7111-172908&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "b8c946641a1307277c8cb846981877ed2da182be",
      imageSrc: Tables_OverflowTableImage,
    },
    {
      name: "Fullscreen Table",
      description:
        "When the full screen mode is enabled, the table will occupy 100% of the viewport width and height.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7315-159577&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "8b8c94b4faa3f3ab0a0478aaa7041b55f65b9c28",
      imageSrc: Tables_FullscreenTableImage,
    },
  ],
}

const MASTERDETAIL = {
  name: "Master Detail",
  children: [
    {
      name: "Standalone",
      description: "",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=6501-218367&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "76abf33503b54e0645957568863281f3fd331f3d",
      imageSrc: MasterDetail_StandaloneImage,
    },
    {
      name: "With Search & Filters",
      description: "",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7130-39084&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "805cbcad13a39c8bf6199512eea51a5807b1791c",
      imageSrc: MasterDetail_WithSearchFilterImage,
    },
  ],
}

const FORMLAYOUTS = {
  name: "Form Layouts",
  children: [
    {
      name: "Form - Initial",
      description: "No back button on step 1",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7334-37353&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "ad5aa82b73c4215ff8e87fc209881ef6c3e10cb9",
      imageSrc: FormLayouts_FormInitialImage,
    },
    {
      name: "Form - Step 2+",
      description: "Back button becomes present",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7334-37438&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "f1150991f8eb30407125cf8b7b602468e416bdd8",
      imageSrc: FormLayouts_FormStep2Image,
    },
    {
      name: "Document Reviewer",
      description: "Fixed 320px form content to the right",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7334-39078&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "7e2f442c15754784bf9332fbc8ccaefeed5a9882",
      imageSrc: FormLayouts_DocumentReviewerImage,
    },
    {
      name: "Editor",
      description: "Fixed 280px container to the left of the screen",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7335-39360&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "238f2a0694f432a9ba1b362950e1b7d7bf175ab7",
      imageSrc: FormLayouts_EditorImage,
    },
  ],
}

const ADMIN = {
  name: "Admin",
  children: [
    {
      name: "Primary Page",
      description:
        "A primary page is one which is generally accessed from the nav bar",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7335-44079&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "8ebe586314668af48489d881566ca4a5d2890ec9",
      imageSrc: Admin_BlankPrimaryPageImage,
    },
    {
      name: "Secondary Page",
      description:
        "A secondary page is generally accessed from a primary page, you can go back to the Primary page by clicking the ‘Back’ in the page header. This is baked into the page header component.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7335-44510&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "d462c5b6aa9aba752094bbb480f7fa78acd48a92",
      imageSrc: Admin_BlankSecondaryPageImage,
    },
    {
      name: "2 Col",
      description:
        "The page has two equally defined columns with a 24px gutter between the two.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7335-52088&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "1968e02b2def862d608b30e537674f9de414ff0f",
      imageSrc: Admin_2ColImage,
    },
    {
      name: "Table",
      description:
        "Stretches 100% of the width of the table with actions and details pinned to the right of the content.",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7335-45660&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "13039f6dc8b35a242ebc72a5c86f8c8550999f2e",
      imageSrc: Admin_TableImage,
    },
    {
      name: "Master Detail",
      description: "",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=7335-47373&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "2da446a306f12a1e649777f72fbbc566ecf73adb",
      imageSrc: Admin_MasterDetailImage,
    },
  ],
}

const MISC = {
  name: "Admin",
  children: [
    {
      name: "Login Page",
      description: "",
      figmaLink:
        "https://www.figma.com/file/XIreAdPByz9d6W6sCpA36W/Library-%2F-Page-Templates?type=design&node-id=6538-173598&mode=design&t=q7VO6ZK5gh8ATxqc-4",
      componentKey: "940ae7782de68f24e864fd0acbc584b8ddf3f845",
      imageSrc: Misc_LoginPageImage,
    },
  ],
}

export const BOILERPLATES = [
  BLANKPAGES,
  DEFINEDCOLUMNS,
  COMPONENTLAYOUTS,
  TABLES,
  MASTERDETAIL,
  FORMLAYOUTS,
  ADMIN,
  MISC,
]
