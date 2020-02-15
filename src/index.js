import React from "react"
import { hydrate, render } from "react-dom"
import App from "./App"
import { createGlobalStyle } from "styled-components"
import theme from "./_theme"

const Style = createGlobalStyle`
    *{
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${theme.red};
        color: ${theme.white};
        padding: 20px;
    }
`

const rootElement = document.getElementById("root")

if (rootElement.hasChildNodes()) {
    hydrate(<><Style/><App/></>, rootElement)
} else {
    render(<><Style/><App/></>, rootElement)
}