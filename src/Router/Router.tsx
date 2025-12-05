import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children : [{
        index : true,

        Component :Home
    }]
  },
]);
