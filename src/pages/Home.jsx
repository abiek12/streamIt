import { CaretRightIcon } from "@phosphor-icons/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import TrendingItems from "../components/TrendingItems";
import Benefits from "../components/Benefits";
import Faq from "../components/Faq";
import Auth from "../components/Auth";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [isAuthScreen, setIsAuthScreen] = useState(false);
  const { t } = useTranslation();

  const toggleScreen = () => {
    setIsAuthScreen(!isAuthScreen);
  };

  return (
    <div className="home relative bg-black w-full text-white">
      <Header value={isAuthScreen} toggle={toggleScreen} />
      <section className="w-full">
        <div className="hero relative h-[96vh] w-full overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg"
            alt="background-image"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black"></div>

          {isAuthScreen ? (
            <Auth />
          ) : (
            <div className="content absolute top-7/12 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 z-10 w-xl text-center">
              <div className="flex flex-col gap-4 items-center justify-center mb-8">
                <h1 className="text-6xl font-extrabold leading-18">
                  {t("welcomeMessage")}
                </h1>
                <h4 className="text-xl font-bold">
                  Starts at ₹149. Cancel at any time.
                </h4>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center">
                <h4 className="font-normal">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h4>
                <button
                  onClick={toggleScreen}
                  className="bg-primary hover:bg-primary-dark flex items-center justify-evenly gap-2 p-3 px-6 h-14 rounded-sm cursor-pointer flex-1"
                >
                  <h3 className="text-2xl font-semibold">Get Started</h3>
                  <CaretRightIcon size={24} color="#ffffff" />
                </button>
                {/* <form
                  className="w-full"
                  action=""
                  method="post"
                  onSubmit={handleSubmit(handleRegSubmit)}
                >
                  <div className="flex w-full gap-2 justify-between items-center mb-2">
                    <input
                      className="border border-solid border-text-muted bg-surface/80 p-3 rounded-sm h-14 w-3/5 flex-none"
                      type="text"
                      placeholder="Email address"
                      {...register("email")}
                    />
                    <button className="bg-primary hover:bg-primary-dark flex items-center justify-evenly gap-2 p-3 px-6 h-14 rounded-sm cursor-pointer flex-1">
                      <h3 className="text-2xl font-semibold">Get Started</h3>
                      <CaretRightIcon size={24} color="#ffffff" />
                    </button>
                  </div>
                  {errors.email && (
                    <p className="text-red-600 text-sm text-start">
                      {errors.email.message}
                    </p>
                  )}
                </form> */}
              </div>
            </div>
          )}

          <svg
            className="absolute bottom-0 left-0 w-full h-35 z-20"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Main sharp line */}
              <linearGradient
                id="lineCore"
                x1="0"
                y1="0"
                x2="1440"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#ff0057" stopOpacity="0" />
                <stop offset="20%" stopColor="#ff0057" />
                <stop offset="50%" stopColor="#ff3d9a" />
                <stop offset="80%" stopColor="#ff0057" />
                <stop offset="100%" stopColor="#ff0057" stopOpacity="0" />
              </linearGradient>

              {/* Glow gradient */}
              <linearGradient
                id="lineGlow"
                x1="0"
                y1="0"
                x2="1440"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#ff0057" stopOpacity="0" />
                <stop offset="50%" stopColor="#ff3d9a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff0057" stopOpacity="0" />
              </linearGradient>

              {/* Blue fill */}
              <linearGradient
                id="fillGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0b0f2a" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>

              {/* Blur for glow */}
              <filter id="blur">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>

            {/* Blue curved section */}
            <path
              d="M0,120 Q720,20 1440,120 L1440,160 L0,160 Z"
              fill="url(#fillGradient)"
            />

            {/* Glow stroke (thick + blur) */}
            <path
              d="M0,120 Q720,20 1440,120"
              fill="none"
              stroke="url(#lineGlow)"
              strokeWidth="10"
              filter="url(#blur)"
            />

            {/* Sharp top line */}
            <path
              d="M0,120 Q720,20 1440,120"
              fill="none"
              stroke="url(#lineCore)"
              strokeWidth="2.5"
            />
          </svg>
        </div>
        <div className="px-36 flex flex-col gap-16">
          <TrendingItems />
          <Benefits />
          <Faq />
          <div className="w-full flex justify-center">
            <div className="flex flex-col gap-4 items-center justify-center w-3xl">
              <h4 className="font-normal">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h4>
              <div className="flex w-full gap-2 justify-between items-center">
                <input
                  className="border border-solid border-text-muted bg-surface/80 p-3 rounded-sm h-14 w-3/5 flex-1"
                  type="text"
                  placeholder="Email address"
                />
                <button className="bg-primary hover:bg-primary-dark flex items-center justify-evenly gap-2 p-3 px-6 h-14 rounded-sm cursor-pointer flex-none">
                  <div className="">
                    <h3 className="text-2xl font-semibold">Get Started</h3>
                  </div>
                  <div className="">
                    <CaretRightIcon size={24} color="#ffffff" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
