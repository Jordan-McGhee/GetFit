import React from "react";

const Button = props => {

    return (
        <button className="button" style={ props.style } type = { props.type }>
            { props.text }
        </button>
    )
}

export default Button