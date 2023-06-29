import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Sublearn(props) {
  const combinedClassName = `p-1 text-center w-40 sm:w-36 md:w-44 lg:w-60 h-20 shadowbox rounded-lg flex items-center justify-center text-white hover:scale-105 hover:font-bold ${props.color}`;

  return (
    <>
      <Link to={props.path} className={combinedClassName}>
        <h1 className="font-semibold">{props.text}</h1>
      </Link>
    </>
  );
}

export default Sublearn;
