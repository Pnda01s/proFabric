import './ImgEvento.css'
import images from '../../Arrays';

const ImgEvento = () => {
  
    
    return (
      <div className='CampoAll'>

        <div className='Titulo'>
            <h1>Imagem do evento</h1>
        </div>
          <div className='carrossel'>
            <div className='imagem'>
            {images.map((image, index) => (
                <img  src={image} alt={`Imagem ${index + 1}`} key={index} 
                />
            ))}
            </div>
            
     </div>
     
     </div>
     
    );
  };
  
 
export default ImgEvento;