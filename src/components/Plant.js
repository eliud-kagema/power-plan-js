import React from 'react';

const Plant = ({ plant, onWater, onGrow }) => {
  return (
    <div>
      <h2>{plant.getName()}</h2>
      <p>Health: {plant.getHealth()}</p>
      <p>Water Level: {plant.getWaterLevel()}</p>
      <button onClick={onWater}>Water</button>
      <button onClick={onGrow}>Grow</button>
    </div>
  );
};

export default Plant;