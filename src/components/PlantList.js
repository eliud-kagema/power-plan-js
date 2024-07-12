import React, { useState } from 'react';
import Plant from './Plant';
import { createPlant } from '../plantLogic';

const PlantList = () => {
  const [plants, setPlants] = useState([]);

  const addPlant = (name) => {
    setPlants([...plants, createPlant(name)]);
  };

  const waterPlant = (index) => {
    const newPlants = [...plants];
    newPlants[index].water();
    setPlants(newPlants);
  };

  const growPlant = (index) => {
    const newPlants = [...plants];
    newPlants[index].grow();
    setPlants(newPlants);
  };

  return (
    <div>
      <button onClick={() => addPlant(`Plant ${plants.length + 1}`)}>Add Plant</button>
      {plants.map((plant, index) => (
        <Plant
          key={index}
          plant={plant}
          onWater={() => waterPlant(index)}
          onGrow={() => growPlant(index)}
        />
      ))}
    </div>
  );
};

export default PlantList;