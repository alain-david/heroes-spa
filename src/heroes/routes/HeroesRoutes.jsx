import { Navigate, Route, Routes } from "react-router-dom";

import { NavBar } from "../../ui/components";
import { DCPage, HeroePage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />,
          <Route path="/dc" element={<DCPage />} />,
          <Route path="/search" element={<SearchPage />} />,
          <Route path="/heroe/:id" element={<HeroePage />} />,
          <Route path="/" element={<Navigate to={"/marvel"} />} />,
        </Routes>
      </div>
    </>
  );
};
