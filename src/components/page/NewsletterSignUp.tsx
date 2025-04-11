import { useActionState } from "react";
import Button from "../shared/Button";

const signUpAction = async (previousState, formData) => {
  const firstName = formData.get("firstname").trim();
  const email = formData.get("email").trim();

  if (firstName.length < 3) {
    return {
      status: "error",
      message: "First name must be at least 3 characters.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating a slow db fetch request

  return { status: "success", message: "You are now signed up!" };
};

export default function NewsletterSignUp() {
  const [state, formAction, isPending] = useActionState(signUpAction, null);

  return (
    <form
      action={formAction}
      className="p-6 bg-gray-200 text-neutral-900 w-1/2 mx-auto flex flex-col gap-4 justify-center items-center"
    >
      <h1 className="font-heading text-h2 mb-12">Sign Up for Newsletter</h1>
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
      <Button className="text-neutral-100" disabled={isPending}>
        {isPending ? "Signing up..." : "Sign Up"}
      </Button>
      {state?.message && (
        <p
          className={`text-sm mt-2 ${
            state.status === "error" ? "text-red-600" : "text-green-600"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
