import { useLocation } from "react-router";
import Steps from "../shared/Steps";
import Hero from "../subscribe/Hero";

export default function SubscriptionPage() {
  const location = useLocation();
  const isDarkTheme = location.pathname === "/subscribe";

  return (
    <div className="py-10 flex flex-col gap-24">
      <Hero />
      <Steps isDarkTheme={isDarkTheme} />
    </div>
  );
}
