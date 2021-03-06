import React, { useEffect, useState } from "react";
import '../styles/Clock.css'

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return( 
      <div className="clock-content">
        {clockState}
      </div>
  )
}

export default Clock;