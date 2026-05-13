import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, registerSchema } from "../utils/validate";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { popupNotification, TOAST_TYPE } from "../utils/toastPopups";
import { addUser, removeUser } from "../stores/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const currentSchema = isLogin ? loginSchema : registerSchema;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: zodResolver(currentSchema), mode: "onBlur" });

  const toggleAuth = () => {
    setIsLogin(!isLogin);
    reset();
  };

  const handleFormSubmit = async (data) => {
    setIsLoading(true);
    if (isLogin) {
      // sign-in
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user:", user);
          popupNotification(TOAST_TYPE.SUCCESS, "Logged in successfully!");
        })
        .catch((error) => {
          console.log("Error while sign-up:", error);
          popupNotification(TOAST_TYPE.ERROR, error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      // sign-up
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCred) => {
          const user = userCred.user;
          console.log("user:", user);
          popupNotification(TOAST_TYPE.SUCCESS, "Registered successfully!");
        })
        .catch((error) => {
          console.log("Error while sign-in:", error);
          popupNotification(TOAST_TYPE.ERROR, error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    reset();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 w-full max-w-md p-16 rounded-md flex flex-col gap-4">
      <h1 className="text-3xl font-bold w-full mb-6">
        {isLogin ? "Sign In" : "Sign Up"}
      </h1>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        action=""
        method="post"
        className="flex flex-col justify-center items-center gap-4 w-full"
      >
        {!isLogin && (
          <div className="w-full flex flex-col gap-2">
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-surface-2 p-4 rounded-sm"
              {...register("userName")}
            />
            {errors.userName && (
              <p className="text-red-600 text-sm">{errors.userName.message}</p>
            )}
          </div>
        )}
        <div className="w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full bg-surface-2 p-4 rounded-sm"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder="Password"
            className="w-full bg-surface-2 p-4 rounded-sm"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-6 bg-primary p-4 cursor-pointer hover:bg-primary-dark font-medium flex justify-evenly items-center"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : isLogin ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
      <div className="flex justify-between items-center w-full text-sm mb-8">
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="Remember me"
            id="remember"
            className="cursor-pointer"
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <div className="cursor-pointer hover:underline">Need help?</div>
      </div>
      <div className="sign-up-call-to-action flex gap-2 text-sm">
        <span className="text-text-muted">
          {isLogin ? "New to Netflix?" : "Already registered?"}
        </span>
        <button className="cursor-pointer hover:underline" onClick={toggleAuth}>
          {isLogin ? "Sign up now." : "Sign in now."}
        </button>
      </div>
    </div>
  );
};

export default Auth;
