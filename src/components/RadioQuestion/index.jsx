import React from "react"
import styled from "styled-components"
import theme from "../../_theme"

const Outer = styled.fieldset`
    border: none;
    margin-bottom: 30px;
    animation: fadeIn 0.2s ease-out;
    @keyframes fadeIn {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`

const Question = styled.legend`
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 15px;
`

const Options = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`


const Option = styled.div``

const LabelCard = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    background: ${theme.white};
    padding: 10px;
    font-size: 0.95rem;
    height: 100%;
    text-align: center;
    color: ${theme.red};
    cursor: pointer;
    margin-bottom: 10px;
    box-shadow: 0px 6px 20px ${theme.paleShadow};
    transition: transform 0.1s ease-out, box-shadow 0.1s ease-out, color 0.1s ease-out, background 0.1s ease-out;
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
    opacity: 0;
    position: absolute;
    &:checked + label {
        background: ${theme.red};        
        color: ${theme.white};
        box-shadow: 0px 6px 20px ${theme.red}26;
        cursor: inherit;
        &:hover{
            transform: scale(1)
        }
        &:active{
            transform: scale(1)
        }
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
                <Option key={option}>
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
                </Option>    
            )}
        </Options>
    </Outer>

export default RadioQuestion