import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProfilerStats from "@/components/ProfilerStats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <ProfilerStats />
        <Projects />
        <Skills />
        <Marquee />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
