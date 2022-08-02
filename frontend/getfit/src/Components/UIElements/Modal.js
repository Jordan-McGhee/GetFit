import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { CSSTransition } from "react-transition-group"
import "./Modal.css"

import Backdrop from "./Backdrop"

// render a component inside of the main component, but only return the main component
// use a portal to have this modal display over the actual app. Added a reference point in the index.html file
// wrapped content in a form so we can submit data via the modal if necessary. Otherwise the onSubmit function is set with a default so it won't matter if the form isn't needed


// STATE FUNCTIONS TO MANAGE MODAL
// COPY/PASTE INTO COMPONENTS THAT NEED A MODAL
// REMEMBER REACT.FRAGMENT and props (show, onCancel, header (text), contentClass, footer, footerClass)
// Have content between the <Modal> </Modal> tags for props.children

// const [ showModal, setShowModal ] = useState(false)

// const openModalHandler = () => setShowModal(true)

// const closeModalHandler = () => setShowModal(false)




const ModalOverlay = props => {
    const content = (
        <div className= { `modal ${props.className}` } style={ props.style }>

            <header className={ `modal__header ${props.headerClass}` }>
                <h2>{ props.header }</h2>
            </header>

            <form onSubmit={ props.onSubmit ? props.onSubmit : event => event.preventDefault() }>

                {/* form content passed in via props */}
                <div className={ `modal__content ${ props.contentClass}`}>
                    { props.children}
                </div>

                {/* footer for any buttons for better styling */}
                <footer className={ `modal__footer ${props.footerClass}`}>
                { props.footer }
                </footer>
            </form>
        </div>
    )
    
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}


const Modal = props => {
    return (
        <React.Fragment>
            { props.show && <Backdrop onClick = { props.onCancel } /> }
            <CSSTransition
                in = { props.show }
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalOverlay { ...props } />
            </CSSTransition>
        </React.Fragment>
    )
}

export default Modal