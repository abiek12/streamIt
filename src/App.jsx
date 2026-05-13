import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import appStore from "./stores/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
        <ToastContainer />
      </div>
    </Provider>
  );
};

export default App;
