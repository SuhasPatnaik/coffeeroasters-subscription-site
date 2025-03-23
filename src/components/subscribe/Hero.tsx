export default function Hero() {
  return (
    <section
      className="grid place-items-center text-center px-4 bg-no-repeat bg-cover bg-center rounded-xl min-h-[60vh] md:min-h-[65vh]
    bg-[url('/images/plan/mobile/image-hero-blackcup.jpg')]
    sm:bg-[url('/images/plan/tablet/image-hero-blackcup.jpg')]
    md:bg-[url('/images/plan/desktop/image-hero-blackcup.jpg')] sm:text-left sm:justify-items-start sm:pl-12 md:pl-16"
    >
      <div className="flex flex-col gap-8 md:max-w-[35vw]">
        <h1 className="text-h2 font-heading md:text-h1">Create a plan</h1>
        <p className="opacity-80 text-balance md:text-h4">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
    </section>
  );
}
