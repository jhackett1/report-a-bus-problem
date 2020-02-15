import React from "react"
import styled from "styled-components"
import theme from "../../_theme"

const Outer = styled.footer`
    margin: 35px auto;
    max-width: 400px;
    text-align: center;
    a{
        color: ${theme.white};
        &:hover{
            text-decoration: none;
        }
    }
`

const Footer = () =>
    <Outer>
        From <a href="https://www.louisehaigh.org.uk/">Louise Haigh MP</a>
    </Outer>

export default Footer