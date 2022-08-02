import React from 'react';

import "./Card.css"

const Card = props => {

    let header, footer

    if ( props.header ) {
        header = 
            <header>
            { props.header }
            </header>
    }

    if ( props.footer ) {
        footer = 
            <footer>
                { props.footer }
            </footer>
    }

    return(
        <div className={`card ${props.className}`} style={props.style}>
            
            { header ? header : null }

            
            { props.children }

            { footer ? footer : null }
        </div>
    )
}

export default Card