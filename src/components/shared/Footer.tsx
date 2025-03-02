export default function Footer() {
  return (
    <div className="mt-auto bg-neutral-900 text-center py-12">
      <img
        src="/images/shared/desktop/logo-light.svg"
        alt="Coffee Roasters brand logo"
        className="place-self-center pb-12"
      />
      <div className="flex flex-col gap-4 uppercase text-neutral-500 text-nav pb-12">
        <p>home</p>
        <p>about us</p>
        <p>create your plan</p>
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
    </div>
  );
}
