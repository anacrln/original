import React, {useState} from "react";
import './Bag.css';
import ModalBag from './ModalBag'
import Sandalia from '../img/MiniImage.png'
import BagImage from '../img/bag.png'
import Rasteira from '../img/rasteira.png'
import Carteira from '../img/carteira.png'
 import BagItem from './BagItem'


function Bag() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return(
    <div className="bag">
      <section className="bag__container">
        <button onClick={() =>setIsModalVisible(true)} className="click__bag">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0008 14.9999C11.0008 16.1045 10.1054 16.9999 9.00085 16.9999C7.89628 16.9999 7.00085 16.1045 7.00085 14.9999C7.00085 13.8954 7.89628 12.9999 9.00085 12.9999C10.1054 12.9999 11.0008 13.8954 11.0008 14.9999Z" fill="#686868" />
            <path d="M20.0008 14.9999C20.0008 16.1045 19.1054 16.9999 18.0008 16.9999C16.8963 16.9999 16.0008 16.1045 16.0008 14.9999C16.0008 13.8954 16.8963 12.9999 18.0008 12.9999C19.1054 12.9999 20.0008 13.8954 20.0008 14.9999Z" fill="#686868" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.88943 6.94866C7.88943 4.19529 10.1642 1.99994 12.9244 1.99994H14.0773C16.8375 1.99994 19.1123 4.19529 19.1123 6.94866V8.76917H24.8615C26.1344 8.76917 27.1933 9.88493 26.9724 11.2115C26.6139 13.3629 26.0074 16.4913 25.1925 19.2644C24.7832 20.6542 24.301 22.0102 23.7762 23.0945C23.2588 24.1602 22.6098 25.1634 21.773 25.7057C21.4601 25.8881 21.0054 25.9947 20.7241 25.9999H6.27755C5.99628 25.9947 5.54158 25.8881 5.22868 25.7057C4.39188 25.1634 3.7429 24.1602 3.22549 23.0945C2.70074 22.0102 2.21854 20.6542 1.8092 19.2644C0.994349 16.4913 0.387834 13.3629 0.0293414 11.2115C-0.19164 9.88494 0.867256 8.76917 2.14018 8.76917H7.88943V6.94866ZM7.88943 10.7692V13.7179H9.88943V10.7692H17.1123V13.7179H19.1123V10.7692H24.8615C24.9172 10.7692 24.9559 10.7917 24.9786 10.8174C24.9997 10.8412 25.0032 10.8612 24.9995 10.8828C24.6455 13.0086 24.064 16.0184 23.2738 18.6999C22.8807 20.0374 22.4561 21.2379 21.977 22.221C21.509 23.185 21.073 23.7542 20.7257 23.9999L20.7241 23.9999H6.27755L6.27603 23.9999C5.92871 23.7542 5.4927 23.185 5.02465 22.221C4.54563 21.2379 4.12104 20.0374 3.72786 18.6999C2.93765 16.0184 2.35619 13.0086 2.00215 10.8828C1.99855 10.8612 2.00201 10.8412 2.02312 10.8174C2.04583 10.7917 2.08452 10.7692 2.14018 10.7692H7.88943ZM17.1123 8.76917H9.88943V6.94866C9.88943 5.34039 11.2278 3.99994 12.9244 3.99994H14.0773C15.7739 3.99994 17.1123 5.34039 17.1123 6.94866V8.76917Z" fill="#686868" />
          </svg>  
          <span className="bag__number">0</span>       
        </button>
        {isModalVisible ? <ModalBag>
          <div className="modalBag__close">
            <button onClick={() => setIsModalVisible(false)} className="modalBag__x">
              <svg className="x__icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1673 7.47859L20.5223 5.83359L14.0007 12.3553L7.47898 5.83359L5.83398 7.47859L12.3557 14.0002L5.83398 20.5219L7.47898 22.1669L14.0007 15.6452L20.5223 22.1669L22.1673 20.5219L15.6457 14.0002L22.1673 7.47859Z" fill="#5F75AA" />
              </svg>
            </button>
          </div>
          <div className="bag__text">
          <h1 className="bag__title">Sacola</h1>
          <span className="qtd">5 Itens</span>
          </div>
           <div className="bag__items">
             <BagItem src={Sandalia} alt={"sandalia"}
             nameProd={"Rasteira tira dedo"}
             price={"R$ 49,90"}/>
             <BagItem src={Carteira} alt={"Bolsa"}
              nameProd={"Rasteira tira dedo"}
              price={"R$ 49,90"} />
             <BagItem src={BagImage} alt={"sandalia"}
              nameProd={"Rasteira tira dedo"}
              price={"R$ 49,90"} />
             <BagItem src={Rasteira} alt={"rasteirinha"}
              nameProd={"Rasteira tira dedo"}
              price={"R$ 49,90"}  />  
             <BagItem src={Sandalia} alt={"Sandalia"}
              nameProd={"Rasteira tira dedo"}
              price={"R$ 49,90"} />  
          </div>  
          <div className="frete">
            <p className="frete__text">Faltam R$ XX,XX para voc?? <span className="frete__bold">Ganhar Frete Gr??tis</span>
            </p>
          </div>
          <div className="total">
            <div className="total__price">
              <p className="total__text">Total: R$ 149,00</p>
              <span className="total__installments">at?? 3x R$49,90 sem juros</span>
            </div>
            <div className="button__container">
            <button className="bag__finish">Finalizar Compra</button>
            </div>
          </div>
        </ModalBag>
         : null}
      </section>
    </div>
  )
}

  export default Bag
