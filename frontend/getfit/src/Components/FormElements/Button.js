import React from "react";
import { Link } from "react-router-dom";

const Button = props => {

    let element

    if (props.link) {
        return (
            <Link to= { props.link }>
                <button className="button" style={ props.style } type = { props.type }>
                    { props.text }
                </button>
            </Link>
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