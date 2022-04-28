import React from "react";
import './Breadcrumb.css'

function Breadcrumb() {
  return(
    <>
      <section className="breadcrumb">
        <div className="container">
          <ul className="breadcrumb__list">
            <li className="breadcrumb__item">
              <a href="/" className="breadcrumb__link">
                Home
              </a>
            </li>
            <span className="breadcrumb__divisor">/</span>
            <li className="breadcrumb__item">
              <a href="/" className="breadcrumb__link--active">
                Sapatos
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Breadcrumb