import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
