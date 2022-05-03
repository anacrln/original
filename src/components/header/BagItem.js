import React from "react";
import './BagItem.css'

function BagItem({src, alt, nameProd, price}) {
  return(
    
    <div className="bag__item">
      <img className="img" src={src} alt={alt} />
      <div className="bag__info">
        <span className="product">{nameProd}</span>
        <span className="prPrice" >{price}</span>
      </div>
      <div className="itemQtd">
        <div className="removeItem">-</div>
        <div className="numberItem">01</div>
        <div className="addItem">+</div>
      </div>
      <div className="deleteItem">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6673 4.27353L11.7273 3.33353L8.00065 7.06019L4.27398 3.33353L3.33398 4.27353L7.06065 8.00019L3.33398 11.7269L4.27398 12.6669L8.00065 8.94019L11.7273 12.6669L12.6673 11.7269L8.94065 8.00019L12.6673 4.27353Z" fill="#CCCCCC" />
        </svg>

      </div>
      </div>
    
  )
}

export default BagItem
