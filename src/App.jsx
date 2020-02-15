import React, { useState } from "react"
import FormScene from "./containers/FormScene"
import SuccessScene from "./containers/SuccessScene"

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