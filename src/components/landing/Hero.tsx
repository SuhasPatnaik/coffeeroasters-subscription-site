import { useNavigate } from "react-router";
import Button from "../shared/Button";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="grid place-items-center text-center px-4 bg-no-repeat bg-cover bg-center rounded-xl min-h-[80vh] md:justify-start md:text-left md:px-32
    bg-[url('/images/home/mobile/image-hero-coffeepress.jpg')] 
    sm:bg-[url('/images/home/tablet/image-hero-coffeepress.jpg')] 
    md:bg-[url('/images/home/desktop/image-hero-coffeepress.jpg')]"
    >
      <div className="flex flex-col gap-8 md:max-w-[40vw] md:gap-12">
        <h1 className="text-h2 font-heading md:text-h1 md:text-balance">
          Great coffee made simple.
        </h1>
        <p className="opacity-80 text-balance md:text-h4">
          Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Button
          onClick={() => navigate("/subscribe")}
          className="md:self-start"
        >
          Create your plan
        </Button>
      </div>
    </section>
  );
}
