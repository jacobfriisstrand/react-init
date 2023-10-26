import PrimaryButton from "./PrimaryButton";

export default function SignupForm() {
  return (
    <div className="flex gap-4 ">
      <label htmlFor="email"></label>
      <input
        className="grow rounded-md border-2 border-gray-100 p-2 placeholder:text-gray-400"
        type="email"
        name="signup"
        id="email"
        placeholder="Enter an email"
      />
      <PrimaryButton />
    </div>
  );
}
