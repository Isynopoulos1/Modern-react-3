import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === "winter" ? "Brr, it is chilly" : "Lets hit the beach";

  return (
    <h1>
      <div>{text}</div>
    </h1>
  );
};

export default SeasonDisplay;
