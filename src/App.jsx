import "./App.css";
import Header from "./components/Header";
import MemberList from "./components/MemberList";

export default function App() {
  return (
    <div className="m-auto max-w-2xl p-5">
      <header className="mb-10 space-y-6 text-center">
        <h1 className="text-3xl font-bold">
          My first React Components (with Tailwind)
        </h1>
        <p>The assigment was to recreate a UI from the Tailwind website.</p>
        <h2 className="text-2xl font-bold">Check out my solution below</h2>
      </header>
      <main>
        <section className="mb-10 space-y-10 rounded-md border-2 p-5">
          <Header />
          <MemberList />
        </section>
        <p className="text-center">
          I used props for the names, positions and images of the team members
          for easy maintainability.
        </p>
      </main>
    </div>
  );
}
