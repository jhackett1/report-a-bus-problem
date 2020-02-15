import React from "react"
import styled from "styled-components"
import lightLoader from "./loader-light.svg"
import loader from "./loader-red.svg"

const Img = styled.img`
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

const AbsoluteImg = styled(Img)`
    position: absolute;
    right: 15px;
    bottom: 12px;
`

const Loader = ({
    light,
    alt
}) => 
    light ? 
        <Img src={lightLoader} alt={alt || ""}/> : 
        <AbsoluteImg src={loader} alt={alt || ""}/>

export default Loader