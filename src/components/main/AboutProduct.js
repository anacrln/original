import React from "react";
import './AboutProduct.css'
import Button from './Button'

function AboutProduct(props) {
  return(
    <div className="product__info">
      <div className="product__name">
        <p className="name">Rasteira Tira Dedo</p>
        <p className="ref">RT 0568 | 03.07.0653</p>
      </div>

      <div className="product__price">
        <div className="price">R$ 69,00 |</div>
        <span className="sale">R$ 55,20</span>
      <div className="installments">Ou 6x de R$ 9,20</div>
      </div>

      <div className="product__colors">
        <p className="color__selection">Cor: <span>Fucsia</span> </p>
        <div className="elipses">
        <span className="elipse"></span>
        <span className="elipse"></span>
        <span className="elipse"></span>
        <span className="elipse"></span>
        </div>
      </div>

      <div className="product__size">
        <div className="size">
          Tamanho:
        </div>
            <span className="number"> 37</span>
            <div className="guide">Guia de Medidas</div>
            <div className="tableOfSizes"></div>
      </div>
      <Button />
      <div className="product__description">
        <p className="description">Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</p>
      </div>
    </div>
  )
}

export default AboutProduct