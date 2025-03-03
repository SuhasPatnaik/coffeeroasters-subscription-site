export default function Hero() {
  return (
    <div
      className="grid place-items-center text-center px-4 bg-no-repeat bg-cover bg-center rounded-xl min-h-[60vh]"
      style={{
        backgroundImage: `URL("/images/plan/mobile/image-hero-blackcup.jpg")`,
      }}
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-h2 font-heading">Create a plan</h1>
        <p className="opacity-80 text-balance">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
    </div>
  );
}
