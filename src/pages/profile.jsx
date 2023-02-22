import React from 'react'
import Footer from "../components/footer";
import Prof from "../components/prof";
import Dobav from '../components/dobav';
import Pagination from '../components/pagination';
import Header from '../components/header';
import Cards from "../components/carts";

import cat from '../img/pets/кошка.jpg';
import goap from '../img/pets/коза.jpeg';



function Profile() {
  let card1={name:'Личный кабинет'}
  let card2={name:'Добавленные объявления'}

  let pet1={id:14, kind:'Кошка', photos:cat, description: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.', mark: 'ca-001-spb', district: 'Василиостровский', date: '24-03-2020' }
  let pet2={id:18, kind:'Коза', photos:goap, description: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая', mark: 'go-011-spb', district: 'Центральный', date: '14-03-2022'}


  return (
    <div>
      <main style={{'minHeight':'85vh'}}>
      <Header/>
      <Cards card={card1}/>
      <Prof/>
      <Cards card={card2}/>
      <Dobav pet={pet1}/>
      <Dobav pet={pet2}/>
      <Pagination/>
      </main>
      <Footer/>
    </div>
  )
}

export default Profile