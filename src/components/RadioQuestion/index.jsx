import React from "react"
import styled from "styled-components"
import theme from "../../_theme"

const Outer = styled.fieldset`
    border: none;
`

const Question = styled.legend`
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
`

const Options = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`

const LabelCard = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    background: ${theme.white};
    padding: 10px;
    height: 100%;
    text-align: center;
    color: ${theme.red};
    cursor: pointer;
    margin-bottom: 10px;
    box-shadow: 0px 6px 20px ${theme.paleShadow};
    transition: 0.1s ease-out;
    @supports (display: grid){
        margin-bottom: 0px;
    }
    &:hover{
        transform: scale(1.01)
    }
    &:active{
        transform: scale(0.95)
    }
`

const Input = styled.input`
    display: none;
    &:checked + label {
        background: ${theme.red};        
        color: ${theme.white};
        box-shadow: 0px 6px 20px ${theme.red}26;
    }
`

const RadioQuestion = ({
    question, 
    onChange,
    selected,
    options
}) => 
    <Outer>
        <Question>
            {question}
        </Question>
        <Options>
            {options.map((option, i) =>
                <div key={option}>
                    <Input 
                        type="radio" 
                        value={option}
                        name={question}
                        selected={selected === option}
                        id={`${question}-${i}`}
                        onChange={e => onChange(e.target.value)}
                    />
                    <LabelCard 
                        htmlFor={`${question}-${i}`}
                    >{option}</LabelCard>
                </div>    
            )}
        </Options>
    </Outer>

export default RadioQuestion