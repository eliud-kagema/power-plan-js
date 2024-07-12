import { createPlant, createCactus } from '../src/plantLogic';

test('Create plant', () => {
  const plant = createPlant('Test Plant');
  expect(plant.getName()).toBe('Test Plant');
  expect(plant.getHealth()).toBe(100);
  expect(plant.getWaterLevel()).toBe(100);
});

test('Water plant', () => {
  const plant = createPlant('Test Plant');
  plant.water();
  expect(plant.getWaterLevel()).toBe(100);
  plant.dehydrate();
  plant.dehydrate();
  expect(plant.getWaterLevel()).toBe(80);
});

test('Create cactus', () => {
  const cactus = createCactus('Test Cactus');
  expect(cactus.getName()).toBe('Test Cactus');
  expect(cactus.storeWater).toBeDefined();
});
