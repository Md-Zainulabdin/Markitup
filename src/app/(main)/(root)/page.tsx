import Clients from "./components/Clients";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>

      <div>
        <Clients />
      </div>

      <div className="light-line"></div>
    </div>
  );
};

export default Home;
