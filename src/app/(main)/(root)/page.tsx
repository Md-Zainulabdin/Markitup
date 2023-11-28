import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Services from "./components/Services";

const Home = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <Hero />
      </div>

      <div>
        <Clients />
      </div>

      <div className="light_line my-8"></div>

      <div>
        <Services/>
      </div>
    </div>
  );
};

export default Home;
