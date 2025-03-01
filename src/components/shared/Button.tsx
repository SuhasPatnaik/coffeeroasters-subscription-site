export default function Button({ children }) {
  return (
    <button className="font-heading bg-primary-accent text-h4 px-8 py-4 rounded-lg self-center cursor-pointer">
      {children}
    </button>
  );
}
