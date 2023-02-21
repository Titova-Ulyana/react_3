import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "../components/slider";
import Naiden from "../components/naiden";
import Podpiska from "../components/podpiska";
import cat from '../img/pets/кошка.jpg';
//import koza from '../img/pets/коза.jpeg';

let pet1={id:14, kind:'Кошка', photos:cat, description: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.', mark: 'ca-001-spb', district: 'Василиостровский', date: '24-03-2020' }
//let pet2={id:18, kind:'Коза', photos:goap, description: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая', mark: 'go-011-spb', district: 'Центральный', date: '14-03-2022'}


const Main = () => {
    return (
<div>
      <main style={{'minHeight':'70vh'}}>
      <Header/>
      <Slider/>
      <Naiden pet={pet1}/>
      <Podpiska/>
      </main>
      <Footer/>
</div>
  );
};

export default Main;