import { useNavigate } from "react-router";
import Button from "../shared/Button";

export default function Hero() {
  let navigate = useNavigate();

  return (
    <section
      className="grid place-items-center text-center px-4 bg-no-repeat bg-cover bg-center rounded-xl min-h-[80vh]"
      style={{
        backgroundImage: `URL("/images/home/mobile/image-hero-coffeepress.jpg")`,
      }}
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-h2 font-heading">Great coffee made simple.</h1>
        <p className="opacity-80 text-balance">
          Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Button onClick={() => navigate("/subscribe")}>Create your plan</Button>
      </div>
    </section>
  );
}
