import './ImgEvento.css'



const ImgEvento = () => {
    const images = [
      './imgs/imagem1.png',
      './imgs/imagem2.png',
      './imgs/imagem3.png',
      './imgs/imagem4.png',
      './imgs/imagem5.png',
      './imgs/imagem6.png',
      './imgs/imagem7.png'
    ];
  
    return (
      <div className='CampoAll'>

        <div className='Titulo'>
            <h1>Imagem do evento</h1>
        </div>
            <div className='imagem'>
            {images.map((image, index) => (
                <img src={image} alt={`Imagem ${index + 1}`} key={index} />
            ))}
            </div>
     </div>
    );
  };
  
 
export default ImgEvento;