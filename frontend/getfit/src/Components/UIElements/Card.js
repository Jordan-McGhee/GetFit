import React from 'react';

import "./Card.css"

const Card = props => {

    let header

    if (props.header) {
        header = 
            <header>
            { props.header }
            </header>
    }

    return(
        <div className={`card ${props.className}`} style={props.style}>
            
            { header ? header : null }

            
            { props.children }
        </div>
    )
}

export default Card