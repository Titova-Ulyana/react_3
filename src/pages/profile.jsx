import React from 'react'
import Footer from "../components/footer";
import Prof from "../components/prof";
import Dobav from '../components/dobav';
import Pagination from '../components/pagination';
import Header from '../components/header';

function Profile() {
  return (
    <div>
      <main style={{'minHeight':'70vh'}}>
      <Header/>
      <Prof/>
      <Dobav/>
      <Pagination/>
      </main>
      <Footer/>
    </div>
  )
}

export default Profile