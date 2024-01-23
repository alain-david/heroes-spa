import { createBrowserRouter, Outlet } from "react-router-dom";

import { DCPage, HeroePage, MarvelPage, SearchPage } from "../heroes";
import { LoginPage } from "../auth/pages/LoginPage";
import { ErrorPage } from "./ErrorPage";
import { NavBar } from "../ui/components/NavBar";

export const AppRouter = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DCPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "heroe/:id",
    element: <HeroePage />,
  },
]);
