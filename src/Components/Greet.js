import React, { useState } from "react";

function Greet() {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting;
  const cssStyle = {};

  let time = new Date().toLocaleTimeString();
  const [currTime, setTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(UpdateTime, 1000);

  if (currDate >= 24 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (currDate >= 12 && currDate < 18) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else if (currDate >= 18 && currDate < 20) {
    greeting = "Good Evening";
    cssStyle.color = "#00b894";
  } else if (currDate >= 20 && currDate < 24) {
    greeting = "Good Night";
    cssStyle.color = "Blue";
  }
  console.log(currTime);
  return (
    <>
      <div>
        <h3>
          Wishing
          <span style={cssStyle}>
            {" "}
            {greeting} - {time}
          </span>
        </h3>
      </div>
    </>
  );
}

export default Greet;
