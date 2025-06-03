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
      <style>{
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

        .light.red.active {
          background-color: red;
          box-shadow: 0 0 20px red;
        }

        .light.yellow.active {
          background-color: yellow;
          box-shadow: 0 0 20px yellow;
        }

        .light.green.active {
          background-color: #00ff00;
          box-shadow: 0 0 20px #00ff00;
        }
      }</style>

      <div className="traffic-container">
        <h2>Traffic Light Simulator</h2>
        <div className="traffic-light">
          <div className={`light red ${currentLight === 'red' ? 'active' : ''}`}></div>
          <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`}></div>
          <div className={`light green ${currentLight === 'green' ? 'active' : ''}`}></div>
        </div>
      </div>
    </>
  );
};
}
export default TrafficLightSimulator;