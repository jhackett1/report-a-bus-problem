import React, { useState } from "react"
import styled from "styled-components"
import theme from "../../_theme"
import arrow from "./arrow.svg"
import loader from "./loader.svg"
import fetch from "isomorphic-unfetch"

const Outer = styled.div`
    position: relative;
    margin-bottom: 35px;
`

const Input = styled.input`
    padding: 15px;    
    padding-right: 60px;
    box-shadow: 0px 6px 20px ${theme.paleShadow};
    color: ${theme.black};
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    border: none;
    color: ${theme.black};
`

const Question = styled.label`
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    display: block;
`

const Hint = styled.p`
    margin-bottom: 15px;
`

const Button = styled.button`
    background: none;
    border: none;
    position: absolute;
    right: 15px;
    bottom: 9px;
    cursor: pointer;
`

const Loader = styled.img`
    position: absolute;
    right: 15px;
    bottom: 12px;
    animation: spin 1.5s infinite;
    @keyframes spin {
        from{
            transform: rotate(0deg)
        }
        to{
            transform: rotate(360deg)
        }
    }
`

const RouteQuestion = ({
    question,
    onChange,
    value,
    hint
}) => {

    const [ finding, setFinding ] = useState(false)

    const geolocate = e => {
        e.preventDefault()
        if (navigator.geolocation) {
            setFinding(true)
            navigator.geolocation.getCurrentPosition( async location => {
                let { latitude, longitude } = location.coords
                let res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                let { address } = await res.json()
                onChange(`Near ${address.road}, ${address.suburb}, ${address.city}, ${address.postcode}`)
                setFinding(false)
            })
        }
    }

    return(
        <Outer>
            <Question>{question}</Question>
            <Hint>{hint}</Hint>
            <Input value={value} onChange={e => onChange(e.target.value)}/>        
            {finding ? <Loader src={loader} alt=""/> : <Button onClick={geolocate}><img src={arrow} alt="use my current location"/></Button>}
        </Outer>
    )
}


export default RouteQuestion