import { useEffect } from "react";
import { Link } from "react-router";

export default function NavMenuModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-hidden">
      <div className="relative bg-linear-to-b from-white via-white to-transparent w-full min-h-[100vh] px-6 py-6">
        <div className="flex justify-between">
          <img
            src="/images/shared/desktop/logo.svg"
            alt="Coffee Roasters brand logo"
          />
          <button className="cursor-pointer" onClick={onClose}>
            <img src="/images/shared/mobile/icon-close.svg" />
          </button>
        </div>

        <div className="relative flex flex-col items-center mt-20 gap-8 font-heading text-h4 text-neutral-900">
          <Link to="/" className="hover:text-h3" onClick={onClose}>
            Home
          </Link>
          <Link to="/about" className="hover:text-h3" onClick={onClose}>
            About Us
          </Link>
          <Link to="/subscribe" className="hover:text-h3" onClick={onClose}>
            Create your Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
