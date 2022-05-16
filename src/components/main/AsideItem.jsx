import React from 'react'
import './AsideItem.css'

function AsideItem({src, alt}) {
  return (
    <div className="product__midia">
      <img src={src} alt={alt}/>
    </div>
  )
}

export default AsideItem