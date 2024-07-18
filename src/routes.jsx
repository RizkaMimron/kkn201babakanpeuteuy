import { Home, Profile } from "@/pages";
import { element } from "prop-types";

export const routes = [
  {
    name: "main",
    path: "/",
    element: <Home/>,
  },
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  
];

export default routes;
