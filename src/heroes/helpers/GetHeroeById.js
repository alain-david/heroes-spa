import { heroes } from "../data/heroes";

export const GetHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
