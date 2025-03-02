import Hero from "../about/Hero";
import OurCommitment from "../about/OurCommitment";
import Quality from "../about/Quality";

export default function AboutUsPage() {
  return (
    <div className="py-10 flex flex-col gap-24">
      <Hero />
      <OurCommitment />
      <Quality />
    </div>
  );
}
