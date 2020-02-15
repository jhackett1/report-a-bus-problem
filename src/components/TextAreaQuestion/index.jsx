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
    margin-bottom: 10px;
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

const Optional = styled.p`
    opacity: 0.5;
    text-align: right;
    font-size: 0.9rem;
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
                value={value}
            />
            <Optional>(optional)</Optional>
        </Outer>

export default TextAreaQuestion