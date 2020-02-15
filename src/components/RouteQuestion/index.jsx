import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import arrow from "./arrow.svg"

const Outer = styled.div`
    margin-bottom: 35px;
`

const Select = styled.select`
    padding: 15px;
    box-shadow: 0px 6px 20px ${theme.paleShadow};
    color: ${theme.black};
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    border: none;
    color: ${theme.black};
    appearance: none;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: 96%;
`

const Question = styled.label`
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 15px;
    display: block;
`

const RouteQuestion = ({
    question,
    options,
    onChange,
    selected
}) => 
    <Outer>
        <Question>{question}</Question>
        <Select 
            value={selected.route}
            onChange={e => onChange(options.filter(route => route.route === e.target.value)[0])}
        >        
            <option value=""></option>
            {options.map(route =>        
                <option 
                    key={route.route} 
                    value={route.route}
                >{route.route}</option>            
            )}
        </Select>
    </Outer>

export default RouteQuestion