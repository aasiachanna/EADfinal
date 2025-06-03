import React, { useEffect, useState } from 'react';
function TrafficLightSimulator(){

const TrafficLightSimulator = () => {
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    const sequence = ['red', 'yellow', 'green'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % sequence.length;
      setCurrentLight(sequence[index]);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);


return (
    <div className="traffic-container">
      <h2>Traffic Light Simulator</h2>
      
    </div>
  );
};


}

export default TrafficLightSimulator;