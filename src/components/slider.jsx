import React from 'react';
import dog from '../img/pets/собака.jpg';
import mouse from '../img/pets/мышь.jpg';
import gorill from '../img/pets/горилла.jpg';

const Slider = () => {
    return (
<div>
    <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
    <div id="carouselExampleIndicators" className="carousel slide m-auto  bg-opacity-25 w-75 p-2" data-bs-ride="carousel" style={{'minHeight':'350px', 'backgroundColor':'#DBC6FE'}}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active text-center">
          <div style={{'textAlign':'center', 'min-height':'300px'}}><img src={dog} alt="Собака" style={{'textAlign':'center', 'width':'300px', 'height':'auto'}}/></div>
          <h2>Найдена собака</h2>
          <p style={{'margin-bottom':'50px'}}>Собака рыжая, была утеряна в красногвардейчком райне районе</p>
        </div>
        <div className="carousel-item text-center">
          <div style={{'textAlign':'center', 'min-height':'300px'}}><img src={mouse} alt="Мышь" style={{'textAlign':'center', 'width':'300px', 'height':'auto'}}/></div>
         <h2 className="text-center">Найдена мышь</h2>
          <p style={{'margin-bottom':'50px'}}>Мышь серая, была утеряна в центральном районе</p>
        </div>
        <div className="carousel-item text-center">
          <div style={{'textAlign':'center', 'min-height':'300px'}}><img src={gorill} alt="Горилла" style={{'textAlign':'center', 'width':'300px', 'height':'auto'}}/></div>
          <h2 className="text-center">Найдена горила</h2>
          <p style={{'margin-bottom':'50px'}}>Горилла, была утеряна в красногвардейчком райне районе</p>
      </div>
    </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{'backgroundColor':'#AB78DE'}}></span>
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" style={{'backgroundColor':'#AB78DE'}}></span>
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>  
</div>
    )
}
export default Slider;