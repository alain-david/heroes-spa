import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { GetHeroeById } from "../helpers";

export const HeroePage = () => {
  const { id } = useParams();
  const navigator = useNavigate();

  const hero = useMemo(() => GetHeroeById(id), [id]);

  const onNavigateBack = () => {
    navigator(-1);
  };

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  const imgUrl = `/${id}.jpg`;

  return (
    <>
      <div className="row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
          <img src={imgUrl} alt={hero.superhero} className="img-thumbnail" />
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego:</b> {hero.alter_ego}{" "}
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> {hero.publisher}{" "}
            </li>
            <li className="list-group-item">
              <b>First Appearance:</b> {hero.first_appearance}{" "}
            </li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>
          <button className="btn btn-outline-primary" onClick={onNavigateBack}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};
