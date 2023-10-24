import PrimaryButton from "./PrimaryButton";

export default function SignupForm() {
  return (
    <div className="signup__form">
      <label htmlFor="email"></label>
      <input type="email" name="signup" id="email" placeholder="Enter an email" />
      <PrimaryButton />
    </div>
  );
}
