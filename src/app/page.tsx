import { EstimateForm } from "@/components/EstimateForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <a className="absolute top-[-4rem] left-4 z-[100] bg-safety px-4 py-2 font-bold text-ink focus:top-4" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Proof />
        <EstimateForm />
      </main>
      <Footer />
    </>
  );
}
