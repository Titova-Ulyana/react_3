import React from 'react'
import Footer from "../components/footer";
import Pet from "../components/pets";
import Header from "../components/header";
import Cards from "../components/carts";

import chicken1 from '../img/pets/курица1.jpg';
import chicken2 from '../img/pets/курица2.jpg';
import chicken3 from '../img/pets/курица3.jpg';

function Pets() {
  let card1={name:'Карточка животного'}
  let pet1={id:14, name:'Иван', phone:'+7-921-485-65-44', email:'my_chiken@mail.ru', kind:'Курица', photos:[chicken1, chicken2, chicken3], description: 'Потерялась курица, пятнистая, рыжая. Любит играть, ласковая.', mark: 'ch-001-spb', district: 'Невский', date: '29-03-2020' }

  return (
    <div>
      <main style={{'minHeight':'85vh'}}>
        <Header/>
        <Cards card={card1}/>
        <Pet pet={pet1}/>
        </main>
        <Footer/>
    </div>
  )
}

export default Pets