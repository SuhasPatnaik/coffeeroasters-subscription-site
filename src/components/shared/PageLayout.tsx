import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout() {
  return (
    <div className="min-h-[100vh] grid grid-rows-[auto_1fr_auto] px-6 py-6">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
