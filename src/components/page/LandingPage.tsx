import Collection from "../landing/Collection";
import Hero from "../landing/Hero";
import HowItWorks from "../landing/HowItWorks";
import WhyChooseUs from "../landing/WhyChooseUs";

export default function LandingPage() {
  return (
    <main className="py-10 flex flex-col gap-20">
      <Hero />
      <Collection />
      <WhyChooseUs />
      <HowItWorks />
    </main>
  );
}
