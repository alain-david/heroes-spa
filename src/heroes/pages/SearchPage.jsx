import { useLocation, useNavigate } from "react-router-dom";
import querystring from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroeCard } from "../components";
import { GetHeroesByName } from "../helpers/GetHeroesByName";

export const SearchPage = () => {
  const navigator = useNavigate();
  const location = useLocation();

  const { q = "" } = querystring.parse(location.search);
  const heroes = GetHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchtext, onInputChange } = useForm({
    searchtext: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigator(`?q=${searchtext}`);
  };

  return (
    <div className="container">
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search hero"
              className="form-control"
              name="searchtext"
              autoComplete="off"
              value={searchtext}
              onChange={onInputChange}
            />
          </form>
          <button className="btn btn-outline-primary mt-1">Search</button>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search Hero
          </div>
          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroeCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
