import React from "react"
import ReactDOM from "react-dom"
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

ReactDOM.render(<><Style/><App/></>, document.getElementById('root'))