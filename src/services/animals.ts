import { zooApi } from "./zooApi";

function getAnimal() {
  return zooApi.get("/animals/rand");
}

function getAnimals(quantity: number) {
  return zooApi.get(`/animals/rand/${quantity}`);
}

export { getAnimal, getAnimals };
