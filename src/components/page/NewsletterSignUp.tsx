import Button from "../shared/Button";

export default function NewsletterSignUp() {
  return (
    <form className="p-6 bg-gray-200 text-neutral-900 w-1/2 mx-auto flex flex-col gap-4 justify-center items-center">
      <div>
        <label htmlFor="firstname">First Name: </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          className="bg-gray-300 border-1 border-gray-700"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-300 border-1 border-gray-700"
          required
        />
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" className="text-neutral-900" />
        <p className="inline-block">
          I agree to receive promotional offers too
        </p>
      </div>
      <Button className="text-neutral-100">Sign Up</Button>
    </form>
  );
}
