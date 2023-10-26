import "./App.css";
import Header from "./components/Header";
import MemberList from "./components/MemberList";

export default function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>My first React components</h1>
        <p>The assigment was to recreate a UI from the Tailwind website.</p>
        <h2>Check out my solution below</h2>
      </header>
      <main>
        <section className="team__invite">
          <Header />
          <MemberList />
        </section>
        <section className="about">
          <p>I used props for the names, positions and images of the team members for easy maintainability.</p>
        </section>
      </main>
    </div>
  );
}
