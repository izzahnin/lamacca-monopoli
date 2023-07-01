import React from "react";

function Story(props) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-lg">{props.title}</h1>
        <img src={process.env.PUBLIC_URL + props.images} alt={props.alt} />
        <p className={props.pt}>{props.par}</p>
      </div>
    </>
  );
}

export default Story;
