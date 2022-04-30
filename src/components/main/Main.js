import React from "react";
import './Main.css'
import MiniVideo from '../img/MiniVideo.png'
import MiniImage from '../img/MiniImage.png'
import BigImage from '../img/BigImage.png'
import AsideItem from './AsideItem'
import AboutProduct from "./AboutProduct";

function Main() {
  return(
    <main className="main__container">
    <aside className="aside__container">
      <spam className="aside__title">Vídeo</spam>
      {/* <AsideItem src={MiniVideo} /> */}
      <img src={MiniVideo} alt="vídeo mostrando a sandália com mais detalhes" />
      <svg className="arrow__icon" width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.6023 18.3961C22.222 18.7393 21.6438 18.7396 21.2631 18.3968L15.9991 13.6567L10.7351 18.3968C10.3544 18.7396 9.77625 18.7393 9.39595 18.3961L9.065 18.0974C8.62495 17.7003 8.62495 17.0097 9.065 16.6126L15.3291 10.9596C15.7097 10.6161 16.2885 10.6161 16.6691 10.9596L22.9332 16.6126C23.3733 17.0097 23.3733 17.7003 22.9332 18.0974L22.6023 18.3961Z" fill="black" />
      </svg>
      <AsideItem className="opacity" src={MiniImage} />
      <AsideItem src={MiniImage} />
      <AsideItem src={MiniImage} />
      <AsideItem src={MiniImage} />
      <svg className="arrow__icon" width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.39579 10.6257C9.77609 10.2825 10.3542 10.2822 10.7349 10.6249L15.9989 15.3651L21.263 10.6249C21.6436 10.2822 22.2218 10.2825 22.6021 10.6257L22.933 10.9243C23.3731 11.3215 23.3731 12.012 22.933 12.4091L16.6689 18.0621C16.2883 18.4056 15.7096 18.4056 15.329 18.0621L9.06484 12.4091C8.62479 12.012 8.62479 11.3215 9.06484 10.9243L9.39579 10.6257Z" fill="black" />
      </svg>
    </aside>
    <div className="product">
      <img src={BigImage} />
    </div>
      <AboutProduct />
    </main>
  )
}

export default Main