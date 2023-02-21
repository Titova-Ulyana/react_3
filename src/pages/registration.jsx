import React from 'react'
import Footer from "../components/footer";
import Registration from "../components/regist";
import Header from '../components/header';

function Registr() {
  return (
    <div>
      <main style={{'minHeight':'70vh'}}>
      <Header/>
      <Registration/>
      </main>
      <Footer/>
    </div>
  )
}

export default Registr