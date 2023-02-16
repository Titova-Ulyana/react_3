import React from 'react';
import cat from '../img/pets/кошка.jpg';
import koza from '../img/pets/коза.jpeg';


const Naiden = () => {
    return (
<div>
    <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
    <div className="d-flex flex-row flex-wrap">
        <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{'minWidth':'300px', 'width':'45%'}}>
        <img src={cat} className="w-75" alt="рисунок животного"/>
        <p className="w-50 text-primary" style={{'minWidth':'250px'}}>id:</p>
        <p className="w-50" style={{'minWidth':'250px'}}>14</p>

        <p className="w-50 text-primary" style={{'minWidth':'250px'}}>Вид животного:</p>
        <p className="w-50" style={{'minWidth':'250px'}}> Кошка</p>

        <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Описание:</p>
        <p className="w-50" style={{'minWidth':'300px'}}>Потерялась кошка, пушистая, серая. Любит играть, ласковая.</p>

        <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Номер чипа:</p>
        <p className="w-50" style={{'minWidth':'300px'}}>ca-001-spb</p>

        <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Район:</p>
        <p className="w-50" style={{'minWidth':'300px'}}>Василиостровский</p>

        <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Дата:</p>
        <p className="w-50" style={{'minWidth':'300px'}}>24-03-2020</p>
        </div>
        <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{'min-width':'300px', 'width':'45%'}}>
        <img src={koza} className="w-75" alt="рисунок животного"/>
        <p className="w-50 text-primary" style={{'minWidth':'250px'}}>id:</p>
        <p className="w-50" style={{'minWidth':'250px'}}>18</p>

        <p className="w-50 text-primary" style={{'minWidth':'250px'}}>Вид животного:</p>
        <p className="w-50" style={{'minWidth':'250px'}}> Коза</p>

        <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Описание:</p>
        <p className="w-50" style={{'minWidth':'300px'}}>Потерялась коза, последний раз видели в здании Московского вокзала
            г. Санкт-Петербург. Коза белая, пуховая.</p>

        <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Номер чипа:</p>
        <p className="w-50" style={{'minWidth':'300px'}}>go-011-spb</p>

        <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Район:</p>
        <p className="w-50" style={{'minWidth':'300px'}}>Центральный</p>

        <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Дата:</p>
        <p className="w-50" style={{'minWidth':'300px'}}>14-03-2022</p>
        </div>
    </div>
</div>
    )
}
export default Naiden;