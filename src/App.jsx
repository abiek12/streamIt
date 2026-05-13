import { RouterProvider, useNavigate } from "react-router-dom";
import appRouter from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import { Provider, useDispatch } from "react-redux";
import appStore from "./stores/appStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./stores/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("browse");
        dis;
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

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
