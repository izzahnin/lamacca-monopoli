import React from "react";

function Bilangan(props) {
  return (
    <div className="bg-cover bg-repeat bg-center flex flex-col justify-center align-middle items-center w-full min-h-[calc(100vh-64px)] gap-2 px-3 m-auto" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bglontara.svg"})` }}>
      <img className="h-56" src={process.env.PUBLIC_URL + props.src} alt={props.alt} />
    </div>
  );
}

export default Bilangan;
