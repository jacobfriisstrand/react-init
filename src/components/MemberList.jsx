import User from "./User";

export default function MemberList() {
  return (
    <div className="">
      <p className="mb-4">Team members previosly added to projects</p>
      <ul className="divide-y-2 divide-gray-100 border-y-2 border-gray-100">
        <User
          name="John Doe"
          position="Developer"
          image="https://source.unsplash.com/random/?portrait,man"
        />
        <User
          name="Alice Smith"
          position="Designer"
          image="https://source.unsplash.com/random/?portrait,female"
        />
        <User
          name="Bob Johnson"
          position="Manager"
          image="https://source.unsplash.com/random/?portrait,male"
        />
      </ul>
    </div>
  );
}
