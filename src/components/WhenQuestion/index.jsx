import React, { useState } from "react"
import styled from "styled-components"
import theme from "../../_theme"

const Outer = styled.fieldset`
    border: none;
    margin-bottom: 35px;
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
    grid-auto-rows: 1fr;
    grid-auto-flow: row;
`


const Option = styled.div`
    &:focus-within{
        label{
            border: 1px solid ${theme.red}
        }
    }
    margin-bottom: 15px;
`

const LabelCard = styled.label`
    display: flex;
    align-items: center;
    min-height: 62px;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    background: ${theme.white};
    white-space: wrap-word;
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

const TextInput = styled.input`
    padding: 15px;    
    box-shadow: 0px 6px 20px ${theme.paleShadow};
    color: ${theme.black};
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    border: none;
    color: ${theme.black};
    &::placeholder{
        opacity: 0.5
    }
    &:focus{
        outline: none;
        border: 1px solid ${theme.red}
    }
`

const WhenQuestion = ({
    question, 
    onChange,
    value
}) => {

    const [now, setNow] = useState(true)

    return(
        <Outer>
            <Question>
                {question}
            </Question>
            <Options>

                    <Option>
                        <Input 
                            type="radio" 
                            name="when"
                            checked={now}
                            id="now"
                            onChange={e => {
                                onChange("Just now")
                                setNow(true)
                            }}
                        />
                        <LabelCard 
                            htmlFor="now"
                        >Just now</LabelCard>
                    </Option>    

                    <Option>
                        <Input 
                            type="radio" 
                            name="when"
                            checked={!now}
                            id="earlier"
                            onChange={e => {
                                onChange("")
                                setNow(false)
                            }}
                        />
                        <LabelCard 
                            htmlFor="earlier"
                        >Earlier</LabelCard>
                    </Option>   


            </Options>
            {!now &&
                <TextInput 
                value={value} 
                onChange={e => onChange(e.target.value)}
                placeholder="When did this happen?"
            />
            }
        </Outer>
    )
}

export default WhenQuestion