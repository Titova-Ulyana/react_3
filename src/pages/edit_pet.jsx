import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Edits from "../components/edit";


const Edit_Pet = () => {
    return (
<div>
      <main style={{'minHeight':'70vh'}}>
      <Header/>
      <Edits/>
      </main>
      <Footer/>
</div>
  );
};

export default Edit_Pet;