export default function Quality() {
  return (
    <section className="bg-neutral-900 text-center mt-24 rounded-xl md:rounded-lg px-16 relative md:h-[474px] md:text-left">
      <img
        src="/images/about/mobile/image-quality.jpg"
        srcSet="
          /images/about/mobile/image-quality.jpg 480w,
          /images/about/tablet/image-quality.jpg 640w,
          /images/about/desktop/image-quality.jpg 1024w
        "
        sizes="(max-width: 640px) 480px, 
               (max-width: 1024px) 640px, 
               1024px"
        alt="A white cup of coffee with aesthetic latte art"
        className="absolute rounded-xl md:rounded-lg left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-20 md:translate-x-0 md:-translate-y-1/6"
      />
      <h1 className="font-heading text-h3 mb-8 mt-36 md:mt-24 md:mb-12 md:text-h2">
        Uncompromising Quality
      </h1>
      <p className="opacity-80 mb-16 md:max-w-[50vw] md:text-balance md:text-h4">
        Although we work with growers who pay close attention to all stages of
        harvest and processing, we employ, on our end, a rigorous quality
        control program to avoid over-roasting or baking the coffee dry. Every
        bag of coffee is tagged with a roast date and batch number. Our goal is
        to roast consistent, user-friendly coffee, so that brewing is easy and
        enjoyable.
      </p>
    </section>
  );
}
