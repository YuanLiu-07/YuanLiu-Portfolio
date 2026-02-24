// app/page.tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-[#141414] text-gray-100 min-h-screen">
        <Hero />
        <About />
        <section className="container mx-auto px-4">
          <Experience />
        </section>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}