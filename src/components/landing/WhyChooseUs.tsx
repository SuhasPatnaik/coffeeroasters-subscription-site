import { reasonsList } from "../../utils/data";

export default function WhyChooseUs() {
  return (
    <section className="grid place-items-center text-center">
      <div className="bg-neutral-900 pt-16 rounded-t-lg w-full text-center">
        <h1 className="text-h4 font-heading md:text-h3 md:mb-8">
          Why choose us?
        </h1>
        <p className="text-balance pb-8 md:w-[50vw] md:mx-auto md:pb-16">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="relative w-full lg:px-24">
        <div className="absolute top-0 left-0 right-0 h-[50%] bg-gray-800 lg:h-[55%]"></div>
        <div className="relative pt-10 px-6 z-10 lg:flex lg:flex-row lg:gap-12">
          {reasonsList.map((reason, index) => (
            <div
              key={index}
              className="bg-primary-accent flex flex-col gap-8 pt-16 pb-12 rounded-lg mb-6 px-12 group"
            >
              <img
                src={reason.imgUrl}
                className="self-center group-hover:animate-wiggle"
              />
              <h2 className="text-h4 font-heading">{reason.name}</h2>
              <p className="text-balance">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
