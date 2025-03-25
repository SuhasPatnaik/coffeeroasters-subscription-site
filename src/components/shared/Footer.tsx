import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mt-auto bg-neutral-900 text-center py-12 md:mt-24 md:flex md:justify-around md:items-center">
      <img
        src="/images/shared/desktop/logo-light.svg"
        alt="Coffee Roasters brand logo"
        className="place-self-center pb-12 md:pb-0"
      />
      <nav className="flex flex-col gap-4 text-neutral-500 text-nav pb-12 md:flex-row md:pb-0 md:items-center md:text-[1rem] md:gap-6">
        <Link to="/" className="uppercase hover:text-neutral-200">
          home
        </Link>
        <Link to="/about" className="uppercase hover:text-neutral-200">
          about us
        </Link>
        <Link to="/subscribe" className="uppercase hover:text-neutral-200">
          create your plan
        </Link>
      </nav>
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
