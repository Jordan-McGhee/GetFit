import React from 'react';

import "./Card.css"

const Card = props => {

    let header, footer

    if ( props.header ) {
        header = 
            <header className= { 'font-bold text-3xl border-b-2 mb-4 py-2 '}>
            { props.header }
            </header>
    }

    if ( props.footer ) {
        footer = 
            <footer className='flex justify-end mt-3 shrink border-top-2'>
                { props.footer }
            </footer>
    }

    return(
        <div className={ props.className || `flex flex-col p-6 rounded-lg my-2 border border-gray-2 bg-white`} style={props.style}>
            
            { header ? header : null }

            
            { props.children }

            { footer ? footer : null }
        </div>
    )
}

export default Card