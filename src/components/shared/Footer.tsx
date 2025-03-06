import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mt-auto bg-neutral-900 text-center py-12">
      <img
        src="/images/shared/desktop/logo-light.svg"
        alt="Coffee Roasters brand logo"
        className="place-self-center pb-12"
      />
      <div className="flex flex-col gap-4 text-neutral-500 text-nav pb-12">
        <button className="cursor-pointer hover:text-neutral-200">
          <Link to="/" className="uppercase">
            home
          </Link>
        </button>
        <button className="cursor-pointer hover:text-neutral-200">
          <Link to="/about" className="uppercase">
            about us
          </Link>
        </button>
        <button className="cursor-pointer hover:text-neutral-200">
          <Link to="/subscribe" className="uppercase">
            create your plan
          </Link>
        </button>
      </div>
      <div className="flex gap-6 justify-center">
        <img
          src="/images/shared/desktop/icon-facebook.svg"
          alt="Facebook profile url icon"
        />
        <img
          src="/images/shared/desktop/icon-twitter.svg"
          alt="Twitter profile url icon"
        />
        <img
          src="/images/shared/desktop/icon-instagram.svg"
          alt="Instagram profile url icon"
        />
      </div>
    </footer>
  );
}
