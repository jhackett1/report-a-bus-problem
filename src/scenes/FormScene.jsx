import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import data from "../busRoutes.json"
import RadioQuestion from "../components/RadioQuestion"

const Headline = styled.h1`
    text-transform: uppercase;
    line-height: 1;
    font-size: 2.5rem;
    margin-bottom: 15px;
`

const Lede = styled.p`
    font-size: 1.1rem;
    margin-bottom: 25px;
`

const Panel = styled.form`
    background: ${theme.pale};
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0px 5px 20px ${theme.redShadow};
    color: ${theme.black};
`

const FormScene = ({
    submit
}) => {

    const [ whatWentWrong, setWhatWentWrong ] = useState(false)

    return(
        <>
            <Headline>Help us improve Sheffield’s buses</Headline>
            <Lede>We want to build a map of how the city’s bus services are letting us all down, and use it to campaign for much-needed improvements.</Lede>
            <Panel>
                <RadioQuestion
                    question="What went wrong?"
                    selected={whatWentWrong}
                    onChange={setWhatWentWrong}
                    options={[
                        "Delayed",
                        "Cancelled", 
                        "Something else"
                    ]}
                />
            </Panel>
        </>
    )
}

export default FormScene