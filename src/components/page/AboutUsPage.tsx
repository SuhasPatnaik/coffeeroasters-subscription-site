import Hero from "../about/Hero";
import OurCommitment from "../about/OurCommitment";
import Quality from "../about/Quality";
import Headquarters from "../about/Headquarters";

export default function AboutUsPage() {
  return (
    <main className="py-10 flex flex-col gap-24">
      <Hero />
      <OurCommitment />
      <Quality />
      <Headquarters />
    </main>
  );
}
