import User from "./User";

export default function MemberList() {
  return (
    <div className="member__container">
      <p className="memberlist__header">Team members previosly added to projects</p>
      <div className="member__list">
        <User name="John Doe" position="Developer" image="https://source.unsplash.com/random/?portrait,male" />
        <User name="Alice Smith" position="Designer" image="https://source.unsplash.com/random/?portrait,female" />
        <User name="Bob Johnson" position="Manager" image="https://source.unsplash.com/random/?portrait,unicorn" />
      </div>
    </div>
  );
}
