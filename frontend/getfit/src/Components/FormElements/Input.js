import React, { useState, useEffect } from "react";

const Input = props => {

    const [ inputValue, setInputValue ] = useState(props.value ? props.value : "")

    const [ inputTouched, setInputTouched ] = useState(false)

    const inputIsValid = inputValue !== "" && inputValue !== 0

    const inputHasError = !inputIsValid && inputTouched

    const changeHandler = event => {
        setInputValue(event.target.value)
    }

    const blurHandler = event => {
        setInputTouched(true)
    }



    const element = 
        <input
            id= { props.id }
            type = { props.type }
            placeholder = { props.placeholder || ""}
            onChange = { changeHandler }
            onBlur = { blurHandler }
            value = { props.value || ""}
        />

    return (
        <div className="">
            <label htmlFor={ props.id }>
                { props.label }
            </label>
            
            { element }
            { inputHasError && <p>{ props.errorText }</p> }
        </div>
    )
}

export default Input