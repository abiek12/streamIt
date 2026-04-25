import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Browse from "../pages/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default appRouter;
