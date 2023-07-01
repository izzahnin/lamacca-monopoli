import React from "react";

function Image(props) {
  return <img className="flex m-auto pt-3 w-96 sm:w-1/2"
  src={process.env.PUBLIC_URL + props.src} alt={props.alt} />;
}

export default Image;
