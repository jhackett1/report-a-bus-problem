import React from "react"
import styled from "styled-components"

const Headline = styled.h1`
    text-transform: uppercase;
    line-height: 1;
    font-size: 2.5rem;
    margin-bottom: 15px;
`

const Lede = styled.p`
    font-size: 1.1rem;
`

const FormScene = ({
    submit
}) =>
    <>
        <Headline>Help us improve Sheffield’s buses</Headline>
        <Lede>We want to build a map of how the city’s bus services are letting us all down, and use it to campaign for much-needed improvements.</Lede>
    </>

export default FormScene