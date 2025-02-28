import Collection from "../landing/Collection";
import Hero from "../landing/Hero";

export default function LandingPage() {
  return (
    <div className="py-10 flex flex-col gap-20">
      <Hero />
      <Collection />
    </div>
  );
}
