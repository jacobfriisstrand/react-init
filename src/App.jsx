import "./App.css";
import Header from "./components/Header";
import MemberList from "./components/MemberList";

export default function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>My first React components</h1>
        <p>The assigment was to recreate the following UI.</p>
        <img src="src/assets/team-member-ui.png" alt="UI Screenshot" />
        <p>The components can be divided into what is going to be reused in this UI, and potentially in other parts of a larger project.</p>
        <img src="src/assets/component-overview.png" alt="Component overview" />
        <h2>Check out my solution below</h2>
      </header>
      <main>
        <section className="team__invite">
          <Header />
          <MemberList />
        </section>
        <section className="about">
          <p>I used props for the names and positions of the team members for easy maintainability.</p>
        </section>
      </main>
    </div>
  );
}
