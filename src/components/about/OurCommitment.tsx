export default function OurCommitment() {
  return (
    <section className="flex flex-col items-center text-center gap-8 sm:flex-row sm:gap-32 lg:px-32 sm:text-left">
      <img
        src="/images/about/mobile/image-commitment.jpg"
        srcSet="
          /images/about/mobile/image-commitment.jpg  480w,
          /images/about/tablet/image-commitment.jpg 640w,
          /images/about/desktop/image-commitment.jpg 1024w
        "
        sizes="(max-width: 640px) 480px, 
               (max-width: 1024px) 640px, 
               1024px"
        className="rounded-xl mb-4"
      />
      <div className="text-balance">
        <h1 className="font-heading text-h3 text-neutral-900 sm:mb-8 md:mb-10 md:text-h2">
          Our commitment
        </h1>
        <p className="text-neutral-900 md:text-h4">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>
  );
}
