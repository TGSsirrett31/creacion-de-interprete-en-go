import React from "react";
import '../Styles.css';
import NavBar from "../Components/NavBar";
import NavButtons from "../Components/NavButtons";

function HelloWorld() {
  return (
    <div className="page-container">
      <NavBar />
      <div className="content-container">
        <h1>Hola</h1>
        <NavButtons 
          prevLink="/guide"
          prevText="Guía"
          nextLink="/guide/start"
          nextText="Start to Develop" />
      </div>
    </div>
  );
}

export default HelloWorld;
