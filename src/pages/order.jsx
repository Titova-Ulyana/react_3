import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Orders from "../components/orders";


const Edit_Pet = () => {
    return (
<div>
      <main style={{'minHeight':'70vh'}}>
      <Header/>
      <Orders/>
      </main>
      <Footer/>
</div>
  );
};

export default Edit_Pet;