import React from 'react'
import Footer from "../components/footer";
import Pet from "../components/pets";
import Header from "../components/header";

function Pets() {
  return (
    <div>
      <main style={{'minHeight':'70vh'}}>
        <Header/>
        <Pet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Pets