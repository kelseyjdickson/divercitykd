import React from "react";
import banner from "./diversity.png";

const Banner = props => {
  const style = {
    marginLeft: "33%"
  };

  return (
    <div>
      <img style={style} src={banner} alt="banner of diversity" />
    </div>
  );
};

export default Banner;
