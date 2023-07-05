import React from "react";
import Alfabet from "../../../../../components/Alfabet";

function Huruf() {
  return (
    <div className="bg-cover bg-repeat  bg-center"style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bglontara.svg" })` }}>
      <Alfabet huruf="A" latin="/a/" />
    </div>
  );
}

export default Huruf;
