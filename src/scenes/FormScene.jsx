import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import data from "../busRoutes.json"
import RadioQuestion from "../components/RadioQuestion"
import RouteQuestion from "../components/RouteQuestion"
import WhenQuestion from "../components/WhenQuestion"
import LocationQuestion from "../components/LocationQuestion"
import TextAreaQuestion from "../components/TextAreaQuestion"
import Loader from "../components/Loader"

const Headline = styled.h1`
    text-transform: uppercase;
    line-height: 1;
    font-size: 2.5rem;
    max-width: 400px;
    margin: 15px auto;
`

const Lede = styled.p`
    font-size: 1.1rem;
    max-width: 400px;
    margin: 0 auto 35px auto;
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

const Button = styled.button`
    padding: 15px;
    width: 100%;
    text-align: center;
    color: white;
    background: ${theme.red};
    font-weight: bold;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    margin-bottom: 15px;
    min-height: 54.5px;
    cursor: pointer;
    &:disabled{
        cursor: inherit;
        padding: 10px;
    }
`

const Notice = styled.p`
    text-align: center;
    font-size: 0.9rem;
`

const FormScene = ({
    submit,
    submitting
}) => {

    const [ route, setRoute ] = useState(false)
    const [ way, setWay ] = useState(false)    
    const [ location, setLocation ] = useState("")    
    const [ when, setWhen ] = useState("Just now")
    const [ whatWentWrong, setWhatWentWrong ] = useState(false)
    const [ delay, setDelay ] = useState(false)
    const [ otherProblems, setOtherProblems ] = useState("")

    const alphabetise = (a, b) => {
        if(a.route < b.route) { return -1 }
        if(a.route > b.route) { return 1 }
        return 0;
    }

    const handleSubmit = e => {
        e.preventDefault()
        submit({
            route: route.route,
            way,
            location,
            whatWentWrong,
            delay,
            otherProblems
        })
    }

    return(
        <>
            <Headline>Help us improve Sheffield’s buses</Headline>
            <Lede>We want to build a map of how the city’s bus services are letting us all down, and use it to campaign for much-needed improvements.</Lede>
            <Panel onSubmit={handleSubmit}>
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
                <WhenQuestion
                    question="When was this?"
                    value={when}
                    onChange={setWhen}
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
                {submitting ? 
                    <Button disabled><Loader light alt="Loading..."/></Button> : 
                    <Button>Send your report</Button>
                }
                <Notice>Your report is totally anonymous and helps us campaign to make Sheffield’s buses better.</Notice>
            </Panel>
        </>
    )
}

export default FormScene