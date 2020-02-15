import React, { useState } from "react"
import FormScene from "./scenes/FormScene"
import SuccessScene from "./scenes/SuccessScene"

const App = () => {
    const [ submitted, setSubmitted ] = useState(false)

    const submit = () => {
        setSubmitted(true)
    }

    return submitted ? 
        <SuccessScene/> : 
        <FormScene submit={submit}/>
}

export default App