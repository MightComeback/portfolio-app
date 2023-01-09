import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
