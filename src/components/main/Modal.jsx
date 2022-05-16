import React from "react"
import './Modal.css'

function Modal({children}) {
  return(
    <>
    <div className="modal">
      <div className="modal__container">
        {children}
       </div>
     </div> 
    </>
  )
}

export default Modal