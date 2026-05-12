import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";

const Problems = dynamic(
  () => import("@/components/sections/problems").then((mod) => mod.Problems),
  { loading: () => <div className="min-h-150" /> },
);
const Features = dynamic(
  () => import("@/components/sections/features").then((mod) => mod.Features),
  { loading: () => <div className="min-h-175" /> },
);
const HowItWorks = dynamic(
  () =>
    import("@/components/sections/how-it-works").then((mod) => mod.HowItWorks),
  { loading: () => <div className="min-h-150" /> },
);
const Partners = dynamic(
  () => import("@/components/sections/partners").then((mod) => mod.Partners),
  { loading: () => <div className="min-h-100" /> },
);
const Metrics = dynamic(
  () => import("@/components/sections/metrics").then((mod) => mod.Metrics),
  { loading: () => <div className="min-h-100" /> },
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/testimonials").then(
      (mod) => mod.Testimonials,
    ),
  { loading: () => <div className="min-h-125" /> },
);
const FAQ = dynamic(
  () => import("@/components/sections/faq").then((mod) => mod.FAQ),
  { loading: () => <div className="min-h-150" /> },
);
const FinalCTA = dynamic(
  () => import("@/components/sections/final-cta").then((mod) => mod.FinalCTA),
  { loading: () => <div className="min-h-100" /> },
);

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <Features />
      <div className="content-auto">
        <HowItWorks />
      </div>
      <div className="content-auto">
        <Partners />
      </div>
      <div className="content-auto">
        <Metrics />
      </div>
      <Testimonials />
      <div className="content-auto">
        <FAQ />
      </div>
      <div className="content-auto">
        <FinalCTA />
      </div>
    </main>
  );
}
