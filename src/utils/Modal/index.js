import React from 'react'
import ReactDom from "react-dom"
import "./Modal.css"

function Modal({ isOpen, title, children }) {
    return isOpen && ReactDom.createPortal(
        <div className="modal__container">
            <div className="modal">
                <div className="modal__body">
                    <h3 className="modal__title">{ title }</h3>
                    { children }
                </div>
            </div>
        </div>,
        document.getElementById('modal-portal')
    )
}

export default Modal
