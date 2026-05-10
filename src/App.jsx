import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
      <ToastContainer />
    </div>
  );
};

export default App;
