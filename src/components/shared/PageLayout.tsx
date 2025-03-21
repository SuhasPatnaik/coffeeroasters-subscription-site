import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout() {
  return (
    <div className="min-h-[100vh] grid grid-rows-[auto_1fr_auto] px-6 py-6 sm:px-16 sm:py-10 md:px-24">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
