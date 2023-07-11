import React from "react";
import { Link } from "react-router-dom";

function Section(props) {
  const color = `p-3 w-1/2 rounded-xl  ${props.color}`;
  return (
    <div className="bg-cover bg-repeat bg-center "style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bglontara.svg" })` }}>
      <div className="flex flex-col w-full min-h-[100vh] gap-2 px-3  m-auto justify-center align-middle items-center">
        <h1 className="font-semibold text-lg text-navy">{props.title}</h1>
        <Link to={props.path1} className={color}>
          <h1 className="font-semibold text-white text-center">Huruf</h1>
        </Link>
        <Link to={props.path2} className={color}>
          <h1 className="font-semibold text-white text-center">Angka</h1>
        </Link>
      </div>
    </div>
  );
}

export default Section;
