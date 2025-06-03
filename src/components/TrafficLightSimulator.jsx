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
    <>

    <style>
        {
            .traffic-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
          font-family: sans-serif;
          color: white;
        }

        .traffic-light {
          width: 100px;
          background: #222;
          border-radius: 20px;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          box-shadow: inset 0 0 10px #000;
        }

        .light {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #555;
          transition: background-color 0.6s, box-shadow 0.6s;
        }

        }
    </style>
    
    
    </>

)
}

export default TrafficLightSimulator;