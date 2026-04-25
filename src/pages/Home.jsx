import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home relative bg-black min-h-screen w-full text-white">
      <Header />
      <section className="h-screen w-full overflow-hidden">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg"
          alt="background-image"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black-40"></div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
