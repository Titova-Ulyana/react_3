import React from 'react'
import Footer from "../components/footer";
import Au from "../components/authentication";
import Header from "../components/header";
import Cards from "../components/carts";

function Auth() {
  let card1={name:'Аутентификация'}

  return (
    <div>
      <main style={{'minHeight':'85vh'}}>
        <Header/>
        <Cards card={card1}/>
        <Au/>
        </main>
        <Footer/>
    </div>
  )
}

export default Auth

