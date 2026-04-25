import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section>
        <div className="">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg"
            alt="background-image"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
