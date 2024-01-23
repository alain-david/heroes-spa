import { RouterProvider } from "react-router-dom";

import { AppRouter } from "./router/AppRouter";
import { NavBar } from "./ui/components/NavBar";

export const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
};
