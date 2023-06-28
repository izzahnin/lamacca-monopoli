import React from "react";
import { Link } from "react-router-dom";

function Sublearn(props) {
  return (
    <>
      <Link to={props.path} className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
        <h1>
          {props.text}
        </h1>
      </Link>
    </>
  );
}

export default Sublearn;
