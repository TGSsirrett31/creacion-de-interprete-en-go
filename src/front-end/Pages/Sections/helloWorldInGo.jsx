import React from "react";
import '../../App.css'
import NavBar from "../Components/NavBar";
import NavButtons from "../Components/NavButtons";

function HelloWorld(){
    return (
        <>
        <NavBar />
        <h1>Hola</h1>
        <NavButtons 
          prevLink="/guide"
          prevText="Guía"
          nextLink="/guide/start"
          nextText="Start to Develop" />
        </>
    )
}

export default HelloWorld