import { reasonsList } from "../../utils/constants";

export default function WhyChooseUs() {
  return (
    <section className="grid place-items-center text-center">
      {/* Main container */}
      <div className="bg-neutral-900 pt-16 rounded-t-lg w-full">
        <h1 className="text-h4 font-heading">Why choose us?</h1>
        <p className="text-balance pb-8">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="relative w-full">
        <div className="absolute top-0 left-0 right-0 h-[50%] bg-gray-800 lg:h-[55%]"></div>

        <div className="relative pt-10 px-6 z-10 lg:flex lg:flex-row lg:gap-8">
          {reasonsList.map((reason, index) => (
            <div
              key={index}
              className="bg-primary-accent flex flex-col gap-8 pt-16 pb-12 rounded-lg mb-6 px-12"
            >
              <img src={reason.imgUrl} className="self-center" />
              <h2 className="text-h4 font-heading">{reason.name}</h2>
              <p className="text-balance">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
