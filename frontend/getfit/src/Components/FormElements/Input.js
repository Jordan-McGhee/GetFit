import React, { useState, useEffect } from "react";

const Input = props => {

    const [ inputValue, setInputValue ] = useState(props.value ? props.value : "")

    const [ inputTouched, setInputTouched ] = useState(false)

    const inputIsValid = inputValue !== "" && inputValue !== 0 && inputTouched

    const inputHasError = !inputIsValid && inputTouched

    const changeHandler = event => {
        setInputValue(event.target.value)
        // console.log(inputValue)
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
            value = { inputValue }
            className = { inputHasError && 'border border-red-600'} 
            // isValid = { inputIsValid }
            // value = { props.value || inputValue } ?? 
        />

    return (
        <div className="flex">
            <label htmlFor={ props.id } name = { props.id} className = "text-lg font-semibold mr-4">
                { props.label }
            </label>
            
            { element }
            { inputHasError && <p className="text-red-700">{ props.errorText }</p> }
        </div>
    )
}

export default Input