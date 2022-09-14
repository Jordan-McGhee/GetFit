import React from "react";
import { Link } from "react-router-dom";

import "./Button.css"

const Button = props => {

    if (props.link) {
        return (
            <button className={ props.className || "button border border-gray-1 rounded-md shadow hover:cursor-pointer" } style={ props.style } type = { props.type }>
                <Link to= { props.link }>
                    { props.text }
                </Link>
            </button>
        )
    } else {
        return (
            <button className= { props.className || "button border border-gray-1 rounded-md shadow hover:cursor-pointer m-1" } style={ props.style } type = { props.type } onClick = { props.onClick }>
                { props.text }
            </button>
        )
    }

}

export default Button