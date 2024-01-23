import { useMemo } from "react";

import { GetHeroesByPublisher } from "../helpers";
import { HeroeCard } from "./HeroeCard";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => GetHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((heroe) => (
        <HeroeCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};
