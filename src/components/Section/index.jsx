import React from "react";
import { Link } from "react-router-dom";

function Section(props) {
  const color = `p-3 w-1/2 rounded-xl  ${props.color}`;
  const visible = `p-3 w-1/2 rounded-xl  ${props.visible}`;
  return (
    <>
      <div className="flex flex-col w-screen h-[550px] gap-2 px-3 justify-center align-middle items-center">
        <h1 className="font-semibold text-lg text-navy">{props.title}</h1>
        <Link to={props.path1} className={color}>
          <h1 className="font-semibold text-white text-center">Huruf</h1>
        </Link>
        <Link to={props.path2} className={color}>
          <h1 className="font-semibold text-white text-center">Angka</h1>
        </Link>
        <Link to={props.path3} className={visible}>
          <h1 className="font-semibold text-white text-center">Cerita</h1>
        </Link>
      </div>
    </>
  );
}

export default Section;
