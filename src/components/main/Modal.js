import React from "react"
import './Modal.css'

function Modal({children}) {
  return(
    <>
    <aside className="modal">
      <section className="modal__container">
        {children}
       </section>
     </aside> 
    </>
  )
}

export default Modal