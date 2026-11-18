import { createFileRoute } from "@tanstack/react-router";
import { SiteProvider } from "@/components/site/SiteProvider";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Experience } from "@/components/site/Experience";
import { Contact } from "@/components/site/Contact";
import { FloatingButtons, Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Negina Majid — Full-Stack Web Developer & Graphic Designer" },
      {
        name: "description",
        content:
          "Portfolio of Negina Majid (Neegin), a Kabul-based full-stack web developer and UI/UX graphic designer. See posters, branding, videos and websites.",
      },
      { property: "og:title", content: "Negina Majid — Web Developer & Graphic Designer" },
      {
        property: "og:description",
        content: "Posters, branding, motion and responsive websites by Negina Majid. Available for freelance work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteProvider>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </SiteProvider>
  );
}
