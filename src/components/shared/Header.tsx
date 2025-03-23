import { useEffect, useState } from "react";
import NavMenuModal from "./NavMenuModal";
import { Link } from "react-router";

export default function Header() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 480
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 480);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    setShowNavMenu(false);
  };

  return (
    <header className="flex justify-between">
      <img
        src="/images/shared/desktop/logo.svg"
        alt="Coffee Roasters brand logo"
      />
      {isMobileScreen ? (
        <button className="cursor-pointer" onClick={() => setShowNavMenu(true)}>
          <img src="/images/shared/mobile/icon-hamburger.svg" />
        </button>
      ) : (
        <div className="flex gap-6 text-neutral-500 uppercase font-bold">
          <Link to="/" className="hover:underline hover:text-neutral-900">
            Home
          </Link>
          <Link to="/about" className="hover:underline hover:text-neutral-900">
            About Us
          </Link>
          <Link
            to="/subscribe"
            className="hover:underline hover:text-neutral-900"
          >
            Create your Plan
          </Link>
        </div>
      )}
      {showNavMenu && <NavMenuModal onClose={handleClose} />}
    </header>
  );
}
