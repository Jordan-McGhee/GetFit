import React from "react";
import { Link } from "react-router-dom";

const Button = props => {

    let element

    if (props.link) {
        return (
            <button className="button" style={ props.style } type = { props.type }>
                <Link to= { props.link }>
                    { props.text }
                </Link>
            </button>
        )
    } else {
        return (
            <button className="button" style={ props.style } type = { props.type } onClick = { props.onClick }>
                { props.text }
            </button>
        )
    }

}

export default Button