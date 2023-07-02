import React from "react";

function Bilangan(props) {
  return (
    <>
      <div className="flex flex-col justify-center align-middle items-center  h-[560px] gap-2 p-3 mb-12 m-auto">
        <img className="h-56" src={process.env.PUBLIC_URL + props.src} alt={props.alt} />
      </div>
    </>
  );
}

export default Bilangan;
