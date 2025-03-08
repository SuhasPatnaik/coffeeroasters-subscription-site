import { useState } from "react";
import NavMenuModal from "./NavMenuModal";

export default function Header() {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleClose = () => {
    setShowNavMenu(false);
  };

  return (
    <header className="flex justify-between">
      <img
        src="/images/shared/desktop/logo.svg"
        alt="Coffee Roasters brand logo"
      />
      <button className="cursor-pointer" onClick={() => setShowNavMenu(true)}>
        <img src="/images/shared/mobile/icon-hamburger.svg" />
      </button>
      {showNavMenu && <NavMenuModal onClose={handleClose} />}
    </header>
  );
}
