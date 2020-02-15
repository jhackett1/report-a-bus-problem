import React from "react"
import bigTick from "./big-tick.svg"
import styled from "styled-components"
import theme from "../_theme"
import Footer from "../components/Footer"

const Holder = styled.div`
        margin: 15px auto 35px auto;
        width: 100%;
        max-width: 400px;
`

const Headline = styled.h1`
    text-transform: uppercase;
    line-height: 1;
    font-size: 2rem;
    max-width: 400px;
    margin: 15px auto;
`

const Lede = styled.p`
    font-size: 1.1rem;
    max-width: 400px;
    margin: 0 auto 10px auto;
`

const Link = styled.a`
    display: inline-block;
    color: ${theme.white};
    max-width: 400px;
    font-size: 1.1rem;
    &:hover{
        text-decoration: none;
    }
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

const SuccessScene = () =>
    <>
        <Holder>
            <img src={bigTick} alt=""/>
            <Headline>Thanks, we've got your report</Headline>
            <Lede>Content about what happens next.</Lede>
            <Link href="/">Make another report</Link>
        </Holder>
        <Panel>
            Mailing list form here
        </Panel>
        <Footer/>
    </>

export default SuccessScene