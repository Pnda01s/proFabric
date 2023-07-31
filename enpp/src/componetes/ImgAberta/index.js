import React, { useState } from 'react';
import './ImgAberta.css';
import images from '../../Arrays';

const ImgAberta = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='All'>
      <div className='Img'>
        <img src={images[currentIndex]} alt='Imagem' className='Imagem' />
      </div>
      <div className='Rbar'>
        <h1>Oficina Políticas Públicas - Prof. Taís</h1>
        <div className='navigation-buttons'>
          <button  onClick={handlePrevious} className='botaoAnterior' ><img src='./imgs/botao.svg'/></button>
          <button onClick={handleNext} className='botaoProximo' > <img src='./imgs/botao.svg'/></button>
        </div>
      </div>
    </div>
  );
};

export default ImgAberta;