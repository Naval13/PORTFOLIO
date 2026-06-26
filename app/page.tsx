import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <FeaturedCaseStudy />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
