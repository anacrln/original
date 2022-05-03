import React from "react";
import './Footer.css'
import Stamp from '../img/stamp.png'
import Vtex from '../img/vtex.png'

function Footer() {
  return(
    <div className="footer__container">
      <div className="infos">
        <div className="socialAndStamps">
          <div className="social">
            <svg className="social__icon" width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.27815H2.56802V5.76779C2.44772 4.42428 2.73605 3.07585 3.39595 1.89637C3.8463 1.27242 4.44941 0.772368 5.14849 0.4433C5.84757 0.114231 6.61971 -0.0330373 7.39204 0.0153724C8.94261 -0.0523736 10.4948 0.10393 12 0.479372L11.352 4.30679C10.6793 4.12 9.98621 4.01571 9.28799 3.99626C8.27999 3.99626 7.39204 4.35318 7.39204 5.35971V8.27815H11.4839L11.208 12.0151H7.39204V25H2.56802V12.0175H0V8.28053V8.27815Z" fill="#DE8F75" />
            </svg>
            <svg className="social__icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0173 25H6.98155C3.14164 25 0 21.8146 0 17.9213V7.07873C0 3.18537 3.14164 0 6.98155 0H17.0173C20.8572 0 24 3.18537 24 7.07873V17.9213C24 21.8146 20.8572 25 17.0173 25ZM17.0173 23.1295C18.3814 23.1295 19.6692 22.5851 20.6432 21.5976C21.6171 20.61 22.154 19.3043 22.154 17.9213V7.07873C22.154 5.69571 21.6183 4.38884 20.6432 3.40129C19.6692 2.41375 18.3802 1.8694 17.0173 1.8694H6.98155C5.6164 1.8694 4.32859 2.41375 3.3546 3.40129C2.38061 4.38884 1.84374 5.69458 1.84374 7.07873V17.9213C1.84374 19.3054 2.38061 20.61 3.3546 21.5976C4.32859 22.5851 5.6164 23.1295 6.98155 23.1295H17.0173Z" fill="#DE8F75" />
              <path d="M18.6447 12.4031C18.6447 16.1044 15.6858 19.1034 12.0364 19.1034C8.38701 19.1034 5.42694 16.1033 5.42694 12.4031C5.42694 8.70293 8.38589 5.70166 12.0364 5.70166C15.6869 5.7028 18.6447 8.70293 18.6447 12.4031ZM12.0039 8.02108C9.6143 8.02108 7.67641 9.98481 7.67641 12.4088C7.67641 14.8316 9.61318 16.7965 12.0039 16.7965C14.3946 16.7965 16.3313 14.8316 16.3313 12.4088C16.3325 9.98481 14.3946 8.02108 12.0039 8.02108Z" fill="#DE8F75" />
              <path d="M20.3159 5.59791C20.3159 6.47409 19.6154 7.18435 18.7512 7.18435C17.8871 7.18435 17.1866 6.47409 17.1866 5.59791C17.1866 4.72173 17.8871 4.01147 18.7512 4.01147C19.6154 4.01147 20.3159 4.72173 20.3159 5.59791Z" fill="#DE8F75" />
            </svg>
            <svg className="social__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4994 25C19.4038 25 25 19.4047 25 12.4998C25 5.59574 19.4038 0 12.4994 0C5.59617 0 0 5.59574 0 12.4998C0 17.7958 3.29206 22.3213 7.94093 24.1428C7.93588 24.1221 7.93116 24.1018 7.92669 24.0823C7.861 23.8041 7.84864 23.5179 7.83632 23.2329L7.83207 23.1361C7.77777 21.9948 7.87401 20.8558 8.16058 19.7469C8.39981 18.8186 8.61676 17.8843 8.83375 16.9498C8.9981 16.2421 9.16246 15.5344 9.33655 14.829C9.41072 14.5278 9.37827 14.2784 9.28924 13.9881C8.86919 12.6396 8.9781 11.3297 9.83342 10.1841C10.2433 9.63512 10.9054 9.41509 11.6112 9.51241C12.2746 9.60209 12.6717 10.0149 12.8422 10.6539C12.9876 11.1952 12.9056 11.7294 12.7831 12.2605C12.6778 12.7129 12.5408 13.1567 12.4037 13.6008C12.2392 14.1338 12.0746 14.6671 11.9647 15.2155C11.8852 15.6147 11.8977 16.1269 12.0042 16.5203C12.4354 18.1211 14.5755 17.7874 15.5943 17.0184C16.2868 16.4944 16.7814 15.7273 17.1093 14.9339C17.495 14.0059 17.6518 13.1171 17.6376 12.1243C17.6285 11.435 17.5417 10.5561 17.2733 9.90784C16.6172 8.32623 15.1199 7.22561 13.4415 6.98662C11.5579 6.71967 9.87595 7.12463 8.39317 8.50765C6.75794 10.0363 6.30195 13.0885 7.62938 14.9736C7.79693 15.2126 7.7891 15.3742 7.73287 15.6436C7.71181 15.7417 7.69418 15.8407 7.67653 15.9397C7.64101 16.1391 7.60546 16.3386 7.54196 16.5312L7.52603 16.5797C7.4446 16.8282 7.35691 17.0959 7.061 17.1165C6.83369 17.1318 6.61967 17.0147 6.44613 16.8806C6.0724 16.5934 5.76663 16.1713 5.56519 15.7463C5.51908 15.649 5.4645 15.5566 5.40985 15.464C5.36387 15.3862 5.31785 15.3083 5.27678 15.2273C4.70614 14.1087 4.4287 12.8646 4.54956 11.6084C4.59911 11.0899 4.68466 10.5659 4.82575 10.0634C5.35758 8.18039 6.66102 6.63002 8.35432 5.66742C8.82851 5.39886 9.3485 5.17097 9.8675 5.00343C11.6757 4.42097 13.6849 4.49516 15.4734 5.12016C16.7924 5.58022 18.0268 6.30875 18.9014 7.41882C20.3405 9.24583 20.7405 11.3705 20.2998 13.6491C19.9606 15.4017 19.2302 16.944 17.8876 18.1688C17.4173 18.5985 16.8701 18.9285 16.2874 19.1801C15.9882 19.309 15.6798 19.4206 15.3681 19.515C13.8619 19.9756 12.1428 19.5303 11.1088 18.3448C11.0378 18.6533 10.8594 19.306 10.7478 19.7142C10.707 19.8635 10.6751 19.9802 10.6606 20.0353C10.5082 20.6215 10.3516 21.2064 10.1506 21.7773C9.84188 22.6566 9.43221 23.5178 8.90929 24.2904L8.90403 24.2982C8.8745 24.3417 8.83994 24.3925 8.801 24.4439C9.96977 24.8054 11.2118 25 12.4994 25Z" fill="#DE8F75" />
            </svg>
          </div>
          <div className="stamps">
            <img src={Vtex} alt="Vtex pci 200" />
            <img src={Stamp} alt="Selo ebit de loja confiável" />
          </div>
        </div>
        <div className="more__container">
          <ul className="institu__list">
            <li className="institu__items">Institucional</li>
            <li className="institu__items">A Marca</li>
            <li className="institu__items">Lojas</li>
            <li className="institu__items">Contato</li>
          </ul>
          
          <ul className="info__list">
            <li className="info__items">Informações</li>
            <li className="info__items">Formas de Pagamento</li>
            <li className="info__items">Trocas e Devoluções</li>
            <li className="info__items">Cuidados Com o Produto</li>
          </ul>

          <ul className="conheca__list">
            <li className="conheca__items">Conheça</li>
            <li className="conheca__items">Franquias e Multimarcas</li>
            <li className="conheca__items">Trabalhe com a gente</li>
            <li className="conheca__items">Procon-RJ</li>
          </ul>
        </div>
          <div className="newsletter">
            <div className="news__circle">
              <span className="news__name">
                Assine nossa news
              </span>
              <div className="news__form">
                <form>
                  {/* <label className="nome">Nome</label> */}
                  <input className="news__input" type="name" name="nome" placeholder="Nome" />
                  <input className="news__input" type="email" placeholder="E-mail" />
                  <button className="news__button" type="sumbit">Enviar</button>
                  </form>
              </div>
            </div>
          </div>

      </div>
      <div className="rights">
        <p className="rigths__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie massa in nunc condimentum, vel placerat lacus pulvinar. Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc semper leo nec tellus gravida faucibus. </p>
        <div className="logo__footer">
        <div className="logo__svg">
          <svg className="logoFooter__image" width="112" height="25" viewBox="0 0 112 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M98.234 8.63017H98.144C97.9097 8.6328 97.6859 8.72773 97.5211 8.89435C97.3564 9.06098 97.264 9.28585 97.264 9.52017V18.3202C97.264 18.5562 97.3577 18.7826 97.5247 18.9495C97.6916 19.1164 97.9179 19.2102 98.154 19.2102C98.39 19.2102 98.6164 19.1164 98.7833 18.9495C98.9502 18.7826 99.044 18.5562 99.044 18.3202V9.51017C99.0424 9.28908 98.9586 9.0765 98.8088 8.91383C98.6591 8.75116 98.4542 8.65004 98.234 8.63017ZM88.504 9.51017C88.5019 9.3266 88.4425 9.14828 88.334 9.00017C88.2861 8.92576 88.2209 8.86401 88.144 8.82017H88.074C87.9394 8.74005 87.7859 8.69731 87.6292 8.69636C87.4726 8.69541 87.3185 8.73629 87.183 8.81477C87.0474 8.89325 86.9352 9.0065 86.8581 9.14281C86.7809 9.27911 86.7415 9.43355 86.744 9.59017V10.4402C86.3945 9.85432 85.893 9.37395 85.2927 9.05001C84.6923 8.72607 84.0155 8.57063 83.334 8.60017C82.6385 8.5853 81.948 8.72053 81.3095 8.99664C80.671 9.27275 80.0995 9.68325 79.634 10.2002C78.6352 11.2885 78.1006 12.7237 78.144 14.2002C78.1148 15.5081 78.5995 16.7754 79.494 17.7302C79.9369 18.2096 80.4779 18.5882 81.0801 18.8401C81.6822 19.092 82.3316 19.2114 82.984 19.1902C83.7252 19.2396 84.4652 19.078 85.1183 18.724C85.7714 18.37 86.3108 17.8382 86.674 17.1902V17.4102V18.2802C86.6765 18.5137 86.7697 18.7371 86.934 18.9032C87.0982 19.0693 87.3205 19.165 87.554 19.1702H87.614C87.843 19.1599 88.0593 19.0616 88.2176 18.8958C88.376 18.73 88.4642 18.5094 88.464 18.2802V9.92017C88.464 9.92017 88.464 9.92017 88.464 9.85017L88.504 9.51017ZM85.734 16.5102C85.4133 16.8407 85.0269 17.1004 84.5998 17.2726C84.1727 17.4448 83.7143 17.5258 83.254 17.5102C82.8312 17.5107 82.4131 17.4219 82.0271 17.2496C81.6411 17.0773 81.2958 16.8253 81.014 16.5102C80.7064 16.1828 80.4667 15.7978 80.3088 15.3772C80.1509 14.9567 80.0779 14.5091 80.094 14.0602C80.0561 13.0435 80.3904 12.048 81.034 11.2602C81.3174 10.9108 81.6758 10.6296 82.0825 10.4375C82.4893 10.2453 82.9341 10.1471 83.384 10.1502C83.8201 10.1487 84.2518 10.2367 84.6526 10.4087C85.0534 10.5807 85.4146 10.8331 85.714 11.1502C86.0555 11.5086 86.3204 11.9328 86.4923 12.3971C86.6642 12.8613 86.7397 13.3558 86.714 13.8502C86.7435 14.3433 86.6718 14.8372 86.5032 15.3015C86.3347 15.7659 86.0729 16.1908 85.734 16.5502V16.5102ZM106.084 8.58017C105.031 8.56636 103.998 8.86534 103.115 9.43923C102.232 10.0131 101.539 10.8361 101.124 11.804C100.71 12.7719 100.591 13.8411 100.785 14.8762C100.978 15.9113 101.474 16.8658 102.21 17.6188C102.946 18.3717 103.889 18.8893 104.92 19.1059C105.95 19.3226 107.022 19.2285 107.999 18.8356C108.976 18.4428 109.814 17.7689 110.408 16.8992C111.002 16.0295 111.324 15.0031 111.334 13.9502C111.338 13.2555 111.205 12.5668 110.943 11.9235C110.681 11.2802 110.294 10.6948 109.806 10.2008C109.317 9.70675 108.736 9.31379 108.096 9.04431C107.456 8.77482 106.769 8.6341 106.074 8.63017L106.084 8.58017ZM107.644 17.0402C107.162 17.2903 106.627 17.4206 106.084 17.4202C105.356 17.4152 104.648 17.1805 104.06 16.7496C103.473 16.3187 103.037 15.7135 102.814 15.0202C102.656 14.5171 102.612 13.9852 102.684 13.4629C102.757 12.9407 102.945 12.441 103.234 12.0002C103.57 11.496 104.034 11.0901 104.578 10.8241C105.123 10.5581 105.728 10.4416 106.332 10.4863C106.937 10.5311 107.518 10.7356 108.017 11.0789C108.517 11.4222 108.916 11.892 109.174 12.4402C109.58 13.2688 109.647 14.2229 109.361 15.1002C109.076 15.9775 108.46 16.7092 107.644 17.1402V17.0402ZM33.704 8.63017C32.6493 8.61828 31.6149 8.92015 30.7322 9.49744C29.8495 10.0747 29.1582 10.9014 28.7464 11.8724C28.3345 12.8434 28.2205 13.9149 28.419 14.9508C28.6174 15.9867 29.1193 16.9402 29.8609 17.6902C30.6025 18.4403 31.5503 18.9529 32.5838 19.1631C33.6174 19.3733 34.6902 19.2715 35.6658 18.8707C36.6414 18.4699 37.4758 17.7881 38.0631 16.9119C38.6503 16.0358 38.9639 15.0049 38.964 13.9502C38.9679 13.2555 38.835 12.5668 38.5728 11.9235C38.3106 11.2802 37.9243 10.6948 37.4358 10.2008C36.9474 9.70675 36.3664 9.31379 35.7261 9.04431C35.0858 8.77482 34.3987 8.6341 33.704 8.63017ZM35.264 17.0902C34.7821 17.3403 34.247 17.4706 33.704 17.4702C32.9757 17.4652 32.2675 17.2305 31.6804 16.7996C31.0933 16.3687 30.6571 15.7635 30.434 15.0702C30.2696 14.5591 30.2228 14.0175 30.2973 13.4859C30.3717 12.9543 30.5655 12.4464 30.864 12.0002C31.2 11.496 31.664 11.0901 32.2084 10.8241C32.7528 10.5581 33.3582 10.4416 33.9624 10.4863C34.5667 10.5311 35.1482 10.7356 35.6475 11.0789C36.1468 11.4222 36.5459 11.892 36.804 12.4402C37.2097 13.2688 37.2769 14.2229 36.9913 15.1002C36.7057 15.9775 36.0898 16.7092 35.274 17.1402L35.264 17.0902ZM45.624 8.56017C44.9473 8.57088 44.2892 8.78327 43.734 9.17017C43.1235 9.59272 42.6395 10.1735 42.334 10.8502V9.51017C42.3324 9.28908 42.2486 9.0765 42.0988 8.91383C41.9491 8.75116 41.7442 8.65004 41.524 8.63017H41.434C41.1997 8.6328 40.9759 8.72773 40.8111 8.89435C40.6464 9.06098 40.554 9.28585 40.554 9.52017V18.3202C40.554 18.5562 40.6478 18.7826 40.8147 18.9495C40.9816 19.1164 41.2079 19.2102 41.444 19.2102C41.68 19.2102 41.9064 19.1164 42.0733 18.9495C42.2402 18.7826 42.334 18.5562 42.334 18.3202V14.3202C42.2973 13.3103 42.6157 12.3195 43.234 11.5202C43.4839 11.1785 43.8103 10.9002 44.1871 10.7074C44.564 10.5147 44.9807 10.4129 45.404 10.4102H45.834C45.952 10.4189 46.0704 10.3999 46.1798 10.3547C46.2891 10.3096 46.3865 10.2396 46.464 10.1502C46.6117 9.96624 46.6896 9.736 46.684 9.50017C46.6707 8.8735 46.3173 8.56017 45.624 8.56017ZM72.624 8.56017C71.8521 8.55443 71.0927 8.75464 70.424 9.14017C69.7923 9.49021 69.2933 10.0384 69.004 10.7002V9.51017C69.0024 9.28908 68.9186 9.0765 68.7688 8.91383C68.6191 8.75116 68.4142 8.65004 68.194 8.63017H68.074C67.8484 8.64285 67.6361 8.74083 67.4802 8.90424C67.3242 9.06766 67.2362 9.28427 67.234 9.51017V18.3102C67.234 18.5462 67.3278 18.7726 67.4947 18.9395C67.6616 19.1064 67.8879 19.2002 68.124 19.2002C68.36 19.2002 68.5864 19.1064 68.7533 18.9395C68.9202 18.7726 69.014 18.5462 69.014 18.3102V14.5402C69.0116 14.1058 69.035 13.6717 69.084 13.2402C69.1258 12.8457 69.2097 12.4569 69.334 12.0802C69.449 11.7136 69.636 11.3736 69.884 11.0802C70.1421 10.7998 70.4599 10.581 70.814 10.4402C71.2558 10.2643 71.7286 10.1793 72.204 10.1902C73.7973 10.1902 74.6073 11.2902 74.634 13.4902C74.634 14.0635 74.634 14.9002 74.634 16.0002C74.634 17.1002 74.634 17.6302 74.634 18.0002C74.634 18.7702 74.994 19.1402 75.584 19.1402C76.174 19.1402 76.484 18.9002 76.584 18.0002V13.0002C76.6548 11.8223 76.2999 10.6582 75.584 9.72017C75.2228 9.30525 74.77 8.97995 74.2615 8.76996C73.7531 8.55998 73.2027 8.47104 72.654 8.51017L72.624 8.56017ZM91.024 3.38017C90.7879 3.38017 90.5616 3.47394 90.3947 3.64085C90.2278 3.80775 90.134 4.03413 90.134 4.27017V18.3202C90.134 18.5562 90.2278 18.7826 90.3947 18.9495C90.5616 19.1164 90.7879 19.2102 91.024 19.2102C91.26 19.2102 91.4864 19.1164 91.6533 18.9495C91.8202 18.7826 91.914 18.5562 91.914 18.3202V4.23017C91.9142 4.0009 91.826 3.78038 91.6676 3.61458C91.5093 3.44877 91.293 3.35048 91.064 3.34017L91.024 3.38017ZM64.724 8.63017H64.634C64.3997 8.6328 64.1759 8.72773 64.0111 8.89435C63.8464 9.06098 63.754 9.28585 63.754 9.52017V18.3202C63.754 18.5562 63.8478 18.7826 64.0147 18.9495C64.1816 19.1164 64.4079 19.2102 64.644 19.2102C64.88 19.2102 65.1064 19.1164 65.2733 18.9495C65.4402 18.7826 65.534 18.5562 65.534 18.3202V9.51017C65.5324 9.28908 65.4486 9.0765 65.2988 8.91383C65.1491 8.75116 64.9442 8.65004 64.724 8.63017ZM49.334 8.63017H49.244C49.0097 8.6328 48.7859 8.72773 48.6211 8.89435C48.4564 9.06098 48.364 9.28585 48.364 9.52017V18.3202C48.364 18.5562 48.4578 18.7826 48.6247 18.9495C48.7916 19.1164 49.0179 19.2102 49.254 19.2102C49.49 19.2102 49.7164 19.1164 49.8833 18.9495C50.0502 18.7826 50.144 18.5562 50.144 18.3202V9.51017C50.1424 9.28908 50.0586 9.0765 49.9088 8.91383C49.7591 8.75116 49.5542 8.65004 49.334 8.63017ZM61.484 8.70017C61.3488 8.64038 61.2009 8.6152 61.0535 8.6269C60.9062 8.63861 60.764 8.68683 60.64 8.76721C60.5159 8.84759 60.4139 8.95761 60.343 9.08732C60.2721 9.21703 60.2346 9.36236 60.234 9.51017V10.3102C59.8795 9.76529 59.3927 9.31904 58.8192 9.01303C58.2457 8.70703 57.604 8.55124 56.954 8.56017C56.2585 8.5453 55.568 8.68053 54.9295 8.95664C54.291 9.23275 53.7195 9.64325 53.254 10.1602C52.2525 11.2468 51.7174 12.6831 51.764 14.1602C51.7468 15.4795 52.2455 16.7533 53.154 17.7102C53.5918 18.1961 54.1294 18.5817 54.73 18.8406C55.3306 19.0995 55.9801 19.2256 56.634 19.2102C57.3592 19.2183 58.0748 19.0429 58.714 18.7002C59.3306 18.3712 59.8458 17.8803 60.204 17.2802V18.8702C60.2235 19.3609 60.1451 19.8506 59.9734 20.3107C59.8018 20.7708 59.5402 21.1922 59.204 21.5502C58.878 21.882 58.4864 22.1423 58.0543 22.3144C57.6221 22.4866 57.1589 22.5669 56.694 22.5502C55.9769 22.5544 55.2663 22.415 54.604 22.1402C54.4834 22.0959 54.3664 22.0424 54.254 21.9802C54.1389 21.9163 54.0185 21.8628 53.894 21.8202C53.8011 21.807 53.7069 21.807 53.614 21.8202C53.501 21.8201 53.3894 21.8451 53.2874 21.8936C53.1853 21.942 53.0953 22.0126 53.024 22.1002C52.8655 22.2799 52.7767 22.5105 52.774 22.7502C52.774 23.1435 53.0307 23.4768 53.544 23.7502C54.521 24.2004 55.5886 24.4194 56.664 24.3902C57.376 24.4141 58.0856 24.2946 58.7505 24.0386C59.4153 23.7826 60.0219 23.3954 60.534 22.9002C61.0432 22.3923 61.4385 21.7818 61.6937 21.1094C61.9488 20.437 62.058 19.718 62.014 19.0002V18.4802V16.8602C62.014 15.6735 62.014 13.6735 62.014 10.8602V9.51017C62.015 9.3406 61.9675 9.17427 61.8771 9.03077C61.7868 8.88727 61.6573 8.77257 61.504 8.70017H61.484ZM60.254 14.5002C60.1636 15.2629 59.8099 15.9702 59.254 16.5002C58.9388 16.8213 58.5619 17.0754 58.1461 17.2472C57.7302 17.4191 57.2839 17.5051 56.834 17.5002C56.4079 17.5036 55.9859 17.4161 55.5962 17.2437C55.2065 17.0713 54.8581 16.8178 54.574 16.5002C54.2647 16.1719 54.024 15.7853 53.8661 15.3629C53.7081 14.9405 53.636 14.4908 53.654 14.0402C53.6243 13.0144 53.9812 12.015 54.654 11.2402C54.9456 10.8928 55.3121 10.616 55.7261 10.4306C56.14 10.2453 56.5906 10.1563 57.044 10.1702C57.4791 10.1653 57.9105 10.2517 58.3101 10.424C58.7097 10.5962 59.0688 10.8504 59.364 11.1702C59.888 11.7425 60.2019 12.4759 60.254 13.2502C60.2661 13.4667 60.2661 13.6837 60.254 13.9002C60.2662 14.1 60.2662 14.3004 60.254 14.5002ZM94.614 17.4502C94.4399 17.4502 94.2698 17.5018 94.1251 17.5985C93.9804 17.6952 93.8676 17.8326 93.801 17.9934C93.7344 18.1542 93.7169 18.3311 93.7509 18.5019C93.7849 18.6726 93.8687 18.8294 93.9917 18.9524C94.1148 19.0755 94.2716 19.1593 94.4423 19.1933C94.613 19.2272 94.7899 19.2098 94.9507 19.1432C95.1115 19.0766 95.249 18.9638 95.3457 18.8191C95.4424 18.6744 95.494 18.5042 95.494 18.3302C95.494 18.2138 95.4709 18.0985 95.4261 17.9911C95.3812 17.8837 95.3155 17.7862 95.2327 17.7044C95.1499 17.6225 95.0517 17.5579 94.9438 17.5143C94.8359 17.4706 94.7204 17.4488 94.604 17.4502H94.614ZM23.964 12.7202C23.881 12.4423 23.7489 12.1815 23.574 11.9502C23.4843 11.8311 23.3875 11.7175 23.284 11.6102C23.1093 11.4447 22.9183 11.2973 22.714 11.1702L4.57398 0.540171L4.15398 0.290171C3.7955 0.103649 3.39807 0.00429345 2.99398 0.000171122C2.64609 -0.0037975 2.30087 0.0612994 1.97831 0.191691C1.65575 0.322083 1.36227 0.515179 1.11487 0.759793C0.867465 1.00441 0.671054 1.29568 0.537012 1.61674C0.40297 1.93779 0.333962 2.28226 0.333984 2.63017C0.355162 3.26205 0.575424 3.87108 0.963327 4.37032C1.35123 4.86957 1.88694 5.2335 2.49398 5.41017L3.05398 5.57017V22.3702C3.04472 22.53 3.04472 22.6903 3.05398 22.8502C3.09521 23.027 3.14867 23.2008 3.21398 23.3702C3.27112 23.5149 3.34495 23.6525 3.43398 23.7802C3.51946 23.9088 3.61653 24.0293 3.72398 24.1402C3.82669 24.2479 3.93697 24.3482 4.05398 24.4402C4.16894 24.5245 4.28919 24.6013 4.41398 24.6702L4.75398 24.8202L5.14398 24.9202H5.55398H5.61398C5.77699 24.9348 5.94098 24.9348 6.10398 24.9202C6.30569 24.8781 6.50316 24.8179 6.69398 24.7402L6.96398 24.6102H7.02398L7.33398 24.4902L7.79398 24.2302L22.334 16.0002L22.824 15.7102C23.0275 15.5863 23.2155 15.4386 23.384 15.2702C23.5255 15.1214 23.6497 14.957 23.754 14.7802C23.8644 14.5961 23.9486 14.3975 24.004 14.1902C24.0479 14.0297 24.078 13.8658 24.094 13.7002C24.1093 13.5405 24.1093 13.3798 24.094 13.2202C24.0636 13.0504 24.0201 12.8832 23.964 12.7202ZM3.33398 4.77017L3.11398 4.70017L2.77398 4.61017C2.33337 4.48291 1.94298 4.2223 1.65648 3.86418C1.36998 3.50605 1.20142 3.06798 1.17398 2.61017C1.17661 2.14155 1.36393 1.69287 1.69531 1.36149C2.02668 1.03012 2.47536 0.842797 2.94398 0.840171C3.21953 0.829732 3.49365 0.884555 3.74398 1.00017L4.01398 1.16017L4.15398 1.24017C7.69258 3.40531 10.5486 6.52477 12.394 10.2402L12.334 10.2302L12.224 10.1002L12.004 9.84017L11.904 9.73017L11.644 9.46017L11.574 9.39017L11.264 9.09017C8.96705 7.0895 6.26054 5.61508 3.33398 4.77017ZM6.95398 23.7702L6.71398 23.9102L6.51398 24.0002C6.37479 24.0562 6.23089 24.0997 6.08398 24.1302C5.96097 24.1428 5.83699 24.1428 5.71398 24.1302H5.43398L5.16398 24.0602L4.91398 23.9502L4.69398 23.8102L4.46398 23.6002C4.38973 23.5232 4.32278 23.4395 4.26398 23.3502C4.21122 23.2721 4.1676 23.1882 4.13398 23.1002C4.08561 22.9763 4.04552 22.8494 4.01398 22.7202C4.00725 22.6003 4.00725 22.4801 4.01398 22.3602V5.86017C5.24038 6.30035 6.42784 6.84223 7.56398 7.48017L7.70398 7.56017L7.97398 7.72017L8.18398 7.85017L8.34398 7.95017C8.66398 8.15017 8.98398 8.36017 9.34398 8.59017L9.68398 8.85017C10.1575 9.21554 10.6052 9.61315 11.024 10.0402C11.3213 10.3558 11.5985 10.6898 11.854 11.0402L11.904 11.1102L12.104 11.3902L12.214 11.5502L12.374 11.8102L12.494 12.0302L12.624 12.2702C12.6973 12.4168 12.7673 12.5635 12.834 12.7102L12.914 12.9002L13.044 13.2302L13.114 13.4302C13.154 13.5502 13.1907 13.6735 13.224 13.8002L13.334 14.0002C13.334 14.1702 13.414 14.3502 13.444 14.5302C13.444 14.7002 13.444 14.8702 13.444 15.0402C13.444 15.2102 13.444 15.1702 13.444 15.2402C13.444 15.3102 13.444 15.5402 13.444 15.6902C13.444 15.8402 13.444 15.8402 13.444 15.9102C13.444 15.9802 13.444 16.1902 13.364 16.3202C13.284 16.4502 13.364 16.4802 13.314 16.5602C13.264 16.6402 13.244 16.8102 13.214 16.9302C13.184 17.0502 13.214 17.1102 13.134 17.2002C13.054 17.2902 13.054 17.4202 13.014 17.5302C12.974 17.6402 12.944 17.7302 12.894 17.8302L12.774 18.0902C12.724 18.2102 12.664 18.3202 12.604 18.4402L12.504 18.6102C11.1703 20.7996 9.25155 22.5729 6.96398 23.7302L6.95398 23.7702ZM23.164 14.0002C23.1289 14.1338 23.075 14.2617 23.004 14.3802C22.9337 14.5025 22.8498 14.6166 22.754 14.7202C22.6257 14.83 22.4847 14.924 22.334 15.0002L21.854 15.2902L11.764 21.0002L11.904 20.8302L12.184 20.4902L12.424 20.1802L12.594 19.9502L12.884 19.5002L13.014 19.2702C13.104 19.1102 13.194 18.9502 13.274 18.7902L13.364 18.6002C13.4373 18.4535 13.504 18.3035 13.564 18.1502L13.634 17.9802C13.704 17.8102 13.764 17.6302 13.824 17.4602V17.3102C13.884 17.1202 13.934 16.9202 13.984 16.7202V16.6002C13.984 16.3902 14.064 16.1802 14.094 15.9602V15.9102C14.1445 15.5289 14.1712 15.1448 14.174 14.7602C14.174 14.6902 14.174 14.6202 14.174 14.5502C14.174 14.4802 14.174 14.4902 14.174 14.4502C14.174 14.4102 14.174 14.3302 14.174 14.2602C14.174 14.1902 14.174 14.0102 14.174 13.8902C14.174 13.7702 14.174 13.7902 14.174 13.7402C14.174 13.4268 14.1307 13.1135 14.044 12.8002V12.7302C14.044 12.5602 13.974 12.3802 13.934 12.2102V12.1602C13.0464 9.11913 11.3817 6.36188 9.10398 4.16017L22.274 11.8702C22.4207 11.9633 22.558 12.0705 22.684 12.1902L22.894 12.4402C22.9498 12.5164 23 12.5966 23.044 12.6802C23.0867 12.7641 23.1235 12.851 23.154 12.9402C23.1861 13.0583 23.2095 13.1786 23.224 13.3002C23.2338 13.4033 23.2338 13.5071 23.224 13.6102C23.2169 13.7418 23.1968 13.8725 23.164 14.0002Z" fill="white" />
        </svg>
      </div>
        </div> 
      </div>
    </div>
  )
}

export default Footer