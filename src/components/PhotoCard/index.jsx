import React from "react";
import "./style.css";

function PhotoCard(props) {
  return (
    <>
      <div className="flex flex-col w-52 sm:w-36 md:w-52 bg-gray-50 p-0">
        <div className="flex flex-col justify-end items-center  h-60  w-full bg-cover bg-top" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + props.src})` }}>
          <div className="flex flex-col align-middle text-center border-2 rounded-full h-15 p-1 mb-2 w-48 sm:w-32 md:w-48 bg-white border-midnight ">
            <p className="text-midnight font-semibold text-base  sm:text-lg">{props.name}</p>
            <p className="text-gray-600 text-sm  sm:text-base">{props.role}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoCard;
