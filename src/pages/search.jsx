import React from 'react'
import Footer from "../components/footer";
import Searchs from "../components/search";
import Header from '../components/header';

function Registr() {
  return (
    <div>
      <main style={{'minHeight':'70vh'}}>
      <Header/>
      <Searchs/>
      </main>
      <Footer/>
    </div>
  )
}

export default Registr