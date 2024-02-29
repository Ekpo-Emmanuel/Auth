import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div>
      {seconds > 0 ? (
        <div>
          <span>{seconds} seconds</span>
        </div>
      ) : (
        <div>Countdown is over!</div>
      )}
    </div>
  );
};

export default Countdown;
