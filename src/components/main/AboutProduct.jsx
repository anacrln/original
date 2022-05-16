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
        <p className="color__selection">Cor: <span className="color__selected">(Fucsia)</span> </p>
        <div className="elipses">
        <span className="elipse --select fucsia"></span>
        <span className="elipse blue"></span>
        <span className="elipse brown"></span>
        <span className="elipse black"></span>
        </div>
      </div>

      <div className="product__size">
        <div className="size">
          Tamanho:
        </div>
            <span className="number">(37)</span>
            <div className="guide">Guia de Medidas</div>
            <div className="tableOfSizes">
              <div className="size__number">33</div>
              <div className="size__number">34</div>
              <div className="size__number">35</div>
              <div className="size__number">36</div>
              <div className="size__number --active">37</div>
              <div className="size__number">38</div>
              <div className="size__number">39</div>
              <div className="size__number">40</div>
              <div className="size__number">41</div>
              <div className="size__number">42</div>
            </div>
      </div>
      <Button />
      <div className="product__description">
        <p className="description">Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</p>
      </div>
    </div>
  )
}

export default AboutProduct