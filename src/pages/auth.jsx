import React from 'react'
import Footer from "../components/footer";
import Au from "../components/authentication";
import Header from "../components/header";

function Auth() {
  return (
    <div>
      <main style={{'minHeight':'70vh'}}>
        <Header/>
        <Au/>
        </main>
        <Footer/>
    </div>
  )
}

export default Auth

