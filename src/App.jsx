import React, { useState } from "react"
import FormScene from "./scenes/FormScene"
import SuccessScene from "./scenes/SuccessScene"
import fetch from "isomorphic-unfetch"

const App = () => {
    const [ submitted, setSubmitted ] = useState(false)
    const [ submitting, setSubmitting ] = useState(false)

    const submit = async body => {
        setSubmitting(true)
        let res = await fetch(process.env.REACT_APP_FORM_ENDPOINT, {
            method: "post",
            body: JSON.stringify({
                ...body,
                dateSubmitted: new Date().toUTCString()
            })
        })
        if(res.status === 200){
            setSubmitted(true)
            setSubmitting(false)
        }
    }

    return submitted ? 
        <SuccessScene /> : 
        <FormScene 
            submit={submit}
            submitting={submitting}
        />
}

export default App