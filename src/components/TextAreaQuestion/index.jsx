import React from "react"
import styled from "styled-components"
import theme from "../../_theme"

const Outer = styled.div`
    position: relative;
    margin-bottom: 35px;
`

const Textarea = styled.textarea`
    padding: 15px;    
    padding-right: 60px;
    box-shadow: 0px 6px 20px ${theme.paleShadow};
    color: ${theme.black};
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    border: none;
    color: ${theme.black};
    min-width: 100%;
    max-width: 100%;
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

const TextAreaQuestion = ({
    question,
    onChange,
    value,
    hint
}) =>
        <Outer>
            <Question>{question}</Question>
            <Hint>{hint}</Hint>
            <Textarea
                rows="3"
                onChange={e => onChange(e.target.value)}
            >{value}</Textarea>
        </Outer>

export default TextAreaQuestion