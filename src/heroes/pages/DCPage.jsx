import { HeroesList } from "../components/HeroesList";

export const DCPage = () => {
  return (
    <div className="container">
      <h1>DC Comics</h1>
      <hr />
      <HeroesList publisher="DC Comics" />
    </div>
  );
};
