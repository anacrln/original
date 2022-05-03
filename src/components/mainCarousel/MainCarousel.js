import React from "react";
import './MainCarousel.css'
import Sandalia from '../img/sandalia.png'
import BagImage from '../img/bag.png'
import Rasteira from '../img/rasteira.png'
import Carteira from '../img/carteira.png'
function MainCarousel() {
  return(
    <div className="mainCarousel__container">
      <div className="title__carousel">
      <h2 className="carousel__title">Quem viu,viu também</h2>
      </div>
      <div className="shelf">
      <div className="shelf__container">
        <img className="shelf__image" src={BagImage}/>
        <div className="shelf__info">
        <span className="shelf_price">R$ 204,99</span>
        <div className="circle">
          <span className="shelf__circle fucsia"></span>
          <span className="shelf__circle blue"></span>
          <span className="shelf__circle brown"></span>
          <span className="shelf__circle black"></span>
        </div>
          </div>
        
      </div>
        <div className="shelf__container">
          <img className="shelf__image" src={Rasteira}/>
          <div className="shelf__info">
            <span className="shelf_price">R$ 204,99</span>
            <div className="circle">
              <span className="shelf__circle fucsia"></span>
              <span className="shelf__circle blue"></span>
              <span className="shelf__circle brown"></span>
              <span className="shelf__circle black"></span>
            </div>
          </div>
      </div>
        <div className="shelf__container">
          <img className="shelf__image" src={Sandalia} />
          <div className="shelf__info">
            <span className="shelf_price">R$ 204,99</span>
          </div>
      </div>
        <div className="shelf__container">
          <img className="shelf__image" src={Carteira} />
          <div className="shelf__info">
            <span className="shelf_price">R$ 204,99</span>
            <div className="circle">
              <span className="shelf__circle blue"></span>
              <span className="shelf__circle brown"></span>
              <span className="shelf__circle black"></span>
            </div>
          </div>
      </div>
      </div>
            {/* <div className="slide__arrows">
            </div> */}
    </div>
  )
}

export default MainCarousel