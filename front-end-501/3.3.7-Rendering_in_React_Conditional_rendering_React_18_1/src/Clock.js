import React from "react";

function Clock() {
  const today = new Date();
  const currHour = today.getHours()
  if (currHour < 12){
    return <p>Good Morning!</p>;
  } else if (currHour >= 12 && currHour < 18) {
    return <p>Good Afternoon!</p>
  } else {
    return <p>Good Evening!</p>
  }
}

export default Clock;
