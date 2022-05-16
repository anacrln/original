import React, {useState} from "react"
import './Button.css'
import Modal from './Modal'
import addProduct from '../img/addProduct.png'


function Button() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return(
    <>
      <button onClick={() => setIsModalVisible(true)} id="btn__purchase" className="purchase__button" type="submit">Adicionar à sacola</button>
       {isModalVisible ? (
       <Modal onClose={() => setIsModalVisible(false)}>
         <div className="close">
           <button onClick={() => setIsModalVisible(false)} className="close__btn">
          <svg className="x__icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.1673 7.47859L20.5223 5.83359L14.0007 12.3553L7.47898 5.83359L5.83398 7.47859L12.3557 14.0002L5.83398 20.5219L7.47898 22.1669L14.0007 15.6452L20.5223 22.1669L22.1673 20.5219L15.6457 14.0002L22.1673 7.47859Z" fill="#5F75AA" />
          </svg>
           </button>
         </div>
          <img className="addProduct__img" src={addProduct} alt="imagem da sandália" />
          <div className="success">
            <p className="success__content">Produto adicionado com sucesso!</p>
          </div>
          <button className="buy">Finalizar Compra</button>
          <div className="continue">
            <a href="/" className="continue__link">Continuar Comprando</a>
          </div>
       </Modal> ): null}
    </>
  )
}

export default Button