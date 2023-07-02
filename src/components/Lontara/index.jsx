import React from "react";

function Lontara(props) {
  return (
    <>
      <div className="flex flex-col justify-center align-middle items-center  h-[550px] gap-2 p-3 mb-12 m-auto">
        <img src={process.env.PUBLIC_URL + props.src} alt={props.alt} />
        <p>{props.latin}</p>
      </div>
    </>
  );
}

export default Lontara;
