export default function Header() {
  return (
    <div className="flex justify-between">
      <img
        src="/images/shared/desktop/logo.svg"
        alt="Coffeeh Roasters brand logo"
      />
      <button>
        <img src="/images/shared/mobile/icon-hamburger.svg" />
      </button>
    </div>
  );
}
