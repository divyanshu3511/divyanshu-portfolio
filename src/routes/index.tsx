import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Projects } from "@/components/site/projects";
import {
  About,
  Achievements,
  Experience,
  Resume,
  Services,
  Skills,
  Testimonials,
  WhyHireMe,
} from "@/components/site/sections";
import { Contact, Footer } from "@/components/site/contact";
import {
  BackToTop,
  Blobs,
  Loader,
  MouseGlow,
  Particles,
  ScrollProgress,
} from "@/components/site/effects";

const title = "Divyanshu Mishra — .NET Full Stack Developer";
const description =
  "Portfolio of Divyanshu Mishra, a .NET Full Stack Developer building enterprise web apps, REST APIs and AI-powered document automation with ASP.NET Core, Angular, SQL Server and Azure AI.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Divyanshu Mishra",
          jobTitle: ".NET Full Stack Developer",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lucknow",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          knowsAbout: [
            "ASP.NET Core",
            "C#",
            "Angular",
            "SQL Server",
            "Azure AI",
            "Intelligent Document Processing",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Loader />
      <Blobs />
      <Particles />
      <MouseGlow />
      <ScrollProgress />
      <Nav />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Services />
        <WhyHireMe />
        <Testimonials />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
