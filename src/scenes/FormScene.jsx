import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import data from "../busRoutes.json"
import RadioQuestion from "../components/RadioQuestion"
import RouteQuestion from "../components/RouteQuestion"
import LocationQuestion from "../components/LocationQuestion"
import TextAreaQuestion from "../components/TextAreaQuestion"

const Headline = styled.h1`
    text-transform: uppercase;
    line-height: 1;
    font-size: 2.5rem;
    max-width: 400px;
    margin: 0 auto 15px auto;
`

const Lede = styled.p`
    font-size: 1.1rem;
    max-width: 400px;
    margin: 0 auto 25px auto;
`

const Panel = styled.form`
    background: ${theme.pale};
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0px 5px 20px ${theme.redShadow};
    color: ${theme.black};
    max-width: 400px;
    margin: 0 auto;
`

const FormScene = ({
    submit
}) => {

    const [ route, setRoute ] = useState(false)
    const [ way, setWay ] = useState(false)    
    const [ location, setLocation ] = useState("")    
    const [ whatWentWrong, setWhatWentWrong ] = useState(false)
    const [ delay, setDelay ] = useState(false)
    const [ otherProblems, setOtherProblems ] = useState("")

    const alphabetise = (a, b) => {
        if(a.route < b.route) { return -1; }
        if(a.route > b.route) { return 1; }
        return 0;
    }

    return(
        <>
            <Headline>Help us improve Sheffield’s buses</Headline>
            <Lede>We want to build a map of how the city’s bus services are letting us all down, and use it to campaign for much-needed improvements.</Lede>
            <Panel>

                <RouteQuestion
                    question="Which route?"
                    selected={route}
                    onChange={setRoute}
                    options={data.sort(alphabetise)}
                />

                {route &&
                    <RadioQuestion
                        question="Which way?"
                        selected={way}
                        onChange={setWay}
                        options={route.ends.map(end => `Toward ${end}`)}
                    />
                }

                <LocationQuestion
                    question="Which bus stop?"
                    hint="Describe what it's near, or use your current location"
                    value={location}
                    onChange={setLocation}
                />

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

                {whatWentWrong === "Delayed" &&
                    <RadioQuestion
                        question="How long was the delay?"
                        selected={delay}
                        onChange={setDelay}
                        options={[
                            "Less than 10 minutes",
                            "10-20 minutes", 
                            "20-30 minutes",
                            "More than 30 minutes"
                        ]}
                    />
                }

                <TextAreaQuestion
                    question="Any other problems?"
                    hint="For example, wheelchair access or the condition of the bus"
                    value={otherProblems}
                    onChange={setOtherProblems}
                />

            </Panel>
        </>
    )
}

export default FormScene