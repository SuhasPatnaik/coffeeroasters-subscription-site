export default function Hero() {
  return (
    <section
      className="grid place-items-center text-center px-4 bg-no-repeat bg-cover bg-center rounded-xl min-h-[65vh] bg-[url('/images/about/mobile/image-hero-whitecup.jpg')] sm:bg-[url('/images/about/tablet/image-hero-whitecup.jpg')]
      md:bg-[url('/images/about/desktop/image-hero-whitecup.jpg')] sm:text-left sm:justify-items-start sm:pl-12 md:pl-16"
    >
      <div className="flex flex-col gap-8 md:max-w-[35vw]">
        <h1 className="text-h2 font-heading">About Us</h1>
        <p className="opacity-80 text-balance">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>
  );
}
