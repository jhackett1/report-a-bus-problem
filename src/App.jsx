import React from "react"
import { createGlobalStyle } from "styled-components"

const Style = createGlobalStyle`
    *{
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

const App = () =>
    <>
        <Style/>
        <h1>test</h1>
    </>

export default App