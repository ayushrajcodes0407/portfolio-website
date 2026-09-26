import CustomCursor from "../components/shared/CustomCursor";
import IntroCover from "../components/IntroCover/IntroCover";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import CurrentlyBuilding from "../components/CurrentlyBuilding/CurrentlyBuilding";
import Research from "../components/Research/Research";
import Credentials from "../components/Credentials/Credentials";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume";
import Skills from "../components/Skills/Skills";
import Impact from "../components/Impact/Impact";
import Github from "../components/Github/Github";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main>
        <IntroCover />
        <Hero />
        <About />
        <CurrentlyBuilding />
        <Research />
        <Credentials />
        <Projects />
        <Resume />
        <Skills />
        <Impact />
        <Github />
        <Contact />
      </main>
    </>
  );
}
