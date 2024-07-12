export function createPlant(name, abilities = {}) {
  let health = 100;
  let waterLevel = 100;

  const plant = {
    getName: () => name,
    getHealth: () => health,
    getWaterLevel: () => waterLevel,
    water: () => {
      waterLevel += 10;
      if (waterLevel > 100) waterLevel = 100;
    },
    dehydrate: () => {
      waterLevel -= 10;
      if (waterLevel < 0) waterLevel = 0;
    },
    grow: () => {
      health += 10;
      if (health > 100) health = 100;
    },
    wilt: () => {
      health -= 10;
      if (health < 0) health = 0;
    },
  };

  return { ...plant, ...abilities };
}

export function createCactus(name) {
  const cactusAbilities = {
    storeWater: () => {
      console.log('Storing water');
    },
  };

  return createPlant(name, cactusAbilities);
}
