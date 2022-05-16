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
      <div className="slide__arrows">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.2937 11.9387C20.6839 12.3289 20.6842 12.9615 20.2944 13.3521L15.6567 18L20.2944 22.6479C20.6842 23.0385 20.6839 23.6711 20.2937 24.0613L20.0621 24.2929C19.6716 24.6834 19.0384 24.6834 18.6479 24.2929L13.0621 18.7071C12.6716 18.3166 12.6716 17.6834 13.0621 17.2929L18.6479 11.7071C19.0384 11.3166 19.6716 11.3166 20.0621 11.7071L20.2937 11.9387Z" fill="#2A5A75" />
          <circle cx="17.5" cy="17.5" r="16.5" stroke="#2A5A75" stroke-width="2" />
        </svg>
        <span className="qtdPages">1 de 3</span>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7063 24.0613C15.3161 23.6711 15.3158 23.0385 15.7056 22.6479L20.3433 18L15.7056 13.3521C15.3158 12.9615 15.3161 12.3289 15.7063 11.9387L15.9379 11.7071C16.3284 11.3166 16.9616 11.3166 17.3521 11.7071L22.9379 17.2929C23.3284 17.6834 23.3284 18.3166 22.9379 18.7071L17.3521 24.2929C16.9616 24.6834 16.3284 24.6834 15.9379 24.2929L15.7063 24.0613Z" fill="#2A5A75" />
          <circle cx="17.5" cy="17.5" r="16.5" stroke="#2A5A75" stroke-width="2" />
        </svg>

      </div> 
    </div>
  )
}

export default MainCarousel