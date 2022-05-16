import React from "react";
import './ModalBag.css'

function ModalBag({children}) {
  return <div className="modalBag">
    <div className="modalBag__container">
        <div className="modalBag__content">
          {children}
        </div>
      
    </div>
  </div>
}

export default ModalBag