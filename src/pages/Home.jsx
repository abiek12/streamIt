import { CaretRightIcon } from "@phosphor-icons/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";
import { useState } from "react";

const Home = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  const toggleScreen = () => {
    setIsLoginScreen(!isLoginScreen);
  };

  return (
    <div className="home relative bg-black h-screen w-full overflow-hidden text-white">
      <Header value={isLoginScreen} toggle={toggleScreen} />
      <section className="h-screen w-full overflow-hidden">
        <div className="hero">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg"
            alt="background-image"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black"></div>

          {isLoginScreen ? (
            <Login toggle={toggleScreen} />
          ) : (
            <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 z-10 w-xl text-center">
              <div className="flex flex-col gap-4 items-center justify-center mb-8">
                <h1 className="text-6xl font-extrabold">
                  Unlimited movies, shows, and more
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
                <div className="flex w-full gap-2 justify-between items-center">
                  <input
                    className="border border-solid border-text-muted bg-surface/80 p-3 rounded-sm h-14 w-3/5 flex-none"
                    type="text"
                    placeholder="Email address"
                  />
                  <button className="bg-primary hover:bg-primary-dark flex items-center justify-between gap-2 p-3 px-6 h-14 rounded-sm cursor-pointer flex-1">
                    <h3 className="text-2xl font-semibold">Get Started</h3>
                    <CaretRightIcon size={24} color="#ffffff" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
